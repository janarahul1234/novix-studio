"use client";

import { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react/ssr";
import { Eyebrow, Pic } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const QUESTIONS = [
  {
    q: "How long does a typical project take?",
    a: "Most websites are completed within 2-4 weeks, depending on the project scope, content, and revisions.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. After launch we keep the site current with a monthly retainer for updates, experiments, and new pages.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "We audit what you have, keep everything that converts, and rebuild the rest around a clearer structure.",
  },
  {
    q: "Which platforms do you work with?",
    a: "Framer, Webflow, and Next.js. We pick the one your team can genuinely maintain after we hand it over.",
  },
  {
    q: "How do we get started?",
    a: "Book a call and share your goals. You get a scoped proposal with a timeline within two working days.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="shell py-6 md:py-8">
      <div className="overflow-hidden rounded-sheet bg-coal px-4 py-16 text-white sm:px-7 md:py-20 lg:px-10 lg:py-24">
        <Reveal>
          <Eyebrow tone="dark" className="justify-center">
            FAQ
          </Eyebrow>
          {/* the reference sets the first line almost invisible against black */}
          <h2 className="mt-8 text-center text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.06] font-bold tracking-[-0.04em]">
            <span className="text-[#141414]">frequently asked</span>
            <br />
            <span className="text-ash">questions.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start">
          <Reveal delay={0.05}>
            <ul className="flex flex-col gap-3">
              {QUESTIONS.map((item, i) => {
                const isOpen = open === i;

                return (
                  <li
                    key={item.q}
                    className="overflow-hidden rounded-tile bg-slab"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6"
                      >
                        <span
                          className={`text-[13.5px] font-semibold tracking-[-0.015em] transition-colors sm:text-[15px] ${
                            isOpen ? "text-white" : "text-white/70"
                          }`}
                        >
                          {item.q}
                        </span>
                        <span
                          className={`grid size-6 shrink-0 place-items-center rounded-md transition-colors ${
                            isOpen
                              ? "bg-white/10 text-white"
                              : "text-white/45"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="size-3.5" weight="bold" />
                          ) : (
                            <Plus className="size-3.5" weight="bold" />
                          )}
                        </span>
                      </button>
                    </h3>

                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div
                        className={`overflow-hidden transition-[visibility] duration-300 ${
                          isOpen ? "visible" : "invisible"
                        }`}
                      >
                        <p className="max-w-[52ch] px-5 pb-5 text-[13px] leading-relaxed text-white/55 sm:px-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="h-full min-h-[18rem] overflow-hidden rounded-panel">
              <Pic
                seed="novix-studio-office-day"
                w={800}
                h={900}
                alt="The Novix team planning a launch in the studio"
                sizes="(min-width: 1024px) 416px, 92vw"
                filter="saturate-[0.85] contrast-[1.02]"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
