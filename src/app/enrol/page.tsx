import type { Metadata } from "next";
import {
  CalendarCheck, Map, FlaskConical, Rocket,
  CheckCircle2, ShieldCheck, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Enrol – AyaTech's No-Pressure 4-Step Flow",
  description:
    "Book a free discovery call, get a roadmap, trial risk-free, then start shipping. Transparent pricing, no hard sell.",
};

const steps = [
  {
    num: "01",
    icon: <CalendarCheck size={30} color="#3AB54A" strokeWidth={1.6} />,
    iconBg: "#3AB54A1A",
    title: "Book",
    sub: "Free 30-min discovery call",
    body: "Pick a slot that works. No prep needed. The call is about understanding you — your goals, your level, your schedule.",
  },
  {
    num: "02",
    icon: <Map size={30} color="#ffffff" strokeWidth={1.6} />,
    iconBg: "#FFFFFF15",
    title: "Roadmap",
    sub: "Personalised plan",
    body: "Which programs, in what sequence, toward what outcomes. We'll also tell you what not to take — and why.",
    highlight: true,
  },
  {
    num: "03",
    icon: <FlaskConical size={30} color="#3AB54A" strokeWidth={1.6} />,
    iconBg: "#3AB54A1A",
    title: "Trial",
    sub: "No-risk first week",
    body: "Join the cohort for week one. If it's not exactly as described, walk away — full refund, no questions, no forms.",
  },
  {
    num: "04",
    icon: <Rocket size={30} color="#3AB54A" strokeWidth={1.6} />,
    iconBg: "#3AB54A1A",
    title: "Ship",
    sub: "Enrol · Kickoff · Build",
    body: "Rolling intakes monthly. Your cohort starts, your mentor is assigned, your first project brief lands in week one.",
  },
];

const callPoints = [
  "30-min video call — no prep required",
  "Level + goals diagnostic — we ask, you talk",
  "Honest recommendation, including what not to take",
  "Written roadmap + pricing follow-up within 24 hrs",
];

const guarantees = [
  {
    icon: <ShieldCheck size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "2-week full refund",
    body: "If the program isn't exactly as described in the first two weeks, you walk away with a full refund. No forms. No questions.",
  },
  {
    icon: <Clock size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Transparent pricing",
    body: "Pricing is on every program page. Early-bird discounts are time-bound and clearly stated. No hidden fees, no upsell calls.",
  },
  {
    icon: <CheckCircle2 size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "No high-pressure sales",
    body: "The discovery call is about fit, not closing. If it's not the right match, we'll say so — even if that means recommending nothing.",
  },
];

export default function EnrolPage() {
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
            Enrol
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="text-5xl font-bold leading-tight m-0 text-white max-md:text-4xl"
          >
            Four steps.{" "}
            <span style={{ color: "#3AB54A" }}>No pressure.</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-white/60 text-lg leading-relaxed m-0"
          >
            Book a call, get a roadmap, trial risk-free, then start shipping.
            Transparent pricing. No hard sell. Ever.
          </p>
        </div>
      </section>

      {/* 4-STEP FLOW */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              How it works
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {steps.map((step, i) => (
              <div
                key={step.num}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 100}
                className="relative flex flex-col gap-5 p-8 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: step.highlight ? "#1C2A57" : "#F4F6F8",
                  border: step.highlight ? "none" : "1px solid #E5E7EB",
                }}
              >
                {/* Ghost number */}
                <span
                  className="absolute bottom-3 right-4 text-7xl font-black select-none leading-none"
                  style={{ color: step.highlight ? "#FFFFFF08" : "#1C2A5708" }}
                >
                  {step.num}
                </span>

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: step.iconBg }}
                >
                  {step.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#3AB54A" }}>
                    {step.num}
                  </span>
                  <h3
                    className="text-2xl font-bold m-0"
                    style={{ color: step.highlight ? "#ffffff" : "#1C2A57" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm font-semibold m-0"
                    style={{ color: "#3AB54A" }}
                  >
                    {step.sub}
                  </p>
                  <p
                    className="text-sm leading-relaxed m-0"
                    style={{ color: step.highlight ? "#FFFFFF70" : "#6B7280" }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1">

          <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col gap-6">
            <div>
              <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>
                Step 1 in detail
              </p>
              <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
                On the discovery call
              </h2>
            </div>
            <p className="text-gray-500 text-base leading-relaxed m-0">
              It&apos;s a conversation, not a pitch. We want to understand your goals, your current level,
              and what success looks like for you — so we can recommend the right program
              in the right sequence. If nothing fits, we&apos;ll say so.
            </p>
            <div className="flex flex-col gap-4">
              {callPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#3AB54A1A" }}
                  >
                    <CheckCircle2 size={16} color="#3AB54A" strokeWidth={2} />
                  </div>
                  <p className="text-gray-600 text-sm m-0">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">
            <a
              href="#"
              className="no-underline flex flex-col items-center justify-center gap-4 p-12 rounded-2xl text-center transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#1C2A57" }}
            >
              <CalendarCheck size={48} color="#3AB54A" strokeWidth={1.6} />
              <p className="text-2xl font-bold text-white m-0">Book your free call</p>
              <p className="text-white/50 text-sm m-0">30 minutes · No prep · No obligation</p>
              <span
                className="mt-2 px-8 py-3 rounded-[50px] text-sm font-semibold text-white"
              >
                Pick a slot →
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* PRICING PHILOSOPHY + GUARANTEES */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>
              Our commitments
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Pricing philosophy
            </h2>
            <p className="text-gray-500 mt-4 m-0 max-w-xl mx-auto">
              Transparent pricing on every program page. Early-bird discounts are time-bound.
              The call is about fit, not closing.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {guarantees.map((g, i) => (
              <div
                key={g.title}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 120}
                className="flex flex-col gap-5 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#3AB54A1A" }}
                >
                  {g.icon}
                </div>
                <h3 className="text-lg font-bold m-0" style={{ color: "#1C2A57" }}>{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">{g.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA CLOSER */}
      <section
        className="w-full px-8 py-24 flex flex-col items-center text-center"
        style={{ backgroundColor: "#1C2A57" }}
      >
        <div data-aos="fade-up" data-aos-duration="900" className="flex flex-col items-center gap-6 max-w-2xl">
          <h2 className="text-4xl font-bold m-0 text-white max-md:text-3xl">
            The first step is a conversation.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed m-0">
            30 minutes. A roadmap. And an honest answer on whether AyaTech is the right fit.
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
