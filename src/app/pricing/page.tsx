import PricingPageClient from "@/components/layout/pricing-page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | Ai Automatrix",
  description: "Custom Botpress AI agents that convert visitors into customers. Limited early-adopter seats + hands-on integrations. See plans & ROI.",
  openGraph: {
    title: "Pricing & Packages | Ai Automatrix",
    description: "Custom Botpress AI agents that convert visitors into customers. Limited early-adopter seats + hands-on integrations.",
    url: "https://www.aiautomatrix.com/pricing",
    siteName: "Ai Automatrix",
    images: [
      {
        url: "/og/pricing-og.png",
        width: 1200,
        height: 630,
        alt: "Ai Automatrix Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai Automatrix Pricing",
    description: "Custom Botpress AI agents — from FAQ bots to full multi-agent automation. Early-adopter seats available.",
    images: ["/og/pricing-og.png"],
  },
};

export default function PricingPage() {
    return <PricingPageClient />;
}
