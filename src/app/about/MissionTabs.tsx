"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Our Mission",
    content:
      "Make code, hardware, and AI native fluencies — as fundamental as reading, writing, and arithmetic — not specialist skills. We deliver this through project-first curricula, expert industry mentors, and an outcome-driven framework that measures what you ship, not what you memorise.",
  },
  {
    label: "Our Vision",
    content:
      "Project-based, AI-native learning as the default for every child and professional in India by 2030. A generation of builders who don't wait for instructions — they write the brief themselves.",
  },
  {
    label: "Our Goal",
    content:
      "To produce 10,000 verified builders by 2027 — students who ship real products before they graduate, and professionals who lead AI transformation within their organisations.",
  },
];

export default function MissionTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Tab nav */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border"
            style={
              active === i
                ? {
                    backgroundColor: "#1C2A57",
                    color: "#ffffff",
                    borderColor: "#1C2A57",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "#1C2A57",
                    borderColor: "#1C2A57",
                  }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <p className="text-gray-500 text-base leading-relaxed m-0">
        {tabs[active].content}
      </p>
    </div>
  );
}
