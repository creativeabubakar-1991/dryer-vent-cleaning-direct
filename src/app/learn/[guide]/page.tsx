import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Clock, ShieldCheck, ArrowRight, Phone, Flame } from "lucide-react";
import { getAllGuides, getGuideBySlug, getAllCities } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { generateBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ guide: string }>;
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((g) => ({
    guide: g.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { guide: guideSlug } = await params;
  const guide = getGuideBySlug(guideSlug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  const title = `${guide.title} | ${siteConfig.name}`;
  const canonicalUrl = `${siteConfig.domain}/learn/${guide.slug}/`;

  return {
    title,
    description: guide.excerpt.slice(0, 155),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: guide.excerpt.slice(0, 155),
      url: canonicalUrl,
      type: "article",
      siteName: siteConfig.name,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { guide: guideSlug } = await params;
  const guide = getGuideBySlug(guideSlug);
  const cities = getAllCities();

  if (!guide) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.domain}/` },
    { name: "Guides", url: `${siteConfig.domain}/learn/` },
    { name: guide.title, url: `${siteConfig.domain}/learn/${guide.slug}/` },
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
            <Link href="/learn/" className="hover:text-white transition">Guides</Link>
            <span>/</span>
            <span className="text-orange-400 font-semibold">{guide.title}</span>
          </div>
        </div>

        {/* Article Body */}
        <article className="py-12 px-4 max-w-4xl mx-auto text-left space-y-6">
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 font-bold border border-orange-500/20 text-[10px] uppercase">
              {guide.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {guide.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {guide.read_time}
              </span>
              <span>·</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Reviewed by Certified Exhaust Technician
              </span>
            </div>
          </div>

          <div className="bg-[#0c1424] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg text-white font-medium border-l-4 border-orange-500 pl-4 py-1">
              {guide.excerpt}
            </p>

            <p>
              According to the National Fire Protection Association (NFPA) standard 211 and International Residential Code (IRC M1502), residential clothes dryer exhaust systems must be constructed of minimum 0.016-inch thick (28 gauge) rigid smooth metal ducting with non-penetrating mechanical connections.
            </p>

            <h2 className="text-xl font-bold text-white pt-4">
              Why Regular Dryer Exhaust Maintenance Saves Lives &amp; Money
            </h2>

            <p>
              When lint escapes the appliance lint trap, it travels into the exhaust ductwork. If the duct is excessively long, contains multiple 90-degree elbows, or terminates through a clogged rooftop cap, air velocity slows down. Lint falls out of the airstream and forms an insulating layer along pipe surfaces.
            </p>

            <div className="bg-[#070c18] border border-white/10 rounded-xl p-5 my-4 space-y-2">
              <div className="font-bold text-orange-400 text-sm flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>The 3 Critical Warning Signs</span>
              </div>
              <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 list-disc pl-5">
                <li>Clothes take 2 or more complete cycles to dry fully.</li>
                <li>The dryer top surface is scorching hot to the touch during operation.</li>
                <li>The outdoor vent flapper barely opens or remains sealed shut.</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Need Professional Vent Service?</div>
                <div className="text-xs text-gray-400">Same-day dispatch nationwide with upfront free phone estimates.</div>
              </div>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase px-5 py-3 rounded-xl transition"
              >
                Call: {siteConfig.phone}
              </a>
            </div>
          </div>
        </article>

        {/* Cities */}
        <section className="py-12 px-4 border-t border-white/10 text-left">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-xs uppercase font-bold text-gray-400 tracking-wider">
              Service Available Across All Major Metros:
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
