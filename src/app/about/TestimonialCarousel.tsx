"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    body: "Before AyaTech I thought coding was just typing commands. After the AI Lab program I shipped a working chatbot for my school's library — in eight weeks. Nothing else comes close to that kind of confidence.",
    name: "Aryan Mehta",
    role: "Grade 10 Student, Bengaluru",
    initials: "AM",
  },
  {
    body: "As a software engineer I assumed I already knew enough. The GenAI professional cohort changed that completely. I integrated an LLM workflow into our product pipeline within two weeks of graduating.",
    name: "Priya Nair",
    role: "Software Engineer, Kochi",
    initials: "PN",
  },
  {
    body: "My daughter was always curious about robotics but regular classes were too theoretical. AyaTech's hardware sprint let her build an actual line-following robot. She hasn't stopped building since.",
    name: "Rajesh Kumar",
    role: "Parent, Coimbatore",
    initials: "RK",
  },
  {
    body: "The 3D design track completely shifted my perspective. I went from having zero experience in Unity to creating my own interactive environments. Highly recommend for any creative builder.",
    name: "Sanya Sharma",
    role: "Grade 11 Student, Online",
    initials: "SS",
  },
  {
    body: "I needed to upskill in Prompt Engineering quickly for my startup. The weekend intensive was exactly what I needed—no fluff, just practical, agentic workflows that save me hours every day.",
    name: "Anand Menon",
    role: "Startup Founder, Bengaluru",
    initials: "AM",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-10">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="w-full flex-shrink-0 px-2">
            <div className="flex flex-col justify-between gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm h-full mx-auto">
              <p className="text-gray-500 text-lg leading-relaxed m-0 text-center italic">
                &ldquo;{t.body}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 justify-center mt-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-white"
                  style={{ backgroundColor: "#1C2A57" }}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="m-0 font-semibold text-sm" style={{ color: "#1C2A57" }}>
                    {t.name}
                  </p>
                  <p className="m-0 text-xs text-gray-400">{t.role}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={12} fill="#F59E0B" color="#F59E0B" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-[#1C2A57] p-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-[#1C2A57] p-2 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 transition-all z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentIndex ? "bg-[#3AB54A] w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
