import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact AyaTech – Book Your Free Discovery Call",
  description:
    "Ready to build what's next? Book a free discovery call and walk away with a roadmap — whether or not you enrol.",
};

// Direct contact channels
const PHONE_DISPLAY = "+91 90379 81757";
const TEL_LINK = "tel:+919037981757"; // E.164, no spaces
const WHATSAPP_LINK =
  "https://wa.me/919037981757?text=" +
  encodeURIComponent("Hi AyaTech, I'd like to know more about your programs.");

const infoCards: { icon: ReactNode; title: string; lines: string[]; href?: string }[] = [
  {
    icon: <MapPin size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Visit Us At",
    lines: ["Bengaluru · Kochi", "Coimbatore · Online"],
  },
  {
    icon: <Phone size={24} color="#3AB54A" strokeWidth={1.8} />,
    title: "Call Us On",
    lines: [PHONE_DISPLAY, "Mon – Fri, 9am – 6pm"],
    href: TEL_LINK,
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

          {/* Quick contact buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex flex-wrap gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white px-7 py-3.5 rounded-full text-sm font-semibold no-underline transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24-1.52 0-3.01-.41-4.3-1.19l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 10.4c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.48-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2.5 text-white px-7 py-3.5 rounded-full text-sm font-semibold no-underline transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
            >
              <Phone size={18} strokeWidth={2} color="#ffffff" />
              Call Now
            </a>
          </div>

          {/* 4 info cards */}
          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {infoCards.map(({ icon, title, lines, href }, i) => (
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
                  {lines.map((line, li) =>
                    href && li === 0 ? (
                      <a
                        key={line}
                        href={href}
                        className="text-sm font-semibold m-0 no-underline hover:underline"
                        style={{ color: "#1C2A57" }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={line}
                        className="text-sm font-semibold m-0"
                        style={{ color: "#1C2A57" }}
                      >
                        {line}
                      </p>
                    )
                  )}
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
