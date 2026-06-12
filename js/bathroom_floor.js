/* =========================================================
   bathroom_floor.js — Bathroom Floor Tiles Collection
   Architecture mirrors living_wall.js exactly:
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
  {
    id: 0,
    title: "Classic White Subway",
    tag: "CLASSIC WHITE SUBWAY",
    description:
      "Timeless 75×150 mm glossy ceramic subway tiles with crisp white glaze. Suits both traditional and contemporary bathrooms.",
    colours: 1,
    finishes: 1,
    image: "./images/Bathroom-subway-tiles/bathroom-subwaytile-1.webp",
    badge: "Bestseller",
    thumbImages: [
      "./images/Bathroom-subway-tiles/bathroom-subwaytile-1.webp",
      "./images/Bathroom-subway-tiles/bathroom-subwaytile-2.webp",
      "./images/Bathroom-subway-tiles/bathroom-subwaytile-3.webp",
      "./images/Bathroom-subway-tiles/bathroom-subwaytile-4.webp",
      "./images/Bathroom-subway-tiles/bathroom-subwaytile-5.webp",
    ],
    colors: ["White"],
    colorsHex: { White: "#f8f8f8" },
    colorImages: {
      White: "./images/Bathroom-subway-tiles/bathroom-subwaytile-1.webp",
    },
    finishImages: {
      Glossy: "./images/Bathroom-subway-tiles/bathroom-subwaytile-1.webp",
    },
    sizeImages: {
      // "75×150": "./images/Bathroom-subway-tiles/bathroom-subwaytile-1.webp",
      // "100×200": "./images/Bathroom-subway-tiles/bathroom-subwaytile-2.webp",
      // "300×600": "./images/Bathroom-subway-tiles/bathroom-subwaytile-3.webp",
    },
    texture: "Marble",
    finish: ["Glossy"],
    sizes: ["75×150", "100×200", "300×600"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Moisture Proof",
        desc: "Glazed surface resists water penetration, ideal for wet zones.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy to Clean",
        desc: "Smooth glaze wipes clean effortlessly, maintaining a pristine look.",
      },
      {
        icon: "fa-solid fa-infinity",
        title: "Timeless Design",
        desc: "Classic subway format that complements any bathroom style.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "75×150 mm",
      Finish: "Glossy",
      Usage: "Wall & Floor",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1300 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 1,
    title: "Hexagonal Marble",
    tag: "HEXAGONAL MARBLE",
    description:
      "1-inch hexagon marble mosaic tiles with mesh backing for easy installation. Natural veining creates a luxurious spa-like atmosphere.",
    colours: 2,
    finishes: 2,
    image: "./images/Hexaganol_tile/hexagonal-1.webp",
    badge: "New",
    thumbImages: [
      "./images/Hexaganol_tile/hexagonal-1.webp",
      "./images/Hexaganol_tile/hexagonal-2.webp",
      "./images/Hexaganol_tile/hexagonal-3.webp",
      "./images/Hexaganol_tile/hexagonal-4.webp",
      "./images/Hexaganol_tile/hexagonal-5.webp",
      "./images/Hexaganol_tile/hexagonal-6.webp",
    ],
    colors: ["Light Gray", "Timberwolf"],
    colorsHex: { "Light Gray": "#b7b7b7", Timberwolf: "#DBD7D2" },
    colorImages: {
      "Light Gray": "./images/Hexaganol_tile/hexagonal-1.webp",
      Timberwolf: "./images/Hexaganol_tile/hexagonal-4.webp",
    },
    finishImages: {
      Polished: "./images/Hexaganol_tile/hexagonal-6.webp",
      Matt: "./images/Hexaganol_tile/hexagonal-3.webp",
    },
    sizeImages: {
      "Mosaic Sheet 300×300": "./images/Hexaganol_tile/hexagonal-1.webp",
    },
    texture: "Mosaic",
    finish: ["Polished", "Matt"],
    sizes: ["Mosaic Sheet 300×300"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-star",
        title: "Natural Luxury",
        desc: "Each tile is cut from real marble, with unique veining patterns.",
      },
      {
        icon: "fa-solid fa-border-all",
        title: "Mesh Backed",
        desc: "Pre-mounted on mesh sheets for fast, accurate installation.",
      },
      {
        icon: "fa-solid fa-spa",
        title: "Spa Aesthetic",
        desc: "Creates a high-end resort feel in any bathroom.",
      },
    ],
    tech: {
      Material: "Natural Marble",
      Size: "Mosaic Sheet 300×300",
      Finish: "Polished / Matt",
      Usage: "Floor & Feature Wall",
      "Water Absorption": "< 0.2%",
      "Breaking Strength": "≥ 1500 N",
      "Slip Resistance": "R10",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class B",
      Thickness: "10 mm",
    },
  },
  {
    id: 2,
    title: "Modern Gray Chevron",
    tag: "MODERN GRAY CHEVRON",
    description:
      "Bold chevron-pattern porcelain tiles in a refined matte grey finish. Perfect for creating dynamic floor patterns with geometric flair.",
    colours: 2,
    finishes: 1,
    image: "./images/Modern-Gray-Chevron/modern-gray-chevron-1.webp",
    badge: null,
    thumbImages: [
      "./images/Modern-Gray-Chevron/modern-gray-chevron-1.webp",
      "./images/Modern-Gray-Chevron/modern-gray-chevron-2.webp",
      "./images/Modern-Gray-Chevron/modern-gray-chevron-3.webp",
      "./images/Modern-Gray-Chevron/modern-gray-chevron-4.webp",
      "./images/Modern-Gray-Chevron/modern-gray-chevron-5.webp",
      "./images/Modern-Gray-Chevron/modern-gray-chevron-6.webp",
    ],
    colors: ["Grey", "Light Grey"],
    colorsHex: { Grey: "#a0a0a0", "Light Grey": "#c8c8c8" },
    colorImages: {
      Grey: "./images/Modern-Gray-Chevron/modern-gray-chevron-3.webp",
      "Light Grey": "./images/Modern-Gray-Chevron/modern-gray-chevron-6.webp",
    },
    finishImages: {
      Matt: "./images/Modern-Gray-Chevron/modern-gray-chevron-1.webp",
    },
    sizeImages: {},
    texture: "Geometric",
    finish: ["Matt"],
    sizes: ["75×300", "100×400"],
    surface: ["Anti-Skid", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-shoe-prints",
        title: "Anti-Slip",
        desc: "Matt surface with R10 rating for safe wet bathroom floors.",
      },
      {
        icon: "fa-solid fa-shapes",
        title: "Geometric Pattern",
        desc: "Chevron format creates striking visual movement in any space.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Heavy Duty",
        desc: "Dense porcelain body resists cracking under heavy use.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "75×300 mm",
      Finish: "Matt",
      Usage: "Floor",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R10",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },
  {
    id: 3,
    title: "Beige Stone Effect",
    tag: "BEIGE STONE EFFECT",
    description:
      "Large-format porcelain tiles faithfully replicating the texture and warmth of natural travertine stone. Elegant and understated.",
    colours: 2,
    finishes: 2,
    image: "./images/Beige-Stone-Effect/Beige-Stone-Effect1.webp",
    badge: null,
    thumbImages: [
      "./images/Beige-Stone-Effect/Beige-Stone-Effect1.webp",
      "./images/Beige-Stone-Effect/Beige-Stone-Effect2.webp",
      "./images/Beige-Stone-Effect/Beige-Stone-Effect3.webp",
      "./images/Beige-Stone-Effect/Beige-Stone-Effect4.webp",
    ],
    colors: ["Beige", "Cream"],
    colorsHex: { Beige: "#c8a87a", Cream: "#e8dcc8" },
    colorImages: {
      Beige: "./images/Beige-Stone-Effect/Beige-Stone-Effect2.webp",
      Cream: "./images/Beige-Stone-Effect/Beige-Stone-Effect4.webp",
    },
    finishImages: {
      Matt: "./images/Beige-Stone-Effect/Beige-Stone-Effect2.webp",
      Satin: "./images/Beige-Stone-Effect/Beige-Stone-Effect4.webp",
    },
    sizeImages: {},
    texture: "Stone",
    finish: ["Matt", "Satin"],
    sizes: ["600×600", "600×1200"],
    surface: ["Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-mountain-sun",
        title: "Stone Look",
        desc: "High-definition digital printing replicates natural travertine.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Fewer grout lines for a seamless, expansive look.",
      },
      {
        icon: "fa-solid fa-leaf",
        title: "Low Maintenance",
        desc: "Porcelain body needs no sealing, unlike real stone.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "600×600 mm / 600×1200 mm",
      Finish: "Matt / Satin",
      Usage: "Floor & Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1600 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "10 mm",
    },
  },
  {
    id: 4,
    title: "Blue Geometric",
    tag: "BLUE GEOMETRIC",
    description:
      "Hand-painted ceramic tiles with intricate cobalt blue geometric patterns. Brings artisan character and bold colour to bathroom floors and feature walls.",
    colours: 1,
    finishes: 1,
    image: "./images/Blue-Geometric/Blue-Geometric-1.webp",
    badge: "Exclusive",
    thumbImages: [
      "./images/Blue-Geometric/Blue-Geometric-1.webp",
      "./images/Blue-Geometric/Blue-Geometric-2.webp",
    ],
    colors: ["Blue"],
    colorsHex: { Blue: "#0800ff" },
    colorImages: {
      Blue: "./images/Blue-Geometric/Blue-Geometric-1.webp",
    },
    finishImages: {
      Glazed: "./images/Blue-Geometric/Blue-Geometric-1.webp",
    },
    sizeImages: {},
    texture: "Geometric",
    finish: ["Glazed"],
    sizes: ["200×200", "150×150"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-palette",
        title: "Artisan Crafted",
        desc: "Hand-painted detailing for unique, one-of-a-kind character.",
      },
      {
        icon: "fa-solid fa-eye",
        title: "Statement Design",
        desc: "Bold patterns that become the centrepiece of your bathroom.",
      },
      {
        icon: "fa-solid fa-fire",
        title: "Kiln Fired",
        desc: "High-temperature firing ensures colour vibrancy and durability.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "200×200 mm",
      Finish: "Glazed",
      Usage: "Wall & Floor",
      "Water Absorption": "< 1%",
      "Breaking Strength": "≥ 1200 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class B",
      Thickness: "8 mm",
    },
  },
  {
    id: 5,
    title: "Black Matte Brick",
    tag: "BLACK MATTE BRICK",
    description:
      "Long rectangular matte black porcelain tiles with a raw, industrial edge. Creates dramatic contrast against white fixtures and fittings.",
    colours: 2,
    finishes: 1,
    image: "./images/Black-Matte-Brick/black-matte-brick-1.webp",
    badge: null,
    thumbImages: [
      "./images/Black-Matte-Brick/black-matte-brick-1.webp",
      "./images/Black-Matte-Brick/black-matte-brick-2.webp",
      "./images/Black-Matte-Brick/black-matte-brick-3.webp",
      "./images/Black-Matte-Brick/black-matte-brick-4.webp",
    ],
    colors: ["Black", "Charcoal"],
    colorsHex: { Black: "#1a1814", Charcoal: "#3a3530" },
    colorImages: {
      Black: "./images/Black-Matte-Brick/black-matte-brick-2.webp",
      Charcoal: "./images/Black-Matte-Brick/charcoal-matte-brick-4.webp",
    },
    finishImages: {
      Matt: "./images/Black-Matte-Brick/black-matte-brick-2.webp",
    },
    sizeImages: {},
    texture: "Marble",
    finish: ["Matt"],
    sizes: ["75×300", "100×600"],
    surface: ["Anti-Skid", "Stain Resistant", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-moon",
        title: "Bold & Dramatic",
        desc: "Deep matte black absorbs light for a moody, luxe atmosphere.",
      },
      {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Scratch Resistant",
        desc: "Hard-wearing porcelain surface maintains its finish for years.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Anti-Skid",
        desc: "Textured matte surface provides excellent grip even when wet.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "75×300 mm",
      Finish: "Matt",
      Usage: "Wall & Floor",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R11",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },
  {
    id: 6,
    title: "Carrara Marble Herringbone",
    tag: "CARRARA MARBLE HERRINGBONE",
    description:
      "Premium Carrara marble cut into herringbone mosaics. Iconic grey veining on a white ground creates an effortlessly refined bathroom floor.",
    colours: 2,
    finishes: 1,
    image:
      "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-2.webp",
    badge: "Premium",
    thumbImages: [
      "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-2.webp",
      "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-1.webp",
      "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-3.webp",
      "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-4.webp",
    ],
    colors: ["White Carrara", "Grey Veined"],
    colorsHex: { "White Carrara": "#f5f0e8", "Grey Veined": "#c9c3ba" },
    colorImages: {
      "White Carrara":
        "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-1.webp",
      "Grey Veined":
        "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-3.webp",
    },
    finishImages: {
      Polished:
        "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-2.webp",
    },
    sizeImages: {
      "Mosaic Sheet 300×300":
        "./images/Carrara-Herringbone-Marble/Carrara-Herringbone-Marble-1.webp",
    },
    texture: "Marble",
    finish: ["Polished"],
    sizes: ["Mosaic Sheet 300×300"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Genuine Marble",
        desc: "Sourced from the famous Carrara quarries of Tuscany, Italy.",
      },
      {
        icon: "fa-solid fa-arrows-alt-h",
        title: "Herringbone Pattern",
        desc: "Classic angled pattern adds dimension and timeless elegance.",
      },
      {
        icon: "fa-solid fa-temperature-low",
        title: "Naturally Cool",
        desc: "Stone surface stays refreshingly cool underfoot in warm climates.",
      },
    ],
    tech: {
      Material: "Carrara Marble",
      Size: "Mosaic Sheet 300×300",
      Finish: "Polished / Honed",
      Usage: "Floor & Feature Wall",
      "Water Absorption": "< 0.2%",
      "Breaking Strength": "≥ 1400 N",
      "Slip Resistance": "R10 (Honed)",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class B",
      Thickness: "10 mm",
    },
  },
  {
    id: 7,
    title: "Sage Green Subway",
    tag: "SAGE GREEN SUBWAY",
    description:
      "Soft sage green 75×150 mm ceramic tiles with bevelled edges and a subtle glaze variation. Brings a calming, botanical feel to any bathroom.",
    colours: 2,
    finishes: 2,
    image: "./images/Sage-Green-Subway/Sage-Green-Subway-1.webp",
    badge: "New",
    thumbImages: [
      "./images/Sage-Green-Subway/Sage-Green-Subway-1.webp",
      "./images/Sage-Green-Subway/Sage-Green-Subway-2.webp",
      "./images/Sage-Green-Subway/Sage-Green-Subway-3.webp",
      "./images/Sage-Green-Subway/Sage-Green-Subway-4.webp",
    ],
    colors: ["Sage", "Pale Sage"],
    colorsHex: { Sage: "#8fac8a", "Pale Sage": "#a8c4a4" },
    colorImages: {
      Sage: "./images/Sage-Green-Subway/Sage-Green-Subway-1.webp",
      "Pale Sage": "./images/Sage-Green-Subway/Sage-Green-Subway-3.webp",
    },
    finishImages: {
      Glazed: "./images/Sage-Green-Subway/Sage-Green-Subway-1.webp",
      Satin: "./images/Sage-Green-Subway/Sage-Green-Subway-3.webp",
    },
    sizeImages: {},
    texture: "Mosaic",
    finish: ["Glazed", "Satin"],
    sizes: ["75×150", "100×200"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-seedling",
        title: "Calming Palette",
        desc: "Soft green tones evoke nature and create a relaxing sanctuary.",
      },
      {
        icon: "fa-solid fa-border-style",
        title: "Bevelled Edge",
        desc: "Classic bevel detail adds depth and a boutique hotel quality.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy Maintenance",
        desc: "Smooth glaze resists soap scum and water marks.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "75×150 mm",
      Finish: "Glazed",
      Usage: "Wall & Floor",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1300 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 8,
    title: "Modern Terrazzo",
    tag: "MODERN TERRAZZO",
    description:
      "Contemporary terrazzo-look porcelain tiles in soft cream with coloured aggregate chips. Brings warmth and playful texture without the maintenance of real terrazzo.",
    colours: 2,
    finishes: 2,
    image: "./images/Modern-Terrazzo/Modern-Terrazzo-1.webp",
    badge: null,
    thumbImages: [
      "./images/Modern-Terrazzo/Modern-Terrazzo-1.webp",
      "./images/Modern-Terrazzo/Modern-Terrazzo-2.webp",
      "./images/Modern-Terrazzo/Modern-Terrazzo-3.webp",
      "./images/Modern-Terrazzo/Modern-Terrazzo-4.webp",
    ],
    colors: ["Cream", "Ivory"],
    colorsHex: { Cream: "#e8dcc8", Ivory: "#f5f0e8" },
    colorImages: {
      Cream: "./images/Modern-Terrazzo/Modern-Terrazzo-1.webp",
      Ivory: "./images/Modern-Terrazzo/Modern-Terrazzo-3.webp",
    },
    finishImages: {
      Matt: "./images/Modern-Terrazzo/Modern-Terrazzo-1.webp",
      Satin: "./images/Modern-Terrazzo/Modern-Terrazzo-3.webp",
    },
    sizeImages: {},
    texture: "Terrazzo",
    finish: ["Matt", "Satin"],
    sizes: ["600×600", "300×300"],
    surface: ["Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-circle-dot",
        title: "Terrazzo Pattern",
        desc: "HD printing faithfully captures the texture of real terrazzo.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "Zero Maintenance",
        desc: "Unlike real terrazzo, requires no resealing or special care.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Light & Bright",
        desc: "Warm tones reflect light to open up smaller bathroom spaces.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "600×600 mm",
      Finish: "Matt",
      Usage: "Floor & Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1600 N",
      "Slip Resistance": "R10",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },
  {
    id: 9,
    title: "Fish Scale Mosaic",
    tag: "FISH SCALE MOSAIC",
    description:
      "Iridescent glass tiles in a scalloped fish scale pattern. Catches and reflects light beautifully, creating a jewel-like shimmer on bathroom floors and shower walls.",
    colours: 2,
    finishes: 2,
    image: "./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-1.webp",
    badge: "Exclusive",
    thumbImages: ["./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-1.webp"],
    colors: ["Ice Blue", "Pearl"],
    colorsHex: { "Ice Blue": "#a8c8e8", Pearl: "#F8F6F0" },
    colorImages: {
      "Ice Blue": "./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-1.webp",
      Pearl: "./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-3.webp",
    },
    finishImages: {
      Iridescent: "./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-1.webp",
      Glossy: "./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-3.webp",
    },
    sizeImages: {
      "Mosaic Sheet 300×300":
        "./images/Fish-Scale-Mosaic/Fish-Scale-Mosaic-1.webp",
    },
    texture: "Mosaic",
    finish: ["Iridescent", "Glossy"],
    sizes: ["Mosaic Sheet 300×300"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "Iridescent Shimmer",
        desc: "Glass shifts colour in changing light for a magical effect.",
      },
      {
        icon: "fa-solid fa-fish",
        title: "Scallop Form",
        desc: "Organic scale shape adds artful texture to any surface.",
      },
      {
        icon: "fa-solid fa-droplet",
        title: "Fully Waterproof",
        desc: "Non-porous glass absorbs zero water — perfect for wet areas.",
      },
    ],
    tech: {
      Material: "Glass",
      Size: "Mosaic Sheet 300×300",
      Finish: "Iridescent",
      Usage: "Feature Wall & Floor",
      "Water Absorption": "0%",
      "Breaking Strength": "≥ 900 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "6 mm",
    },
  },
  {
    id: 10,
    title: "Concrete Effect",
    tag: "CONCRETE EFFECT",
    description:
      "12×24 inch porcelain tiles with a cool, urban concrete finish. Achieves an industrial-chic bathroom aesthetic with none of the upkeep real concrete demands.",
    colours: 2,
    finishes: 1,
    image: "./images/Concrete-Effect/Concrete-Effect-1.webp",
    badge: null,
    thumbImages: [
      "./images/Concrete-Effect/Concrete-Effect-1.webp",
      "./images/Concrete-Effect/Concrete-Effect-2.webp",
      "./images/Concrete-Effect/Concrete-Effect-3.webp",
      "./images/Concrete-Effect/Concrete-Effect-4.webp",
    ],
    colors: ["Grey", "Light Grey"],
    colorsHex: { Grey: "#a0a0a0", "Light Grey": "#c8c8c8" },
    colorImages: {
      Grey: "./images/Concrete-Effect/Concrete-Effect-1.webp",
      "Light Grey": "./images/Concrete-Effect/Concrete-Effect-3.webp",
    },
    finishImages: {
      Matt: "./images/Concrete-Effect/Concrete-Effect-1.webp",
    },
    sizeImages: {
      "300×600": "./images/Concrete-Effect/Concrete-Effect-1.webp",
      "600×1200": "./images/Concrete-Effect/Concrete-Effect-1.webp",
    },
    texture: "Stone",
    finish: ["Matt"],
    sizes: ["300×600", "600×1200"],
    surface: ["Anti-Skid", "Scratch Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-city",
        title: "Urban Industrial",
        desc: "Authentic concrete texture for modern loft-style bathrooms.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "No Sealing Needed",
        desc: "Unlike real concrete, porcelain needs zero maintenance sealing.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Fewer grout joints for a cleaner, more expansive floor appearance.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "300×600 mm",
      Finish: "Matt",
      Usage: "Floor & Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R10",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "10 mm",
    },
  },
  {
    id: 11,
    title: "Moroccan Zellige",
    tag: "MOROCCAN ZELLIGE",
    description:
      "Handcrafted glazed terracotta tiles with the authentic slight colour and surface variations characteristic of traditional Moroccan zellige. Brings warmth and soul to any bathroom.",
    colours: 2,
    finishes: 1,
    image: "./images/Moroccan-Zellige/Moroccan-Zellige-1.webp",
    badge: "Artisan",
    thumbImages: ["./images/Moroccan-Zellige/Moroccan-Zellige-1.webp",
      "./images/Moroccan-Zellige/Moroccan-Zellige-2.webp",
      "./images/Moroccan-Zellige/Moroccan-Zellige-3.webp",
      "./images/Moroccan-Zellige/Moroccan-Zellige-4.webp",
    ],
    colors: ["Terracotta", "Sand"],
    colorsHex: { Terracotta: "#c8a87a", Sand: "#d4b896" },
    colorImages: {
      Terracotta: "./images/Moroccan-Zellige/Moroccan-Zellige-3.webp",
      Sand: "./images/Moroccan-Zellige/Moroccan-Zellige-1.webp",
    },
    finishImages: {
      Glazed: "./images/Moroccan-Zellige/Moroccan-Zellige-1.webp",
    },
    sizeImages: {
      "100×100": "./images/Moroccan-Zellige/Moroccan-Zellige-2.webp",
      "150×150": "./images/Moroccan-Zellige/Moroccan-Zellige-3.webp",
    },
    texture: "Zellige",
    finish: ["Glazed"],
    sizes: ["100×100", "150×150"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-hands",
        title: "Handcrafted",
        desc: "Each tile is hand-made with intentional variation for authentic character.",
      },
      {
        icon: "fa-solid fa-fire-flame-curved",
        title: "Kiln Fired",
        desc: "Traditional wood kiln firing creates deep, rich colour depth.",
      },
      {
        icon: "fa-solid fa-globe-africa",
        title: "Artisan Heritage",
        desc: "Authentic Moroccan zellige craft tradition in every tile.",
      },
    ],
    tech: {
      Material: "Terracotta",
      Size: "100×100 mm",
      Finish: "Glazed",
      Usage: "Wall & Floor",
      "Water Absorption": "< 3%",
      "Breaking Strength": "≥ 900 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class B",
      Thickness: "12 mm",
    },
  },
];

const FEATURED_IDS = [0, 6, 9, 11];

/* ── Two-phase filter state ── */
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

  const waMsg = encodeURIComponent(
    `Hello I would like to enquire about ${tile.title} bathroom tiles`,
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

  /* Color swatches */
  document.querySelectorAll(".swatch-item").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const c = el.dataset.color;
      if (el.classList.contains("active")) pending.colors.add(c);
      else pending.colors.delete(c);
      updateApplyBtn();
    }),
  );

  /* Texture thumbs */
  document.querySelectorAll(".texture-thumb").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const x = el.dataset.texture;
      if (el.classList.contains("active")) pending.textures.add(x);
      else pending.textures.delete(x);
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
    if (sb.classList.contains("mobile-open")) {
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
  document
    .getElementById("mobileFilterToggle")
    .addEventListener("click", function () {
      const sb = document.getElementById("sidebar");
      sb.classList.toggle("mobile-open");
      this.innerHTML = sb.classList.contains("mobile-open")
        ? '<i class="fa-solid fa-xmark"></i> Close Filters'
        : '<i class="fa-solid fa-sliders"></i> Filters';
    });

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
