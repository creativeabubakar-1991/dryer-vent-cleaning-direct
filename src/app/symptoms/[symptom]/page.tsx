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

      <div className="bg-slate-50 text-slate-800">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white py-2.5 px-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <span className="text-orange-600 font-semibold">{symptom.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16 px-4 bg-white border-b border-slate-200 text-left">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold text-red-700">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              <span>Diagnostic Guide · Fire Hazard Rating: {symptom.fire_risk}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              {symptom.title}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {symptom.meta_description}
            </p>

            {/* Diagnostic Breakdown */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs uppercase font-bold text-orange-700">Root Cause Analysis</div>
                <div className="text-base font-bold text-slate-900 mt-1">{symptom.primary_cause}</div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Observed Symptom:</strong>
                  {symptom.symptom}
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Fire Hazard Level:</strong>
                  <span className="text-red-600 font-bold">{symptom.fire_risk}</span>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Certified Recommendation:</strong>
                  {symptom.recommended_action}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition"
                >
                  <Phone className="w-4 h-4 fill-white animate-bounce" />
                  <span>Call Emergency Dispatch: {siteConfig.phone}</span>
                </a>

                <Link
                  href="/#services"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition shadow-xs"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-12 px-4 text-left bg-slate-50">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Emergency Same-Day Dispatch Available In:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/dryer-vent-cleaning-${c.slug}/`}
                  className="bg-white hover:bg-orange-50/50 border border-slate-200 hover:border-orange-400 rounded-lg p-3 text-xs text-slate-700 hover:text-orange-600 transition shadow-xs"
                >
                  <div className="font-bold text-slate-900">{c.city}, {c.state}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{c.response_time}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
