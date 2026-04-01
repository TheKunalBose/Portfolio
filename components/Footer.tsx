"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* ── Top divider line with gradient ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple/30 to-transparent" />

      {/* ── CTA Section ── */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Subtle glow behind heading */}
        <div className="relative">
          <div
            className="absolute -inset-12 opacity-20 blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(203,172,249,0.3), transparent 70%)",
            }}
          />
          <h1 className="heading lg:max-w-[80vw] relative z-10">
            Where <span className="text-purple">Development</span> Meets <span className="text-purple">Operations</span> Efficiency.
          </h1>
        </div>

        <p className="text-white-200 md:mt-10 my-5 text-center max-w-lg text-sm lg:text-base leading-relaxed">
          From infrastructure to automation, helping teams move faster and build
          smarter. Let&apos;s create something remarkable together.
        </p>

        <a href="mailto:kbose0204@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </motion.div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="mt-20 pt-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left — branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-bold text-white/90 tracking-wide">
              Kunal Bose
            </span>
            <span className="text-xs text-white/30">
              AI/ML · DevOps · Full-Stack
            </span>
          </div>

          {/* Center — copyright */}
          <p className="text-xs text-white/25 order-3 md:order-2">
            &copy; {new Date().getFullYear()} — Built with passion &
            caffeine
          </p>

          {/* Right — social icons */}
          <div className="flex items-center gap-3 order-2 md:order-3">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social w-10 h-10 cursor-pointer flex justify-center items-center rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(4, 7, 29, 0.8)",
                  border: "1px solid rgba(203, 172, 249, 0.1)",
                }}
              >
                <img
                  src={info.img}
                  alt="social"
                  width={18}
                  height={18}
                  className="opacity-60 group-hover/social:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{
              background: "#4ADE80",
              boxShadow: "0 0 6px rgba(74, 222, 128, 0.5)",
            }}
          />
          <span className="text-[11px] text-white/30 tracking-wide">
            Open to opportunities
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
