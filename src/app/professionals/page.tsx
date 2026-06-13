import type { Metadata } from "next";
import {
  BotMessageSquare, TrendingUp, Database, Server,
  BookOpen, Film, MessageSquare, Workflow,
  ArrowRight, Clock, Monitor, Users, CheckCircle2,
  Trophy, Zap, Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Data Upskilling for Professionals | AyaTech Career Tracks",
  description:
    "AI is rewriting every job description. Out-skill it. Cohort GenAI, data, automation and prompt-engineering tracks for working professionals.",
};

const tiers = [
  {
    icon: <Trophy size={22} color="#3AB54A" strokeWidth={1.8} />,
    label: "Continuous Professional Development",
    desc: "Promotion-grade transformations. 10–12 weeks.",
    bg: "#3AB54A1A",
  },
  {
    icon: <Zap size={22} color="#3AB54A" strokeWidth={1.8} />,
    label: "Micro Technical Skills",
    desc: "Sharp upgrades, weekend to 4-week scale.",
    bg: "#3AB54A1A",
  },
  {
    icon: <Layers size={22} color="#1C2A57" strokeWidth={1.8} />,
    label: "Productivity · Impact · Leverage",
    desc: "AI workflows for non-engineers. Save hours every week.",
    bg: "#1C2A571A",
  },
];

type Program = {
  icon: React.ReactNode;
  badge: string;
  title: string;
  tagline: string;
  desc: string;
  journey: string[];
  outcomes: string[];
  details: { icon: React.ReactNode; label: string }[];
  stack: string;
  credential?: string;
};

const cpdPrograms: Program[] = [
  {
    icon: <BotMessageSquare size={26} color="#3AB54A" strokeWidth={1.8} />,
    badge: "12 Weeks · For IT Pros",
    title: "Generative AI Master Class",
    tagline: "Become the AI lead your team needs.",
    desc: "Competent engineer → production-grade AI builder. From LLM foundations to Dockerized services in production.",
    journey: ["LLM Foundations", "RAG & Retrieval", "Agentic Workflows", "Production MLOps", "Capstone"],
    outcomes: [
      "Dockerized GenAI service on a public endpoint",
      "Internal integration case study",
      "Open Badges 2.0 credential",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "12 weeks · 2 live/week + lab" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Live online + weekly office hours" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Developers, architects, ML engineers, tech leads" },
    ],
    stack: "OpenAI/Anthropic APIs · LangChain · LlamaIndex · Docker · Pinecone/pgvector · Hugging Face · MLflow",
    credential: "Open Badges 2.0",
  },
  {
    icon: <TrendingUp size={26} color="#3AB54A" strokeWidth={1.8} />,
    badge: "10 Weeks",
    title: "Data Science with Python",
    tagline: "The stack hiring managers fight over.",
    desc: "From spreadsheet decisions to predictive-model decisions. Ship a Streamlit app, not just a notebook.",
    journey: ["Python for Data", "Visual Analytics", "Predictive Modelling", "Capstone"],
    outcomes: [
      "GitHub portfolio",
      "Deployed Streamlit app",
      "Written analysis",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "10 weeks · 2 live/week + project" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Live online + industry mentor" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Analysts, BI pros, IT pivoting into data" },
    ],
    stack: "Python · Pandas · NumPy · Scikit-learn · Seaborn · Streamlit · Git",
  },
];

const microPrograms: Program[] = [
  {
    icon: <Database size={26} color="#3AB54A" strokeWidth={1.8} />,
    badge: "4 Weeks",
    title: "SQL Master Class",
    tagline: "Make data answer to you.",
    desc: "SQL-shy analyst → confident query author. Foundations through window functions, optimisation and visualisation.",
    journey: ["Foundations", "Joins & Subqueries", "Window Functions & CTEs", "Optimise & Visualise"],
    outcomes: [
      "5-query analytical case study on your portfolio",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "4 weeks · 1 live + 1 lab/week" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Online + hosted query sandbox" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Analysts, PMs, ops leads" },
    ],
    stack: "PostgreSQL 16 · DBeaver · dbt · Metabase",
  },
  {
    icon: <Server size={26} color="#3AB54A" strokeWidth={1.8} />,
    badge: "Weekend Intensive",
    title: "Supabase Masterclass",
    tagline: "Backend in a weekend. Ship without a server.",
    desc: "Frontend dev → full-stack, deployed by Monday. Auth, realtime, storage — all in one weekend.",
    journey: ["Schema & Auth", "Realtime & Storage", "Ship to Prod"],
    outcomes: [
      "Auth-enabled realtime app on a public URL",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "Weekend intensive + 2-week project" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Live intensive + async review" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Frontend devs, indie hackers, builders" },
    ],
    stack: "Supabase (Postgres, Auth, Storage, Realtime, Edge) · Next.js · Tailwind",
  },
];

const pilPrograms: Program[] = [
  {
    icon: <BookOpen size={26} color="#1C2A57" strokeWidth={1.8} />,
    badge: "6 Weeks · For Educators",
    title: "Teachx-AI",
    tagline: "Lesson plans & assessments in minutes, not weekends.",
    desc: "Reclaim 8–10 hours a week. Build a personal AI Teaching Toolkit that works without technical expertise.",
    journey: ["Prompting for Educators", "Lesson Plan Factory", "Assessment Engine", "Content Studio", "Classroom Pilot"],
    outcomes: [
      "15+ reusable prompts",
      "5 lesson plans",
      "3 assessments ready to deploy",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "6 weeks · 1 live + 1 lab/week" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Online + peer circles" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Teachers, faculty, trainers, IDs" },
    ],
    stack: "Claude/ChatGPT · NotebookLM · Diffit · Curipod · Magicschool · Canva AI",
  },
  {
    icon: <Film size={26} color="#1C2A57" strokeWidth={1.8} />,
    badge: "8 Weeks · Creator Edition",
    title: "GenAI Video Mastery",
    tagline: "Direct cinema with prompts, not crews.",
    desc: "Ship a 60-sec cinema-grade video in under 4 hours. From visual direction to final export.",
    journey: ["Visual Direction", "Image to Video", "Voice & Sound", "Editing & Polish", "Capstone Reel"],
    outcomes: [
      "60-sec branded short",
      "Behind-the-prompts walkthrough",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "8 weeks · 1 live + 1 lab/week" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Online + creative critiques" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Creators, marketers, founders, SMMs" },
    ],
    stack: "Runway · Pika · Kling · Midjourney · ElevenLabs · CapCut · DaVinci",
  },
  {
    icon: <MessageSquare size={26} color="#1C2A57" strokeWidth={1.8} />,
    badge: "3 Weeks",
    title: "Prompt Engineering for All",
    tagline: "The highest-ROI skill of the decade.",
    desc: "Anyone → confident, structured prompter on any frontier LLM. Mental models, workflows, specialised use.",
    journey: ["Mental Models", "Workflows", "Specialised Use"],
    outcomes: [
      "50+ prompt personal library, exported and reusable",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "3 weeks · 2 live/week" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Online + daily practice prompts" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Everyone — all roles, no prerequisites" },
    ],
    stack: "Claude · ChatGPT · Gemini · NotebookLM · Perplexity",
  },
  {
    icon: <Workflow size={26} color="#1C2A57" strokeWidth={1.8} />,
    badge: "6 Weeks",
    title: "Agentic Automation at Workplace",
    tagline: "Build digital employees that handle the boring 80%.",
    desc: "Knowledge worker → automation architect. Save 5+ hours/week with multi-agent workflows.",
    journey: ["Automation Foundations", "AI-in-the-Loop", "Multi-Agent Patterns", "Workplace Capstone"],
    outcomes: [
      "3+ live automations",
      "Documented time-saved metrics",
    ],
    details: [
      { icon: <Clock size={14} strokeWidth={1.8} />, label: "6 weeks · 1 live + 1 lab/week" },
      { icon: <Monitor size={14} strokeWidth={1.8} />, label: "Online + workflow gallery" },
      { icon: <Users size={14} strokeWidth={1.8} />, label: "Knowledge workers, ops, founders, PMs" },
    ],
    stack: "n8n · Make.com · OpenAI/Anthropic APIs · Zapier · webhooks · JSON",
  },
];

function ProCard({ program, accentColor, iconBg }: { program: Program; accentColor: string; iconBg: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="h-1 w-full" style={{ backgroundColor: accentColor }} />
      <div className="flex flex-col gap-5 p-7 flex-1">

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: iconBg }}>
            {program.icon}
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ backgroundColor: iconBg, color: accentColor }}>
              {program.badge}
            </span>
            <h3 className="text-lg font-bold mt-2 mb-0" style={{ color: "#1C2A57" }}>{program.title}</h3>
            <p className="text-sm font-semibold m-0" style={{ color: accentColor }}>{program.tagline}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed m-0">{program.desc}</p>

        {/* Journey */}
        <div className="flex flex-wrap gap-2 items-center">
          {program.journey.map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{step}</span>
              {i < program.journey.length - 1 && <ArrowRight size={11} color="#9CA3AF" strokeWidth={2} />}
            </span>
          ))}
        </div>

        {/* Outcomes */}
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>You walk out with</p>
          {program.outcomes.map((o) => (
            <div key={o} className="flex items-start gap-2">
              <CheckCircle2 size={14} color="#3AB54A" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
              <span className="text-xs text-gray-600">{o}</span>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-1.5 pt-3 border-t border-gray-100">
          {program.details.map((d) => (
            <div key={d.label} className="flex items-center gap-2 text-gray-500 text-xs">
              <span style={{ color: accentColor }}>{d.icon}</span>
              {d.label}
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-1 m-0">
            <span className="font-semibold text-gray-500">Stack: </span>{program.stack}
          </p>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="no-underline mt-auto text-center text-white py-3 rounded-[50px] text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
          style={{ backgroundColor: accentColor }}
        >
          Reserve a Seat →
        </a>
      </div>
    </div>
  );
}

export default function ProfessionalsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="w-full px-8 py-24 flex flex-col items-center text-center" style={{ backgroundColor: "#1C2A57" }}>
        <div className="max-w-3xl flex flex-col gap-6">
          <p data-aos="fade-up" data-aos-duration="800" className="text-sm tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
            For Professionals
          </p>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-5xl font-bold leading-tight m-0 text-white max-md:text-4xl">
            Stay relevant. Stay rewarded.{" "}
            <span style={{ color: "#3AB54A" }}>Stay ahead.</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-white/60 text-lg leading-relaxed m-0">
            AI is rewriting every job description. Winners won&apos;t resist it — they&apos;ll out-skill it.
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

      {/* THREE TIERS OVERVIEW */}
      <section className="w-full px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div data-aos="fade-up" data-aos-duration="800" className="text-center">
            <p className="text-sm tracking-widest uppercase font-semibold mb-3" style={{ color: "#3AB54A" }}>Three tracks</p>
            <h2 className="text-4xl font-bold m-0 max-md:text-3xl" style={{ color: "#1C2A57" }}>Pick your level of ambition</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {tiers.map((tier, i) => (
              <div
                key={tier.label}
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={i * 120}
                className="flex gap-4 p-7 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: tier.bg }}>{tier.icon}</div>
                <div>
                  <h3 className="text-base font-bold m-0 mb-1" style={{ color: "#1C2A57" }}>{tier.label}</h3>
                  <p className="text-gray-500 text-sm m-0">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPD */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "#3AB54A" }}>Track 1</p>
            <h2 className="text-3xl font-bold m-0" style={{ color: "#1C2A57" }}>Continuous Professional Development</h2>
            <p className="text-gray-500 mt-2 m-0">Promotion-grade transformations. Deep, cohort-based, mentor-led.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {cpdPrograms.map((p, i) => (
              <div key={p.title} data-aos="fade-up" data-aos-duration="900" data-aos-delay={i * 120}>
                <ProCard program={p} accentColor="#3AB54A" iconBg="#3AB54A1A" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MICRO SKILLS */}
      <section className="w-full px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "#3AB54A" }}>Track 2</p>
            <h2 className="text-3xl font-bold m-0" style={{ color: "#1C2A57" }}>Micro Technical Skills</h2>
            <p className="text-gray-500 mt-2 m-0">Big leverage. Small time. Weekend to 4-week scale.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {microPrograms.map((p, i) => (
              <div key={p.title} data-aos="fade-up" data-aos-duration="900" data-aos-delay={i * 120}>
                <ProCard program={p} accentColor="#3AB54A" iconBg="#3AB54A1A" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIL */}
      <section className="w-full px-8 py-24" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div data-aos="fade-up" data-aos-duration="800">
            <p className="text-xs tracking-widest uppercase font-semibold mb-2" style={{ color: "#1C2A57" }}>Track 3</p>
            <h2 className="text-3xl font-bold m-0" style={{ color: "#1C2A57" }}>Productivity · Impact · Leverage</h2>
            <p className="text-gray-500 mt-2 m-0">Make AI your second brain. No engineering background required.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {pilPrograms.map((p, i) => (
              <div key={p.title} data-aos="fade-up" data-aos-duration="900" data-aos-delay={i * 100}>
                <ProCard program={p} accentColor="#1C2A57" iconBg="#1C2A571A" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CLOSER */}
      <section className="w-full px-8 py-24 flex flex-col items-center text-center" style={{ backgroundColor: "#1C2A57" }}>
        <div data-aos="fade-up" data-aos-duration="900" className="flex flex-col items-center gap-5 max-w-2xl">
          <h2 className="text-4xl font-bold m-0 text-white max-md:text-3xl">
            Not sure where to start?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed m-0">
            Book a free discovery call. We&apos;ll map the right track to your role, goals and timeline — no hard sell.
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
