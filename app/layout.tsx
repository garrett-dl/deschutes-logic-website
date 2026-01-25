import type { Metadata } from "next";
import { Biryani, Alef, PT_Sans_Caption } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/navigation/header";

const biryani = Biryani({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

const alef = Alef({
  variable: "--font-brand-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSansCaption = PT_Sans_Caption({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Deschutes Logic | Web Development & Automation",
  description:
    "We help Bend businesses automate the repetitive stuff—so you can focus on your customers and your craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${biryani.variable} ${alef.variable} ${ptSansCaption.variable} antialiased font-sans`}
      >
        <ThemeProvider defaultTheme="system" storageKey="deschutes-logic-theme">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
