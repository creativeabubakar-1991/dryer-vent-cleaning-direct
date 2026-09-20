import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, Phone, CheckCircle, Flame, ArrowRight, ShieldCheck } from "lucide-react";
import { getAllSymptoms, getSymptomBySlug, getAllCities } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ symptom: string }>;
}

export async function generateStaticParams() {
  const symptoms = getAllSymptoms();
  return symptoms.map((s) => ({
    symptom: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { symptom: slug } = await params;
  const symptom = getSymptomBySlug(slug);

  if (!symptom) {
    return { title: "Diagnostic Guide Not Found" };
  }

  const title = `${symptom.title} | Cause & Solution | ${siteConfig.name}`;
  const description = `${symptom.meta_description} Emergency same-day diagnostic service across 50 states: ${siteConfig.phone}.`;
  const canonicalUrl = `${siteConfig.domain}/symptoms/${symptom.slug}/`;

  return {
    title,
    description: description.slice(0, 155),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: description.slice(0, 155),
      url: canonicalUrl,
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

export default async function SymptomPage({ params }: PageProps) {
  const { symptom: slug } = await params;
  const symptom = getSymptomBySlug(slug);
  const cities = getAllCities();

  if (!symptom) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Symptoms", url: `${siteConfig.domain}/#faq` },
    { name: symptom.title, url: `${siteConfig.domain}/symptoms/${symptom.slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[#070c18] text-gray-200">
        {/* Breadcrumb */}
        <div className="border-b border-white/10 bg-[#0c1424] py-2.5 px-4 text-xs text-gray-400">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-orange-400 font-semibold">{symptom.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16 px-4 border-b border-white/10 text-left">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>Diagnostic Guide · Fire Hazard Rating: {symptom.fire_risk}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {symptom.title}
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {symptom.meta_description}
            </p>

            {/* Diagnostic Breakdown */}
            <div className="bg-[#0c1424] border border-white/15 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="border-b border-white/10 pb-3">
                <div className="text-xs uppercase font-bold text-orange-400">Root Cause Analysis</div>
                <div className="text-base font-bold text-white mt-1">{symptom.primary_cause}</div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div>
                  <strong className="text-white block mb-0.5">Observed Symptom:</strong>
                  {symptom.symptom}
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Fire Hazard Level:</strong>
                  <span className="text-red-400 font-bold">{symptom.fire_risk}</span>
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Certified Recommendation:</strong>
                  {symptom.recommended_action}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Emergency Dispatch: {siteConfig.phone}</span>
                </a>

                <Link
                  href="/#services"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition"
                >
                  <span>View Cleaning Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-12 px-4 text-left">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-xs uppercase font-bold text-gray-400 tracking-wider">
              Emergency Same-Day Dispatch Available In:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/dryer-vent-cleaning-${c.slug}/`}
                  className="bg-[#0c1424] hover:bg-[#101b31] border border-white/10 rounded-lg p-3 text-xs text-gray-300 hover:text-orange-400 transition"
                >
                  <div className="font-bold text-white">{c.city}, {c.state}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{c.response_time}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
