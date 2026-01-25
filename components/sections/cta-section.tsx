import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export function CtaSection() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative overflow-hidden">
      {/* Brand gradient background */}
      <div className="absolute inset-0 bg-brand-gradient" />

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Text */}
            <div className="flex flex-col justify-center">
              <h2 id="cta-heading" className="text-3xl font-bold font-brand tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s find your quick win.
              </h2>
              <p className="mt-6 text-lg text-white/90">
                Book a free 30-minute call. We&apos;ll talk about what&apos;s
                slowing you down and whether automation makes sense for your
                business. No pressure, no pitch.
              </p>

              {/* Secondary action */}
              <div className="mt-8">
                <a
                  href="mailto:hello@deschuteslogic.com"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="underline underline-offset-4">
                    Or email us directly
                  </span>
                </a>
              </div>
            </div>

            {/* Right column - Form (Client Component) */}
            <div className="rounded-2xl bg-card p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
