"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Edit } from "lucide-react";

const emptyForm = {
  course_id: "", title: "", description: "", content_type: "video", media_url: "", order_index: 0,
};

export default function CourseContentsAdmin() {
  const [contents, setContents] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ ...emptyForm });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    // Fetch courses for the dropdown
    const { data: coursesData } = await supabase.from("courses").select("id, title").order("title");
    if (coursesData) setCourses(coursesData);

    // Fetch course contents with the related course title
    const { data: contentsData, error } = await supabase
      .from("course_contents")
      .select(`
        *,
        courses (
          title
        )
      `)
      .order("order_index", { ascending: true });
      
    if (!error && contentsData) setContents(contentsData);
    setLoading(false);
  }

  function openAdd() {
    setEditingId(null);
    setFormData({ ...emptyForm });
    setShowForm(true);
  }

  function handleEdit(content: any) {
    setFormData({
      course_id: content.course_id ?? "",
      title: content.title ?? "",
      description: content.description ?? "",
      content_type: content.content_type ?? "video",
      media_url: content.media_url ?? "",
      order_index: content.order_index ?? 0,
    });
    setEditingId(content.id);
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
    if (!formData.course_id) {
      alert("Please select a course");
      return;
    }

    const { error } = editingId
      ? await supabase.from("course_contents").update(formData).eq("id", editingId)
      : await supabase.from("course_contents").insert([formData]);
    if (!error) {
      setShowForm(false);
      setEditingId(null);
      setFormData({ ...emptyForm });
      fetchData();
    } else {
      alert("Error saving content: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;
    const { error } = await supabase.from("course_contents").delete().eq("id", id);
    if (!error) fetchData();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Course Contents</h1>
        <button onClick={openAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus className="w-5 h-5 mr-2" /> Add Content
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">{editingId ? "Edit Course Content" : "Add New Course Content"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium mb-1">Select Course</label>
                <select required className="w-full border rounded-lg p-2" value={formData.course_id} onChange={e => setFormData({...formData, course_id: e.target.value})}>
                  <option value="">-- Choose a Course --</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium mb-1">Content Title</label>
                <input required className="w-full border rounded-lg p-2" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium mb-1">Content Type</label>
                <select required className="w-full border rounded-lg p-2" value={formData.content_type} onChange={e => setFormData({...formData, content_type: e.target.value})}>
                  <option value="video">Video</option>
                  <option value="document">Document / PDF</option>
                  <option value="quiz">Quiz / Assessment</option>
                  <option value="interactive">Interactive Lab</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium mb-1">Media URL (Video Link/File Link)</label>
                <input className="w-full border rounded-lg p-2" value={formData.media_url} onChange={e => setFormData({...formData, media_url: e.target.value})} />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium mb-1">Order / Module Number</label>
                <input type="number" className="w-full border rounded-lg p-2" value={formData.order_index} onChange={e => setFormData({...formData, order_index: parseInt(e.target.value)})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Description / Notes</label>
                <textarea className="w-full border rounded-lg p-2" rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">{editingId ? "Update Content" : "Save Content"}</button>
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
                <th className="p-4 font-medium text-gray-600">Course</th>
                <th className="p-4 font-medium text-gray-600">Content Title</th>
                <th className="p-4 font-medium text-gray-600">Type</th>
                <th className="p-4 font-medium text-gray-600">Order</th>
                <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {contents.map(content => (
                <tr key={content.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{content.courses?.title || "Unknown Course"}</td>
                  <td className="p-4 text-gray-800">{content.title}</td>
                  <td className="p-4 text-gray-600 capitalize">{content.content_type}</td>
                  <td className="p-4 text-gray-600">Module {content.order_index}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleEdit(content)} className="text-blue-500 hover:text-blue-700 p-2"><Edit className="w-5 h-5" /></button>
                    <button onClick={() => handleDelete(content.id)} className="text-red-500 hover:text-red-700 p-2"><Trash2 className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))}
              {contents.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-gray-500">No course contents found. Add a course first, then add content here.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
