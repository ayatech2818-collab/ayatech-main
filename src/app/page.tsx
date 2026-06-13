"use client";

import AOS from "aos";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Users, GraduationCap, Briefcase,
  ArrowRight, MapPin, CheckCircle2,
} from "lucide-react";
import { BuildIcon, LaunchIcon, LeadIcon } from "./components/PillarIcons";
import { MediaShowcase } from "./components/MediaShowcase";
import HeroSlider from "./components/HeroSlider";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Home() {
  useEffect(() => {
    AOS.refresh();
    const originalWarn = console.warn;
    const originalError = console.error;
    const suppress = (fn: (...args: unknown[]) => void) =>
      (...args: unknown[]) => {
        if (typeof args[0] === "string" && args[0].includes("Missing property")) return;
        fn(...args);
      };
    console.warn = suppress(originalWarn);
    console.error = suppress(originalError);
    return () => { console.warn = originalWarn; console.error = originalError; };
  }, []);

  return (
    <>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <div className="w-full relative overflow-hidden hero-grid" style={{ minHeight: "100svh" }}>

        {/* ── MOBILE hero ── */}
        <div className="hidden max-md:flex flex-col items-center text-center pt-8 pb-14 px-6 gap-5">
          <div className="w-full h-[360px] relative">
            <Spline
              scene="https://prod.spline.design/Yx5xN8aiKpCnnEWj/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="tag-box w-52 mx-auto">
            <div className="tag text-xs font-semibold tracking-widest">BUILD. LAUNCH. LEAD.</div>
          </div>

          <h1
            className="text-[2.2rem] leading-[1.1] m-0 uppercase tracking-wide"
            style={{ color: "#1C2A57", fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            We don&apos;t teach technology.{" "}
            <span style={{ color: "#3AB54A" }}>We build the people who shape it.</span>
          </h1>

          <p className="text-[0.95rem] text-gray-500 leading-relaxed m-0 max-w-xs">
            Project-based labs for builders, founders and AI-native professionals.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-[280px]">
            <a href="/contact" className="no-underline text-white h-11 flex items-center justify-center rounded-full text-sm font-semibold text-center transition-all duration-200 active:scale-95 btn-cta">
              Book a Free Discovery Call →
            </a>
            <a href="/students" className="no-underline border h-11 flex items-center justify-center rounded-full text-sm font-semibold text-center transition-all duration-200 hover:bg-gray-50 active:scale-95" style={{ borderColor: "#1C2A57", color: "#1C2A57" }}>
              Explore Programs
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
            <CheckCircle2 size={13} strokeWidth={2} color="#3AB54A" />
            <span>250+ student builders across 4 cities</span>
          </div>
        </div>

        {/* ── DESKTOP hero ── */}
        <div className="max-md:hidden flex items-center min-h-screen px-20 max-lg:px-10 relative">

          {/* Left copy */}
          <div className="relative z-50 max-w-[42rem] py-28">
            <div data-aos="fade-up" data-aos-duration="800" className="inline-flex items-center gap-2 mb-6">
              <div className="tag-box w-64">
                <div className="tag text-sm font-semibold tracking-widest">BUILD. LAUNCH. LEAD.</div>
              </div>
            </div>

            <h1
              data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"
              className="text-[4rem] max-lg:text-[3.2rem] leading-[1.05] m-0 mb-6 select-none uppercase tracking-wide"
              style={{ color: "#1C2A57", fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              We don&apos;t teach
              <br /><span style={{ color: "#3AB54A" }}>technology.</span>
              <br />We build the people
              <br />who shape it.
            </h1>

            <p
              data-aos="fade-up" data-aos-duration="900" data-aos-delay="200"
              className="text-lg text-gray-500 leading-relaxed m-0 mb-10 max-w-[34rem]"
            >
              Project-based labs for builders, founders and AI-native
              professionals. Real code. Real robots. Real AI agents.
            </p>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="300" className="flex items-center gap-4 flex-wrap mb-10">
              <a href="/contact" className="no-underline text-white h-12 px-8 rounded-full text-base font-semibold inline-flex items-center transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta">
                Book a Free Discovery Call →
              </a>
              <a href="/students" className="no-underline flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:gap-3" style={{ color: "#1C2A57" }}>
                Explore Programs <ArrowRight size={18} strokeWidth={2} />
              </a>
            </div>

            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} color="#3AB54A" strokeWidth={2} /> 250+ student builders</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} color="#3AB54A" strokeWidth={2} /> 1:8 mentor ratio</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} color="#3AB54A" strokeWidth={2} /> 4 cities + online</span>
            </div>
          </div>

        </div>

        {/* 3D Robot */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none z-10 overflow-hidden max-md:hidden"
          style={{ width: "60%" }}
        >
          <div className="relative w-full h-full" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="400">
            <Spline
              className="robot-3d pointer-events-auto"
              scene="https://prod.spline.design/Yx5xN8aiKpCnnEWj/scene.splinecode"
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SLIDERS (managed in /admin/sliders)
      ══════════════════════════════════════════════════════════ */}
      <HeroSlider />

      {/* ══════════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#1C2A57" }}>
        <div className="max-w-5xl mx-auto px-8 max-md:px-5 pt-12 pb-6">
          <div className="grid grid-cols-4 max-md:grid-cols-2 text-center">
            {[
              { stat: "250+", label: "Student Builders", badge: "↑ Growing" },
              { stat: "40+",  label: "Professionals Upskilled", badge: null },
              { stat: "1:8",  label: "Mentor Ratio", badge: null },
              { stat: "4",    label: "Cities & Online", badge: null },
            ].map(({ stat, label, badge }, i) => (
              <div
                key={label}
                data-aos="fade-up" data-aos-duration="700" data-aos-delay={i * 80}
                className={[
                  "flex flex-col items-center gap-2 py-8 max-md:py-6",
                  i > 0 ? "md:border-l md:border-white/15" : "",
                  i % 2 === 1 ? "max-md:border-l max-md:border-white/15" : "",
                  i >= 2 ? "max-md:border-t max-md:border-white/10" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-2 justify-center">
                  <span
                    className="text-5xl max-md:text-4xl font-bold"
                    style={{ color: "#3AB54A", letterSpacing: "-0.02em" }}
                  >
                    {stat}
                  </span>
                  {badge && (
                    <span
                      className="hidden md:inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: "#3AB54A99" }}
                    >
                      {badge}
                    </span>
                  )}
                </div>
                <span className="text-white/60 text-[11px] tracking-[0.15em] uppercase font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <span className="flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
            <MapPin size={12} strokeWidth={1.8} />
            Bengaluru · Kochi · Coimbatore · Online
          </span>
        </div>
      </section>

      {/* Green gradient section separator */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, #3AB54A60, #3AB54A, #3AB54A60, transparent)" }}
      />

      {/* ══════════════════════════════════════════════════════════
          THREE PILLARS
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 max-md:py-16 px-8 max-md:px-5">
        <div className="max-w-6xl mx-auto flex items-center gap-14 max-lg:flex-col">

          {/* LEFT — animated media showcase */}
          <MediaShowcase />

          {/* RIGHT — section title + pillar cards */}
          <div className="flex-1 flex flex-col gap-7 max-lg:w-full">
            <div data-aos="fade-left" data-aos-duration="700">
              <p
                className="text-[11px] tracking-[0.15em] uppercase font-medium m-0 mb-3 pl-3"
                style={{ color: "#3AB54A", borderLeft: "3px solid #3AB54A" }}
              >
                Our philosophy
              </p>
              <h2
                className="text-[2.25rem] max-md:text-2xl font-bold m-0 leading-tight"
                style={{ color: "#1C2A57" }}
              >
                One mantra. Every program.
              </h2>
            </div>

            {[
              {
                icon: <BuildIcon size={22} color="#ffffff" />,
                word: "BUILD",
                body: "Ship every week — from first Arduino circuit to deployed AI agent.",
                delay: 80,
                bgColor: "#3AB54A",
                textColor: "#3AB54A",
              },
              {
                icon: <LaunchIcon size={22} color="#ffffff" />,
                word: "LAUNCH",
                body: "Ideas into income. Every program ends with a real, shareable artifact.",
                delay: 160,
                bgColor: "#3AB54A",
                textColor: "#3AB54A",
              },
              {
                icon: <LeadIcon size={22} color="#ffffff" />,
                word: "LEAD",
                body: "Master the AI-native workflows the next decade hires for.",
                delay: 240,
                bgColor: "#1C2A57",
                textColor: "#1C2A57",
              },
            ].map((item) => (
              <div
                key={item.word}
                data-aos="fade-left" data-aos-duration="700" data-aos-delay={item.delay}
                className="group flex items-start gap-4"
              >
                {/* 48×48 pill, fully rounded */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest m-0 mb-1" style={{ color: item.textColor }}>{item.word}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed m-0">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROGRAM FINDER
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full py-24 max-md:py-16 px-8 max-md:px-4" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="700" className="text-center">
            <p className="text-[11px] tracking-[0.15em] uppercase font-medium mb-2" style={{ color: "#3AB54A" }}>
              Who is this for?
            </p>
            <h2 className="text-4xl max-md:text-[28px] font-bold m-0" style={{ color: "#1C2A57" }}>
              Find your program
            </h2>
          </div>

          {/* Cards — horizontal snap scroll on mobile, 3-col grid on desktop */}
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {[
              {
                icon: <Users size={24} color="#3AB54A" strokeWidth={2} />,
                bg: "#3AB54A1A",
                role: "Parent",
                title: "Right track for my child",
                body: "Grades 6–12. We'll match them to the right program and pace.",
                link: "/students",
                linkLabel: "For Students",
                accent: "#3AB54A",
                imgLabel: "Parent & child",
                delay: 0,
                featured: false,
              },
              {
                icon: <GraduationCap size={24} color="#3AB54A" strokeWidth={2} />,
                bg: "#3AB54A30",
                role: "Learner",
                title: "Pick a skill, start building",
                body: "Grades 6–12. Choose your track — code, 3D, robotics, AI.",
                link: "/students",
                linkLabel: "For Students",
                accent: "#3AB54A",
                featured: true,
                imgLabel: "Student learning",
                delay: 100,
              },
              {
                icon: <Briefcase size={24} color="#1C2A57" strokeWidth={2} />,
                bg: "#1C2A571A",
                role: "Professional",
                title: "Future-proof my career with AI",
                body: "GenAI, data science, automation — built for working professionals.",
                link: "/professionals",
                linkLabel: "For Professionals",
                accent: "#1C2A57",
                imgLabel: "Professional at desk",
                delay: 200,
                featured: false,
              },
            ].map((card) => (
              <div
                key={card.role}
                data-aos="fade-up" data-aos-duration="800" data-aos-delay={card.delay}
                className={[
                  "group flex flex-col rounded-2xl border-2 overflow-hidden",
                  "transition-all duration-200 hover:-translate-y-1",
                  "flex-shrink-0 snap-start w-[82%] md:w-auto",
                  card.featured
                    ? "border-[#3AB54A] bg-[#F0FFF4] shadow-[0_4px_24px_rgba(58,181,74,0.14)]"
                    : "border-transparent bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:border-gray-100",
                ].join(" ")}
              >
                {/* Image area */}
                <div
                  className="w-full h-[180px] flex flex-col items-center justify-center gap-2.5 select-none"
                  style={{ backgroundColor: "#F0F0F0", color: "#C0C0C0" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-xs text-center px-3">{card.imgLabel}</span>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: card.bg }}>
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    {/* Role pill */}
                    <span
                      className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white"
                      style={{ backgroundColor: card.accent }}
                    >
                      {card.role}
                    </span>
                    <h3 className="text-[18px] font-bold m-0 mt-0.5 leading-snug" style={{ color: "#1C2A57" }}>{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed m-0">{card.body}</p>
                  </div>
                  <a
                    href={card.link}
                    className="no-underline flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3 hover:underline mt-1"
                    style={{ color: "#3AB54A" }}
                  >
                    {card.linkLabel} <ArrowRight size={15} strokeWidth={2} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLOSING CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        className="w-full py-24 max-md:py-16 px-8 max-md:px-5"
        style={{
          backgroundColor: "#1C2A57",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center gap-14 max-lg:flex-col max-lg:text-center">

          {/* LEFT — copy */}
          <div data-aos="fade-right" data-aos-duration="800" className="flex-1 flex flex-col gap-6 max-lg:items-center">
            <p className="text-[11px] tracking-[0.15em] uppercase font-medium m-0" style={{ color: "#3AB54A" }}>
              The compound curve is unforgiving both ways
            </p>
            <h2
              className="text-[2.5rem] max-md:text-[28px] font-bold leading-snug m-0 text-white max-w-[90%] max-lg:max-w-full"
              style={{ maxWidth: "600px" }}
            >
              You won&apos;t leave AyaTech the same person you walked in as.
            </h2>
            <p className="text-white/60 text-base leading-relaxed m-0">
              Start now and you&apos;re 6 months ahead in 6 months.<br />
              Wait, and you stay 6 months behind.
            </p>
            <a
              href="/contact"
              className="no-underline text-white h-12 px-6 rounded-full text-base font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta inline-flex items-center self-start max-lg:self-center"
            >
              Book a Free Discovery Call →
            </a>
            <p className="text-white/30 text-xs m-0">No obligation. No hard sell. Walk away with a roadmap.</p>
          </div>

          {/* RIGHT — image placeholder */}
          <div
            data-aos="fade-left" data-aos-duration="900" data-aos-delay="100"
            className="flex-1 max-lg:w-full flex justify-center max-lg:hidden"
          >
            <div
              className="w-full max-w-[420px] h-[340px] flex flex-col items-center justify-center gap-2.5 select-none"
              style={{
                backgroundColor: "#ffffff0f",
                borderRadius: "16px",
                color: "#ffffff40",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-xs text-center px-3">Student / graduate</span>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
