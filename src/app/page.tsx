import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "KontentFire",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI-powered social media content automation platform. Generate, schedule, and publish content across LinkedIn, Facebook, Instagram, and Twitter.",
            url: "https://kontentfire.com",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "29",
              highPrice: "199",
              priceCurrency: "USD",
              offerCount: "3",
            },
            author: {
              "@type": "Organization",
              name: "KontentFire",
              url: "https://kontentfire.com",
            },
          }),
        }}
      />
    </>
  );
}
