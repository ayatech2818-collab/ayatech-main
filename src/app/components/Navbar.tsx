"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-white/90 backdrop-blur-sm sticky top-0 border-b border-gray-100">
      <div className="flex justify-between items-center py-4 px-20 max-lg:px-6">
        {/* Logo */}
        <a href="/" className="leading-none no-underline flex-shrink-0">
          <Image
            src="/ayatech-logo.png"
            alt="AyaTech"
            height={48}
            width={176}
            priority
            className="object-contain h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="flex items-center gap-12 ml-[-5%] max-md:hidden">
          <a
            href="/courses"
            className="text-base tracking-[0.1rem] transition-colors duration-200 no-underline hover:text-gray-500"
            style={{ color: "#1C2A57" }}
          >
            PROGRAMS
          </a>
          <a
            href="/about"
            className="text-base tracking-[0.1rem] transition-colors duration-200 no-underline hover:text-gray-500"
            style={{ color: "#1C2A57" }}
          >
            ABOUT
          </a>
          <a
            href="/blog"
            className="text-base tracking-[0.1rem] transition-colors duration-200 no-underline hover:text-gray-500"
            style={{ color: "#1C2A57" }}
          >
            BLOG
          </a>
          <a
            href="/contact"
            className="text-base tracking-[0.1rem] transition-colors duration-200 no-underline hover:text-gray-500"
            style={{ color: "#1C2A57" }}
          >
            CONTACT
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="no-underline text-white px-8 py-3 rounded-[50px] text-base font-semibold transition-all duration-200 cursor-pointer active:scale-95 btn-cta max-md:hidden"
        >
          BOOK FREE CALL →
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hidden max-md:flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
          style={{ color: "#1C2A57" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="hidden max-md:flex flex-col px-6 pb-6 gap-5 bg-white border-t border-gray-100">
          <a
            href="/courses"
            onClick={() => setOpen(false)}
            className="text-base font-semibold tracking-[0.08rem] no-underline py-2 border-b border-gray-100 transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1C2A57" }}
          >
            PROGRAMS
          </a>
          <a
            href="/about"
            onClick={() => setOpen(false)}
            className="text-base font-semibold tracking-[0.08rem] no-underline py-2 border-b border-gray-100 transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1C2A57" }}
          >
            ABOUT
          </a>
          <a
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-base font-semibold tracking-[0.08rem] no-underline py-2 border-b border-gray-100 transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1C2A57" }}
          >
            BLOG
          </a>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-base font-semibold tracking-[0.08rem] no-underline py-2 border-b border-gray-100 transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1C2A57" }}
          >
            CONTACT
          </a>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="no-underline text-center text-white px-8 py-3 rounded-[50px] text-base font-semibold transition-all duration-200 active:scale-95 btn-cta mt-2"
          >
            BOOK FREE CALL →
          </a>
        </div>
      )}
    </header>
  );
}
