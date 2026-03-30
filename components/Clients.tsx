"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonials } from "@/data";

// ─── Skills data with embedded tool logos ─────────────────────────
const skillCards = [
  {
    category: "Full-Stack Web Development",
    description:
      "Building scalable web applications using React.js and Node.js, following modular and RESTful architecture",
    tags: ["Frontend-Backend Integration", "REST APIs"],
    accent: "#CBACF9",
    tools: [
      { name: "React", icon: "/re.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Node.js", icon: "/Node.png" },
      { name: "TypeScript", icon: "/ts.svg" },
    ],
  },
  {
    category: "Infrastructure as Code",
    description:
      "Using Terraform to provision and manage cloud infrastructure declaratively, ensuring consistency and repeatability",
    tags: ["Terraform Modules", "Cloud Provisioning"],
    accent: "#4ADE80",
    tools: [
      { name: "Terraform", icon: "/terraform.png" },
      { name: "Bash", icon: "/Bash.svg" },
    ],
  },
  {
    category: "Containerization & Orchestration",
    description:
      "Docker for containerizing applications and Kubernetes for orchestrating multi-container workloads in cloud environments",
    tags: ["Docker Workflows", "K8s Deployments"],
    accent: "#6CB4EE",
    tools: [
      { name: "Docker", icon: "/dock.svg" },
      { name: "Kubernetes", icon: "/k8s.png" },
    ],
  },
  {
    category: "CI/CD Automation",
    description:
      "Automated deployment pipelines using Jenkins, enabling continuous integration and delivery across workflows",
    tags: ["Jenkins Pipelines", "Deployment Automation"],
    accent: "#FB923C",
    tools: [
      { name: "Jenkins", icon: "/Jenkins.svg" },
      { name: "Git", icon: "/git.png" },
    ],
  },
  {
    category: "Cloud Platforms",
    description:
      "Deploying on AWS and Azure — experienced with EC2, S3, EKS, IAM, Azure Resource Manager, AKS, and DevOps Pipelines",
    tags: ["AWS", "Azure"],
    accent: "#FBBF24",
    tools: [
      { name: "AWS", icon: "/aws.png" },
      { name: "Azure", icon: "/Azure.png" },
      { name: "EKS", icon: "/EKS.png" },
    ],
  },
  {
    category: "Version Control",
    description:
      "Git for source code management and GitHub for collaborative development and CI/CD integration",
    tags: ["Branching", "Pull Requests", "Git Workflows"],
    accent: "#F87171",
    tools: [
      { name: "Git", icon: "/git.png" },
    ],
  },
  {
    category: "Monitoring & Logging",
    description:
      "Integrated monitoring tools and logging solutions to track application performance and ensure system reliability",
    tags: ["System Health", "Logs & Metrics"],
    accent: "#34D399",
    tools: [
      { name: "PostgreSQL", icon: "/PostgreSQL.png" },
      { name: "Redis", icon: "/Redis.png" },
    ],
  },
  {
    category: "Creative & Design",
    description:
      "Visual design, video editing, and UI layout creation with a focus on clarity and storytelling across platforms",
    tags: ["Design & Editing", "Figma", "Canva", "DaVinci Resolve"],
    accent: "#E879F9",
    tools: [],
  },
];

// ─── Skill Card Component ─────────────────────────────────────────
const SkillCard = ({
  skill,
  index,
}: {
  skill: (typeof skillCards)[0];
  index: number;
}) => (
  <motion.div
    className="group/skill relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
    initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.07,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px] z-10"
      style={{
        background: `linear-gradient(90deg, transparent, ${skill.accent}, transparent)`,
      }}
    />

    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at top, ${skill.accent}06 0%, transparent 70%)`,
      }}
    />

    <div
      className="relative p-5 lg:p-6 flex flex-col gap-4 h-full"
      style={{
        background: "rgba(4, 7, 29, 0.9)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${skill.accent}15`,
      }}
    >
      {/* Header: colored dot + category */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: skill.accent,
            boxShadow: `0 0 8px ${skill.accent}60`,
          }}
        />
        <h3
          className="text-sm lg:text-base font-bold tracking-wide"
          style={{ color: skill.accent }}
        >
          {skill.category}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs lg:text-sm leading-relaxed text-[#BEC1DD]">
        {skill.description}
      </p>

      {/* Tool logos */}
      {skill.tools.length > 0 && (
        <div className="flex items-center gap-2 mt-auto pt-2">
          {skill.tools.map((tool, i) => (
            <div
              key={i}
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(16, 19, 46, 0.8)",
                border: `1px solid ${skill.accent}18`,
              }}
              title={tool.name}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-5 h-5 lg:w-5.5 lg:h-5.5 object-contain"
              />
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] lg:text-xs px-2 py-0.5 rounded-md font-medium"
            style={{
              color: `${skill.accent}cc`,
              background: `${skill.accent}0a`,
              border: `1px solid ${skill.accent}15`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════════
// INSIGHTS VAULT SECTION
// ═══════════════════════════════════════════════════════════════════

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Insights
        <span className="text-purple"> Vault</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-14 overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Clients;