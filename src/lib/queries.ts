import { supabase } from "@/lib/supabase";
import { type Course } from "@/data/courses";

/**
 * Central data-access layer for the PUBLIC (viewer-facing) pages.
 *
 * Every function reads from Supabase and returns objects in the camelCase
 * shape the existing UI components already expect, so the styled JSX barely
 * changes — only the data *source* does. These run in both Server Components
 * and Client Components (they only use the shared `supabase` client).
 */

/* ────────────────────────────── Courses ────────────────────────────── */

export type UICourse = Course & {
  id: string;
  imageUrl: string | null;
};

function mapCourse(row: Record<string, unknown>): UICourse {
  return {
    id: String(row.id ?? row.slug ?? ""),
    slug: String(row.slug ?? ""),
    category: String(row.category ?? ""),
    audience: (row.audience === "professionals" ? "professionals" : "students"),
    imgLabel: String(row.title ?? ""),
    imgAccent: String(row.img_accent ?? "#1C2A57"),
    imageUrl: (row.image_url as string) || null,
    title: String(row.title ?? ""),
    tagline: String(row.tagline ?? ""),
    description: String(row.description ?? ""),
    modules: String(row.modules ?? ""),
    duration: String(row.duration ?? ""),
    format: String(row.format ?? ""),
    stars: typeof row.stars === "number" ? row.stars : 5,
    reviewCount: String(row.review_count ?? ""),
  };
}

export async function getCourses(): Promise<UICourse[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map(mapCourse);
}

export async function getCourseBySlug(slug: string): Promise<UICourse | null> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return null;
  return mapCourse(data);
}

/* ────────────────────────── Course contents ─────────────────────────── */

export type UICourseContent = {
  id: string;
  title: string;
  description: string;
  contentType: string;
  mediaUrl: string;
  orderIndex: number;
};

export async function getCourseContents(courseId: string): Promise<UICourseContent[]> {
  // Static fallback courses use the slug as their id and have no DB contents.
  if (!courseId) return [];
  const { data, error } = await supabase
    .from("course_contents")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });

  if (error || !data) return [];
  return data.map((row: Record<string, unknown>) => ({
    id: String(row.id ?? ""),
    title: String(row.title ?? ""),
    description: String(row.description ?? ""),
    contentType: String(row.content_type ?? "video"),
    mediaUrl: String(row.media_url ?? ""),
    orderIndex: typeof row.order_index === "number" ? row.order_index : 0,
  }));
}

/* ─────────────────────────────── Blogs ──────────────────────────────── */

export type UIBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorName: string;
  imageUrl: string;
  category: string;
};

export async function getBlogs(): Promise<UIBlog[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map((row: Record<string, unknown>) => ({
    id: String(row.id ?? ""),
    title: String(row.title ?? ""),
    slug: String(row.slug ?? ""),
    excerpt: String(row.excerpt ?? ""),
    content: String(row.content ?? ""),
    authorName: String(row.author_name ?? ""),
    imageUrl: String(row.image_url ?? ""),
    category: String(row.category ?? "Success Stories"),
  }));
}

/* ──────────────────────────── Testimonials ──────────────────────────── */

export type UITestimonial = {
  id: string;
  name: string;
  role: string;
  body: string;
  rating: number;
  avatarUrl: string;
  initials: string;
};

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export async function getTestimonials(): Promise<UITestimonial[]> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map((row: Record<string, unknown>) => {
    const name = String(row.author_name ?? "");
    return {
      id: String(row.id ?? ""),
      name,
      role: String(row.author_role ?? ""),
      body: String(row.content ?? ""),
      rating: typeof row.rating === "number" ? row.rating : 5,
      avatarUrl: String(row.avatar_url ?? ""),
      initials: initialsOf(name),
    };
  });
}

/* ─────────────────────────────── Sliders ────────────────────────────── */

export type UISlider = {
  id: string;
  title: string;
  imageUrl: string;
  linkUrl: string;
  orderIndex: number;
};

export async function getActiveSliders(): Promise<UISlider[]> {
  const { data, error } = await supabase
    .from("sliders")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  if (error || !data) return [];
  return data.map((row: Record<string, unknown>) => ({
    id: String(row.id ?? ""),
    title: String(row.title ?? ""),
    imageUrl: String(row.image_url ?? ""),
    linkUrl: String(row.link_url ?? ""),
    orderIndex: typeof row.order_index === "number" ? row.order_index : 0,
  }));
}
