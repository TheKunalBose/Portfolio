"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// ─── DevOps Pipeline Phases ───────────────────────────────────────
const pipelinePhases = [
  {
    phase: "01",
    title: "Architect",
    subtitle: "Design & Plan",
    description:
      "Map the problem space — define architecture, choose cloud services, plan infrastructure-as-code modules, and set up Git workflows. Clear roadmap before any code is written.",
    tools: ["Terraform", "AWS", "Azure"],
    color: "emerald",
    canvasColor: undefined as number[][] | undefined,
    canvasSpeed: 5.1,
    canvasBg: "bg-emerald-900",
    accent: "#4ADE80",
  },
  {
    phase: "02",
    title: "Automate",
    subtitle: "CI/CD & IaC",
    description:
      "Build automated pipelines — Jenkins CI/CD, Terraform modules, Docker containerization, and test suites. Every deployment is repeatable, every change is tracked.",
    tools: ["Jenkins", "Docker", "Git"],
    color: "pink",
    canvasColor: [
      [255, 166, 158],
      [221, 255, 247],
    ] as number[][],
    canvasSpeed: 3,
    canvasBg: "bg-pink-900",
    accent: "#FB7185",
  },
  {
    phase: "03",
    title: "Deploy",
    subtitle: "Ship & Scale",
    description:
      "Provision cloud infrastructure, orchestrate Kubernetes clusters, roll out with zero-downtime strategies. From staging to production with confidence.",
    tools: ["K8s", "EKS", "Helm"],
    color: "sky",
    canvasColor: [[125, 211, 252]] as number[][],
    canvasSpeed: 3,
    canvasBg: "bg-sky-600",
    accent: "#38BDF8",
  },
  {
    phase: "04",
    title: "Monitor",
    subtitle: "Observe & Iterate",
    description:
      "Set up monitoring, logging, and alerting. Track performance metrics, catch issues before users do, and iterate based on real-world data.",
    tools: ["Grafana", "Logs", "Metrics"],
    color: "amber",
    canvasColor: [
      [251, 191, 36],
      [245, 158, 11],
    ] as number[][],
    canvasSpeed: 4,
    canvasBg: "bg-amber-900",
    accent: "#FBBF24",
  },
];

// ─── Pipeline connector arrow (horizontal on lg, hidden on mobile) ─
const PipelineConnector = ({ accent }: { accent: string }) => (
  <div className="hidden lg:flex items-center -mx-2 z-10">
    <div
      className="w-8 h-[2px]"
      style={{
        background: `linear-gradient(90deg, ${accent}60, ${accent}20)`,
      }}
    />
    <div
      className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent"
      style={{ borderLeftColor: `${accent}40` }}
    />
  </div>
);

// ─── Phase Card ───────────────────────────────────────────────────
const PhaseCard = ({
  phase,
  index,
}: {
  phase: (typeof pipelinePhases)[0];
  index: number;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="flex-1 min-w-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-white/[0.08] group/canvas-card flex items-center justify-center w-full mx-auto p-4 relative h-[28rem] lg:h-[32rem] rounded-3xl cursor-pointer overflow-hidden"
        style={{
          background: "rgb(4,7,29)",
        }}
      >
        {/* Corner icons */}
        <Icon className="absolute h-8 w-8 -top-3 -left-3 dark:text-white text-black opacity-20" />
        <Icon className="absolute h-8 w-8 -bottom-3 -left-3 dark:text-white text-black opacity-20" />
        <Icon className="absolute h-8 w-8 -top-3 -right-3 dark:text-white text-black opacity-20" />
        <Icon className="absolute h-8 w-8 -bottom-3 -right-3 dark:text-white text-black opacity-20" />

        {/* Canvas reveal on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={phase.canvasSpeed}
                containerClassName={`${phase.canvasBg} rounded-3xl overflow-hidden`}
                colors={phase.canvasColor}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-20 px-6 flex flex-col items-center">
          {/* Phase number pill (default view) */}
          <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex flex-col items-center justify-center gap-3">
            <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
                {phase.phase}
              </span>
            </button>
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: phase.accent }}
            >
              {phase.title}
            </span>
          </div>

          {/* Hover content */}
          <h2 className="dark:text-white text-center text-2xl lg:text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {phase.title}
          </h2>
          <p
            className="text-xs uppercase tracking-widest font-semibold opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 mt-1 group-hover/canvas-card:-translate-y-2"
            style={{ color: phase.accent }}
          >
            {phase.subtitle}
          </p>
          <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200 leading-relaxed"
            style={{ color: "#E4ECFF" }}
          >
            {phase.description}
          </p>
          {/* Tool tags on hover */}
          <div className="flex gap-2 mt-4 opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 group-hover/canvas-card:-translate-y-2">
            {phase.tools.map((tool, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.15)",
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
};

// ═══════════════════════════════════════════════════════════════════
// APPROACH SECTION
// ═══════════════════════════════════════════════════════════════════

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      {/* Pipeline label */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple/40" />
        <span className="text-xs uppercase tracking-[0.2em] text-purple/60 font-semibold">
          Architect → Automate → Deploy → Monitor
        </span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple/40" />
      </motion.div>

      {/* Pipeline grid */}
      <div className="my-16 flex flex-col lg:flex-row items-stretch justify-center w-full gap-4">
        {pipelinePhases.map((phase, index) => (
          <React.Fragment key={phase.phase}>
            <PhaseCard phase={phase} index={index} />
            {index < pipelinePhases.length - 1 && (
              <PipelineConnector accent={phase.accent} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Approach;

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
