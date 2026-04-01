"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// ─── Marquee tech stack items ─────────────────────────────────────
const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "Python",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Terraform",
  "Jenkins",
  "FastAPI",
  "PostgreSQL",
  "Git",
  "Bash",
  "Grafana",
];

// ─── Stagger animation variants ──────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ─── Infinite Marquee Component ───────────────────────────────────
const TechMarquee = () => {
  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] overflow-hidden py-8 mt-10">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black-100 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black-100 to-transparent" />

      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Scrolling track */}
      <div
        className="flex gap-6 items-center whitespace-nowrap"
        style={{
          animation: "marquee-scroll 35s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            <span
              className="text-sm md:text-base font-medium tracking-wide transition-colors duration-200"
              style={{ color: "rgba(193, 194, 211, 0.6)" }}
            >
              {item}
            </span>
            {/* Separator dot */}
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "rgba(203, 172, 249, 0.3)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// HERO COMPONENT
// ═══════════════════════════════════════════════════════════════════

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* ── Hero Content with staggered animations ── */}
      <motion.div
        className="flex justify-center relative my-20 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Tagline — punchy value statement */}
          <motion.p
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96"
            variants={fadeUpVariant}
          >
            From infrastructure to automation
          </motion.p>

          {/* Name — TextGenerateEffect already animates word-by-word */}
          <motion.div variants={fadeInVariant}>
            <TextGenerateEffect
              words="Hi there!, I'm Kunal Bose"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </motion.div>

          {/* Role description — slide up with blur */}
          <motion.p
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl"
            variants={fadeUpVariant}
          >
            Final year B.Tech Computer Science student, currently working as a FullStack AI Engineer (Specializing in DevOps) @ ForaSoftware — passionate AI/ML and DevOps enthusiast
            based in India
          </motion.p>

          {/* CTA button — fade up last */}
          <motion.a href="#about" variants={fadeUpVariant}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>
      </motion.div>

      {/* ── Tech Stack Marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <TechMarquee />
      </motion.div>
    </div>
  );
};

export default Hero;
