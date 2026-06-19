import { supabase } from "@/lib/supabase";

/**
 * Client-side helpers for the public `public-images` Storage bucket.
 *
 * The admin forms store only a URL string in their text columns — these helpers
 * push the actual file into Storage and hand back the public URL, and remove the
 * file again when its record is deleted. Uploads/deletes require an authenticated
 * admin session (enforced by the bucket's `Auth Upload/Delete` policies).
 */

const BUCKET = "public-images";
const PUBLIC_PREFIX = `/storage/v1/object/public/${BUCKET}/`;

/**
 * Uploads a file to the bucket and returns its public URL.
 * No size validation — the only real cap is the project's global upload limit.
 */
export async function uploadFile(file: File, folder: string): Promise<string> {
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "";
  const path = `${folder}/${crypto.randomUUID()}${ext ? `.${ext}` : ""}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;

  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}

/**
 * Deletes a previously-uploaded file given its public URL.
 * No-op for external URLs (e.g. YouTube/Vimeo links). Best-effort: never throws,
 * so it can't block the surrounding record deletion.
 */
export async function deleteFile(url: string | null | undefined): Promise<void> {
  if (!url) return;
  const idx = url.indexOf(PUBLIC_PREFIX);
  if (idx === -1) return; // not a file we stored

  const path = decodeURIComponent(
    url.slice(idx + PUBLIC_PREFIX.length).split("?")[0]
  );
  if (!path) return;

  try {
    await supabase.storage.from(BUCKET).remove([path]);
  } catch {
    /* best-effort cleanup */
  }
}
