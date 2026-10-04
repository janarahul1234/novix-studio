import { ArrowUpRight, GlobeHemisphereWest } from "@phosphor-icons/react/ssr";
import {
  siFigma,
  siFramer,
  siNextdotjs,
  siNotion,
  siWebflow,
  siWix,
} from "simple-icons";
import { Eyebrow, Pic } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

/** Official SVG path data from simple-icons, not redrawn marks. */
const TOOLS = [
  siFramer,
  siWebflow,
  siFigma,
  siNextdotjs,
  siNotion,
  siWix,
].map((icon) => ({ name: icon.title, path: icon.path }));

const AVATARS = [
  { seed: "novix-avatar-sarah", alt: "" },
  { seed: "novix-avatar-emily", alt: "" },
];

export function WhyUs() {
  return (
    <section id="why" className="shell py-14 md:py-20">
      <Reveal>
        <Eyebrow className="justify-center">Why Choose Us</Eyebrow>
        <h2 className="mt-5 text-center text-[clamp(1.9rem,4.2vw,3.05rem)] leading-[1.1] font-bold tracking-[-0.035em]">
          A trusted partner
          <br />
          for <span className="text-smoke">ambitious brands.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)]">
        <Reveal className="h-full">
          <figure className="h-full min-h-[20rem] overflow-hidden rounded-sheet bg-paper">
            <Pic
              seed="novix-founders-table-meeting"
              w={720}
              h={960}
              alt="Two founders reviewing a website launch at a kitchen table"
              sizes="(min-width: 1024px) 336px, 92vw"
              filter="saturate-[0.88]"
            />
          </figure>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal delay={0.06}>
            <div className="rounded-sheet bg-card/60 p-7 sm:p-9">
              <h3 className="max-w-[34ch] text-[clamp(1.25rem,2.3vw,1.75rem)] leading-[1.28] font-bold tracking-[-0.025em]">
                We combine design and no-code expertise{" "}
                <span className="text-smoke">
                  to create experiences that help businesses launch faster,
                  scale confidently, and achieve growth.
                </span>
              </h3>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6">
                <p className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-line text-mute">
                    <GlobeHemisphereWest className="size-5" weight="duotone" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[13px] font-semibold text-ink">
                      Trusted Worldwide
                    </span>
                    <span className="block text-[11px] text-smoke">
                      12+ Countries
                    </span>
                  </span>
                </p>

                <p className="flex items-center">
                  {AVATARS.map((avatar, i) => (
                    <span
                      key={avatar.seed}
                      className={`size-9 overflow-hidden rounded-full border-2 border-card bg-paper ${
                        i > 0 ? "-ml-2.5" : ""
                      }`}
                    >
                      <Pic
                        seed={avatar.seed}
                        w={96}
                        h={96}
                        alt=""
                        sizes="36px"
                        filter="grayscale-[0.2]"
                      />
                    </span>
                  ))}
                  <span className="-ml-2.5 grid size-9 place-items-center rounded-full border-2 border-card bg-ink text-[10px] font-semibold text-white">
                    +8
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,17rem)]">
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-sheet bg-card p-7 shadow-[0_24px_60px_-40px_rgba(12,12,12,0.4)]">
                <h4 className="text-[15px] leading-snug font-semibold tracking-[-0.02em]">
                  Trusted by
                  <br />
                  Modern Businesses
                </h4>
                <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-mute">
                  Helping ambitious brands launch confidently worldwide.
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                  {TOOLS.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2 text-[12px] font-medium text-ink/80"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="size-3.5 shrink-0 fill-current"
                      >
                        <path d={tool.path} />
                      </svg>
                      <span className="truncate">{tool.name}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-ink py-2 pr-2 pl-5 text-[13px] font-semibold text-white transition-transform active:scale-[0.98]"
                >
                  <span className="whitespace-nowrap">Start Project</span>
                  <span className="grid size-8 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" weight="bold" />
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="relative h-full min-h-[15rem] overflow-hidden rounded-sheet bg-slab p-6 text-white">
                <span className="absolute inset-0">
                  <Pic
                    seed="novix-night-desk-silhouette"
                    w={600}
                    h={700}
                    alt=""
                    sizes="(min-width: 768px) 272px, 92vw"
                    filter="grayscale contrast-[1.15] brightness-[0.65]"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.75)_100%)]" />
                </span>

                <div className="relative flex h-full flex-col justify-between">
                  <p className="flex items-baseline justify-between gap-3 border-b border-white/15 pb-3 text-[11px] font-semibold tracking-[0.04em] uppercase">
                    Client Satisfaction
                    <span className="text-white/40 normal-case">2026</span>
                  </p>

                  <div>
                    <p className="text-[2.6rem] leading-none font-bold tracking-[-0.05em]">
                      98%
                    </p>
                    <p className="mt-3 max-w-[26ch] text-[13px] leading-relaxed text-white/65">
                      Exceptional results backed by long-term partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
