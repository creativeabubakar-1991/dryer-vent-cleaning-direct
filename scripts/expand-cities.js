const fs = require('fs');
const path = require('path');

const citiesPath = path.join(__dirname, '..', 'src', 'data', 'cities.json');
const currentCities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

const newCities = [
  {
    city: "Austin",
    slug: "austin-tx",
    state: "TX",
    state_full: "Texas",
    county: "Travis County",
    tier: 1,
    population: 975000,
    zip_codes: ["78701", "78702", "78704", "78745", "78749", "78759"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Cedar pollen and live oak debris obstructing exterior exhaust hood",
      "Attic duct runs with excessive 90-degree elbows in two-story homes",
      "Lint accumulation causing high-limit thermostat failure in hot garages",
      "Transition foil crushed behind modern stackable laundry units"
    ],
    local_technicians: 8,
    neighborhoods: ["Downtown", "South Congress", "Zilker", "Mueller", "Tarrytown", "Circle C Ranch"],
    landmarks: ["Texas State Capitol", "Barton Springs Pool", "Lady Bird Lake", "Zilker Metropolitan Park"],
    climate_factor: "Extended 100°F+ Central Texas summer heat creates intense backpressure on clogged attic duct systems.",
    building_code: "City of Austin Residential Building Code Chapter 25-12 (IRC M1502 compliant)",
    nearby_cities: ["round-rock-tx", "cedar-park-tx", "georgetown-tx", "pflugerville-tx", "san-marcos-tx"],
    local_proof_point: "Direct technician vans roaming MoPac (Loop 1), I-35, and US-183 across Austin and Williamson County."
  },
  {
    city: "San Antonio",
    slug: "san-antonio-tx",
    state: "TX",
    state_full: "Texas",
    county: "Bexar County",
    tier: 1,
    population: 1450000,
    zip_codes: ["78205", "78209", "78216", "78230", "78249", "78258"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Caliche and limestone dust coating exterior dryer louvers",
      "Long horizontal duct runs through slab foundations accumulating heavy lint sludge",
      "Wasps and mud daubers sealing vent exit flaps",
      "Dryer cabinet scorching hot after normal 45-minute cycle"
    ],
    local_technicians: 9,
    neighborhoods: ["Stone Oak", "Alamo Heights", "Helotes", "King William", "Medical Center", "Shavano Park"],
    landmarks: ["The Alamo", "San Antonio River Walk", "Mission San Jose", "Tower of the Americas"],
    climate_factor: "South Texas heat and sudden humidity swings cause lint particles to coagulate into thick flammable mats.",
    building_code: "City of San Antonio Development Services Code Chapter 10 (IRC M1502)",
    nearby_cities: ["new-braunfels-tx", "boerne-tx", "schertz-tx", "cibolo-tx", "universal-city-tx"],
    local_proof_point: "Comprehensive dispatch across Loop 1604, Loop 410, and I-10 corridor throughout Bexar County."
  },
  {
    city: "San Diego",
    slug: "san-diego-ca",
    state: "CA",
    state_full: "California",
    county: "San Diego County",
    tier: 1,
    population: 1380000,
    zip_codes: ["92101", "92104", "92109", "92120", "92128", "92130"],
    response_time: "Same-day (Within 45-60 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Coastal marine layer moisture adhering lint to interior duct walls",
      "Multi-story condo long vertical booster duct lines clogged",
      "Exterior salt-air corrosion jamming damper flaps shut",
      "Dryers taking 2-3 cycles to dry towels and bedding"
    ],
    local_technicians: 10,
    neighborhoods: ["La Jolla", "Pacific Beach", "North Park", "Downtown", "Carmel Valley", "Chula Vista"],
    landmarks: ["Balboa Park", "USS Midway Museum", "Torrey Pines State Reserve", "Coronado Bridge"],
    climate_factor: "Coastal air combined with hot exhaust creates damp lint clogs that standard homeowner brushes cannot dislodge.",
    building_code: "City of San Diego Building Regulations (California Mechanical Code Title 24)",
    nearby_cities: ["chula-vista-ca", "oceanside-ca", "escondido-ca", "carlsbad-ca", "el-cajon-ca"],
    local_proof_point: "Equipped mobile service fleet covering I-5, I-805, and I-15 across San Diego County."
  },
  {
    city: "San Francisco",
    slug: "san-francisco-ca",
    state: "CA",
    state_full: "California",
    county: "San Francisco County",
    tier: 1,
    population: 810000,
    zip_codes: ["94102", "94107", "94110", "94114", "94118", "94123"],
    response_time: "Same-day (Within 45-60 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Historic Victorian tight laundry closets with twisted flexible ducts",
      "Rooftop penetrations requiring high-reach ladder access and specialized vacuuming",
      "Heavy marine layer fog making lint stick firmly to sheet metal seams",
      "Dryer error code D80/D90 triggering shutdown"
    ],
    local_technicians: 8,
    neighborhoods: ["Pacific Heights", "Mission District", "Marina", "Noe Valley", "Sunset District", "SoMa"],
    landmarks: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf", "Coit Tower"],
    climate_factor: "San Francisco's dense multi-level architecture often routes dryer exhaust 25+ vertical feet to the roof, increasing lint drop-out.",
    building_code: "San Francisco Department of Building Inspection (SF Building Code Section 504)",
    nearby_cities: ["oakland-ca", "san-mateo-ca", "berkeley-ca", "daly-city-ca", "san-rafael-ca"],
    local_proof_point: "Specialized compact service vans equipped for San Francisco hill parking and rooftop access."
  },
  {
    city: "San Jose",
    slug: "san-jose-ca",
    state: "CA",
    state_full: "California",
    county: "Santa Clara County",
    tier: 1,
    population: 980000,
    zip_codes: ["95110", "95112", "95120", "95125", "95129", "95134"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "High-tech home smart dryers locking out due to backpressure warnings",
      "Attic duct connections loosened by thermal expansion",
      "Bird and squirrel nesting behind stucco wall caps",
      "Long horizontal duct runs exceeding manufacturer 35ft specifications"
    ],
    local_technicians: 7,
    neighborhoods: ["Willow Glen", "Almaden Valley", "Rose Garden", "Downtown San Jose", "Silver Creek", "Santana Row"],
    landmarks: ["Winchester Mystery House", "Tech Interactive", "Santana Row", "Plaza de Cesar Chavez"],
    climate_factor: "Silicon Valley dry heat bakes lint into a combustible tinderbox inside uninsulated attic duct lines.",
    building_code: "City of San Jose Building Division (California Mechanical Code Section 504.4)",
    nearby_cities: ["sunnyvale-ca", "santa-clara-ca", "mountain-view-ca", "milpitas-ca", "campbell-ca"],
    local_proof_point: "Fast dispatch coverage across I-880, I-280, and US-101 throughout Santa Clara County."
  },
  {
    city: "Seattle",
    slug: "seattle-wa",
    state: "WA",
    state_full: "Washington",
    county: "King County",
    tier: 1,
    population: 750000,
    zip_codes: ["98101", "98103", "98105", "98109", "98115", "98122"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Pacific Northwest persistent dampness turning lint into thick, damp sludge",
      "Two-story roof vent terminations suffering moss and damp lint buildup",
      "Rodent intrusion into crawlspace flexible ducts",
      "Duct condensation dripping through ceiling drywall"
    ],
    local_technicians: 8,
    neighborhoods: ["Capitol Hill", "Ballard", "Queen Anne", "Fremont", "West Seattle", "Green Lake"],
    landmarks: ["Space Needle", "Pike Place Market", "Chihuly Garden and Glass", "Museum of Pop Culture"],
    climate_factor: "Persistent PNW moisture causes lint to stick and harden along duct ridges, severely reducing exhaust CFM.",
    building_code: "Seattle Department of Construction & Inspections (Seattle Mechanical Code Chapter 5)",
    nearby_cities: ["bellevue-wa", "redmond-wa", "renton-wa", "kirkland-wa", "edmonds-wa"],
    local_proof_point: "CDET technicians dispatching daily along I-5, I-90, and SR-520 throughout the Puget Sound."
  },
  {
    city: "Portland",
    slug: "portland-or",
    state: "OR",
    state_full: "Oregon",
    county: "Multnomah County",
    tier: 1,
    population: 650000,
    zip_codes: ["97201", "97205", "97209", "97211", "97214", "97219"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Moist PNW climate causing moldy lint buildup inside basement vents",
      "Stuck exterior gravity flappers allowing cold drafts and rodents inside",
      "Flexible foil transitions sagging and collecting wet lint pockets",
      "Overheated laundry rooms and extended drying times"
    ],
    local_technicians: 6,
    neighborhoods: ["Pearl District", "Hawthorne", "Alberta Arts", "Nob Hill", "Sellwood-Moreland", "St. Johns"],
    landmarks: ["Powell's City of Books", "Portland Japanese Garden", "Washington Park", "Pittock Mansion"],
    climate_factor: "High precipitation levels cause uninsulated crawlspace duct lines to act as moisture traps for lint.",
    building_code: "City of Portland Bureau of Development Services (Oregon Mechanical Specialty Code)",
    nearby_cities: ["beaverton-or", "hillsboro-or", "gresham-or", "tigard-or", "lake-oswego-or"],
    local_proof_point: "Direct service vans covering I-5, I-84, and I-205 throughout the Portland metro."
  },
  {
    city: "Las Vegas",
    slug: "las-vegas-nv",
    state: "NV",
    state_full: "Nevada",
    county: "Clark County",
    tier: 1,
    population: 660000,
    zip_codes: ["89101", "89109", "89117", "89123", "89134", "89148"],
    response_time: "Same-day (Within 45-60 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Attic duct temperatures topping 150°F during scorching Mojave desert summers",
      "Fine desert dust mixing with lint into combustible felt-like cakes",
      "Rooftop tile jacks clogged by pigeon nesting and windblown sand",
      "Emergency thermal fuse blowouts shutting down laundry operations"
    ],
    local_technicians: 9,
    neighborhoods: ["Summerlin", "Henderson", "Spring Valley", "Green Valley", "Centennial Hills", "Downtown"],
    landmarks: ["The Las Vegas Strip", "Fremont Street Experience", "Red Rock Canyon", "Bellagio Fountains"],
    climate_factor: "Extreme 115°F desert ambient heat makes lint fires ignite at dramatically lower appliance run temperatures.",
    building_code: "Clark County Building Department Regulations (Uniform Mechanical Code Chapter 5)",
    nearby_cities: ["henderson-nv", "north-las-vegas-nv", "boulder-city-nv", "enterprise-nv", "spring-valley-nv"],
    local_proof_point: "Dedicated service units active across I-15, US-95, and 215 Beltway 7 days a week."
  },
  {
    city: "Nashville",
    slug: "nashville-tn",
    state: "TN",
    state_full: "Tennessee",
    county: "Davidson County",
    tier: 1,
    population: 715000,
    zip_codes: ["37201", "37203", "37206", "37209", "37212", "37215"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Crawlspace duct runs coming disconnected from floor joists",
      "Heavy Southern humidity creating sticky lint buildup in crawlspaces",
      "Bird and starling nests filling exterior wall exhaust caps",
      "High backpressure causing dryer burning odors"
    ],
    local_technicians: 7,
    neighborhoods: ["East Nashville", "The Gulch", "Green Hills", "Germantown", "12 South", "Belle Meade"],
    landmarks: ["Grand Ole Opry", "Ryman Auditorium", "Parthenon at Centennial Park", "Broadway Historic District"],
    climate_factor: "Warm humid summers combined with freezing winter snaps create frequent condensation condensation inside vents.",
    building_code: "Metro Nashville Department of Codes and Building Safety (IRC M1502)",
    nearby_cities: ["franklin-tn", "brentwood-tn", "murfreesboro-tn", "hendersonville-tn", "mount-juliet-tn"],
    local_proof_point: "Mobile technicians stationed along I-65, I-24, and I-40 throughout Davidson and Williamson Counties."
  },
  {
    city: "Indianapolis",
    slug: "indianapolis-in",
    state: "IN",
    state_full: "Indiana",
    county: "Marion County",
    tier: 1,
    population: 880000,
    zip_codes: ["46201", "46204", "46220", "46240", "46250", "46268"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Freezing winter temperatures freezing exterior flapper dampers closed",
      "Basement horizontal duct runs exceeding 35ft without booster fans",
      "Mice and squirrel intrusion into unshielded plastic wall vents",
      "Two cycles required to dry everyday cotton loads"
    ],
    local_technicians: 7,
    neighborhoods: ["Broad Ripple", "Downtown Indy", "Fountain Square", "Carmel", "Fishers", "Castleton"],
    landmarks: ["Indianapolis Motor Speedway", "Monument Circle", "White River State Park", "Children's Museum"],
    climate_factor: "Midwestern sub-zero freezes cause damp exhaust steam to freeze inside ducts, causing sudden total blockages.",
    building_code: "City of Indianapolis Department of Business & Neighborhood Services (Indiana Residential Code)",
    nearby_cities: ["carmel-in", "fishers-in", "noblesville-in", "greenwood-in", "westfield-in"],
    local_proof_point: "Full Marion and Hamilton County coverage via I-465 loop, I-65, and I-69."
  },
  {
    city: "Columbus",
    slug: "columbus-oh",
    state: "OH",
    state_full: "Ohio",
    county: "Franklin County",
    tier: 1,
    population: 905000,
    zip_codes: ["43201", "43206", "43212", "43215", "43220", "43235"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Rigid metal ducts with interior screws that catch and snarl lint",
      "Cold winter condensation pooling in uninsulated basement lines",
      "Bird nests in exterior side-wall flappers during spring nesting",
      "Dryer error code D80/D90 triggering emergency shutdown"
    ],
    local_technicians: 7,
    neighborhoods: ["Short North", "German Village", "Clintonville", "Grandview Heights", "Dublin", "Upper Arlington"],
    landmarks: ["Ohio Statehouse", "Franklin Park Conservatory", "Ohio Stadium", "COSI Science Center"],
    climate_factor: "Ohio seasonal humidity shifts create alternating wet-and-dry lint layering that clogs rotary airflow.",
    building_code: "City of Columbus Department of Building & Zoning Services (Ohio Residential Code Section 1502)",
    nearby_cities: ["dublin-oh", "westerville-oh", "reynoldsburg-oh", "grove-city-oh", "upper-arlington-oh"],
    local_proof_point: "Rapid dispatch along I-270 Outerbelt, I-70, and I-71 across Greater Columbus."
  },
  {
    city: "Philadelphia",
    slug: "philadelphia-pa",
    state: "PA",
    state_full: "Pennsylvania",
    county: "Philadelphia County",
    tier: 1,
    population: 1570000,
    zip_codes: ["19102", "19103", "19107", "19123", "19130", "19147"],
    response_time: "Same-day (Within 45-60 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Historic rowhome tight vertical chimneys and long concealed duct runs",
      "Old vinyl and spiral wire transition ducts posing immediate fire hazards",
      "Brick exterior mortar crumbling around exhaust hood collars",
      "Scorching laundry room temperatures and burning odor"
    ],
    local_technicians: 11,
    neighborhoods: ["Center City", "Rittenhouse Square", "Fishtown", "Old City", "Manayunk", "Queen Village"],
    landmarks: ["Liberty Bell", "Independence Hall", "Philadelphia Museum of Art", "Reading Terminal Market"],
    climate_factor: "Dense historic rowhomes with unmaintained vertical runs cause severe lint backup and high fire danger.",
    building_code: "City of Philadelphia Department of Licenses and Inspections (IRC M1502 compliant)",
    nearby_cities: ["cherry-hill-nj", "bensalem-pa", "norristown-pa", "conshohocken-pa", "king-of-prussia-pa"],
    local_proof_point: "Dedicated city technicians equipped with HEPA negative-air equipment for historic rowhome layouts."
  },
  {
    city: "Boston",
    slug: "boston-ma",
    state: "MA",
    state_full: "Massachusetts",
    county: "Suffolk County",
    tier: 1,
    population: 675000,
    zip_codes: ["02108", "02114", "02116", "02127", "02130", "02138"],
    response_time: "Same-day (Within 45-60 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Multi-story brownstone vertical ducts with multiple 90-degree elbows",
      "New England winter ice freezing exterior louver flaps",
      "Stuck exterior dampers causing toxic carbon monoxide backdrafts in gas dryers",
      "Heavy lint buildup causing drying cycles to exceed 60 minutes"
    ],
    local_technicians: 8,
    neighborhoods: ["Back Bay", "Beacon Hill", "South End", "South Boston", "Cambridge", "Charlestown"],
    landmarks: ["Boston Common", "Faneuil Hall", "Fenway Park", "Freedom Trail"],
    climate_factor: "Northeastern blizzards and below-freezing temperatures freeze exterior vents solid if airflow is slow.",
    building_code: "City of Boston Inspectional Services Department (780 CMR Massachusetts State Building Code)",
    nearby_cities: ["cambridge-ma", "somerville-ma", "brookline-ma", "quincy-ma", "newton-ma"],
    local_proof_point: "Full Greater Boston and MetroWest dispatch via I-90 Mass Pike, I-93, and Route 128."
  },
  {
    city: "New York",
    slug: "new-york-ny",
    state: "NY",
    state_full: "New York",
    county: "New York County",
    tier: 1,
    population: 8300000,
    zip_codes: ["10001", "10011", "10021", "10025", "11201", "11215"],
    response_time: "Same-day (Within 45-60 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Apartment booster fans jammed by lint ropes and threads",
      "Pre-war building shared vertical riser shafts heavily clogged",
      "Flexible duct transitions banned under NYC mechanical code",
      "Dryers overheating and tripping building fire alarm sensors"
    ],
    local_technicians: 18,
    neighborhoods: ["Manhattan", "Brooklyn Heights", "Park Slope", "Astoria", "Upper East Side", "Williamsburg"],
    landmarks: ["Empire State Building", "Central Park", "Times Square", "One World Observatory"],
    climate_factor: "NYC high-density vertical venting creates massive backpressure when lint accumulates across multiple floors.",
    building_code: "NYC Department of Buildings Code Section MC 504 & FDNY Fire Prevention Standards",
    nearby_cities: ["jersey-city-nj", "hoboken-nj", "yonkers-ny", "white-plains-ny", "new-rochelle-ny"],
    local_proof_point: "Specialized high-capacity negative air vacuum equipment for 5-borough co-ops, condos, and townhomes."
  },
  {
    city: "Jacksonville",
    slug: "jacksonville-fl",
    state: "FL",
    state_full: "Florida",
    county: "Duval County",
    tier: 1,
    population: 950000,
    zip_codes: ["32202", "32204", "32207", "32224", "32225", "32256"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Florida coastal humidity turning dryer lint into sticky damp sludge",
      "Rooftop goose-neck vent caps clogged with pine needles and lint",
      "Lizards, frogs, and wasps nesting inside damper housings",
      "Dryers taking 2-3 cycles to dry beach towels and heavy laundry"
    ],
    local_technicians: 7,
    neighborhoods: ["San Marco", "Riverside", "Avondale", "Southside", "Mandarin", "Jacksonville Beach"],
    landmarks: ["St. Johns River", "TIAA Bank Field", "Cummer Museum", "Kathryn Abbey Hanna Park"],
    climate_factor: "Subtropical humidity causes wet lint to cement itself inside duct elbows, cutting airflow by up to 80%.",
    building_code: "City of Jacksonville Building Inspection Division (Florida Building Code - Mechanical Section 504)",
    nearby_cities: ["jacksonville-beach-fl", "orange-park-fl", "st-augustine-fl", "ponte-vedra-fl", "atlantic-beach-fl"],
    local_proof_point: "Active mobile teams stationed across I-295 beltway, I-95, and Butler Blvd throughout Duval & St. Johns."
  },
  {
    city: "Detroit",
    slug: "detroit-mi",
    state: "MI",
    state_full: "Michigan",
    county: "Wayne County",
    tier: 1,
    population: 630000,
    zip_codes: ["48201", "48207", "48221", "48226", "48301", "48067"],
    response_time: "Same-day (Within 45-75 Mins)",
    cleaning_price: "$99",
    price_range: "$99 - $149",
    common_faults: [
      "Harsh Michigan winter ice freezing exterior dampers shut",
      "Basement duct runs with improper slopes trapping condensation",
      "Dryer high-limit thermal switch repeatedly tripping",
      "Rodent intrusion into older crawlspace ducting"
    ],
    local_technicians: 8,
    neighborhoods: ["Downtown", "Midtown", "Corktown", "Palmer Woods", "Royal Oak", "Birmingham"],
    landmarks: ["Detroit Institute of Arts", "Campus Martius Park", "Fox Theatre", "Belle Isle"],
    climate_factor: "Sub-zero lake-effect freezes lock exterior vent hoods shut when hot moist exhaust condenses on icy metal.",
    building_code: "City of Detroit Buildings, Safety Engineering & Environmental Department (Michigan Residential Code)",
    nearby_cities: ["troy-mi", "royal-oak-mi", "dearborn-mi", "warren-mi", "livonia-mi"],
    local_proof_point: "Rapid dispatch across I-75, I-94, and I-696 throughout Metro Detroit and Oakland County."
  }
];

// Check existing slugs to avoid duplicates
const existingSlugs = new Set(currentCities.map(c => c.slug));
let addedCount = 0;

for (const city of newCities) {
  if (!existingSlugs.has(city.slug)) {
    currentCities.push(city);
    addedCount++;
  }
}

fs.writeFileSync(citiesPath, JSON.stringify(currentCities, null, 2), 'utf8');
console.log(`Successfully added ${addedCount} new cities! Total cities: ${currentCities.length}`);
