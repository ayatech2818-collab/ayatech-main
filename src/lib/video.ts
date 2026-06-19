/**
 * Resolves a stored media URL into an embeddable video source.
 *
 * - Uploaded files (Supabase Storage) → played with a native <video> element.
 * - YouTube / Vimeo links → converted to their iframe-embed URL.
 * - Anything else → "other" (the UI falls back to a plain link).
 */

export type VideoEmbed = {
  kind: "file" | "youtube" | "vimeo" | "other";
  embedUrl: string;
};

const FILE_RE = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;

function youtubeId(url: string): string | null {
  const m =
    url.match(/youtu\.be\/([\w-]{6,})/) ||
    url.match(/youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)([\w-]{6,})/);
  return m ? m[1] : null;
}

function vimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

export function getVideoEmbed(url: string): VideoEmbed {
  if (!url) return { kind: "other", embedUrl: "" };

  if (FILE_RE.test(url)) return { kind: "file", embedUrl: url };

  const yt = youtubeId(url);
  if (yt) return { kind: "youtube", embedUrl: `https://www.youtube.com/embed/${yt}` };

  const vm = vimeoId(url);
  if (vm) return { kind: "vimeo", embedUrl: `https://player.vimeo.com/video/${vm}` };

  return { kind: "other", embedUrl: url };
}
