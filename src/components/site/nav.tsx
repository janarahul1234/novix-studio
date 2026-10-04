"use client";

import { useState } from "react";
import { List, Sparkle, X } from "@phosphor-icons/react/ssr";
import { Wordmark } from "@/components/ui/primitives";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
];

/**
 * Nav lives inside the hero card rather than pinned to the viewport, which
 * is how the reference frames it: the black sheet is the page's first panel.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 pt-5 pb-2">
      <a href="#top" className="shrink-0 text-white">
        <Wordmark className="text-[19px] tracking-[-0.03em]" />
      </a>

      <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] p-1 md:flex">
        {LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              i === 0
                ? "bg-white text-ink"
                : "text-white/65 hover:bg-white/10 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:inline-flex"
        >
          Start Project
          <Sparkle className="size-3.5 text-accent" weight="fill" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-full border border-white/[0.14] text-white md:hidden"
        >
          {open ? <X className="size-4" /> : <List className="size-4" />}
        </button>
      </div>

      {open ? (
        <nav className="absolute inset-x-4 top-[76px] z-30 flex flex-col gap-1 rounded-panel border border-white/10 bg-black/95 p-2 backdrop-blur-xl md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink"
          >
            Start Project
            <Sparkle className="size-3.5 text-accent" weight="fill" />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
