"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Edit } from "lucide-react";
import MediaUpload from "../components/MediaUpload";
import { deleteFile } from "@/lib/storage";

const emptyForm = { author_name: "", author_role: "", content: "", rating: 5, avatar_url: "" };

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ ...emptyForm });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    setLoading(true);
    const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    if (!error && data) setTestimonials(data);
    setLoading(false);
  }

  function openAdd() {
    setEditingId(null);
    setFormData({ ...emptyForm });
    setShowForm(true);
  }

  function handleEdit(testimonial: any) {
    setFormData({
      author_name: testimonial.author_name ?? "",
      author_role: testimonial.author_role ?? "",
      content: testimonial.content ?? "",
      rating: testimonial.rating ?? 5,
      avatar_url: testimonial.avatar_url ?? "",
    });
    setEditingId(testimonial.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeForm() {
    setEditingId(null);
    setFormData({ ...emptyForm });
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = editingId
      ? await supabase.from("testimonials").update(formData).eq("id", editingId)
      : await supabase.from("testimonials").insert([formData]);
    if (!error) {
      setShowForm(false);
      setEditingId(null);
      setFormData({ ...emptyForm });
      fetchTestimonials();
    } else {
      alert("Error saving testimonial: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;
    const testimonial = testimonials.find((t) => t.id === id);
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (!error) {
      await deleteFile(testimonial?.avatar_url);
      fetchTestimonials();
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Testimonials</h1>
        <button onClick={openAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus className="w-5 h-5 mr-2" /> Add Testimonial
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Author Name</label>
                <input required className="w-full border rounded-lg p-2" value={formData.author_name} onChange={e => setFormData({...formData, author_name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Author Role/Company</label>
                <input className="w-full border rounded-lg p-2" value={formData.author_role} onChange={e => setFormData({...formData, author_role: e.target.value})} />
              </div>
              <div>
                <MediaUpload
                  label="Avatar"
                  folder="testimonials"
                  value={formData.avatar_url}
                  onChange={(url) => setFormData({ ...formData, avatar_url: url })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                <input required type="number" min="1" max="5" className="w-full border rounded-lg p-2" value={formData.rating} onChange={e => setFormData({...formData, rating: parseInt(e.target.value) || 0})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Testimonial Content</label>
                <textarea required className="w-full border rounded-lg p-2" rows={4} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">{editingId ? "Update Testimonial" : "Save Testimonial"}</button>
              <button type="button" onClick={closeForm} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-medium text-gray-600">Author</th>
                <th className="p-4 font-medium text-gray-600">Role</th>
                <th className="p-4 font-medium text-gray-600">Rating</th>
                <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {testimonials.map(testimonial => (
                <tr key={testimonial.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800 flex items-center gap-3">
                    {testimonial.avatar_url && <img src={testimonial.avatar_url} alt="" className="w-8 h-8 rounded-full object-cover" />}
                    {testimonial.author_name}
                  </td>
                  <td className="p-4 text-gray-600">{testimonial.author_role}</td>
                  <td className="p-4 text-gray-600">{testimonial.rating} / 5</td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleEdit(testimonial)} className="text-blue-500 hover:text-blue-700 p-2"><Edit className="w-5 h-5" /></button>
                    <button onClick={() => handleDelete(testimonial.id)} className="text-red-500 hover:text-red-700 p-2"><Trash2 className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))}
              {testimonials.length === 0 && <tr><td colSpan={4} className="p-8 text-center text-gray-500">No testimonials found.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
