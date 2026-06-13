"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getActiveSliders, type UISlider } from "@/lib/queries";

export default function HeroSlider() {
  const [slides, setSlides] = useState<UISlider[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getActiveSliders().then(setSlides);
  }, []);

  const count = slides.length;

  const next = useCallback(() => {
    setIndex((prev) => (count === 0 ? 0 : (prev + 1) % count));
  }, [count]);

  const prev = useCallback(() => {
    setIndex((prev) => (count === 0 ? 0 : (prev - 1 + count) % count));
  }, [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, count]);

  // Nothing managed in the admin → render nothing (no layout disruption).
  if (count === 0) return null;

  return (
    <section className="w-full bg-white py-8 px-8 max-md:px-5">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => {
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-[340px] max-md:h-[200px] object-cover flex-shrink-0"
              />
            );
            return (
              <div key={slide.id} className="w-full flex-shrink-0 relative">
                {slide.linkUrl ? <Link href={slide.linkUrl}>{img}</Link> : img}
                {slide.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <span className="text-white text-xl max-md:text-base font-semibold tracking-wide">
                      {slide.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1C2A57] p-2 rounded-full shadow transition-all z-10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1C2A57] p-2 rounded-full shadow transition-all z-10"
            >
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${i === index ? "bg-[#3AB54A] w-6" : "bg-white/70 w-2.5"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
