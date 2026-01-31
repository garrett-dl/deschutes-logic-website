import { Ear, Hammer, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

// Middle gradient color: oklch(65% 0.16 185) - between primary and accent
const midGradientColor = "oklch(65% 0.16 185)";

const steps = [
  {
    number: "01",
    title: "We Listen",
    description:
      "Tell us what's eating your time. We'll ask questions, watch how you work, and find the friction.",
    icon: Ear,
  },
  {
    number: "02",
    title: "We Build",
    description:
      "We create a solution that fits your workflow—not the other way around. You'll see it working before we call it done.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "You Win",
    description:
      "Hours back in your week. Fewer mistakes. More time for the work that actually matters.",
    icon: Trophy,
  },
];

// Helper to get color styles for each step
function getStepColors(index: number) {
  if (index === 0) {
    return {
      borderClass: "border-primary",
      textClass: "text-primary",
      style: {},
    };
  }
  if (index === 1) {
    return {
      borderClass: "",
      textClass: "",
      style: { borderColor: midGradientColor, color: midGradientColor },
    };
  }
  return {
    borderClass: "border-accent",
    textClass: "text-accent",
    style: {},
  };
}

export function ProcessSection() {
  return (
    <section id="how-it-works" aria-labelledby="process-heading" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 id="process-heading" className="text-3xl font-bold font-brand-secondary tracking-tight sm:text-4xl">
            Simple Process. Real Results.
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute left-0 right-0 top-10 h-0.5"
                style={{
                  background: `linear-gradient(to right, var(--primary), ${midGradientColor}, var(--accent))`,
                }}
              />

              {/* Steps */}
              <div className="relative grid grid-cols-3 gap-8">
                {steps.map((step, index) => {
                  const colors = getStepColors(index);
                  return (
                    <div key={step.number} className="relative">
                      {/* Step indicator */}
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "relative z-10 flex h-20 w-20 items-center justify-center rounded-full",
                            "bg-card border-4 shadow-lg",
                            colors.borderClass
                          )}
                          style={colors.style}
                        >
                          <step.icon
                            className={cn("h-8 w-8", colors.textClass)}
                            style={colors.style}
                          />
                        </div>

                        {/* Step number */}
                        <span
                          className={cn("mt-4 text-sm font-bold", colors.textClass)}
                          style={colors.style}
                        >
                          {step.number}
                        </span>

                        {/* Title */}
                        <h3 className="mt-2 text-xl font-semibold font-brand-secondary">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-center text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden">
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute bottom-6 left-10 top-6 w-0.5"
                style={{
                  background: `linear-gradient(to bottom, var(--primary), ${midGradientColor}, var(--accent))`,
                }}
              />

              {/* Steps */}
              <div className="relative space-y-12">
                {steps.map((step, index) => {
                  const colors = getStepColors(index);
                  return (
                    <div key={step.number} className="relative flex gap-6 items-center">
                      {/* Step indicator */}
                      <div
                        className={cn(
                          "relative z-10 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full",
                          "bg-card border-4 shadow-lg",
                          colors.borderClass
                        )}
                        style={colors.style}
                      >
                        <step.icon
                          className={cn("h-8 w-8", colors.textClass)}
                          style={colors.style}
                        />
                      </div>

                      {/* Content */}
                      <div className="pt-2">
                        {/* Step number */}
                        <span
                          className={cn("text-sm font-bold", colors.textClass)}
                          style={colors.style}
                        >
                          {step.number}
                        </span>

                        {/* Title */}
                        <h3 className="mt-1 text-xl font-semibold font-brand-secondary">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
