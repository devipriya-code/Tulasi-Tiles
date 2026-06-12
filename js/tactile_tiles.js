/* =========================================================
   tactile_tiles.js — Tactile Tiles Collection
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
  {
    id: 0,
    title: "Classic Ribbed White",
    tag: "CLASSIC RIBBED WHITE",
    description:
      "Clean vertical ribbed ceramic wall tiles in crisp white. The repeating ridge profile catches light to add subtle dimension to any bathroom or living space.",
    colours: 2,
    finishes: 2,
    image: "./images/Classic-Ribbed-White/Classic-Ribbed-White-1.webp",
    badge: "Bestseller",
    thumbImages: [
      "./images/Classic-Ribbed-White/Classic-Ribbed-White-1.webp",
      "./images/Classic-Ribbed-White/Classic-Ribbed-White-2.webp",
      "./images/Classic-Ribbed-White/Classic-Ribbed-White-3.webp",
      "./images/Classic-Ribbed-White/Classic-Ribbed-White-4.webp",
    ],
    colors: ["White", "Ivory"],
    colorsHex: { White: "#f8f8f8", Ivory: "#f5f0e8" },
    colorImages: {
      White: "./images/Classic-Ribbed-White/Classic-Ribbed-White-1.webp",
      Ivory: "./images/Classic-Ribbed-White/Classic-Ribbed-White-3.webp",
    },
    finishImages: {
      Matt: "./images/Classic-Ribbed-White/Classic-Ribbed-White-1.webp",
      Satin: "./images/Classic-Ribbed-White/Classic-Ribbed-White-2.webp",
    },
    sizeImages: {},
    texture: "Ribbed",
    finish: ["Matt", "Satin"],
    sizes: ["75×300", "100×300", "300×600"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-lines-leaning",
        title: "Shadow & Depth",
        desc: "Vertical ridges create natural shadow lines that animate with changing light throughout the day.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Water Resistant",
        desc: "Sealed ceramic body is fully suitable for bathrooms and wet areas.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy Maintenance",
        desc: "Smooth ridge tips wipe clean without grout trapping dirt.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "75×300 mm",
      Finish: "Matt / Satin",
      Usage: "Wall",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1300 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },
  {
    id: 1,
    title: "Fluted Grey Stone",
    tag: "FLUTED GREY STONE",
    description:
      "Deep-cut fluted porcelain tiles in a refined stone grey. Bold parallel channels create strong architectural shadow lines, ideal for feature walls and spa settings.",
    colours: 2,
    finishes: 1,
    image: "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-1.webp",
    badge: "New",
    thumbImages: [
      "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-1.webp",
      "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-2.webp",
      "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-3.webp",
      "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-4.webp",
    ],
    colors: ["Grey", "Charcoal"],
    colorsHex: { Grey: "#a0a0a0", Charcoal: "#3a3530" },
    colorImages: {
      Grey: "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-1.webp",
      Charcoal: "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-3.webp",
    },
    finishImages: {
      Matt: "./images/Fluted-Grey-Stone/Fluted-Grey-Stone-1.webp",
    },
    sizeImages: {},
    texture: "Fluted",
    finish: ["Matt"],
    sizes: ["100×300", "200×400", "300×600"],
    surface: ["Anti-Skid", "Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-grip-lines-vertical",
        title: "Architectural Grooves",
        desc: "Deep-cut channels deliver a strong visual rhythm on feature walls.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Scratch Resistant",
        desc: "Dense porcelain body maintains its surface integrity for years.",
      },
      {
        icon: "fa-solid fa-spa",
        title: "Spa Aesthetic",
        desc: "Stone-grey palette and fluted texture evoke high-end resort design.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "100×300 mm",
      Finish: "Matt",
      Usage: "Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R10",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "11 mm",
    },
  },
  {
    id: 2,
    title: "Embossed Diamond",
    tag: "EMBOSSED DIAMOND",
    description:
      "Geometric diamond-embossed ceramic tiles with a soft ivory glaze. The raised lattice pattern catches light at every angle, bringing artisan depth to walls.",
    colours: 2,
    finishes: 2,
    image: "./images/Embossed-Diamond/Embossed-Diamond-2.webp",
    badge: null,
    thumbImages: [
      "./images/Embossed-Diamond/Embossed-Diamond-1.webp",
      "./images/Embossed-Diamond/Embossed-Diamond-2.webp",
      "./images/Embossed-Diamond/Embossed-Diamond-3.webp",
      "./images/Embossed-Diamond/Embossed-Diamond-4.webp",
    ],
    colors: ["Ivory", "White"],
    colorsHex: { Ivory: "#f5f0e8", White: "#f8f8f8" },
    colorImages: {
      Ivory: "./images/Embossed-Diamond/Embossed-Diamond-1.webp",
      White: "./images/Embossed-Diamond/Embossed-Diamond-3.webp",
    },
    finishImages: {
      Glazed: "./images/Embossed-Diamond/Embossed-Diamond-1.webp",
      Satin: "./images/Embossed-Diamond/Embossed-Diamond-2.webp",
    },
    sizeImages: {},
    texture: "Embossed",
    finish: ["Glazed", "Satin"],
    sizes: ["100×200", "200×400", "300×600"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-border-all",
        title: "Raised Relief",
        desc: "Precise diamond grid is pressed into the body before firing for lasting depth.",
      },
      {
        icon: "fa-solid fa-star",
        title: "Light Play",
        desc: "Faceted surface facets reflect light differently throughout the day.",
      },
      {
        icon: "fa-solid fa-fire",
        title: "Kiln Fired",
        desc: "High-temperature firing locks in glaze and emboss detail permanently.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "100×200 mm",
      Finish: "Glazed / Satin",
      Usage: "Wall",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1200 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 3,
    title: "Wave Relief Beige",
    tag: "WAVE RELIEF BEIGE",
    description:
      "Flowing wave-relief porcelain tiles in warm beige. The organic undulating surface brings a sense of calm and movement, perfect for bathrooms and living walls.",
    colours: 2,
    finishes: 2,
    image: "./images/Wave-Relief-Beige/Wave-Relief-Beige-1.webp",
    badge: null,
    thumbImages: [
      "./images/Wave-Relief-Beige/Wave-Relief-Beige-1.webp",
      "./images/Wave-Relief-Beige/Wave-Relief-Beige-2.webp",
      "./images/Wave-Relief-Beige/Wave-Relief-Beige-3.webp",
      "./images/Wave-Relief-Beige/Wave-Relief-Beige-4.webp",
    ],
    colors: ["Beige", "Ivory"],
    colorsHex: { Beige: "#c8a87a", Ivory: "#f5f0e8" },
    colorImages: {
      Beige: "./images/Wave-Relief-Beige/Wave-Relief-Beige-1.webp",
      Ivory: "./images/Wave-Relief-Beige/Wave-Relief-Beige-3.webp",
    },
    finishImages: {
      Matt: "./images/Wave-Relief-Beige/Wave-Relief-Beige-1.webp",
      Satin: "./images/Wave-Relief-Beige/Wave-Relief-Beige-2.webp",
    },
    sizeImages: {},
    texture: "Wave",
    finish: ["Matt", "Satin"],
    sizes: ["200×400", "300×600", "600×600"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-water",
        title: "Organic Flow",
        desc: "Undulating surface mimics natural water movement for a calming effect.",
      },
      {
        icon: "fa-solid fa-mountain-sun",
        title: "Warm Tones",
        desc: "Beige and ivory colourways complement natural materials and timber.",
      },
      {
        icon: "fa-solid fa-maximize",
        title: "Versatile Format",
        desc: "Available in multiple sizes from accent strips to full feature walls.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "300×600 mm",
      Finish: "Matt / Satin",
      Usage: "Wall",
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
    title: "Brick Relief Charcoal",
    tag: "BRICK RELIEF CHARCOAL",
    description:
      "Three-dimensional brick-relief porcelain tiles in deep charcoal. Replicates the textural richness of exposed brick without the structural requirements — ideal for urban loft interiors.",
    colours: 2,
    finishes: 1,
    image: "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-1.webp",
    badge: "Exclusive",
    thumbImages: [
      "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-1.webp",
      "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-2.webp",
      "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-3.webp",
      "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-4.webp",
    ],
    colors: ["Charcoal", "Black"],
    colorsHex: { Charcoal: "#3a3530", Black: "#1a1814" },
    colorImages: {
      Charcoal: "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-1.webp",
      Black: "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-3.webp",
    },
    finishImages: {
      Matt: "./images/Brick-Relief-Charcoal/Brick-Relief-Charcoal-1.webp",
    },
    sizeImages: {},
    texture: "Brick Relief",
    finish: ["Matt"],
    sizes: ["75×150", "75×300", "100×300"],
    surface: ["Anti-Skid", "Stain Resistant", "Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-city",
        title: "Industrial Edge",
        desc: "Deep brick relief channels deliver authentic raw industrial character.",
      },
      {
        icon: "fa-solid fa-moon",
        title: "Dramatic Dark Tones",
        desc: "Charcoal and black colourways create bold, moody interiors.",
      },
      {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Scratch Resistant",
        desc: "Dense porcelain resists surface wear in high-traffic commercial spaces.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "75×150 mm",
      Finish: "Matt",
      Usage: "Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R11",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "10 mm",
    },
  },
  {
    id: 5,
    title: "Linen Texture Sage",
    tag: "LINEN TEXTURE SAGE",
    description:
      "Soft linen-weave embossed ceramic tiles in a muted sage green. The delicate textile-like surface pattern adds warmth and tactile interest without overpowering a space.",
    colours: 2,
    finishes: 2,
    image: "./images/Linen-Texture-Sage/Linen-Texture-Sage-1.webp",
    badge: "New",
    thumbImages: [
      "./images/Linen-Texture-Sage/Linen-Texture-Sage-1.webp",
      "./images/Linen-Texture-Sage/Linen-Texture-Sage-2.webp",
      "./images/Linen-Texture-Sage/Linen-Texture-Sage-3.webp",
      "./images/Linen-Texture-Sage/Linen-Texture-Sage-4.webp",
    ],
    colors: ["Sage", "Grey"],
    colorsHex: { Sage: "#8fac8a", Grey: "#a0a0a0" },
    colorImages: {
      Sage: "./images/Linen-Texture-Sage/Linen-Texture-Sage-1.webp",
      Grey: "./images/Linen-Texture-Sage/Linen-Texture-Sage-3.webp",
    },
    finishImages: {
      Matt: "./images/Linen-Texture-Sage/Linen-Texture-Sage-1.webp",
      Satin: "./images/Linen-Texture-Sage/Linen-Texture-Sage-2.webp",
    },
    sizeImages: {},
    texture: "Linen",
    finish: ["Matt", "Satin"],
    sizes: ["100×200", "200×400", "300×600"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-shirt",
        title: "Textile Inspired",
        desc: "Woven linen pattern brings natural fabric warmth to tile surfaces.",
      },
      {
        icon: "fa-solid fa-seedling",
        title: "Calming Palette",
        desc: "Sage green and grey tones create a serene, biophilic atmosphere.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy to Maintain",
        desc: "Fine emboss depth is easy to clean without trapping grime.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "200×400 mm",
      Finish: "Matt / Satin",
      Usage: "Wall",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1300 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },
  {
    id: 6,
    title: "Ribbed Terracotta",
    tag: "RIBBED TERRACOTTA",
    description:
      "Warm terracotta ribbed tiles that blend earthy Mediterranean tones with contemporary texture. Creates inviting, characterful walls in kitchens, bathrooms and dining spaces.",
    colours: 2,
    finishes: 2,
    image: "./images/Ribbed-Terracotta/Ribbed-Terracotta-1.webp",
    badge: null,
    thumbImages: [
      "./images/Ribbed-Terracotta/Ribbed-Terracotta-1.webp",
      "./images/Ribbed-Terracotta/Ribbed-Terracotta-2.webp",
      "./images/Ribbed-Terracotta/Ribbed-Terracotta-3.webp",
      "./images/Ribbed-Terracotta/Ribbed-Terracotta-4.webp",
    ],
    colors: ["Terracotta", "Beige"],
    colorsHex: { Terracotta: "#E2725B", Beige: "#d4b896" },
    colorImages: {
      Terracotta: "./images/Ribbed-Terracotta/Ribbed-Terracotta-1.webp",
      Beige: "./images/Ribbed-Terracotta/Ribbed-Terracotta-3.webp",
    },
    finishImages: {
      Glazed: "./images/Ribbed-Terracotta/Ribbed-Terracotta-1.webp",
      Unglazed: "./images/Ribbed-Terracotta/Ribbed-Terracotta-3.webp",
    },
    sizeImages: {},
    texture: "Ribbed",
    finish: ["Glazed", "Unglazed"],
    sizes: ["75×150", "75×300", "100×300"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-globe-africa",
        title: "Mediterranean Heritage",
        desc: "Terracotta tones draw from centuries of southern European craft tradition.",
      },
      {
        icon: "fa-solid fa-lines-leaning",
        title: "Ribbed Profile",
        desc: "Repeating ridges add depth and a handcrafted feel to any wall.",
      },
      {
        icon: "fa-solid fa-palette",
        title: "Warm Colour Story",
        desc: "Earthy hues complement natural stone, timber, brass and rattan.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "75×300 mm",
      Finish: "Glazed / Unglazed",
      Usage: "Wall",
      "Water Absorption": "< 1%",
      "Breaking Strength": "≥ 1200 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class B",
      Thickness: "9 mm",
    },
  },
  {
    id: 7,
    title: "Fluted Ivory Large Format",
    tag: "FLUTED IVORY LARGE FORMAT",
    description:
      "Large-format fluted porcelain tiles in soft ivory. Tall vertical channels minimise grout lines and create a seamless, column-like elegance suited to living rooms and hotel lobbies.",
    colours: 2,
    finishes: 1,
    image:
      "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-1.webp",
    badge: "Premium",
    thumbImages: [
      "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-1.webp",
      "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-2.webp",
      "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-3.webp",
      "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-4.webp",
    ],
    colors: ["Ivory", "White"],
    colorsHex: { Ivory: "#f5f0e8", White: "#f8f8f8" },
    colorImages: {
      Ivory:
        "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-1.webp",
      White:
        "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-2.webp",
    },
    finishImages: {
      Matt: "./images/Fluted-Ivory-Large-Format/Fluted-Ivory-Large-Format-1.webp",
    },
    sizeImages: {},
    texture: "Fluted",
    finish: ["Matt"],
    sizes: ["300×600", "600×1200"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-maximize",
        title: "Large Format",
        desc: "Fewer grout lines for a seamless, gallery-quality wall finish.",
      },
      {
        icon: "fa-solid fa-grip-lines-vertical",
        title: "Vertical Elongation",
        desc: "Tall flutes draw the eye upward, making rooms feel taller.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Luxury Presence",
        desc: "Paired ivory tone and deep channels deliver a five-star hotel feel.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "600×1200 mm",
      Finish: "Matt",
      Usage: "Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1800 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "11 mm",
    },
  },
  {
    id: 8,
    title: "Wave Relief White",
    tag: "WAVE RELIEF WHITE",
    description:
      "Crisp white wave-relief porcelain tiles. The rhythmic undulating surface introduces soft movement and dimensionality to minimalist interiors without colour distraction.",
    colours: 1,
    finishes: 2,
    image: "./images/Wave-Relief-White/Wave-Relief-White-2.webp",
    badge: null,
    thumbImages: [
      "./images/Wave-Relief-White/Wave-Relief-White-1.webp",
      "./images/Wave-Relief-White/Wave-Relief-White-2.webp",
      "./images/Wave-Relief-White/Wave-Relief-White-3.webp",
      "./images/Wave-Relief-White/Wave-Relief-White-4.webp",
    ],
    colors: ["White"],
    colorsHex: { White: "#f8f8f8" },
    colorImages: {
      White: "./images/Wave-Relief-White/Wave-Relief-White-1.webp",
    },
    finishImages: {
      Polished: "./images/Wave-Relief-White/Wave-Relief-White-2.webp",
      Satin: "./images/Wave-Relief-White/Wave-Relief-White-3.webp",
    },
    sizeImages: {},
    texture: "Wave",
    finish: ["Polished", "Satin"],
    sizes: ["200×400", "300×600"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-water",
        title: "Fluid Movement",
        desc: "Rhythmic wave form adds life and energy to plain white walls.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Light Reflection",
        desc: "Polished finish amplifies natural light across the curved surface.",
      },
      {
        icon: "fa-solid fa-infinity",
        title: "Timeless White",
        desc: "Pure white works with every colour scheme and interior style.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Size: "300×600 mm",
      Finish: "Polished / Satin",
      Usage: "Wall",
      "Water Absorption": "< 0.1%",
      "Breaking Strength": "≥ 1600 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "Yes",
      "Chemical Resistance": "Class A",
      Thickness: "10 mm",
    },
  },
  {
    id: 9,
    title: "Embossed Moroccan",
    tag: "EMBOSSED MOROCCAN",
    description:
      "Intricately embossed Moroccan geometric ceramic tiles in a warm white glaze. Each tile carries a hand-pressed relief motif that layers to create mesmerising tiled compositions.",
    colours: 2,
    finishes: 2,
    image: "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-1.webp",
    badge: "Artisan",
    thumbImages: [
      "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-1.webp",
      "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-2.webp",
      "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-3.webp",
      "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-4.webp",
    ],
    colors: ["White", "Ivory"],
    colorsHex: { White: "#f8f8f8", Ivory: "#f5f0e8" },
    colorImages: {
      White: "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-1.webp",
      Ivory: "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-2.webp",
    },
    finishImages: {
      Glazed: "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-1.webp",
      Matt: "./images/EMBOSSED-MOROCCAN/EMBOSSED-MOROCCAN-3.webp",
    },
    sizeImages: {},
    texture: "Embossed",
    finish: ["Glazed", "Matt"],
    sizes: ["100×100", "150×150", "200×200"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-hands",
        title: "Artisan Relief",
        desc: "Fine Moroccan geometric motifs pressed and fired for lasting detail.",
      },
      {
        icon: "fa-solid fa-border-all",
        title: "Pattern Repeat",
        desc: "Tiles tessellate precisely to build complex, repeating wall designs.",
      },
      {
        icon: "fa-solid fa-globe-africa",
        title: "Cultural Craft",
        desc: "Draws on a centuries-old tradition of Moorish architectural decoration.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "150×150 mm",
      Finish: "Glazed / Matt",
      Usage: "Wall",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1100 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 10,
    title: "Linen Texture White",
    tag: "LINEN TEXTURE WHITE",
    description:
      "Delicate linen-weave embossed ceramic tiles in a pure white glaze. The subtle grid of raised threads adds quiet texture that rewards close inspection without dominating.",
    colours: 1,
    finishes: 2,
    image: "./images/Linen-Texture-White/Linen-Texture-White-2.webp",
    badge: null,
    thumbImages: [
      "./images/Linen-Texture-White/Linen-Texture-White-1.webp",
      "./images/Linen-Texture-White/Linen-Texture-White-2.webp",
      "./images/Linen-Texture-White/Linen-Texture-White-3.webp",
      "./images/Linen-Texture-White/Linen-Texture-White-4.webp",
    ],
    colors: ["White"],
    colorsHex: { White: "#f8f8f8" },
    colorImages: {
      White: "./images/Linen-Texture-White/Linen-Texture-White-1.webp",
    },
    finishImages: {
      Matt: "./images/Linen-Texture-White/Linen-Texture-White-1.webp",
      Satin: "./images/Linen-Texture-White/Linen-Texture-White-3.webp",
    },
    sizeImages: {},
    texture: "Linen",
    finish: ["Matt", "Satin"],
    sizes: ["100×200", "200×400"],
    surface: ["Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-shirt",
        title: "Textile Detail",
        desc: "Fine woven pattern brings the natural warmth of fabric to ceramic.",
      },
      {
        icon: "fa-solid fa-infinity",
        title: "Understated Elegance",
        desc: "Quiet texture that adds interest without competing with furnishings.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Bathroom Safe",
        desc: "Sealed glaze makes these tiles fully suitable for wet areas.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "100×200 mm",
      Finish: "Matt / Satin",
      Usage: "Wall",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1200 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "8 mm",
    },
  },
  {
    id: 11,
    title: "Brick Relief White",
    tag: "BRICK RELIEF WHITE",
    description:
      "White brick-relief ceramic tiles that combine the raw texture of exposed brickwork with a clean, bright palette. Perfect for Scandi, coastal and modern farmhouse interiors.",
    colours: 2,
    finishes: 2,
    image: "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-1.webp",
    badge: null,
    thumbImages: [
      "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-1.webp",
      "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-2.webp",
      "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-3.webp",
      "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-4.webp",
    ],
    colors: ["White", "Grey"],
    colorsHex: { White: "#f8f8f8", Grey: "#a0a0a0" },
    colorImages: {
      White: "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-1.webp",
      Grey: "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-3.webp",
    },
    finishImages: {
      Matt: "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-1.webp",
      Glazed: "./images/BRICK-RELIEF-WHITE/BRICK-RELIEF-WHITE-3.webp",
    },
    sizeImages: {},
    texture: "Brick Relief",
    finish: ["Matt", "Glazed"],
    sizes: ["75×150", "75×300"],
    surface: ["Water Resistant", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-house",
        title: "Farmhouse Appeal",
        desc: "Brick relief in white suits Scandi, coastal and countryside interiors.",
      },
      {
        icon: "fa-solid fa-sun",
        title: "Light & Bright",
        desc: "White ground reflects light to open up smaller rooms and kitchens.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy Clean",
        desc: "Glazed surface variants resist kitchen splashes and soap scum.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Size: "75×150 mm",
      Finish: "Matt / Glazed",
      Usage: "Wall",
      "Water Absorption": "< 0.5%",
      "Breaking Strength": "≥ 1200 N",
      "Slip Resistance": "R9",
      "Frost Resistance": "No",
      "Chemical Resistance": "Class A",
      Thickness: "9 mm",
    },
  },
];

const FEATURED_IDS = [0, 4, 7, 9];

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
    `Hello I would like to enquire about ${tile.title} tactile tiles`,
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
