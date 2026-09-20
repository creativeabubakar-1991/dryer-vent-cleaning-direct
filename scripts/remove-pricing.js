const fs = require('fs');
const path = require('path');

// 1. Update services.json
const servicesPath = path.join(__dirname, '..', 'src', 'data', 'services.json');
let services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));

const costMap = {
  "residential-dryer-vent-cleaning": "Free Phone Estimate",
  "rooftop-dryer-vent-cleaning": "Free Phone Estimate",
  "dryer-vent-repair-replacement": "Free Phone Consultation",
  "dryer-vent-rerouting": "Free Phone Estimate",
  "bird-nest-pest-guard-installation": "Free Phone Estimate",
  "dryer-booster-fan-installation": "Free Phone Consultation",
  "commercial-dryer-vent-cleaning": "Custom Facility Quote",
  "air-duct-cleaning": "Free Whole-Home Quote"
};

services = services.map(s => {
  s.average_cost = costMap[s.slug] || "Free Phone Estimate";
  if (s.faqs) {
    s.faqs = s.faqs.map(f => {
      let ans = f.answer;
      ans = ans.replace(/\$18 to \$24 per month \(\$216 - \$288 annually\)/g, "up to 30% in monthly utility costs");
      ans = ans.replace(/saving up to \$100 compared/g, "saving significantly compared");
      return { ...f, answer: ans };
    });
  }
  return s;
});

fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2), 'utf8');
console.log('services.json updated successfully!');

// 2. Update cities.json
const citiesPath = path.join(__dirname, '..', 'src', 'data', 'cities.json');
let cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

cities = cities.map(c => {
  return {
    ...c,
    cleaning_price: "Free Estimate",
    price_range: "Upfront Phone Quote"
  };
});

fs.writeFileSync(citiesPath, JSON.stringify(cities, null, 2), 'utf8');
console.log(`cities.json updated successfully for all ${cities.length} cities!`);
