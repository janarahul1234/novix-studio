"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/ssr";
import { Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const PLANS = [
  {
    badge: "Single Project",
    kicker: "Single",
    title: "Project",
    body: "Perfect for startups and businesses launching a single premium website.",
    amount: "$499",
    unit: "Project",
    dark: false,
    includes: [
      "One marketing site, designed and built end to end",
      "Responsive layouts and a shared component set",
      "On-page SEO, analytics, and handover documentation",
      "Two rounds of revisions before launch",
    ],
  },
  {
    badge: "Growth Package",
    kicker: "Multi-Project",
    title: "Package",
    body: "Ideal for agencies and growing brands managing multiple projects.",
    amount: "$1,499",
    unit: "Package",
    dark: true,
    includes: [
      "Up to three sites or campaign pages each month",
      "Design system, motion library, and CMS structure",
      "No-code automation for forms, CRM, and email",
      "Monthly performance report and prioritised backlog",
    ],
  },
];

export function Pricing() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="pricing" className="shell py-14 md:py-20">
      <Reveal>
        <Eyebrow className="justify-center">Pricing</Eyebrow>
        <h2 className="mt-5 text-center text-[clamp(1.9rem,4.2vw,3.05rem)] leading-[1.1] font-bold tracking-[-0.035em]">
          Flexible plans for
          <br />
          <span className="text-smoke">growing businesses.</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-[1080px] gap-5 md:grid-cols-2">
        {PLANS.map((plan, i) => {
          const isOpen = open === i;

          return (
            <Reveal key={plan.title} delay={i * 0.08} className="h-full">
              <article
                className={`flex h-full flex-col rounded-sheet p-7 sm:p-9 ${
                  plan.dark
                    ? "bg-ink text-white"
                    : "bg-card text-ink shadow-[0_24px_60px_-44px_rgba(12,12,12,0.45)]"
                }`}
              >
                <span
                  className={`mx-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold ${
                    plan.dark ? "bg-white text-ink" : "bg-paper text-ink"
                  }`}
                >
                  <span aria-hidden className="size-[7px] rounded-full bg-accent" />
                  {plan.badge}
                </span>

                <h3 className="mt-9 text-center leading-tight tracking-[-0.035em]">
                  <span
                    className={`block text-[15px] font-medium ${
                      plan.dark ? "text-white/55" : "text-smoke"
                    }`}
                  >
                    {plan.kicker}
                  </span>
                  <span className="block text-[clamp(1.9rem,3.4vw,2.5rem)] font-bold">
                    {plan.title}
                  </span>
                </h3>

                <p
                  className={`mx-auto mt-5 max-w-[30ch] text-center text-[13px] leading-relaxed ${
                    plan.dark ? "text-white/55" : "text-mute"
                  }`}
                >
                  {plan.body}
                </p>

                <div
                  className={`mx-auto mt-8 flex items-baseline gap-2 rounded-full px-6 py-3.5 ${
                    plan.dark ? "bg-white text-ink" : "bg-ink text-white"
                  }`}
                >
                  <span className="text-[11px] font-medium opacity-60">
                    From
                  </span>
                  <span className="text-[2rem] leading-none font-bold tracking-[-0.04em]">
                    {plan.amount}
                  </span>
                  <span className="text-[11px] font-medium opacity-60">
                    /{plan.unit}
                  </span>
                </div>

                <div className="mt-auto pt-9">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 rounded-xl py-1 text-left ${
                      plan.dark ? "text-white/70" : "text-mute"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-[12px] font-medium">
                      <CheckCircle className="size-4" weight="duotone" />
                      Available Resources
                    </span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      } ${
                        plan.dark
                          ? "bg-white text-ink"
                          : "bg-paper text-ink hover:bg-line"
                      }`}
                    >
                      <ArrowUpRight className="size-4" weight="bold" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                      isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul
                      className={`overflow-hidden transition-[visibility] duration-300 ${
                        isOpen ? "visible" : "invisible"
                      }`}
                    >
                      {plan.includes.map((item) => (
                        <li
                          key={item}
                          className={`flex gap-2.5 text-[12.5px] leading-relaxed ${
                            plan.dark ? "text-white/60" : "text-mute"
                          } ${item === plan.includes[0] ? "" : "mt-2.5"}`}
                        >
                          <span
                            aria-hidden
                            className={`mt-[0.55em] size-1 shrink-0 rounded-full ${
                              plan.dark ? "bg-white/40" : "bg-ink/30"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
