"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  BookOpen, 
  MessageSquare, 
  FileText,
  Video,
  Settings,
  LogOut
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login");
      } else if (session && pathname === "/admin/login") {
        router.push("/admin");
      }
      setLoading(false);
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        router.push("/admin/login");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading...</div>;
  }

  // If on login page, don't show sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Sliders", href: "/admin/sliders", icon: ImageIcon },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Course Content", href: "/admin/course-contents", icon: Video },
    { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
    { name: "Blogs", href: "/admin/blogs", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <span className="text-xl font-bold text-gray-800">Ayatech Admin</span>
          </div>
          <nav className="overflow-y-auto py-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-6 py-3 transition-colors ${
                        isActive ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
