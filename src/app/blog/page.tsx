"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "YOUTUBE VIDEOS", "STUDENT WORK", "SUCCESS STORIES"];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center bg-[#1C2A57] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-0"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-7xl mb-6">
            THE BLOG
          </h1>
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
            {filters.map((filter) => (
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

      {/* Featured Post - Show only on ALL */}
      {activeFilter === "ALL" && (
        <section className="py-20 px-6 lg:px-20 container mx-auto animate-in fade-in duration-500">
          <div className="relative flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
            {/* Badge */}
            <div className="absolute top-[-20px] left-[-20px] lg:top-[-30px] lg:left-[-30px] z-20 bg-[#3AB54A] text-white w-24 h-24 rounded-full flex items-center justify-center text-center p-2 text-[10px] font-bold tracking-widest shadow-xl">
              READ<br />THE<br />LATEST
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-2/3 h-[400px] lg:h-[600px] relative z-0 shadow-lg">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-sm tracking-widest">FEATURED IMAGE PLACEHOLDER</span>
              </div>
            </div>

            {/* Content Card */}
            <div className="w-[90%] lg:w-[45%] bg-white p-10 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10 mt-[-50px] lg:mt-0 lg:ml-[-15%]">
              <h2 className="text-3xl lg:text-4xl text-[#1C2A57] mb-6 leading-tight">
                STUDENT SHOWCASE: BUILDING A SCALABLE SAAS PLATFORM
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
                Discover how one of our recent graduates built a fully functional, scalable SaaS platform from scratch using Next.js and Node.js. In this detailed breakdown, we explore their development process, challenges faced, and the final product that landed them a senior developer role.
              </p>
              <Link href="#" className="inline-block bg-[#1C2A57] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] hover:bg-[#3AB54A] transition-colors duration-300 rounded-full shadow-lg">
                WATCH VIDEO
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Grid Posts - Show only on ALL */}
      {activeFilter === "ALL" && (
        <section className="py-10 pb-24 px-6 lg:px-20 container mx-auto max-w-7xl animate-in fade-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            <article className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-gray-100 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                  <span className="text-sm tracking-widest">IMAGE PLACEHOLDER</span>
                </div>
              </div>
              <h3 className="text-xl text-[#1C2A57] mb-4 group-hover:text-[#3AB54A] transition-colors">
                REACT VS VUE: WHICH SHOULD YOU LEARN IN 2026?
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                In our latest YouTube video, we break down the pros and cons of the two most popular frontend frameworks to help you decide your learning path.
              </p>
              <div className="flex items-center text-xs font-bold tracking-widest text-[#3AB54A] group-hover:gap-2 transition-all">
                WATCH NOW <ArrowRight size={14} className="ml-2" />
              </div>
            </article>

            <article className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-gray-100 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                  <span className="text-sm tracking-widest">IMAGE PLACEHOLDER</span>
                </div>
              </div>
              <h3 className="text-xl text-[#1C2A57] mb-4 group-hover:text-[#3AB54A] transition-colors">
                E-COMMERCE APP REDESIGN BY SARAH J.
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                Check out this stunning redesign of a popular e-commerce platform created by our UX/UI student, focusing on accessibility and conversion.
              </p>
              <div className="flex items-center text-xs font-bold tracking-widest text-[#3AB54A] group-hover:gap-2 transition-all">
                VIEW PROJECT <ArrowRight size={14} className="ml-2" />
              </div>
            </article>

            <article className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[300px] w-full mb-6 overflow-hidden bg-gray-100 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                  <span className="text-sm tracking-widest">IMAGE PLACEHOLDER</span>
                </div>
              </div>
              <h3 className="text-xl text-[#1C2A57] mb-4 group-hover:text-[#3AB54A] transition-colors">
                FROM BEGINNER TO GOOGLE ENGINEER IN 1 YEAR
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                Read the inspiring journey of David, who went from writing his first line of code to landing a dream job at Google through our intensive program.
              </p>
              <div className="flex items-center text-xs font-bold tracking-widest text-[#3AB54A] group-hover:gap-2 transition-all">
                READ STORY <ArrowRight size={14} className="ml-2" />
              </div>
            </article>

          </div>
        </section>
      )}

      {/* YouTube Videos Section */}
      {(activeFilter === "ALL" || activeFilter === "YOUTUBE VIDEOS") && (
        <section className={`py-20 bg-[#F9FAFB] animate-in fade-in duration-500 ${activeFilter !== "ALL" ? 'min-h-[60vh]' : ''}`}>
          <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl text-[#1C2A57] mb-4">LATEST ON YOUTUBE</h2>
                <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                  Dive deep into our latest tutorials, tech talks, and student interviews. Subscribe to stay updated!
                </p>
              </div>
              {activeFilter === "ALL" && (
                <Link href="#" className="hidden md:flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-[#1C2A57] transition-colors">
                  VIEW CHANNEL <ArrowRight size={14} className="ml-2" />
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-200 w-full overflow-hidden flex items-center justify-center shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                    <span className="text-sm tracking-widest">VIDEO THUMBNAIL PLACEHOLDER</span>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#3AB54A] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg pl-1">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl text-[#1C2A57] group-hover:text-[#3AB54A] transition-colors">
                  Full-Stack App Walkthrough: Next.js + Supabase
                </h3>
              </div>

              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-200 w-full overflow-hidden flex items-center justify-center shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                    <span className="text-sm tracking-widest">VIDEO THUMBNAIL PLACEHOLDER</span>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#3AB54A] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg pl-1">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl text-[#1C2A57] group-hover:text-[#3AB54A] transition-colors">
                  Student Interview: Landing a Job at Microsoft
                </h3>
              </div>
            </div>
            
            {activeFilter === "ALL" && (
              <Link href="#" className="md:hidden mt-8 flex items-center justify-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-[#1C2A57] transition-colors">
                VIEW CHANNEL <ArrowRight size={14} className="ml-2" />
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Student Work Showcase */}
      {(activeFilter === "ALL" || activeFilter === "STUDENT WORK") && (
        <section className={`py-24 px-6 lg:px-20 container mx-auto border-t border-gray-100 animate-in fade-in duration-500 ${activeFilter !== "ALL" ? 'min-h-[60vh] border-t-0' : ''}`}>
          <div className="flex justify-between items-end mb-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#1C2A57] mb-4">STUDENT SHOWCASE</h2>
              <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                Explore the amazing projects built by our graduates. From full-stack applications to stunning UX/UI redesigns.
              </p>
            </div>
            {activeFilter === "ALL" && (
              <Link href="#" className="hidden md:flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-[#1C2A57] transition-colors">
                VIEW ALL WORK <ArrowRight size={14} className="ml-2" />
              </Link>
            )}
          </div>

          <div className="max-w-7xl mx-auto flex flex-col gap-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-3/5 h-[400px] lg:h-[500px] relative bg-gray-100 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                  <span className="text-sm tracking-widest">PROJECT IMAGE PLACEHOLDER</span>
                </div>
              </div>
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#3AB54A] mb-4">UX/UI DESIGN</span>
                <h3 className="text-3xl text-[#1C2A57] mb-6">Fintech Dashboard Redesign</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  A complete overhaul of a legacy financial dashboard, focusing on user accessibility, dark mode implementation, and streamlined transaction flows.
                </p>
                <Link href="#" className="border-b-2 border-[#3AB54A] pb-1 text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-[#1C2A57] hover:border-[#1C2A57] transition-colors">
                  VIEW CASE STUDY
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-3/5 h-[400px] lg:h-[500px] relative bg-gray-100 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                  <span className="text-sm tracking-widest">PROJECT IMAGE PLACEHOLDER</span>
                </div>
              </div>
              <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-end lg:text-right">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#3AB54A] mb-4">FULL-STACK DEVELOPMENT</span>
                <h3 className="text-3xl text-[#1C2A57] mb-6">AI Content Generator SaaS</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  A scalable web application built with Next.js, Tailwind CSS, and OpenAI's API. It features user authentication, a credit system, and responsive design.
                </p>
                <Link href="#" className="border-b-2 border-[#3AB54A] pb-1 text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-[#1C2A57] hover:border-[#1C2A57] transition-colors">
                  VIEW CASE STUDY
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Section */}
      {(activeFilter === "ALL" || activeFilter === "SUCCESS STORIES") && (
        <section className={`py-24 bg-[#1C2A57] text-white animate-in fade-in duration-500 ${activeFilter !== "ALL" ? 'min-h-[60vh]' : ''}`}>
          <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl mb-4">SUCCESS STORIES</h2>
                <p className="text-gray-300 max-w-2xl text-sm md:text-base">
                  Real results from our intensive programs. See how our students transitioned into top-tier tech roles.
                </p>
              </div>
              {activeFilter === "ALL" && (
                <Link href="#" className="flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-white transition-colors">
                  VIEW ALL STORIES <ArrowRight size={14} className="ml-2" />
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-20 h-20 rounded-full bg-white/20 mb-6 flex items-center justify-center overflow-hidden">
                  <span className="text-[10px] tracking-widest text-white/50">PHOTO</span>
                </div>
                <p className="text-lg font-serif italic mb-6 leading-relaxed">
                  "The curriculum was intense, but it exactly mirrored what I now do daily as a frontend engineer. I couldn't have made the transition without this program."
                </p>
                <div className="mb-8">
                  <h4 className="text-sm mb-1">MICHAEL T.</h4>
                  <p className="text-xs text-gray-400">Frontend Engineer @ Spotify</p>
                </div>
                <Link href="#" className="flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-white transition-colors">
                  READ JOURNEY <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-20 h-20 rounded-full bg-white/20 mb-6 flex items-center justify-center overflow-hidden">
                  <span className="text-[10px] tracking-widest text-white/50">PHOTO</span>
                </div>
                <p className="text-lg font-serif italic mb-6 leading-relaxed">
                  "Going from a completely non-technical background to landing a job at Google in under a year seemed impossible. The mentorship here made it a reality."
                </p>
                <div className="mb-8">
                  <h4 className="text-sm mb-1">SARAH J.</h4>
                  <p className="text-xs text-gray-400">Software Engineer @ Google</p>
                </div>
                <Link href="#" className="flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-white transition-colors">
                  READ JOURNEY <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-20 h-20 rounded-full bg-white/20 mb-6 flex items-center justify-center overflow-hidden">
                  <span className="text-[10px] tracking-widest text-white/50">PHOTO</span>
                </div>
                <p className="text-lg font-serif italic mb-6 leading-relaxed">
                  "I learned more in 3 months here than I did in my 4-year computer science degree. The focus on real-world projects is the absolute game changer."
                </p>
                <div className="mb-8">
                  <h4 className="text-sm mb-1">DAVID K.</h4>
                  <p className="text-xs text-gray-400">Full Stack Developer @ Stripe</p>
                </div>
                <Link href="#" className="flex items-center text-xs font-bold tracking-[0.15em] text-[#3AB54A] hover:text-white transition-colors">
                  READ JOURNEY <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
