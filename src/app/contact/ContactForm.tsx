"use client";

import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="w-full bg-white py-20 max-md:py-14 px-8 max-md:px-5">
      <div className="max-w-6xl mx-auto flex items-stretch gap-12 max-lg:flex-col">

        {/* LEFT — image + chat overlay */}
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="flex-1 relative min-h-[520px] max-lg:min-h-[320px] rounded-2xl overflow-hidden"
        >
          {/* Image placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center text-xs text-center select-none"
            style={{
              backgroundColor: "#1C2A5712",
              border: "2px dashed #1C2A5730",
              borderRadius: "1rem",
              color: "#1C2A5760",
            }}
          >
            Add image — mentor or student
          </div>

          {/* Chat overlay card */}
          <div
            className="absolute bottom-8 left-6 right-6 max-w-[260px] rounded-2xl p-6 shadow-2xl flex flex-col gap-4"
            style={{ backgroundColor: "#1C2A57" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#3AB54A" }}
            >
              <MessageSquare size={22} color="#fff" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-white text-base font-bold m-0 mb-1">Chat With Us!</h3>
              <p className="text-white/60 text-xs leading-relaxed m-0">
                Have a quick question? Message us — we reply within 24 hours on all platforms.
              </p>
            </div>
            <a
              href="mailto:hello@ayatech.in"
              className="no-underline text-center text-white text-xs font-semibold py-2.5 rounded-full transition-all duration-200 hover:opacity-90 btn-cta"
            >
              Let&apos;s Chat →
            </a>
          </div>
        </div>

        {/* RIGHT — form */}
        <div
          data-aos="fade-left"
          data-aos-duration="900"
          className="flex-1 flex flex-col gap-7"
        >
          <div>
            <p
              className="text-xs tracking-widest uppercase font-semibold m-0 mb-3"
              style={{ color: "#3AB54A" }}
            >
              Contact Us
            </p>
            <h2
              className="text-4xl max-md:text-3xl m-0 leading-tight"
              style={{ color: "#1C2A57" }}
            >
              Reach out &amp; get in touch{" "}
              <span style={{ color: "#3AB54A" }}>with us!</span>
            </h2>
          </div>

          {sent ? (
            <div
              className="flex flex-col items-center gap-4 py-16 rounded-2xl text-center"
              style={{ backgroundColor: "#3AB54A1A" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#3AB54A" }}
              >
                <Send size={26} color="#fff" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold m-0" style={{ color: "#1C2A57" }}>
                Message sent!
              </h3>
              <p className="text-gray-500 text-sm m-0">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* 2×2 grid */}
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                {[
                  { name: "name",    placeholder: "Your Name *",    type: "text"  },
                  { name: "email",   placeholder: "Your Email *",   type: "email" },
                  { name: "phone",   placeholder: "Your Number",    type: "tel"   },
                  { name: "subject", placeholder: "Your Subject *", type: "text"  },
                ].map((f) => (
                  <input
                    key={f.name}
                    required={f.placeholder.includes("*")}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1.5px solid #E5E7EB",
                      color: "#1C2A57",
                      backgroundColor: "#F9FAFB",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3AB54A")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                ))}
              </div>

              {/* Textarea */}
              <textarea
                name="message"
                placeholder="Enter message *"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                style={{
                  border: "1.5px solid #E5E7EB",
                  color: "#1C2A57",
                  backgroundColor: "#F9FAFB",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#3AB54A")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />

              {/* Submit */}
              <button
                type="submit"
                className="self-start px-10 py-4 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 btn-cta"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
