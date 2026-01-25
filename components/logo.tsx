import { cn } from "@/lib/utils";
import Link from "next/link";

export interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Deschutes Logic - Home"
      className={cn("flex items-center gap-2", className)}
    >
      {/* Gradient "d" logo mark */}
      <span
        className="text-3xl font-bold font-brand bg-brand-gradient bg-clip-text text-transparent select-none"
        aria-hidden="true"
      >
        d
      </span>
      {/* Company name in brand font, lowercase per typography guidelines */}
      {showText && (
        <span className="text-xl font-bold font-brand text-foreground">
          deschutes logic
        </span>
      )}
    </Link>
  );
}
