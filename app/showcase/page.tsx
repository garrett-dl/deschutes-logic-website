"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardGradientBorder,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSuccess,
  FieldGroup,
} from "@/components/ui/field";
import { Badge } from "@/components/ui/badge";

export default function ShowcasePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for system preference on mount
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-gradient" />
            <span className="text-xl font-bold font-brand">deschutes logic</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#colors" className="text-muted-foreground hover:text-primary transition-colors">
              Colors
            </a>
            <a href="#buttons" className="text-muted-foreground hover:text-primary transition-colors">
              Buttons
            </a>
            <a href="#cards" className="text-muted-foreground hover:text-primary transition-colors">
              Cards
            </a>
            <a href="#inputs" className="text-muted-foreground hover:text-primary transition-colors">
              Inputs
            </a>
          </nav>
          <Button
            variant="secondary"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? (
              <>
                <SunIcon className="h-4 w-4" />
                Light Mode
              </>
            ) : (
              <>
                <MoonIcon className="h-4 w-4" />
                Dark Mode
              </>
            )}
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-glow-sky opacity-50" />
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold font-brand tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Color Palette
              </span>{" "}
              Showcase
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A comprehensive demonstration of the Deschutes Logic color system,
              featuring vibrant blues, fresh greens, and carefully crafted
              light/dark themes.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Color Swatches Section */}
        <section id="colors" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Color Palette"
              description="Core brand colors using oklch for perceptual uniformity"
            />

            {/* Primary Sky */}
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold">Primary Sky</h3>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <ColorSwatch
                      key={shade}
                      name={`${shade}`}
                      className={`bg-brand-sky-${shade}`}
                      style={{
                        backgroundColor: `oklch(${
                          shade === 50
                            ? "97% 0.02"
                            : shade === 100
                            ? "94% 0.04"
                            : shade === 200
                            ? "90% 0.08"
                            : shade === 300
                            ? "82% 0.12"
                            : shade === 400
                            ? "74% 0.15"
                            : shade === 500
                            ? "65% 0.19"
                            : shade === 600
                            ? "55% 0.18"
                            : shade === 700
                            ? "45% 0.15"
                            : shade === 800
                            ? "35% 0.12"
                            : "25% 0.08"
                        } 205)`,
                      }}
                      lightText={shade >= 500}
                    />
                  )
                )}
              </div>
            </div>

            {/* Accent Emeralds */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Accent Emerald</h3>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <ColorSwatch
                      key={shade}
                      name={`${shade}`}
                      style={{
                        backgroundColor: `oklch(${
                          shade === 50
                            ? "97% 0.02"
                            : shade === 100
                            ? "94% 0.05"
                            : shade === 200
                            ? "90% 0.08"
                            : shade === 300
                            ? "82% 0.12"
                            : shade === 400
                            ? "74% 0.15"
                            : shade === 500
                            ? "65% 0.17"
                            : shade === 600
                            ? "55% 0.17"
                            : shade === 700
                            ? "45% 0.14"
                            : shade === 800
                            ? "35% 0.10"
                            : "25% 0.07"
                        } 160)`,
                      }}
                      lightText={shade >= 600}
                    />
                  )
                )}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Semantic Colors</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                <SemanticSwatch name="Primary" className="bg-primary" />
                <SemanticSwatch name="Secondary" className="bg-secondary" />
                <SemanticSwatch name="Accent" className="bg-accent" />
                <SemanticSwatch name="Muted" className="bg-muted" />
                <SemanticSwatch name="Card" className="bg-card border border-border" />
                <SemanticSwatch name="Destructive" className="bg-destructive" />
              </div>
            </div>

            {/* Background Colors */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold">Background & Surface</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-sm font-medium">Background</p>
                  <p className="text-xs text-muted-foreground">Page background</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm font-medium">Card</p>
                  <p className="text-xs text-muted-foreground">Elevated surface</p>
                </div>
                <div className="rounded-lg border border-border bg-muted p-4">
                  <p className="text-sm font-medium">Muted</p>
                  <p className="text-xs text-muted-foreground">Subtle background</p>
                </div>
                <div className="rounded-lg border border-border bg-input p-4">
                  <p className="text-sm font-medium">Input</p>
                  <p className="text-xs text-muted-foreground">Form backgrounds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Buttons"
              description="Various button styles and states"
            />

            <div className="mt-12 space-y-8">
              {/* Primary Buttons */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Primary</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Button</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Secondary</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Accent Buttons */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Accent / Success</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="accent">Accent Button</Button>
                  <Button variant="gradient">Gradient Button</Button>
                </div>
              </div>

              {/* Outline & Link Buttons */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Outline & Link</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">Outline</Button>
                  <Button variant="link">Link Style</Button>
                </div>
              </div>

              {/* Destructive */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Destructive</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="destructive">Delete</Button>
                  <Button variant="destructive" disabled>Disabled</Button>
                </div>
              </div>

              {/* Icon Buttons */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">With Icons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <ArrowRightIcon className="h-4 w-4" />
                    Continue
                  </Button>
                  <Button variant="secondary">
                    <DownloadIcon className="h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="icon">
                    <HeartIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Cards"
              description="Various card layouts for content display"
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Basic Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>
                    A simple card with border and subtle shadow for content
                    organization.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Card with Header and Content */}
              <Card className="overflow-hidden">
                <CardHeader className="border-b border-border bg-muted/50">
                  <CardTitle>Card with Header</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    Cards can have distinct header sections with different
                    background treatment.
                  </p>
                </CardContent>
              </Card>

              {/* Interactive Card */}
              <Card variant="interactive">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary">
                    Interactive Card
                  </CardTitle>
                  <CardDescription>
                    Hover effects for cards that are clickable or interactive.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardFooter>
              </Card>

              {/* Feature Card */}
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <ZapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>
                    Perfect for highlighting features with an icon.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Accent Card */}
              <Card variant="accent">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                    <CheckIcon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Success Card</CardTitle>
                  <CardDescription>
                    Use accent colors for success states and highlights.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Gradient Border Card */}
              <CardGradientBorder>
                <CardHeader>
                  <CardTitle>Gradient Border</CardTitle>
                  <CardDescription>
                    Eye-catching card with brand gradient border.
                  </CardDescription>
                </CardHeader>
              </CardGradientBorder>

              {/* Elevated Card */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>
                    More prominent shadow for important content.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Gradient Card */}
              <Card variant="gradient">
                <CardHeader>
                  <CardTitle>Gradient Card</CardTitle>
                  <CardDescription className="text-white/80">
                    Card with brand gradient background.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Inverted Card */}
              <Card className="inverted">
                <CardHeader>
                  <CardTitle>Inverted Card</CardTitle>
                  <CardDescription>
                    Applies opposite theme colors for contrast sections.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section id="inputs" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Form Elements"
              description="Inputs, selects, and other form components"
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Text Inputs */}
              <FieldGroup>
                <h3 className="text-lg font-semibold">Text Inputs</h3>

                <Field>
                  <FieldLabel htmlFor="default-input">Default Input</FieldLabel>
                  <Input
                    id="default-input"
                    type="text"
                    placeholder="Enter your name..."
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email-input">With Helper Text</FieldLabel>
                  <Input
                    id="email-input"
                    type="email"
                    placeholder="email@example.com"
                  />
                  <FieldDescription>
                    We&apos;ll never share your email.
                  </FieldDescription>
                </Field>

                <Field data-invalid="true">
                  <FieldLabel htmlFor="error-input">Error State</FieldLabel>
                  <Input
                    id="error-input"
                    type="text"
                    variant="error"
                    defaultValue="Invalid value"
                  />
                  <FieldError>This field is required.</FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="success-input">Success State</FieldLabel>
                  <Input
                    id="success-input"
                    type="text"
                    variant="success"
                    defaultValue="Valid input"
                  />
                  <FieldSuccess>Looks good!</FieldSuccess>
                </Field>

                <Field data-disabled="true">
                  <FieldLabel htmlFor="disabled-input">Disabled</FieldLabel>
                  <Input
                    id="disabled-input"
                    type="text"
                    disabled
                    placeholder="Disabled input"
                  />
                  <FieldDescription>
                    This field is currently disabled.
                  </FieldDescription>
                </Field>
              </FieldGroup>

              {/* Other Form Elements */}
              <FieldGroup>
                <h3 className="text-lg font-semibold">Other Elements</h3>

                <Field>
                  <FieldLabel htmlFor="textarea">Textarea</FieldLabel>
                  <Textarea
                    id="textarea"
                    placeholder="Enter your message..."
                  />
                  <FieldDescription>
                    Enter a detailed message (max 500 characters).
                  </FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>Select</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Checkboxes</FieldLabel>
                  <div className="space-y-3 mt-1">
                    <div className="flex items-center gap-3">
                      <Checkbox id="checkbox-a" />
                      <Label htmlFor="checkbox-a" className="font-normal">
                        Option A
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="checkbox-b" defaultChecked />
                      <Label htmlFor="checkbox-b" className="font-normal">
                        Option B (checked)
                      </Label>
                    </div>
                  </div>
                </Field>

                <Field>
                  <FieldLabel>Radio Buttons</FieldLabel>
                  <RadioGroup defaultValue="choice2" className="mt-1">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="choice1" id="radio-1" />
                      <Label htmlFor="radio-1" className="font-normal">
                        Choice 1
                      </Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="choice2" id="radio-2" />
                      <Label htmlFor="radio-2" className="font-normal">
                        Choice 2 (selected)
                      </Label>
                    </div>
                  </RadioGroup>
                </Field>

                <Field orientation="horizontal">
                  <Switch id="switch-1" />
                  <FieldLabel htmlFor="switch-1" className="font-normal">
                    Toggle option
                  </FieldLabel>
                </Field>

                <Field orientation="horizontal">
                  <Switch id="switch-2" defaultChecked />
                  <FieldLabel htmlFor="switch-2" className="font-normal">
                    Enabled by default
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Typography"
              description="Text styles and headings"
            />

            <div className="mt-12 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h1 className="text-4xl font-bold font-brand tracking-tight sm:text-5xl">
                    Heading 1 - Bold & Impactful
                  </h1>
                  <h2 className="mt-6 text-3xl font-semibold font-brand-secondary tracking-tight">
                    Heading 2 - Section Title
                  </h2>
                  <h3 className="mt-6 text-2xl font-semibold">
                    Heading 3 - Subsection
                  </h3>
                  <h4 className="mt-6 text-xl font-medium">
                    Heading 4 - Card Title
                  </h4>
                  <h5 className="mt-6 text-lg font-medium">Heading 5 - Label</h5>
                  <h6 className="mt-6 text-base font-medium">
                    Heading 6 - Small Label
                  </h6>

                  <hr className="my-8 border-border" />

                  <p className="text-lg leading-relaxed text-foreground">
                    Body text (large) - Perfect for introductory paragraphs or
                    featured content that needs emphasis.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-foreground">
                    Body text (default) - Standard paragraph text for most content.
                    Good readability with comfortable line height.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Body text (small, muted) - Secondary information, captions, and
                    helper text that supports the main content.
                  </p>

                  <hr className="my-8 border-border" />

                  <p className="text-foreground">
                    Inline styles:{" "}
                    <a href="#" className="text-primary hover:underline">
                      Primary link
                    </a>
                    ,{" "}
                    <a href="#" className="text-accent hover:underline">
                      accent link
                    </a>
                    , <strong>bold text</strong>, <em>italic text</em>, and{" "}
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                      inline code
                    </code>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Badges & Pills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Badges & Status"
              description="Labels, tags, and status indicators"
            />

            <div className="mt-12 space-y-8">
              {/* Solid Badges */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Solid Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge>Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              {/* Pill Badges */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Pill Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge shape="pill">Primary</Badge>
                  <Badge variant="secondary" shape="pill">Secondary</Badge>
                  <Badge variant="accent" shape="pill">Accent</Badge>
                  <Badge variant="destructive" shape="pill">Destructive</Badge>
                  <Badge variant="warning" shape="pill">Warning</Badge>
                  <Badge variant="outline" shape="pill">Outline</Badge>
                </div>
              </div>

              {/* Soft Badges */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Soft Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="soft-primary" shape="pill">Primary</Badge>
                  <Badge variant="soft-accent" shape="pill">Success</Badge>
                  <Badge variant="soft-warning" shape="pill">Warning</Badge>
                  <Badge variant="soft-destructive" shape="pill">Error</Badge>
                </div>
              </div>

              {/* Badge Sizes */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Badge Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="default">Default</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>

              {/* Status Indicators */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Status Indicators</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="soft-accent" shape="pill">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Online
                  </Badge>
                  <Badge variant="soft-warning" shape="pill">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Away
                  </Badge>
                  <Badge variant="soft-destructive" shape="pill">
                    <span className="h-2 w-2 rounded-full bg-destructive" />
                    Offline
                  </Badge>
                  <Badge variant="outline" shape="pill">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                    Unknown
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <SectionHeader title="Alerts" description="Notification and alert styles" />

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-primary/30 bg-primary/5 p-4">
                <InfoIcon className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-medium text-primary">Information</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This is an informational alert with helpful context.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-accent/30 bg-accent/5 p-4">
                <CheckIcon className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <h4 className="font-medium text-accent">Success</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your changes have been saved successfully.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <AlertIcon className="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <h4 className="font-medium text-amber-600 dark:text-amber-400">
                    Warning
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Please review your input before continuing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                <XIcon className="mt-0.5 h-5 w-5 text-destructive" />
                <div>
                  <h4 className="font-medium text-destructive">Error</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Something went wrong. Please try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Gradients"
              description="Brand gradients for special elements"
            />

            {/* Brand Gradients */}
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold">Brand Gradients</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl bg-brand-gradient" />
                  <p className="text-sm text-muted-foreground text-center">bg-brand-gradient</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl bg-brand-gradient-vertical" />
                  <p className="text-sm text-muted-foreground text-center">bg-brand-gradient-vertical</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl bg-brand-gradient-horizontal" />
                  <p className="text-sm text-muted-foreground text-center">bg-brand-gradient-horizontal</p>
                </div>
              </div>
            </div>

            {/* Stone Gradients */}
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold">Stone Gradients</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl border border-border bg-subtle-stone" />
                  <p className="text-sm text-muted-foreground text-center">bg-subtle-stone (light mode)</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl bg-subtle-stone-dark" />
                  <p className="text-sm text-muted-foreground text-center">bg-subtle-stone-dark (dark mode)</p>
                </div>
              </div>
            </div>

            {/* Glow Gradients */}
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold">Glow Effects</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl bg-muted bg-glow-sky" />
                  <p className="text-sm text-muted-foreground text-center">bg-glow-sky</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-32 rounded-xl bg-muted bg-glow-emerald" />
                  <p className="text-sm text-muted-foreground text-center">bg-glow-emerald</p>
                </div>
              </div>
            </div>

            {/* Gradient Text */}
            <div className="mt-12">
              <h3 className="mb-4 text-lg font-semibold">Gradient Text</h3>
              <p className="text-center text-4xl font-bold font-brand">
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Gradient text for headlines and emphasis
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Inverted Section Demo */}
        <section className="inverted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-brand-secondary tracking-tight sm:text-4xl">
              Inverted Section Example
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Using the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">.inverted</code> class
              automatically applies the opposite theme colors. This section appears dark in light mode, and light in dark mode.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg">Primary Action</Button>
              <Button variant="secondary" size="lg">Secondary</Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-card py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-10 w-10 rounded-lg bg-brand-gradient" />
            </div>
            <p className="font-semibold font-brand">deschutes logic</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Web development and automation consultancy based in Bend, Oregon.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Color Palette Showcase - Built with Next.js + Tailwind CSS
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

// ============================================================================
// COMPONENTS
// ============================================================================

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold font-brand-secondary tracking-tight sm:text-3xl">{title}</h2>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}

function ColorSwatch({
  name,
  className,
  style,
  lightText = false,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
  lightText?: boolean;
}) {
  return (
    <div
      className={`flex h-20 flex-col items-center justify-center rounded-lg ${className}`}
      style={style}
    >
      <span className={`text-xs font-medium ${lightText ? "text-white" : "text-black"}`}>
        {name}
      </span>
    </div>
  );
}

function SemanticSwatch({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <div className={`flex h-20 items-center justify-center rounded-lg ${className}`}>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

// ============================================================================
// ICONS (Simple SVG icons to avoid external dependencies)
// ============================================================================

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
