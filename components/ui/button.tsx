import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: Main brand sky blue
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary/80",
        // Destructive: Error/danger actions
        destructive:
          "bg-destructive text-primary-foreground shadow-sm hover:bg-destructive/90 active:bg-destructive/80",
        // Outline: Border with primary color
        outline:
          "border border-primary bg-transparent text-primary shadow-sm hover:bg-primary/10 active:bg-primary/20",
        // Secondary: Muted stone background
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:bg-secondary/70",
        // Accent: Emerald green for highlights
        accent:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 active:bg-accent/80",
        // Ghost: Minimal, no background
        ghost:
          "hover:bg-muted hover:text-foreground active:bg-muted/80",
        // Link: Text-only with underline
        link:
          "text-primary underline-offset-4 hover:underline focus-visible:ring-0 focus-visible:ring-offset-0",
        // Gradient: Brand gradient (sky → cyan → emerald)
        gradient:
          "bg-brand-gradient text-white shadow-sm hover:opacity-90 active:opacity-80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-6",
        xl: "h-12 rounded-lg px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
