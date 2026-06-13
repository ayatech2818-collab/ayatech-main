import type { Metadata } from "next";
import {
  GraduationCap, Code2, Box,
  TrendingUp, BarChart2, BookOpen,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Builds, Real Career Moves – AyaTech Outcomes",
  description:
    "From a Grade 9 smart-pillbox to a fintech engineer's promotion — the real builds and moves AyaTech learners ship.",
};

const studentOutcomes = [
  {
    icon: <GraduationCap size={26} color="#3AB54A" strokeWidth={1.8} />,
    name: "Aarav",
    grade: "Grade 9",
    program: "Young Tinkerpreneur",
    built: "Smart pillbox",
    result: "Top 3 at his school innovation fair.",
    detail: "Built a hardware-software pillbox that alerts caregivers when medication is missed. Presented at the school innovation fair, placed top 3 out of 60+ entries.",
    tag: "Hardware · Software · Pitch",
  },
  {
    icon: <Code2 size={26} color="#3AB54A" strokeWidth={1.8} />,
    name: "Meera",
    grade: "Grade 7",
    program: "Future Coder Sprint",
    built: "Attendance tracker",
    result: "Shipped a web page in week one.",
    detail: "Started with zero coding experience. Had a deployed personal web page by week one. By end of program, had built her teacher's attendance tracker — now in daily use.",
    tag: "Web · HTML/CSS · Real-world use",
  },
  {
    icon: <Box size={26} color="#3AB54A" strokeWidth={1.8} />,
    name: "Rohan",
    grade: "Grade 11",
    program: "3D World Creator",
    built: "WebGL game",
    result: "Into a national design showcase.",
    detail: "Had never opened Blender. Six months later, published a playable WebGL game and a cinematic showreel. Selected for a national student design showcase.",
    tag: "Blender · Unity · WebGL",
  },
];

const proOutcomes = [
  {
    icon: <TrendingUp size={28} color="#3AB54A" strokeWidth={1.8} />,
    role: "Fintech Engineer",
    program: "GenAI Master Class",
    metric: "Promoted",
    metricSub: "in 4 months",
    result: "Shipped a RAG service that replaced a $40,000/year manual process. The service went live in week 10 of the program. Promoted to AI lead four months after completing the course.",
  },
  {
    icon: <BarChart2 size={28} color="#3AB54A" strokeWidth={1.8} />,
    role: "BI Analyst",
    program: "Data Science with Python",
    metric: "+35%",
    metricSub: "pay uplift",
    result: "Moved from BI reporting into a data science role at a new company. The GitHub portfolio and deployed Streamlit app were the deciding factors in the hiring decision.",
  },
  {
    icon: <BookOpen size={28} color="#1C2A57" strokeWidth={1.8} />,
    role: "Secondary School Teacher",
    program: "Teachx-AI",
    metric: "9 hrs/week",
    metricSub: "reclaimed",
    result: "Lesson planning went from a weekend task to a 20-minute daily routine. Built a personal prompt library of 30+ templates. Now running peer workshops for colleagues.",
  },
];

const quotes = [
  {
    text: "AyaTech didn't teach my daughter a skill. It rewired her relationship with screens.",
    author: "Parent",
    sub: "Young Tinkerpreneur cohort",
  },
  {
    text: "I spent five years feeling like AI was happening to me. Now I lead my company's AI roadmap.",
    author: "GenAI Master Class graduate",
    sub: "12-week cohort, Bangalore",
  },
];

export default function OutcomesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="w-full px-8 py-24 flex flex-col items-center text-center"
        style={{ backgroundColor: "#1C2A57" }}
      >
        <div className="max-w-3xl flex flex-col gap-6">
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-sm tracking-widest uppercase font-semibold m-0"
            style={{ color: "#3AB54A" }}
          >
            Outcomes
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="text-5xl font-bold leading-tight m-0 text-white max-md:text-4xl"
          >
            Real builds.{" "}
            <span style={{ color: "#3AB54A" }}>Real career moves.</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-white/60 text-lg leading-relaxed m-0"
          >
            From a Grade 9 smart-pillbox to a fintech engineer&apos;s promotion.
            These are the builds and moves AyaTech learners ship.
          </p>
        </div>
      </section>

      {/* STUDENT OUTCOMES */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: "#3AB54A" }}>
              Students · Grades 6–12
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              What they shipped
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {studentOutcomes.map((s, i) => (
              <div
                key={s.name}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 120}
                className="flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-1 w-full" />
                <div className="flex flex-col gap-5 p-8 flex-1">

                  {/* Avatar + name */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#3AB54A1A" }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-lg font-bold m-0" style={{ color: "#1C2A57" }}>{s.name}</p>
                      <p className="text-xs text-gray-400 m-0">{s.grade} · {s.program}</p>
                    </div>
                  </div>

                  {/* Built */}
                  <div className="flex flex-col gap-1">
                    <p className="text-xs tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
                      Built
                    </p>
                    <p className="text-xl font-bold m-0" style={{ color: "#1C2A57" }}>{s.built}</p>
                    <p className="text-sm font-semibold m-0" style={{ color: "#3AB54A" }}>{s.result}</p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed m-0 flex-1">{s.detail}</p>

                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full self-start"
                    style={{ backgroundColor: "#3AB54A1A", color: "#3AB54A" }}
                  >
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRO OUTCOMES */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-sm tracking-widest uppercase font-semibold mb-2" style={{ color: "#3AB54A" }}>
              Professionals
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              The career moves
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {proOutcomes.map((p, i) => (
              <div
                key={p.role}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 120}
                className="flex flex-col gap-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: i < 2 ? "#3AB54A1A" : "#1C2A571A" }}
                  >
                    {p.icon}
                  </div>
                  {/* Big metric */}
                  <div className="text-right">
                    <p className="text-3xl font-black m-0 leading-none" style={{ color: "#3AB54A" }}>
                      {p.metric}
                    </p>
                    <p className="text-xs text-gray-400 m-0 mt-1">{p.metricSub}</p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold m-0" style={{ color: "#1C2A57" }}>{p.role}</p>
                  <p className="text-xs text-gray-400 m-0 mt-1">{p.program}</p>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed m-0">{p.result}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VOICES */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#1C2A57" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>
              In their words
            </p>
            <h2 className="text-4xl font-bold m-0 text-white max-md:text-3xl">
              Voices
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {quotes.map((q, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={i * 150}
                className="flex flex-col gap-6 p-10 rounded-2xl"
                style={{ backgroundColor: "#FFFFFF0D" }}
              >
                <Quote size={32} color="#3AB54A" strokeWidth={1.6} />
                <p className="text-xl font-medium leading-relaxed m-0 text-white">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="flex flex-col gap-1 mt-auto pt-6 border-t border-white/10">
                  <span className="font-bold text-white text-sm">— {q.author}</span>
                  <span className="text-white/40 text-xs">{q.sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 max-md:grid-cols-2 text-center">
          {[
            { stat: "250+", label: "student builders" },
            { stat: "40+", label: "professionals upskilled" },
            { stat: "$40k/yr", label: "process replaced by one grad" },
            { stat: "9 hrs/week", label: "reclaimed by a teacher" },
          ].map(({ stat, label }, i) => (
            <div
              key={stat}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 80}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl font-black max-md:text-3xl" style={{ color: "#3AB54A" }}>
                {stat}
              </span>
              <span className="text-gray-500 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CLOSER */}
      <section
        className="w-full px-8 py-24 flex flex-col items-center text-center"
        style={{ backgroundColor: "#F4F6F8" }}
      >
        <div data-aos="fade-up" data-aos-duration="900" className="flex flex-col items-center gap-6 max-w-2xl">
          <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
            Your build starts here.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed m-0">
            Book a free discovery call and walk away with a roadmap — enrol or not.
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
