"use client";

import { useState } from "react";
import { BookOpen, Clock, Users, Star } from "lucide-react";

import { courses, type Course } from "../../data/courses";

type Filter = "all" | "students" | "professionals";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Programs" },
  { key: "students", label: "For Students" },
  { key: "professionals", label: "For Professionals" },
];

const categoryColor: Record<string, { bg: string; text: string }> = {
  "Student Program":   { bg: "#3AB54A1A", text: "#2A9A3A" },
  "Sprint Program":    { bg: "#1C2A571A", text: "#1C2A57" },
  "Professional Track":{ bg: "#3AB54A1A", text: "#2A9A3A" },
};

function CourseCard({ course }: { course: Course }) {
  const cat = categoryColor[course.category] ?? { bg: "#F4F6F8", text: "#1C2A57" };

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div
        className="w-full h-48 flex items-center justify-center text-xs text-center select-none"
        style={{
          backgroundColor: course.imgAccent + "18",
          borderBottom: `3px solid ${course.imgAccent}`,
          color: course.imgAccent + "80",
          padding: "8px",
        }}
      >
        {course.imgLabel}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category tag */}
        <span
          className="self-start text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: cat.bg, color: cat.text }}
        >
          #{course.category}
        </span>

        {/* Title */}
        <h3
          className="text-base font-bold m-0 leading-snug group-hover:text-[#3AB54A] transition-colors duration-200"
          style={{ color: "#1C2A57" }}
        >
          {course.title}
        </h3>

        {/* Tagline */}
        <p className="text-gray-400 text-xs leading-relaxed m-0 line-clamp-2">
          {course.tagline}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-3 flex-wrap text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <BookOpen size={12} strokeWidth={2} color="#3AB54A" />
            {course.modules}
          </span>
          <span className="text-gray-200">|</span>
          <span className="flex items-center gap-1">
            <Clock size={12} strokeWidth={2} color="#3AB54A" />
            {course.duration}
          </span>
          <span className="text-gray-200">|</span>
          <span className="flex items-center gap-1">
            <Users size={12} strokeWidth={2} color="#3AB54A" />
            {course.format}
          </span>
        </div>

        {/* Stars + count */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
            ))}
          </div>
          <span className="text-gray-400 text-xs">({course.reviewCount})</span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-1">
          <a
            href={`/courses/${course.slug}`}
            className="no-underline flex items-center justify-between text-white px-5 py-3 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
          >
            <span>Reserve a Seat</span>
            <span className="text-white/80">{course.duration} →</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  const [active, setActive] = useState<Filter>("all");

  const visible = active === "all" ? courses : courses.filter((c) => c.audience === active);

  return (
    <section className="w-full py-16 px-8 max-md:px-5" style={{ backgroundColor: "#F4F6F8" }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Filter tabs */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border"
              style={
                active === key
                  ? { backgroundColor: "#1C2A57", color: "#ffffff", borderColor: "#1C2A57" }
                  : { backgroundColor: "#ffffff", color: "#1C2A57", borderColor: "#1C2A57" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {visible.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm m-0">
          Not sure which program fits?{" "}
          <a
            href="/contact"
            className="no-underline font-semibold"
            style={{ color: "#3AB54A" }}
          >
            Book a free discovery call →
          </a>
        </p>
      </div>
    </section>
  );
}
