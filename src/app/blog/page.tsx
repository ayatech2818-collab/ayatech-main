"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { getBlogs, type UIBlog } from "@/lib/queries";

const FILTERS = ["ALL", "YOUTUBE VIDEOS", "STUDENT WORK", "SUCCESS STORIES"] as const;
type Filter = (typeof FILTERS)[number];

function isUrl(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");
  const [blogs, setBlogs] = useState<UIBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  const byCategory = (cat: string) => blogs.filter((b) => b.category === cat);
  const videos = byCategory("YouTube Videos");
  const studentWork = byCategory("Student Work");
  const successStories = byCategory("Success Stories");
  const featured = blogs[0];

  const showVideos = activeFilter === "ALL" || activeFilter === "YOUTUBE VIDEOS";
  const showStudentWork = activeFilter === "ALL" || activeFilter === "STUDENT WORK";
  const showSuccess = activeFilter === "ALL" || activeFilter === "SUCCESS STORIES";

  // Link target for a card: open the content URL when it's a link, else the post page placeholder.
  const cardHref = (b: UIBlog) => (isUrl(b.content) ? b.content : "#");
  const isExternal = (b: UIBlog) => isUrl(b.content);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center bg-[#1C2A57] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-0"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-7xl mb-6">THE BLOG</h1>
          <p className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase max-w-2xl leading-relaxed font-semibold">
            Stay up to date on tips, student works, YouTube videos, & latest trends in technology
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="border-b border-gray-100 py-6 sticky top-[73px] bg-white/90 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="italic text-xl text-gray-500 font-serif">Browse the blog :</span>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold tracking-[0.15em]">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors pb-1 ${
                  activeFilter === filter
                    ? "border-b-2 border-[#3AB54A] text-[#3AB54A]"
                    : "text-gray-400 hover:text-[#3AB54A]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {loading ? (
        <div className="py-32 text-center text-gray-400 tracking-widest text-sm">LOADING…</div>
      ) : blogs.length === 0 ? (
        <div className="py-32 text-center text-gray-400 tracking-widest text-sm">
          NO POSTS YET. ADD CONTENT FROM THE ADMIN PANEL.
        </div>
      ) : (
        <>
          {/* Featured Post - Show only on ALL */}
          {activeFilter === "ALL" && featured && (
            <section className="py-20 px-6 lg:px-20 container mx-auto animate-in fade-in duration-500">
              <div className="relative flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
                <div className="absolute top-[-20px] left-[-20px] lg:top-[-30px] lg:left-[-30px] z-20 bg-[#3AB54A] text-white w-24 h-24 rounded-full flex items-center justify-center text-center p-2 text-[10px] font-bold tracking-widest shadow-xl">
                  READ<br />THE<br />LATEST
                </div>

                {/* Image */}
                <div className="w-full lg:w-2/3 h-[400px] lg:h-[600px] relative z-0 shadow-lg bg-gray-100">
                  {featured.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={featured.imageUrl} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>

                {/* Content Card */}
                <div className="w-[90%] lg:w-[45%] bg-white p-10 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10 mt-[-50px] lg:mt-0 lg:ml-[-15%]">
                  <h2 className="text-3xl lg:text-4xl text-[#1C2A57] mb-6 leading-tight uppercase">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
                    {featured.excerpt}
                  </p>
                  <Link
                    href={cardHref(featured)}
                    target={isExternal(featured) ? "_blank" : undefined}
                    className="inline-block bg-[#1C2A57] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] hover:bg-[#3AB54A] transition-colors duration-300 rounded-full shadow-lg"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* YouTube Videos Section */}
          {showVideos && videos.length > 0 && (
            <section className={`py-20 bg-[#F9FAFB] animate-in fade-in duration-500 ${activeFilter !== "ALL" ? "min-h-[60vh]" : ""}`}>
              <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl text-[#1C2A57] mb-4">LATEST ON YOUTUBE</h2>
                  <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                    Dive deep into our latest tutorials, tech talks, and student interviews.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videos.map((v) => (
                    <Link
                      key={v.id}
                      href={cardHref(v)}
                      target={isExternal(v) ? "_blank" : undefined}
                      className="group cursor-pointer no-underline"
                    >
                      <div className="relative aspect-video bg-gray-200 w-full overflow-hidden flex items-center justify-center shadow-sm">
                        {v.imageUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={v.imageUrl} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#3AB54A] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg pl-1">
                            <Play size={24} fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-6 text-xl text-[#1C2A57] group-hover:text-[#3AB54A] transition-colors">
                        {v.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Student Work Showcase */}
          {showStudentWork && studentWork.length > 0 && (
            <section className={`py-24 px-6 lg:px-20 container mx-auto border-t border-gray-100 animate-in fade-in duration-500 ${activeFilter !== "ALL" ? "min-h-[60vh] border-t-0" : ""}`}>
              <div className="mb-16 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-[#1C2A57] mb-4">STUDENT SHOWCASE</h2>
                <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                  Explore the amazing projects built by our graduates.
                </p>
              </div>
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {studentWork.map((s) => (
                  <Link key={s.id} href={cardHref(s)} target={isExternal(s) ? "_blank" : undefined} className="group cursor-pointer no-underline flex flex-col">
                    <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-gray-100">
                      {s.imageUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.imageUrl} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      )}
                    </div>
                    <h3 className="text-xl text-[#1C2A57] mb-4 group-hover:text-[#3AB54A] transition-colors">{s.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{s.excerpt}</p>
                    <div className="flex items-center text-xs font-bold tracking-widest text-[#3AB54A]">
                      VIEW PROJECT <ArrowRight size={14} className="ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Success Stories Section */}
          {showSuccess && successStories.length > 0 && (
            <section className={`py-24 bg-[#1C2A57] text-white animate-in fade-in duration-500 ${activeFilter !== "ALL" ? "min-h-[60vh]" : ""}`}>
              <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl mb-4">SUCCESS STORIES</h2>
                  <p className="text-gray-300 max-w-2xl text-sm md:text-base">
                    Real results from our intensive programs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {successStories.map((story) => (
                    <div key={story.id} className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                      <div className="w-20 h-20 rounded-full bg-white/20 mb-6 flex items-center justify-center overflow-hidden">
                        {story.imageUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <p className="text-lg font-serif italic mb-6 leading-relaxed">
                        &ldquo;{story.excerpt || story.title}&rdquo;
                      </p>
                      <div className="mb-8">
                        <h4 className="text-sm mb-1 uppercase">{story.title}</h4>
                        <p className="text-xs text-gray-400">{story.authorName}</p>
                      </div>
                      <Link
                        href={cardHref(story)}
                        target={isExternal(story) ? "_blank" : undefined}
                        className="flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-white transition-colors"
                      >
                        READ JOURNEY <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
