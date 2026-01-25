# Typography Quick Reference

## Font Classes

| Class | Font | Usage |
|-------|------|-------|
| `font-brand` | Biryani | Page headers, hero headlines, company name |
| `font-brand-secondary` | Alef | Section titles, secondary headings |
| `font-sans` | PT Sans Caption | Body text, labels, UI elements (default) |

---

## Typography Rules

### 1. Page Headers → `font-brand`

```tsx
<h1 className="text-4xl font-bold font-brand">Page Title</h1>
```

### 2. Company Name → `font-brand` (lowercase)

```tsx
<span className="font-bold font-brand">deschutes logic</span>
```

### 3. Section Titles → `font-brand-secondary`

```tsx
<h2 className="text-2xl font-bold font-brand-secondary">Section Title</h2>
```

### 4. Everything Else → Default (no class needed)

```tsx
<p className="text-base">Body text uses PT Sans Caption by default.</p>
```

---

## Common Patterns

### Hero Headline

```tsx
<h1 className="text-4xl font-bold font-brand tracking-tight sm:text-5xl md:text-6xl">
  <span className="bg-brand-gradient bg-clip-text text-transparent">
    Headline Text
  </span>
</h1>
```

### Section Header

```tsx
<h2 className="text-2xl font-bold font-brand-secondary tracking-tight sm:text-3xl">
  Section Title
</h2>
<p className="mt-2 text-muted-foreground">Section description</p>
```

### Logo + Company Name

```tsx
<div className="flex items-center gap-2">
  <Logo />
  <span className="text-xl font-bold font-brand">deschutes logic</span>
</div>
```

---

## Decision Matrix

| What are you styling? | Use this class |
|-----------------------|----------------|
| Page title | `font-brand` |
| Hero headline | `font-brand` |
| Company name (with logo) | `font-brand` (lowercase) |
| Section heading (h2) | `font-brand-secondary` |
| Card/feature title | `font-brand-secondary` or default |
| Subsection heading (h3+) | default |
| Body paragraphs | default |
| Form labels | default |
| Button text | default |
| Navigation links | default |
| Helper/description text | default |
