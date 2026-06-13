import Image from "next/image";
import { Mail, Phone, ExternalLink } from "lucide-react";

const studentPrograms = [
  "Young Tinkerpreneur",
  "Young Vibe Coder",
  "3D World Creator",
  "Future Coder Sprint",
  "3DX Tinkercad Sprint",
  "Foundation of Robotics",
];

const proPrograms = [
  "GenAI Master Class",
  "Data Science with Python",
  "SQL Master Class",
  "Supabase Masterclass",
  "Teachx-AI",
  "GenAI Video Mastery",
  "Prompt Engineering",
  "Agentic Automation",
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "The AyaTech Method", href: "/method" },
  { label: "Why AyaTech", href: "/why-ayatech" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full px-8 max-md:px-5 pt-16 pb-8" style={{ backgroundColor: "#1C2A57" }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Top grid */}
        <div className="grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="no-underline leading-none">
              <Image src="/ayatech-logo.png" alt="AyaTech" height={36} width={130} className="object-contain brightness-0 invert" />
            </a>
            <p className="text-white/50 text-sm leading-relaxed m-0">
              Build. Launch. Lead.<br />
              We don&apos;t teach technology.<br />We build the people who shape it.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="mailto:hello@ayatech.in"
                className="no-underline flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.8} /> hello@ayatech.in
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="no-underline flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={14} strokeWidth={1.8} /> +91 XXXXX XXXXX
              </a>
            </div>
          </div>

          {/* For Students */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
              For Students
            </p>
            <div className="flex flex-col gap-3">
              {studentPrograms.map((item) => (
                <a
                  key={item}
                  href="/students"
                  className="no-underline text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* For Professionals */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
              For Professionals
            </p>
            <div className="flex flex-col gap-3">
              {proPrograms.map((item) => (
                <a
                  key={item}
                  href="/professionals"
                  className="no-underline text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company + Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-widest uppercase font-semibold m-0" style={{ color: "#3AB54A" }}>
              Company
            </p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="no-underline text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs tracking-widest uppercase font-semibold m-0 mt-4" style={{ color: "#3AB54A" }}>
              Social
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "@ayatech.school", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="no-underline flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  <ExternalLink size={13} strokeWidth={1.8} /> {s.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center pb-4">
          <p className="text-white/30 text-xs m-0">
            © {new Date().getFullYear()} AyaTech Technical School LLP. All rights reserved.
          </p>
          <p className="text-xs font-bold tracking-widest m-0" style={{ color: "#3AB54A" }}>
            BUILD. LAUNCH. LEAD.
          </p>
          <div className="flex gap-6">
            <a href="#" className="no-underline text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="no-underline text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
