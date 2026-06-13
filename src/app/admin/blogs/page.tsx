"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Edit, PlaySquare, GraduationCap, Trophy } from "lucide-react";

type BlogCategory = "YouTube Videos" | "Student Work" | "Success Stories";

const emptyForm = {
  title: "", slug: "", excerpt: "", content: "", author_name: "", image_url: "", category: "Success Stories" as BlogCategory,
};

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<BlogCategory>("Success Stories");
  const [formData, setFormData] = useState({ ...emptyForm });

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    setLoading(true);
    const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    if (!error && data) setBlogs(data);
    setLoading(false);
  }

  function openAdd() {
    setEditingId(null);
    setFormData({ ...emptyForm, category: activeTab });
    setShowForm(true);
  }

  function handleEdit(blog: any) {
    setFormData({
      title: blog.title ?? "",
      slug: blog.slug ?? "",
      excerpt: blog.excerpt ?? "",
      content: blog.content ?? "",
      author_name: blog.author_name ?? "",
      image_url: blog.image_url ?? "",
      category: (blog.category ?? "Success Stories") as BlogCategory,
    });
    setEditingId(blog.id);
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
      ? await supabase.from("blogs").update(formData).eq("id", editingId)
      : await supabase.from("blogs").insert([formData]);
    if (!error) {
      setShowForm(false);
      setEditingId(null);
      setFormData({ ...emptyForm });
      fetchBlogs();
    } else {
      alert("Error saving blog: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (!error) fetchBlogs();
  }

  const filteredBlogs = blogs.filter(b => b.category === activeTab || (!b.category && activeTab === "Success Stories"));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Blog Content</h1>
        <button onClick={openAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus className="w-5 h-5 mr-2" /> Add Post
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">{editingId ? "Edit Content" : "Add New Content"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Category</label>
                <select required className="w-full border rounded-lg p-2" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as BlogCategory})}>
                  <option value="Success Stories">Success Stories</option>
                  <option value="Student Work">Student Work</option>
                  <option value="YouTube Videos">YouTube Videos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input required className="w-full border rounded-lg p-2" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input required className="w-full border rounded-lg p-2" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Author Name</label>
                <input required className="w-full border rounded-lg p-2" value={formData.author_name} onChange={e => setFormData({...formData, author_name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cover Image / Thumbnail URL</label>
                <input required className="w-full border rounded-lg p-2" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <textarea className="w-full border rounded-lg p-2" rows={2} value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Content (Markdown/HTML or YouTube Embed Link)</label>
                <textarea required className="w-full border rounded-lg p-2" rows={6} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">{editingId ? "Update Content" : "Publish Content"}</button>
              <button type="button" onClick={closeForm} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 border-b">
        {[
          { name: "Success Stories", icon: Trophy },
          { name: "Student Work", icon: GraduationCap },
          { name: "YouTube Videos", icon: PlaySquare }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name as BlogCategory)}
              className={`flex items-center px-4 py-3 font-medium text-sm transition-colors border-b-2 ${
                isActive ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {tab.name}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-medium text-gray-600">Post</th>
                <th className="p-4 font-medium text-gray-600">Author</th>
                <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredBlogs.map(blog => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800 flex items-center gap-3">
                    {blog.image_url && <img src={blog.image_url} alt="" className="w-16 h-10 rounded object-cover" />}
                    {blog.title}
                  </td>
                  <td className="p-4 text-gray-600">{blog.author_name}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleEdit(blog)} className="text-blue-500 hover:text-blue-700 p-2"><Edit className="w-5 h-5" /></button>
                    <button onClick={() => handleDelete(blog.id)} className="text-red-500 hover:text-red-700 p-2"><Trash2 className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))}
              {filteredBlogs.length === 0 && <tr><td colSpan={3} className="p-8 text-center text-gray-500">No {activeTab.toLowerCase()} found.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
