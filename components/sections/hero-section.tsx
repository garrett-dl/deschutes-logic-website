import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroLandscape } from "@/components/illustrations/hero-landscape";

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative h-screen max-h-[1080px]">
      {/* Background Illustration */}
      <div className="absolute inset-0 overflow-hidden">
        <HeroLandscape className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-25" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 pb-24 pt-24 md:pb-32 lg:pb-56 lg:pt-44">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            {/* Main Headline */}
            <h1 id="hero-heading" className="mt-8 text-balance text-5xl font-bold font-brand tracking-tight md:text-6xl lg:mt-16 xl:text-7xl">
              Less Busywork.{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                More Business.
              </span>
            </h1>

            {/* Secondary Text */}
            <p className="mt-8 text-pretty text-lg text-muted-foreground">
              We help Bend businesses automate the repetitive stuff—so you can
              focus on your customers and your craft.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="px-6 text-base">
                <Link href="#contact">
                  <span className="text-nowrap">Book a free consultation</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 text-base"
              >
                <Link href="#how-it-works">
                  <span className="text-nowrap">See how it works</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
