"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "@phosphor-icons/react/ssr";
import { Eyebrow, Pic } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const SERVICES = [
  {
    n: "01",
    title: "Website Design",
    tags: ["UI/UX", "Responsive", "Performance"],
    body: "Beautiful websites crafted to engage, inspire confidence.",
    seed: "novix-service-website-design",
  },
  {
    n: "02",
    title: "Framer Development",
    tags: ["Framer", "CMS", "Motion"],
    body: "Framer builds that ship fast, with an editor your team enjoys using.",
    seed: "novix-service-framer-build",
  },
  {
    n: "03",
    title: "No-Code Automation",
    tags: ["Automation", "Workflows", "Integration"],
    body: "Automation that removes the manual steps between an enquiry and a contract.",
    seed: "novix-service-automation-flow",
  },
  {
    n: "04",
    title: "Brand Identity",
    tags: ["Identity", "Strategy", "Visuals"],
    body: "Identity systems that stay recognisable across every surface you ship.",
    seed: "novix-service-brand-identity",
  },
  {
    n: "05",
    title: "SEO & Growth",
    tags: ["SEO", "Analytics", "Content"],
    body: "Technical SEO and content structures that compound month after month.",
    seed: "novix-service-seo-growth",
  },
];

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="shell py-6 md:py-8">
      <div className="overflow-hidden rounded-sheet bg-coal px-4 py-16 text-white sm:px-7 md:py-20 lg:px-10 lg:py-24">
        <Reveal>
          <Eyebrow tone="dark" className="justify-center">
            Services
          </Eyebrow>
          <h2 className="mt-5 text-center text-[clamp(1.85rem,4.2vw,3.1rem)] leading-[1.12] font-bold tracking-[-0.035em]">
            <span className="text-ash">Crafted with purpose.</span>
            <br />
            <span className="text-ash">Built </span>
            <span className="text-white">for lasting impact.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mx-auto mt-14 flex max-w-[1080px] flex-col gap-3.5">
            {SERVICES.map((service, i) => {
              const isOpen = open === i;

              return (
                <li
                  key={service.n}
                  className={`rounded-panel bg-slab transition-colors duration-300 ${
                    isOpen ? "ring-1 ring-white/[0.07]" : ""
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="grid w-full grid-cols-[3.75rem_1fr_auto] items-center gap-4 rounded-panel px-5 py-5 text-left sm:px-7 md:grid-cols-[6.5rem_1fr_auto] lg:px-9"
                    >
                      <span
                        className={`text-[1.75rem] leading-none font-bold tracking-[-0.05em] transition-colors duration-300 sm:text-[2.6rem] md:text-[3.1rem] ${
                          isOpen ? "text-white/80" : "text-white/15"
                        }`}
                      >
                        {service.n}.
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block text-[15px] font-semibold tracking-[-0.02em] transition-colors duration-300 sm:text-[17px] ${
                            isOpen ? "text-white" : "text-white/45"
                          }`}
                        >
                          {service.title}
                        </span>
                        <span className="mt-2.5 flex flex-wrap gap-1.5">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-white/55"
                            >
                              {tag}
                            </span>
                          ))}
                        </span>
                      </span>

                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-white/25 bg-white text-ink"
                            : "border-white/15 text-white/55"
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

                  {/* grid-rows 0fr -> 1fr keeps the disclosure animatable
                      without measuring heights in JS */}
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
                      <div className="grid gap-6 px-5 pb-7 sm:px-7 md:grid-cols-[6.5rem_minmax(0,1fr)] md:px-9 lg:grid-cols-[6.5rem_minmax(0,22rem)_minmax(0,1fr)] lg:items-center">
                        <div className="hidden md:block" />

                        <figure className="aspect-[16/10] overflow-hidden rounded-tile bg-[#0e0e0e]">
                          <Pic
                            seed={service.seed}
                            w={800}
                            h={500}
                            alt={`${service.title} sample work`}
                            sizes="(min-width: 1024px) 352px, 90vw"
                            filter="contrast-[1.06] saturate-[0.72]"
                          />
                        </figure>

                        <div className="lg:pl-8">
                          <p className="max-w-[34ch] text-[15px] leading-relaxed text-white/55">
                            {service.body}
                          </p>
                          <a
                            href="#contact"
                            className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pr-1.5 pl-5 text-[13px] font-semibold text-ink"
                          >
                            Explore Service
                            <span className="grid size-7 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                              <ArrowUpRight className="size-3.5" weight="bold" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
