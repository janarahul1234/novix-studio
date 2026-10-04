import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

/* ------------------------------------------------------------------
   Shared primitives for the Novix® Studio page.
------------------------------------------------------------------- */

/** Small scarlet square + tracked label used above section headlines. */
export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] ${
        tone === "light" ? "text-ink" : "text-white"
      } ${className}`}
    >
      <span aria-hidden className="size-[7px] rotate-45 bg-accent" />
      {children}
    </p>
  );
}

/**
 * The reference draws the registered mark as a thin ring with an R inside
 * rather than using the font's filled registered glyph, which turns into a
 * solid disc at display sizes. Composed from two boxes so it scales with type.
 */
export function RegMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`mx-[0.035em] inline-grid h-[0.6em] w-[0.6em] shrink-0 translate-y-[-0.06em] place-items-center self-center rounded-full border-[0.05em] border-current ${className}`}
    >
      <span className="text-[0.4em] leading-none font-extrabold">R</span>
    </span>
  );
}

/** "novix" plus the raised registered mark, as in the reference. */
export function Wordmark({
  className = "",
  studio = false,
  mutedStudio = false,
}: {
  className?: string;
  studio?: boolean;
  mutedStudio?: boolean;
}) {
  return (
    <span className={`inline-flex items-center font-extrabold ${className}`}>
      <span>novix</span>
      <RegMark />
      {studio ? (
        /* whitespace-pre keeps a real word space in the accessible name */
        <span
          className={`whitespace-pre ${mutedStudio ? "text-smoke" : ""}`.trim()}
        >
          {" studio"}
        </span>
      ) : null}
    </span>
  );
}

/** Hairline used between a step number and its label (no em-dash). */
export function Dash({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-px w-4 shrink-0 translate-y-[-0.25em] align-middle ${className}`}
    />
  );
}

export function Stars({
  count = 5,
  tone = "accent",
  className = "",
}: {
  count?: number;
  tone?: "accent" | "gold";
  className?: string;
}) {
  const color = tone === "accent" ? "text-accent" : "text-gold";
  return (
    <span
      role="img"
      aria-label={`${count} out of 5 stars`}
      className={`inline-flex gap-[3px] text-[13px] leading-none ${color} ${className}`}
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </span>
  );
}

/** Dark or light pill CTA with the circular arrow affordance. */
export function PillButton({
  label,
  href = "#",
  variant = "light",
  arrow = true,
  icon: LeadingIcon,
  className = "",
}: {
  label: string;
  href?: string;
  variant?: "light" | "dark" | "outline" | "solid";
  arrow?: boolean;
  icon?: Icon;
  className?: string;
}) {
  const skin = {
    light: "bg-white text-ink",
    dark: "bg-ink text-white",
    solid: "bg-white text-ink",
    outline: "border border-white/20 bg-white/[0.03] text-white",
  }[variant];

  const chip = {
    light: "bg-ink text-white",
    dark: "bg-white text-ink",
    solid: "bg-ink text-white",
    outline: "bg-white/10 text-white",
  }[variant];

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full py-2 pr-2 pl-5 text-[13px] font-semibold transition-transform duration-300 active:scale-[0.98] ${skin} ${className}`}
    >
      {LeadingIcon ? <LeadingIcon className="size-4" weight="fill" /> : null}
      <span className="whitespace-nowrap">{label}</span>
      {arrow ? (
        <span
          className={`grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${chip}`}
        >
          <ArrowUpRight className="size-4" weight="bold" />
        </span>
      ) : null}
    </a>
  );
}

/**
 * Photography slot. Seeded Lorem Picsum placeholders keep a stable image
 * per placement until real brand photography is dropped into /public.
 */
export function Pic({
  seed,
  w,
  h,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  filter = "",
}: {
  seed: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  filter?: string;
}) {
  return (
    <Image
      src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
      sizes={sizes}
      className={`h-full w-full object-cover ${filter} ${className}`}
    />
  );
}
