/* =========================================================
   special_tiles.js — Special Tiles Collection
   Architecture mirrors bathroom_floor.js exactly:
   - Array-index IDs (0-based)
   - colorsHex, colorImages, finishImages, sizeImages
   - pending → applied two-phase filter
   - active chips, sort, detail overlay, tabs
   ========================================================= */

/* ── Scroll to top ── */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ── Tile data ── */
const TILES = [
  /* ── GERM FREE ── */
  {
    id: 0,
    title: "PureShield Antimicrobial",
    tag: "GERM FREE · PURESHIELD ANTIMICROBIAL",
    category: "Germ Free",
    description:
      "Hospital-grade antimicrobial ceramic tiles with a 99.9% bacteria-reduction guarantee. The glazed surface is engineered for effortless cleaning and long-term hygiene in kitchens, hospitals, and wet areas.",
    colours: 2,
    finishes: 2,
    image: "./images/special_tiles_img1.jpg",
    badge: "Best Seller",
    thumbImages: [
      "./images/special_tiles_img1.jpg",
      "./images/special_tiles_img2.jpg",
      "./images/special_tiles_img3.jpg",
    ],
    colors: ["White", "Ivory"],
    colorsHex: { White: "#f8f8f8", Ivory: "#f5f0e8" },
    colorImages: {
      White: "./images/special_tiles_img1.jpg",
      Ivory: "./images/special_tiles_img2.jpg",
    },
    finishImages: {
      Glossy: "./images/special_tiles_img1.jpg",
      Matt: "./images/special_tiles_img2.jpg",
    },
    sizeImages: {},
    texture: "Antimicrobial",
    finish: ["Glossy", "Matt"],
    sizes: ["300×300", "300×600", "600×600"],
    surface: ["Antimicrobial", "Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-shield-virus",
        title: "99.9% Bacteria Reduction",
        desc: "Silver-ion antimicrobial technology permanently integrated into the glaze.",
      },
      {
        icon: "fa-solid fa-broom",
        title: "Easy to Clean",
        desc: "Ultra-smooth surface repels dirt and disinfects with minimal effort.",
      },
      {
        icon: "fa-solid fa-hospital",
        title: "Hospital-Grade Protection",
        desc: "Meets international hygiene standards for clinical and food-prep environments.",
      },
      {
        icon: "fa-solid fa-certificate",
        title: "10-Year Warranty",
        desc: "Backed by a decade-long manufacturer warranty for lasting confidence.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "300×600 mm",
      Finish: "Glossy / Matt",
      Usage: "Wall & Floor",
      "Antimicrobial Standard": "ISO 22196",
      "Bacteria Reduction": "99.9%",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1300 N",
      "Slip Resistance": "R9",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 1,
    title: "BioGuard Ceramic",
    tag: "GERM FREE · BIOGUARD CERAMIC",
    category: "Germ Free",
    description:
      "Silver-ion ceramic tiles carrying food-safe certification, built for hygienic commercial kitchens and residential bathrooms. Stain-resistant glaze in a range of sizes to suit any layout.",
    colours: 2,
    finishes: 2,
    image: "./images/special_tiles_img2.jpg",
    badge: null,
    thumbImages: [
      "./images/special_tiles_img2.jpg",
      "./images/special_tiles_img1.jpg",
    ],
    colors: ["White", "Light Grey"],
    colorsHex: { White: "#f8f8f8", "Light Grey": "#c8c8c8" },
    colorImages: {
      White: "./images/special_tiles_img2.jpg",
      "Light Grey": "./images/special_tiles_img1.jpg",
    },
    finishImages: {
      Glossy: "./images/special_tiles_img2.jpg",
      Satin: "./images/special_tiles_img1.jpg",
    },
    sizeImages: {},
    texture: "Antimicrobial",
    finish: ["Glossy", "Satin"],
    sizes: ["200×200", "300×300", "300×600", "600×600"],
    surface: ["Antimicrobial", "Stain Resistant", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-atom",
        title: "Silver-Ion Technology",
        desc: "Ions disrupt bacterial cell membranes for continuous protection.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Stain Resistant",
        desc: "Dense glaze prevents absorption of grease, coffee, and food pigments.",
      },
      {
        icon: "fa-solid fa-utensils",
        title: "Food-Safe Certified",
        desc: "Independently tested and certified for use in food preparation areas.",
      },
      {
        icon: "fa-solid fa-ruler-combined",
        title: "Various Sizes",
        desc: "Available in four standard formats for flexible design layouts.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "300×300 mm / 300×600 mm",
      Finish: "Glossy / Satin",
      Usage: "Wall & Floor",
      "Antimicrobial Standard": "JIS Z 2801",
      "Bacteria Reduction": "99.7%",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1300 N",
      "Slip Resistance": "R9",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 2,
    title: "CleanPlus Nano",
    tag: "GERM FREE · CLEANPLUS NANO",
    category: "Germ Free",
    description:
      "Next-generation nano-coating technology creates a self-cleaning surface that breaks down organic matter on contact with light. UV-resistant and backed by a 15-year warranty.",
    colours: 2,
    finishes: 1,
    image: "./images/special_tiles_img3.jpg",
    badge: "New",
    thumbImages: [
      "./images/special_tiles_img3.jpg",
      "./images/special_tiles_img1.jpg",
    ],
    colors: ["White", "Cream"],
    colorsHex: { White: "#f8f8f8", Cream: "#e8dcc8" },
    colorImages: {
      White: "./images/special_tiles_img3.jpg",
      Cream: "./images/special_tiles_img1.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img3.jpg",
    },
    sizeImages: {},
    texture: "Antimicrobial",
    finish: ["Matt"],
    sizes: ["300×600", "600×600", "600×1200"],
    surface: ["Antimicrobial", "Water Resistant", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-microscope",
        title: "Nano-Coating Technology",
        desc: "TiO₂ photocatalytic layer actively breaks down bacteria and pollutants.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Self-Cleaning Surface",
        desc: "UV light activates the coating to decompose organic contaminants.",
      },
      {
        icon: "fa-solid fa-cloud-sun",
        title: "UV Resistant",
        desc: "Colour and coating integrity maintained under prolonged UV exposure.",
      },
      {
        icon: "fa-solid fa-certificate",
        title: "15-Year Warranty",
        desc: "Extended warranty reflects the exceptional durability of nano technology.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "600×600 mm",
      Finish: "Matt",
      Usage: "Wall & Floor",
      "Antimicrobial Standard": "ISO 27447",
      "Coating Type": "TiO₂ Photocatalytic",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1600 N",
      "Slip Resistance": "R10",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },

  /* ── TACTILE ── */
  {
    id: 3,
    title: "SafeStep Guidance",
    tag: "TACTILE · SAFESTEP GUIDANCE",
    category: "Tactile",
    description:
      "ADA and ISO-compliant tactile guidance tiles with high-contrast colours and a slip-resistant surface. Designed for safe pedestrian navigation in public and private spaces, indoors and outdoors.",
    colours: 3,
    finishes: 1,
    image: "./images/special_tiles_img4.jpg",
    badge: "ADA Compliant",
    thumbImages: [
      "./images/special_tiles_img4.jpg",
      "./images/special_tiles_img5.jpg",
    ],
    colors: ["Yellow", "Red", "Grey"],
    colorsHex: { Yellow: "#f5c518", Red: "#c0392b", Grey: "#a0a0a0" },
    colorImages: {
      Yellow: "./images/special_tiles_img4.jpg",
      Red: "./images/special_tiles_img5.jpg",
      Grey: "./images/special_tiles_img6.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img4.jpg",
    },
    sizeImages: {},
    texture: "Tactile",
    finish: ["Matt"],
    sizes: ["300×300", "400×400", "600×600"],
    surface: ["Anti-Skid", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-universal-access",
        title: "ADA & ISO Compliant",
        desc: "Meets ADA Standards for Accessible Design and ISO 23599.",
      },
      {
        icon: "fa-solid fa-eye",
        title: "High-Contrast Colours",
        desc: "Vibrant colour options provide clear visual contrast for partially sighted users.",
      },
      {
        icon: "fa-solid fa-shoe-prints",
        title: "Slip-Resistant Surface",
        desc: "Raised dome and bar profiles offer R12-rated underfoot grip.",
      },
      {
        icon: "fa-solid fa-cloud-sun-rain",
        title: "Outdoor / Indoor Use",
        desc: "Frost-resistant body suitable for both exterior and interior applications.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "300×300 mm",
      Finish: "Matt",
      Usage: "Floor — Indoor & Outdoor",
      "Compliance Standard": "ADA / ISO 23599",
      "Profile Type": "Dome (Warning) / Bar (Directional)",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 2000 N",
      "Slip Resistance": "R12",
      "Frost Resistance": "Yes",
      Thickness: "10 mm",
    },
  },
  {
    id: 4,
    title: "UrbanTact Tile System",
    tag: "TACTILE · URBANTACT TILE SYSTEM",
    category: "Tactile",
    description:
      "Modular tactile tile system with custom pattern options and exceptional weather resistance. Designed for seamless integration into urban streetscapes, transit hubs, and commercial developments.",
    colours: 2,
    finishes: 1,
    image: "./images/special_tiles_img5.jpg",
    badge: null,
    thumbImages: [
      "./images/special_tiles_img5.jpg",
      "./images/special_tiles_img4.jpg",
    ],
    colors: ["Charcoal", "Sand"],
    colorsHex: { Charcoal: "#3a3530", Sand: "#d4b896" },
    colorImages: {
      Charcoal: "./images/special_tiles_img5.jpg",
      Sand: "./images/special_tiles_img4.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img5.jpg",
    },
    sizeImages: {},
    texture: "Tactile",
    finish: ["Matt"],
    sizes: ["300×300", "400×400"],
    surface: ["Anti-Skid", "Water Resistant", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-puzzle-piece",
        title: "Modular Installation",
        desc: "Interlocking system allows fast, precise installation by any qualified tiler.",
      },
      {
        icon: "fa-solid fa-sliders",
        title: "Custom Patterns",
        desc: "Mix directional and warning profiles to suit any pedestrian flow plan.",
      },
      {
        icon: "fa-solid fa-cloud-showers-heavy",
        title: "Weather Resistant",
        desc: "Dense porcelain body withstands freeze-thaw cycles and heavy rainfall.",
      },
      {
        icon: "fa-solid fa-infinity",
        title: "10-Year Durability",
        desc: "Engineered to retain profile definition and colour under heavy foot traffic.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "300×300 mm / 400×400 mm",
      Finish: "Matt",
      Usage: "Floor — Outdoor & Commercial",
      "Compliance Standard": "ISO 23599",
      "Profile Type": "Dome & Bar (Modular)",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 2200 N",
      "Slip Resistance": "R11",
      "Frost Resistance": "Yes",
      Thickness: "10 mm",
    },
  },
  {
    id: 5,
    title: "TactiFlow Pathway",
    tag: "TACTILE · TACTIFLOW PATHWAY",
    category: "Tactile",
    description:
      "Heavy-duty concrete-bodied tactile tiles offering directional and warning profiles for large public spaces. Low maintenance and available in custom colours to match existing paving schemes.",
    colours: 3,
    finishes: 1,
    image: "./images/special_tiles_img6.jpg",
    badge: "Best for Public Spaces",
    thumbImages: [
      "./images/special_tiles_img6.jpg",
      "./images/special_tiles_img4.jpg",
    ],
    colors: ["Grey", "Yellow", "Red"],
    colorsHex: { Grey: "#a0a0a0", Yellow: "#f5c518", Red: "#c0392b" },
    colorImages: {
      Grey: "./images/special_tiles_img6.jpg",
      Yellow: "./images/special_tiles_img4.jpg",
      Red: "./images/special_tiles_img5.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img6.jpg",
    },
    sizeImages: {},
    texture: "Tactile",
    finish: ["Matt"],
    sizes: ["300×300", "400×400", "500×500"],
    surface: ["Anti-Skid", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-signs-post",
        title: "Directional & Warning Tiles",
        desc: "Full range of bar (directional) and dome (warning) profiles included.",
      },
      {
        icon: "fa-solid fa-dumbbell",
        title: "High Durability Concrete",
        desc: "Dense concrete body handles the highest pedestrian traffic loads.",
      },
      {
        icon: "fa-solid fa-wrench",
        title: "Low Maintenance",
        desc: "Requires only periodic cleaning — no sealing or special treatments.",
      },
      {
        icon: "fa-solid fa-palette",
        title: "Custom Colours",
        desc: "Made-to-order colour matching for seamless integration into any project.",
      },
    ],
    tech: {
      Material: "High-Density Concrete",
      Size: "300×300 mm",
      Finish: "Matt",
      Usage: "Floor — Outdoor Public Spaces",
      "Compliance Standard": "ADA / BS 7997",
      "Profile Type": "Dome & Bar",
      "Compressive Strength": "≥ 50 MPa",
      "Breaking Strength": "≥ 2500 N",
      "Slip Resistance": "R12",
      "Frost Resistance": "Yes",
      Thickness: "12 mm",
    },
  },

  /* ── ANTI-STATIC ── */
  {
    id: 6,
    title: "StaticSafe ESD",
    tag: "ANTI-STATIC · STATICSAFE ESD",
    category: "Anti-Static",
    description:
      "IEC 61340-5-1 compliant ESD tiles with 10⁶–10⁹ Ω resistance range. Ideal for electronics manufacturing, server rooms, and cleanrooms where electrostatic discharge poses a risk to equipment and personnel.",
    colours: 2,
    finishes: 1,
    image: "./images/special_tiles_img10.jpg",
    badge: "ESD Certified",
    thumbImages: [
      "./images/special_tiles_img10.jpg",
      "./images/special_tiles_img11.jpg",
    ],
    colors: ["Grey", "Light Grey"],
    colorsHex: { Grey: "#a0a0a0", "Light Grey": "#c8c8c8" },
    colorImages: {
      Grey: "./images/special_tiles_img10.jpg",
      "Light Grey": "./images/special_tiles_img11.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img10.jpg",
    },
    sizeImages: {},
    texture: "Anti-Static",
    finish: ["Matt"],
    sizes: ["300×300", "600×600"],
    surface: ["Anti-Static", "Chemical Resistant", "Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-bolt",
        title: "ESD Certified",
        desc: "Meets IEC 61340-5-1 for electrostatic discharge protection in sensitive environments.",
      },
      {
        icon: "fa-solid fa-flask",
        title: "Chemical Resistant",
        desc: "Withstands cleaning agents and solvents used in laboratory environments.",
      },
      {
        icon: "fa-solid fa-grip-lines",
        title: "Seamless Installation",
        desc: "Conductive adhesive system creates a continuous earthing path across the floor.",
      },
      {
        icon: "fa-solid fa-gauge-high",
        title: "Precise Resistance Range",
        desc: "Consistent 10⁶–10⁹ Ω resistance tested across every batch.",
      },
    ],
    tech: {
      Material: "Conductive Porcelain",
      Size: "600×600 mm",
      Finish: "Matt",
      Usage: "Floor — ESD-Sensitive Areas",
      "ESD Standard": "IEC 61340-5-1",
      "Resistance Range": "10⁶ – 10⁹ Ω",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R10",
      "Chemical Resistance": "Class A",
      Thickness: "10 mm",
    },
  },
  {
    id: 7,
    title: "ElectroShield Conductive",
    tag: "ANTI-STATIC · ELECTROSHIELD CONDUCTIVE",
    category: "Anti-Static",
    description:
      "Carbon-fiber-reinforced conductive tiles engineered for cleanrooms and high-precision labs. Anti-slip surface and custom sizes available for bespoke facility layouts.",
    colours: 2,
    finishes: 1,
    image: "./images/special_tiles_img11.jpg",
    badge: null,
    thumbImages: [
      "./images/special_tiles_img11.jpg",
      "./images/special_tiles_img10.jpg",
    ],
    colors: ["Charcoal", "Dark Grey"],
    colorsHex: { Charcoal: "#3a3530", "Dark Grey": "#5a5a5a" },
    colorImages: {
      Charcoal: "./images/special_tiles_img11.jpg",
      "Dark Grey": "./images/special_tiles_img10.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img11.jpg",
    },
    sizeImages: {},
    texture: "Anti-Static",
    finish: ["Matt"],
    sizes: ["300×300", "600×600", "Custom"],
    surface: ["Anti-Static", "Anti-Skid", "Chemical Resistant"],
    features: [
      {
        icon: "fa-solid fa-layer-group",
        title: "Carbon Fiber Reinforced",
        desc: "Embedded carbon fibre lattice ensures uniform conductivity across the surface.",
      },
      {
        icon: "fa-solid fa-shoe-prints",
        title: "Anti-Slip Surface",
        desc: "Textured matt finish achieves R11 slip resistance for safe working floors.",
      },
      {
        icon: "fa-solid fa-industry",
        title: "For Cleanrooms & Labs",
        desc: "Meets Class ISO 5–8 cleanroom specifications for particulate control.",
      },
      {
        icon: "fa-solid fa-ruler",
        title: "Custom Sizes Available",
        desc: "Bespoke cutting service for non-standard facility dimensions.",
      },
    ],
    tech: {
      Material: "Carbon-Fibre Reinforced Porcelain",
      Size: "600×600 mm (Custom Available)",
      Finish: "Matt",
      Usage: "Floor — Cleanrooms & Labs",
      "ESD Standard": "IEC 61340-5-1 / ANSI ESD S20.20",
      "Resistance Range": "10⁵ – 10⁸ Ω",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 2000 N",
      "Slip Resistance": "R11",
      "Chemical Resistance": "Class A",
      Thickness: "10 mm",
    },
  },
  {
    id: 8,
    title: "GroundFlow Static Control",
    tag: "ANTI-STATIC · GROUNDFLOW STATIC CONTROL",
    category: "Anti-Static",
    description:
      "Heavy-duty industrial-grade static control tiles with easy grounding installation. Built for high-traffic manufacturing floors with a robust 20-year warranty.",
    colours: 2,
    finishes: 1,
    image: "./images/special_tiles_img12.jpg",
    badge: "Industrial Grade",
    thumbImages: [
      "./images/special_tiles_img12.jpg",
      "./images/special_tiles_img10.jpg",
    ],
    colors: ["Dark Grey", "Black"],
    colorsHex: { "Dark Grey": "#5a5a5a", Black: "#1a1814" },
    colorImages: {
      "Dark Grey": "./images/special_tiles_img12.jpg",
      Black: "./images/special_tiles_img10.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img12.jpg",
    },
    sizeImages: {},
    texture: "Anti-Static",
    finish: ["Matt"],
    sizes: ["600×600", "600×1200"],
    surface: [
      "Anti-Static",
      "Anti-Skid",
      "Scratch Resistant",
      "Chemical Resistant",
    ],
    features: [
      {
        icon: "fa-solid fa-hammer",
        title: "Heavy-Duty Construction",
        desc: "Reinforced porcelain body rated for forklift and heavy machinery loads.",
      },
      {
        icon: "fa-solid fa-people-arrows",
        title: "High-Traffic Areas",
        desc: "Abrasion class PEI V — designed for the most demanding industrial floors.",
      },
      {
        icon: "fa-solid fa-plug",
        title: "Easy Grounding Installation",
        desc: "Integrated grounding strips simplify connection to building earth systems.",
      },
      {
        icon: "fa-solid fa-medal",
        title: "20-Year Warranty",
        desc: "Industry-leading warranty backed by rigorous quality control.",
      },
    ],
    tech: {
      Material: "Heavy-Duty Conductive Porcelain",
      Size: "600×600 mm",
      Finish: "Matt",
      Usage: "Floor — Industrial & Manufacturing",
      "ESD Standard": "IEC 61340-5-1",
      "Resistance Range": "10⁶ – 10⁸ Ω",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 2500 N",
      "Slip Resistance": "R12",
      "Chemical Resistance": "Class A",
      Thickness: "12 mm",
    },
  },

  /* ── COOL ROOF ── */
  {
    id: 9,
    title: "EcoCool Solar Reflect",
    tag: "COOL ROOF · ECOCOOL SOLAR REFLECT",
    category: "Cool Roof",
    description:
      "Energy Star-rated roofing tile with an SRI value exceeding 78, reducing roof surface temperatures by up to 50°F. Delivers 30% greater cooling performance than standard roof tiles with a 50-year warranty.",
    colours: 3,
    finishes: 1,
    image: "./images/special_tiles_img7.jpg",
    badge: "Energy Star Rated",
    thumbImages: [
      "./images/special_tiles_img7.jpg",
      "./images/special_tiles_img8.jpg",
    ],
    colors: ["White", "Light Grey", "Cream"],
    colorsHex: { White: "#f8f8f8", "Light Grey": "#c8c8c8", Cream: "#e8dcc8" },
    colorImages: {
      White: "./images/special_tiles_img7.jpg",
      "Light Grey": "./images/special_tiles_img8.jpg",
      Cream: "./images/special_tiles_img9.jpg",
    },
    finishImages: {
      Glazed: "./images/special_tiles_img7.jpg",
    },
    sizeImages: {},
    texture: "Cool Roof",
    finish: ["Glazed"],
    sizes: ["330×420", "400×400"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-sun",
        title: "SRI Value > 78",
        desc: "Solar Reflectance Index exceeds Energy Star thresholds for steep-slope roofs.",
      },
      {
        icon: "fa-solid fa-temperature-arrow-down",
        title: "Reduces Roof Temp by 50°F",
        desc: "High reflectivity keeps the roof surface dramatically cooler on hot days.",
      },
      {
        icon: "fa-solid fa-thermometer-half",
        title: "30% Cooler Than Standard",
        desc: "Outperforms conventional roofing materials in independent laboratory tests.",
      },
      {
        icon: "fa-solid fa-medal",
        title: "50-Year Warranty",
        desc: "Half-century warranty covers structural integrity and reflective performance.",
      },
    ],
    tech: {
      Material: "Glazed Concrete",
      Size: "330×420 mm",
      Finish: "Glazed",
      Usage: "Roof — Residential & Commercial",
      "Energy Certification": "Energy Star",
      "SRI Value": "> 78",
      "Solar Reflectance": "≥ 0.65",
      "Thermal Emittance": "≥ 0.75",
      "Breaking Strength": "≥ 3000 N",
      "Frost Resistance": "Yes",
      Thickness: "15 mm",
    },
  },
  {
    id: 10,
    title: "ThermaTile Cool Roof",
    tag: "COOL ROOF · THERMATILE COOL ROOF",
    category: "Cool Roof",
    description:
      "Ceramic infrared-reflective roof tiles with Class A fire rating and mold & algae resistance. Eligible for energy tax credits — combining performance, safety, and long-term savings.",
    colours: 3,
    finishes: 1,
    image: "./images/special_tiles_img8.jpg",
    badge: null,
    thumbImages: [
      "./images/special_tiles_img8.jpg",
      "./images/special_tiles_img7.jpg",
    ],
    colors: ["White", "Terracotta", "Slate"],
    colorsHex: { White: "#f8f8f8", Terracotta: "#c8a87a", Slate: "#708090" },
    colorImages: {
      White: "./images/special_tiles_img8.jpg",
      Terracotta: "./images/special_tiles_img9.jpg",
      Slate: "./images/special_tiles_img7.jpg",
    },
    finishImages: {
      Glazed: "./images/special_tiles_img8.jpg",
    },
    sizeImages: {},
    texture: "Cool Roof",
    finish: ["Glazed"],
    sizes: ["330×420", "400×400"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-fire-extinguisher",
        title: "Class A Fire Rating",
        desc: "Highest fire-resistance classification for roofing materials.",
      },
      {
        icon: "fa-solid fa-seedling",
        title: "Mold & Algae Resistant",
        desc: "Biocidal glaze inhibits mold and algae growth over the tile's lifespan.",
      },
      {
        icon: "fa-solid fa-receipt",
        title: "Energy Tax Credit Eligible",
        desc: "Qualifies for residential energy efficiency tax credits in applicable regions.",
      },
      {
        icon: "fa-solid fa-wave-square",
        title: "Ceramic IR Reflective",
        desc: "Infrared-reflective pigments in the glaze reduce heat gain without sacrificing colour choice.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "330×420 mm",
      Finish: "Glazed",
      Usage: "Roof — Residential & Commercial",
      "Fire Rating": "Class A (ASTM E108)",
      "Solar Reflectance": "≥ 0.60",
      "Thermal Emittance": "≥ 0.80",
      "Breaking Strength": "≥ 2800 N",
      "Frost Resistance": "Yes",
      "Algae Resistance": "Yes",
      Thickness: "14 mm",
    },
  },
  {
    id: 11,
    title: "BreezeGuard Cool Tile",
    tag: "COOL ROOF · BREEZEGUARD COOL TILE",
    category: "Cool Roof",
    description:
      "Advanced thermal-emittance roofing tile that reduces air conditioning costs by up to 20%. Impact-resistant and available in multiple colours — engineered for the demands of hot climates.",
    colours: 4,
    finishes: 1,
    image: "./images/special_tiles_img9.jpg",
    badge: "Best for Hot Climates",
    thumbImages: [
      "./images/special_tiles_img9.jpg",
      "./images/special_tiles_img7.jpg",
    ],
    colors: ["White", "Beige", "Terracotta", "Slate"],
    colorsHex: {
      White: "#f8f8f8",
      Beige: "#c8a87a",
      Terracotta: "#b5541c",
      Slate: "#708090",
    },
    colorImages: {
      White: "./images/special_tiles_img9.jpg",
      Beige: "./images/special_tiles_img8.jpg",
      Terracotta: "./images/special_tiles_img7.jpg",
      Slate: "./images/special_tiles_img9.jpg",
    },
    finishImages: {
      Matt: "./images/special_tiles_img9.jpg",
    },
    sizeImages: {},
    texture: "Cool Roof",
    finish: ["Matt"],
    sizes: ["330×420", "400×400", "500×500"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-wind",
        title: "Advanced Thermal Emittance",
        desc: "High-emissivity coating releases absorbed heat rapidly into the atmosphere.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "Impact Resistant",
        desc: "Class 4 impact resistance rating withstands hail and falling debris.",
      },
      {
        icon: "fa-solid fa-snowflake",
        title: "Reduces AC Costs by 20%",
        desc: "Independent testing shows up to 20% reduction in air-conditioning energy use.",
      },
      {
        icon: "fa-solid fa-swatchbook",
        title: "Multiple Colours",
        desc: "Four standard colours plus custom options to suit any architectural style.",
      },
    ],
    tech: {
      Material: "High-Density Porcelain",
      Size: "400×400 mm",
      Finish: "Matt",
      Usage: "Roof — Hot Climate Residential & Commercial",
      "Solar Reflectance": "≥ 0.70",
      "Thermal Emittance": "≥ 0.85",
      "Impact Resistance": "Class 4 (UL 2218)",
      "Breaking Strength": "≥ 3200 N",
      "Frost Resistance": "Yes",
      "AC Cost Reduction": "Up to 20%",
      Thickness: "14 mm",
    },
  },
];

const FEATURED_IDS = [0, 3, 6, 9];

/* ── Two-phase filter state ── */
const pending = {
  categories: new Set(),
  finishes: new Set(),
  sizes: new Set(),
  surfaces: new Set(),
};
const applied = {
  categories: new Set(),
  finishes: new Set(),
  sizes: new Set(),
  surfaces: new Set(),
};

/* ── Filter helpers ── */
function copyState(src, dst) {
  Object.keys(dst).forEach((k) => {
    dst[k].clear();
    src[k].forEach((v) => dst[k].add(v));
  });
}

function getFiltered(state) {
  const total =
    state.categories.size +
    state.finishes.size +
    state.sizes.size +
    state.surfaces.size;
  if (total === 0) return TILES;
  return TILES.filter((t) => {
    if (state.categories.size > 0 && state.categories.has(t.category))
      return true;
    if (state.finishes.size > 0 && t.finish.some((f) => state.finishes.has(f)))
      return true;
    if (state.sizes.size > 0 && t.sizes.some((s) => state.sizes.has(s)))
      return true;
    if (state.surfaces.size > 0 && t.surface.some((s) => state.surfaces.has(s)))
      return true;
    return false;
  });
}

function getSorted(tiles) {
  const v = document.getElementById("sort-sel").value;
  const arr = [...tiles];
  if (v === "Name A–Z") arr.sort((a, b) => a.title.localeCompare(b.title));
  else if (v === "Name Z–A") arr.sort((a, b) => b.title.localeCompare(a.title));
  return arr;
}

/* ── Render product grid ── */
function renderGrid() {
  const container = document.getElementById("productsGrid");
  const tiles = getSorted(getFiltered(applied));
  document.getElementById("countNum").textContent = tiles.length;
  container.style.opacity = "0";
  setTimeout(() => {
    if (tiles.length === 0) {
      container.innerHTML = `<div class="no-results"><i class="fa-solid fa-filter-circle-xmark"></i><p>No tiles match your current filters.</p><button class="btn-primary" style="margin-top:1rem" onclick="clearAll()">Clear Filters</button></div>`;
    } else {
      container.innerHTML = "";
      tiles.forEach((tile) => {
        const card = document.createElement("div");
        card.className = "prod-card";
        card.innerHTML = `
          <div class="prod-img-wrap">
            <img src="${tile.image}" alt="${tile.title}" loading="lazy"/>
            ${tile.badge ? `<span class="prod-badge">${tile.badge}</span>` : ""}
          </div>
          <div class="prod-body">
            <p class="prod-tag">${tile.tag}</p>
            <h3 class="prod-name">${tile.title}</h3>
            <p class="prod-desc">${tile.description}</p>
            <div class="prod-meta">
              <span><strong>${tile.colours}</strong> Colour</span>
              <span><strong>${tile.finishes}</strong> Finish</span>
            </div>
          </div>
          <div class="prod-actions">
            <button class="prod-btn prod-btn-view" data-id="${tile.id}">View More <i class="fa-solid fa-plus"></i></button>
            <a href="https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}" target="_blank" class="prod-btn prod-btn-enquire">Enquire Now</a>
          </div>`;
        container.appendChild(card);
      });
    }
    container.style.transition = "opacity .2s";
    container.style.opacity = "1";
  }, 180);
}

/* ── Render active filter chips ── */
function renderChips() {
  const bar = document.getElementById("active-filter-chips");
  bar.innerHTML = "";
  const all = [
    ...[...applied.categories].map((v) => ({ v, g: "categories" })),
    ...[...applied.finishes].map((v) => ({ v, g: "finishes" })),
    ...[...applied.sizes].map((v) => ({ v, g: "sizes" })),
    ...[...applied.surfaces].map((v) => ({ v, g: "surfaces" })),
  ];
  all.forEach(({ v, g }) => {
    const chip = document.createElement("span");
    chip.className = "filter-chip";
    chip.innerHTML = `${v} <i class="fa-solid fa-xmark" style="font-size:9px"></i>`;
    chip.addEventListener("click", () => {
      applied[g].delete(v);
      pending[g].delete(v);
      syncUIFromPending();
      renderGrid();
      renderChips();
      updateApplyBtn();
    });
    bar.appendChild(chip);
  });
}

/* ── Update apply button count ── */
function updateApplyBtn() {
  const btn = document.getElementById("applyFiltersBtn");
  const preview = getFiltered(pending).length;
  const total =
    pending.categories.size +
    pending.finishes.size +
    pending.sizes.size +
    pending.surfaces.size;
  btn.innerHTML =
    total > 0
      ? `<i class="fa-solid fa-check"></i> Apply Filters (${preview})`
      : `<i class="fa-solid fa-check"></i> Apply Filters`;
}

/* ── Sync sidebar UI from pending state ── */
function syncUIFromPending() {
  document
    .querySelectorAll(".category-tag")
    .forEach((el) =>
      el.classList.toggle(
        "active",
        pending.categories.has(el.dataset.category),
      ),
    );
  document
    .querySelectorAll("[data-finish]")
    .forEach((cb) => (cb.checked = pending.finishes.has(cb.dataset.finish)));
  document
    .querySelectorAll(".size-tag")
    .forEach((el) =>
      el.classList.toggle("active", pending.sizes.has(el.dataset.size)),
    );
  document
    .querySelectorAll("[data-surface]")
    .forEach((cb) => (cb.checked = pending.surfaces.has(cb.dataset.surface)));
}

/* ── Clear all filters ── */
function clearAll() {
  Object.values(pending).forEach((s) => s.clear());
  Object.values(applied).forEach((s) => s.clear());
  syncUIFromPending();
  renderGrid();
  renderChips();
  updateApplyBtn();
}

/* ── Open detail overlay ── */
function openDetail(id) {
  const tile = TILES[id];
  if (!tile) return;

  document.getElementById("detailBreadcrumbName").textContent = tile.title;
  document.getElementById("detailTag").textContent = tile.tag;
  document.getElementById("detailName").textContent = tile.title;
  document.getElementById("detailDesc").textContent = tile.description;
  document.getElementById("detailMainImg").src = tile.image;
  document.getElementById("detailMainImg").alt = tile.title;

  const waMsg = encodeURIComponent(
    `Hello I would like to enquire about ${tile.title}`,
  );
  document.querySelectorAll("#detailEnquireWA").forEach((el) => {
    el.href = `https://wa.me/919843069220?text=${waMsg}`;
  });

  /* ── Thumbnails ── */
  const thumbImgs =
    tile.thumbImages && tile.thumbImages.length > 0
      ? tile.thumbImages
      : [tile.image];
  const thumbsEl = document.getElementById("detailThumbs");
  thumbsEl.innerHTML = "";
  thumbImgs.forEach((src, i) => {
    const d = document.createElement("div");
    d.className = "detail-thumb" + (i === 0 ? " active" : "");
    d.innerHTML = `<img src="${src}" alt="view ${i + 1}"/>`;
    d.addEventListener("click", () => {
      updateMainImage(src);
      thumbsEl
        .querySelectorAll(".detail-thumb")
        .forEach((t) => t.classList.remove("active"));
      d.classList.add("active");
    });
    thumbsEl.appendChild(d);
  });

  /* ── Spec table ── */
  const specRows = [
    ["Category", tile.category],
    ["Colours Available", tile.colours],
    ["Finishes", tile.finish.join(", ")],
    ["Sizes", tile.sizes.join(", ")],
    ["Surface", tile.surface.join(", ")],
  ];
  document.getElementById("detailSpecTable").innerHTML = specRows
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  /* ── Main image fade helper ── */
  function updateMainImage(newSrc) {
    const mainImg = document.getElementById("detailMainImg");
    mainImg.style.transition = "opacity 0.2s";
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = "1";
    }, 200);
  }

  /* ── Colors ── */
  document.getElementById("detailColors").innerHTML = tile.colors
    .map(
      (c, i) =>
        `<span class="detail-swatch${i === 0 ? " active" : ""}" title="${c}" style="background:${tile.colorsHex[c]}" data-color="${c}"></span>`,
    )
    .join("");
  document.querySelectorAll(".detail-swatch").forEach((sw) => {
    sw.addEventListener("click", () => {
      document
        .querySelectorAll(".detail-swatch")
        .forEach((s) => s.classList.remove("active"));
      sw.classList.add("active");
      updateMainImage(tile.colorImages[sw.dataset.color] || tile.image);
    });
  });

  /* ── Finishes ── */
  document.getElementById("detailFinishes").innerHTML = tile.finish
    .map(
      (f, i) =>
        `<span class="detail-finish-tag${i === 0 ? " active" : ""}" data-finish="${f}">${f}</span>`,
    )
    .join("");
  document.querySelectorAll(".detail-finish-tag").forEach((ft) => {
    ft.addEventListener("click", () => {
      document
        .querySelectorAll(".detail-finish-tag")
        .forEach((s) => s.classList.remove("active"));
      ft.classList.add("active");
      updateMainImage(tile.finishImages[ft.dataset.finish] || tile.image);
    });
  });

  /* ── Sizes ── */
  document.getElementById("detailSizes").innerHTML = tile.sizes
    .map(
      (s, i) =>
        `<button class="detail-size-btn${i === 0 ? " active" : ""}" data-size="${s}">${s}</button>`,
    )
    .join("");
  document.querySelectorAll(".detail-size-btn").forEach((sb) => {
    sb.addEventListener("click", () => {
      document
        .querySelectorAll(".detail-size-btn")
        .forEach((s) => s.classList.remove("active"));
      sb.classList.add("active");
      updateMainImage(tile.sizeImages[sb.dataset.size] || tile.image);
    });
  });

  /* ── Features ── */
  document.getElementById("detailFeaturesGrid").innerHTML = tile.features
    .map(
      (f) =>
        `<div class="feature-item"><i class="${f.icon}" aria-hidden="true"></i><h5>${f.title}</h5><p>${f.desc}</p></div>`,
    )
    .join("");

  /* ── Tech specs ── */
  document.getElementById("detailTechGrid").innerHTML = Object.entries(
    tile.tech,
  )
    .map(
      ([k, v]) =>
        `<div class="tech-spec-cell"><dt>${k}</dt><dd>${v}</dd></div>`,
    )
    .join("");

  /* ── Related tiles ── */
  const related = TILES.filter(
    (t) =>
      t.id !== tile.id &&
      (t.category === tile.category || t.texture === tile.texture),
  ).slice(0, 4);
  document.getElementById("relatedGrid").innerHTML = related
    .map(
      (t) =>
        `<div class="related-card" data-id="${t.id}">
        <div class="related-card-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div>
        <div class="related-card-body">
          <p class="related-card-tag">${t.tag}</p>
          <p class="related-card-name">${t.title}</p>
        </div>
      </div>`,
    )
    .join("");
  document
    .querySelectorAll(".related-card")
    .forEach((rc) =>
      rc.addEventListener("click", () => openDetail(parseInt(rc.dataset.id))),
    );

  /* ── Reset tabs ── */
  document
    .querySelectorAll(".detail-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".detail-tab-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelector('.detail-tab-btn[data-tab="features"]')
    .classList.add("active");
  document.getElementById("tab-features").classList.add("active");

  document.getElementById("detailOverlay").classList.add("open");
  document.getElementById("detailModal").scrollTop = 0;
  document.body.style.overflow = "hidden";
}

/* ── Close detail overlay ── */
function closeDetail() {
  document.getElementById("detailOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Render featured grid ── */
function renderFeatured() {
  document.getElementById("featuredGrid").innerHTML = FEATURED_IDS.map((id) => {
    const t = TILES[id];
    return `
      <div class="feat-card" data-id="${id}">
        <div class="feat-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div>
        <div class="feat-body">
          <p class="feat-tag">${t.tag}</p>
          <h4 class="feat-name">${t.title}</h4>
          <p class="feat-desc">${t.description}</p>
          <div class="feat-meta">
            <span><strong>${t.colours}</strong> Colour</span>
            <span><strong>${t.finishes}</strong> Finish</span>
          </div>
        </div>
      </div>`;
  }).join("");
  document
    .querySelectorAll(".feat-card")
    .forEach((fc) =>
      fc.addEventListener("click", () => openDetail(parseInt(fc.dataset.id))),
    );
}

/* ── DOM Ready ── */
document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  renderFeatured();

  /* Filter group accordion toggles */
  document
    .querySelectorAll(".filter-group-header")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".filter-group").classList.toggle("open"),
      ),
    );

  /* Category tags */
  document.querySelectorAll(".category-tag").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const c = el.dataset.category;
      if (el.classList.contains("active")) pending.categories.add(c);
      else pending.categories.delete(c);
      updateApplyBtn();
    }),
  );

  /* Finish checkboxes */
  document.querySelectorAll("[data-finish]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const f = cb.dataset.finish;
      if (cb.checked) pending.finishes.add(f);
      else pending.finishes.delete(f);
      updateApplyBtn();
    }),
  );

  /* Size tags */
  document.querySelectorAll(".size-tag").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const s = el.dataset.size;
      if (el.classList.contains("active")) pending.sizes.add(s);
      else pending.sizes.delete(s);
      updateApplyBtn();
    }),
  );

  /* Surface checkboxes */
  document.querySelectorAll("[data-surface]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const s = cb.dataset.surface;
      if (cb.checked) pending.surfaces.add(s);
      else pending.surfaces.delete(s);
      updateApplyBtn();
    }),
  );

  /* Apply filters button */
  document.getElementById("applyFiltersBtn").addEventListener("click", () => {
    copyState(pending, applied);
    renderGrid();
    renderChips();
    updateApplyBtn();
    const sb = document.getElementById("sidebar");
    if (sb && sb.classList.contains("mobile-open")) {
      sb.classList.remove("mobile-open");
      document.getElementById("mobileFilterToggle").innerHTML =
        '<i class="fa-solid fa-sliders"></i> Filters';
    }
  });

  /* Clear all */
  document.getElementById("clearAllBtn").addEventListener("click", clearAll);

  /* Sort */
  document.getElementById("sort-sel").addEventListener("change", renderGrid);

  /* Grid view toggle */
  const grid = document.getElementById("productsGrid");
  document.getElementById("btn3col").addEventListener("click", function () {
    grid.classList.remove("two-col");
    this.classList.add("active");
    document.getElementById("btn2col").classList.remove("active");
  });
  document.getElementById("btn2col").addEventListener("click", function () {
    grid.classList.add("two-col");
    this.classList.add("active");
    document.getElementById("btn3col").classList.remove("active");
  });

  /* Product card "View More" click */
  document.getElementById("productsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".prod-btn-view");
    if (btn) openDetail(parseInt(btn.dataset.id));
  });

  /* Detail overlay close */
  document.getElementById("detailClose").addEventListener("click", closeDetail);
  document.getElementById("detailOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("detailOverlay")) closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });

  /* Detail tabs */
  document.querySelectorAll(".detail-tab-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".detail-tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".detail-tab-panel")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    }),
  );

  /* Mobile filter toggle */
  const mobileFilterToggle = document.getElementById("mobileFilterToggle");
  if (mobileFilterToggle) {
    mobileFilterToggle.addEventListener("click", function () {
      const sb = document.getElementById("sidebar");
      sb.classList.toggle("mobile-open");
      this.innerHTML = sb.classList.contains("mobile-open")
        ? '<i class="fa-solid fa-xmark"></i> Close Filters'
        : '<i class="fa-solid fa-sliders"></i> Filters';
    });
  }

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", function (e) {
      const t = document.querySelector(this.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
      }
    }),
  );
});
