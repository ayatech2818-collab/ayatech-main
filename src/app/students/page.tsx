import type { Metadata } from "next";
import {
  Code2, Palette, Zap, Compass,
  BookOpen, Clock, Users, Star, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coding, Robotics & AI Programs for Kids – Grades 6–12 | AyaTech",
  description:
    "While most kids consume technology, ours create it. Project-based coding, robotics, 3D and AI for Grades 6–12.",
};

/* ─── types ─────────────────────────────────────────────── */
interface Program {
  badge: string;
  duration: string;
  title: string;
  tagline: string;
  desc: string;
  modules: number;
  format: string;
  grades: string;
  imgLabel: string;
  imgAccent: string;
  outcomes: string[];
  stack: string;
}

interface Currency {
  icon: React.ReactNode;
  label: string;
  num: string;
  fill: string;
  desc: string;
}

/* ─── data ──────────────────────────────────────────────── */
const currencies: Currency[] = [
  {
    icon: <Code2 size={34} color="#fff" strokeWidth={1.6} />,
    label: "Code",
    num: "01",
    fill: "#3AB54A",
    desc: "Write, debug and ship real code from week one — not someday.",
  },
  {
    icon: <Palette size={34} color="#fff" strokeWidth={1.6} />,
    label: "Creativity",
    num: "02",
    fill: "#3AB54A",
    desc: "Design thinking and visual problem-solving woven into every project.",
  },
  {
    icon: <Zap size={34} color="#fff" strokeWidth={1.6} />,
    label: "Confidence",
    num: "03",
    fill: "#1C2A57",
    desc: "Ship something you made — confidence follows automatically.",
  },
  {
    icon: <Compass size={34} color="#fff" strokeWidth={1.6} />,
    label: "Curiosity",
    num: "04",
    fill: "#1C2A57",
    desc: "We protect the explorer mindset in every single session.",
  },
];

const longTermPrograms: Program[] = [
  {
    badge: "Student Program",
    duration: "1 Year · Flagship",
    title: "Young Tinkerpreneur",
    tagline: "Idea → invention → income.",
    desc: "Students become founders-in-training: customer discovery, prototyping, branding, pricing — not just code.",
    modules: 12,
    format: "Hybrid Cohort",
    grades: "Grades 7–12",
    imgLabel: "Add image — student building hardware prototype",
    imgAccent: "#1C2A57",
    outcomes: ["Working hardware-software micro-venture", "Live landing page", "Pitch video", "Printed portfolio"],
    stack: "Arduino · Tinkercad · Next.js · Supabase · Figma · LLM prompting",
  },
  {
    badge: "Student Program",
    duration: "6 Months",
    title: "Young Vibe Coder",
    tagline: "The new way kids code.",
    desc: "Code like modern startups — AI pair-programming, modern web stacks, ship fast. Syntax memorisation not required.",
    modules: 10,
    format: "Online Cohort",
    grades: "Grades 6–10",
    imgLabel: "Add image — student coding with AI tools",
    imgAccent: "#3AB54A",
    outcomes: ["Deployed AI-augmented web app", "Public GitHub repo", "Walkthrough video"],
    stack: "Next.js · Tailwind · Supabase · Flutter · Claude/ChatGPT API",
  },
  {
    badge: "Student Program",
    duration: "6 Months",
    title: "3D World Creator",
    tagline: "Blank screen → playable world.",
    desc: "From never opening a 3D tool to publishing an interactive 3D world. Blender + Unity, start to finish.",
    modules: 10,
    format: "Hybrid Cohort",
    grades: "Grades 7–12",
    imgLabel: "Add image — 3D modelling session on screen",
    imgAccent: "#1C2A57",
    outcomes: ["Playable WebGL world", "60-sec cinematic showreel"],
    stack: "Blender 4.x · Unity 2023 LTS · Mixamo · Quixel · C#",
  },
];

const sprintPrograms: Program[] = [
  {
    badge: "Sprint Program",
    duration: "20 Days",
    title: "Future Coder Sprint",
    tagline: "The friendliest entry into real coding.",
    desc: "Hooks beginners on building, not syntax. First win in week one.",
    modules: 6,
    format: "Daily Live",
    grades: "Grades 6–9",
    imgLabel: "Add image — beginner coding class",
    imgAccent: "#3AB54A",
    outcomes: ["Public Scratch game", "Deployed personal homepage"],
    stack: "Code.org · Scratch · HTML/CSS · Replit",
  },
  {
    badge: "Sprint Program",
    duration: "20 Days",
    title: "3DX Tinkercad Sprint",
    tagline: "Design 3D objects from scratch.",
    desc: "The first irreversible taste of being a maker. From nothing to a printed object.",
    modules: 6,
    format: "Online + Lab Day",
    grades: "Grades 6–10",
    imgLabel: "Add image — 3D printing lab session",
    imgAccent: "#1C2A57",
    outcomes: ["Three Tinkercad files", "A printed object (lab permitting)"],
    stack: "Tinkercad · Cura · optional FDM printer",
  },
  {
    badge: "Sprint Program",
    duration: "20 Days",
    title: "Foundation of Robotics",
    tagline: "Sensors. Circuits. Code. Movement.",
    desc: "From science-class observer to electromechanical builder. Live robot on Day 20.",
    modules: 6,
    format: "In-Lab",
    grades: "Grades 7–12",
    imgLabel: "Add image — robotics workshop with Arduino",
    imgAccent: "#3AB54A",
    outcomes: ["Working obstacle-avoidance robot — live on Day 20"],
    stack: "Arduino UNO R4 · ultrasonic + IR sensors · servo + DC motors",
  },
];

/* ─── card component ─────────────────────────────────────── */
function CourseCard({ program }: { program: Program }) {
  const isStudent = program.badge === "Student Program";
  const catBg    = isStudent ? "#3AB54A1A" : "#1C2A571A";
  const catColor = isStudent ? "#2A9A3A"   : "#1C2A57";

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">

      {/* Image */}
      <div
        className="w-full h-52 flex items-center justify-center text-xs text-center select-none px-4"
        style={{
          backgroundColor: program.imgAccent + "14",
          borderBottom: `3px solid ${program.imgAccent}`,
          color: program.imgAccent + "70",
        }}
      >
        {program.imgLabel}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* category pill */}
        <span
          className="self-start text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: catBg, color: catColor }}
        >
          #{program.badge}
        </span>

        {/* title */}
        <h3
          className="text-base font-bold m-0 leading-snug group-hover:opacity-75 transition-opacity duration-200"
          style={{ color: "#1C2A57" }}
        >
          {program.title}
        </h3>

        {/* tagline */}
        <p className="text-gray-400 text-xs leading-relaxed m-0">{program.tagline}</p>

        {/* meta */}
        <div className="flex items-center gap-2 flex-wrap text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <BookOpen size={12} strokeWidth={2} color="#3AB54A" />
            {program.modules} Modules
          </span>
          <span className="text-gray-200">|</span>
          <span className="flex items-center gap-1">
            <Clock size={12} strokeWidth={2} color="#3AB54A" />
            {program.duration}
          </span>
          <span className="text-gray-200">|</span>
          <span className="flex items-center gap-1">
            <Users size={12} strokeWidth={2} color="#3AB54A" />
            {program.grades}
          </span>
        </div>

        {/* outcomes */}
        <div className="flex flex-col gap-1.5">
          {program.outcomes.slice(0, 2).map((o) => (
            <div key={o} className="flex items-start gap-1.5">
              <CheckCircle2 size={11} color="#3AB54A" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
              <span className="text-gray-500 text-xs leading-snug">{o}</span>
            </div>
          ))}
        </div>

        {/* stars */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
            ))}
          </div>
          <span className="text-gray-400 text-xs">(250+ builders)</span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-1">
          <a
            href="/contact"
            className="no-underline flex items-center justify-between text-white px-5 py-3 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
          >
            <span>Reserve a Seat</span>
            <span className="text-white/75">{program.duration} →</span>
          </a>
        </div>

      </div>
    </div>
  );
}

/* ─── page ───────────────────────────────────────────────── */
export default function StudentsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="w-full px-8 max-md:px-5 py-24 max-md:py-16 flex flex-col items-center text-center"
        style={{ backgroundColor: "#1C2A57" }}
      >
        <div className="max-w-3xl flex flex-col gap-6">
          <p
            data-aos="fade-up" data-aos-duration="800"
            className="text-sm tracking-widest uppercase font-semibold m-0"
            style={{ color: "#3AB54A" }}
          >
            For Students · Grades 6–12
          </p>
          <h1
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
            className="text-5xl font-bold leading-tight m-0 text-white max-md:text-4xl"
          >
            While most kids consume technology,{" "}
            <span style={{ color: "#3AB54A" }}>ours create it.</span>
          </h1>
          <p
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            className="text-white/60 text-lg leading-relaxed m-0"
          >
            The next decade is full of screens. The question is scrolling or building.
            We turn screen time into skill time.
          </p>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <a
              href="/contact"
              className="no-underline inline-block text-white px-10 py-4 rounded-[50px] text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
            >
              Book a Free Discovery Call →
            </a>
          </div>
        </div>
      </section>

      {/* FOUR CURRENCIES */}
      <section className="w-full px-8 max-md:px-5 py-20 max-md:py-14" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "#3AB54A" }}>
              What they build
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              The four currencies
            </h2>
            <p className="text-gray-500 mt-3 m-0 text-sm">The fluencies that compound for life.</p>
          </div>

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {currencies.map((c, i) => (
              <div
                key={c.label}
                data-aos="fade-up" data-aos-duration="900" data-aos-delay={i * 90}
                className="relative flex flex-col items-center gap-5 p-8 rounded-2xl bg-white overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* decorative number */}
                <span
                  className="absolute -top-2 -right-1 text-[7rem] font-black select-none pointer-events-none leading-none"
                  style={{ color: c.fill + "0C" }}
                >
                  {c.num}
                </span>

                {/* circle icon */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: c.fill }}
                >
                  {c.icon}
                </div>

                <h3 className="text-xl font-bold m-0 text-center relative z-10" style={{ color: "#1C2A57" }}>
                  {c.label}
                </h3>

                <p className="text-gray-500 text-sm text-center leading-relaxed m-0 relative z-10">
                  {c.desc}
                </p>

                {/* bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                  style={{ backgroundColor: c.fill }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-TERM JOURNEYS */}
      <section className="w-full px-8 max-md:px-5 py-20 max-md:py-14 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "#3AB54A" }}>
              Track 1
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Long-Term Journeys
            </h2>
            <p className="text-gray-500 mt-2 m-0 text-sm">Deep, portfolio-grade transformation. 6–12 months.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {longTermPrograms.map((program, i) => (
              <div key={program.title} data-aos="fade-up" data-aos-duration="900" data-aos-delay={i * 100}>
                <CourseCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHORT-TERM SPRINTS */}
      <section className="w-full px-8 max-md:px-5 py-20 max-md:py-14" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "#1C2A57" }}>
              Track 2
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Short-Term Sprints
            </h2>
            <p className="text-gray-500 mt-2 m-0 text-sm">20 days. One unforgettable skill. Perfect for school breaks.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {sprintPrograms.map((program, i) => (
              <div key={program.title} data-aos="fade-up" data-aos-duration="900" data-aos-delay={i * 100}>
                <CourseCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="w-full px-8 max-md:px-5 py-20 max-md:py-14 flex flex-col items-center text-center"
        style={{ backgroundColor: "#1C2A57" }}
      >
        <div data-aos="fade-up" data-aos-duration="900" className="flex flex-col items-center gap-5 max-w-2xl">
          <h2 className="text-4xl font-bold m-0 text-white max-md:text-3xl">
            Not sure which program fits?
          </h2>
          <p className="text-white/60 text-base leading-relaxed m-0">
            Book a free discovery call. We&apos;ll map the right program to your child&apos;s pace and goals.
          </p>
          <a
            href="/contact"
            className="no-underline text-white px-10 py-4 rounded-[50px] text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
          >
            Book a Free Discovery Call →
          </a>
        </div>
      </section>
    </>
  );
}
