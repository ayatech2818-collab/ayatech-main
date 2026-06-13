"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ─── types ──────────────────────────────────────────────── */
interface MediaCard {
  label: string;
  type: "image" | "video";
  src?: string;
}

const CARDS: MediaCard[] = [
  { label: "Coding session",  type: "image" },
  { label: "Robotics lab",    type: "image" },
  { label: "AI workshop",     type: "image" },
  { label: "Mentor session",  type: "image" },
];

/* timing */
const HOLD_MS = 2600;  // how long card stays at front
const GAP_MS  = 550;   // pause between cards

/* spring profile shared everywhere */
const SPRING = { type: "spring" as const, stiffness: 270, damping: 29 };

/* ─── card face renderer ─────────────────────────────────── */
function CardFace({ card, active }: { card: MediaCard; active: boolean }) {
  if (card.type === "video" && card.src) {
    return (
      <video
        src={card.src}
        autoPlay={active}
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }

  if (card.type === "image" && card.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={card.src}
        alt={card.label}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }

  /* placeholder shown when no src is provided */
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: active
          ? "linear-gradient(135deg, #EAFBEC 0%, #D4F5D9 100%)"
          : "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        color: active ? "#3AB54A" : "#C0C0C0",
      }}
    >
      <svg
        width={active ? 42 : 28}
        height={active ? 42 : 28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "width 0.4s, height 0.4s, color 0.4s" }}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span
        style={{
          fontSize: active ? 16 : 12,
          textAlign: "center",
          padding: "0 12px",
          fontWeight: active ? 600 : 400,
          color: active ? "#1C2A57" : "#C0C0C0",
          transition: "font-size 0.4s, font-weight 0.4s, color 0.4s",
        }}
      >
        {card.label}
      </span>
    </div>
  );
}

/* ─── MediaShowcase ──────────────────────────────────────── */
export function MediaShowcase() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isManual, setIsManual]   = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextRef  = useRef(0); // next card index in the auto-rotation queue

  /* ── helpers ── */
  const clearTimer = () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  };

  /* auto-rotation engine */
  const runAuto = useCallback((idx: number) => {
    clearTimer();
    setActiveIdx(idx);
    setIsManual(false);

    timerRef.current = setTimeout(() => {
      /* return card to grid */
      setActiveIdx(null);
      const next = (idx + 1) % CARDS.length;
      nextRef.current = next;

      /* brief pause, then show next card */
      timerRef.current = setTimeout(() => runAuto(next), GAP_MS);
    }, HOLD_MS);
  }, []);

  /* start auto-rotation after the section has settled on screen */
  useEffect(() => {
    const init = setTimeout(() => runAuto(0), 1800);
    return () => { clearTimeout(init); clearTimer(); };
  }, [runAuto]);

  /* Esc key dismisses a manually-selected card */
  useEffect(() => {
    if (!isManual) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isManual]);

  /* ── event handlers ── */
  const handleCardClick = (idx: number) => {
    clearTimer();
    setActiveIdx(idx);
    setIsManual(true);
    nextRef.current = (idx + 1) % CARDS.length;
  };

  const dismiss = () => {
    setActiveIdx(null);
    setIsManual(false);
    /* resume auto-rotation from the next card in sequence */
    timerRef.current = setTimeout(() => runAuto(nextRef.current), GAP_MS);
  };

  /* ── render ── */
  return (
    <div
      className="flex-1 max-lg:w-full max-lg:max-w-md max-lg:mx-auto"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {/* 2 × 2 grid */}
      <div className="grid grid-cols-2 gap-3">
        {CARDS.map((card, i) => {
          const isActive = activeIdx === i;

          return (
            <div
              key={i}
              className="relative"
              style={{ height: i % 2 === 0 ? 208 : 176 }}
            >
              {/* ghost slot: keeps the grid intact while the card is floating */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: "linear-gradient(135deg, #F2F2F2, #EBEBEB)",
                    border: "2px dashed #D0D0D0",
                  }}
                />
              )}

              {/* the real card — present in the grid when NOT active */}
              {!isActive && (
                <motion.div
                  layoutId={`mc-${i}`}
                  className="absolute inset-0 rounded-xl overflow-hidden cursor-pointer select-none"
                  onClick={() => handleCardClick(i)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && handleCardClick(i)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${card.label}`}
                  /* dim inactive cards while any card is active in auto mode */
                  animate={{
                    opacity:
                      activeIdx !== null && !isManual ? 0.65 : 1,
                    scale: 1,
                  }}
                  whileHover={{ scale: 1.035 }}
                  transition={SPRING}
                  style={{ willChange: "transform" }}
                >
                  <CardFace card={card} active={false} />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── backdrop + floating card ── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <>
            {/* blurred backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40"
              aria-hidden="true"
              style={{
                background: "rgba(12, 20, 46, 0.58)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={isManual ? dismiss : undefined}
            />

            {/* centered card wrapper — pointer-events-none so backdrop click reaches the backdrop div */}
            <div
              key="portal"
              className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center gap-4"
              role={isManual ? "dialog" : undefined}
              aria-modal={isManual ? "true" : undefined}
              aria-label={isManual ? CARDS[activeIdx].label : undefined}
            >
              {/* the floating card — same layoutId as its grid slot */}
              <motion.div
                layoutId={`mc-${activeIdx}`}
                className="rounded-2xl overflow-hidden pointer-events-auto"
                style={{
                  width: "min(520px, 84vw)",
                  aspectRatio: "16 / 10",
                  boxShadow:
                    "0 52px 128px rgba(0,0,0,0.48), 0 12px 32px rgba(0,0,0,0.24)",
                  willChange: "transform",
                  cursor: isManual ? "pointer" : "default",
                }}
                transition={SPRING}
                onClick={isManual ? dismiss : undefined}
              >
                <CardFace card={CARDS[activeIdx]} active />
              </motion.div>

              {/* label chip fades in slightly after the card settles */}
              <motion.div
                className="pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.2, duration: 0.22 }}
                style={{
                  background: "white",
                  borderRadius: 999,
                  padding: "6px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1C2A57",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                  letterSpacing: "0.025em",
                  userSelect: "none",
                }}
              >
                {CARDS[activeIdx].label}
              </motion.div>

              {/* dismiss hint — only shown for manually selected cards */}
              {isManual && (
                <motion.p
                  className="pointer-events-none m-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.42, duration: 0.2 }}
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.04em",
                    userSelect: "none",
                  }}
                >
                  Click anywhere to dismiss · Esc
                </motion.p>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
