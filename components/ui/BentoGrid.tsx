import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// ─── Tech Stack Data ──────────────────────────────────────────────
const techCategories = [
  {
    label: "Frontend",
    accent: "#CBACF9", // purple — matches existing theme
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    label: "Backend",
    accent: "#6CB4EE", // soft blue
    items: ["Node.js", "FastAPI", "Flask", "Django", "Python", "SQL"],
  },
  {
    label: "DevOps",
    accent: "#4ADE80", // green
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Linux", "Shell Scripting"],
  },
  {
    label: "Cloud",
    accent: "#FB923C", // orange
    items: ["AWS", "Azure", "Git", "Bash"],
  },
  {
    label: "AI / ML",
    accent: "#E879F9", // pink-purple
    items: ["RAG Pipelines", "LangChain", "Azure AI Foundry", "Prompt Engineering"],
  },
];

// ─── Currently Learning Items ─────────────────────────────────────
const learningItems = [
  "Azure AI Foundry",
  "RAG Pipelines",
  "LangChain",
  "Vector Databases",
  "Prompt Engineering",
];

// ─── Stats ────────────────────────────────────────────────────────
const stats = [
  { value: "6+", label: "Projects" },
  { value: "2+", label: "Years" },
  { value: "5+", label: "Certifications" },
];

// ─── Tech Category Card Component ─────────────────────────────────
const TechCategoryCard = ({
  category,
  index,
}: {
  category: (typeof techCategories)[0];
  index: number;
}) => (
  <div
    className="group/card relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    {/* Glowing top accent bar */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px]"
      style={{
        background: `linear-gradient(90deg, transparent, ${category.accent}, transparent)`,
      }}
    />
    {/* Radial glow behind card on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
      style={{
        background: `radial-gradient(ellipse at top, ${category.accent}08 0%, transparent 70%)`,
      }}
    />
    {/* Card content */}
    <div
      className="relative p-2.5 lg:p-3 flex flex-col gap-2 h-full"
      style={{
        background: "rgba(10, 12, 30, 0.7)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${category.accent}18`,
      }}
    >
      {/* Category header with dot indicator */}
      <div className="flex items-center gap-2">
        <div
          className="w-1 h-1 rounded-full flex-shrink-0"
          style={{
            background: category.accent,
            boxShadow: `0 0 6px ${category.accent}80`,
          }}
        />
        <span
          className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.12em]"
          style={{ color: category.accent }}
        >
          {category.label}
        </span>
      </div>
      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item, i) => (
          <span
            key={i}
            className="relative text-[10px] lg:text-xs px-2 py-0.5 rounded-md font-medium transition-all duration-300 hover:scale-105 cursor-default overflow-hidden"
            style={{
              color: `${category.accent}dd`,
              background: `linear-gradient(135deg, ${category.accent}10, ${category.accent}06)`,
              border: `1px solid ${category.accent}20`,
              boxShadow: `inset 0 1px 0 ${category.accent}10`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${category.accent}22, ${category.accent}12)`;
              e.currentTarget.style.borderColor = `${category.accent}40`;
              e.currentTarget.style.boxShadow = `0 0 12px ${category.accent}15, inset 0 1px 0 ${category.accent}20`;
              e.currentTarget.style.color = category.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${category.accent}10, ${category.accent}06)`;
              e.currentTarget.style.borderColor = `${category.accent}20`;
              e.currentTarget.style.boxShadow = `inset 0 1px 0 ${category.accent}10`;
              e.currentTarget.style.color = `${category.accent}dd`;
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Currently Building Card ──────────────────────────────────────
const CurrentlyBuildingCard = () => (
  <div className="flex flex-col gap-5 relative z-10 h-full justify-center">
    <div className="flex items-center gap-3">
      <div
        className="w-3 h-3 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0"
      />
      <span className="text-sm lg:text-base font-semibold text-green-400/90 uppercase tracking-wider">
        Currently Building
      </span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-xl lg:text-2xl font-bold text-white">
        Currently @ ForaSoftware
      </h3>
      <p className="text-sm lg:text-base text-[#C1C2D3] leading-relaxed">
        AI platform with Azure AI Foundry + RAG pipelines
      </p>
    </div>
    <div className="flex flex-wrap gap-2 mt-1">
      {["FastAPI", "React", "Azure DevOps"].map((tag) => (
        <span
          key={tag}
          className="text-xs lg:text-sm px-3 py-1.5 rounded-lg font-medium"
          style={{
            background: "rgba(74, 222, 128, 0.08)",
            color: "rgba(74, 222, 128, 0.8)",
            border: "1px solid rgba(74, 222, 128, 0.15)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// ─── Currently Learning Card ──────────────────────────────────────
const CurrentlyLearningCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % learningItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 relative z-10 h-full justify-center">
      {/* Stats strip */}
      <div className="flex items-center justify-around gap-3 py-4 px-3 rounded-xl"
        style={{ background: "rgba(16, 19, 46, 0.6)" }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span
              className="text-2xl lg:text-3xl font-bold"
              style={{ color: "#CBACF9" }}
            >
              {stat.value}
            </span>
            <span className="text-xs lg:text-sm text-[#C1C2D3] uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Currently Learning section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#CBACF9]" />
          <span className="text-sm lg:text-base font-semibold text-[#CBACF9] uppercase tracking-wider">
            Currently Exploring
          </span>
        </div>

        {/* Rotating learning item */}
        <div
          className="relative h-8 overflow-hidden"
        >
          {learningItems.map((item, i) => (
            <span
              key={i}
              className="absolute left-0 text-base lg:text-lg font-semibold text-white/90 transition-all duration-500"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transform: `translateY(${activeIndex === i ? "0" : activeIndex > i ? "-20px" : "20px"})`,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Learning items list */}
        <div className="flex flex-wrap gap-2">
          {learningItems.map((item, i) => (
            <span
              key={i}
              className="text-xs lg:text-sm px-3 py-1.5 rounded-lg transition-all duration-300"
              style={{
                background:
                  activeIndex === i
                    ? "rgba(203, 172, 249, 0.15)"
                    : "rgba(16, 19, 46, 0.8)",
                color:
                  activeIndex === i
                    ? "#CBACF9"
                    : "rgba(255, 255, 255, 0.5)",
                border: `1px solid ${activeIndex === i ? "rgba(203, 172, 249, 0.3)" : "rgba(255, 255, 255, 0.05)"}`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// BENTO GRID CONTAINER
// ═══════════════════════════════════════════════════════════════════

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// BENTO GRID ITEM
// ═══════════════════════════════════════════════════════════════════

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "kbose0204@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 3 && "!p-3 lg:!p-4"
          )}
        >
          {/* ── Default title/description (shown for items 1, 2, 6) ── */}
          {id !== 3 && id !== 4 && id !== 5 && (
            <>
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
              </div>
              <div
                className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}
              >
                {title}
              </div>
            </>
          )}

          {/* ── Globe (item 2) ── */}
          {id === 2 && <GridGlobe />}

          {/* ════════════════════════════════════════════════════════ */}
          {/* ITEM 3 — Categorized Tech Stack Bento Cards             */}
          {/* ════════════════════════════════════════════════════════ */}
          {id === 3 && (
            <div className="flex flex-col gap-1.5 z-10 w-full relative">
              {/* Ambient glow behind the grid */}
              <div
                className="absolute -inset-4 opacity-30 blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(203,172,249,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="font-sans text-lg lg:text-xl font-bold">
                Dev Tech Stack
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 mt-1">
                {techCategories.map((category, i) => (
                  <TechCategoryCard key={i} category={category} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════ */}
          {/* ITEM 4 — Currently Building Live Card                   */}
          {/* ════════════════════════════════════════════════════════ */}
          {id === 4 && <CurrentlyBuildingCard />}

          {/* ════════════════════════════════════════════════════════ */}
          {/* ITEM 5 — Stats + Currently Learning                     */}
          {/* ════════════════════════════════════════════════════════ */}
          {id === 5 && <CurrentlyLearningCard />}

          {/* ── Email Copy (item 6) ── */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};