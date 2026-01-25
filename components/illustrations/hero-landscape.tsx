import { cn } from "@/lib/utils";

export interface HeroLandscapeProps {
  className?: string;
}

export function HeroLandscape({ className }: HeroLandscapeProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className={cn("w-full h-full", className)}
      aria-hidden="true"
    >
      {/* Sky gradient background */}
      <defs>
        {/* Brand gradient for water/sky accents */}
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(65% 0.19 205)" />
          <stop offset="50%" stopColor="oklch(65% 0.16 185)" />
          <stop offset="100%" stopColor="oklch(65% 0.17 160)" />
        </linearGradient>

        {/* Sky gradient - light mode */}
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(94% 0.04 205)" />
          <stop offset="100%" stopColor="oklch(98.5% 0.003 75)" />
        </linearGradient>

        {/* Mountain gradient - back mountains */}
        <linearGradient id="mountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(74% 0.15 205)" />
          <stop offset="100%" stopColor="oklch(82% 0.12 205)" />
        </linearGradient>

        {/* Mountain gradient - front mountains */}
        <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(55% 0.18 205)" />
          <stop offset="100%" stopColor="oklch(65% 0.19 205)" />
        </linearGradient>

        {/* Tree gradient - darker trees */}
        <linearGradient id="treeDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(45% 0.14 160)" />
          <stop offset="100%" stopColor="oklch(35% 0.10 160)" />
        </linearGradient>

        {/* Tree gradient - lighter trees */}
        <linearGradient id="treeLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(65% 0.17 160)" />
          <stop offset="100%" stopColor="oklch(55% 0.17 160)" />
        </linearGradient>

        {/* River gradient */}
        <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(70% 0.18 205)" />
          <stop offset="50%" stopColor="oklch(70% 0.15 185)" />
          <stop offset="100%" stopColor="oklch(70% 0.16 160)" />
        </linearGradient>

        {/* River shimmer */}
        <linearGradient id="riverShimmer" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(85% 0.10 205)" stopOpacity="0.6" />
          <stop offset="50%" stopColor="oklch(90% 0.08 205)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="oklch(85% 0.10 205)" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="800" height="600" fill="url(#skyGradient)" />

      {/* Sun/glow */}
      <circle cx="650" cy="120" r="60" fill="oklch(94% 0.04 205)" opacity="0.8" />
      <circle cx="650" cy="120" r="40" fill="oklch(97% 0.02 75)" />

      {/* Back mountains - distant, lighter */}
      <path
        d="M0 350 L100 280 L180 320 L280 240 L380 300 L450 220 L520 280 L600 200 L700 260 L800 220 L800 400 L0 400 Z"
        fill="url(#mountainBack)"
        opacity="0.7"
      />

      {/* Middle mountains */}
      <path
        d="M0 400 L80 320 L150 360 L250 280 L350 340 L420 260 L500 320 L580 250 L680 310 L750 270 L800 300 L800 450 L0 450 Z"
        fill="url(#mountainFront)"
        opacity="0.85"
      />

      {/* Snow caps on middle mountains */}
      <path
        d="M250 280 L270 300 L230 300 Z"
        fill="oklch(98% 0.003 75)"
        opacity="0.9"
      />
      <path
        d="M420 260 L445 290 L395 290 Z"
        fill="oklch(98% 0.003 75)"
        opacity="0.9"
      />
      <path
        d="M580 250 L610 285 L550 285 Z"
        fill="oklch(98% 0.003 75)"
        opacity="0.9"
      />

      {/* Foreground hills */}
      <ellipse cx="100" cy="520" rx="200" ry="80" fill="oklch(74% 0.15 160)" opacity="0.6" />
      <ellipse cx="700" cy="540" rx="180" ry="70" fill="oklch(74% 0.15 160)" opacity="0.6" />

      {/* River - winding path */}
      <path
        d="M-20 380 
           Q100 400, 150 420 
           Q200 440, 280 430 
           Q360 420, 420 450 
           Q480 480, 560 470 
           Q640 460, 720 490 
           Q780 510, 820 520
           L820 560
           Q780 540, 720 530
           Q640 520, 560 530
           Q480 540, 420 510
           Q360 480, 280 490
           Q200 500, 150 480
           Q100 460, -20 440
           Z"
        fill="url(#riverGradient)"
      />

      {/* River shimmer/highlights */}
      <path
        d="M50 400 Q150 420, 200 425 Q250 430, 300 420"
        stroke="url(#riverShimmer)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M400 445 Q450 460, 500 455 Q550 450, 600 465"
        stroke="url(#riverShimmer)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Trees - back row (smaller, lighter) */}
      {/* Tree 1 */}
      <path d="M60 380 L75 340 L90 380 Z" fill="url(#treeLight)" />
      <path d="M63 360 L75 320 L87 360 Z" fill="url(#treeLight)" />
      <path d="M66 340 L75 305 L84 340 Z" fill="url(#treeLight)" />
      <rect x="72" y="380" width="6" height="15" fill="oklch(35% 0.06 60)" />

      {/* Tree 2 */}
      <path d="M120 370 L140 320 L160 370 Z" fill="url(#treeLight)" />
      <path d="M125 345 L140 295 L155 345 Z" fill="url(#treeLight)" />
      <path d="M130 320 L140 275 L150 320 Z" fill="url(#treeLight)" />
      <rect x="136" y="370" width="8" height="18" fill="oklch(35% 0.06 60)" />

      {/* Tree 3 */}
      <path d="M180 385 L195 350 L210 385 Z" fill="url(#treeLight)" />
      <path d="M183 365 L195 330 L207 365 Z" fill="url(#treeLight)" />
      <path d="M186 345 L195 315 L204 345 Z" fill="url(#treeLight)" />
      <rect x="192" y="385" width="6" height="12" fill="oklch(35% 0.06 60)" />

      {/* Trees - front row (larger, darker) */}
      {/* Tree 4 - large left */}
      <path d="M30 520 L70 420 L110 520 Z" fill="url(#treeDark)" />
      <path d="M38 480 L70 380 L102 480 Z" fill="url(#treeDark)" />
      <path d="M46 440 L70 350 L94 440 Z" fill="url(#treeDark)" />
      <rect x="62" y="520" width="16" height="40" fill="oklch(28% 0.05 60)" />

      {/* Tree 5 */}
      <path d="M130 540 L160 460 L190 540 Z" fill="url(#treeDark)" />
      <path d="M138 510 L160 430 L182 510 Z" fill="url(#treeDark)" />
      <path d="M145 480 L160 405 L175 480 Z" fill="url(#treeDark)" />
      <rect x="154" y="540" width="12" height="30" fill="oklch(28% 0.05 60)" />

      {/* Tree 6 - right side back */}
      <path d="M650 400 L670 350 L690 400 Z" fill="url(#treeLight)" />
      <path d="M654 378 L670 328 L686 378 Z" fill="url(#treeLight)" />
      <path d="M658 356 L670 310 L682 356 Z" fill="url(#treeLight)" />
      <rect x="666" y="400" width="8" height="16" fill="oklch(35% 0.06 60)" />

      {/* Tree 7 - right side front */}
      <path d="M720 520 L755 440 L790 520 Z" fill="url(#treeDark)" />
      <path d="M728 488 L755 408 L782 488 Z" fill="url(#treeDark)" />
      <path d="M735 456 L755 380 L775 456 Z" fill="url(#treeDark)" />
      <rect x="749" y="520" width="12" height="35" fill="oklch(28% 0.05 60)" />

      {/* Tree 8 - far right */}
      <path d="M770 560 L795 500 L820 560 Z" fill="url(#treeDark)" />
      <path d="M776 540 L795 480 L814 540 Z" fill="url(#treeDark)" />
      <path d="M782 520 L795 465 L808 520 Z" fill="url(#treeDark)" />
      <rect x="790" y="560" width="10" height="25" fill="oklch(28% 0.05 60)" />

      {/* Small decorative trees in middle */}
      <path d="M350 395 L360 370 L370 395 Z" fill="url(#treeLight)" opacity="0.8" />
      <path d="M353 382 L360 357 L367 382 Z" fill="url(#treeLight)" opacity="0.8" />

      <path d="M500 405 L512 375 L524 405 Z" fill="url(#treeLight)" opacity="0.8" />
      <path d="M504 390 L512 360 L520 390 Z" fill="url(#treeLight)" opacity="0.8" />

      {/* Foreground grass/ground */}
      <ellipse cx="400" cy="620" rx="500" ry="60" fill="oklch(65% 0.17 160)" opacity="0.4" />
    </svg>
  );
}
