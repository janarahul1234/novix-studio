import { Code, Compass, PenNib, RocketLaunch } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Dash, Eyebrow, PillButton } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const STEPS: {
  n: string;
  title: string;
  body: string;
  icon: Icon;
  dark?: boolean;
}[] = [
  {
    n: "01",
    title: "Discover",
    body: "Understanding your goals, audience, and opportunities before every decision.",
    icon: Compass,
  },
  {
    n: "02",
    title: "Design",
    body: "Crafting intuitive experiences that balance beauty, usability, and performance.",
    icon: PenNib,
    dark: true,
  },
  {
    n: "03",
    title: "Develop",
    body: "Building scalable no-code websites with precision, speed, and flexibility.",
    icon: Code,
  },
  {
    n: "04",
    title: "Launch",
    body: "Delivering a polished digital experience ready to grow your business.",
    icon: RocketLaunch,
  },
];

export function Process() {
  return (
    <section id="process" className="shell py-14 md:py-20">
      <div className="frame relative px-5 py-14 md:px-10 md:py-18 lg:px-14">
        {/* oversized word behind the cards, as in the reference */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-10 text-center text-[22vw] leading-none font-extrabold tracking-[-0.06em] whitespace-nowrap text-ink/[0.035] select-none lg:text-[15rem]"
        >
          NOVIX
        </span>

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-5 max-w-[32ch] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.14] font-bold tracking-[-0.035em]">
              Creating digital experiences
              <br />
              that{" "}
              <span className="text-smoke">
                help ambitious brands
                <br />
                grow, connect, and stand apart.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <PillButton
              label="Contact Us"
              variant="dark"
              href="#contact"
              className="mb-1 py-2.5"
            />
          </Reveal>
        </div>

        <div className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const IconGlyph = step.icon;

            return (
              <Reveal key={step.n} delay={i * 0.06} className="h-full">
                <article
                  className={`chamfer-tr flex h-full flex-col rounded-tile p-6 ${
                    step.dark
                      ? "bg-ink text-white lg:mt-14"
                      : "bg-card text-ink shadow-[0_18px_50px_-34px_rgba(12,12,12,0.35)]"
                  }`}
                >
                  <span
                    className={`grid size-11 place-items-center rounded-xl ${
                      step.dark
                        ? "bg-accent/15 text-accent ring-1 ring-accent/25"
                        : "bg-accent/[0.08] text-accent ring-1 ring-accent/15"
                    }`}
                  >
                    <IconGlyph className="size-5" weight="duotone" />
                  </span>

                  <h3 className="mt-14 flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.02em]">
                    <span className={step.dark ? "text-white/50" : "text-smoke"}>
                      {step.n}
                    </span>
                    <Dash className={step.dark ? "bg-white/30" : "bg-ink/25"} />
                    {step.title}
                  </h3>

                  <p
                    className={`mt-3 text-[13px] leading-relaxed ${
                      step.dark ? "text-white/55" : "text-mute"
                    }`}
                  >
                    {step.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
