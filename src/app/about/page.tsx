import type { Metadata } from "next";
import {
  ChevronRight,
  GraduationCap,
  Users,
  Briefcase,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import MissionTabs from "./MissionTabs";
import TestimonialCarousel from "./TestimonialCarousel";

export const metadata: Metadata = {
  title: "About AyaTech – We Build Builders, Not Test-Takers",
  description:
    "Started in a Kochi lab with one question — what if every class ended with something you could ship? Our mission, vision and method.",
};

function ImgPlaceholder({
  label,
  className = "",
  style = {},
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 text-xs font-medium text-center select-none ${className}`}
      style={{ borderRadius: "1.25rem", padding: "8px", ...style }}
    >
      {label}
    </div>
  );
}

const stats = [
  {
    icon: <GraduationCap size={28} strokeWidth={1.6} color="#3AB54A" />,
    value: "250+",
    label: "Student Builders",
  },
  {
    icon: <Briefcase size={28} strokeWidth={1.6} color="#3AB54A" />,
    value: "40+",
    label: "Pros Upskilled",
  },
  {
    icon: <Users size={28} strokeWidth={1.6} color="#3AB54A" />,
    value: "1 : 8",
    label: "Mentor Ratio",
  },
  {
    icon: <Cpu size={28} strokeWidth={1.6} color="#3AB54A" />,
    value: "4+",
    label: "Cities & Online",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center py-28 max-md:py-20 px-6"
        style={{ backgroundColor: "#1C2A57", minHeight: "260px" }}
      >
        {/* subtle grid overlay */}
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
            About Us
          </h1>
          {/* breadcrumb */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="flex items-center gap-1.5 text-white/40 text-sm mt-1"
          >
            <a href="/" className="hover:text-white/70 transition-colors no-underline text-white/40">
              Home
            </a>
            <ChevronRight size={13} strokeWidth={1.8} />
            <span style={{ color: "#3AB54A" }}>About Us</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. COMPANY ABOUT  — image col + content col
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 max-md:py-16 px-8 max-md:px-5">
        <div className="max-w-6xl mx-auto flex items-center gap-16 max-lg:flex-col max-lg:gap-12">

          {/* LEFT — overlapping image stack + experience badge */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="flex-1 relative min-h-[420px] max-lg:w-full max-lg:max-w-md max-lg:mx-auto"
          >
            {/* primary image — top-left */}
            <ImgPlaceholder
              label="Add image — coding workshop"
              className="w-[75%] h-64"
              style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            />
            {/* secondary image — bottom-right, overlapping */}
            <ImgPlaceholder
              label="Add image — robotics lab"
              className="w-[65%] h-52"
              style={{ position: "absolute", bottom: 0, right: 0, zIndex: 2 }}
            />
            {/* Experience badge — bottom-left, overlapping both */}
            <div
              className="absolute bottom-4 left-4 z-10 flex flex-col gap-1 px-6 py-5 rounded-2xl shadow-2xl"
              style={{ backgroundColor: "#1C2A57" }}
            >
              <span className="text-3xl font-bold leading-none" style={{ color: "#3AB54A" }}>
                4+
              </span>
              <span className="text-white text-xs tracking-wide leading-tight">
                Years of<br />Experience
              </span>
            </div>
          </div>

          {/* RIGHT — content */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="flex-1 flex flex-col gap-6 max-lg:w-full"
          >
            <p
              className="text-xs tracking-widest uppercase font-semibold m-0"
              style={{ color: "#3AB54A" }}
            >
              Company About
            </p>

            <h2
              className="text-4xl max-md:text-3xl m-0 leading-tight"
              style={{ color: "#1C2A57" }}
            >
              One of the most effective ways to build{" "}
              <span style={{ color: "#3AB54A", fontStyle: "italic" }}>
                real-world tech talent.
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed m-0">
              AyaTech serves students in grades 6–12 and working professionals across India.
              Our objective is to help people develop the skills this decade demands — through
              hands-on projects, not passive theory.
            </p>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold m-0" style={{ color: "#1C2A57" }}>
                Our Signature Programs:
              </p>
              {[
                "Emerging AI Labs — GPT, agents & automation",
                "Project-Based Learning — every class ships something",
                "Affordable cohort pricing across 4 cities",
                "Industry-expert mentors with 1:8 ratio",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    strokeWidth={2}
                    color="#3AB54A"
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-500 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="no-underline text-white px-8 py-3.5 rounded-full text-sm font-semibold self-start transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
            >
              Book a Free Call →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. STATS STRIP
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#1C2A57" }}>
        <div className="max-w-5xl mx-auto px-8 max-md:px-5 py-14 grid grid-cols-4 max-md:grid-cols-2 gap-10 text-center">
          {stats.map(({ icon, value, label }, i) => (
            <div
              key={label}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 80}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#FFFFFF10" }}
              >
                {icon}
              </div>
              <span
                className="text-4xl max-md:text-3xl font-bold"
                style={{ color: "#3AB54A" }}
              >
                {value}
              </span>
              <span className="text-white/60 text-xs tracking-widest uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. MISSION SECTION — tabs left · image right
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white py-24 max-md:py-16 px-8 max-md:px-5">
        <div className="max-w-6xl mx-auto flex items-center gap-16 max-lg:flex-col max-lg:gap-12">

          {/* LEFT — mission tabs */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="flex-1 flex flex-col gap-7 max-lg:w-full"
          >
            <div>
              <p
                className="text-xs tracking-widest uppercase font-semibold m-0 mb-3"
                style={{ color: "#3AB54A" }}
              >
                About Mission
              </p>
              <h2
                className="text-4xl max-md:text-3xl m-0 leading-tight"
                style={{ color: "#1C2A57" }}
              >
                Our main goal: build India&apos;s next generation of tech builders
              </h2>
            </div>

            <MissionTabs />
          </div>

          {/* RIGHT — image */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            className="flex-1 max-lg:w-full"
          >
            <ImgPlaceholder
              label="Add image — mentor and student in session"
              className="w-full h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section
        className="w-full py-24 max-md:py-16 px-8 max-md:px-5"
        style={{ backgroundColor: "#F4F6F8" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-center"
          >
            <p
              className="text-xs tracking-widest uppercase font-semibold mb-3"
              style={{ color: "#3AB54A" }}
            >
              Our Experiences
            </p>
            <h2
              className="text-4xl max-md:text-3xl m-0"
              style={{ color: "#1C2A57" }}
            >
              Trusted by our builders
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. CLOSING CTA
      ══════════════════════════════════════════════ */}
      <section
        className="w-full py-20 max-md:py-14 px-8 max-md:px-5 flex flex-col items-center text-center gap-6 bg-white"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col items-center gap-5 max-w-xl"
        >
          <h2
            className="text-3xl max-md:text-2xl font-bold m-0"
            style={{ color: "#1C2A57" }}
          >
            Ready to build what&apos;s next?
          </h2>
          <p className="text-gray-500 leading-relaxed m-0">
            Book a free 30-min discovery call. Walk away with a clear roadmap — enrol or not.
          </p>
          <a
            href="/contact"
            className="no-underline text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
          >
            Book a Free Discovery Call →
          </a>
          <p className="text-gray-400 text-xs m-0">
            No obligation. No hard sell. Just a roadmap.
          </p>
        </div>
      </section>
    </>
  );
}
