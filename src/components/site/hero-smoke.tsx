/**
 * Liquid-chrome smoke field behind the hero wordmark.
 *
 * The reference uses a rendered smoke loop. Image generation is not
 * available in this environment, so the ribbons are drawn as blurred SVG
 * strokes instead of shipping a flat gradient: same silhouette, no video
 * payload, and it stays perfectly still for screen readers.
 */
export function HeroSmoke() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_18%_-10%,#1c1c1c_0%,#0a0a0a_45%,#000_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="silk" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="18%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="48%" stopColor="#d8d8d8" stopOpacity="0.26" />
            <stop offset="78%" stopColor="#ffffff" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkDim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="40%" stopColor="#9a9a9a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-120%" width="140%" height="340%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
          <filter id="wide" x="-20%" y="-160%" width="140%" height="420%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* broad haze bands */}
        <g filter="url(#wide)" opacity="0.3">
          <path
            d="M-60 330 C 240 210 430 470 700 390 S 1150 230 1500 350"
            stroke="#8e8e8e"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <path
            d="M-60 560 C 300 470 560 660 880 560 S 1260 440 1500 520"
            stroke="#6c6c6c"
            strokeWidth="26"
            strokeLinecap="round"
          />
        </g>

        {/* crisp ribbons */}
        <g filter="url(#soft)">
          <path
            d="M-60 300 C 260 170 440 440 720 355 S 1160 175 1500 300"
            stroke="url(#silk)"
            strokeWidth="2.2"
          />
          <path
            d="M-60 312 C 250 186 450 452 730 366 S 1150 190 1500 312"
            stroke="url(#silk)"
            strokeWidth="0.9"
            opacity="0.85"
          />
          <path
            d="M-60 402 C 300 320 520 545 830 452 S 1210 320 1500 412"
            stroke="url(#silk)"
            strokeWidth="5"
            opacity="0.5"
          />
          <path
            d="M-60 386 C 310 300 540 528 850 436 S 1220 306 1500 396"
            stroke="url(#silk)"
            strokeWidth="1"
            opacity="0.75"
          />
          <path
            d="M-60 470 C 320 400 540 590 860 505 S 1230 400 1500 470"
            stroke="url(#silkDim)"
            strokeWidth="1.6"
          />
          <path
            d="M60 640 C 380 560 620 700 940 610 S 1300 520 1500 585"
            stroke="url(#silkDim)"
            strokeWidth="3.5"
            opacity="0.35"
          />
          <path
            d="M-60 214 C 200 120 420 250 640 176"
            stroke="url(#silkDim)"
            strokeWidth="1.2"
          />
        </g>

        {/* the smoke ring on the right, as in the reference */}
        <g filter="url(#soft)" opacity="0.6">
          <ellipse
            cx="1180"
            cy="352"
            rx="150"
            ry="46"
            stroke="url(#silk)"
            strokeWidth="9"
          />
          <ellipse
            cx="1180"
            cy="352"
            rx="150"
            ry="46"
            stroke="#ffffff"
            strokeOpacity="0.16"
            strokeWidth="1.5"
          />
        </g>

        {/* rising wisp */}
        <g filter="url(#wide)" opacity="0.35">
          <path
            d="M980 760 C 1010 620 900 540 950 420 S 1080 300 1040 190"
            stroke="#9d9d9d"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* top-left bloom + bottom falloff keep the type legible */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_10%_8%,rgba(255,255,255,0.07),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />
    </div>
  );
}
