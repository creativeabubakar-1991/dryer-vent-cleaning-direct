import React from "react";
import HeroSection from "@/components/HeroSection";
import FemaFireCallout from "@/components/FemaFireCallout";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import DiagnosticFlow from "@/components/DiagnosticFlow";
import PricingTable from "@/components/PricingTable";
import LocationsSection from "@/components/LocationsSection";
import FaqAccordion from "@/components/FaqAccordion";
import { generateOrganizationSchema } from "@/lib/schema";

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div className="flex flex-col">
        {/* 1. Hero Section with Interactive Calculator */}
        <HeroSection />

        {/* 2. USFA / FEMA Fire Risk Callout Banner */}
        <FemaFireCallout />

        {/* 3. 8 Core Services Catalog Grid */}
        <ServicesGrid />

        {/* 4. The Dryer Vent Direct Difference (Why Choose Us) */}
        <WhyChooseUs />

        {/* 5. Warning Signs & Symptom Troubleshooting Flow */}
        <DiagnosticFlow />

        {/* 6. Transparent Flat-Rate Pricing Matrix */}
        <PricingTable />

        {/* 7. Nationwide 50-State Coverage & Metro Hubs */}
        <LocationsSection />

        {/* 8. Frequently Asked Questions Accordion */}
        <FaqAccordion />
      </div>
    </>
  );
}
