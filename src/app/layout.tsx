import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontentfire.com"),
  title: {
    default: "KontentFire - AI-Powered Social Media Content Automation",
    template: "%s | KontentFire",
  },
  description:
    "Generate, schedule, and publish stunning social media content with AI. KontentFire automates your content creation for LinkedIn, Facebook, Instagram, Twitter and more.",
  keywords: [
    "AI content generation",
    "social media automation",
    "content scheduling",
    "AI marketing",
    "social media management",
    "content creation",
    "LinkedIn automation",
    "Facebook automation",
    "Instagram automation",
  ],
  authors: [{ name: "KontentFire" }],
  creator: "KontentFire",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kontentfire.com",
    siteName: "KontentFire",
    title: "KontentFire - AI-Powered Social Media Content Automation",
    description:
      "Generate, schedule, and publish stunning social media content with AI. Automate your content creation for all major platforms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KontentFire - Set Your Social Media on Fire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KontentFire - AI-Powered Social Media Content Automation",
    description:
      "Generate, schedule, and publish stunning social media content with AI.",
    images: ["/og-image.png"],
    creator: "@kontentfire",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-transparent.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-transparent.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://kontentfire.com/#organization",
              name: "KontentFire",
              url: "https://kontentfire.com",
              logo: {
                "@type": "ImageObject",
                url: "https://kontentfire.com/logo-transparent.png",
                width: 200,
                height: 200
              },
              description: "AI-powered social media content automation platform. Generate, schedule, and publish content across LinkedIn, Facebook, Instagram, and Twitter.",
              email: "hello@kontentfire.com",
              foundingDate: "2024",
              sameAs: [
                "https://twitter.com/kontentfire",
                "https://linkedin.com/company/kontentfire"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "support@kontentfire.com",
                  contactType: "customer support",
                  availableLanguage: "English"
                },
                {
                  "@type": "ContactPoint",
                  email: "hello@kontentfire.com",
                  contactType: "sales",
                  availableLanguage: "English"
                }
              ],
              areaServed: {
                "@type": "Country",
                name: "United States"
              },
              knowsAbout: [
                "Social Media Marketing",
                "AI Content Generation",
                "Content Automation",
                "Digital Marketing"
              ]
            }),
          }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://kontentfire.com/#website",
              name: "KontentFire",
              url: "https://kontentfire.com",
              description: "AI-powered social media content automation for businesses",
              publisher: {
                "@id": "https://kontentfire.com/#organization"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://kontentfire.com/locations?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              inLanguage: "en-US"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
