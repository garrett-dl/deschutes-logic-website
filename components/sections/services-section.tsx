import Link from "next/link";
import { Zap, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Quick Wins",
    description:
      "Start saving time fast. We'll automate repetitive tasks like email sorting, appointment reminders, and basic document handling.",
    bestFor: "Busy owners who want immediate relief",
    icon: Zap,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
    linkColor: "text-amber-600 hover:text-amber-500",
    hoverBorder: "hover:border-amber-500/20",
    hoverShadow: "hover:shadow-amber-500/10",
    href: "#quick-wins",
  },
  {
    title: "Streamlined Operations",
    description:
      "Connect your tools so they work together. Automatic CRM updates, invoicing workflows, customer follow-ups that happen without you.",
    bestFor: "Growing businesses ready to systematize",
    icon: Settings,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    linkColor: "text-primary hover:text-primary/80",
    hoverBorder: "hover:border-primary/20",
    hoverShadow: "hover:shadow-primary/10",
    href: "#streamlined-operations",
  },
  {
    title: "Custom Solutions",
    description:
      "AI-powered systems built for how you work. Searchable knowledge bases, smart document processing, custom tools designed just for you.",
    bestFor: "Businesses with unique needs or complex operations",
    icon: Sparkles,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    linkColor: "text-accent hover:text-accent/80",
    hoverBorder: "hover:border-accent/20",
    hoverShadow: "hover:shadow-accent/10",
    href: "#custom-solutions",
  },
];

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 id="services-heading" className="text-3xl font-bold font-brand-secondary tracking-tight sm:text-4xl">
            Automation that fits where you are
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re looking to save a few hours a week or build
            something custom, we&apos;ll find the right solution for your
            business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  bestFor: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
  linkColor: string;
  hoverBorder: string;
  hoverShadow: string;
  href: string;
}

function ServiceCard({
  title,
  description,
  bestFor,
  icon: Icon,
  iconColor,
  iconBg,
  linkColor,
  hoverBorder,
  hoverShadow,
  href,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-8",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:-translate-y-1",
        hoverBorder,
        hoverShadow
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mb-6 flex h-14 w-14 items-center justify-center rounded-xl",
          iconBg,
          "transition-transform duration-300 group-hover:scale-110"
        )}
      >
        <Icon className={cn("h-7 w-7", iconColor)} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold font-brand-secondary">{title}</h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-muted-foreground">{description}</p>

      {/* Best For */}
        <p className="text-sm mt-6">
          <span className="font-medium text-foreground">Best for:</span>{" "}
          <span className="text-muted-foreground">{bestFor}</span>
        </p>

      {/* Learn More Link */}
      <Link
        href={href}
        className={cn(
          "mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors",
          linkColor,
          "group/link"
        )}
      >
        <span>Learn more</span>
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
