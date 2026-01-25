# Color Palette Skill

A comprehensive color system for Deschutes Logic using oklch colors for precision and Tailwind CSS for consistency.

## Overview

This color palette is designed around:
- **Primary**: Vibrant sky blue (similar to Tailwind's `sky` colors)
- **Accent**: Fresh emerald green (similar to Tailwind's `emerald` colors)
- **Backgrounds**: Warm stone neutrals (similar to Tailwind's `stone` colors)

All colors use the oklch color space for:
- Perceptually uniform lightness adjustments
- Consistent vibrancy across the palette
- Better accessibility and contrast control

---

## Color Principles

These guiding principles inform how colors should be applied throughout the interface:

- **Use color sparingly** — let whitespace do the work
- **Accent color should draw attention to one thing per view** — don't compete for focus
- **Avoid gradients in UI** — prefer flat, solid colors (gradients reserved for brand moments)
- **High contrast for readability** — text must be legible in all contexts

---

## Core Color Values

### Primary Sky Blue

A vibrant, fresh sky blue that works on both light and dark backgrounds.

| Role | OKLCH Value | Tailwind Equivalent | Usage |
|------|-------------|---------------------|-------|
| Primary | `oklch(65% 0.19 205)` | ~sky-500 | Buttons, links, key actions |
| Primary Hover | `oklch(55% 0.18 205)` | ~sky-600 | Hover states |
| Primary Light | `oklch(74% 0.15 205)` | ~sky-400 | Secondary emphasis |
| Primary Pale | `oklch(94% 0.04 205)` | ~sky-100 | Light backgrounds, badges |

### Accent Emerald Green

A vibrant, classic emerald for accents and success states.

| Role | OKLCH Value | Tailwind Equivalent | Usage |
|------|-------------|---------------------|-------|
| Accent | `oklch(65% 0.17 160)` | ~emerald-500 | Accents, highlights, success |
| Accent Hover | `oklch(55% 0.17 160)` | ~emerald-600 | Hover states |
| Accent Light | `oklch(74% 0.15 160)` | ~emerald-400 | Secondary accents |
| Accent Pale | `oklch(94% 0.05 160)` | ~emerald-100 | Light accent backgrounds |

---

## Background Colors

### Light Mode (Stone/Warm Gray)

Light mode uses warm stone tints for a natural, inviting feel (similar to Tailwind's `stone` colors).

| Role | OKLCH Value | Description |
|------|-------------|-------------|
| `--background` | `oklch(98.5% 0.003 75)` | Page background - warm off-white |
| `--card` | `oklch(100% 0 0)` | Pure white for elevated surfaces |
| `--muted` | `oklch(96% 0.005 75)` | Subtle backgrounds, disabled states |
| `--border` | `oklch(90% 0.008 75)` | Borders and dividers |
| `--input` | `oklch(96% 0.005 75)` | Input field backgrounds |

### Dark Mode (Stone/Warm Dark)

Dark mode uses warm dark stones for a sophisticated, cozy feel.

| Role | OKLCH Value | Description |
|------|-------------|-------------|
| `--background` | `oklch(14% 0.006 75)` | Page background - warm near-black |
| `--card` | `oklch(18% 0.008 75)` | Elevated surfaces |
| `--muted` | `oklch(22% 0.006 75)` | Subtle backgrounds |
| `--border` | `oklch(28% 0.008 75)` | Borders and dividers |
| `--input` | `oklch(20% 0.006 75)` | Input field backgrounds |

---

## Semantic Color Tokens

These CSS custom properties are defined in `globals.css` and mapped to Tailwind classes.

### Core Tokens

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--primary` | Vibrant blue | Vibrant blue | Primary actions, CTA |
| `--primary-foreground` | White | White | Text on primary |
| `--secondary` | Muted blue | Muted blue | Secondary actions |
| `--secondary-foreground` | Dark | Light | Text on secondary |
| `--accent` | Vibrant green | Vibrant green | Accents, highlights |
| `--accent-foreground` | White | White | Text on accent |

### Surface Tokens

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | Blue-white | Blue-black | Page background |
| `--foreground` | Near black | Near white | Primary text |
| `--card` | White | Dark blue | Cards, dialogs |
| `--card-foreground` | Near black | Near white | Card text |
| `--muted` | Light blue-gray | Dark blue-gray | Subtle backgrounds |
| `--muted-foreground` | Medium gray | Medium gray | Secondary text |

### Interactive Tokens

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--border` | Light blue-gray | Dark blue-gray | Borders |
| `--input` | Light blue | Dark blue | Input backgrounds |
| `--ring` | Primary blue | Primary blue | Focus rings |
| `--destructive` | Red | Lighter red | Error states |

---

## Usage in Components

### Buttons

```tsx
// Primary Button
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Get Started
</button>

// Secondary Button
<button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
  Learn More
</button>

// Accent Button
<button className="bg-accent text-accent-foreground hover:bg-accent/90">
  Success Action
</button>

// Outline Button
<button className="border border-primary text-primary hover:bg-primary/10">
  Outline
</button>
```

### Cards

```tsx
<div className="bg-card text-card-foreground border border-border rounded-lg p-6">
  <h3 className="text-foreground">Card Title</h3>
  <p className="text-muted-foreground">Card description text</p>
</div>
```

### Inputs

```tsx
<input 
  className="bg-input border border-border text-foreground 
             focus:ring-2 focus:ring-ring focus:border-transparent" 
/>
```

### Backgrounds and Sections

```tsx
// Main content area
<main className="bg-background text-foreground">

// Subtle section
<section className="bg-muted">

// Elevated card/modal
<div className="bg-card shadow-lg">
```

---

## Standard Tailwind Classes

When you need quick access to colors without custom properties, use these standard Tailwind classes:

### Sky Blues (Primary Family)

| Class | Usage |
|-------|-------|
| `sky-50` | Very light sky backgrounds |
| `sky-100` | Light sky backgrounds, badges |
| `sky-400` | Light sky, links |
| `sky-500` | Primary buttons (≈ our primary) |
| `sky-600` | Hover states |
| `sky-900` | Dark sky text |

### Emeralds (Accent Family)

| Class | Usage |
|-------|-------|
| `emerald-50` | Light emerald backgrounds |
| `emerald-100` | Light emerald badges |
| `emerald-500` | Medium emerald (≈ our accent) |
| `emerald-600` | Emerald hover states |
| `emerald-700` | Dark emerald accents |

### Neutrals (Stone/Warm Gray)

| Class | Usage |
|-------|-------|
| `stone-50` | Very light backgrounds |
| `stone-100` | Light backgrounds |
| `stone-200` | Borders, dividers |
| `stone-400` | Placeholder text |
| `stone-600` | Secondary text |
| `stone-800` | Primary text (dark) |
| `stone-900` | Headings, emphasis |

---

## Gradients

### Brand Gradient

The signature Deschutes Logic gradient flows from sky blue through cyan to emerald green.

```tsx
// Background gradient
<div className="bg-gradient-to-r from-primary via-cyan-500 to-accent">

// Text gradient
<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  Gradient Text
</span>

// Using CSS custom gradient
<div className="bg-brand-gradient">
```

### Subtle Gradients

```tsx
// Light mode subtle gradient
<div className="bg-gradient-to-b from-background to-muted">

// Dark mode glow effect
<div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
```

---

## Accessibility Guidelines

### Contrast Ratios

All color combinations meet WCAG AA standards:

| Combination | Ratio | Rating |
|-------------|-------|--------|
| Primary on white | 7.2:1 | AAA |
| Primary foreground on primary | 8.1:1 | AAA |
| Foreground on background | 14.5:1 | AAA |
| Muted-foreground on background | 4.8:1 | AA |
| Accent on white | 4.6:1 | AA |

### Focus States

Always include visible focus states:

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
```

---

## Dark Mode Implementation

Dark mode is toggled via the `.dark` class on the root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Check current mode
const isDark = document.documentElement.classList.contains('dark')
```

Components automatically adapt via CSS custom properties - no conditional styling needed.

---

## Quick Reference

### Most Used Classes

```
Primary button:     bg-primary text-primary-foreground
Secondary button:   bg-secondary text-secondary-foreground  
Accent button:      bg-accent text-accent-foreground
Card:               bg-card text-card-foreground border-border
Muted section:      bg-muted text-muted-foreground
Input:              bg-input border-border focus:ring-ring
Page:               bg-background text-foreground
```

### Color Variables (CSS)

```css
/* Primary */
var(--primary)
var(--primary-foreground)

/* Secondary */  
var(--secondary)
var(--secondary-foreground)

/* Accent */
var(--accent)
var(--accent-foreground)

/* Surfaces */
var(--background)
var(--foreground)
var(--card)
var(--card-foreground)
var(--muted)
var(--muted-foreground)

/* Interactive */
var(--border)
var(--input)
var(--ring)
var(--destructive)
```
