"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Edit } from "lucide-react";
import MediaUpload from "../components/MediaUpload";
import { deleteFile } from "@/lib/storage";

const emptyForm = {
  slug: "", category: "Student Program", audience: "students", title: "",
  tagline: "", description: "", modules: "", duration: "", format: "", image_url: "",
};

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ ...emptyForm });

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    setLoading(true);
    const { data, error } = await supabase.from("courses").select("*").order("created_at", { ascending: false });
    if (!error && data) setCourses(data);
    setLoading(false);
  }

  function openAdd() {
    setEditingId(null);
    setFormData({ ...emptyForm });
    setShowForm(true);
  }

  function handleEdit(course: any) {
    setFormData({
      slug: course.slug ?? "",
      category: course.category ?? "",
      audience: course.audience ?? "students",
      title: course.title ?? "",
      tagline: course.tagline ?? "",
      description: course.description ?? "",
      modules: course.modules ?? "",
      duration: course.duration ?? "",
      format: course.format ?? "",
      image_url: course.image_url ?? "",
    });
    setEditingId(course.id);
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
    if (!formData.image_url) {
      alert("Please upload a course image.");
      return;
    }
    const { error } = editingId
      ? await supabase.from("courses").update(formData).eq("id", editingId)
      : await supabase.from("courses").insert([formData]);
    if (!error) {
      setShowForm(false);
      setEditingId(null);
      setFormData({ ...emptyForm });
      fetchCourses();
    } else {
      alert("Error saving course: " + error.message);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure?")) return;
    const course = courses.find((c) => c.id === id);
    // Collect child content files before the DB cascade removes their rows.
    const { data: childContents } = await supabase
      .from("course_contents")
      .select("media_url")
      .eq("course_id", id);

    const { error } = await supabase.from("courses").delete().eq("id", id);
    if (!error) {
      await deleteFile(course?.image_url);
      await Promise.all(
        (childContents ?? []).map((c) => deleteFile(c.media_url as string))
      );
      fetchCourses();
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Courses</h1>
        <button onClick={openAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
          <Plus className="w-5 h-5 mr-2" /> Add Course
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">{editingId ? "Edit Course" : "Add New Course"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input required className="w-full border rounded-lg p-2" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input required className="w-full border rounded-lg p-2" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input required className="w-full border rounded-lg p-2" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Audience</label>
                <select className="w-full border rounded-lg p-2" value={formData.audience} onChange={e => setFormData({...formData, audience: e.target.value})}>
                  <option value="students">Students</option>
                  <option value="professionals">Professionals</option>
                </select>
              </div>
              <div>
                <MediaUpload
                  label="Course Image"
                  folder="courses"
                  value={formData.image_url}
                  onChange={(url) => setFormData({ ...formData, image_url: url })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Format</label>
                <input className="w-full border rounded-lg p-2" value={formData.format} onChange={e => setFormData({...formData, format: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="w-full border rounded-lg p-2" rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">{editingId ? "Update Course" : "Save Course"}</button>
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
                <th className="p-4 font-medium text-gray-600">Category</th>
                <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {courses.map(course => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800 flex items-center gap-3">
                    {course.image_url && <img src={course.image_url} alt="" className="w-10 h-10 rounded object-cover" />}
                    {course.title}
                  </td>
                  <td className="p-4 text-gray-600">{course.category}</td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleEdit(course)} className="text-blue-500 hover:text-blue-700 p-2"><Edit className="w-5 h-5" /></button>
                    <button onClick={() => handleDelete(course.id)} className="text-red-500 hover:text-red-700 p-2"><Trash2 className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))}
              {courses.length === 0 && <tr><td colSpan={3} className="p-8 text-center text-gray-500">No courses found.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
