import Link from "next/link";
import {
  Wrench,
  Trees,
  Building2,
  Scale,
  UtensilsCrossed,
  Factory,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    title: "Contractors & Trades",
    description: "Plumbers, electricians, HVAC, general contractors",
    icon: Wrench,
  },
  {
    title: "Landscaping & Property Services",
    description: "Lawn care, landscaping, property maintenance",
    icon: Trees,
  },
  {
    title: "Real Estate & Property Management",
    description: "Realtors, property managers, vacation rentals",
    icon: Building2,
  },
  {
    title: "Legal & Professional Services",
    description: "Law firms, accountants, consultants",
    icon: Scale,
  },
  {
    title: "Restaurants & Caterers",
    description: "Restaurants, catering companies, food service",
    icon: UtensilsCrossed,
  },
  {
    title: "Fabricators & Manufacturers",
    description: "Machine shops, custom fabrication, makers",
    icon: Factory,
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 id="industries-heading" className="text-3xl font-bold font-brand-secondary tracking-tight sm:text-4xl">
            Built for businesses like yours
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We work with service businesses and local companies across Bend—from
            one-person operations to growing teams.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Don&apos;t see your industry? We probably work with businesses like
          yours too.{" "}
          <Link
            href="#contact"
            className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            Let&apos;s talk
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function IndustryCard({ title, description, icon: Icon }: IndustryCardProps) {
  return (
    <div
      className={cn(
        "group flex items-start gap-4 rounded-xl border border-border bg-card p-5",
        "transition-all duration-200 ease-out",
        "hover:border-primary/20 hover:shadow-md"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg",
          "bg-primary/10 text-primary",
          "transition-transform duration-200 group-hover:scale-110"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-semibold font-brand-secondary">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
