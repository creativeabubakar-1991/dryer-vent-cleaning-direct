import citiesData from "@/data/cities.json";
import servicesData from "@/data/services.json";
import statesData from "@/data/states.json";
import symptomsData from "@/data/symptoms.json";
import guidesData from "@/data/guides.json";
import { CityData, ServiceData, StateData, SymptomData, GuideData } from "@/types";
import { siteConfig } from "@/config/site.config";

const cities = citiesData as CityData[];
const services = servicesData as ServiceData[];
const states = statesData as StateData[];
const symptoms = symptomsData as SymptomData[];
const guides = guidesData as GuideData[];

export function getAllCities(): CityData[] {
  return cities;
}

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllStates(): StateData[] {
  return states;
}

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllSymptoms(): SymptomData[] {
  return symptoms;
}

export function getSymptomBySlug(slug: string): SymptomData | undefined {
  return symptoms.find((s) => s.slug === slug);
}

export function getAllGuides(): GuideData[] {
  return guides;
}

export function getGuideBySlug(slug: string): GuideData | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getNearbyCities(city: CityData): CityData[] {
  const directMatches = (city.nearby_cities || [])
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is CityData => c !== undefined);

  if (directMatches.length >= 4) {
    return directMatches.slice(0, 5);
  }

  const sameState = cities.filter(
    (c) => c.state === city.state && c.slug !== city.slug && !directMatches.some((m) => m.slug === c.slug)
  );

  const fallback = cities.filter(
    (c) => c.slug !== city.slug && !directMatches.some((m) => m.slug === c.slug)
  );

  const combined = [...directMatches, ...sameState, ...fallback];
  return combined.slice(0, 5);
}

export function getCityPageMeta(city: CityData) {
  const phone = siteConfig.phone;
  return {
    title: `Dryer Vent Cleaning ${city.city} ${city.state} | $99 Flat | ${siteConfig.name}`,
    description: `Certified dryer vent cleaning in ${city.city}, ${city.state}. CDET technicians, rapid rotary brush & HEPA extraction, rooftop service, and fire prevention: ${phone}.`,
    h1: `Certified Dryer Vent Cleaning in ${city.city}, ${city.state}`,
    subhead: `Same-day priority lint removal, rooftop cleaning, and USFA fire safety compliance across ${city.city} and ${city.county}.`,
  };
}
