import { ArrowUpRight, ArrowRight, Sparkle } from "@phosphor-icons/react/ssr";
import { Nav } from "@/components/site/nav";
import { HeroSmoke } from "@/components/site/hero-smoke";
import { Pic, Wordmark } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const SLIDES = 4;

export function Hero() {
  return (
    <section id="top" className="shell pt-5 md:pt-10 lg:pt-14">
      <div className="grain relative isolate flex min-h-[86dvh] flex-col overflow-hidden rounded-sheet bg-black text-white lg:min-h-[780px]">
        <HeroSmoke />

        <div className="relative z-10 flex flex-1 flex-col px-4 pb-5 sm:px-7 lg:px-10">
          <Nav />

          <div className="flex flex-1 flex-col justify-between gap-12 pt-6 lg:pt-10">
            <Reveal>
              <p className="flex items-center gap-2 text-[12.5px] font-medium tracking-[0.01em] text-white/55">
                <Sparkle className="size-3.5 text-accent" weight="fill" />
                Helping ambitious brands launch faster
              </p>
              <h1 className="mt-5 text-[clamp(3.25rem,12.4vw,10.75rem)] leading-[0.82] font-extrabold tracking-[-0.045em]">
                <Wordmark studio />
              </h1>
            </Reveal>

            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,31rem)] lg:gap-12">
              <div>
                <p className="max-w-[34ch] text-[15px] leading-relaxed text-white/60">
                  We build websites and experiences that help brands launch
                  faster, grow smarter, and stand out with confidence.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/[0.16] bg-white/[0.03] py-2.5 pr-2.5 pl-5 text-[13px] font-semibold text-white transition-colors hover:border-white/40"
                  >
                    <span className="whitespace-nowrap">Explore Projects</span>
                    <span className="grid size-7 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-white group-hover:text-ink">
                      <ArrowRight className="size-3.5" weight="bold" />
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-5 text-[13px] font-semibold text-ink transition-transform active:scale-[0.98]"
                  >
                    <span className="whitespace-nowrap">Book a Call</span>
                    <span className="grid size-8 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="size-4" weight="bold" />
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <figure className="chamfer-both relative aspect-[4/3] overflow-hidden bg-[#e8e6e3]">
                    <Pic
                      seed="novix-hero-creative-desk"
                      w={640}
                      h={480}
                      alt="A designer working at a laptop in the studio"
                      sizes="(min-width: 1024px) 300px, 45vw"
                      filter="saturate-[0.85]"
                      priority
                    />
                    <span
                      aria-hidden
                      className="absolute top-[14%] left-[16%] size-[30%] bg-accent"
                    />
                  </figure>

                  <figure className="relative aspect-[4/3] overflow-hidden rounded-tile">
                    <Pic
                      seed="novix-studio-team-night"
                      w={640}
                      h={480}
                      alt="The Novix studio team around a table"
                      sizes="(min-width: 1024px) 300px, 45vw"
                      filter="saturate-[0.75] brightness-[0.62] contrast-[1.05]"
                    />
                    <figcaption className="absolute inset-0 grid place-items-center bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.6))]">
                      <Wordmark studio className="text-[clamp(0.9rem,2.1vw,1.4rem)] tracking-[-0.03em] text-white" />
                    </figcaption>
                  </figure>
                </div>

                {/* slide position for the two cards above */}
                <div className="mt-4 flex items-center gap-4 text-[11px] font-medium text-white/40">
                  <span>01</span>
                  <span
                    aria-hidden
                    className="relative h-px flex-1 overflow-hidden bg-white/15"
                  >
                    <span
                      className="absolute inset-y-0 left-0 bg-white/70"
                      style={{ width: `${(1 / SLIDES) * 100}%` }}
                    />
                  </span>
                  <span>0{SLIDES}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
