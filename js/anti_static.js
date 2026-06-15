/* ── Scroll to top ── */
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ── Anti Static Tile data (12 products) ── */
const ANTISTATIC_TILES = [
  {
    id: 0,
    title: "ESD Vinyl Sheet",
    tag: "SHEET ESD",
    description:
      "Homogeneous vinyl sheet flooring with permanent static‑dissipative properties. Seamless installation ideal for cleanrooms and operating theatres.",
    colours: 5,
    finishes: 1,
    image: "./images/vinyl.webp",
    badge: "Sheet",
    thumbImages: [
      "./images/vinyl1.webp",
      "./images/vinyl2.webp",
      "./images/vinyl3.webp",
      "./images/vinyl4.webp",
    ],
    colors: [
      "Checkerboard Gray",
      "Cream Beige",
      "Grass Green",
      "Light Oak Wood",
      "Rustic Slate Brown",
    ],
    colorsHex: {
      "Checkerboard Gray": "#A9A8A5",
      "Cream Beige": "#D7C9B8",
      "Grass Green": "#7FA06B",
      "Light Oak Wood": "#A79A86",
      "Rustic Slate Brown": "#7A6958",
    },
    colorImages: {
      "Checkerboard Gray": "./images/vinyl.webp",
      "Cream Beige": "./images/vinyl1.webp",
      "Grass Green": "./images/vinyl2.webp",
      "Light Oak Wood": "./images/vinyl3.webp",
      "Rustic Slate Brown": "./images/vinyl4.webp",
    },
    finishImages: { Matte: "./images/vinyl.webp" },
    sizeImages: { "Roll (2m × 20m)": "./images/vinyl.webp" },
    texture: "Smooth",
    finish: ["Matte"],
    sizes: ["Roll (2m × 20m)"],
    surface: ["ESD", "Chemical Resistant"],
    features: [
      {
        icon: "fa-solid fa-broom",
        title: "Seamless",
        desc: "No joints – easy to clean and maintain.",
      },
      {
        icon: "fa-solid fa-bolt",
        title: "Permanent ESD",
        desc: "Resistance 10⁶ – 10⁹ Ω throughout.",
      },
    ],
    tech: {
      Material: "Homogeneous Vinyl",
      Resistance: "10⁶ - 10⁹ Ω",
      Thickness: "2mm",
      Installation: "Welded seams",
    },
  },
  {
    id: 1,
    title: "Porcelain ESD Tile",
    tag: "PORCELAIN ESD",
    description:
      "High-load bearing anti-static porcelain, perfect for heavy machinery areas & cleanrooms.",
    colours: 5,
    finishes: 2,
    image: "./images/Porcelain.webp",
    badge: "Heavy Duty",
    thumbImages: [
      "./images/Porcelain1.webp",
      "./images/Porcelain2.webp",
      "./images/Porcelain3.webp",
      "./images/Porcelain4.webp",
    ],
    colors: ["Light Gray", "Graphite", "Off-White", "Slate", "Warm Beige"],
    colorsHex: {
      "Light Gray": "#D3D3D3",
      Graphite: "#4B4B4B",
      "Off-White": "#F5F5F5",
      Slate: "#708090",
      "Warm Beige": "#C8B69B",
    },
    colorImages: {
      "Light Gray": "./images/Porcelain.webp",
      Graphite: "./images/Porcelain1.webp",
      "Off-White": "./images/Porcelain2.webp",
      Slate: "./images/Porcelain3.webp",
      "Warm Beige": "./images/Porcelain4.webp",
    },
    finishImages: {
      Matte: "./images/Porcelain.webp",
      Polished: "./images/Porcelain1.webp",
    },
    sizeImages: {
      "600×600": "./images/Porcelain.webp",
      "800×800": "./images/Porcelain1.webp",
    },
    texture: "Stone",
    finish: ["Matte", "Polished"],
    sizes: ["600×600", "800×800"],
    surface: ["ESD", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-shield",
        title: "Permanent Conductivity",
        desc: "Homogeneous construction ensures lifelong ESD protection.",
      },
      {
        icon: "fa-solid fa-weight-hanging",
        title: "High Load Capacity",
        desc: "Suitable for heavy industrial equipment.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Resistance: "10⁶ - 10⁸ Ω",
      WaterAbsorption: "<0.1%",
      Thickness: "9mm",
    },
  },
  {
    id: 2,
    title: "Carbon Infused",
    tag: "CARBON INFUSED",
    description:
      "Carbon-dispersion technology for reliable static control in laboratories and cleanrooms.",
    colours: 5,
    finishes: 1,
    image: "./images/carbon.webp",
    badge: "Carbon",
    thumbImages: [
      "./images/carbon1.webp",
      "./images/carbon2.webp",
      "./images/carbon3.webp",
      "./images/carbon4.webp",
    ],
    colors: [
      "Carbon Black",
      "Dark Graphite",
      "Steel Gray",
      "Charcoal",
      "Slate",
    ],
    colorsHex: {
      "Carbon Black": "#2B2B2B",
      "Dark Graphite": "#3A3A3A",
      "Steel Gray": "#5A5A5A",
      Charcoal: "#4A4A4A",
      Slate: "#6A6A6A",
    },
    colorImages: {
      "Carbon Black": "./images/carbon.webp",
      "Dark Graphite": "./images/carbon1.webp",
      "Steel Gray": "./images/carbon2.webp",
      Charcoal: "./images/carbon3.webp",
      Slate: "./images/carbon4.webp",
    },
    finishImages: { Matte: "./images/carbon.webp" },
    sizeImages: {
      "600×600": "./images/carbon.webp",
      "300×600": "./images/carbon.webp",
    },
    texture: "Matte",
    finish: ["Matte"],
    sizes: ["600×600", "300×600"],
    surface: ["Anti-Static", "Chemical Resistant"],
    features: [
      {
        icon: "fa-solid fa-flask",
        title: "Chemical Resistance",
        desc: "Withstands cleaning agents and solvents.",
      },
      {
        icon: "fa-solid fa-charging-station",
        title: "Rapid Dissipation",
        desc: "<0.5 sec decay time.",
      },
    ],
    tech: {
      Material: "Carbon-Infused Vinyl",
      Resistance: "10⁶ Ω",
      Thickness: "2mm",
      "ESD Decay": "<0.5 sec",
    },
  },
  {
    id: 3,
    title: "ESD Rubber Tile",
    tag: "RUBBER ESD",
    description:
      "Soft, slip-resistant anti-static rubber for operating theaters and labs.",
    colours: 5,
    finishes: 1,
    image: "./images/Rubber.webp",
    badge: "Rubber",
    thumbImages: [
      "./images/Rubber1.webp",
      "./images/Rubber2.webp",
      "./images/Rubber3.webp",
      "./images/Rubber4.webp",
    ],
    colors: ["Slate Blue", "Charcoal", "Stone Gray", "Warm Taupe", "Mist"],
    colorsHex: {
      "Slate Blue": "#4A6B7A",
      Charcoal: "#3D3D3D",
      "Stone Gray": "#9E9E9E",
      "Warm Taupe": "#8B7355",
      Mist: "#C0C0C0",
    },
    colorImages: {
      "Slate Blue": "./images/Rubber.webp",
      Charcoal: "./images/Rubber1.webp",
      "Stone Gray": "./images/Rubber2.webp",
      "Warm Taupe": "./images/Rubber3.webp",
      Mist: "./images/Rubber4.webp",
    },
    finishImages: { Smooth: "./images/Rubber.webp" },
    sizeImages: { "500×500": "./images/Rubber.webp" },
    texture: "Rubber",
    finish: ["Smooth"],
    sizes: ["500×500"],
    surface: ["Anti-Fatigue", "ESD"],
    features: [
      {
        icon: "fa-solid fa-shoe-prints",
        title: "Ergonomic",
        desc: "Reduces fatigue for standing workers.",
      },
      {
        icon: "fa-solid fa-bolt",
        title: "Reliable ESD",
        desc: "Meets IEC 61340-5-1.",
      },
    ],
    tech: {
      Material: "Recycled Rubber",
      Resistance: "10⁶ - 10⁸ Ω",
      Thickness: "3mm",
    },
  },
  {
    id: 4,
    title: "Ceramic ESD Floor",
    tag: "CERAMIC ESD",
    description:
      "Glazed ceramic with conductive undercoat – aesthetics meets static control for showroom labs.",
    colours: 5,
    finishes: 1,
    image: "./images/Ceramicf.webp",
    badge: "Ceramic",
    thumbImages: [
      "./images/Ceramic1.webp",
      "./images/Ceramic2.webp",
      "./images/ceramic3.webp",
      "./images/ceramic4.webp",
    ],
    colors: ["Alabaster", "Stone Gray", "Warm Beige", "Slate", "Mist"],
    colorsHex: {
      Alabaster: "#F5F5F0",
      "Stone Gray": "#B8B5B0",
      "Warm Beige": "#D4C5B0",
      Slate: "#7A7A78",
      Mist: "#C8C6C2",
    },
    colorImages: {
      Alabaster: "./images/Ceramicf.webp",
      "Stone Gray": "./images/Ceramic1.webp",
      "Warm Beige": "./images/Ceramic2.webp",
      Slate: "./images/ceramic3.webp",
      Mist: "./images/ceramic4.webp",
    },
    finishImages: { Glossy: "./images/Ceramicf.webp" },
    sizeImages: { "600×600": "./images/Ceramicf.webp" },
    texture: "Smooth",
    finish: ["Glossy"],
    sizes: ["600×600"],
    surface: ["ESD", "Stain Proof"],
    features: [
      {
        icon: "fa-solid fa-brush",
        title: "Easy Clean",
        desc: "Non-porous, stain-resistant surface.",
      },
      {
        icon: "fa-solid fa-charging-station",
        title: "ESD Safe",
        desc: "Conductive backing ensures path to ground.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Resistance: "10⁶ - 10⁹ Ω",
      "Tile Type": "Bicotti",
    },
  },
  {
    id: 5,
    title: "Anti-Static Laminate",
    tag: "LAMINATE ESD",
    description:
      "Economical static-dissipative laminate for office electronics areas.",
    colours: 5,
    finishes: 1,
    image: "./images/laminatef.webp",
    badge: "Laminate",
    thumbImages: [
      "./images/Laminate1.webp",
      "./images/Laminate2.webp",
      "./images/Laminate3.webp",
      "./images/Laminate4.webp",
    ],
    colors: [
      "Natural Oak",
      "Warm Beige",
      "Mist Gray",
      "Parchment",
      "Soft Cream",
    ],
    colorsHex: {
      "Natural Oak": "#A58B72",
      "Warm Beige": "#CFC2AE",
      "Mist Gray": "#DDD8CB",
      Parchment: "#D0D4D7",
      "Soft Cream": "#E3E3E1",
    },
    colorImages: {
      "Natural Oak": "./images/laminatef.webp",
      "Warm Beige": "./images/Laminate1.webp",
      "Mist Gray": "./images/Laminate2.webp",
      Parchment: "./images/Laminate3.webp",
      "Soft Cream": "./images/Laminate4.webp",
    },
    finishImages: { Matte: "./images/laminatef.webp" },
    sizeImages: { "600×600": "./images/laminatef.webp" },
    texture: "Wood",
    finish: ["Matte"],
    sizes: ["600×600"],
    surface: ["ESD", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-leaf",
        title: "Eco-friendly",
        desc: "Low formaldehyde emissions.",
      },
      {
        icon: "fa-solid fa-desktop",
        title: "Office Ready",
        desc: "Ideal for workstations.",
      },
    ],
    tech: { Material: "HPL Laminate", Resistance: "10⁸ Ω", Thickness: "2mm" },
  },
  {
    id: 6,
    title: "Industrial Epoxy ESD",
    tag: "EPOXY ESD",
    description:
      "Heavy-duty epoxy-based anti-static flooring for warehouses and manufacturing plants.",
    colours: 5,
    finishes: 1,
    image: "./images/Industrial1.webp",
    badge: "Epoxy",
    thumbImages: [
      "./images/Industrial2.webp",
      "./images/Industrial3.webp",
      "./images/Industrial4.webp",
      "./images/Industrial5.webp",
    ],
    colors: [
      "Slate Gray",
      "Charcoal",
      "Warm Stone",
      "Steel Gray",
      "Dark Umber",
    ],
    colorsHex: {
      "Slate Gray": "#7A756E",
      Charcoal: "#5A5954",
      "Warm Stone": "#8A7A6D",
      "Steel Gray": "#75716A",
      "Dark Umber": "#5C5B57",
    },
    colorImages: {
      "Slate Gray": "./images/Industrial1.webp",
      Charcoal: "./images/Industrial2.webp",
      "Warm Stone": "./images/Industrial3.webp",
      "Steel Gray": "./images/Industrial4.webp",
      "Dark Umber": "./images/Industrial5.webp",
    },
    finishImages: { Gloss: "./images/Industrial1.webp" },
    sizeImages: {
      "600×600": "./images/Industrial1.webp",
      "800×800": "./images/Industrial1.webp",
    },
    texture: "Smooth",
    finish: ["Gloss"],
    sizes: ["600×600", "800×800"],
    surface: ["Chemical Resistant", "ESD"],
    features: [
      {
        icon: "fa-solid fa-oil-can",
        title: "Chemical Resistant",
        desc: "Withstands oils, solvents, and heavy cleaning.",
      },
      {
        icon: "fa-solid fa-weight-hanging",
        title: "Heavy Load",
        desc: "Supports forklifts and heavy machinery.",
      },
    ],
    tech: {
      Material: "Epoxy Resin",
      Resistance: "10⁶ - 10⁸ Ω",
      Thickness: "3mm",
      "Cure Time": "24 hours",
    },
  },
  {
    id: 7,
    title: "Static Control Carpet Tile",
    tag: "CARPET ESD",
    description:
      "Conductive fiber carpet tiles for cleanrooms and data centers. Soft underfoot, static safe.",
    colours: 5,
    finishes: 1,
    image: "./images/carpet.WEBP",
    badge: "Carpet",
    thumbImages: [
      "./images/carpet1.WEBP",
      "./images/carpet2.jpg",
      "./images/carpet3.WEBP",
      "./images/carpet4.WEBP",
    ],
    colors: [
      "Warm Taupe",
      "Deep Teal",
      "Olive Green",
      "Charcoal Brown",
      "Slate Blue",
    ],
    colorsHex: {
      "Warm Taupe": "#8B8177",
      "Deep Teal": "#36586A",
      "Olive Green": "#7A7A71",
      "Charcoal Brown": "#665E57",
      "Slate Blue": "#646B79",
    },
    colorImages: {
      "Warm Taupe": "./images/carpet.WEBP",
      "Deep Teal": "./images/carpet1.WEBP",
      "Olive Green": "./images/carpet2.jpg",
      "Charcoal Brown": "./images/carpet3.WEBP",
      "Slate Blue": "./images/carpet4.WEBP",
    },
    finishImages: { Textured: "./images/carpet.WEBP" },
    sizeImages: { "500×500": "./images/carpet.WEBP" },
    texture: "Fabric",
    finish: ["Textured"],
    sizes: ["500×500"],
    surface: ["ESD", "Anti-Fatigue"],
    features: [
      {
        icon: "fa-solid fa-cloud",
        title: "Soft & Quiet",
        desc: "Reduces noise and provides walking comfort.",
      },
      {
        icon: "fa-solid fa-bolt",
        title: "Static Safe",
        desc: "Conductive fibers dissipate static charge.",
      },
    ],
    tech: {
      Material: "Nylon with conductive yarn",
      Resistance: "10⁶ - 10⁹ Ω",
      Thickness: "6mm",
      "Fire Rating": "Class 1",
    },
  },
  {
    id: 8,
    title: "Quartz ESD Flooring",
    tag: "QUARTZ ESD",
    description:
      "Decorative quartz aggregate with conductive properties. Ideal for showrooms and labs.",
    colours: 5,
    finishes: 1,
    image: "./images/Quartz1.jpg",
    badge: "Quartz",
    thumbImages: [
      "./images/Quartz2.jpg",
      "./images/Quartz3.webp",
      "./images/Quartz4.jpg",
      "./images/Quartz5.webp",
    ],
    colors: [
      "Mist Quartz",
      "Slate Quartz",
      "Pewter Quartz",
      "Cream Quartz",
      "Pearl Quartz",
    ],
    colorsHex: {
      "Mist Quartz": "#D0D3D6",
      "Slate Quartz": "#9DA4AD",
      "Pewter Quartz": "#B7B6B3",
      "Cream Quartz": "#D9D3CB",
      "Pearl Quartz": "#E6E0D7",
    },
    colorImages: {
      "Mist Quartz": "./images/Quartz1.jpg",
      "Slate Quartz": "./images/Quartz2.jpg",
      "Pewter Quartz": "./images/Quartz3.webp",
      "Cream Quartz": "./images/Quartz4.jpg",
      "Pearl Quartz": "./images/Quartz5.webp",
    },
    finishImages: { Polished: "./images/Quartz1.jpg" },
    sizeImages: { "600×600": "./images/Quartz1.jpg" },
    texture: "Stone",
    finish: ["Polished"],
    sizes: ["600×600"],
    surface: ["ESD", "Stain Proof"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Luxury Appearance",
        desc: "Sparkling quartz finish with ESD safety.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy Maintenance",
        desc: "Non-porous and stain resistant.",
      },
    ],
    tech: {
      Material: "Quartz & Resin",
      Resistance: "10⁶ - 10⁹ Ω",
      Thickness: "8mm",
      "Abrasion Resistance": "High",
    },
  },
  {
    id: 9,
    title: "Dissipative Cork Tile",
    tag: "CORK ESD",
    description:
      "Sustainable cork flooring with static-dissipative properties. Perfect for eco-friendly labs, offices, and quiet zones.",
    colours: 5,
    finishes: 1,
    image: "./images/Dissipative.webp",
    badge: "Cork",
    thumbImages: [
      "./images/Dissipative2.webp",
      "./images/Dissipative3.webp",
      "./images/Dissipative4.webp",
      "./images/Dissipative5.webp",
    ],
    colors: [
      "Natural Cork",
      "Sand Cork",
      "Amber Cork",
      "Cream Cork",
      "Mist Cork",
    ],
    colorsHex: {
      "Natural Cork": "#B78A5A",
      "Sand Cork": "#B9A68D",
      "Amber Cork": "#B68449",
      "Cream Cork": "#D7C4AC",
      "Mist Cork": "#B8B4B1",
    },
    colorImages: {
      "Natural Cork": "./images/Dissipative.webp",
      "Sand Cork": "./images/Dissipative2.webp",
      "Amber Cork": "./images/Dissipative3.webp",
      "Cream Cork": "./images/Dissipative4.webp",
      "Mist Cork": "./images/Dissipative5.webp",
    },
    finishImages: { Matte: "./images/Dissipative.webp" },
    sizeImages: { "300×600": "./images/Dissipative.webp" },
    texture: "Wood",
    finish: ["Matte"],
    sizes: ["300×600"],
    surface: ["ESD", "Eco-Friendly"],
    features: [
      {
        icon: "fa-solid fa-leaf",
        title: "Sustainable",
        desc: "Renewable cork material, biodegradable.",
      },
      {
        icon: "fa-solid fa-shoe-prints",
        title: "Comfortable",
        desc: "Soft and warm underfoot, reduces fatigue.",
      },
      {
        icon: "fa-solid fa-volume-off",
        title: "Sound Absorbing",
        desc: "Natural acoustic insulation for quiet spaces.",
      },
    ],
    tech: {
      Material: "Cork with conductive coating",
      Resistance: "10⁸ Ω",
      Thickness: "4mm",
      "Thermal Insulation": "Yes",
      "Sound Absorption": "High",
    },
  },
  {
    id: 10,
    title: "Stainless Steel ESD Tile",
    tag: "STEEL ESD",
    description:
      "Heavy-duty stainless steel tiles with conductive core. For explosive environments and high-traffic areas.",
    colours: 5,
    finishes: 1,
    image: "./images/stainlessf.webp",
    badge: "Metal",
    thumbImages: [
      "./images/stainless1.webp",
      "./images/stainless2.webp",
      "./images/stainless3.webp",
      "./images/stainless4.webp",
    ],
    colors: [
      "Dark Steel",
      "Light Steel",
      "Silver Gray",
      "Warm Beige",
      "Champagne",
    ],
    colorsHex: {
      "Dark Steel": "#4A4744",
      "Light Steel": "#C9C8C6",
      "Silver Gray": "#9A9A99",
      "Warm Beige": "#D6D4CF",
      Champagne: "#D6C5AE",
    },
    colorImages: {
      "Dark Steel": "./images/stainless.webp",
      "Light Steel": "./images/stainless1.webp",
      "Silver Gray": "./images/stainless2.webp",
      "Warm Beige": "./images/stainless3.webp",
      Champagne: "./images/stainless4.webp",
    },
    finishImages: { Brushed: "./images/stainless.webp" },
    sizeImages: { "600×600": "./images/stainless.webp" },
    texture: "Metal",
    finish: ["Brushed"],
    sizes: ["600×600"],
    surface: ["ESD", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-fire",
        title: "Fire Resistant",
        desc: "Non-combustible, ideal for hazardous areas.",
      },
      {
        icon: "fa-solid fa-weight-hanging",
        title: "Extreme Durability",
        desc: "Withstands heavy traffic and impacts.",
      },
    ],
    tech: {
      Material: "Stainless Steel + Conductive Core",
      Resistance: "< 10⁶ Ω",
      Thickness: "3mm",
      "Slip Resistance": "High",
    },
  },
  {
    id: 11,
    title: "Conductive Terrazzo",
    tag: "TERRAZZO ESD",
    description:
      "Classic terrazzo look with integrated carbon fibers for static control. Architectural and functional.",
    colours: 5,
    finishes: 2,
    image: "./images/ConductiveTerrazzo1.webp",
    badge: "Terrazzo",
    thumbImages: [
      "./images/ConductiveTerrazzo2.webp",
      "./images/ConductiveTerrazzo3.webp",
      "./images/ConductiveTerrazzo4.webp",
      "./images/ConductiveTerrazzo5.webp",
    ],
    colors: [
      "Soft Ivory Gray",
      "Mist Gray",
      "Charcoal Black",
      "Stone Gray",
      "Pearl Gray",
    ],
    colorsHex: {
      "Soft Ivory Gray": "#D7D4CD",
      "Mist Gray": "#D5D8D7",
      "Charcoal Black": "#303133",
      "Stone Gray": "#C8C5BE",
      "Pearl Gray": "#CCCDCB",
    },
    colorImages: {
      "Soft Ivory Gray": "./images/ConductiveTerrazzo1.webp",
      "Mist Gray": "./images/ConductiveTerrazzo2.webp",
      "Charcoal Black": "./images/ConductiveTerrazzo3.webp",
      "Stone Gray": "./images/ConductiveTerrazzo4.webp",
      "Pearl Gray": "./images/ConductiveTerrazzo5.webp",
    },
    finishImages: {
      Polished: "./images/ConductiveTerrazzo1.webp",
      Matte: "./images/ConductiveTerrazzo2.webp",
    },
    sizeImages: { "600×600": "./images/ConductiveTerrazzo1.webp" },
    texture: "Stone",
    finish: ["Polished", "Matte"],
    sizes: ["600×600"],
    surface: ["ESD", "Stain Proof"],
    features: [
      {
        icon: "fa-solid fa-palette",
        title: "Design Flexibility",
        desc: "Custom chip colors and patterns available.",
      },
      {
        icon: "fa-solid fa-infinity",
        title: "Long Life",
        desc: "Decades of durability with proper maintenance.",
      },
    ],
    tech: {
      Material: "Marble Chips + Conductive Binder",
      Resistance: "10⁶ - 10⁹ Ω",
      Thickness: "12mm",
      "Compressive Strength": "High",
    },
  },
];

const FEATURED_IDS = [0, 3, 6, 9];
const pending = {
  colors: new Set(),
  textures: new Set(),
  finishes: new Set(),
  sizes: new Set(),
  surfaces: new Set(),
};
const applied = {
  colors: new Set(),
  textures: new Set(),
  finishes: new Set(),
  sizes: new Set(),
  surfaces: new Set(),
};

/* ── Filter helpers (identical to bedroom_wall.js) ── */
function copyState(src, dst) {
  Object.keys(dst).forEach((k) => {
    dst[k].clear();
    src[k].forEach((v) => dst[k].add(v));
  });
}

function getFiltered(state) {
  const total =
    state.colors.size +
    state.textures.size +
    state.finishes.size +
    state.sizes.size +
    state.surfaces.size;
  if (total === 0) return ANTISTATIC_TILES;
  return ANTISTATIC_TILES.filter((t) => {
    if (state.colors.size && t.colors.some((c) => state.colors.has(c)))
      return true;
    if (state.textures.size && state.textures.has(t.texture)) return true;
    if (state.finishes.size && t.finish.some((f) => state.finishes.has(f)))
      return true;
    if (state.sizes.size && t.sizes.some((s) => state.sizes.has(s)))
      return true;
    if (state.surfaces.size && t.surface.some((s) => state.surfaces.has(s)))
      return true;
    return false;
  });
}

function getSorted(tiles) {
  const v = document.getElementById("sort-sel")?.value;
  const arr = [...tiles];
  if (v === "Name A–Z") arr.sort((a, b) => a.title.localeCompare(b.title));
  else if (v === "Name Z–A") arr.sort((a, b) => b.title.localeCompare(a.title));
  return arr;
}

/* ── Render product grid ── */
function renderGrid() {
  const container = document.getElementById("productsGrid");
  if (!container) return;
  const tiles = getSorted(getFiltered(applied));
  document.getElementById("countNum").textContent = tiles.length;
  container.style.opacity = "0";
  setTimeout(() => {
    if (tiles.length === 0) {
      container.innerHTML = `<div class="no-results"><i class="fa-solid fa-filter-circle-xmark"></i><p>No anti‑static tiles match your current filters.</p><button class="btn-primary" style="margin-top:1rem" onclick="clearAll()">Clear Filters</button></div>`;
    } else {
      container.innerHTML = "";
      tiles.forEach((tile) => {
        const card = document.createElement("div");
        card.className = "prod-card";
        let shortDesc =
          tile.description.length > 100
            ? tile.description.substring(0, 97) + "..."
            : tile.description;
        card.innerHTML = `
          <div class="prod-img-wrap"><img src="${tile.image}" alt="${tile.title}" loading="lazy"/><span class="prod-badge">${tile.badge}</span><button class="prod-wish" aria-label="Save to wishlist"><i class="fa-regular fa-heart"></i></button></div>
          <div class="prod-body"><p class="prod-tag">${tile.tag}</p><h3 class="prod-name">${tile.title}</h3><p class="prod-desc">${shortDesc}</p><div class="prod-meta"><span><strong>${tile.colours}</strong> Colour${tile.colours !== 1 ? "s" : ""}</span><span><strong>${tile.finishes}</strong> Finish${tile.finishes !== 1 ? "es" : ""}</span></div></div>
          <div class="prod-actions"><button class="prod-btn prod-btn-view" data-id="${tile.id}">View More <i class="fa-solid fa-plus"></i></button><a href="https://wa.me/919843069220?text=Enquiry:%20Anti%20Static%20${encodeURIComponent(tile.title)}" target="_blank" class="prod-btn prod-btn-enquire">Enquire Now</a></div>
        `;
        container.appendChild(card);
      });
      document.querySelectorAll(".prod-btn-view").forEach((btn) =>
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          openDetail(parseInt(btn.dataset.id));
        }),
      );
    }
    container.style.transition = "opacity .2s";
    container.style.opacity = "1";
  }, 50);
}

/* ── Render active filter chips ── */
function renderChips() {
  const bar = document.getElementById("active-filter-chips");
  if (!bar) return;
  bar.innerHTML = "";
  const all = [
    ...[...applied.colors].map((v) => ({ v, g: "colors" })),
    ...[...applied.textures].map((v) => ({ v, g: "textures" })),
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

function updateApplyBtn() {
  const btn = document.getElementById("applyFiltersBtn");
  if (!btn) return;
  const preview = getFiltered(pending).length;
  const total =
    pending.colors.size +
    pending.textures.size +
    pending.finishes.size +
    pending.sizes.size +
    pending.surfaces.size;
  btn.innerHTML =
    total > 0
      ? `<i class="fa-solid fa-check"></i> Apply Filters (${preview})`
      : `<i class="fa-solid fa-check"></i> Apply Filters`;
}

function syncUIFromPending() {
  document
    .querySelectorAll(".swatch-item")
    .forEach((el) =>
      el.classList.toggle("active", pending.colors.has(el.dataset.color)),
    );
  document
    .querySelectorAll(".texture-thumb")
    .forEach((el) =>
      el.classList.toggle("active", pending.textures.has(el.dataset.texture)),
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

window.clearAll = function () {
  Object.values(pending).forEach((s) => s.clear());
  Object.values(applied).forEach((s) => s.clear());
  syncUIFromPending();
  renderGrid();
  renderChips();
  updateApplyBtn();
};

/* ── Open detail overlay (exact structure as bedroom_wall.js) ── */
function openDetail(id) {
  const tile = ANTISTATIC_TILES[id];
  if (!tile) return;
  document.getElementById("detailBreadcrumbName").textContent = tile.title;
  document.getElementById("detailTag").textContent = tile.tag;
  document.getElementById("detailName").textContent = tile.title;
  document.getElementById("detailDesc").textContent = tile.description;
  const mainImg = document.getElementById("detailMainImg");
  mainImg.src = tile.image;
  const waLink = `https://wa.me/919843069220?text=Enquiry:%20Anti%20Static%20${encodeURIComponent(tile.title)}`;
  document.getElementById("detailEnquireWA").href = waLink;
  document.getElementById("detailEnquireWA2").href = waLink;

  // Thumbnails
  const thumbImgs =
    tile.thumbImages && tile.thumbImages.length
      ? tile.thumbImages
      : [tile.image];
  const thumbsEl = document.getElementById("detailThumbs");
  if (thumbsEl) {
    thumbsEl.innerHTML = "";
    thumbImgs.forEach((src, i) => {
      const d = document.createElement("div");
      d.className = "detail-thumb" + (i === 0 ? " active" : "");
      d.innerHTML = `<img src="${src}" alt="view ${i + 1}"/>`;
      d.addEventListener("click", () => {
        mainImg.src = src;
        thumbsEl
          .querySelectorAll(".detail-thumb")
          .forEach((t) => t.classList.remove("active"));
        d.classList.add("active");
      });
      thumbsEl.appendChild(d);
    });
  }

  // Spec table
  const specRows = [
    ["Texture", tile.texture],
    ["Colours Available", tile.colours],
    ["Finishes", tile.finish.join(", ")],
    ["Sizes", tile.sizes.join(", ")],
    ["Surface", tile.surface.join(", ")],
    ["Resistance", tile.tech.Resistance || "10⁶-10⁹ Ω"],
  ];
  const specTable = document.getElementById("detailSpecTable");
  if (specTable)
    specTable.innerHTML = specRows
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
      .join("");

  function updateMainImage(newSrc) {
    if (!mainImg) return;
    mainImg.style.transition = "opacity 0.2s";
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = "1";
    }, 200);
  }

  // Colors
  const detailColors = document.getElementById("detailColors");
  if (detailColors) {
    detailColors.innerHTML = tile.colors
      .map(
        (c, i) =>
          `<span class="detail-swatch${i === 0 ? " active" : ""}" title="${c}" style="background:${tile.colorsHex[c] || "#ccc"}" data-color="${c}"></span>`,
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
  }

  // Finishes
  const detailFinishes = document.getElementById("detailFinishes");
  if (detailFinishes) {
    detailFinishes.innerHTML = tile.finish
      .map(
        (f, i) =>
          `<span class="detail-finish-tag${i === 0 ? " active" : ""}">${f}</span>`,
      )
      .join("");
    document.querySelectorAll(".detail-finish-tag").forEach((ft) => {
      ft.addEventListener("click", () => {
        document
          .querySelectorAll(".detail-finish-tag")
          .forEach((s) => s.classList.remove("active"));
        ft.classList.add("active");
        updateMainImage(tile.finishImages[ft.textContent.trim()] || tile.image);
      });
    });
  }

  // Sizes
  const detailSizes = document.getElementById("detailSizes");
  if (detailSizes) {
    detailSizes.innerHTML = tile.sizes
      .map(
        (s, i) =>
          `<button class="detail-size-btn${i === 0 ? " active" : ""}">${s}</button>`,
      )
      .join("");
    document.querySelectorAll(".detail-size-btn").forEach((sb) => {
      sb.addEventListener("click", () => {
        document
          .querySelectorAll(".detail-size-btn")
          .forEach((s) => s.classList.remove("active"));
        sb.classList.add("active");
        updateMainImage(tile.sizeImages[sb.textContent.trim()] || tile.image);
      });
    });
  }

  // Features
  const detailFeaturesGrid = document.getElementById("detailFeaturesGrid");
  if (detailFeaturesGrid)
    detailFeaturesGrid.innerHTML = tile.features
      .map(
        (f) =>
          `<div class="feature-item"><i class="${f.icon}"></i><h5>${f.title}</h5><p>${f.desc}</p></div>`,
      )
      .join("");

  // Tech specs
  const detailTechGrid = document.getElementById("detailTechGrid");
  if (detailTechGrid)
    detailTechGrid.innerHTML = Object.entries(tile.tech)
      .map(
        ([k, v]) =>
          `<div class="tech-spec-cell"><dt>${k}</dt><dd>${v}</dd></div>`,
      )
      .join("");

  // Related tiles
  const related = ANTISTATIC_TILES.filter(
    (t) =>
      t.id !== tile.id &&
      (t.texture === tile.texture ||
        t.colors.some((c) => tile.colors.includes(c))),
  ).slice(0, 4);
  const relatedGrid = document.getElementById("relatedGrid");
  if (relatedGrid) {
    relatedGrid.innerHTML = related
      .map(
        (t) =>
          `<div class="related-card" data-id="${t.id}"><div class="related-card-img"><img src="${t.image}" alt="${t.title}"/></div><div class="related-card-body"><p class="related-card-tag">${t.tag}</p><p class="related-card-name">${t.title}</p></div></div>`,
      )
      .join("");
    document
      .querySelectorAll(".related-card")
      .forEach((rc) =>
        rc.addEventListener("click", () => openDetail(parseInt(rc.dataset.id))),
      );
  }

  // Reset tabs
  document
    .querySelectorAll(".detail-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".detail-tab-panel")
    .forEach((p) => p.classList.remove("active"));
  const featuresTab = document.querySelector(
    '.detail-tab-btn[data-tab="features"]',
  );
  if (featuresTab) featuresTab.classList.add("active");
  const tabFeatures = document.getElementById("tab-features");
  if (tabFeatures) tabFeatures.classList.add("active");

  const detailOverlay = document.getElementById("detailOverlay");
  if (detailOverlay) {
    detailOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeDetail() {
  const overlay = document.getElementById("detailOverlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Render featured grid ── */
function renderFeatured() {
  const featuredGrid = document.getElementById("featuredGrid");
  if (!featuredGrid) return;
  featuredGrid.innerHTML = FEATURED_IDS.map((id) => {
    const t = ANTISTATIC_TILES[id];
    if (!t) return "";
    let shortDesc =
      t.description.length > 80
        ? t.description.substring(0, 77) + "..."
        : t.description;
    return `<div class="feat-card" data-id="${id}"><div class="feat-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div><div class="feat-body"><p class="feat-tag">${t.tag}</p><h4 class="feat-name">${t.title}</h4><p class="feat-desc">${shortDesc}</p><div class="feat-meta"><span><strong>${t.colours}</strong> Colour${t.colours !== 1 ? "s" : ""}</span><span><strong>${t.finishes}</strong> Finish${t.finishes !== 1 ? "es" : ""}</span></div></div></div>`;
  }).join("");
  document
    .querySelectorAll(".feat-card")
    .forEach((fc) =>
      fc.addEventListener("click", () => openDetail(parseInt(fc.dataset.id))),
    );
}

/* ── Build dynamic sidebar filters (reduced colours + texture images from images/ folder) ── */
function buildSidebarFilters() {
  // Collect all unique values
  const allColors = new Set();
  const allTextures = new Set();
  const allFinishes = new Set();
  const allSizes = new Set();
  const allSurfaces = new Set();
  ANTISTATIC_TILES.forEach((t) => {
    t.colors.forEach((c) => allColors.add(c));
    allTextures.add(t.texture);
    t.finish.forEach((f) => allFinishes.add(f));
    t.sizes.forEach((s) => allSizes.add(s));
    t.surface.forEach((s) => allSurfaces.add(s));
  });

  // 1. COLOURS – show only first 12 distinct colours
  let reducedColors = Array.from(allColors);
  if (reducedColors.length > 12) reducedColors = reducedColors.slice(0, 12);

  const colorMap = {
    "Checkerboard Gray": "#A9A8A5",
    "Cream Beige": "#D7C9B8",
    "Grass Green": "#7FA06B",
    "Light Oak Wood": "#A79A86",
    "Rustic Slate Brown": "#7A6958",
    "Light Gray": "#D3D3D3",
    Graphite: "#4B4B4B",
    "Off-White": "#F5F5F5",
    Slate: "#708090",
    "Warm Beige": "#C8B69B",
    "Carbon Black": "#2B2B2B",
    "Dark Graphite": "#3A3A3A",
    "Steel Gray": "#5A5A5A",
    Charcoal: "#4A4A4A",
    "Slate Blue": "#4A6B7A",
    "Stone Gray": "#9E9E9E",
    "Warm Taupe": "#8B7355",
    Mist: "#C0C0C0",
    Alabaster: "#F5F5F0",
    "Natural Oak": "#A58B72",
    "Mist Gray": "#DDD8CB",
    Parchment: "#D0D4D7",
    "Soft Cream": "#E3E3E1",
    "Warm Stone": "#8A7A6D",
    "Dark Umber": "#5C5B57",
    "Deep Teal": "#36586A",
    "Olive Green": "#7A7A71",
    "Charcoal Brown": "#665E57",
    "Mist Quartz": "#D0D3D6",
    "Slate Quartz": "#9DA4AD",
    "Pewter Quartz": "#B7B6B3",
    "Cream Quartz": "#D9D3CB",
    "Pearl Quartz": "#E6E0D7",
    "Sand Cork": "#B9A68D",
    "Amber Cork": "#B68449",
    "Cream Cork": "#D7C4AC",
    "Mist Cork": "#B8B4B1",
    "Dark Steel": "#4A4744",
    "Light Steel": "#C9C8C6",
    "Silver Gray": "#9A9A99",
    Champagne: "#D6C5AE",
    "Soft Ivory Gray": "#D7D4CD",
    "Pearl Gray": "#CCCDCB",
  };

  const colorContainer = document.getElementById("colorSwatches");
  if (colorContainer) {
    colorContainer.innerHTML = reducedColors
      .map(
        (c) => `
      <div class="swatch-item" data-color="${c}">
        <div class="swatch-circle" style="background:${colorMap[c] || "#ccc"}"></div>
        <span class="swatch-label">${c}</span>
      </div>
    `,
      )
      .join("");
    document.querySelectorAll(".swatch-item").forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("active");
        const col = el.dataset.color;
        if (el.classList.contains("active")) pending.colors.add(col);
        else pending.colors.delete(col);
        updateApplyBtn();
      });
    });
  }

  // 2. TEXTURES – load images from ./images/ folder using .jpg (since you have those images)
  const textureContainer = document.getElementById("textureGrid");
  if (textureContainer) {
    textureContainer.innerHTML = Array.from(allTextures)
      .map((texture) => {
        // Filename: texture name exactly as given, with .jpg (e.g., Smooth.jpg, Stone.jpg, etc.)
        // We keep the case as is (Smooth, Stone, etc.) because you said the images are in images/ folder.
        const fileName = texture + ".jpg";
        return `
        <div class="texture-thumb" data-texture="${texture}">
          <img src="./images/${fileName}" alt="${texture}" 
               onerror="this.src='https://via.placeholder.com/100x100?text=${texture}'">
          <span class="texture-name">${texture}</span>
        </div>
      `;
      })
      .join("");
    document.querySelectorAll(".texture-thumb").forEach((el) => {
      // Set initial active state based on pending
      if (pending.textures.has(el.dataset.texture)) {
        el.classList.add("active");
        el.style.borderColor = "var(--accent)";
        el.style.backgroundColor = "var(--accent-light)";
      }
      el.addEventListener("click", () => {
        el.classList.toggle("active");
        const tex = el.dataset.texture;
        if (el.classList.contains("active")) {
          pending.textures.add(tex);
          el.style.borderColor = "var(--accent)";
          el.style.backgroundColor = "var(--accent-light)";
        } else {
          pending.textures.delete(tex);
          el.style.borderColor = "transparent";
          el.style.backgroundColor = "transparent";
        }
        updateApplyBtn();
      });
    });
  }

  // 3. Finishes, Sizes, Surfaces (unchanged)
  const finishContainer = document.getElementById("finishList");
  if (finishContainer) {
    finishContainer.innerHTML = Array.from(allFinishes)
      .map(
        (f) => `
      <label class="finish-item"><input type="checkbox" data-finish="${f}"> ${f}</label>
    `,
      )
      .join("");
    document.querySelectorAll("[data-finish]").forEach((cb) => {
      cb.addEventListener("change", () => {
        const f = cb.dataset.finish;
        if (cb.checked) pending.finishes.add(f);
        else pending.finishes.delete(f);
        updateApplyBtn();
      });
    });
  }

  const sizeContainer = document.getElementById("sizeTags");
  if (sizeContainer) {
    sizeContainer.innerHTML = Array.from(allSizes)
      .map(
        (s) => `
      <span class="size-tag" data-size="${s}">${s}</span>
    `,
      )
      .join("");
    document.querySelectorAll(".size-tag").forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("active");
        const sz = el.dataset.size;
        if (el.classList.contains("active")) pending.sizes.add(sz);
        else pending.sizes.delete(sz);
        updateApplyBtn();
      });
    });
  }

  const surfaceContainer = document.getElementById("surfaceList");
  if (surfaceContainer) {
    surfaceContainer.innerHTML = Array.from(allSurfaces)
      .map(
        (s) => `
      <label class="finish-item"><input type="checkbox" data-surface="${s}"> ${s}</label>
    `,
      )
      .join("");
    document.querySelectorAll("[data-surface]").forEach((cb) => {
      cb.addEventListener("change", () => {
        const s = cb.dataset.surface;
        if (cb.checked) pending.surfaces.add(s);
        else pending.surfaces.delete(s);
        updateApplyBtn();
      });
    });
  }
}

/* ── DOM Ready (exactly same event listeners as bedroom_wall.js) ── */
document.addEventListener("DOMContentLoaded", () => {
  buildSidebarFilters();
  renderGrid();
  renderFeatured();
  renderChips();

  // Accordion toggles
  document
    .querySelectorAll(".filter-group-header")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".filter-group").classList.toggle("open"),
      ),
    );

  // Apply Filters
  const applyFiltersBtn = document.getElementById("applyFiltersBtn");
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      copyState(pending, applied);
      renderGrid();
      renderChips();
      updateApplyBtn();
      const sb = document.getElementById("sidebar");
      if (sb && sb.classList.contains("mobile-open")) {
        sb.classList.remove("mobile-open");
        const mobileToggle = document.getElementById("mobileFilterToggle");
        if (mobileToggle)
          mobileToggle.innerHTML =
            '<i class="fa-solid fa-sliders"></i> Filters';
      }
    });
  }

  document.getElementById("clearAllBtn").addEventListener("click", clearAll);
  document.getElementById("sort-sel").addEventListener("change", renderGrid);

  // Grid view toggle
  const grid = document.getElementById("productsGrid");
  const btn3col = document.getElementById("btn3col");
  const btn2col = document.getElementById("btn2col");
  if (btn3col && btn2col && grid) {
    btn3col.addEventListener("click", () => {
      grid.classList.remove("two-col");
      btn3col.classList.add("active");
      btn2col.classList.remove("active");
    });
    btn2col.addEventListener("click", () => {
      grid.classList.add("two-col");
      btn2col.classList.add("active");
      btn3col.classList.remove("active");
    });
  }

  // Detail close
  const detailClose = document.getElementById("detailClose");
  const detailOverlay = document.getElementById("detailOverlay");
  if (detailClose) detailClose.addEventListener("click", closeDetail);
  if (detailOverlay)
    detailOverlay.addEventListener("click", (e) => {
      if (e.target === detailOverlay) closeDetail();
    });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });

  // Detail tabs
  document.querySelectorAll(".detail-tab-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".detail-tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".detail-tab-panel")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      const tabPanel = document.getElementById("tab-" + btn.dataset.tab);
      if (tabPanel) tabPanel.classList.add("active");
    }),
  );

  // Mobile filter toggle
  const mobileFilterToggle = document.getElementById("mobileFilterToggle");
  const sidebar = document.getElementById("sidebar");
  if (mobileFilterToggle && sidebar) {
    mobileFilterToggle.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
      mobileFilterToggle.innerHTML = sidebar.classList.contains("mobile-open")
        ? '<i class="fa-solid fa-xmark"></i> Close Filters'
        : '<i class="fa-solid fa-sliders"></i> Filters';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target && this.getAttribute("href") !== "#") {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }),
  );
});
