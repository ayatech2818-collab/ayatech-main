"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MediaCard {
  label: string;
  type: "image" | "video";
  src?: string;
}

const CARDS: MediaCard[] = [
  { label: "Workshop Session", type: "image" },
  { label: "Hands-on Project", type: "image" },
  { label: "Peer Review", type: "image" },
  { label: "Final Presentation", type: "image" },
  { label: "Mentorship", type: "image" },
];

function PlaceholderCard({ card, expanded = false }: { card: MediaCard; expanded?: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 w-full h-full select-none"
      style={{
        backgroundColor: "#F5F5F5",
        color: "#C0C0C0",
      }}
    >
      <svg
        width={expanded ? 64 : 32}
        height={expanded ? 64 : 32}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {(!expanded || card.type !== "image") && (
        <span
          style={{
            fontSize: expanded ? 18 : 14,
            textAlign: "center",
            padding: "0 16px",
            fontWeight: 500,
          }}
        >
          {card.label}
        </span>
      )}
    </div>
  );
}

export default function CourseMediaCarousel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // We duplicate the array to create a seamless loop
  const LOOPED_CARDS = [...CARDS, ...CARDS];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* 
        The marquee track. 
        If activeIdx is not null, we pause the animation.
      */}
      <div 
        className="flex w-max"
        style={{
          animation: `scroll 30s linear infinite`,
          animationPlayState: activeIdx !== null ? 'paused' : 'running',
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
        
        {LOOPED_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="w-[440px] h-[280px] max-md:w-[320px] max-md:h-[220px] flex-shrink-0 mx-3 rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 shadow-sm border border-gray-100"
            onClick={() => setActiveIdx(idx % CARDS.length)}
          >
            <PlaceholderCard card={card} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeIdx !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{
                background: "rgba(12, 20, 46, 0.6)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveIdx(null)}
            />

            {/* Expanded Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div 
                className="relative bg-white rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col"
                style={{ width: "90vw", maxWidth: "800px", height: "70vh", maxHeight: "600px" }}
              >
                <button
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-gray-600 transition-colors"
                  onClick={() => setActiveIdx(null)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
                
                <div className="flex-1 w-full h-full relative">
                   <PlaceholderCard card={CARDS[activeIdx]} expanded />
                </div>
                
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent flex justify-center">
                  <span className="px-5 py-2 bg-white rounded-full shadow-md text-sm font-bold text-[#1C2A57]">
                    {CARDS[activeIdx].label}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
