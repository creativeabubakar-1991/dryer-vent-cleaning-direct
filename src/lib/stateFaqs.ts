import { StateData, CityData } from "@/types";
import { siteConfig } from "@/config/site.config";

export function generateStateFaqs(state: StateData, stateCities: CityData[]): { question: string; answer: string }[] {
  const cityNames = stateCities.slice(0, 5).map((c) => c.city).join(", ");
  const coverageSnippet = cityNames
    ? `including ${cityNames} and surrounding regions`
    : `across all counties and municipalities`;

  return [
    {
      question: `How often should dryer vents be cleaned in ${state.name}?`,
      answer: `In ${state.name}, the US Fire Administration and NFPA recommend professional dryer vent cleaning at least once every 12 months, or every 6 months for active families running 5 or more loads weekly. In ${state.name}, regional conditions (${state.fire_risk}) create additional thermal stress and lint buildup that increase dryer overheating hazards.`,
    },
    {
      question: `What are the residential dryer vent fire codes in ${state.name}?`,
      answer: `Dryer vent systems in ${state.name} must adhere to the International Residential Code (IRC Section M1502) and NFPA 211 safety guidelines. Exhaust ducts must consist of smooth-interior rigid metal piping, terminate directly outdoors with a backdraft damper, cannot exceed 35 equivalent feet (deducting 5 feet per 90° turn), and must never use interior-penetrating screws that collect lint.`,
    },
    {
      question: `How much does dryer vent cleaning cost in ${state.name}?`,
      answer: `We provide 100% free, transparent phone estimates across ${state.name} with no hidden fees and no obligations. Because duct lengths, roof versus side-wall terminations, and lint density vary by home, our dispatch specialists give you an exact upfront quote over the phone before dispatching a certified technician. Call ${siteConfig.phone} now.`,
    },
    {
      question: `How fast can a technician arrive at my home in ${state.name}?`,
      answer: `Our certified service vans provide priority same-day dispatch throughout ${state.name}, ${coverageSnippet}. Technicians typically arrive within 60 to 90 minutes for priority calls, and emergency 24/7 service is on standby for burning lint smells or severe dryer temperature spikes.`,
    },
    {
      question: `What methods do your ${state.name} technicians use to clean vents?`,
      answer: `Our certified technicians employ high-torque rotary brush assemblies powered down the full length of the duct combined with high-CFM HEPA negative-air extraction. This captures 100% of combustible lint, compacted blockages, and bird nesting material without releasing dust into your living space, verified by pre- and post-cleaning digital anemometer airflow testing.`,
    },
  ];
}
