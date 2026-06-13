import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact AyaTech – Book Your Free Discovery Call",
  description:
    "Ready to build what's next? Book a free discovery call and walk away with a roadmap — whether or not you enrol.",
};

const infoCards = [
  {
    icon: <MapPin size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Visit Us At",
    lines: ["Bengaluru · Kochi", "Coimbatore · Online"],
  },
  {
    icon: <Phone size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Call Us On",
    lines: ["+91 XXXXX XXXXX", "Mon – Fri, 9am – 6pm"],
  },
  {
    icon: <Mail size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Mail Address",
    lines: ["hello@ayatech.in", "contact@ayatech.in"],
  },
  {
    icon: <Clock size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Office Hours",
    lines: ["Mon – Fri, 9am – 6pm", "Saturday (Closed)"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          1. HERO BANNER
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
            Contact
          </h1>
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
            <span style={{ color: "#3AB54A" }}>Contact</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. CONTACT INFO CARDS
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white py-20 max-md:py-14 px-8 max-md:px-5">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          {/* Heading */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex flex-col gap-4 max-w-xl"
          >
            <p
              className="text-xs tracking-widest uppercase font-semibold m-0"
              style={{ color: "#3AB54A" }}
            >
              Contact Info
            </p>
            <h2
              className="text-4xl max-md:text-3xl m-0 leading-tight"
              style={{ color: "#1C2A57" }}
            >
              Contact &amp;{" "}
              <span style={{ color: "#3AB54A" }}>Join Together</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed m-0">
              Reach out through any channel below or book a free discovery call — we&apos;ll
              map the right program to your goals with zero obligation.
            </p>
          </div>

          {/* 4 info cards */}
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {infoCards.map(({ icon, title, lines }, i) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={i * 80}
                className="flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#3AB54A1A" }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-1">
                  <p
                    className="text-xs tracking-widest uppercase font-semibold m-0"
                    style={{ color: "#3AB54A" }}
                  >
                    {title}
                  </p>
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm font-semibold m-0"
                      style={{ color: "#1C2A57" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. CONTACT FORM  (client component)
      ══════════════════════════════════════════════ */}
      <ContactForm />

      {/* ══════════════════════════════════════════════
          4. MAP PLACEHOLDER
      ══════════════════════════════════════════════ */}
      <div
        className="w-full flex items-center justify-center text-sm select-none"
        style={{
          height: "320px",
          backgroundColor: "#E5E7EB",
          color: "#9CA3AF",
          borderTop: "2px solid #D1D5DB",
        }}
      >
        {/* Replace this div with an <iframe> Google Maps embed */}
        Add Google Maps embed here — Bengaluru / Kochi / Coimbatore lab location
      </div>

      {/* ══════════════════════════════════════════════
          5. CLOSING BANNER
      ══════════════════════════════════════════════ */}
      <section
        className="w-full py-14 px-8 max-md:px-5 flex flex-col items-center text-center"
        style={{ backgroundColor: "#1C2A57" }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col items-center gap-3 max-w-2xl"
        >
          <p className="text-white/50 text-base m-0 italic">
            &ldquo;The future is already being built. Are you in the room?&rdquo;
          </p>
          <p
            className="text-xl font-black tracking-widest m-0"
            style={{ color: "#3AB54A" }}
          >
            AYATECH · BUILD. LAUNCH. LEAD.
          </p>
        </div>
      </section>
    </>
  );
}
