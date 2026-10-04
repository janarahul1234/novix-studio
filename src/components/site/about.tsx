import { Eyebrow, Pic, PillButton, Stars } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="shell py-14 md:py-20">
      <div className="frame px-5 py-12 md:px-10 md:py-16 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-8">
          <Reveal>
            <Eyebrow className="lg:pt-2">About Novix</Eyebrow>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-[46ch] text-[clamp(1.6rem,3.3vw,2.65rem)] leading-[1.16] font-bold tracking-[-0.03em]">
                Built for ambitious brands that refuse ordinary, combining{" "}
                <span className="text-smoke">
                  strategy, creativity, and modern no-code solutions to create
                  lasting impact worldwide.
                </span>
              </h2>

              <PillButton
                label="Let’s Talk"
                variant="dark"
                arrow={false}
                href="#contact"
                className="mt-8 py-3 pr-7"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12 grid items-start gap-4 md:grid-cols-[minmax(0,19rem)_minmax(0,27rem)]">
                <figure className="chamfer-tr relative rounded-tile bg-card p-6 shadow-[0_18px_50px_-28px_rgba(12,12,12,0.28)]">
                  <Stars />
                  <blockquote className="mt-5 text-[13px] leading-relaxed text-mute">
                    &ldquo;Novix helped us launch a modern website that not only
                    looked incredible but delivered measurable business
                    results.&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="size-9 overflow-hidden rounded-full bg-paper">
                      <Pic
                        seed="novix-avatar-sarah"
                        w={96}
                        h={96}
                        alt=""
                        sizes="36px"
                        filter="grayscale-[0.25]"
                      />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[13px] font-semibold text-ink">
                        Sarah Mitchell
                      </span>
                      <span className="block text-[11px] text-smoke">
                        Founder, Novix Studio
                      </span>
                    </span>
                  </figcaption>
                </figure>

                <figure className="chamfer-br relative rounded-tile bg-card p-6 md:-ml-6 md:min-h-[15rem] shadow-[0_18px_50px_-28px_rgba(12,12,12,0.28)]">
                  <div className="flex items-start justify-between gap-6">
                    <p className="flex items-baseline gap-3">
                      <span className="text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-bold tracking-[-0.04em]">
                        50+
                      </span>
                      <span className="text-xs font-medium text-smoke">
                        Happy Clients
                      </span>
                    </p>
                    <span className="size-20 shrink-0 overflow-hidden rounded-tile bg-paper sm:size-24">
                      <Pic
                        seed="novix-avatar-founder-portrait"
                        w={240}
                        h={240}
                        alt=""
                        sizes="96px"
                        filter="saturate-[0.8]"
                      />
                    </span>
                  </div>

                  <figcaption className="absolute bottom-6 left-6 leading-tight">
                    <span className="block text-[13px] font-semibold text-ink">
                      Sarah Mitchell
                    </span>
                    <span className="block text-[11px] text-smoke">
                      Founder, Novix Studio
                    </span>
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
