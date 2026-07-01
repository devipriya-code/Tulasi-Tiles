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
  {
    id: 0,
    title: "AntiBac Series",
    tag: "ANTIBACTERIAL GLAZED",
    description:
      "Premium antibacterial porcelain tiles featuring nano-silver ion technology embedded directly into the glaze. Inhibits 99.9% of bacteria, mould, and fungi — delivering a perfect blend of hygiene and design across polished and matte stone textures.",
    colours: 4,
    finishes: 2,
    image: "./images/germfree/antibac/AntiBac.webp",
    badge: "AntiBac",
    thumbImages: [
      "./images/germfree/antibac/AntiBac White Crystal.webp",
      "./images/germfree/antibac/AntiBac Grey.webp",
      "./images/germfree/antibac/AntiBac Beige.webp",
      "./images/germfree/antibac/AntiBac Ivory.webp",
    ],
    colors: ["White Crystal", "Grey", "Beige", "Ivory"],
    colorKeywords: ["white", "grey", "beige", "ivory"],
    colorsHex: {
      "White Crystal": "#f4f5f7",
      Grey: "#6e7378",
      Beige: "#ebd8be",
      Ivory: "#ece4d6",
    },
    colorImages: {
      "White Crystal": "./images/germfree/antibac/AntiBac White Crystal.webp",
      Grey: "./images/germfree/antibac/AntiBac Grey.webp",
      Beige: "./images/germfree/antibac/AntiBac Beige.webp",
      Ivory: "./images/germfree/antibac/AntiBac Ivory.webp",
    },
    finishImages: {
      Polished: "./images/germfree/antibac/AntiBac White Crystal.webp",
      Matt: "./images/germfree/antibac/AntiBac Grey.webp",
    },
    texture: "Stone",
    finish: ["Polished", "Matt"],
    sizes: ["600×600", "800×800", "600×1200"],
    surface: ["Antibacterial", "POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-shield-virus",
        title: "Nano Silver Ion",
        desc: "Silver ion glaze layer provides permanent, tested 99.9% bacterial inhibition.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Mould Resistant",
        desc: "Active glaze formula prevents mould and fungal growth on the tile surface.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Versatile Textures",
        desc: "Available in luxurious marble gloss and sophisticated fine matte architectural finishes.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "India",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Matt",
      Thickness: "9 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196",
    },
  },
  {
    id: 1,
    title: "HygieneShield Marble",
    tag: "HYGIENE MARBLE LOOK",
    description:
      "Elegant marble-effect porcelain enhanced with HygieneShield® antimicrobial surface treatment. Combines the prestige of rich marble veining with certified germ-free protection.",
    colours: 5,
    finishes: 2,
    image: "./images/germfree/marble/marble.webp",
    badge: "HygieneShield",
    thumbImages: [
      "./images/germfree/marble/Cream Marble.webp",
      "./images/germfree/marble/Beige Marble.webp",
      "./images/germfree/marble/Brown Marble.webp",
      "./images/germfree/marble/golden marble.webp",
      "./images/germfree/marble/Emerald Green Marble.webp",
    ],
    colors: [
      "Cream Marble",
      "Beige Marble",
      "Brown Marble",
      "Golden Marble",
      "Emerald Green Marble",
    ],
    colorKeywords: ["white", "beige", "beige", "ivory", "green"],
    colorsHex: {
      "Cream Marble": "#FBF5EB",
      "Beige Marble": "#F7F1E5",
      "Brown Marble": "#8B6F57",
      "Golden Marble": "#F5E6CE",
      "Emerald Green Marble": "#D6EDE4",
    },
    colorImages: {
      "Cream Marble": "./images/germfree/marble/Cream Marble.webp",
      "Beige Marble": "./images/germfree/marble/Beige Marble.webp",
      "Brown Marble": "./images/germfree/marble/Brown Marble.webp",
      "Golden Marble": "./images/germfree/marble/golden marble.webp",
      "Emerald Green Marble":
        "./images/germfree/marble/Emerald Green Marble.webp",
    },
    finishImages: {
      Polished: "./images/germfree/marble/Cream Marble.webp",
      Satin: "./images/germfree/marble/Emerald Green Marble.webp",
    },
    texture: "Marble",
    finish: ["Polished", "Satin"],
    sizes: ["800×800", "600×1200", "800×1600"],
    surface: ["Antibacterial", "POSH+", "Stain Resistant", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-microscope",
        title: "HygieneShield® Glaze",
        desc: "Patented antimicrobial glaze inhibits bacteria including E. coli and Staphylococcus aureus.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Authentic Marble Veins",
        desc: "High-definition digital print replicates natural marble depth and translucency.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain & Scratch Proof",
        desc: "Advanced POSH+ nano coating resists stains and surface scratches effortlessly.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "9 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196 / JIS Z 2801",
    },
  },
  {
    id: 2,
    title: "BioGuard Stone",
    tag: "BIOGUARD STONE LOOK",
    description:
      "Natural slate and stone effect tiles with BioGuard® antimicrobial surface. Brings organic warmth and earthy tones to any room while keeping surfaces clinically clean.",
    colours: 5,
    finishes: 1,
    image: "./images/germfree/bioguard/bio guard.webp",
    badge: "BioGuard",
    thumbImages: [
      "./images/germfree/bioguard/BioGuard Slate Stone.webp",
      "./images/germfree/bioguard/BioGuard Beige Stone.webp",
      "./images/germfree/bioguard/BioGuard Ash Stone.webp",
      "./images/germfree/bioguard/BioGuard Charcoal Stone.webp",
      "./images/germfree/bioguard/BioGuard Earth Brown.webp",
    ],
    colors: [
      "BioGuard Slate Stone",
      "BioGuard Beige Stone",
      "BioGuard Ash Stone",
      "BioGuard Charcoal Stone",
      "BioGuard Earth Brown",
    ],
    colorKeywords: ["grey", "beige", "grey", "charcoal", "beige"],
    colorsHex: {
      "BioGuard Slate Stone": "#9a9b9d",
      "BioGuard Beige Stone": "#ece6da",
      "BioGuard Ash Stone": "#b5a898",
      "BioGuard Charcoal Stone": "#4a4c50",
      "BioGuard Earth Brown": "#c8b898",
    },
    colorImages: {
      "BioGuard Slate Stone":
        "./images/germfree/bioguard/BioGuard Slate Stone.webp",
      "BioGuard Beige Stone":
        "./images/germfree/bioguard/BioGuard Beige Stone.webp",
      "BioGuard Ash Stone":
        "./images/germfree/bioguard/BioGuard Ash Stone.webp",
      "BioGuard Charcoal Stone":
        "./images/germfree/bioguard/BioGuard Charcoal Stone.webp",
      "BioGuard Earth Brown":
        "./images/germfree/bioguard/BioGuard Earth Brown.webp",
    },
    finishImages: {
      Matt: "./images/germfree/bioguard/BioGuard Slate Stone.webp",
    },
    texture: "Stone",
    finish: ["Matt"],
    sizes: ["600×600", "600×1200"],
    surface: ["Antibacterial", "Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-bacterium",
        title: "BioGuard® Protection",
        desc: "Broad-spectrum antimicrobial additive built into the tile body — not just the surface.",
      },
      {
        icon: "fa-solid fa-mountain",
        title: "Authentic Stone Look",
        desc: "Precisely textured surface replicates natural slate grain and warmth.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Structured matt surface provides reliable slip resistance in wet areas.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196",
    },
  },
  {
    id: 3,
    title: "SterileGloss Concrete",
    tag: "STERILE CONCRETE LOOK",
    description:
      "Industrial concrete-effect porcelain with built-in SterileGloss™ antibacterial finish. A modern, minimalist aesthetic that keeps high-traffic spaces hygienic with zero extra effort.",
    colours: 4,
    finishes: 2,
    image: "./images/germfree/SterileGloss/SterileGloss.webp",
    badge: "SterileGloss",
    thumbImages: [
      "./images/germfree/SterileGloss/Light Ash.webp",
      "./images/germfree/SterileGloss/Silver Mist.webp",
      "./images/germfree/SterileGloss/Urban Grey.webp",
      "./images/germfree/SterileGloss/Charcoal Slate.webp",
    ],
    colors: ["Light Ash", "Silver Mist", "Urban Grey", "Charcoal Slate"],
    colorKeywords: ["white", "grey", "grey", "charcoal"],
    colorsHex: {
      "Light Ash": "#d1d5db",
      "Silver Mist": "#c4c4c4",
      "Urban Grey": "#b3b3b3",
      "Charcoal Slate": "#444446",
    },
    colorImages: {
      "Light Ash": "./images/germfree/SterileGloss/Light Ash.webp",
      "Silver Mist": "./images/germfree/SterileGloss/Silver Mist.webp",
      "Urban Grey": "./images/germfree/SterileGloss/Urban Grey.webp",
      "Charcoal Slate": "./images/germfree/SterileGloss/Charcoal Slate.webp",
    },
    finishImages: {
      Matt: "./images/germfree/SterileGloss/Urban Grey.webp",
      Satin: "./images/germfree/SterileGloss/Silver Mist.webp",
    },
    texture: "Concrete",
    finish: ["Matt", "Satin"],
    sizes: ["600×1200", "1200×1200"],
    surface: ["Antibacterial", "Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-city",
        title: "Industrial Aesthetic",
        desc: "Authentic concrete look delivering a bold, contemporary urban statement.",
      },
      {
        icon: "fa-solid fa-shield-virus",
        title: "SterileGloss™ Finish",
        desc: "Integrated antimicrobial treatment active 24/7 — effective for the full tile lifetime.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Minimum grout lines means fewer spots where bacteria and dirt can accumulate.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Matt / Satin",
      Thickness: "10 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196",
    },
  },
  {
    id: 4,
    title: "PureWood Oak",
    tag: "ANTIBAC WOOD LOOK",
    description:
      "Warm oak wood-look porcelain planks fused with PureWood™ antimicrobial surface technology. All the charm of timber flooring, none of the bacteria harbour risk.",
    colours: 4,
    finishes: 2,
    image: "./images/germfree/oak/oak.webp",
    badge: "PureWood",
    thumbImages: [
      "./images/germfree/oak/Natural Oak.webp",
      "./images/germfree/oak/Honey Oak.webp",
      "./images/germfree/oak/Nordic Oak.webp",
      "./images/germfree/oak/Dark Oak.webp",
    ],
    colors: ["Natural Oak", "Honey Oak", "Nordic Oak", "Dark Oak"],
    colorKeywords: ["beige", "beige", "ivory", "black"],
    colorsHex: {
      "Natural Oak": "#b88e5d",
      "Honey Oak": "#a7713a",
      "Nordic Oak": "#d9c4aa",
      "Dark Oak": "#4a3629",
    },
    colorImages: {
      "Natural Oak": "./images/germfree/oak/Natural Oak.webp",
      "Honey Oak": "./images/germfree/oak/Honey Oak.webp",
      "Nordic Oak": "./images/germfree/oak/Nordic Oak.webp",
      "Dark Oak": "./images/germfree/oak/Dark Oak.webp",
    },
    finishImages: {
      Rustic: "./images/germfree/oak/Natural Oak.webp",
      Smooth: "./images/germfree/oak/Nordic Oak.webp",
    },
    texture: "Wood",
    finish: ["Rustic", "Smooth"],
    sizes: ["200×1200", "800×800"],
    surface: ["Antibacterial", "Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-tree",
        title: "Realistic Oak Grain",
        desc: "High-definition texture print virtually identical to real oak hardwood.",
      },
      {
        icon: "fa-solid fa-shield-virus",
        title: "PureWood™ Antimicrobial",
        desc: "Embedded biocide additive prevents bacterial colonisation in grout-free plank format.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Fully Waterproof",
        desc: "Porcelain core won't absorb moisture — zero swelling, zero mould in damp zones.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Rustic / Smooth",
      Thickness: "10 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196",
    },
  },
  {
    id: 5,
    title: "Aeon Antimicrobial Marble",
    tag: "MEDICAL GRADE MARBLE",
    description:
      "Premium marble-effect porcelain tiles fused with advanced antibacterial surface technology. Delivers a sophisticated, hygienic aesthetic engineered for clinics, high-end lobbies, and clean environments.",
    colours: 3,
    finishes: 1,
    image: "./images/germfree/aeon/aeon.webp",
    badge: "Medical Grade",
    thumbImages: [
      "./images/germfree/aeon/aeon Calacatta Gold.webp",
      "./images/germfree/aeon/aeon Nero Marquina.webp",
      "./images/germfree/aeon/aeon Statuario White.webp",
    ],
    colors: ["Calacatta Gold", "Nero Marquina", "Statuario White"],
    colorKeywords: ["ivory", "black", "white"],
    colorsHex: {
      "Calacatta Gold": "#f4f1ea",
      "Nero Marquina": "#1a1a1a",
      "Statuario White": "#f8f9fa",
    },
    colorImages: {
      "Calacatta Gold": "./images/germfree/aeon/aeon Calacatta Gold.webp",
      "Nero Marquina": "./images/germfree/aeon/aeon Nero Marquina.webp",
      "Statuario White": "./images/germfree/aeon/aeon Statuario White.webp",
    },
    finishImages: {
      Glazed: "./images/germfree/aeon/aeon Statuario White.webp",
    },
    texture: "Marble",
    finish: ["Glazed"],
    sizes: ["600×1200", "800×1600"],
    surface: [
      "Antibacterial",
      "Anti-Skid",
      "Stain Resistant",
      "Chemical Resistant",
    ],
    features: [
      {
        icon: "fa-solid fa-hospital",
        title: "Medical-Grade Protection",
        desc: "Certified for use in hospitals, clinics, premium laboratories, and luxury healthcare environments.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Luxury Marble Grain",
        desc: "High-definition veins matching classic Calacatta, Nero Marquina, and Statuario cuts without the porosity of natural stone.",
      },
      {
        icon: "fa-solid fa-flask",
        title: "Chemical & Stain Resistant",
        desc: "Non-porous glaze structure easily withstands heavy disinfectants, acids, and industrial cleaning agents.",
      },
    ],
    tech: {
      Material: "Ceramic Porcelain",
      Origin: "Germany",
      MOHs: "6",
      WaterAbsorption: "<0.3%",
      SurfaceFinish: "Glazed",
      Thickness: "9 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196 / EN 13697",
    },
  },
  {
    id: 6,
    title: "Endura Industrial Stone",
    tag: "HEAVY DUTY ANTIBAC STONE",
    description:
      "High-performance stone-effect porcelain tiles featuring Endura™ antibacterial surface integration. Engineered for heavy foot traffic, commercial spaces, and clean minimalist layouts.",
    colours: 4,
    finishes: 2,
    image: "./images/germfree/endura/endura.webp",
    badge: "Endura",
    thumbImages: [
      "./images/germfree/endura/endura Coated White.webp",
      "./images/germfree/endura/endura Modern Grey.webp",
      "./images/germfree/endura/endura Parx Slate.webp",
      "./images/germfree/endura/endura Stone Grey.webp",
    ],
    colors: ["Coated White", "Modern Grey", "Parx Slate", "Stone Grey"],
    colorKeywords: ["white", "grey", "charcoal", "grey"],
    colorsHex: {
      "Coated White": "#f3f4f6",
      "Modern Grey": "#9ca3af",
      "Parx Slate": "#4b5563",
      "Stone Grey": "#6b7280",
    },
    colorImages: {
      "Coated White": "./images/germfree/endura/endura Coated White.webp",
      "Modern Grey": "./images/germfree/endura/endura Modern Grey.webp",
      "Parx Slate": "./images/germfree/endura/endura Parx Slate.webp",
      "Stone Grey": "./images/germfree/endura/endura Stone Grey.webp",
    },
    finishImages: {
      Rustic: "./images/germfree/endura/endura Parx Slate.webp",
      Matt: "./images/germfree/endura/endura Modern Grey.webp",
    },
    texture: "Stone",
    finish: ["Rustic", "Matt"],
    sizes: ["600×600", "800×800"],
    surface: ["Antibacterial", "Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-cubes",
        title: "Architectural Stone Grain",
        desc: "Authentic, rugged stone textures offering structural character and raw industrial minimalism.",
      },
      {
        icon: "fa-solid fa-shield-virus",
        title: "Endura™ Germ Protection",
        desc: "Built-in silver-ion formula eliminates 99.9% of bacteria on the tile surface continuously.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid Matt",
        desc: "Matte textured surface provides superior grip and slip resistance in demanding environments.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Portugal",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Rustic / Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196",
    },
  },
  {
    id: 7,
    title: "Alberata Antimicrobial Stone",
    tag: "VIRO STOP GLAZED STONE",
    description:
      "Elegant stone-effect porcelain featuring ViroStop® photocatalytic surface technology. Uses light activation to continuously break down bacteria and organic pollutants across a beautiful, nature-inspired palette.",
    colours: 5,
    finishes: 2,
    image: "./images/germfree/alberata/Alberta.webp",
    badge: "ViroStop",
    thumbImages: [
      "./images/germfree/alberata/Alberta White.webp",
      "./images/germfree/alberata/Alberta Almond.webp",
      "./images/germfree/alberata/Alberta Beige.webp",
      "./images/germfree/alberata/Alberta Dark Grey.webp",
      "./images/germfree/alberata/Alberta Grey.webp",
    ],
    colors: [
      "Alberta White",
      "Alberta Almond",
      "Alberta Beige",
      "Alberta Dark Grey",
      "Alberta Grey",
    ],
    colorKeywords: ["white", "ivory", "beige", "charcoal", "grey"],
    colorsHex: {
      "Alberta White": "#f9f9f9",
      "Alberta Almond": "#f1e5d3",
      "Alberta Beige": "#e2d2ba",
      "Alberta Dark Grey": "#525254",
      "Alberta Grey": "#9fa0a4",
    },
    colorImages: {
      "Alberta White": "./images/germfree/alberata/Alberta White.webp",
      "Alberta Almond": "./images/germfree/alberata/Alberta Almond.webp",
      "Alberta Beige": "./images/germfree/alberata/Alberta Beige.webp",
      "Alberta Dark Grey": "./images/germfree/alberata/Alberta Dark Grey.webp",
      "Alberta Grey": "./images/germfree/alberata/Alberta Grey.webp",
    },
    finishImages: {
      Polished: "./images/germfree/alberata/Alberta White.webp",
      Matt: "./images/germfree/alberata/Alberta Dark Grey.webp",
    },
    texture: "Stone",
    finish: ["Polished", "Matt"],
    sizes: ["800×800", "600×1200", "1200×1200"],
    surface: ["Antibacterial", "POSH+", "Scratch Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-sun",
        title: "Photocatalytic ViroStop®",
        desc: "TiO₂ photocatalyst activated by light continuously oxidises and destroys bacteria and VOCs.",
      },
      {
        icon: "fa-solid fa-mountain",
        title: "Natural Stone Aesthetic",
        desc: "Sophisticated mineral textures and authentic grain flows that seamlessly elevate modern and classic spaces.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Permanent Protection",
        desc: "Unlike surface sprays, the antimicrobial action is part of the tile — never washes away.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Matt",
      Thickness: "9 mm",
      Rectified: "Yes",
      AntibacStandard: "ISO 22196 / Photocatalytic TiO₂",
    },
  },
];

// ── FIX 1: Only use valid IDs that exist in TILES (0–7) ──
const FEATURED_IDS = [1, 3, 5, 7];

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

// ── FIX 2: Color keyword map — sidebar swatch name → keyword to match in tile.colorKeywords ──
const COLOR_KEYWORD_MAP = {
  White: "white",       // White Crystal · Coated White · Alberta White · Statuario White
  Ivory: "ivory",       // AntiBac Ivory · Calacatta Gold · Nordic Oak · Alberta Almond
  Beige: "beige",       // AntiBac Beige · Beige Marble · BioGuard Beige & Earth Brown · Natural/Honey Oak · Alberta Beige
  Grey: "grey",         // AntiBac Grey · BioGuard Slate/Ash · SterileGloss Light Ash/Silver Mist/Urban Grey · Endura Modern/Stone Grey · Alberta Grey
  Charcoal: "charcoal", // BioGuard Charcoal Stone · SterileGloss Charcoal Slate · Endura Parx Slate · Alberta Dark Grey
  Black: "black",       // Aeon Nero Marquina
  Green: "green",       // HygieneShield Emerald Green Marble
};

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
    // Color: match sidebar color name against tile's colorKeywords array
    if (state.colors.size > 0) {
      const tileKeywords = t.colorKeywords || [];
      const matched = [...state.colors].some((swatchName) => {
        const kw = COLOR_KEYWORD_MAP[swatchName];
        return kw && tileKeywords.includes(kw);
      });
      if (matched) return true;
    }

    if (state.textures.size > 0 && state.textures.has(t.texture)) return true;

    if (
      state.finishes.size > 0 &&
      t.finish.some((f) => state.finishes.has(f))
    )
      return true;

    if (state.sizes.size > 0 && t.sizes.some((s) => state.sizes.has(s)))
      return true;

    if (
      state.surfaces.size > 0 &&
      t.surface.some((s) => state.surfaces.has(s))
    )
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
            <button class="prod-wish" aria-label="Save to wishlist"><i class="fa-regular fa-heart"></i></button>
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

function clearAll() {
  Object.values(pending).forEach((s) => s.clear());
  Object.values(applied).forEach((s) => s.clear());
  syncUIFromPending();
  renderGrid();
  renderChips();
  updateApplyBtn();
}

function openDetail(id) {
  const tile = TILES.find((t) => t.id === id);
  if (!tile) return;

  document.getElementById("detailBreadcrumbName").textContent = tile.title;
  document.getElementById("detailTag").textContent = tile.tag;
  document.getElementById("detailName").textContent = tile.title;
  document.getElementById("detailDesc").textContent = tile.description;
  document.getElementById("detailMainImg").src = tile.image;
  document.getElementById("detailMainImg").alt = tile.title;
  document
    .querySelectorAll("#detailEnquireWA")
    .forEach(
      (el) =>
        (el.href = `https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}`),
    );

  const thumbImgs = tile.thumbImages?.length ? tile.thumbImages : [tile.image];
  const thumbsEl = document.getElementById("detailThumbs");
  thumbsEl.innerHTML = "";
  thumbImgs.forEach((src, i) => {
    const d = document.createElement("div");
    d.className = "detail-thumb" + (i === 0 ? " active" : "");
    d.innerHTML = `<img src="${src}" alt="view ${i + 1}"/>`;
    d.addEventListener("click", () => {
      document.getElementById("detailMainImg").src = src;
      thumbsEl
        .querySelectorAll(".detail-thumb")
        .forEach((t) => t.classList.remove("active"));
      d.classList.add("active");
    });
    thumbsEl.appendChild(d);
  });

  const specRows = [
    ["Texture", tile.texture],
    ["Colours Available", tile.colours],
    ["Finishes", tile.finish.join(", ")],
    ["Sizes", tile.sizes.join(", ")],
    ["Surface", tile.surface.join(", ")],
    ["Antibac Standard", tile.tech.AntibacStandard || "ISO 22196"],
  ];
  document.getElementById("detailSpecTable").innerHTML = specRows
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  function updateMainImage(newSrc) {
    const mainImg = document.getElementById("detailMainImg");
    mainImg.style.transition = "opacity 0.2s";
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = "1";
    }, 200);
  }

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

  document.getElementById("detailFinishes").innerHTML = tile.finish
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

  document.getElementById("detailSizes").innerHTML = tile.sizes
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
      updateMainImage(tile.sizeImages?.[sb.textContent.trim()] || tile.image);
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
      (t) => `<div class="related-card" data-id="${t.id}">
      <div class="related-card-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div>
      <div class="related-card-body">
        <p class="related-card-tag">${t.tag}</p>
        <p class="related-card-name">${t.title}</p>
      </div></div>`,
    )
    .join("");
  document
    .querySelectorAll(".related-card")
    .forEach((rc) =>
      rc.addEventListener("click", () => openDetail(parseInt(rc.dataset.id))),
    );

  // Reset tabs to Features
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

function closeDetail() {
  document.getElementById("detailOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function renderFeatured() {
  // Guard: only render IDs that actually exist in TILES
  const validIds = FEATURED_IDS.filter((id) => TILES.find((x) => x.id === id));
  document.getElementById("featuredGrid").innerHTML = validIds
    .map((id) => {
      const t = TILES.find((x) => x.id === id);
      return `<div class="feat-card" data-id="${id}">
      <div class="feat-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div>
      <div class="feat-body">
        <p class="feat-tag">${t.tag}</p>
        <h4 class="feat-name">${t.title}</h4>
        <p class="feat-desc">${t.description}</p>
        <div class="feat-meta">
          <span><strong>${t.colours}</strong> Color</span>
          <span><strong>${t.finishes}</strong> Finish</span>
        </div>
      </div></div>`;
    })
    .join("");
  document
    .querySelectorAll(".feat-card")
    .forEach((fc) =>
      fc.addEventListener("click", () => openDetail(parseInt(fc.dataset.id))),
    );
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  renderFeatured();

  document
    .querySelectorAll(".filter-group-header")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".filter-group").classList.toggle("open"),
      ),
    );

  document.querySelectorAll(".swatch-item").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const c = el.dataset.color;
      if (el.classList.contains("active")) pending.colors.add(c);
      else pending.colors.delete(c);
      updateApplyBtn();
    }),
  );

  document.querySelectorAll(".texture-thumb").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const x = el.dataset.texture;
      if (el.classList.contains("active")) pending.textures.add(x);
      else pending.textures.delete(x);
      updateApplyBtn();
    }),
  );

  document.querySelectorAll("[data-finish]").forEach((cb) =>
    cb.addEventListener("change", () => {
      if (cb.checked) pending.finishes.add(cb.dataset.finish);
      else pending.finishes.delete(cb.dataset.finish);
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
      if (cb.checked) pending.surfaces.add(cb.dataset.surface);
      else pending.surfaces.delete(cb.dataset.surface);
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

  // ── FIX 3: Use event delegation on the grid for "View More" ──
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