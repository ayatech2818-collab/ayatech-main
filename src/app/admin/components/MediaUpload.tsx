"use client";

import { useRef, useState } from "react";
import { UploadCloud, X, Film, FileText, Link2, Loader2 } from "lucide-react";
import { uploadFile } from "@/lib/storage";

type Props = {
  /** Current stored URL (lives in the form's existing `formData.<col>` string). */
  value: string;
  onChange: (url: string) => void;
  /** Storage subfolder, e.g. "courses", "sliders". */
  folder: string;
  /** File input accept attribute. Defaults to images only. */
  accept?: string;
  /** When true, also show an "or paste a link" field (used for the video field). */
  allowUrl?: boolean;
  label?: string;
};

const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i;

export default function MediaUpload({
  value,
  onChange,
  folder,
  accept = "image/*",
  allowUrl = false,
  label,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadFile(file, folder);
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  const isImage = !!value && IMAGE_RE.test(value);

  return (
    <div>
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}

      {/* Preview */}
      {value && (
        <div className="mb-2 flex items-center gap-3">
          {isImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="w-20 h-14 rounded object-cover border" />
          ) : (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-600 hover:underline truncate max-w-xs"
            >
              {accept.includes("video") ? <Film className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              <span className="truncate">{value}</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-gray-400 hover:text-red-600 p-1"
            aria-label="Remove"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Upload button */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="flex items-center gap-2 border border-dashed rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:border-blue-400 transition disabled:opacity-60"
      >
        {uploading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Uploading…
          </>
        ) : (
          <>
            <UploadCloud className="w-4 h-4" /> {value ? "Replace file" : "Upload file"}
          </>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFile}
        className="hidden"
      />

      {/* Optional "paste a link" (videos) */}
      {allowUrl && (
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <Link2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="or paste a link (YouTube / Vimeo / …)"
              className="w-full border rounded-lg p-2 text-sm"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        </div>
      )}

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
