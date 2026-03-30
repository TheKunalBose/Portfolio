"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .floating-glass-card {
           /* Box model & baseline */
           position: relative;
           overflow: hidden;
           border-radius: 20px;
           width: 85vw;
           max-width: 450px;
           padding: 1.5rem;
           margin: 0;
           flex-shrink: 0;
           border: 1px solid rgba(255, 255, 255, 0.05);
           
           /* Layered Background */
           background-color: rgba(4, 7, 29, 0.9);
           backdrop-filter: blur(12px);
           
           /* Box Shadow */
           box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
           
           /* Transitions */
           transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.35s ease;
           
           /* Flexbox for inner layout */
           display: flex;
           flex-direction: column;
        }

        @media (min-width: 768px) {
           .floating-glass-card {
             width: 600px;
             max-width: none;
             padding: 2.5rem;
           }
        }

        /* Top Glowing Line */
        .floating-glass-card::before {
           content: '';
           position: absolute;
           top: 0; left: 0; right: 0;
           height: 2px;
           background: linear-gradient(90deg, transparent, #CBACF9, transparent);
           opacity: 0.2;
           transition: opacity 0.35s ease;
           z-index: 2;
        }

        /* Subtle Inner Glow on Hover */
        .floating-glass-card::after {
           content: '';
           position: absolute;
           inset: 0;
           background: radial-gradient(ellipse at top, rgba(203,172,249,0.1) 0%, transparent 70%);
           opacity: 0;
           transition: opacity 0.35s ease;
           pointer-events: none;
           z-index: 1;
        }

        /* Hover States */
        .floating-glass-card:hover {
           transform: translateY(-4px);
           box-shadow: 0 12px 32px rgba(0,0,0,0.6);
           border-color: rgba(203,172,249,0.15);
        }
        .floating-glass-card:hover::before {
           opacity: 1;
        }
        .floating-glass-card:hover::after {
           opacity: 1;
        }

        /* Noise Texture */
        .card-noise {
           position: absolute;
           inset: -50%;
           width: 200%;
           height: 200%;
           opacity: 0.02;
           pointer-events: none;
           z-index: 0;
        }

        /* Insight Header Layout */
        .insight-header {
           display: flex;
           align-items: center;
           gap: 12px;
           position: relative;
           z-index: 1;
           margin-bottom: 1.25rem;
        }

        /* Glowing Dot Indicator */
        .glow-dot {
           width: 8px;
           height: 8px;
           border-radius: 50%;
           background-color: #CBACF9;
           box-shadow: 0 0 10px #CBACF9, 0 0 20px rgba(203,172,249,0.4);
           flex-shrink: 0;
        }

        /* Insight Header Text */
        .insight-title {
           font-family: inherit;
           font-weight: 700;
           font-size: 1.15rem;
           color: #E2E8F0;
           letter-spacing: 0.02em;
           margin: 0;
           line-height: 1.3;
        }

        @media (min-width: 768px) {
           .insight-title {
              font-size: 1.35rem;
           }
        }

        /* Main Description */
        .insight-description {
           font-family: inherit;
           font-size: 0.95rem;
           line-height: 1.7;
           color: #BEC1DD;
           position: relative;
           z-index: 1;
           margin: 0;
        }

        /* Divider Line */
        .card-divider {
           width: 100%;
           height: 1px;
           background: linear-gradient(to right, rgba(203,172,249,0.25), transparent);
           margin: 1.5rem 0 1.25rem;
           position: relative;
           z-index: 1;
        }

        /* Tags Area */
        .insight-tags {
           font-family: inherit;
           font-weight: 600;
           font-size: 0.75rem;
           color: #CBACF9;
           letter-spacing: 0.05em;
           text-transform: uppercase;
           position: relative;
           z-index: 1;
           line-height: 1.4;
        }
      `}} />
      <svg aria-hidden="true" className="pointer-events-none fixed isolate z-50 opacity-0 mix-blend-soft-light w-0 h-0">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
        </filter>
      </svg>
      <div
        ref={containerRef}
        className={cn(
          // max-w-7xl to w-screen
          "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            // change gap-16
            " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="floating-glass-card"
              key={idx}
            >
              <div className="card-noise" style={{ filter: 'url(#noiseFilter)' }}></div>
              
              <div className="insight-header">
                 <div className="glow-dot" />
                 <h3 className="insight-title">{item.quote}</h3>
              </div>
              
              <p className="insight-description">{item.name}</p>
              
              <div className="mt-auto">
                <div className="card-divider"></div>
                <div className="insight-tags">{item.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};