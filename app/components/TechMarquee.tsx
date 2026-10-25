
"use client";

import { useEffect, useRef, useState } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "SQL", icon: FaDatabase, color: "#60A5FA" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
];

export default function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [glowVisible, setGlowVisible] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMove = (event: PointerEvent) => {
      const rect = track.getBoundingClientRect();

      setPointer({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    track.addEventListener("pointermove", handleMove);

    return () => {
      track.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <section
      id="skills"
      className="tech-marquee relative overflow-hidden border-y border-purple-400/10 py-8"
    >
      <div className="tech-ambient" />

      <p className="relative z-10 mb-6 text-center text-xs font-medium tracking-[0.3em] text-purple-300">
        TECHNOLOGIES & TOOLS
      </p>

      <div
        ref={trackRef}
        onPointerEnter={() => setGlowVisible(true)}
        onPointerLeave={() => setGlowVisible(false)}
        className="tech-track group relative flex overflow-hidden"
      >
        <div
          className={`pointer-glow ${
            glowVisible ? "is-visible" : ""
          }`}
          style={{
            left: pointer.x,
            top: pointer.y,
          }}
        />

        <div className="edge-fade edge-left" />
        <div className="edge-fade edge-right" />

        {[0, 1].map((set) => (
          <div
            key={set}
            aria-hidden={set === 1}
            className="marquee-content flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="tech-item group/item relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                  <div className="item-glow" />

                  <Icon
                    className="relative z-10 h-7 w-7 transition-transform duration-300 group-hover/item:scale-110 sm:h-8 sm:w-8"
                    style={{ color: tech.color }}
                  />

                  <span className="relative z-10 whitespace-nowrap text-sm font-medium sm:text-base">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style jsx>{`
        .tech-marquee {
          isolation: isolate;
          background:
            radial-gradient(
              ellipse at 15% 50%,
              rgba(124, 58, 237, 0.13),
              transparent 45%
            ),
            radial-gradient(
              ellipse at 85% 50%,
              rgba(59, 130, 246, 0.1),
              transparent 45%
            ),
            #070918;
        }

        .tech-ambient {
          position: absolute;
          inset: -50%;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(
            ellipse at center,
            rgba(139, 92, 246, 0.12),
            transparent 55%
          );
          filter: blur(45px);
          animation: ambient-pulse 7s ease-in-out infinite alternate;
        }

        .tech-track {
          isolation: isolate;
        }

        .pointer-glow {
          position: absolute;
          z-index: -1;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.25) 0%,
            rgba(99, 102, 241, 0.12) 35%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          transition: opacity 250ms ease;
          filter: blur(12px);
        }

        .pointer-glow.is-visible {
          opacity: 1;
        }

        .tech-item {
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.015);
        }

        .item-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(168, 85, 247, 0.2),
            rgba(99, 102, 241, 0.08) 55%,
            transparent 80%
          );
          transition: opacity 250ms ease;
        }

        .tech-item:hover {
          border-color: rgba(168, 85, 247, 0.35);
          box-shadow:
            0 0 20px rgba(139, 92, 246, 0.12),
            inset 0 0 14px rgba(139, 92, 246, 0.04);
        }

        .tech-item:hover .item-glow {
          opacity: 1;
        }

        .edge-fade {
          position: absolute;
          inset-block: 0;
          z-index: 10;
          width: 60px;
          pointer-events: none;
        }

        .edge-left {
          left: 0;
          background: linear-gradient(
            to right,
            #070918,
            transparent
          );
        }

        .edge-right {
          right: 0;
          background: linear-gradient(
            to left,
            #070918,
            transparent
          );
        }

        .marquee-content {
          animation: marquee 35s linear infinite;
        }

        .tech-track:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes ambient-pulse {
          from {
            opacity: 0.55;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-ambient {
            animation: none;
          }

          .marquee-content {
            animation-duration: 70s;
          }
        }
      `}</style>
    </section>
  );
}
