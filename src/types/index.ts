export type CityTier = 1 | 2 | 3;

export interface CityData {
  city: string;
  slug: string;
  state: string;
  state_full?: string;
  county: string;
  tier: CityTier;
  population: number;
  zip_codes: string[];
  response_time: string;
  cleaning_price: string;
  price_range: string;
  common_faults: string[];
  local_technicians: number;
  competition_level?: "Low" | "Medium" | "High";
  neighborhoods: string[];
  landmarks: string[];
  climate_factor: string;
  building_code?: string;
  nearby_cities: string[];
  local_proof_point: string;
}

export interface StateData {
  name: string;
  slug: string;
  abbr: string;
  capital: string;
  fire_risk: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  short_title: string;
  hero_description: string;
  average_cost: string;
  estimated_duration: string;
  symptoms: string[];
  diagnostic_steps: string[];
  faqs: { question: string; answer: string }[];
}

export interface SymptomData {
  title: string;
  slug: string;
  meta_description: string;
  symptom: string;
  primary_cause: string;
  fire_risk: string;
  recommended_action: string;
}

export interface GuideData {
  title: string;
  slug: string;
  excerpt: string;
  read_time: string;
  category: string;
}
