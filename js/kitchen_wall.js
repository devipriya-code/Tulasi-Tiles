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
    title: "Carrara Marble",
    tag: "CARRARA MARBLE",
    description:
      "Classic 3×6 inch marble subway tiles with elegant gray veining. Sourced from the finest Italian quarries, these tiles bring timeless luxury to kitchen floors.",
    colours: 4,
    finishes: 2,
    image: "./images/kitchen_img1.avif",
    badge: "Carrara",
    thumbImages: [
      "./images/cararamarble-1.jpg",
      "./images/cararamarble-2.jpg",
      "./images/cararamarble-3.jpg",
      "./images/cararamarble-4.jpg",
    ],
    colors: ["Pearl", "Shell", "Graphite", "Warm Ivory"],
    colorsHex: {
      Pearl: "#f5f0ea",
      Shell: "#d4c8b8",
      Graphite: "#0F0F10",
      "Warm Ivory": "#1B3A32",
    },
    colorImages: {
      Pearl: "./images/cararamarble-2.jpg",
      Shell: "./images/cararamarble-3.jpg",
      Graphite: "./images/cararamarble-4.jpg",
      "Warm Ivory": "./images/cararamarble-1.jpg",
    },
    finishImages: {
      Polished: "./images/cararamarble-1.jpg",
      Satin: "./images/cararamarble-2.jpg",
    },
    sizeImages: {
      "600×600": "./images/cararamarble-2.jpg",
      "300×600": "./images/cararamarble-3.jpg",
    },
    texture: "Marble",
    finish: ["Polished", "Satin"],
    sizes: ["600×600", "300×600"],
    surface: ["POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Natural Marble",
        desc: "Genuine Italian Carrara marble with unique natural veining patterns.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Factory-sealed surface repels oils, sauces and liquid spills.",
      },
      {
        icon: "fa-solid fa-temperature-half",
        title: "Thermal Stable",
        desc: "Maintains structural integrity across temperature extremes.",
      },
    ],
    tech: {
      Material: "Natural Marble",
      Origin: "Italy (Carrara)",
      MOHs: "4–5",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 1,
    title: "Hexagonal Cement",
    tag: "HEXAGONAL CEMENT",
    description:
      "1-inch hex cement tiles in matte gray finish for modern kitchens. A contemporary geometric pattern that pairs beautifully with stainless steel and dark cabinetry.",
    colours: 2,
    finishes: 1,
    image: "./images/kitchen_img2.avif",
    badge: "Hexagonal",
    thumbImages: [
      "./images/hexcementtiles-1.jpg",
      "./images/hexcementtiles-2.jpg",
      "./images/hexcementtiles-3.png",
      "./images/hexcementtiles-4.png",
    ],
    colors: ["Graphite", "Shell"],
    colorsHex: { Graphite: "#4a4540", Shell: "#d4c8b8" },
    colorImages: {
      Graphite: "./images/hexcementtiles-1.jpg",
      Shell: "./images/hexcementtiles-2.jpg",
    },
    finishImages: { Matt: "./images/hexcementtiles-1.jpg" },
    sizeImages: {
      "200×400": "./images/hexcementtiles-3.png",
      "300×600": "./images/hexcementtiles-4.png",
    },
    texture: "Cement",
    finish: ["Matt"],
    sizes: ["200×400", "300×600"],
    surface: ["Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-shapes",
        title: "Hex Pattern",
        desc: "Geometric hexagonal layout adds visual interest to any floor.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Matte textured surface provides excellent grip when wet.",
      },
      {
        icon: "fa-solid fa-leaf",
        title: "Eco Cement",
        desc: "Made with recycled Portland cement and mineral pigments.",
      },
    ],
    tech: {
      Material: "Cement / Porcelain",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Matt",
      Thickness: "12 mm",
      Rectified: "No",
    },
  },
  {
    id: 2,
    title: "Herringbone Ceramic",
    tag: "HERRINGBONE CERAMIC",
    description:
      "White ceramic tiles in a timeless herringbone pattern. The classic zigzag layout creates a sense of movement and elegance in any kitchen.",
    colours: 4,
    finishes: 4,
    image: "./images/kitchen_img3.avif",
    badge: "Herringbone",
    thumbImages: [
      "./images/herringbonetile-1.jpeg",
      "./images/herringbonetile-2.jpeg",
      "./images/herringbonetile-3.jpeg",
      "./images/herringbonetile-4.jpeg",
    ],
    colors: ["Off-White", "marble white", "warm griege", "Slate Blue"],
    colorsHex: {
      "Off-White": "#E7E4E0",
      "marble white": "#9D9DA0",
      "warm griege": "#B8B0A6",
      "Slate Blue": "#3D4F6B",
    },
    colorImages: {
      "Off-White": "./images/herringbonetile-1.jpeg",
      "marble white": "./images/herringbonetile-2.jpeg",
      "warm griege": "./images/herringbonetile-3.jpeg",
      "Slate Blue": "./images/herringbonetile-4.jpeg",
    },
    finishImages: {
      "Off-White": "./images/herringbonetile-1.jpeg",
      "marble white": "./images/herringbonetile-2.jpeg",
      "warm griege": "./images/herringbonetile-3.jpeg",
      "Slate Blue": "./images/herringbonetile-4.jpeg",
    },
    sizeImages: {
      "200×400": "./images/herringbonetile-1.jpeg",
      "300×600": "./images/herringbonetile-2.jpeg",
    },
    texture: "Ceramic",
    finish: ["Matt", "Glazed"],
    sizes: ["200×400", "300×600"],
    surface: ["Antibacterial"],
    features: [
      {
        icon: "fa-solid fa-arrow-right-arrow-left",
        title: "Herringbone Layout",
        desc: "Classic diagonal pattern adds architectural depth.",
      },
      {
        icon: "fa-solid fa-bacteria",
        title: "Antibacterial",
        desc: "Silver-ion technology inhibits bacterial growth on the surface.",
      },
      {
        icon: "fa-solid fa-circle-check",
        title: "Easy Clean",
        desc: "Smooth glazed surface wipes clean with minimal effort.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Spain",
      MOHs: "5",
      WaterAbsorption: "<6%",
      SurfaceFinish: "Matt / Glazed",
      Thickness: "8 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 3,
    title: "Moroccan Zellige",
    tag: "MOROCCAN ZELLIGE",
    description:
      "Handcrafted glazed tiles with subtle colour variations — no two tiles are identical. Each piece is shaped and fired individually by Moroccan artisans.",
    colours: 6,
    finishes: 1,
    image: "./images/kitchen_img5.avif",
    badge: "Zellige",
    thumbImages: [
      "./images/moroccanzellige-1.jpg",
      "./images/moroccanzellige-2.jpg",
      "./images/moroccanzellige-3.jpg",
      "./images/moroccanzellige-4.jpg",
    ],
    colors: ["Peach", "Leaf", "Brick", "Hazel", "Pearl", "Shell"],
    colorsHex: {
      Peach: "#e8c4a0",
      Leaf: "#6b8f5e",
      Brick: "#c0392b",
      Hazel: "#8b6f47",
      Pearl: "#f5f0ea",
      Shell: "#d4c8b8",
    },
    colorImages: {
      Peach: "./images/moroccanzellige-1.jpg",
      Leaf: "./images/moroccanzellige-2.jpg",
      Brick: "./images/moroccanzellige-3.jpg",
      Hazel: "./images/moroccanzellige-4.jpg",
      Pearl: "./images/moroccanzellige-1.jpg",
      Shell: "./images/moroccanzellige-2.jpg",
    },
    finishImages: { Glazed: "./images/moroccanzellige-1.jpg" },
    sizeImages: { "200×400": "./images/moroccanzellige-3.jpg" },
    texture: "Zellige",
    finish: ["Glazed"],
    sizes: ["200×400"],
    surface: ["POSH+"],
    features: [
      {
        icon: "fa-solid fa-hands",
        title: "Handcrafted",
        desc: "Each tile individually shaped and glazed by Moroccan artisans.",
      },
      {
        icon: "fa-solid fa-palette",
        title: "Natural Variation",
        desc: "Subtle colour and texture variation gives an authentic artisanal look.",
      },
      {
        icon: "fa-solid fa-fire",
        title: "High-Fire Glaze",
        desc: "Kiln-fired glaze locks in colour for a lifetime of vibrancy.",
      },
    ],
    tech: {
      Material: "Terracotta / Ceramic",
      Origin: "Morocco",
      MOHs: "4",
      WaterAbsorption: "<4%",
      SurfaceFinish: "Glazed",
      Thickness: "14 mm",
      Rectified: "No",
    },
  },
  {
    id: 4,
    title: "Black Matte Subway",
    tag: "BLACK MATTE SUBWAY",
    description:
      "3×6 inch matte black tiles for bold contemporary kitchens. A strong design statement that pairs perfectly with raw concrete, brass fixtures and open shelving.",
    colours: 1,
    finishes: 1,
    image: "./images/kitchen_img6.avif",
    badge: "Matte Black",
    thumbImages: [
      "./images/blackmattesub-1.jpg",
      "./images/blackmattesub-2.jpg",
      "./images/blackmattesub-3.jpg",
      "./images/blackmattesub-4.jpg",
    ],
    colors: ["Black"],
    colorsHex: { Black: "#1a1814" },
    colorImages: { Black: "./images/blackmattesub-1.jpg" },
    finishImages: { Matt: "./images/blackmattesub-2.jpg" },
    sizeImages: { "300×600": "./images/blackmattesub-3.jpg" },
    texture: "Ceramic",
    finish: ["Matt"],
    sizes: ["300×600"],
    surface: ["Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-moon",
        title: "Deep Matte",
        desc: "Ultra-matte surface absorbs light for a dramatic contemporary look.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Nano-coating prevents oil and colour staining.",
      },
      {
        icon: "fa-solid fa-ruler-combined",
        title: "Rectified Edge",
        desc: "Precision-cut edges allow tight 1 mm grout joints.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Portugal",
      MOHs: "5",
      WaterAbsorption: "<5%",
      SurfaceFinish: "Matt",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 5,
    title: "Fish Scale Mosaic",
    tag: "FISH SCALE MOSAIC",
    description:
      "Iridescent glass tiles in a captivating scalloped pattern. The curved edges catch light at every angle, creating a dynamic shimmering surface.",
    colours: 4,
    finishes: 1,
    image: "./images/kitchen_img7.avif",
    badge: "Fish Scale",
    thumbImages: [
      "./images/fishscalemmosaic-1.jpg",
      "./images/fishscalemosaic-2.jpg",
      "./images/fishscalemosaic-3.jpg",
      "./images/fishscalemosaic-4.jpg",
    ],
    colors: ["Pearl", "Leaf", "Peach", "Shell"],
    colorsHex: {
      Pearl: "#f5f0ea",
      Leaf: "#6b8f5e",
      Peach: "#e8c4a0",
      Shell: "#d4c8b8",
    },
    colorImages: {
      Pearl: "./images/fishscalemmosaic-1.jpg",
      Leaf: "./images/fishscalemosaic-2.jpg",
      Peach: "./images/fishscalemosaic-3.jpg",
      Shell: "./images/fishscalemosaic-4.jpg",
    },
    finishImages: { Polished: "./images/fishscalemmosaic-1.jpg" },
    sizeImages: { "200×400": "./images/fishscalemosaic-2.jpg" },
    texture: "Mosaic",
    finish: ["Polished"],
    sizes: ["200×400"],
    surface: ["POSH+"],
    features: [
      {
        icon: "fa-solid fa-water",
        title: "Scallop Pattern",
        desc: "Fish-scale shape inspired by traditional Japanese Uroko motif.",
      },
      {
        icon: "fa-regular fa-sun",
        title: "Iridescent Glass",
        desc: "Metallic glass finish reflects light for a shimmering effect.",
      },
      {
        icon: "fa-solid fa-grid-2",
        title: "Mesh Backed",
        desc: "Pre-mounted on fibreglass mesh for easy, precise installation.",
      },
    ],
    tech: {
      Material: "Glass",
      Origin: "China",
      MOHs: "6",
      WaterAbsorption: "0%",
      SurfaceFinish: "Polished",
      Thickness: "6 mm",
      Rectified: "N/A",
    },
  },
  {
    id: 6,
    title: "Brick Red Ceramic",
    tag: "BRICK RED CERAMIC",
    description:
      "Traditional red clay tiles with rustic farmhouse appeal. The warm terracotta tones evoke the charm of a traditional country kitchen.",
    colours: 2,
    finishes: 2,
    image: "./images/kitchen_img8.jpg",
    badge: "Brick Red",
    thumbImages: [
      "./images/brikredceramic-1.jpg",
      "./images/brikredceramic-2.jpg",
      "./images/brikredceramic-3.jpg",
      "./images/brikceramic-4.jpg",
    ],
    colors: ["Brick", "Hazel"],
    colorsHex: { Brick: "#c0392b", Hazel: "#8b6f47" },
    colorImages: {
      Brick: "./images/brikredceramic-1.jpg",
      Hazel: "./images/brikredceramic-2.jpg",
    },
    finishImages: {
      Rustic: "./images/brikredceramic-3.jpg",
      Matt: "./images/brikceramic-4.jpg",
    },
    sizeImages: {
      "600×600": "./images/brikredceramic-1.jpg",
      "300×600": "./images/brikredceramic-2.jpg",
    },
    texture: "Ceramic",
    finish: ["Rustic", "Matt"],
    sizes: ["600×600", "300×600"],
    surface: ["Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-fire-flame-simple",
        title: "Kiln Fired",
        desc: "High-temperature kiln firing creates the characteristic terracotta tone.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Natural roughness provides excellent slip resistance.",
      },
      {
        icon: "fa-solid fa-house",
        title: "Farmhouse Style",
        desc: "Classic brick red perfectly suits rustic and traditional interiors.",
      },
    ],
    tech: {
      Material: "Red Ceramic",
      Origin: "India",
      MOHs: "4",
      WaterAbsorption: "<8%",
      SurfaceFinish: "Rustic / Matt",
      Thickness: "10 mm",
      Rectified: "No",
    },
  },
  {
    id: 7,
    title: "Geometric Pattern",
    tag: "GEOMETRIC PATTERN",
    description:
      "Colourful encaustic cement tiles in arabesque design. Bold, graphic patterns add personality and a focal point to open-plan kitchen floors.",
    colours: 8,
    finishes: 1,
    image: "./images/kitchen_img9.avif",
    badge: "Geometric",
    thumbImages: [
      "./images/geometricpattern-1.jpg",
      "./images/geometricpattern-2.jpg",
      "./images/geometricpattern-3.jpg",
      "./images/geometricpattern-4.jpg",
    ],
    colors: [
      "Peach",
      "Leaf",
      "Brick",
      "Hazel",
      "Pearl",
      "Shell",
      "Graphite",
      "Black",
    ],
    colorsHex: {
      Peach: "#e8c4a0",
      Leaf: "#6b8f5e",
      Brick: "#c0392b",
      Hazel: "#8b6f47",
      Pearl: "#f5f0ea",
      Shell: "#d4c8b8",
      Graphite: "#4a4540",
      Black: "#1a1814",
    },
    colorImages: {
      Peach: "./images/geometricpattern-1.jpg",
      Leaf: "./images/geometricpattern-2.jpg",
      Brick: "./images/geometricpattern-3.jpg",
      Hazel: "./images/geometricpattern-4.jpg",
      Pearl: "./images/geometricpattern-1.jpg",
      Shell: "./images/geometricpattern-2.jpg",
      Graphite: "./images/geometricpattern-3.jpg",
      Black: "./images/geometricpattern-4.jpg",
    },
    finishImages: { Matt: "./images/geometricpattern-1.jpg" },
    sizeImages: {
      "600×600": "./images/geometricpattern-2.jpg",
      "800×800": "./images/geometricpattern-3.jpg",
    },
    texture: "Cement",
    finish: ["Matt"],
    sizes: ["600×600", "800×800"],
    surface: ["Antibacterial", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-compass-drafting",
        title: "Arabesque Design",
        desc: "Intricate geometric pattern draws on Moorish architectural tradition.",
      },
      {
        icon: "fa-solid fa-palette",
        title: "8 Colourways",
        desc: "Choose from 8 rich colour combinations to match your scheme.",
      },
      {
        icon: "fa-solid fa-bacteria",
        title: "Antibacterial",
        desc: "Surface treatment inhibits bacteria for a hygienic kitchen environment.",
      },
    ],
    tech: {
      Material: "Encaustic Cement",
      Origin: "Mexico",
      MOHs: "5",
      WaterAbsorption: "<4%",
      SurfaceFinish: "Matt",
      Thickness: "12 mm",
      Rectified: "No",
    },
  },
  {
    id: 8,
    title: "Concrete Effect",
    tag: "CONCRETE EFFECT",
    description:
      "Large-format porcelain with urban concrete finish. Ideal for open-plan kitchens where seamless, expansive flooring is the goal.",
    colours: 3,
    finishes: 2,
    image: "./images/kitchen_img10.avif",
    badge: "Concrete",
    thumbImages: [
      "./images/concreteeffect-1.jpg",
      "./images/concreteeffect-2.jpg",
      "./images/concreteeffect-3.jpg",
      "./images/concreteeffect-4.jpg",
    ],
    colors: ["Graphite", "Shell", "Pearl"],
    colorsHex: { Graphite: "#4a4540", Shell: "#d4c8b8", Pearl: "#f5f0ea" },
    colorImages: {
      Graphite: "./images/concreteeffect-1.jpg",
      Shell: "./images/concreteeffect-2.jpg",
      Pearl: "./images/concreteeffect-3.jpg",
    },
    finishImages: {
      Matt: "./images/concreteeffect-1.jpg",
      Satin: "./images/concreteeffect-4.jpg",
    },
    sizeImages: {
      "600×1200": "./images/concreteeffect-2.jpg",
      "1200×1200": "./images/concreteeffect-3.jpg",
      "800×800": "./images/concreteeffect-4.jpg",
    },
    texture: "Concrete",
    finish: ["Matt", "Satin"],
    sizes: ["600×1200", "1200×1200", "800×800"],
    surface: ["Anti-Skid", "POSH+"],
    features: [
      {
        icon: "fa-solid fa-city",
        title: "Industrial Aesthetic",
        desc: "Authentic concrete look without the maintenance of real concrete.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Big slabs minimise grout lines for a seamless, spacious feel.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid POSH+",
        desc: "Dual surface treatment for safety and premium tactile finish.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Matt / Satin",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 9,
    title: "Arabesque White",
    tag: "ARABESQUE WHITE",
    description:
      "White ceramic tiles in an elegant arabesque shape. The interlocking curves create a flowing, sculptural floor with a distinctly Mediterranean character.",
    colours: 2,
    finishes: 1,
    image: "./images/kitchen_img11.avif",
    badge: "Arabesque",
    thumbImages: [
      "./images/arabesquewhite-1.jpg",
      "./images/arabesquewhite-2.jpg",
      "./images/arabesquewhite-3.jpg",
      "./images/arabesquewhite-4.jpg",
    ],
    colors: ["Pearl", "Shell"],
    colorsHex: { Pearl: "#f5f0ea", Shell: "#d4c8b8" },
    colorImages: {
      Pearl: "./images/arabesquewhite-1.jpg",
      Shell: "./images/arabesquewhite-2.jpg",
    },
    finishImages: { Glazed: "./images/arabesquewhite-3.jpg" },
    sizeImages: {
      "200×400": "./images/arabesquewhite-4.jpg",
      "300×600": "./images/arabesquewhite-1.jpg",
    },
    texture: "Ceramic",
    finish: ["Glazed"],
    sizes: ["200×400", "300×600"],
    surface: ["Antibacterial"],
    features: [
      {
        icon: "fa-solid fa-infinity",
        title: "Arabesque Shape",
        desc: "Interlocking curves inspired by classic Moroccan tile art.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Light Reflective",
        desc: "Glazed white finish brightens kitchens and maximises natural light.",
      },
      {
        icon: "fa-solid fa-bacteria",
        title: "Antibacterial Glaze",
        desc: "Silver-ion glaze actively inhibits bacterial growth.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Spain",
      MOHs: "5",
      WaterAbsorption: "<6%",
      SurfaceFinish: "Glazed",
      Thickness: "8 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 10,
    title: "Penny Round Mosaic",
    tag: "PENNY ROUND MOSAIC",
    description:
      "Small circular glass tiles on mesh backing — playful and light-catching. Perfect for adding a retro-modern accent to kitchen floors or feature walls.",
    colours: 5,
    finishes: 2,
    image: "./images/kitchen_img12.avif",
    badge: "Penny Round",
    thumbImages: [
      "./images/pennyroundmosaic-1.jpeg",
      "./images/pennyroundmosaic-2.jpeg",
      "./images/pennyroundmosaic-3.jpeg",
      "./images/pennyroundmosaic-4.jpeg",
    ],
    colors: ["Pearl", "Peach", "Leaf", "Shell", "Black"],
    colorsHex: {
      Pearl: "#f5f0ea",
      Peach: "#e8c4a0",
      Leaf: "#6b8f5e",
      Shell: "#d4c8b8",
      Black: "#1a1814",
    },
    colorImages: {
      Pearl: "./images/pennyroundmosaic-1.jpeg",
      Peach: "./images/pennyroundmosaic-2.jpeg",
      Leaf: "./images/pennyroundmosaic-3.jpeg",
      Shell: "./images/pennyroundmosaic-4.jpeg",
      Black: "./images/pennyroundmosaic-1.jpeg",
    },
    finishImages: {
      Polished: "./images/pennyroundmosaic-2.jpeg",
      Glazed: "./images/pennyroundmosaic-3.jpeg",
    },
    sizeImages: { "200×400": "./images/pennyroundmosaic-4.jpeg" },
    texture: "Mosaic",
    finish: ["Polished", "Glazed"],
    sizes: ["200×400"],
    surface: ["POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-regular fa-circle",
        title: "Penny Round",
        desc: "Classic 1-inch circular format for retro and contemporary aesthetics.",
      },
      {
        icon: "fa-solid fa-layer-group",
        title: "Mesh Backed",
        desc: "Fibreglass mesh backing simplifies cutting and laying on curved areas.",
      },
      {
        icon: "fa-solid fa-star",
        title: "Light-Catching",
        desc: "Polished glass surface catches and refracts natural and artificial light.",
      },
    ],
    tech: {
      Material: "Glass",
      Origin: "Turkey",
      MOHs: "6",
      WaterAbsorption: "0%",
      SurfaceFinish: "Polished / Glazed",
      Thickness: "6 mm",
      Rectified: "N/A",
    },
  },
];

const FEATURED_IDS = [1, 3, 7, 8];

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

  /* ── Update ALL WhatsApp links (detail-info panel + tab bar) ── */
  const waHref = `https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}`;
  document.querySelectorAll(".detail-enquire-wa").forEach((el) => {
    el.href = waHref;
  });

  /* ── Thumbnails ── */
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

  /* ── Unified image switcher ── */
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

  /* ── Spec table ── */
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

  /* ── Colors — scoped to detailColors container ── */
  const colorRow = document.getElementById("detailColors");
  colorRow.innerHTML = tile.colors
    .map(
      (c, i) =>
        `<span class="detail-swatch${i === 0 ? " active" : ""}" title="${c}" style="background:${tile.colorsHex[c]}" data-color="${c}"></span>`,
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

  /* ── Finishes — scoped to detailFinishes container ── */
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

  /* ── Sizes — scoped to detailSizes container ── */
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
