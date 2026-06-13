import Link from "next/link";
import { ImageIcon, BookOpen, MessageSquare, FileText, Video } from "lucide-react";

export default function AdminDashboard() {
  const cards = [
    { title: "Manage Sliders", href: "/admin/sliders", icon: ImageIcon, color: "text-blue-500", bg: "bg-blue-100" },
    { title: "Manage Courses", href: "/admin/courses", icon: BookOpen, color: "text-green-500", bg: "bg-green-100" },
    { title: "Course Contents", href: "/admin/course-contents", icon: Video, color: "text-purple-500", bg: "bg-purple-100" },
    { title: "Testimonials", href: "/admin/testimonials", icon: MessageSquare, color: "text-orange-500", bg: "bg-orange-100" },
    { title: "Manage Blogs", href: "/admin/blogs", icon: FileText, color: "text-red-500", bg: "bg-red-100" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.title} href={card.href} className="block">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${card.bg}`}>
                    <Icon className={`w-8 h-8 ${card.color}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">Add, edit, or remove entries</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
