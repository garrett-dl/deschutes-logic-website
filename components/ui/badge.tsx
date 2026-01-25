import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Solid variants
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        accent:
          "border-transparent bg-accent text-accent-foreground",
        destructive:
          "border-transparent bg-destructive text-primary-foreground",
        warning:
          "border-transparent bg-amber-500 text-white dark:bg-amber-600",
        // Soft variants (subtle background)
        "soft-primary":
          "border-transparent bg-primary/10 text-primary",
        "soft-accent":
          "border-transparent bg-accent/10 text-accent",
        "soft-destructive":
          "border-transparent bg-destructive/10 text-destructive",
        "soft-warning":
          "border-transparent bg-amber-500/10 text-amber-600 dark:text-amber-400",
        // Outline variant
        outline:
          "border-border bg-card text-foreground",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs rounded-md",
        sm: "px-2 py-0.5 text-[10px] rounded",
        lg: "px-3 py-1 text-sm rounded-lg",
      },
      shape: {
        default: "",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, shape, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, shape }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
