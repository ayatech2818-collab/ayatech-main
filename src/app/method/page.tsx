import type { Metadata } from "next";
import {
  Eye, Target, Lightbulb, Layers, FlaskConical,
  Anchor, SlidersHorizontal, Timer,
  ClipboardCheck, GitCommit, LayoutGrid, Award,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The AyaTech Method – Design Thinking + AI-Native Learning",
  description:
    "Not a bootcamp. Every project follows a five-stage design-thinking pathway, engineered for cognitive load, delivered LMS-native.",
};

const stages = [
  {
    num: "01",
    icon: <Eye size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Empathize",
    body: "Interview real users. Never hypothetical. Understand the problem before touching a keyboard.",
  },
  {
    num: "02",
    icon: <Target size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Define",
    body: "One problem statement. 12 words max. Clarity before complexity.",
  },
  {
    num: "03",
    icon: <Lightbulb size={24} color="#ffffff" strokeWidth={1.8} />,
    title: "Ideate",
    body: "10+ solutions — Crazy 8s, SCAMPER, How-Might-We. Volume first, judgment later.",
    highlight: true,
  },
  {
    num: "04",
    icon: <Layers size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Prototype",
    body: "Cheapest, fastest version that proves it. Days, not weeks. If it takes a month, it's not a prototype.",
  },
  {
    num: "05",
    icon: <FlaskConical size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Test",
    body: "Back to the user. Feedback. Iterate. Repeat. The loop never ends — that's the point.",
  },
];

const retentionPoints = [
  {
    icon: <Anchor size={26} color="#3AB54A" strokeWidth={1.8} />,
    title: "Prior-knowledge anchors",
    body: "No new concept without connecting it to something the learner already knows. Every abstraction has a foothold.",
    bg: "#3AB54A1A",
  },
  {
    icon: <SlidersHorizontal size={26} color="#3AB54A" strokeWidth={1.8} />,
    title: "Max 3 abstractions per session",
    body: "Cognitive overload is the enemy of retention. We cap new concepts and drill application before moving on.",
    bg: "#3AB54A1A",
  },
  {
    icon: <Timer size={26} color="#1C2A57" strokeWidth={1.8} />,
    title: "20-minute theory → hands-on artefact",
    body: "Every 20 minutes of theory is followed by a build. You don't learn to swim by watching lectures about water.",
    bg: "#1C2A571A",
  },
];

const lmsFeatures = [
  { icon: <ClipboardCheck size={22} color="#3AB54A" strokeWidth={1.8} />, label: "Auto-graded rubrics" },
  { icon: <GitCommit size={22} color="#3AB54A" strokeWidth={1.8} />, label: "Git-versioned deliverables" },
  { icon: <LayoutGrid size={22} color="#3AB54A" strokeWidth={1.8} />, label: "Kanban progress tracking" },
  { icon: <Award size={22} color="#3AB54A" strokeWidth={1.8} />, label: "Open Badges 2.0 credentials" },
];

export default function MethodPage() {
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
            The AyaTech Method
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="text-5xl font-bold leading-tight m-0 text-white max-md:text-4xl"
          >
            Not a bootcamp.<br />
            <span style={{ color: "#3AB54A" }}>A methodology.</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-white/60 text-lg leading-relaxed m-0"
          >
            Grade 6 robotics or enterprise AI — same five stages. Every project. Every time.
          </p>
        </div>
      </section>

      {/* DESIGN THINKING */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-14">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>
              Design Thinking, end-to-end
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Five stages. Zero shortcuts.
            </h2>
          </div>

          {/* Stages — vertical timeline */}
          <div className="flex flex-col gap-0">
            {stages.map((stage, i) => (
              <div
                key={stage.num}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 80}
                className="flex gap-8 items-start max-md:gap-5"
              >
                {/* Left: number + connector line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 max-md:w-12 max-md:h-12"
                    style={{
                      backgroundColor: stage.highlight ? "#1C2A57" : "#F4F6F8",
                    }}
                  >
                    {stage.icon}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ backgroundColor: "#3AB54A40", minHeight: "2rem" }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="flex flex-col gap-2 pb-10 max-md:pb-6">
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#3AB54A" }}>
                    {stage.num}
                  </span>
                  <h3 className="text-2xl font-bold m-0 max-md:text-xl" style={{ color: "#1C2A57" }}>
                    {stage.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed m-0 max-w-lg">
                    {stage.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENGINEERED FOR RETENTION */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>
              Cognitive science, applied
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Engineered for retention
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {retentionPoints.map((point, i) => (
              <div
                key={point.title}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 120}
                className="flex flex-col gap-5 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: point.bg }}
                >
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold m-0" style={{ color: "#1C2A57" }}>{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">{point.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LMS-OPTIMIZED */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1">

          <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col gap-6">
            <p className="text-sm tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
              Built on infrastructure
            </p>
            <h2 className="text-4xl font-bold leading-snug m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              LMS-optimized from day one
            </h2>
            <p className="text-gray-500 text-base leading-relaxed m-0">
              Every deliverable is tracked, versioned, and credentialed. Learners leave with a verifiable portfolio — not just a certificate of attendance.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="grid grid-cols-2 gap-5"
          >
            {lmsFeatures.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#3AB54A1A" }}
                >
                  {f.icon}
                </div>
                <span className="text-sm font-semibold leading-tight" style={{ color: "#1C2A57" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MENTOR MODEL */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#1C2A57" }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">

          <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col gap-4">
            <p className="text-sm tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
              The humans behind it
            </p>
            <h2 className="text-4xl font-bold m-0 text-white max-md:text-3xl">
              The mentor model
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: "#3AB54A1A" }}
          >
            <UserCheck size={40} color="#3AB54A" strokeWidth={1.6} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="grid grid-cols-2 gap-6 w-full max-md:grid-cols-1"
          >
            {[
              { stat: "1 senior practitioner", label: "per cohort — not a TA, not a generalist" },
              { stat: "Weekly 1:1s", label: "personalised feedback every single week" },
              { stat: "Live code reviews", label: "your work, line by line, in real time" },
              { stat: "24/7 Slack/Discord", label: "channels stay open the entire program" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="flex flex-col gap-2 p-7 rounded-2xl text-left"
                style={{ backgroundColor: "#FFFFFF0D" }}
              >
                <span className="text-xl font-bold" style={{ color: "#3AB54A" }}>{stat}</span>
                <span className="text-white/60 text-sm">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA CLOSER */}
      <section className="w-full px-8 py-20 bg-white flex flex-col items-center text-center gap-6">
        <div data-aos="fade-up" data-aos-duration="900" className="flex flex-col items-center gap-5 max-w-xl">
          <h2 className="text-3xl font-bold m-0" style={{ color: "#1C2A57" }}>
            See the method in action.
          </h2>
          <p className="text-gray-500 leading-relaxed m-0">
            Book a free discovery call and we&apos;ll walk you through exactly how the method applies to your program.
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
