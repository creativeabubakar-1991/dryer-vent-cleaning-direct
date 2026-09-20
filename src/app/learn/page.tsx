import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { getAllGuides } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Dryer Vent Fire Safety & Maintenance Guides | ${siteConfig.name}`,
  description: `FEMA dryer fire safety statistics, warning sign diagnostics, building codes, and annual maintenance advice from certified dryer exhaust technicians.`,
  alternates: {
    canonical: `${siteConfig.domain}/learn/`,
  },
};

export default function LearnIndexPage() {
  const guides = getAllGuides();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Guides", url: `${siteConfig.domain}/learn/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-slate-50 text-slate-800 py-12 px-4 text-left">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Certified Knowledge Hub</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
              Dryer Vent Safety &amp; Fire Prevention Guides
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Technical troubleshooting walkthroughs, USFA / FEMA fire data, and International Residential Code (IRC M1502) guidance from certified dryer exhaust technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow-xl transition flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 font-bold border border-orange-200 text-[10px] uppercase">
                      {guide.category}
                    </span>
                    <span className="text-slate-500 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.read_time}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 hover:text-orange-600 transition">
                    <Link href={`/learn/${guide.slug}/`}>{guide.title}</Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/learn/${guide.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
