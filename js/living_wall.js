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
    title: "Carrara Elegance",
    tag: "CARRARA ELEGANCE",
    description:
      "Premium cream marble with warm golden veining laid in large-format slabs. A timeless foundation that elevates any living room with natural luxury.",
    colours: 3,
    finishes: 2,
    image: "./images/OAK HAVEN/Oak-Wood.webp",
    badge: "Carrara",
    thumbImages: [
      "./images/OAK HAVEN/Brown Oak.webp",
      "./images/carrara_thumb1.jpg",
      "./images/carrara_thumb2.jpg",
      "./images/carrara_thumb3.jpg",
    ],
    colors: ["Ivory", "Cream", "Gold"],
    colorsHex: { Ivory: "#f5f0e8", Cream: "#e8dcc8", Gold: "#c9a84c" },
    colorImages: {
      Ivory: "./images/living_room_img1.avif",
      Cream: "./images/living_room_img8.jpg",
      Gold: "./images/living_room_img6.avif",
    },
    finishImages: {
      Polished: "./images/living_room_img1.avif",
      Satin: "./images/living_room_img4.avif",
    },
    sizeImages: {
      "800×800": "./images/living_room_img1.avif",
      "600×1200": "./images/living_room_img1.avif",
    },
    texture: "Marble",
    finish: ["Polished", "Satin"],
    sizes: ["800×800", "600×1200"],
    surface: ["POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Natural Marble Look",
        desc: "High-definition surface replicates authentic Carrara marble veining.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "POSH+ nano coating repels oils and liquid spills effortlessly.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Big slabs reduce grout lines for a seamless, spacious feel.",
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
    },
  },
  {
    id: 1,
    title: "Oak Haven",
    tag: "OAK HAVEN",
    description:
      "Warm oak wood-look porcelain planks with realistic grain texture. Brings the charm of hardwood floors with tile's superior durability.",
    colours: 5,
    finishes: 4,
    image: "./images/OAK HAVEN/Oak-Wood.webp",
    badge: "Wood Look",
    thumbImages: [
      "./images/OAK HAVEN/Brown Oak.webp",
      "./images/OAK HAVEN/Dark Oak.webp",
      "./images/OAK HAVEN/Light Oak.webp",
      "./images/OAK HAVEN/Natural Oak.webp",
      "./images/OAK HAVEN/Beige Oak.webp",
    ],
    colors: ["Brown", "Beige","LightOak","NaturalOak","DarkOak"],
    colorsHex: {
      Brown: "#9A6B4A",
      Beige: "#D8BC9A",
      LightOak: "#CFA77A",
      NaturalOak: "#C08A55",
      DarkOak: "#3D312C",
    },
    colorImages: {
      Brown: "./images/OAK HAVEN/Brown Oak.webp",
      Beige: " ./images/OAK HAVEN/Beige Oak.webp",
      LightOak: "./images/OAK HAVEN/Light Oak.webp",
      NaturalOak: "./images/OAK HAVEN/Natural Oak.webp",
      DarkOak: "./images/OAK HAVEN/Dark Oak.webp",
    },
    finishImages: {
      Rustic: "./images/OAK HAVEN/Brown Oak.webp",
      Smooth: "./images/OAK HAVEN/Beige Oak.webp",
      FineGrain: "./images/OAK HAVEN/Light Oak.webp",
      RusticBrushed: "./images/OAK HAVEN/Dark Oak.webp",
    },
    // sizeImages: { "200×1200": "./images/living_room_img2.avif", "800×800": "./images/living_room_img3.jpg" },
    texture: "Wood",
    finish: ["Rustic","Smooth","FineGrain"," RusticBrushed"],
    sizes: ["200×1200", "800×800"],
    surface: ["Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-tree",
        title: "Wood Grain Realism",
        desc: "Precision-printed grain texture is virtually indistinguishable from real oak.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Textured matte surface provides safe footing in high-traffic areas.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Waterproof",
        desc: "Porcelain core won't warp, swell or fade unlike real timber floors.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Rustic Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 2,
    title: "GeoChic Hex",
    tag: "GEOCHIC HEX",
    description:
      "Contemporary hexagonal tiles with a modern geometric design. Makes a bold artistic statement for eclectic and design-forward living rooms.",
    colours: 3,
    finishes: 2,
    image: "./images/living_room_img3.jpg",
    badge: "Geometric",
    thumbImages: [
      "./images/living_room_img3.jpg",
      "./images/geochic_thumb1.jpg",
      "./images/geochic_thumb2.jpg",
      "./images/geochic_thumb3.jpg",
    ],
    colors: ["Brown", "Grey", "Beige"],
    colorsHex: { Brown: "#7a5c3c", Grey: "#a0a0a0", Beige: "#c8a87a" },
    colorImages: {
      Brown: "./images/living_room_img3.jpg",
      Grey: "./images/living_room_img10.avif",
      Beige: "./images/living_room_img12.jpg",
    },
    finishImages: {
      Matt: "./images/living_room_img3.jpg",
      Rustic: "./images/living_room_img3.jpg",
    },
    sizeImages: {
      "600×600": "./images/living_room_img3.jpg",
      "800×800": "./images/living_room_img3.jpg",
    },
    texture: "Geometric",
    finish: ["Matt", "Rustic"],
    sizes: ["600×600", "800×800"],
    surface: ["Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-shapes",
        title: "Hex Pattern",
        desc: "Bold hexagonal geometry adds architectural depth and visual movement.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Matte surface ensures excellent grip for family living spaces.",
      },
      {
        icon: "fa-solid fa-leaf",
        title: "Versatile Style",
        desc: "Pairs beautifully with both Scandinavian and industrial interiors.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Matt / Rustic",
      Thickness: "10 mm",
      Rectified: "No",
    },
  },
  {
    id: 3,
    title: "Slate Horizon",
    tag: "SLATE HORIZON",
    description:
      "Natural slate texture tiles with rich colour variations and earthy warmth. Each tile carries the organic character of natural stone.",
    colours: 2,
    finishes: 1,
    image: "./images/living_room_img4.avif",
    badge: "Slate",
    thumbImages: [
      "./images/living_room_img4.avif",
      "./images/slate_thumb1.jpg",
      "./images/slate_thumb2.jpg",
      "./images/slate_thumb3.jpg",
    ],
    colors: ["Grey", "Brown"],
    colorsHex: { Grey: "#a0a0a0", Brown: "#7a5c3c" },
    colorImages: {
      Grey: "./images/living_room_img4.avif",
      Brown: "./images/living_room_img3.jpg",
    },
    finishImages: { Matt: "./images/living_room_img4.avif" },
    sizeImages: {
      "600×600": "./images/living_room_img4.avif",
      "600×1200": "./images/living_room_img4.avif",
    },
    texture: "Stone",
    finish: ["Matt"],
    sizes: ["600×600", "600×1200"],
    surface: ["Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-mountain",
        title: "Natural Stone Look",
        desc: "Authentic slate surface texture gives depth and organic warmth.",
      },
      {
        icon: "fa-solid fa-palette",
        title: "Rich Variation",
        desc: "Each tile features subtle natural colour shifts for an authentic feel.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Textured surface provides traction for safe family living.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<1%",
      SurfaceFinish: "Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 4,
    title: "Modern Terrazzo",
    tag: "MODERN TERRAZZO",
    description:
      "Chic composite tiles with decorative stone chips in a white-grey matrix. A contemporary classic that brings artistic flair to any living space.",
    colours: 2,
    finishes: 1,
    image: "./images/living_room_img5.jpg",
    badge: "Terrazzo",
    thumbImages: [
      "./images/living_room_img5.jpg",
      "./images/terrazzo_thumb1.jpg",
      "./images/terrazzo_thumb2.jpg",
      "./images/terrazzo_thumb3.jpg",
    ],
    colors: ["White", "Grey"],
    colorsHex: { White: "#f8f8f8", Grey: "#a0a0a0" },
    colorImages: {
      White: "./images/living_room_img5.jpg",
      Grey: "./images/living_room_img10.avif",
    },
    finishImages: { Polished: "./images/living_room_img5.jpg" },
    sizeImages: {
      "600×600": "./images/living_room_img5.jpg",
      "800×800": "./images/living_room_img5.jpg",
    },
    texture: "Geometric",
    finish: ["Polished"],
    sizes: ["600×600", "800×800"],
    surface: ["POSH+", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-circle-dot",
        title: "Terrazzo Pattern",
        desc: "Classic mid-century design enjoying a major contemporary revival.",
      },
      {
        icon: "fa-solid fa-star",
        title: "POSH+ Finish",
        desc: "High-gloss surface treatment for maximum light reflection.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Sealed surface resists everyday staining for easy maintenance.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 5,
    title: "Herringbone Classic",
    tag: "HERRINGBONE CLASSIC",
    description:
      "Traditional herringbone pattern in warm wood tones. The iconic zigzag layout adds movement and timeless elegance to living room floors.",
    colours: 2,
    finishes: 2,
    image: "./images/living_room_img6.avif",
    badge: "Herringbone",
    thumbImages: [
      "./images/living_room_img6.avif",
      "./images/herringbone_thumb1.jpg",
      "./images/herringbone_thumb2.jpg",
      "./images/herringbone_thumb3.jpg",
    ],
    colors: ["Beige", "Cream"],
    colorsHex: { Beige: "#c8a87a", Cream: "#e8dcc8" },
    colorImages: {
      Beige: "./images/living_room_img6.avif",
      Cream: "./images/living_room_img2.avif",
    },
    finishImages: {
      Rustic: "./images/living_room_img6.avif",
      Matt: "./images/living_room_img3.jpg",
    },
    sizeImages: {
      "200×1200": "./images/living_room_img6.avif",
      "600×600": "./images/living_room_img6.avif",
    },
    texture: "Wood",
    finish: ["Rustic", "Matt"],
    sizes: ["200×1200", "600×600"],
    surface: ["Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-arrow-right-arrow-left",
        title: "Herringbone Layout",
        desc: "Classic diagonal pattern adds architectural depth and sophisticated energy.",
      },
      {
        icon: "fa-solid fa-fire-flame-simple",
        title: "Kiln Fired",
        desc: "High-temperature firing locks in colour for lifetime vibrancy.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Textured surface provides reliable traction throughout the home.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Spain",
      MOHs: "5",
      WaterAbsorption: "<4%",
      SurfaceFinish: "Rustic / Matt",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 6,
    title: "Urban Concrete",
    tag: "URBAN CONCRETE",
    description:
      "Industrial-chic concrete effect porcelain with smooth matte finish. Makes a bold contemporary statement in open-plan living spaces.",
    colours: 2,
    finishes: 2,
    image: "./images/living_room_img7.jpg",
    badge: "Concrete",
    thumbImages: [
      "./images/living_room_img7.jpg",
      "./images/concrete_thumb1.jpg",
      "./images/concrete_thumb2.jpg",
      "./images/concrete_thumb3.jpg",
    ],
    colors: ["Grey", "White"],
    colorsHex: { Grey: "#a0a0a0", White: "#f8f8f8" },
    colorImages: {
      Grey: "./images/living_room_img7.jpg",
      White: "./images/living_room_img10.avif",
    },
    finishImages: {
      Matt: "./images/living_room_img7.jpg",
      Satin: "./images/living_room_img10.avif",
    },
    sizeImages: {
      "600×1200": "./images/living_room_img7.jpg",
      "1200×1200": "./images/living_room_img7.jpg",
    },
    texture: "Stone",
    finish: ["Matt", "Satin"],
    sizes: ["600×1200", "1200×1200"],
    surface: ["Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-city",
        title: "Industrial Aesthetic",
        desc: "Authentic concrete look without the maintenance challenges of real concrete.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Big slabs minimise grout lines for a seamless, expansive feel.",
      },
      {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Easy Maintain",
        desc: "Non-porous surface resists dirt, stains and daily wear effortlessly.",
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
    id: 7,
    title: "Chevron Luxe",
    tag: "CHEVRON LUXE",
    description:
      "Elegant chevron pattern in premium walnut tones. The sharp V-shaped layout creates a dynamic, high-energy floor with contemporary sophistication.",
    colours: 2,
    finishes: 1,
    image: "./images/living_room_img8.jpg",
    badge: "Chevron",
    thumbImages: [
      "./images/living_room_img8.jpg",
      "./images/chevron_thumb1.jpg",
      "./images/chevron_thumb2.jpg",
      "./images/chevron_thumb3.jpg",
    ],
    colors: ["Brown", "Beige"],
    colorsHex: { Brown: "#7a5c3c", Beige: "#c8a87a" },
    colorImages: {
      Brown: "./images/living_room_img8.jpg",
      Beige: "./images/living_room_img6.avif",
    },
    finishImages: { Rustic: "./images/living_room_img8.jpg" },
    sizeImages: {
      "200×1200": "./images/living_room_img8.jpg",
      "600×600": "./images/living_room_img8.jpg",
    },
    texture: "Wood",
    finish: ["Rustic"],
    sizes: ["200×1200", "600×600"],
    surface: ["Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-chevron-up",
        title: "Chevron Pattern",
        desc: "Precise V-shaped chevron creates bold directional movement on the floor.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "Walnut Tone",
        desc: "Rich warm brown palette evokes the luxury of real walnut hardwood.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Scratch Resistant",
        desc: "Hard-wearing surface stands up to furniture legs and daily traffic.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Rustic",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 8,
    title: "Tuscan Travertine",
    tag: "TUSCAN TRAVERTINE",
    description:
      "Natural stone-look tiles with warm beige tones and characteristic travertine pitting. Brings the romance of Italian architecture into your living room.",
    colours: 2,
    finishes: 2,
    image: "./images/living_room_img9.jpg",
    badge: "Travertine",
    thumbImages: [
      "./images/living_room_img9.jpg",
      "./images/travertine_thumb1.jpg",
      "./images/travertine_thumb2.jpg",
      "./images/travertine_thumb3.jpg",
    ],
    colors: ["Beige", "Gold"],
    colorsHex: { Beige: "#c8a87a", Gold: "#c9a84c" },
    colorImages: {
      Beige: "./images/living_room_img9.jpg",
      Gold: "./images/living_room_img8.jpg",
    },
    finishImages: {
      Polished: "./images/living_room_img9.jpg",
      Matt: "./images/living_room_img4.avif",
    },
    sizeImages: {
      "600×600": "./images/living_room_img9.jpg",
      "800×800": "./images/living_room_img9.jpg",
    },
    texture: "Marble",
    finish: ["Polished", "Matt"],
    sizes: ["600×600", "800×800"],
    surface: ["Stain Resistant", "POSH+"],
    features: [
      {
        icon: "fa-solid fa-mountain",
        title: "Travertine Texture",
        desc: "Unique natural pitting and veining replicated with high fidelity.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Warm Palette",
        desc: "Golden-beige tones create a welcoming Mediterranean atmosphere.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Sealed surface keeps the warm tones pristine for years.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Turkey",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Polished / Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 9,
    title: "French Parquet",
    tag: "FRENCH PARQUET",
    description:
      "Traditional parquet design with rich mahogany tones. The intricate interlocking pattern of classic French parquet, now in easy-care porcelain.",
    colours: 2,
    finishes: 1,
    image: "./images/living_room_img10.avif",
    badge: "Parquet",
    thumbImages: [
      "./images/living_room_img10.avif",
      "./images/parquet_thumb1.jpg",
      "./images/parquet_thumb2.jpg",
      "./images/parquet_thumb3.jpg",
    ],
    colors: ["Brown", "Beige"],
    colorsHex: { Brown: "#7a5c3c", Beige: "#c8a87a" },
    colorImages: {
      Brown: "./images/living_room_img10.avif",
      Beige: "./images/living_room_img6.avif",
    },
    finishImages: { Rustic: "./images/living_room_img10.avif" },
    sizeImages: {
      "600×600": "./images/living_room_img10.avif",
      "800×800": "./images/living_room_img10.avif",
    },
    texture: "Wood",
    finish: ["Rustic"],
    sizes: ["600×600", "800×800"],
    surface: ["Anti-Skid", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-table-cells",
        title: "Parquet Pattern",
        desc: "Classic French basketweave layout in rich mahogany tones.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Scratch Resistant",
        desc: "Dense porcelain surface withstands furniture and daily foot traffic.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Waterproof",
        desc: "Porcelain won't warp or swell — perfect for all climates.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "France",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Rustic",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 10,
    title: "Artisan Mosaic",
    tag: "ARTISAN MOSAIC",
    description:
      "Handcrafted mosaic tiles with intricate geometric patterns. Each sheet is a work of art, adding a unique focal point and storytelling element to living room floors.",
    colours: 3,
    finishes: 1,
    image: "./images/living_room_img11.jpg",
    badge: "Mosaic",
    thumbImages: [
      "./images/living_room_img11.jpg",
      "./images/mosaic_thumb1.jpg",
      "./images/mosaic_thumb2.jpg",
      "./images/mosaic_thumb3.jpg",
    ],
    colors: ["Ivory", "Beige", "Gold"],
    colorsHex: { Ivory: "#f5f0e8", Beige: "#c8a87a", Gold: "#c9a84c" },
    colorImages: {
      Ivory: "./images/living_room_img11.jpg",
      Beige: "./images/living_room_img12.jpg",
      Gold: "./images/living_room_img9.jpg",
    },
    finishImages: { Glazed: "./images/living_room_img11.jpg" },
    sizeImages: {
      "600×600": "./images/living_room_img11.jpg",
      "800×800": "./images/living_room_img11.jpg",
    },
    texture: "Mosaic",
    finish: ["Glazed"],
    sizes: ["600×600", "800×800"],
    surface: ["POSH+"],
    features: [
      {
        icon: "fa-solid fa-compass-drafting",
        title: "Intricate Pattern",
        desc: "Hand-set mosaic pieces create stunning geometric medallion designs.",
      },
      {
        icon: "fa-solid fa-palette",
        title: "Gold Accents",
        desc: "Metallic gold detailing adds warmth and opulence to the design.",
      },
      {
        icon: "fa-solid fa-layer-group",
        title: "Mesh Backed",
        desc: "Pre-mounted sheets ensure precise alignment and easy installation.",
      },
    ],
    tech: {
      Material: "Ceramic / Glass",
      Origin: "Morocco",
      MOHs: "5",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Glazed",
      Thickness: "8 mm",
      Rectified: "No",
    },
  },
  {
    id: 11,
    title: "Limestone Harmony",
    tag: "LIMESTONE HARMONY",
    description:
      "Natural limestone-look tiles with soft texture and subtle tonal variation. A calm, refined choice that suits both traditional and contemporary living rooms.",
    colours: 2,
    finishes: 2,
    image: "./images/living_room_img12.jpg",
    badge: "Limestone",
    thumbImages: [
      "./images/living_room_img12.jpg",
      "./images/limestone_thumb1.jpg",
      "./images/limestone_thumb2.jpg",
      "./images/limestone_thumb3.jpg",
    ],
    colors: ["Ivory", "Cream"],
    colorsHex: { Ivory: "#f5f0e8", Cream: "#e8dcc8" },
    colorImages: {
      Ivory: "./images/living_room_img12.jpg",
      Cream: "./images/living_room_img1.avif",
    },
    finishImages: {
      Matt: "./images/living_room_img12.jpg",
      Satin: "./images/living_room_img4.avif",
    },
    sizeImages: {
      "600×600": "./images/living_room_img12.jpg",
      "600×1200": "./images/living_room_img12.jpg",
    },
    texture: "Stone",
    finish: ["Matt", "Satin"],
    sizes: ["600×600", "600×1200"],
    surface: ["Stain Resistant", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-mountain",
        title: "Limestone Texture",
        desc: "Subtle natural surface variation delivers calm organic sophistication.",
      },
      {
        icon: "fa-solid fa-temperature-half",
        title: "Thermal Stable",
        desc: "Maintains structural integrity across all temperature conditions.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Scratch Resistant",
        desc: "Hard-fired surface resists everyday wear and furniture movement.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Portugal",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Matt / Satin",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
];

const FEATURED_IDS = [0, 5, 8, 6];
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
  document.getElementById("detailMainImg").src = tile.image;
  document.getElementById("detailMainImg").alt = tile.title;
  document.getElementById("detailEnquireWA").href =
    `https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}`;

  /* ── Thumbnails: use tile's own thumbImages array ── */
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
      document.getElementById("detailMainImg").src = src;
      thumbsEl
        .querySelectorAll(".detail-thumb")
        .forEach((t) => t.classList.remove("active"));
      d.classList.add("active");
    });
    thumbsEl.appendChild(d);
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

  /* ── Sizes ── */
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
      updateMainImage(tile.sizeImages[sb.textContent.trim()] || tile.image);
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

  // Filter group accordion toggles
  document
    .querySelectorAll(".filter-group-header")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".filter-group").classList.toggle("open"),
      ),
    );

  // Color swatches
  document.querySelectorAll(".swatch-item").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const c = el.dataset.color;
      if (el.classList.contains("active")) pending.colors.add(c);
      else pending.colors.delete(c);
      updateApplyBtn();
    }),
  );

  // Texture thumbs
  document.querySelectorAll(".texture-thumb").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const x = el.dataset.texture;
      if (el.classList.contains("active")) pending.textures.add(x);
      else pending.textures.delete(x);
      updateApplyBtn();
    }),
  );

  // Finish checkboxes
  document.querySelectorAll("[data-finish]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const f = cb.dataset.finish;
      if (cb.checked) pending.finishes.add(f);
      else pending.finishes.delete(f);
      updateApplyBtn();
    }),
  );

  // Size tags
  document.querySelectorAll(".size-tag").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const s = el.dataset.size;
      if (el.classList.contains("active")) pending.sizes.add(s);
      else pending.sizes.delete(s);
      updateApplyBtn();
    }),
  );

  // Surface checkboxes
  document.querySelectorAll("[data-surface]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const s = cb.dataset.surface;
      if (cb.checked) pending.surfaces.add(s);
      else pending.surfaces.delete(s);
      updateApplyBtn();
    }),
  );

  // Apply filters button
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

  // Clear all
  document.getElementById("clearAllBtn").addEventListener("click", clearAll);

  // Sort
  document.getElementById("sort-sel").addEventListener("change", renderGrid);

  // Grid view toggle
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

  // Product card "View More" click
  document.getElementById("productsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".prod-btn-view");
    if (btn) openDetail(parseInt(btn.dataset.id));
  });

  // Detail overlay close
  document.getElementById("detailClose").addEventListener("click", closeDetail);
  document.getElementById("detailOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("detailOverlay")) closeDetail();
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
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    }),
  );

  // Mobile filter toggle
  document
    .getElementById("mobileFilterToggle")
    .addEventListener("click", function () {
      const sb = document.getElementById("sidebar");
      sb.classList.toggle("mobile-open");
      this.innerHTML = sb.classList.contains("mobile-open")
        ? '<i class="fa-solid fa-xmark"></i> Close Filters'
        : '<i class="fa-solid fa-sliders"></i> Filters';
    });

  // Smooth scroll for anchor links
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
