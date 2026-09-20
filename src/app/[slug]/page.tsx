import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllCities, getCityBySlug, getCityPageMeta } from "@/lib/data";
import CityPageTemplate from "@/components/CityPageTemplate";
import { siteConfig } from "@/config/site.config";

interface CitySlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((city) => ({
    slug: `dryer-vent-cleaning-${city.slug}`,
  }));
}

export async function generateMetadata({ params }: CitySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = slug.replace(/^dryer-vent-cleaning-/, "");
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  const meta = getCityPageMeta(city);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${siteConfig.domain}/dryer-vent-cleaning-${city.slug}/`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteConfig.domain}/dryer-vent-cleaning-${city.slug}/`,
    },
  };
}

export default async function CitySlugPage({ params }: CitySlugPageProps) {
  const { slug } = await params;
  const citySlug = slug.replace(/^dryer-vent-cleaning-/, "");
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return <CityPageTemplate city={city} />;
}
