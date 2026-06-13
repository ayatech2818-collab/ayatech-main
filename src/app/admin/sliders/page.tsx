"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Edit } from "lucide-react";

type Slider = {
  id: string;
  title: string;
  image_url: string;
  link_url: string;
  order_index: number;
  is_active: boolean;
};

const emptyForm = { title: "", image_url: "", link_url: "", order_index: 0, is_active: true };

export default function SlidersAdmin() {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ ...emptyForm });

  useEffect(() => {
    fetchSliders();
  }, []);

  async function fetchSliders() {
    setLoading(true);
    const { data, error } = await supabase.from("sliders").select("*").order("order_index", { ascending: true });
    if (!error && data) setSliders(data);
    setLoading(false);
  }

  function openAdd() {
    setEditingId(null);
    setFormData({ ...emptyForm });
    setShowForm(true);
  }

  function handleEdit(slider: Slider) {
    setFormData({
      title: slider.title,
      image_url: slider.image_url,
      link_url: slider.link_url,
      order_index: slider.order_index,
      is_active: slider.is_active,
    });
    setEditingId(slider.id);
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
      ? await supabase.from("sliders").update(formData).eq("id", editingId)
      : await supabase.from("sliders").insert([formData]);
    if (!error) {
      setShowForm(false);
      setEditingId(null);
      setFormData({ ...emptyForm });
      fetchSliders();
    } else {
      alert("Error saving slider: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;
    const { error } = await supabase.from("sliders").delete().eq("id", id);
    if (!error) fetchSliders();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Sliders</h1>
        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Slider
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">{editingId ? "Edit Slider" : "Add New Slider"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input required type="text" className="w-full border rounded-lg p-2" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input required type="text" className="w-full border rounded-lg p-2" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link URL (Optional)</label>
                <input type="text" className="w-full border rounded-lg p-2" value={formData.link_url} onChange={e => setFormData({...formData, link_url: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Index</label>
                <input type="number" className="w-full border rounded-lg p-2" value={formData.order_index} onChange={e => setFormData({...formData, order_index: parseInt(e.target.value)})} />
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} className="mr-2" />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Is Active</label>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">{editingId ? "Update Slider" : "Save Slider"}</button>
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
                <th className="p-4 font-medium text-gray-600">Image</th>
                <th className="p-4 font-medium text-gray-600">Title</th>
                <th className="p-4 font-medium text-gray-600">Order</th>
                <th className="p-4 font-medium text-gray-600">Status</th>
                <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {sliders.map(slider => (
                <tr key={slider.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <img src={slider.image_url} alt={slider.title} className="w-20 h-12 object-cover rounded" />
                  </td>
                  <td className="p-4 font-medium text-gray-800">{slider.title}</td>
                  <td className="p-4 text-gray-600">{slider.order_index}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${slider.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {slider.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleEdit(slider)} className="text-blue-500 hover:text-blue-700 p-2">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDelete(slider.id)} className="text-red-500 hover:text-red-700 p-2">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {sliders.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">No sliders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
