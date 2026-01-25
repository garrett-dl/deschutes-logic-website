import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

// SEO Metadata
export const metadata: Metadata = {
  title: "Deschutes Logic | Business Automation & Web Development in Bend, OR",
  description:
    "Deschutes Logic helps Bend, Oregon businesses save time with workflow automation, web scraping, and custom integrations. Book a free consultation today.",
  keywords: [
    "business automation Bend Oregon",
    "workflow automation",
    "web development Bend",
    "web scraping solutions",
    "custom integrations",
    "small business automation",
    "Deschutes Logic",
    "Bend Oregon tech",
  ],
  authors: [{ name: "Deschutes Logic" }],
  creator: "Deschutes Logic",
  publisher: "Deschutes Logic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://deschuteslogic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deschutes Logic | Business Automation & Web Development",
    description:
      "We help Bend businesses automate the repetitive stuff—so you can focus on your customers and your craft.",
    url: "https://deschuteslogic.com",
    siteName: "Deschutes Logic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deschutes Logic - Business Automation & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deschutes Logic | Business Automation & Web Development",
    description:
      "We help Bend businesses automate the repetitive stuff—so you can focus on your customers and your craft.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Deschutes Logic",
  description:
    "Web development and business automation consultancy helping Bend, Oregon businesses save time with workflow automation, web scraping, and custom integrations.",
  url: "https://deschuteslogic.com",
  email: "hello@deschuteslogic.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bend",
    addressRegion: "OR",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bend",
      containedInPlace: {
        "@type": "State",
        name: "Oregon",
      },
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  priceRange: "$$",
  serviceType: [
    "Business Automation",
    "Web Development",
    "Web Scraping",
    "Custom Integrations",
    "Workflow Automation",
  ],
  knowsAbout: [
    "Business Process Automation",
    "Web Development",
    "Data Extraction",
    "API Integration",
    "Small Business Technology",
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* CTA Section */}
        <CtaSection />

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
}
