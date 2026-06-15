/* ── Scroll to top ── */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ── Tile Data ── */
const TILES = [
  {
    id: 0,
    title: "Solar Reflective White",
    tag: "SOLAR REFLECTIVE WHITE",
    description:
      "High-SRI white porcelain roof tiles engineered to reflect up to 85% of solar radiation. Ideal for flat and low-slope roofs in hot climates, dramatically reducing cooling loads.",
    colours: 3,
    finishes: 2,
    image: "./images/coolroof-1.jpg",
    badge: "Best Seller",
    thumbImages: [
      "./images/solarrefwhite-1.png",
      "./images/solarrefwhite-2.png",
      "./images/solarrefwhite-3.png",
      "./images/solarrefwhite-4.png",
    ],
    colors: ["PuneWhite", "CoolWhite", "SolarReflective", "TileWhite"],
    colorsHex: {
      PuneWhite: "#FFFFFF",
      CoolWhite: "#F5F5F5",
      SolarReflective: "#F2F2F2",
      TileWhite: "#EDEDED",
    },
    colorImages: {
      PuneWhite: "./images/solarrefwhite-1.png",
      CoolWhite: "./images/solarrefwhite-2.png",
      SolarReflective: "./images/solarrefwhite-3.png",
      TileWhite: "./images/solarrefwhite-4.png",
    },
    finishImages: {
      Matt: "./images/solarrefwhite-1.png",
      Satin: "./images/solarrefwhite-2.png",
    },
    sizeImages: {
      "600×600": "./images/solarrefwhite-2.png",
      "600×1200": "./images/solarrefwhite-3.png",
    },
    texture: "Porcelain",
    finish: ["Matt", "Satin"],
    sizes: ["600×600", "600×1200"],
    surface: ["Anti-Skid", "POSH+"],
    features: [
      {
        icon: "fa-solid fa-sun",
        title: "High SRI Rating",
        desc: "Solar Reflectance Index above 100 — reflects up to 85% of solar energy.",
      },
      {
        icon: "fa-solid fa-temperature-arrow-down",
        title: "Thermal Emission",
        desc: "High emittance coating releases absorbed heat rapidly after sunset.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Weather Proof",
        desc: "Withstands UV, acid rain, and thermal shock over decades of use.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      SRI: "≥ 100",
      SolarReflectance: "0.85",
      ThermalEmittance: "0.90",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 1,
    title: "Terracotta Cool Coat",
    tag: "TERRACOTTA COOL COAT",
    description:
      "Traditional terracotta aesthetics with a modern cool-roof nano-coating. Achieves an SRI of 65+ while preserving the warm Mediterranean character of clay roof tiles.",
    colours: 4,
    finishes: 2,
    image: "./images/coolroof-2.jpg",
    badge: "Eco Choice",
    thumbImages: [
      "./images/terracottaclroof-1.png",
      "./images/terracottaclroof-2.png",
      "./images/terracottaclroof-3.png",
      "./images/terracottaclroof-4.png",
    ],
    colors: ["DeepClay", "BurntEarth", "BrightTerracotta", "LightGrey"],
    colorsHex: {
      DeepClay: "#D35905",
      BurntEarth: "#D15622",
      BrightTerracotta: "#D55B27",
      LightGrey: "#D55B30",
    },
    colorImages: {
      DeepClay: "./images/terracottaclroof-1.png",
      BurntEarth: "./images/terracottaclroof-2.png",
      BrightTerracotta: "./images/terracottaclroof-3.png",
      LightGrey: "./images/terracottaclroof-4.png",
    },
    finishImages: {
      Rustic: "./images/terracottaclroof-1.png",
      Matt: "./images/terracottaclroof-3.png",
    },
    sizeImages: {
      "300×600": "./images/terracottaclroof-2.png",
      "600×600": "./images/terracottaclroof-4.png",
    },
    texture: "Terracotta",
    finish: ["Rustic", "Matt"],
    sizes: ["300×600", "600×600"],
    surface: ["Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-leaf",
        title: "Eco Terracotta",
        desc: "Natural clay body with low embodied carbon and fully recyclable.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Nano Cool Coat",
        desc: "Invisible nano-coating reflects NIR solar spectrum without changing colour.",
      },
      {
        icon: "fa-solid fa-wind",
        title: "Ventilated Design",
        desc: "Interlocking profile promotes under-tile airflow for passive cooling.",
      },
    ],
    tech: {
      Material: "Natural Terracotta",
      Origin: "India",
      SRI: "≥ 65",
      SolarReflectance: "0.55",
      ThermalEmittance: "0.88",
      Thickness: "12 mm",
      Rectified: "No",
    },
  },
  {
    id: 2,
    title: "Graphite Thermal Shield",
    tag: "GRAPHITE THERMAL SHIELD",
    description:
      "Dark graphite porcelain with embedded phase-change micro-capsules that absorb and release heat to stabilise indoor temperatures. Style without compromise on performance.",
    colours: 3,
    finishes: 2,
    image: "./images/coolroof-3.jpg",
    badge: "New",
    thumbImages: [
      "./images/graphiteshield-1.png",
      "./images/graphiteshield-3.jpg",
      "./images/graphiteshield-2.jpg",
      "./images/graphiteshield-4.jpg",
    ],
    colors: ["CharcoalBlack", "FroastySlate", "DarkSlate", "GraphicShield"],
    colorsHex: {
      CharcoalBlack: "#353535",
      FroastySlate: "#ADA5AA",
      DarkSlate: "#2B2C2D",
      GraphicShield: "#3c3d41",
    },
    colorImages: {
      CharcoalBlack: "./images/graphiteshield-1.png",
      FroastySlate: "./images/graphiteshield-3.jpg",
      DarkSlate: "./images/graphiteshield-2.jpg",
      GraphicShield: "./images/graphiteshield-4.jpg",
    },
    finishImages: {
      Matt: "./images/graphiteshield-1.png",
      Satin: "./images/graphiteshield-4.jpg",
    },
    sizeImages: {
      "600×1200": "./images/graphiteshield-2.jpg",
      "800×800": "./images/graphiteshield-3.jpg",
    },
    texture: "Porcelain",
    finish: ["Matt", "Satin"],
    sizes: ["600×1200", "800×800"],
    surface: ["POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-microchip",
        title: "PCM Technology",
        desc: "Phase-change micro-capsules buffer heat spikes for stable indoor temps.",
      },
      {
        icon: "fa-solid fa-city",
        title: "Urban Aesthetic",
        desc: "Deep graphite tone suits contemporary flat-roof architecture.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "POSH+ nano-surface repels dust, bird droppings and industrial fallout.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      SRI: "≥ 45",
      SolarReflectance: "0.40",
      ThermalEmittance: "0.92",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 3,
    title: "Slate Cool Roof",
    tag: "SLATE COOL ROOF",
    description:
      "Natural slate-look porcelain with a reflective mineral glaze. Combines the premium character of real slate with a certified cool-roof performance that real slate cannot achieve.",
    colours: 4,
    finishes: 1,
    image: "./images/slatecoolroof--1.jpg",
    badge: "Premium",
    thumbImages: [
      "./images/slatecoolroof-1.jpg",
      "./images/slatecoolroof-2.jpg",
      "./images/slatecoolroof-3.jpg",
      "./images/slatecoolroof-4.jpg",
    ],
    colors: ["PolishedMineral", "EarthTimber", "AshSlate", "CharcoalSlate"],
    colorsHex: {
      PolishedMineral: "#747d7d",
      EarthTimber: "#8d8276",
      AshSlate: "#828b94",
      CharcoalSlate: "#4a4d52",
    },
    colorImages: {
      PolishedMineral: "./images/slatecoolroof-1.jpg",
      EarthTimber: "./images/slatecoolroof-2.jpg",
      AshSlate: "./images/slatecoolroof-3.jpg",
      CharcoalSlate: "./images/slatecoolroof-4.jpg",
    },
    finishImages: {
      Satin: "./images/slatecoolroof-1.jpg",
    },
    sizeImages: {
      "600×600": "./images/slatecoolroof-2.jpg",
      "300×600": "./images/slatecoolroof-3.jpg",
    },
    texture: "Slate",
    finish: ["Satin"],
    sizes: ["600×600", "300×600"],
    surface: ["Anti-Skid", "POSH+"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Slate Aesthetics",
        desc: "Authentic cleft-slate texture digitally reproduced at microscopic detail.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Reflective Mineral Glaze",
        desc: "Proprietary glaze reflects NIR without brightening the visible surface.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Safe foot access for maintenance on all weather conditions.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      SRI: "≥ 55",
      SolarReflectance: "0.50",
      ThermalEmittance: "0.91",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 4,
    title: "White Concrete Roof",
    tag: "WHITE CONCRETE ROOF",
    description:
      "Large-format white concrete-look porcelain for flat accessible rooftops. Seamless, expansive finish with top-tier SRI performance for commercial and residential terraces.",
    colours: 3,
    finishes: 2,
    image: "./images/coolroof-5.jpg",
    badge: "Large Format",
    thumbImages: [
      "./images/whiteslateconcrete-1.jpg",
      "./images/whiteslateconcrete-2.jpg",
      "./images/whiteslateconcrete-3.jpg",
      "./images/whiteslateconcrete-4.jpg",
    ],
    colors: ["TileWhite", "ReflectiveWhite", "CoolWhite", "PureWhite"],
    colorsHex: {
      TileWhite: "#ededed",
      ReflectiveWhite: "#f2f2f2",
      CoolWhite: "#f5f5f5",
      PureWhite: "#ffffff",
    },
    colorImages: {
      TileWhite: "./images/whiteslateconcrete-1.jpg",
      ReflectiveWhite: "./images/whiteslateconcrete-2.jpg",
      CoolWhite: "./images/whiteslateconcrete-3.jpg",
      PureWhite: "./images/whiteslateconcrete-4.jpg",
    },
    finishImages: {
      Matt: "./images/whiteslateconcrete-1.jpg",
      Satin: "./images/whiteslateconcrete-4.jpg",
    },
    sizeImages: {
      "600×1200": "./images/whiteslateconcrete-2.jpg",
      "1200×1200": "./images/whiteslateconcrete-3.jpg",
    },
    texture: "Concrete",
    finish: ["Matt", "Satin"],
    sizes: ["600×1200", "1200×1200"],
    surface: ["Anti-Skid", "POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Minimal grout lines for maximum waterproofing and a seamless look.",
      },
      {
        icon: "fa-solid fa-temperature-arrow-down",
        title: "SRI ≥ 90",
        desc: "Certified cool-roof performance for LEED and GRIHA projects.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Water Repellent",
        desc: "Hydrophobic surface prevents moss, algae and staining.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      SRI: "≥ 90",
      SolarReflectance: "0.80",
      ThermalEmittance: "0.90",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 5,
    title: "Sand Dune Roof",
    tag: "SAND DUNE ROOF",
    description:
      "Warm sand-toned porcelain that blends naturally into desert and coastal landscapes. Combines earthy aesthetics with a near-infrared reflective coating for climate-conscious design.",
    colours: 4,
    finishes: 2,
    image: "./images/coolroof-6.jpg",
    badge: "Coastal",
    thumbImages: [
      "./images/sand dune roof-1.jpg",
      "./images/sandduneroof-2.jpg",
      "./images/sandduneroof-3.jpg",
      "./images/sanddunerood-4.jpg",
    ],
    colors: ["RustinClay", "BrickBlend", "SpanishClay", "SandPune"],
    colorsHex: {
      RustinClay: "#c58f72",
      BrickBlend: "#c4572a",
      SpanishClay: "#a1533b",
      SandPune: "#a34e28",
    },
    colorImages: {
      RustinClay: "./images/sand dune roof-1.jpg",
      BrickBlend: "./images/sandduneroof-2.jpg",
      SpanishClay: "./images/sandduneroof-3.jpg",
      SandPune: "./images/sandduneroof-4.jpg",
    },
    finishImages: {
      Matt: "./images/sand dune roof-1.jpg",
      Rustic: "./images/sandduneroof-3.jpg",
    },
    sizeImages: {
      "600×600": "./images/sandduneroof-2.jpg",
      "800×800": "./images/sandduneroof-4.jpg",
    },
    texture: "Porcelain",
    finish: ["Matt", "Rustic"],
    sizes: ["600×600", "800×800"],
    surface: ["Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-mountain-sun",
        title: "NIR Reflective",
        desc: "Near-infrared coating reflects invisible heat while preserving natural tone.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Salt Resistant",
        desc: "Tested for coastal chloride exposure — no spalling or colour fade.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Textured rustic surface rated R11 for safe rooftop access.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "India",
      SRI: "≥ 70",
      SolarReflectance: "0.62",
      ThermalEmittance: "0.89",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 6,
    title: "Monsoon Guard",
    tag: "MONSOON GUARD",
    description:
      "Heavy-duty interlocking roof tiles engineered for high-rainfall regions. Waterproof double-lock profile, cool-roof certified, and impact-resistant against hailstones.",
    colours: 3,
    finishes: 1,
    image: "./images/coolroof-7.jpg",
    badge: "Weather Guard",
    thumbImages: [
      "./images/monsonguard-4.jpg",
      "./images/monsonguard-3.jpg",
      "./images/monsonguard-2.jpg",
      "./images/monsonguard-1.jpg",
    ],
    colors: [
      "CrimsonShield",
      "TerracottaStreak",
      "SatinAntracite",
      "GlossObsidian",
    ],
    colorsHex: {
      CrimsonShield: "#b91c1c",
      TerracottaStreak: "#994734",
      SatinAntracite: "#3c4146",
      GlossObsidian: "#23282d",
    },
    colorImages: {
      CrimsonShield: "./images/monsonguard-1.jpg",
      TerracottaStreak: "./images/monsonguard-2.jpg",
      SatinAntracite: "./images/monsonguard-3.jpg",
      GlossObsidian: "./images/monsonguard-4.jpg",
    },
    finishImages: {
      Glazed: "./images/monsonguard-1.jpg",
    },
    sizeImages: {
      "300×600": "./images/monsonguard-2.jpg",
      "600×600": "./images/monsonguard-4.jpg",
    },
    texture: "Ceramic",
    finish: ["Glazed"],
    sizes: ["300×600", "600×600"],
    surface: ["Anti-Skid", "Antibacterial"],
    features: [
      {
        icon: "fa-solid fa-cloud-showers-heavy",
        title: "Double-Lock Profile",
        desc: "Interlocking edges prevent water ingress at up to 200 mm/hr rainfall.",
      },
      {
        icon: "fa-solid fa-bomb",
        title: "Impact Rated",
        desc: "Class 4 hail resistance tested to 50 mm ice-ball impact.",
      },
      {
        icon: "fa-solid fa-bacteria",
        title: "Antibacterial Glaze",
        desc: "Silver-ion glaze prevents moss and algae growth in humid conditions.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "India",
      SRI: "≥ 60",
      SolarReflectance: "0.52",
      ThermalEmittance: "0.87",
      Thickness: "13 mm",
      Rectified: "No",
    },
  },
  {
    id: 7,
    title: "Leaf Green Eco Roof",
    tag: "LEAF GREEN ECO ROOF",
    description:
      "Sustainably fired ceramic tiles in earthy greens that reference the surrounding landscape. Factory-certified cool-roof coating improves urban heat island performance.",
    colours: 3,
    finishes: 2,
    image: "./images/coolroof-8.jpg",
    badge: "Green Star",
    thumbImages: [
      "./images/leafgreen-4.jpg",
      "./images/leafgreen-3.jpg",
      "./images/leafgreen-2.jpg",
      "./images/leafgreen-1.jpg",
    ],
    colors: ["ForestGreen", "MossShingle", "SageWave", "DeepTealGlaze"],
    colorsHex: {
      ForestGreen: "#0a4315",
      MossShingle: "#739c7b",
      SageWave: "#739c7b",
      DeepTealGlaze: "#1d545e",
    },
    colorImages: {
      ForestGreen: "./images/leafgreen-4.jpg",
      MossShingle: "./images/leafgreen-3.jpg",
      SageWave: "./images/leafgreen-2.jpg",
      DeepTealGlaze: "./images/leafgreen-1.jpg",
    },
    finishImages: {
      Matt: "./images/leafgreen-1.jpg",
      Rustic: "./images/leafgreen-4.jpg",
    },
    sizeImages: {
      "600×600": "./images/leafgreen-2.jpg",
      "300×600": "./images/leafgreen-3.jpg",
    },
    texture: "Ceramic",
    finish: ["Matt", "Rustic"],
    sizes: ["600×600", "300×600"],
    surface: ["Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-seedling",
        title: "Low Carbon Firing",
        desc: "Kiln fired at reduced temperatures using 30% recycled clay content.",
      },
      {
        icon: "fa-solid fa-city",
        title: "Urban Heat Island",
        desc: "Certified contribution to reducing localised urban heat island effects.",
      },
      {
        icon: "fa-solid fa-recycle",
        title: "Fully Recyclable",
        desc: "End-of-life tiles can be crushed and repurposed as aggregate.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "India",
      SRI: "≥ 55",
      SolarReflectance: "0.48",
      ThermalEmittance: "0.86",
      Thickness: "11 mm",
      Rectified: "No",
    },
  },
  {
    id: 8,
    title: "Arctic White Vitrified",
    tag: "ARCTIC WHITE VITRIFIED",
    description:
      "Ultra-white vitrified porcelain with near-zero water absorption and a certified SRI of 110. The benchmark product for high-performance cool-roof applications.",
    colours: 2,
    finishes: 2,
    image: "./images/coolroof-9.jpg",
    badge: "Top Rated",
    thumbImages: [
      "./images/arctic-4.jpg",
      "./images/arctic-3.jpg",
      "./images/arctic-2.jpg",
      "./images/arctic-1.jpg",
    ],
    colors: ["GlacialWhite", "FroastGray", "IceBlue", "TundraClay"],
    colorsHex: {
      GlacialWhite: "#f6f7f9",
      FroastGray: "#dcdcdc",
      IceBlue: "#8192A6",
      TundraClay: "#8e858e",
    },
    colorImages: {
      GlacialWhite: "./images/arctic-1.jpg",
      FroastGray: "./images/arctic-2.jpg",
      IceBlue: "./images/arctic-3.jpg",
      TundraClay: "./images/arctic-4.jpg",
    },
    finishImages: {
      Polished: "./images/arctic-1.jpg",
      Satin: "./images/arctic-3.jpg",
    },
    sizeImages: {
      "600×600": "./images/arctic-2.jpg",
      "600×1200": "./images/arctic-4.jpg",
      "1200×1200": "./images/arctic-3.jpg",
    },
    texture: "Porcelain",
    finish: ["Polished", "Satin"],
    sizes: ["600×600", "600×1200", "1200×1200"],
    surface: ["POSH+", "Stain Resistant", "Antibacterial"],
    features: [
      {
        icon: "fa-solid fa-snowflake",
        title: "SRI 110",
        desc: "Exceeds ASHRAE 90.1 and LEED v4 cool-roof requirements comfortably.",
      },
      {
        icon: "fa-solid fa-tint-slash",
        title: "Near-Zero Absorption",
        desc: "Water absorption < 0.05% — virtually impermeable vitrified body.",
      },
      {
        icon: "fa-solid fa-bacteria",
        title: "Antibacterial",
        desc: "Inhibits microbial growth to keep rooftop surfaces hygienic.",
      },
    ],
    tech: {
      Material: "Vitrified Porcelain",
      Origin: "Italy",
      SRI: "≥ 110",
      SolarReflectance: "0.90",
      ThermalEmittance: "0.92",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
];

const FEATURED_IDS = [0, 3, 5, 8];

/* ── Two-stage filter state ── */
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

/* ── Filter helpers ── */
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
  if (total === 0) return TILES;
  return TILES.filter((t) => {
    if (state.colors.size > 0 && t.colors.some((c) => state.colors.has(c)))
      return true;
    if (state.textures.size > 0 && state.textures.has(t.texture)) return true;
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
  if (v === "Name A\u2013Z") arr.sort((a, b) => a.title.localeCompare(b.title));
  else if (v === "Name Z\u2013A")
    arr.sort((a, b) => b.title.localeCompare(a.title));
  return arr;
}

/* ── Build sidebar Colors & Textures dynamically from TILES ──
   Fixes: (1) sidebar texture thumbnails pointing to missing
   coolroof_img*.avif files, and (2) hardcoded sidebar color
   swatches that didn't match the actual tile colours/hex values. */
function buildSidebarFilters() {
  // Colors: unique colour name -> hex, taken from each tile's colorsHex
  const colorMap = new Map();
  TILES.forEach((t) => {
    t.colors.forEach((c) => {
      if (!colorMap.has(c)) {
        const hex = (t.colorsHex && t.colorsHex[c]) || "#cccccc";
        colorMap.set(c, hex);
      }
    });
  });

  const colorsWrap = document.getElementById("sidebarColors");
  if (colorsWrap) {
    colorsWrap.innerHTML = "";
    colorMap.forEach((hex, name) => {
      const item = document.createElement("div");
      item.className = "swatch-item";
      item.dataset.color = name;
      item.innerHTML = `
        <div class="swatch-circle" style="background:${hex}"></div>
        <span class="swatch-label">${name}</span>`;
      colorsWrap.appendChild(item);
    });
  }

  // Textures: unique texture name -> representative image (first thumbImage of first tile with that texture)
  const textureMap = new Map();
  TILES.forEach((t) => {
    if (!textureMap.has(t.texture)) {
      const img = (t.thumbImages && t.thumbImages[0]) || t.image || "";
      textureMap.set(t.texture, img);
    }
  });

  const texturesWrap = document.getElementById("sidebarTextures");
  if (texturesWrap) {
    texturesWrap.innerHTML = "";
    textureMap.forEach((img, texture) => {
      const item = document.createElement("div");
      item.className = "texture-thumb";
      item.dataset.texture = texture;
      item.innerHTML = `
        <img src="${img}" alt="${texture}" loading="lazy" />
        <span class="texture-name">${texture}</span>`;
      texturesWrap.appendChild(item);
    });
  }
}

/* ── Wire up dynamically-created swatches/textures to pending filter state ── */
function bindDynamicFilterHandlers() {
  document.querySelectorAll("#sidebarColors .swatch-item").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const c = el.dataset.color;
      if (el.classList.contains("active")) pending.colors.add(c);
      else pending.colors.delete(c);
      updateApplyBtn();
    }),
  );

  document.querySelectorAll("#sidebarTextures .texture-thumb").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const x = el.dataset.texture;
      if (el.classList.contains("active")) pending.textures.add(x);
      else pending.textures.delete(x);
      updateApplyBtn();
    }),
  );
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
            <span class="prod-badge">${tile.badge}</span>
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

/* ── Update apply button count ── */
function updateApplyBtn() {
  const btn = document.getElementById("applyFiltersBtn");
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

/* ── Sync sidebar UI from pending state ── */
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

  const waHref = `https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}`;
  document.querySelectorAll(".detail-enquire-wa").forEach((el) => {
    el.href = waHref;
  });

  const thumbImgs =
    tile.thumbImages && tile.thumbImages.length > 0
      ? tile.thumbImages
      : [tile.image];

  document.getElementById("detailMainImg").src = thumbImgs[0];
  document.getElementById("detailMainImg").alt = tile.title;

  const thumbsEl = document.getElementById("detailThumbs");
  thumbsEl.innerHTML = "";
  thumbImgs.forEach((src, i) => {
    const d = document.createElement("div");
    d.className = "detail-thumb" + (i === 0 ? " active" : "");
    d.dataset.src = src;
    d.innerHTML = `<img src="${src}" alt="view ${i + 1}"/>`;
    thumbsEl.appendChild(d);
  });

  function setMainImage(newSrc) {
    const mainImg = document.getElementById("detailMainImg");
    mainImg.style.transition = "opacity 0.2s";
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = "1";
    }, 200);
    const newFile = newSrc.split("/").pop().split("?")[0];
    thumbsEl.querySelectorAll(".detail-thumb").forEach((t) => {
      const tFile = (t.dataset.src || "").split("/").pop().split("?")[0];
      t.classList.toggle("active", tFile === newFile);
    });
  }

  thumbsEl.querySelectorAll(".detail-thumb").forEach((d) => {
    d.addEventListener("click", () => setMainImage(d.dataset.src));
  });

  const specRows = [
    ["Texture", tile.texture],
    ["Colours Available", tile.colours],
    ["Finishes", tile.finish.join(", ")],
    ["Sizes", tile.sizes.join(", ")],
    ["Surface", tile.surface.join(", ")],
  ];
  document.getElementById("detailSpecTable").innerHTML = specRows
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  const colorRow = document.getElementById("detailColors");
  colorRow.innerHTML = tile.colors
    .map(
      (c, i) =>
        `<span class="detail-swatch${i === 0 ? " active" : ""}" title="${c}" style="background:${tile.colorsHex[c] || "#cccccc"}" data-color="${c}"></span>`,
    )
    .join("");
  colorRow.querySelectorAll(".detail-swatch").forEach((sw) => {
    sw.addEventListener("click", () => {
      colorRow
        .querySelectorAll(".detail-swatch")
        .forEach((s) => s.classList.remove("active"));
      sw.classList.add("active");
      setMainImage(tile.colorImages[sw.dataset.color] || thumbImgs[0]);
    });
  });

  const finishRow = document.getElementById("detailFinishes");
  finishRow.innerHTML = tile.finish
    .map(
      (f, i) =>
        `<span class="detail-finish-tag${i === 0 ? " active" : ""}">${f}</span>`,
    )
    .join("");
  finishRow.querySelectorAll(".detail-finish-tag").forEach((ft) => {
    ft.addEventListener("click", () => {
      finishRow
        .querySelectorAll(".detail-finish-tag")
        .forEach((s) => s.classList.remove("active"));
      ft.classList.add("active");
      setMainImage(tile.finishImages[ft.textContent.trim()] || thumbImgs[0]);
    });
  });

  const sizeRow = document.getElementById("detailSizes");
  sizeRow.innerHTML = tile.sizes
    .map(
      (s, i) =>
        `<button class="detail-size-btn${i === 0 ? " active" : ""}">${s}</button>`,
    )
    .join("");
  sizeRow.querySelectorAll(".detail-size-btn").forEach((sb) => {
    sb.addEventListener("click", () => {
      sizeRow
        .querySelectorAll(".detail-size-btn")
        .forEach((s) => s.classList.remove("active"));
      sb.classList.add("active");
      setMainImage(tile.sizeImages[sb.textContent.trim()] || thumbImgs[0]);
    });
  });

  document.getElementById("detailFeaturesGrid").innerHTML = tile.features
    .map(
      (f) =>
        `<div class="feature-item"><i class="${f.icon}" aria-hidden="true"></i><h5>${f.title}</h5><p>${f.desc}</p></div>`,
    )
    .join("");

  document.getElementById("detailTechGrid").innerHTML = Object.entries(
    tile.tech,
  )
    .map(
      ([k, v]) =>
        `<div class="tech-spec-cell"><dt>${k}</dt><dd>${v}</dd></div>`,
    )
    .join("");

  const related = TILES.filter(
    (t) =>
      t.id !== tile.id &&
      (t.texture === tile.texture ||
        t.colors.some((c) => tile.colors.includes(c))),
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
            <span><strong>${t.colours}</strong> Color</span>
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
  buildSidebarFilters();
  bindDynamicFilterHandlers();
  renderGrid();
  renderFeatured();

  document
    .querySelectorAll(".filter-group-header")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".filter-group").classList.toggle("open"),
      ),
    );

  document.querySelectorAll("[data-finish]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const f = cb.dataset.finish;
      if (cb.checked) pending.finishes.add(f);
      else pending.finishes.delete(f);
      updateApplyBtn();
    }),
  );

  document.querySelectorAll(".size-tag").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const s = el.dataset.size;
      if (el.classList.contains("active")) pending.sizes.add(s);
      else pending.sizes.delete(s);
      updateApplyBtn();
    }),
  );

  document.querySelectorAll("[data-surface]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const s = cb.dataset.surface;
      if (cb.checked) pending.surfaces.add(s);
      else pending.surfaces.delete(s);
      updateApplyBtn();
    }),
  );

  document.getElementById("applyFiltersBtn").addEventListener("click", () => {
    copyState(pending, applied);
    renderGrid();
    renderChips();
    updateApplyBtn();
    const sb = document.getElementById("sidebar");
    if (sb.classList.contains("mobile-open")) {
      sb.classList.remove("mobile-open");
      document.getElementById("mobileFilterToggle").innerHTML =
        '<i class="fa-solid fa-sliders"></i> Filters';
    }
  });

  document.getElementById("clearAllBtn").addEventListener("click", clearAll);
  document.getElementById("sort-sel").addEventListener("change", renderGrid);

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

  document.getElementById("productsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".prod-btn-view");
    if (btn) openDetail(parseInt(btn.dataset.id));
  });

  document.getElementById("detailClose").addEventListener("click", closeDetail);
  document.getElementById("detailOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("detailOverlay")) closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });

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

  document
    .getElementById("mobileFilterToggle")
    .addEventListener("click", function () {
      const sb = document.getElementById("sidebar");
      sb.classList.toggle("mobile-open");
      this.innerHTML = sb.classList.contains("mobile-open")
        ? '<i class="fa-solid fa-xmark"></i> Close Filters'
        : '<i class="fa-solid fa-sliders"></i> Filters';
    });

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
