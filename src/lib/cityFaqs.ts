import { CityData } from "@/types";
import { siteConfig } from "@/config/site.config";

export function generateCityFaqs(city: CityData): { question: string; answer: string }[] {
  return [
    {
      question: `How much does dryer vent cleaning cost in ${city.city}, ${city.state}?`,
      answer: `Dryer vent cleaning pricing in ${city.city} depends on your duct length, whether the exhaust terminates through an exterior side wall, basement, or two-story rooftop, and the degree of lint buildup. We provide 100% free estimates over the phone with upfront pricing and zero hidden fees before any work begins. Call ${siteConfig.phone} for an instant quote.`,
    },
    {
      question: `How quickly can a technician arrive in ${city.city}?`,
      answer: `We provide priority same-day dispatch across ${city.city} and ${city.county}—with local service vans typically arriving within ${city.response_time} of your call. Emergency dispatch is available 24/7 for overheating dryers or burning lint smells.`,
    },
    {
      question: `Why do dryer vents clog so frequently in ${city.city}?`,
      answer: `${city.climate_factor} In addition, long duct runs with 90-degree elbows or unshielded exterior vent hoods allow lint to accumulate rapidly and attract nesting birds.`,
    },
    {
      question: `Do you comply with local ${city.city} building and fire codes?`,
      answer: `Yes. All our technicians adhere strictly to ${city.building_code || "International Residential Code (IRC Section M1502)"} and NFPA fire safety standards, using only UL 2158A approved rigid metal transition ducts and code-compliant exterior hoods.`,
    },
  ];
}
