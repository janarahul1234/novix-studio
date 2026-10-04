import { ArrowUpRight, Sparkle } from "@phosphor-icons/react/ssr";
import { Pic, RegMark } from "@/components/ui/primitives";

const COLUMNS = [
  {
    label: "Navigation",
    links: [
      { text: "Home", href: "#top" },
      { text: "Services", href: "#services" },
      { text: "Projects", href: "#work" },
      { text: "Pricing", href: "#pricing" },
      { text: "Blog", href: "#top" },
    ],
  },
  {
    label: "Social media",
    links: [
      { text: "Twitter", href: "#" },
      { text: "Dribbble", href: "#" },
      { text: "Instagram", href: "#" },
      { text: "Facebook", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="shell pt-6 pb-10 md:pt-8">
      <div className="overflow-hidden rounded-sheet bg-card px-5 pt-8 pb-6 sm:px-8 md:px-10 md:pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
            <a
              href="mailto:hello@novixstudio.com"
              className="group relative block w-full max-w-[22rem] overflow-hidden rounded-tile bg-paper"
            >
              <span className="block aspect-[16/10]">
                <Pic
                  seed="novix-team-laptop-studio"
                  w={800}
                  h={500}
                  alt="The Novix studio team around a laptop"
                  sizes="(min-width: 1024px) 352px, 92vw"
                  filter="saturate-[0.85]"
                />
              </span>
              <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-lg bg-white/90 text-ink transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" weight="bold" />
              </span>
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3">
              <p className="flex items-center gap-2 text-[12.5px] font-medium text-ink">
                <Sparkle className="size-3.5 text-accent" weight="fill" />
                Let’s build together
              </p>
              <a
                href="mailto:hello@novixstudio.com"
                className="text-[12.5px] font-medium text-ink underline-offset-4 hover:underline"
              >
                hello@novixstudio.com
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-14 gap-y-2 sm:gap-x-24">
            {COLUMNS.map((column) => (
              <div key={column.label}>
                <p className="text-[11px] font-medium text-smoke">
                  {column.label}
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="text-[13px] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[11px] text-smoke">
          <p>&copy; 2026 Novix Studio. All rights reserved.</p>
          <p className="flex gap-8">
            <a href="#" className="transition-colors hover:text-ink">
              Terms of Use
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* sized in vw so the mark fills the card from phone to desktop */}
        <p className="mt-10 flex items-center text-[clamp(2rem,13vw,12.2rem)] leading-[0.82] font-extrabold tracking-[-0.05em] text-ink">
          <span>Novix</span>
          <RegMark />
          <span className="ml-[0.08em]">Studio</span>
        </p>
      </div>
    </footer>
  );
}
