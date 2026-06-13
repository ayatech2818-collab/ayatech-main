import type { Metadata } from "next";
import { Users, Clock, TrendingUp, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Why AyaTech – Limited Cohorts, Real Outcomes, No Bootcamp Fluff",
  description:
    "Max 12 learners per cohort, mentors who ship, curriculum updated quarterly. Why builders choose AyaTech — and why the smart ones don't wait.",
};

const reasons = [
  {
    icon: <Users size={32} color="#3AB54A" strokeWidth={1.6} />,
    iconBg: "#3AB54A1A",
    num: "01",
    title: "Limited Cohorts",
    summary: "Max 12 learners per cohort.",
    body: "The ceiling for real 1:1s and live code reviews. Once a cohort fills, it's closed for the quarter. There's no waitlist that magically opens — the next intake starts fresh.",
    highlight: false,
  },
  {
    icon: <Clock size={32} color="#ffffff" strokeWidth={1.6} />,
    iconBg: "#FFFFFF20",
    num: "02",
    title: "Early-Bird Edge",
    summary: "Lock in within 14 days.",
    body: "15% off · 2× mentor hours · priority showcase placement. These aren't marketing tactics — they're structural advantages that compound over the program duration. The window is real and it closes.",
    highlight: true,
  },
  {
    icon: <TrendingUp size={32} color="#3AB54A" strokeWidth={1.6} />,
    iconBg: "#3AB54A1A",
    num: "03",
    title: "The Compound Curve",
    summary: "Start now, be 6 months ahead in 6 months.",
    body: "Wait, and you stay 6 months behind. The curve is unforgiving both ways. Every week you delay, someone else ships what you were thinking about. The gap isn't linear — it compounds.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Just another bootcamp?",
    a: "No. Bootcamps chase placement metrics. We build people who can design, prototype and ship — without us. Our graduates don't need us after they leave. That's the point.",
  },
  {
    q: "My child has never coded. Is that a problem?",
    a: "Entry programs assume zero coding knowledge. The first win lands in week one — a working project they can show someone. We've never had a student who \"wasn't ready\". Curiosity and commitment are the only prerequisites.",
  },
  {
    q: "I'm a senior IT professional. Is this too basic?",
    a: "Pro tracks assume Python fluency and dive straight into agents, MLOps, Docker and production-grade AI. Not a beginner's room. If you've been doing REST APIs for years, we build from there.",
  },
  {
    q: "What if I miss a session?",
    a: "All sessions are recorded and indexed. Office hours are on demand. Channels stay open 24/7 for the duration of the program. Missing a session doesn't mean falling behind.",
  },
  {
    q: "What's your refund policy?",
    a: "Full refund within the first two weeks if the program isn't exactly as described. We haven't had to use it in 12 months — and we still mean it. The offer stands because we're confident enough to make it.",
  },
];

export default function WhyAyaTechPage() {
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
            Why AyaTech
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="text-5xl font-bold leading-tight m-0 text-white max-md:text-4xl"
          >
            Why the smart ones{" "}
            <span style={{ color: "#3AB54A" }}>don&apos;t wait.</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-white/60 text-lg leading-relaxed m-0"
          >
            Max 12 learners per cohort. Mentors who ship. Curriculum updated quarterly.
            Here&apos;s exactly why builders choose AyaTech.
          </p>
        </div>
      </section>

      {/* THREE REASONS */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Three reasons. No fluff.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {reasons.map((r, i) => (
              <div
                key={r.num}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={i * 120}
                className="relative flex flex-col gap-6 p-10 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: r.highlight ? "#1C2A57" : "#F4F6F8",
                  border: r.highlight ? "none" : "1px solid #E5E7EB",
                }}
              >
                {/* Large background number */}
                <span
                  className="absolute top-4 right-6 text-8xl font-black select-none leading-none"
                  style={{ color: r.highlight ? "#FFFFFF08" : "#1C2A5708" }}
                >
                  {r.num}
                </span>

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: r.iconBg }}
                >
                  {r.icon}
                </div>

                <div className="flex flex-col gap-3">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#3AB54A" }}
                  >
                    {r.num}
                  </span>
                  <h3
                    className="text-2xl font-bold m-0"
                    style={{ color: r.highlight ? "#ffffff" : "#1C2A57" }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-base font-semibold m-0"
                    style={{ color: r.highlight ? "#3AB54A" : "#3AB54A" }}
                  >
                    {r.summary}
                  </p>
                  <p
                    className="text-sm leading-relaxed m-0"
                    style={{ color: r.highlight ? "#FFFFFF80" : "#6B7280" }}
                  >
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DIFFERENTIATORS STRIP */}
      <section className="w-full px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 text-center">
            {[
              { stat: "Max 12", label: "learners per cohort" },
              { stat: "Quarterly", label: "curriculum updates" },
              { stat: "100%", label: "project-based delivery" },
              { stat: "2-week", label: "no-questions refund window" },
            ].map(({ stat, label }, i) => (
              <div
                key={stat}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={i * 80}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-4xl font-black text-white max-md:text-3xl">{stat}</span>
                <span className="text-white/70 text-sm tracking-wide uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>
              Straight answers
            </p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>
              Frequently asked
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-duration="900" className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex justify-between items-center px-8 py-6 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-base font-bold pr-4" style={{ color: "#1C2A57" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    color="#3AB54A"
                    className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="px-8 pb-6">
                  <div className="h-px bg-gray-100 mb-5" />
                  <p className="text-gray-500 text-sm leading-relaxed m-0">{faq.a}</p>
                </div>
              </details>
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
            The future is already being built.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed m-0">
            Are you in the room?
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="/contact"
              className="no-underline text-white px-10 py-4 rounded-[50px] text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
            >
              Book a Free Discovery Call →
            </a>
            <a
              href="/outcomes"
              className="no-underline px-10 py-4 rounded-[50px] text-base font-semibold transition-all duration-200 hover:bg-white/10 active:scale-95"
              style={{ border: "2px solid #FFFFFF40", color: "#ffffff" }}
            >
              See Real Outcomes →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
