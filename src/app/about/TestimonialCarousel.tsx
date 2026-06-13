"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { getTestimonials, type UITestimonial } from "@/lib/queries";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<UITestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestimonials().then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, []);

  const count = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (count === 0 ? 0 : (prev + 1) % count));
  }, [count]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (count === 0 ? 0 : (prev - 1 + count) % count));
  }, [count]);

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, count]);

  if (loading) {
    return <div className="w-full text-center text-gray-400 text-sm py-10">Loading testimonials…</div>;
  }

  if (count === 0) {
    return null;
  }

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
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-white overflow-hidden"
                  style={{ backgroundColor: "#1C2A57" }}
                >
                  {t.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.avatarUrl} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    t.initials
                  )}
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
