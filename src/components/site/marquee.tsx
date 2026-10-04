import { Sparkle } from "@phosphor-icons/react/ssr";
import { Wordmark } from "@/components/ui/primitives";

const GROUP = Array.from({ length: 4 });

/**
 * One marquee on the page, used as the sign-off band before the footer.
 * Two identical halves let the track loop at -50% without a seam.
 */
export function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden py-12 md:py-16">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {GROUP.map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-8 pr-8 text-[clamp(2.4rem,6.2vw,4.6rem)] tracking-[-0.045em] md:gap-12 md:pr-12"
              >
                <Wordmark studio mutedStudio className="whitespace-nowrap" />
                <Sparkle
                  className="size-[0.42em] shrink-0 text-accent"
                  weight="fill"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
