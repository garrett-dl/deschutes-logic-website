# Typography Skill

A comprehensive typography system for Deschutes Logic using custom brand fonts with clear hierarchy guidelines.

## Overview

The Deschutes Logic typography system uses three font families:

- **Brand Font** (`font-brand`): Biryani - For large, eye-catching headlines
- **Brand Secondary Font** (`font-brand-secondary`): Alef - For section titles and secondary headings
- **Default Font** (`font-sans`): PT Sans Caption - For body text and general content

---

## Type Principles

These guiding principles inform typography decisions across the interface:

- **Headlines should be bold and direct** — say more with fewer words
- **Body text should be comfortable to read** — optimized for long-form content
- **Generous line-height** — use 1.5–1.7 for body text to improve readability
- **Clear hierarchy** — distinct visual difference between heading levels

---

## Font Families

### Brand Font: Biryani

A distinctive display font for primary headlines and the company name.

| Tailwind Class | Font | Usage |
|----------------|------|-------|
| `font-brand` | Biryani | Page titles, hero headlines, company name |

**Available weights**: 200, 300, 400, 600, 700, 800, 900

### Brand Secondary Font: Alef

A clean, readable font for section titles and secondary headings.

| Tailwind Class | Font | Usage |
|----------------|------|-------|
| `font-brand-secondary` | Alef | Section titles, card headers, secondary headings |

**Available weights**: 400, 700

### Default Font: PT Sans Caption

A highly legible font for body text and all general content.

| Tailwind Class | Font | Usage |
|----------------|------|-------|
| `font-sans` | PT Sans Caption | Body text, labels, descriptions, UI elements |

**Available weights**: 400, 700

---

## Typography Hierarchy

### Rule 1: Page Headers Use Brand Font

Large, eye-catching text like page titles and hero headlines should use `font-brand`.

```tsx
<h1 className="text-4xl font-bold font-brand tracking-tight sm:text-5xl md:text-6xl">
  Color Palette Showcase
</h1>
```

### Rule 2: Company Name Uses Brand Font (Lowercase)

When the company name appears next to the logo, display it in the brand font using lowercase.

```tsx
<div className="flex items-center gap-2">
  <Logo />
  <span className="text-xl font-bold font-brand">deschutes logic</span>
</div>
```

**Important**: Always use lowercase "deschutes logic" when paired with the logo.

### Rule 3: Section Titles Use Secondary Brand Font

Section headings and secondary titles use `font-brand-secondary`.

```tsx
<h2 className="text-2xl font-bold font-brand-secondary tracking-tight sm:text-3xl">
  Our Services
</h2>
```

### Rule 4: All Other Text Uses Default Font

Body text, labels, descriptions, and UI elements use the default sans font (no class needed, or explicitly use `font-sans`).

```tsx
<p className="text-lg text-muted-foreground">
  A comprehensive demonstration of our design system.
</p>

<label className="text-sm font-medium">
  Email Address
</label>
```

---

## Common Patterns

### Hero Section

```tsx
<section className="py-24">
  <h1 className="text-4xl font-bold font-brand tracking-tight sm:text-5xl md:text-6xl">
    <span className="bg-brand-gradient bg-clip-text text-transparent">
      Automate Your Business
    </span>
  </h1>
  <p className="mt-6 text-lg text-muted-foreground">
    Web scraping, workflow automation, and custom integrations.
  </p>
</section>
```

### Section Header Component

```tsx
function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold font-brand-secondary tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}
```

### Header with Logo

```tsx
<header className="flex items-center gap-2">
  <div className="h-8 w-8 rounded-lg bg-brand-gradient" />
  <span className="text-xl font-bold font-brand">deschutes logic</span>
</header>
```

### Card with Typography Hierarchy

```tsx
<div className="rounded-xl border border-border bg-card p-6">
  <h3 className="text-lg font-semibold font-brand-secondary">
    Feature Title
  </h3>
  <p className="mt-2 text-muted-foreground">
    Description text using the default font for readability.
  </p>
</div>
```

### Typography Section Demo

```tsx
<div className="space-y-6">
  <h1 className="text-4xl font-bold font-brand tracking-tight sm:text-5xl">
    Heading 1 - Bold & Impactful
  </h1>
  <h2 className="text-3xl font-semibold font-brand-secondary tracking-tight">
    Heading 2 - Section Title
  </h2>
  <h3 className="text-2xl font-semibold">
    Heading 3 - Subsection
  </h3>
  <h4 className="text-xl font-medium">
    Heading 4 - Card Title
  </h4>
  <p className="text-base leading-relaxed">
    Body text with comfortable line height for readability.
  </p>
  <p className="text-sm text-muted-foreground">
    Small muted text for secondary information.
  </p>
</div>
```

---

## Gradient Text

For maximum impact, combine the brand font with gradient text:

```tsx
<h1 className="text-4xl font-bold font-brand">
  <span className="bg-brand-gradient bg-clip-text text-transparent">
    Gradient text for headlines
  </span>
</h1>
```

---

## Quick Decision Guide

| Text Type | Font Class | Example |
|-----------|------------|---------|
| Page title / Hero headline | `font-brand` | "Color Palette Showcase" |
| Company name with logo | `font-brand` (lowercase) | "deschutes logic" |
| Section title | `font-brand-secondary` | "Our Services" |
| Card title | `font-brand-secondary` or default | "Feature Card" |
| Subsection heading | default (`font-sans`) | "Primary Buttons" |
| Body text | default (`font-sans`) | Paragraph content |
| Labels | default (`font-sans`) | Form labels |
| Buttons | default (`font-sans`) | "Get Started" |
| Navigation links | default (`font-sans`) | Menu items |

---

## CSS Variables

The fonts are configured via CSS custom properties set in `layout.tsx`:

```css
--font-brand          /* Biryani */
--font-brand-secondary /* Alef */
--font-sans           /* PT Sans Caption */
```

These are mapped to Tailwind classes in `tailwind.config.ts` and `globals.css`.

---

## Configuration Files

### layout.tsx

```tsx
import { Biryani, Alef, PT_Sans_Caption } from "next/font/google";

const biryani = Biryani({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

const alef = Alef({
  variable: "--font-brand-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSansCaption = PT_Sans_Caption({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});
```

### tailwind.config.ts

```ts
fontFamily: {
  sans: ["var(--font-sans)", "PT Sans Caption", "system-ui", "sans-serif"],
  brand: ["var(--font-brand)", "Biryani", "system-ui", "sans-serif"],
  "brand-secondary": ["var(--font-brand-secondary)", "Alef", "system-ui", "sans-serif"],
},
```

### globals.css

```css
@theme inline {
  --font-sans: var(--font-sans);
  --font-brand: var(--font-brand);
  --font-brand-secondary: var(--font-brand-secondary);
}
```
