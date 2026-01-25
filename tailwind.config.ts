import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // =================================================================
        // BRAND COLORS (using oklch for precision)
        // Use these for direct brand color access
        // =================================================================
        brand: {
          // Primary Sky Blue Family (like Tailwind sky)
          sky: {
            50: "oklch(97% 0.02 205)",
            100: "oklch(94% 0.04 205)",
            200: "oklch(90% 0.08 205)",
            300: "oklch(82% 0.12 205)",
            400: "oklch(74% 0.15 205)",
            500: "oklch(65% 0.19 205)", // Primary
            600: "oklch(55% 0.18 205)",
            700: "oklch(45% 0.15 205)",
            800: "oklch(35% 0.12 205)",
            900: "oklch(25% 0.08 205)",
            950: "oklch(14% 0.020 205)", // Dark mode bg
          },
          // Accent Emerald Green Family (like Tailwind emerald)
          emerald: {
            50: "oklch(97% 0.02 160)",
            100: "oklch(94% 0.05 160)",
            200: "oklch(90% 0.08 160)",
            300: "oklch(82% 0.12 160)",
            400: "oklch(74% 0.15 160)",
            500: "oklch(65% 0.17 160)", // Accent
            600: "oklch(55% 0.17 160)",
            700: "oklch(45% 0.14 160)",
            800: "oklch(35% 0.10 160)",
            900: "oklch(25% 0.07 160)",
            950: "oklch(18% 0.04 160)",
          },
          // Cyan (Transition color for gradients between sky and emerald)
          cyan: {
            400: "oklch(74% 0.14 185)",
            500: "oklch(65% 0.16 185)",
            600: "oklch(55% 0.15 185)",
          },
        },

        // =================================================================
        // SEMANTIC COLORS (CSS variable-based for theme switching)
        // These automatically adapt to light/dark mode via globals.css
        // =================================================================

        // Primary: Main brand color for key actions
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        // Secondary: Supporting actions
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        // Accent: Highlights and emphasis
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        // Destructive: Error states and dangerous actions
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--primary-foreground)",
        },

        // Surface colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        // Interactive elements
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        // Chart colors
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },

        // Sidebar (if using sidebar component)
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },

      // =================================================================
      // GRADIENTS
      // =================================================================
      backgroundImage: {
        // Full brand gradient (sky → cyan → emerald)
        "brand-gradient":
          "linear-gradient(135deg, oklch(65% 0.19 205) 0%, oklch(65% 0.16 185) 50%, oklch(65% 0.17 160) 100%)",
        "brand-gradient-vertical":
          "linear-gradient(180deg, oklch(65% 0.19 205) 0%, oklch(65% 0.16 185) 50%, oklch(65% 0.17 160) 100%)",
        "brand-gradient-horizontal":
          "linear-gradient(90deg, oklch(65% 0.19 205) 0%, oklch(65% 0.16 185) 50%, oklch(65% 0.17 160) 100%)",

        // Subtle gradients for backgrounds (stone-based)
        "subtle-stone":
          "linear-gradient(180deg, oklch(98.5% 0.003 75) 0%, oklch(96% 0.005 75) 100%)",
        "subtle-stone-dark":
          "linear-gradient(180deg, oklch(14% 0.006 75) 0%, oklch(18% 0.008 75) 100%)",

        // Glow effects
        "glow-sky": "radial-gradient(ellipse at center, oklch(65% 0.19 205 / 0.15) 0%, transparent 70%)",
        "glow-emerald": "radial-gradient(ellipse at center, oklch(65% 0.17 160 / 0.15) 0%, transparent 70%)",
      },

      // =================================================================
      // TYPOGRAPHY
      // =================================================================
      fontFamily: {
        sans: ["var(--font-sans)", "PT Sans Caption", "system-ui", "sans-serif"],
        brand: ["var(--font-brand)", "Biryani", "system-ui", "sans-serif"],
        "brand-secondary": ["var(--font-brand-secondary)", "Alef", "system-ui", "sans-serif"],
      },

      // =================================================================
      // BORDER RADIUS
      // =================================================================
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
      },

      // =================================================================
      // ANIMATIONS
      // =================================================================
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
      },
    },
  },
};

export default config;
