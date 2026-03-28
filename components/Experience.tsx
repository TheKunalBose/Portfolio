"use client";

import React from "react";
import { motion } from "framer-motion";

// ─── Timeline experience data (enriched with impact bullets) ──────
const timelineData = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "ForaSoftware",
    period: "Sep 2025 — Present",
    isCurrent: true,
    accent: "#CBACF9",
    logo: "/exp4.svg",
    description:
      "Developing AI-driven platform using Azure AI Foundry with RAG pipelines and full-stack integration.",
    impacts: [
      "Built RAG pipeline processing 500+ queries/day with Azure AI Foundry",
      "Automated CI/CD workflows via Azure DevOps, cutting deploy time by 40%",
      "Architected FastAPI + React stack serving real-time AI responses",
    ],
    tools: ["Azure", "FastAPI", "React", "RAG", "CI/CD"],
  },
  {
    id: 2,
    role: "IT Intern",
    company: "TruKKer",
    period: "Jun 2023 — Dec 2023",
    isCurrent: false,
    accent: "#6CB4EE",
    logo: "/exp1.svg",
    description:
      "Developed internal tools and managed department-wide design systems for the logistics platform.",
    impacts: [
      "Built asset analysis software used across 3 departments daily",
      "Created internal React dashboard for real-time fleet monitoring",
      "Managed department-wide design system, improving UI consistency",
    ],
    tools: ["React", "JavaScript", "UI/UX", "Analytics"],
  },
];

// ─── Timeline Card ────────────────────────────────────────────────
const TimelineCard = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => (
  <motion.div
    className="relative pl-8 md:pl-12 pb-12 last:pb-0 group/timeline"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {/* Vertical line */}
    <div
      className="absolute left-[11px] md:left-[15px] top-3 bottom-0 w-[2px]"
      style={{
        background: index === timelineData.length - 1
          ? `linear-gradient(180deg, ${item.accent}40, transparent)`
          : `${item.accent}25`,
      }}
    />

    {/* Dot marker */}
    <div
      className="absolute left-0 md:left-1 top-1.5 w-6 h-6 rounded-full flex items-center justify-center z-10"
      style={{
        background: "rgb(4,7,29)",
        border: `2px solid ${item.accent}`,
        boxShadow: item.isCurrent
          ? `0 0 12px ${item.accent}50`
          : "none",
      }}
    >
      {item.isCurrent && (
        <div
          className="w-2.5 h-2.5 rounded-full animate-pulse-dot"
          style={{
            background: "#4ADE80",
            boxShadow: "0 0 6px rgba(74, 222, 128, 0.6)",
          }}
        />
      )}
      {!item.isCurrent && (
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: item.accent }}
        />
      )}
    </div>

    {/* Card */}
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "rgba(4, 7, 29, 0.9)",
        border: `1px solid ${item.accent}15`,
      }}
    >
      {/* Top accent */}
      <div
        className="h-[2px]"
        style={{
          background: `linear-gradient(90deg, ${item.accent}, ${item.accent}40, transparent)`,
        }}
      />

      <div className="p-5 lg:p-6 flex flex-col gap-4">
        {/* Header: logo + role + dates */}
        <div className="flex items-start gap-4">
          <img
            src={item.logo}
            alt={item.company}
            className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base lg:text-lg font-bold text-white">
                {item.role}
              </h3>
              {item.isCurrent && (
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(74, 222, 128, 0.1)",
                    color: "#4ADE80",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                  }}
                >
                  Current
                </span>
              )}
            </div>
            <p
              className="text-sm font-medium mt-0.5"
              style={{ color: item.accent }}
            >
              {item.company}
            </p>
            <p className="text-xs text-white/40 mt-0.5">{item.period}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#BEC1DD] leading-relaxed">
          {item.description}
        </p>

        {/* Impact bullets */}
        <div className="flex flex-col gap-2">
          {item.impacts.map((impact, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div
                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                style={{ background: item.accent }}
              />
              <span className="text-xs lg:text-sm text-white/70 leading-relaxed">
                {impact}
              </span>
            </div>
          ))}
        </div>

        {/* Tool tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {item.tools.map((tool, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-md font-medium"
              style={{
                color: `${item.accent}cc`,
                background: `${item.accent}0a`,
                border: `1px solid ${item.accent}15`,
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════════
// EXPERIENCE SECTION
// ═══════════════════════════════════════════════════════════════════

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="max-w-2xl mx-auto mt-14">
        {timelineData.map((item, index) => (
          <TimelineCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
