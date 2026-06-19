"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getSiteSettings } from "@/lib/queries";
import { deleteFile } from "@/lib/storage";
import MediaUpload from "../components/MediaUpload";

const SLOT_GROUPS: { group: string; items: { key: string; label: string }[] }[] = [
  {
    group: "Program Finder Cards",
    items: [
      { key: "home_card_parent", label: "Parent card" },
      { key: "home_card_learner", label: "Learner card (featured)" },
      { key: "home_card_professional", label: "Professional card" },
    ],
  },
  {
    group: "Closing CTA",
    items: [{ key: "home_cta", label: "CTA image (student / graduate)" }],
  },
  {
    group: "Pillars Showcase",
    items: [
      { key: "home_showcase_1", label: "Showcase 1 (Coding session)" },
      { key: "home_showcase_2", label: "Showcase 2 (Robotics lab)" },
      { key: "home_showcase_3", label: "Showcase 3 (AI workshop)" },
      { key: "home_showcase_4", label: "Showcase 4 (Mentor session)" },
    ],
  },
];

export default function SettingsAdmin() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  async function saveSetting(key: string, url: string) {
    const prev = settings[key];
    if (prev && prev !== url) await deleteFile(prev);
    const { error } = await supabase
      .from("site_settings")
      .upsert({ key, value: url, updated_at: new Date().toISOString() }, { onConflict: "key" });
    if (error) {
      alert("Error saving image: " + error.message);
      return;
    }
    setSettings((s) => ({ ...s, [key]: url }));
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      setMessage({ text: error.message, type: "error" });
    } else {
      setMessage({ text: "Password updated successfully!", type: "success" });
      setNewPassword("");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Homepage Images */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold mb-1 text-gray-700">Homepage Images</h2>
        <p className="text-sm text-gray-500 mb-5">
          Upload images for the homepage. Empty slots fall back to the default grey placeholders.
        </p>

        <div className="space-y-6">
          {SLOT_GROUPS.map((g) => (
            <div key={g.group}>
              <h3 className="text-sm font-semibold text-gray-600 mb-3">{g.group}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {g.items.map((slot) => (
                  <MediaUpload
                    key={slot.key}
                    label={slot.label}
                    folder="homepage"
                    value={settings[slot.key] ?? ""}
                    onChange={(url) => saveSetting(slot.key, url)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Change Password</h2>

        {message && (
          <div className={`p-3 rounded-lg text-sm mb-4 ${message.type === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              required
              minLength={6}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
