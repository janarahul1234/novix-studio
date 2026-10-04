"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/primitives";
import { Pic } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

type Project = {
  n: string;
  title: string;
  body: string;
  surface: string;
  tone: "light" | "dark";
  seed?: string;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    title: "SaaS Launch Site",
    body: "A conversion-first product site with a real design system, motion, and a CMS the team edits themselves.",
    surface: "#101010",
    tone: "light",
  },
  {
    n: "02",
    title: "DTC Storefront",
    body: "A storefront built for speed, with editorial product pages and a checkout that stays out of the way.",
    surface: "#c2681a",
    tone: "light",
  },
  {
    n: "03",
    title: "Booking Platform",
    body: "No-code booking with automated reminders, live availability, and a dashboard that replaces the inbox.",
    surface: "#6f8291",
    tone: "light",
  },
  {
    n: "04",
    title: "Identity Refresh",
    body: "A wordmark, type scale, and colour system carried across web, packaging, and sales collateral.",
    surface: "#c9c6c1",
    tone: "dark",
  },
  {
    n: "05",
    title: "Creative Agency",
    body: "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
    surface: "#20242a",
    tone: "light",
    seed: "novix-work-sunset-walker",
  },
];

const OFFSET = 66;

/**
 * The reference presents work as a dealt stack. Clicking a card brings it to
 * the front, which is the section's only job: browse the case studies.
 */
export function WorkStack() {
  const [order, setOrder] = useState<number[]>(() =>
    PROJECTS.map((_, i) => i),
  );

  const bringToFront = (index: number) =>
    setOrder((prev) =>
      prev[prev.length - 1] === index
        ? prev
        : [...prev.filter((i) => i !== index), index],
    );

  return (
    <section id="work" className="shell py-14 md:py-20">
      <Reveal>
        <Eyebrow className="justify-center">Work</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-[34ch] text-center text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] font-bold tracking-[-0.035em]">
          Build, Launch, and <span className="text-smoke">Scale</span>
          <br />
          <span className="text-smoke">with Confidence</span>
        </h2>
      </Reveal>

      <Reveal delay={0.06}>
        <div
          className="relative mx-auto mt-14 w-full max-w-[1080px] px-2"
          style={{ height: `calc(${(PROJECTS.length - 1) * OFFSET}px + 26rem)` }}
        >
          {PROJECTS.map((project, i) => {
            const position = order.indexOf(i);
            const isFront = position === PROJECTS.length - 1;
            const muted = project.tone === "dark";

            return (
              <button
                key={project.n}
                type="button"
                onClick={() => bringToFront(i)}
                aria-label={`Bring ${project.title} to the front`}
                aria-pressed={isFront}
                className="absolute inset-x-2 overflow-hidden rounded-sheet text-left transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                style={{
                  height: "26rem",
                  zIndex: position + 1,
                  transform: `translateY(${position * OFFSET}px)`,
                  background: project.surface,
                  boxShadow: isFront
                    ? "0 40px 90px -40px rgba(12,12,12,0.45)"
                    : "none",
                  color: muted ? "#141414" : "#ffffff",
                }}
              >
                {project.seed ? (
                  <span className="absolute inset-0">
                    <Pic
                      seed={project.seed}
                      w={1200}
                      h={800}
                      alt={`${project.title} project visual`}
                      sizes="(min-width: 1280px) 1080px, 92vw"
                      filter="contrast-[1.05] saturate-[0.85]"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,11,0.88)_0%,rgba(8,9,11,0.25)_45%,rgba(8,9,11,0.55)_100%)]" />
                  </span>
                ) : null}

                <span className="relative block px-7 pt-6 sm:px-9 sm:pt-7">
                  <span
                    className={`block text-[2rem] leading-none font-bold tracking-[-0.04em] sm:text-[2.35rem] ${
                      muted ? "text-ink/70" : "text-white/80"
                    }`}
                  >
                    {project.n}
                  </span>
                </span>

                <span className="absolute inset-x-7 bottom-8 sm:inset-x-10">
                  <span className="block text-[clamp(1.35rem,2.4vw,1.85rem)] leading-tight font-semibold tracking-[-0.025em]">
                    {project.title}
                  </span>
                  <span
                    className={`mt-3 block max-w-[52ch] text-[13px] leading-relaxed ${
                      muted ? "text-ink/70" : "text-white/65"
                    }`}
                  >
                    {project.body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
