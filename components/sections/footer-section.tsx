import Link from "next/link";
import { Logo } from "@/components/logo";

const links = [
  { title: "Services", href: "#services" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export function FooterSection() {
  return (
    <footer className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <div className="mx-auto block w-fit">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/company/deschuteslogic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </Link>

          {/* Email */}
          <Link
            href="mailto:hello@deschuteslogic.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              />
            </svg>
          </Link>
        </div>

        {/* Location */}
        <p className="text-muted-foreground text-center text-sm">
          Based in Bend, Oregon. Working with businesses everywhere.
        </p>

        {/* Copyright */}
        <span className="text-muted-foreground mt-4 block text-center text-sm">
          © {new Date().getFullYear()} Deschutes Logic. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
