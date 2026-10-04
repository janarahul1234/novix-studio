"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight, TwitterLogo } from "@phosphor-icons/react/ssr";
import { Eyebrow, Pic, Stars } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";

const REVIEWS = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Novix Studio",
    seed: "novix-avatar-sarah",
    lead: "\u201cThis adventure exceeded\u201d",
    body: "all my expectations and gave me memories I’ll cherish forever.",
    date: "09/30/2024",
    photo: false,
  },
  {
    name: "Amara Osei",
    role: "Marketing Lead, Fielding Co.",
    seed: "novix-review-portrait-white",
    lead: "\u201cThe rebuild paid for itself\u201d",
    body: "in the first quarter, and the site finally looks like the brand.",
    date: "11/18/2025",
    photo: true,
  },
  {
    name: "Emily Johnson",
    role: "Startup Founder",
    seed: "novix-avatar-emily",
    lead: "\u201cExceptional from start to finish.\u201d",
    body: "The process was seamless, communication was excellent, and the final result exceeded every expectation.",
    date: "09/30/2026",
    photo: false,
  },
  {
    name: "Daniel Reyes",
    role: "Operations Director, Harlow Goods",
    seed: "novix-avatar-daniel",
    lead: "\u201cThree weeks to launch\u201d",
    body: "and enquiries doubled. The automation alone paid for the retainer.",
    date: "03/04/2026",
    photo: false,
  },
  {
    name: "Marcus Adeyemi",
    role: "Founder, Lumen Supply",
    seed: "novix-avatar-marcus",
    lead: "\u201cThey treated our content like product\u201d",
    body: "every page has one job to do, and the analytics show it is being done.",
    date: "02/12/2026",
    photo: false,
  },
  {
    name: "Priya Raman",
    role: "Head of Growth, Northbeam",
    seed: "novix-avatar-priya",
    lead: "\u201cSix weeks from kickoff to launch\u201d",
    body: "with a CMS our marketing team runs without asking engineering for help.",
    date: "05/06/2026",
    photo: false,
  },
];

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);

  const pan = (direction: -1 | 1) => {
    const node = track.current;
    if (!node) return;
    const step = node.firstElementChild?.clientWidth ?? 320;
    node.scrollBy({
      left: direction * (step + 20),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section id="testimonials" className="shell py-14 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4.2vw,3.05rem)] leading-[1.08] font-bold tracking-[-0.035em]">
            Trusted by
            <br />
            <span className="text-smoke">growing brands.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => pan(-1)}
              aria-label="Previous testimonials"
              className="grid size-11 place-items-center rounded-full border border-line bg-card text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <CaretLeft className="size-4" weight="bold" />
            </button>
            <button
              type="button"
              onClick={() => pan(1)}
              aria-label="Next testimonials"
              className="grid size-11 place-items-center rounded-full border border-line bg-card text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <CaretRight className="size-4" weight="bold" />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <div
          ref={track}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className={`relative flex w-[19rem] shrink-0 snap-start flex-col rounded-panel p-6 sm:w-[21rem] ${
                review.photo
                  ? "min-h-[24rem] text-white lg:-mt-6 lg:min-h-[26rem]"
                  : "min-h-[24rem] bg-card text-ink shadow-[0_24px_60px_-46px_rgba(12,12,12,0.5)]"
              }`}
            >
              {review.photo ? (
                <span className="absolute inset-0 overflow-hidden rounded-panel">
                  <Pic
                    seed={review.seed}
                    w={640}
                    h={800}
                    alt={`${review.name}, client`}
                    sizes="336px"
                    filter="saturate-[0.8]"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.72)_0%,rgba(10,10,10,0.12)_45%,rgba(10,10,10,0.8)_100%)]" />
                </span>
              ) : null}

              <header className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`size-10 overflow-hidden rounded-full ${
                      review.photo ? "ring-1 ring-white/30" : "bg-paper"
                    }`}
                  >
                    <Pic
                      seed={review.seed}
                      w={96}
                      h={96}
                      alt=""
                      sizes="40px"
                      filter="grayscale-[0.15]"
                    />
                  </span>
                  <span className="leading-tight">
                    <span
                      className={`block text-[13px] font-semibold ${
                        review.photo ? "text-white" : "text-ink"
                      }`}
                    >
                      {review.name}
                    </span>
                    <span
                      className={`block text-[11px] ${
                        review.photo ? "text-white/60" : "text-smoke"
                      }`}
                    >
                      {review.role}
                    </span>
                  </span>
                </div>

                <span
                  className={`grid size-9 place-items-center rounded-xl ${
                    review.photo
                      ? "bg-white/15 text-white ring-1 ring-white/25"
                      : "bg-paper text-ink"
                  }`}
                >
                  <TwitterLogo className="size-4" weight="fill" />
                </span>
              </header>

              <div className="relative mt-7">
                <p className="text-[14px] leading-snug font-semibold tracking-[-0.02em]">
                  {review.lead}
                </p>
                <p
                  className={`mt-2 max-w-[34ch] text-[12.5px] leading-relaxed ${
                    review.photo ? "text-white/70" : "text-mute"
                  }`}
                >
                  {review.body}
                </p>
              </div>

              <footer
                className={`relative mt-auto flex items-center justify-between gap-4 pt-8 ${
                  review.photo ? "text-white/70" : "text-smoke"
                }`}
              >
                <Stars tone="gold" />
                <span className="text-[11px] font-medium">{review.date}</span>
              </footer>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
