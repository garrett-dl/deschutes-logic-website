# Color Palette Quick Reference

Copy-paste ready classes and values for common use cases.

---

## Primary Sky Blue

```
oklch(65% 0.19 205)  →  Tailwind: sky-500 (similar)
```

| Shade | OKLCH | Tailwind Approx | Use Case |
|-------|-------|-----------------|----------|
| 50 | `oklch(97% 0.02 205)` | `sky-50` | Light backgrounds |
| 100 | `oklch(94% 0.04 205)` | `sky-100` | Badges, pills |
| 500 | `oklch(65% 0.19 205)` | `sky-500` | **Primary buttons** |
| 600 | `oklch(55% 0.18 205)` | `sky-600` | Hover states |
| 900 | `oklch(25% 0.08 205)` | `sky-900` | Dark text |

---

## Accent Emerald Green

```
oklch(65% 0.17 160)  →  Tailwind: emerald-500 (similar)
```

| Shade | OKLCH | Tailwind Approx | Use Case |
|-------|-------|-----------------|----------|
| 50 | `oklch(97% 0.02 160)` | `emerald-50` | Light backgrounds |
| 100 | `oklch(94% 0.05 160)` | `emerald-100` | Badges, success |
| 500 | `oklch(65% 0.17 160)` | `emerald-500` | **Accent elements** |
| 600 | `oklch(55% 0.17 160)` | `emerald-600` | Hover states |

---

## Common Component Classes

### Buttons

```tsx
// Primary (vibrant blue)
className="bg-primary text-primary-foreground hover:bg-primary/90"

// Secondary (muted)
className="bg-secondary text-secondary-foreground hover:bg-secondary/80"

// Accent (vibrant green)
className="bg-accent text-accent-foreground hover:bg-accent/90"

// Outline
className="border-2 border-primary text-primary hover:bg-primary/10"

// Ghost
className="text-primary hover:bg-primary/10"

// Destructive
className="bg-destructive text-primary-foreground hover:bg-destructive/90"
```

### Cards & Containers

```tsx
// Standard card
className="bg-card text-card-foreground border border-border rounded-lg"

// Elevated card
className="bg-card text-card-foreground shadow-lg rounded-xl"

// Muted section
className="bg-muted text-muted-foreground"

// Input container
className="bg-input border border-border"
```

### Text

```tsx
// Primary text (headings)
className="text-foreground"

// Secondary text (body)
className="text-muted-foreground"

// Link
className="text-primary hover:text-primary/80"

// Accent link
className="text-accent hover:text-accent/80"
```

### Borders & Dividers

```tsx
// Standard border
className="border border-border"

// Focused input
className="border-2 border-ring"

// Divider
className="border-t border-border"
```

### Focus States

```tsx
// Standard focus ring
className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

// Focus with background offset
className="focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
```

---

## Gradients

```tsx
// Full brand gradient (text)
className="bg-brand-gradient bg-clip-text text-transparent"

// Full brand gradient (background)
className="bg-brand-gradient"

// Subtle page gradient
className="bg-subtle-blue dark:bg-subtle-blue-dark"

// Glow effects
className="bg-glow-blue"
className="bg-glow-green"
```

---

## Standard Tailwind Alternatives

When you need quick styling without custom variables:

| Need | Use This |
|------|----------|
| Primary sky | `sky-500` |
| Primary hover | `sky-600` |
| Accent green | `emerald-500` |
| Accent hover | `emerald-600` |
| Light background | `stone-50` |
| Borders | `stone-200` |
| Muted text | `stone-500` |
| Dark text | `stone-900` |

---

## CSS Variables (for custom CSS)

```css
/* Colors */
var(--primary)
var(--primary-foreground)
var(--secondary)
var(--secondary-foreground)
var(--accent)
var(--accent-foreground)
var(--background)
var(--foreground)
var(--card)
var(--card-foreground)
var(--muted)
var(--muted-foreground)
var(--border)
var(--input)
var(--ring)
var(--destructive)

/* Radii */
var(--radius-sm)
var(--radius-md)
var(--radius-lg)
var(--radius-xl)
```

---

## Dark Mode

Dark mode is activated by adding `.dark` class to `<html>`:

```tsx
// Toggle
document.documentElement.classList.toggle('dark')

// Set dark
document.documentElement.classList.add('dark')

// Set light
document.documentElement.classList.remove('dark')

// Check
document.documentElement.classList.contains('dark')
```

All semantic color classes (`bg-primary`, `bg-background`, etc.) automatically adapt.
