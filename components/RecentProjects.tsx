"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { projects } from "@/data";

// ─── Browser Frame Mockup ─────────────────────────────────────────
const BrowserFrame = ({
  img,
  title,
}: {
  img: string;
  title: string;
}) => (
  <div className="relative w-full overflow-hidden rounded-xl">
    {/* Browser top bar */}
    <div
      className="flex items-center gap-2 px-4 py-2.5"
      style={{
        background: "rgba(16, 19, 46, 0.9)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      {/* URL bar */}
      <div
        className="flex-1 ml-3 px-3 py-1 rounded-md text-[10px] text-white/30 font-mono truncate"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        github.com/TheKunalBose/{title.replace(/\s+/g, "-")}
      </div>
    </div>
    {/* Screenshot */}
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "16/10", background: "#13162D" }}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/project:scale-105"
      />
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 60%, rgba(4,7,29,0.6) 100%)",
        }}
      />
    </div>
  </div>
);

// ─── Stagger animation ────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// ─── Project Card Component ───────────────────────────────────────
const ProjectCard = ({
  item,
  index,
}: {
  item: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    className="group/project relative"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    custom={index}
  >
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(203,172,249,0.08)] hover:-translate-y-1"
      style={{
        background: "rgb(4,7,29)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(203,172,249,0.4), transparent)",
        }}
      />

      {/* Browser frame mockup */}
      <div className="p-3 pb-0">
        <BrowserFrame
          img={item.img.startsWith("/") ? item.img : `/${item.img}`}
          title={item.title}
        />
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-3">
        {/* Title */}
        <h3 className="font-bold text-lg lg:text-xl text-white line-clamp-1 group-hover/project:text-purple transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: "#BEC1DD" }}
        >
          {item.des}
        </p>

        {/* Bottom row: tech stack + links */}
        <div className="flex items-center justify-between mt-2">
          {/* Tech stack icons */}
          <div className="flex items-center">
            {item.iconLists.slice(0, 5).map((icon, i) => (
              <div
                key={i}
                className="border border-white/[0.1] rounded-full bg-[#10132E] lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center transition-transform duration-200 hover:scale-110 hover:border-white/[0.2]"
                style={{
                  transform: `translateX(-${5 * i}px)`,
                  zIndex: item.iconLists.length - i,
                }}
              >
                <img
                  src={icon.startsWith("/") ? icon : `/${icon}`}
                  alt={icon}
                  className="p-1.5"
                />
              </div>
            ))}
            {item.iconLists.length > 5 && (
              <span
                className="text-[10px] text-white/40 ml-1"
                style={{ transform: `translateX(-${5 * 5}px)` }}
              >
                +{item.iconLists.length - 5}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-purple transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Code</span>
            </a>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-purple hover:text-white transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Explore</span>
              <FaLocationArrow className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════════
// RECENT PROJECTS
// ═══════════════════════════════════════════════════════════════════

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 px-2">
        {projects.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
