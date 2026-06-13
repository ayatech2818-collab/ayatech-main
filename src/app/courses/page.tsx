import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import CourseGrid from "./CourseGrid";

export const metadata: Metadata = {
  title: "Our Programs – Coding, AI, Robotics & 3D | AyaTech",
  description:
    "Browse all AyaTech programs — from 20-day sprints to 12-month flagship journeys for students and professionals.",
};

export default function CoursesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center py-28 max-md:py-20 px-6"
        style={{ backgroundColor: "#1C2A57", minHeight: "260px" }}
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />


        <div className="relative z-10 flex flex-col items-center gap-4">
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-xs tracking-widest uppercase font-semibold m-0"
            style={{ color: "#3AB54A" }}
          >
            AyaTech
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            className="text-6xl max-md:text-4xl m-0 text-white"
          >
            Our Programs
          </h1>
          {/* breadcrumb */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="flex items-center gap-1.5 text-white/40 text-sm mt-1"
          >
            <a
              href="/"
              className="hover:text-white/70 transition-colors no-underline text-white/40"
            >
              Home
            </a>
            <ChevronRight size={13} strokeWidth={1.8} />
            <span style={{ color: "#3AB54A" }}>Our Programs</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTRO STRIP
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white py-14 max-md:py-10 px-8 max-md:px-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 max-md:flex-col max-md:text-center">
          <div data-aos="fade-right" data-aos-duration="800" className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
              14 Programs · 3 Tracks
            </p>
            <h2 className="text-3xl max-md:text-2xl m-0" style={{ color: "#1C2A57" }}>
              Find the program that ships you.
            </h2>
          </div>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-gray-500 text-sm leading-relaxed max-w-sm m-0 max-md:max-w-full"
          >
            From 20-day sprints to 12-month flagship journeys — every program ends with
            something real you can show the world.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COURSE GRID  (client — filter tabs + cards)
      ══════════════════════════════════════════════ */}
      <CourseGrid />

      {/* ══════════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════════ */}
      <section
        className="w-full py-20 max-md:py-14 px-8 max-md:px-5 flex flex-col items-center text-center gap-6"
        style={{ backgroundColor: "#1C2A57" }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col items-center gap-5 max-w-xl"
        >
          <h2 className="text-3xl max-md:text-2xl font-bold m-0 text-white">
            Still not sure? Let&apos;s figure it out together.
          </h2>
          <p className="text-white/60 leading-relaxed m-0">
            Book a free 30-min discovery call. Walk away with a clear program roadmap — enrol or not.
          </p>
          <a
            href="/contact"
            className="no-underline text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
          >
            Book a Free Discovery Call →
          </a>
          <p className="text-white/30 text-xs m-0">No obligation. No hard sell. Just a roadmap.</p>
        </div>
      </section>
    </>
  );
}
