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

/* ── Bedroom Wall Tile data ── */
const BEDROOM_TILES = [
  {
    id: 0,
    title: "Gray Wood Collection",
    tag: "GRAY WOOD",
    description:
      "Premium gray wood effect tiles with realistic texture. Perfect blend of modern aesthetics and natural warmth for your bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/gray wood.webp",
    badge: "GRAY WOOD",
    thumbImages: [
      "./images/gray1.webp",
      "./images/gray2.webp",
      "./images/gray3.webp",
      "./images/gray4.webp",
    ],
    colors: [
      "Dark Gray Wood",
      "Light Gray Wood",
      "Dark Brown Wood",
      "Gray Textured Wood",
    ],
    colorsHex: {
      "Dark Gray Wood": "#3E4144",
      "Light Gray Wood": "#D8D8D6",
      "Dark Brown Wood": "#4A4036",
      "Gray Textured Wood": "#7A7370",
    },
    colorImages: {
      "Dark Gray Wood": "./images/gray1.webp",
      "Light Gray Wood": "./images/gray2.webp",
      "Dark Brown Wood": "./images/gray3.webp",
      "Gray Textured Wood": "./images/gray4.webp",
    },
    finishImages: {
      Matte: "./images/gray1.webp",
    },
    sizeImages: {
      "600×600": "./images/gray1.webp",
      "800×800": "./images/gray2.webp",
      "200×1200": "./images/gray3.webp",
    },
    texture: "Wood",
    finish: ["Matte"],
    sizes: ["600×600", "800×800", "200×1200"],
    surface: ["Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-tree",
        title: "Realistic Wood Grain",
        desc: "High-definition print replicates natural wood texture with stunning accuracy.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Waterproof",
        desc: "100% waterproof porcelain core won't warp, swell or fade like real timber.",
      },
      {
        icon: "fa-solid fa-brush",
        title: "Easy Maintenance",
        desc: "Simple cleaning with damp mop keeps your bedroom walls looking pristine.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Matte",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 1,
    title: "Whitewashed Oak",
    tag: "WHITEWASHED OAK",
    description:
      "Premium whitewashed oak effect tiles with realistic wood texture. Brings Scandinavian elegance and timeless beauty to your bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/Whitewashed Oak.webp",
    badge: "Whitewashed Oak",
    thumbImages: [
      "./images/oak1.webp",
      "./images/oak2.webp",
      "./images/oak3.webp",
      "./images/oak4.webp",
    ],
    colors: ["Arctic Oak", "Frost Gray", "Honey Amber", "Golden Tan"],
    colorsHex: {
      "Arctic Oak": "#D9D6D0",
      "Frost Gray": "#D0CECA",
      "Honey Amber": "#C8A96E",
      "Golden Tan": "#B8955A",
    },
    colorImages: {
      "Arctic Oak": "./images/oak1.webp",
      "Frost Gray": "./images/oak2.webp",
      "Honey Amber": "./images/oak3.webp",
      "Golden Tan": "./images/oak4.webp",
    },
    finishImages: {
      Matte: "./images/oak1.webp",
    },
    sizeImages: {
      "200×1200": "./images/oak1.webp",
      "800×800": "./images/oak2.webp",
    },
    texture: "Wood",
    finish: ["Matte"],
    sizes: ["200×1200", "800×800"],
    surface: ["Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-leaf",
        title: "Whitewashed Finish",
        desc: "Subtle weathered appearance adds character and warmth to your bedroom.",
      },
      {
        icon: "fa-solid fa-hand-peace",
        title: "Soft Texture",
        desc: "Smooth to touch, comfortable for bedroom walls, creating a cozy atmosphere.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Easy Maintenance",
        desc: "Stain-resistant surface makes cleaning effortless while maintaining natural beauty.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Spain",
      MOHs: "5",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Matte",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 2,
    title: "Rustic Hickory",
    tag: "RUSTIC HICKORY",
    description:
      "Premium rustic hickory effect tiles with deep wood grain patterns. Brings authentic farmhouse warmth and natural elegance to your bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/rusticf.webp",
    badge: "RUSTIC HICKORY",
    thumbImages: [
      "./images/Rustic1.webp",
      "./images/Rustic2.webp",
      "./images/Rustic3.webp",
      "./images/Rustic4.webp",
    ],
    colors: ["Rustic Brown", "Rustic Gray", "Rustic Amber", "Rustic Tan"],
    colorsHex: {
      "Rustic Brown": "#6B4C3A",
      "Rustic Gray": "#8A8278",
      "Rustic Amber": "#B87D3B",
      "Rustic Tan": "#A88B6A",
    },
    colorImages: {
      "Rustic Brown": "./images/Rustic1.webp",
      "Rustic Gray": "./images/Rustic2.webp",
      "Rustic Amber": "./images/Rustic3.webp",
      "Rustic Tan": "./images/Rustic4.webp",
    },
    finishImages: {
      Matte: "./images/Rustic1.webp",
    },
    sizeImages: {
      "600×600": "./images/Rustic1.webp",
      "200×1200": "./images/Rustic2.webp",
    },
    texture: "Wood",
    finish: ["Matte"],
    sizes: ["600×600", "200×1200"],
    surface: ["Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-fire",
        title: "Deep Grain Texture",
        desc: "Authentic hickory wood feel with deep, rich grain patterns for rustic charm.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "Scratch Resistant",
        desc: "Durable surface for long-lasting beauty in your personal sanctuary.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "Natural Rustic Look",
        desc: "Bring the warmth of nature into your bedroom with authentic rustic aesthetics.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<4%",
      SurfaceFinish: "Matte",
      Thickness: "10 mm",
      Rectified: "No",
    },
  },
  {
    id: 3,
    title: "Warm Cherry Wood",
    tag: "WARM CHERRY",
    description:
      "Rich red-brown wood effect tiles with warm cherry tones. Adds elegance, warmth, and sophisticated charm to your bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/cherrywarm.webp",
    badge: "Cherry",
    thumbImages: [
      "./images/warm1.webp",
      "./images/warm2.webp",
      "./images/warm3.webp",
      "./images/warm4.webp",
    ],
    colors: ["Cherry Red", "Mahogany", "Burgundy", "Rosewood"],
    colorsHex: {
      "Cherry Red": "#8B3A3A",
      Mahogany: "#5C2E16",
      Burgundy: "#6E2C2C",
      Rosewood: "#4A1919",
    },
    colorImages: {
      "Cherry Red": "./images/warm1.webp",
      Mahogany: "./images/warm2.webp",
      Burgundy: "./images/warm3.webp",
      Rosewood: "./images/warm4.webp",
    },
    finishImages: {
      Polished: "./images/warm1.webp",
    },
    sizeImages: {
      "800×800": "./images/warm1.webp",
      "600×600": "./images/warm2.webp",
    },
    texture: "Wood",
    finish: ["Polished"],
    sizes: ["800×800", "600×600"],
    surface: ["POSH+"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "High-Gloss Finish",
        desc: "Reflective surface adds warmth and elegance to your bedroom walls.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "POSH+ Coating",
        desc: "Stain and scratch resistant protection for lasting beauty.",
      },
      {
        icon: "fa-solid fa-fire",
        title: "Rich Cherry Tone",
        desc: "Deep red-brown hues create a cozy, inviting atmosphere perfect for master suites.",
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
    id: 4,
    title: "Driftwood Gray",
    tag: "DRIFTWOOD",
    description:
      "Weathered wood look tiles with soft gray tones. Creates a calm, coastal ambiance for serene bedroom retreats.",
    colours: 4,
    finishes: 1,
    image: "./images/driftfront.webp",
    badge: "DRIFTWOOD",
    thumbImages: [
      "./images/drift1.webp",
      "./images/drift2.webp",
      "./images/drift3.webp",
      "./images/drift4.webp",
    ],
    colors: ["Coastal Gray", "Silver Mist", "Storm Cloud", "Pebble Beach"],
    colorsHex: {
      "Coastal Gray": "#9E9E9E",
      "Silver Mist": "#B8B8B8",
      "Storm Cloud": "#7A7A7A",
      "Pebble Beach": "#8E8E8E",
    },
    colorImages: {
      "Coastal Gray": "./images/drift1.webp",
      "Silver Mist": "./images/drift2.webp",
      "Storm Cloud": "./images/drift3.webp",
      "Pebble Beach": "./images/drift4.webp",
    },
    finishImages: {
      Matt: "./images/drift1.webp",
    },
    sizeImages: {
      "600×1200": "./images/drift1.webp",
      "200×1200": "./images/drift2.webp",
    },
    texture: "Wood",
    finish: ["Matt"],
    sizes: ["600×1200", "200×1200"],
    surface: ["Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-water",
        title: "Weathered Effect",
        desc: "Natural driftwood appearance creates a calm, coastal ambiance for your bedroom.",
      },
      {
        icon: "fa-solid fa-cloud-sun",
        title: "Soft Gray Tones",
        desc: "Subtle gray hues bring a serene, relaxing atmosphere to your personal space.",
      },
      {
        icon: "fa-solid fa-hand-peace",
        title: "Smooth Texture",
        desc: "Comfortable to touch, perfect for creating a cozy bedroom environment.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 5,
    title: "Herringbone White Oak",
    tag: "HERRINGBONE",
    description:
      "Patterned wood-look tiles in classic herringbone design. Adds architectural depth and timeless elegance to bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/Herringbone White Oakf.webp",
    badge: "HERRINGBONE",
    thumbImages: [
      "./images/Herringbone White Oak1.webp",
      "./images/Herringbone White Oak2.webp",
      "./images/Herringbone White Oak3.webp",
      "./images/Herringbone White Oak4.webp",
    ],
    colors: ["Classic Oak", "Natural Oak", "Weathered Oak", "Gray Oak"],
    colorsHex: {
      "Classic Oak": "#C8B89A",
      "Natural Oak": "#B8A88A",
      "Weathered Oak": "#A89878",
      "Gray Oak": "#9E9E8E",
    },
    colorImages: {
      "Classic Oak": "./images/Herringbone White Oak1.webp",
      "Natural Oak": "./images/Herringbone White Oak2.webp",
      "Weathered Oak": "./images/Herringbone White Oak3.webp",
      "Gray Oak": "./images/Herringbone White Oak4.webp",
    },
    finishImages: {
      Matte: "./images/Herringbone1.webp",
    },
    sizeImages: {
      "600×600": "./images/Herringbone1.webp",
      "800×800": "./images/Herringbone2.webp",
    },
    texture: "Geometric",
    finish: ["Matte"],
    sizes: ["600×600", "800×800"],
    surface: ["Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-shapes",
        title: "Herringbone Pattern",
        desc: "Classic zigzag layout adds visual movement and architectural interest to walls.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "White Oak Texture",
        desc: "Beautiful oak grain pattern with elegant herringbone arrangement.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Easy Maintenance",
        desc: "Stain-resistant surface makes cleaning effortless while maintaining beauty.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Spain",
      MOHs: "5",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Matte",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 6,
    title: "Reclaimed Barnwood",
    tag: "BARNWOOD",
    description:
      "Authentic distressed wood effect ceramic tiles. Brings vintage character and rustic warmth to bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/Reclaimedff.webp",
    badge: "Vintage",
    thumbImages: [
      "./images/Reclaimed1.webp",
      "./images/Reclaimed2.webp",
      "./images/Reclaimed3.webp",
      "./images/Reclaimed4.webp",
    ],
    colors: ["Barnwood Brown", "Weathered Gray", "Rustic Red", "Vintage Tan"],
    colorsHex: {
      "Barnwood Brown": "#6B4C3A",
      "Weathered Gray": "#8A8278",
      "Rustic Red": "#8B3A3A",
      "Vintage Tan": "#A88B6A",
    },
    colorImages: {
      "Barnwood Brown": "./images/Reclaimed1.webp",
      "Weathered Gray": "./images/Reclaimed2.webp",
      "Rustic Red": "./images/Reclaimed3.webp",
      "Vintage Tan": "./images/Reclaimed4.webp",
    },
    finishImages: {
      Rustic: "./images/Reclaimed1.webp",
    },
    sizeImages: {
      "200×1200": "./images/Reclaimed1.webp",
      "600×600": "./images/Reclaimed2.webp",
    },
    texture: "Wood",
    finish: ["Rustic"],
    sizes: ["200×1200", "600×600"],
    surface: ["Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-clock",
        title: "Reclaimed Look",
        desc: "Vintage distressed character adds rustic charm and authentic farmhouse appeal.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "Barnwood Texture",
        desc: "Authentic weathered wood grain patterns for a truly rustic feel.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "Durable Finish",
        desc: "Scratch-resistant surface for long-lasting beauty in your bedroom.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "USA",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Rustic",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 7,
    title: "Espresso Hardwood",
    tag: "ESPRESSO",
    description:
      "Dark brown wood-look tiles with smooth finish. Creates a dramatic, cozy atmosphere in master bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/espressof.webp",
    badge: "ESPRESSO",
    thumbImages: [
      "./images/Espresso1.webp",
      "./images/Espresso2.webp",
      "./images/Espresso3.webp",
      "./images/Espresso4.webp",
    ],
    colors: ["Espresso Dark", "Deep Brown", "Mocha", "Cocoa"],
    colorsHex: {
      "Espresso Dark": "#2C1A10",
      "Deep Brown": "#3D2B1A",
      Mocha: "#4A3320",
      Cocoa: "#5C3D2A",
    },
    colorImages: {
      "Espresso Dark": "./images/Espresso1.webp",
      "Deep Brown": "./images/Espresso2.webp",
      Mocha: "./images/Espresso3.webp",
      Cocoa: "./images/Espresso4.webp",
    },
    finishImages: {
      Polished: "./images/Espresso1.webp",
    },
    sizeImages: {
      "800×800": "./images/Espresso1.webp",
      "600×1200": "./images/Espresso2.webp",
    },
    texture: "Wood",
    finish: ["Polished"],
    sizes: ["800×800", "600×1200"],
    surface: ["POSH+"],
    features: [
      {
        icon: "fa-solid fa-moon",
        title: "Deep Espresso",
        desc: "Rich dark tone creates a dramatic, cozy atmosphere perfect for master suites.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "High-Gloss Finish",
        desc: "Smooth polished surface adds elegance and sophistication to your bedroom walls.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "POSH+ Coating",
        desc: "Stain and scratch resistant protection for lasting beauty.",
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
    id: 8,
    title: "Scandinavian Pine",
    tag: "SCANDI PINE",
    description:
      "Light wood grain tiles with minimalistic appeal. Brings bright, airy Scandi style to serene bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/pine1.webp",
    badge: "SCANDI PINE",
    thumbImages: [
      "./images/pine2.webp",
      "./images/pine3.webp",
      "./images/pine4.webp",
      "./images/pine5.webp",
    ],
    colors: ["Natural Pine", "White Pine", "Honey Pine", "Golden Pine"],
    colorsHex: {
      "Natural Pine": "#D4C5A9",
      "White Pine": "#E8DCC8",
      "Honey Pine": "#C8A96E",
      "Golden Pine": "#B8955A",
    },
    colorImages: {
      "Natural Pine": "./images/pine2.webp",
      "White Pine": "./images/pine3.webp",
      "Honey Pine": "./images/pine4.webp",
      "Golden Pine": "./images/pine5.webp",
    },
    finishImages: {
      Matt: "./images/pine1.webp",
    },
    sizeImages: {
      "200×1200": "./images/pine1.webp",
      "600×600": "./images/pine2.webp",
    },
    texture: "Wood",
    finish: ["Matt"],
    sizes: ["200×1200", "600×600"],
    surface: ["Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-sun",
        title: "Scandinavian Style",
        desc: "Bright, airy, minimal aesthetic creates a serene, peaceful bedroom retreat.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "Natural Pine Texture",
        desc: "Authentic light wood grain pattern for a fresh, natural look.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Easy Maintenance",
        desc: "Stain-resistant surface makes cleaning effortless.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Sweden",
      MOHs: "5",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Matt",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 9,
    title: "Teak Wood Effect",
    tag: "TEAK WOOD",
    description:
      "Warm golden-brown tiles with natural wood variation. Adds organic elegance and tropical warmth to bedroom walls.",
    colours: 3,
    finishes: 1,
    image: "./images/teakwoodd.webp",
    badge: "TEAK WOOD",
    thumbImages: [
      "./images/teak1.webp",
      "./images/teak2.webp",
      "./images/teak3.webp",
    ],
    colors: ["Golden Teak", "Warm Teak", "Natural Teak"],
    colorsHex: {
      "Golden Teak": "#C9A84C",
      "Warm Teak": "#B8955A",
      "Natural Teak": "#A8884A",
    },
    colorImages: {
      "Golden Teak": "./images/teak1.webp",
      "Warm Teak": "./images/teak2.webp",
      "Natural Teak": "./images/teak3.webp",
    },
    finishImages: {
      Satin: "./images/teak1.webp",
    },
    sizeImages: {
      "600×600": "./images/teak1.webp",
      "800×800": "./images/teak2.webp",
    },
    texture: "Wood",
    finish: ["Satin"],
    sizes: ["600×600", "800×800"],
    surface: ["Anti-Skid"],
    features: [
      {
        icon: "fa-solid fa-palette",
        title: "Teak Warmth",
        desc: "Golden-brown organic tone adds natural elegance and tropical warmth.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "Natural Wood Grain",
        desc: "Authentic teak texture with beautiful natural variations.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Anti-Skid Surface",
        desc: "Safe and slip-resistant finish for bedroom walls.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Indonesia",
      MOHs: "6",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Satin",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 10,
    title: "Smoked Walnut",
    tag: "SMOKED WALNUT",
    description:
      "Deep charcoal wood-look tiles with subtle grain. Makes a bold contemporary statement on modern bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/Smoked Walnutf.webp",
    badge: "SMOKED WALNUT",
    thumbImages: [
      "./images/smoked walnut1.webp",
      "./images/Smoked Walnut2.webp",
      "./images/Smoked Walnut3.webp",
      "./images/Smoked Walnut4.webp",
    ],
    colors: ["Smoked Charcoal", "Dark Walnut", "Shadow Gray", "Midnight Oak"],
    colorsHex: {
      "Smoked Charcoal": "#2C2C2C",
      "Dark Walnut": "#3A3028",
      "Shadow Gray": "#4A4540",
      "Midnight Oak": "#1E1E1E",
    },
    colorImages: {
      "Smoked Charcoal": "./images/smoked walnut1.webp",
      "Dark Walnut": "./images/Smoked Walnut2.webp",
      "Shadow Gray": "./images/Smoked Walnut3.webp",
      "Midnight Oak": "./images/Smoked Walnut4.webp",
    },
    finishImages: {
      Matt: "./images/smoked walnut1.webp",
    },
    sizeImages: {
      "800×800": "./images/smoked walnut1.webp",
      "200×1200": "./images/Smoked Walnut2.webp",
    },
    texture: "Wood",
    finish: ["Matt"],
    sizes: ["800×800", "200×1200"],
    surface: ["Scratch Resistant"],
    features: [
      {
        icon: "fa-solid fa-cloud",
        title: "Smoked Effect",
        desc: "Deep charcoal with subtle grain creates modern sophistication and drama.",
      },
      {
        icon: "fa-solid fa-tree",
        title: "Walnut Texture",
        desc: "Rich dark wood grain pattern for contemporary elegance.",
      },
      {
        icon: "fa-solid fa-shield",
        title: "Scratch Resistant",
        desc: "Durable surface for long-lasting beauty in your bedroom.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Germany",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Matt",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 11,
    title: "Bamboo Texture",
    tag: "BAMBOO",
    description:
      "Eco-friendly look tiles with bamboo-inspired pattern. Brings sustainable natural beauty to eco-conscious bedroom walls.",
    colours: 4,
    finishes: 1,
    image: "./images/bamboofront.webp",
    badge: "Eco",
    thumbImages: [
      "./images/bamboo1.webp",
      "./images/bamboo2.webp",
      "./images/bamboo3.webp",
      "./images/bamboo4.webp",
    ],
    colors: [
      "Light Natural Bamboo",
      "Natural Bamboo Grain",
      "Classic Bamboo Panel",
      "Carbonized Bamboo",
    ],
    colorsHex: {
      "Light Natural Bamboo": "#F8E8C8",
      "Natural Bamboo Grain": "#C68A57",
      "Classic Bamboo Panel": "#BEA689",
      "Carbonized Bamboo": "#52504A",
    },
    colorImages: {
      "Light Natural Bamboo": "./images/bamboo4.webp",
      "Natural Bamboo Grain": "./images/bamboo1.webp",
      "Classic Bamboo Panel": "./images/bamboo2.webp",
      "Carbonized Bamboo": "./images/bamboo3.webp",
    },
    finishImages: {
      Matte: "./images/bamboo1.webp",
    },
    sizeImages: {
      "600×600": "./images/bamboo1.webp",
      "800×800": "./images/bamboo2.webp",
    },
    texture: "Mosaic",
    finish: ["Matte"],
    sizes: ["600×600", "800×800"],
    surface: ["Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-recycle",
        title: "Eco-Inspired",
        desc: "Sustainable bamboo pattern brings nature-inspired tranquility to your bedroom.",
      },
      {
        icon: "fa-solid fa-leaf",
        title: "Natural Bamboo Grain",
        desc: "Authentic bamboo texture with warm golden-brown tones for a serene atmosphere.",
      },
      {
        icon: "fa-solid fa-water",
        title: "Easy Maintenance",
        desc: "Stain-resistant surface makes cleaning effortless while maintaining natural beauty.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "Japan",
      MOHs: "5",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Matte",
      Thickness: "9 mm",
      Rectified: "Yes",
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
  if (total === 0) return BEDROOM_TILES;
  return BEDROOM_TILES.filter((t) => {
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
  const v = document.getElementById("sort-sel")?.value;
  const arr = [...tiles];
  if (v === "Name A–Z") arr.sort((a, b) => a.title.localeCompare(b.title));
  else if (v === "Name Z–A") arr.sort((a, b) => b.title.localeCompare(a.title));
  return arr;
}

/* ── Render product grid ── */
function renderGrid() {
  const container = document.getElementById("productsGrid");
  if (!container) {
    console.error("productsGrid element not found!");
    return;
  }

  const tiles = getSorted(getFiltered(applied));
  const countNum = document.getElementById("countNum");
  if (countNum) countNum.textContent = tiles.length;

  container.style.opacity = "0";

  setTimeout(() => {
    if (tiles.length === 0) {
      container.innerHTML = `<div class="no-results"><i class="fa-solid fa-filter-circle-xmark"></i><p>No tiles match your current filters.</p><button class="btn-primary" style="margin-top:1rem" onclick="clearAll()">Clear Filters</button></div>`;
    } else {
      container.innerHTML = "";
      tiles.forEach((tile) => {
        const card = document.createElement("div");
        card.className = "prod-card";
        let shortDesc = tile.description;
        if (shortDesc.length > 100) {
          shortDesc = shortDesc.substring(0, 97) + "...";
        }
        card.innerHTML = `
          <div class="prod-img-wrap">
            <img src="${tile.image}" alt="${tile.title}" loading="lazy"/>
            <span class="prod-badge">${tile.badge}</span>
            <button class="prod-wish" aria-label="Save to wishlist"><i class="fa-regular fa-heart"></i></button>
          </div>
          <div class="prod-body">
            <p class="prod-tag">${tile.tag}</p>
            <h3 class="prod-name">${tile.title}</h3>
            <p class="prod-desc">${shortDesc}</p>
            <div class="prod-meta">
              <span><strong>${tile.colours}</strong> Colour${tile.colours !== 1 ? "s" : ""}</span>
              <span><strong>${tile.finishes}</strong> Finish${tile.finishes !== 1 ? "es" : ""}</span>
            </div>
          </div>
          <div class="prod-actions">
            <button class="prod-btn prod-btn-view" data-id="${tile.id}">View More <i class="fa-solid fa-plus"></i></button>
            <a href="https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}" target="_blank" class="prod-btn prod-btn-enquire">Enquire Now</a>
          </div>`;
        container.appendChild(card);
      });

      document.querySelectorAll(".prod-btn-view").forEach((btn) => {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          const id = parseInt(this.getAttribute("data-id"));
          if (!isNaN(id)) {
            openDetail(id);
          }
        });
      });
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

/* ── Update apply button count ── */
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
  console.log("Opening detail for id:", id);
  const tile = BEDROOM_TILES[id];
  if (!tile) {
    console.error("Tile not found for id:", id);
    return;
  }

  const breadcrumbName = document.getElementById("detailBreadcrumbName");
  const detailTag = document.getElementById("detailTag");
  const detailName = document.getElementById("detailName");
  const detailDesc = document.getElementById("detailDesc");
  const detailMainImg = document.getElementById("detailMainImg");
  const detailEnquireWA = document.getElementById("detailEnquireWA");
  const detailEnquireWA2 = document.getElementById("detailEnquireWA2");

  if (breadcrumbName) breadcrumbName.textContent = tile.title;
  if (detailTag) detailTag.textContent = tile.tag;
  if (detailName) detailName.textContent = tile.title;
  if (detailDesc) detailDesc.textContent = tile.description;
  if (detailMainImg) {
    detailMainImg.src = tile.image;
    detailMainImg.alt = tile.title;
  }

  const waLink = `https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}`;
  if (detailEnquireWA) detailEnquireWA.href = waLink;
  if (detailEnquireWA2) detailEnquireWA2.href = waLink;

  /* ── Thumbnails ── */
  const thumbImgs =
    tile.thumbImages && tile.thumbImages.length > 0
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
        if (detailMainImg) detailMainImg.src = src;
        thumbsEl
          .querySelectorAll(".detail-thumb")
          .forEach((t) => t.classList.remove("active"));
        d.classList.add("active");
      });
      thumbsEl.appendChild(d);
    });
  }

  /* ── Spec table ── */
  const specRows = [
    ["Texture", tile.texture],
    ["Colours Available", tile.colours],
    ["Finishes", tile.finish.join(", ")],
    ["Sizes", tile.sizes.join(", ")],
    ["Surface", tile.surface.join(", ")],
  ];
  const specTable = document.getElementById("detailSpecTable");
  if (specTable) {
    specTable.innerHTML = specRows
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
      .join("");
  }

  /* ── Main image fade helper ── */
  function updateMainImage(newSrc) {
    if (!detailMainImg) return;
    detailMainImg.style.transition = "opacity 0.2s";
    detailMainImg.style.opacity = "0";
    setTimeout(() => {
      detailMainImg.src = newSrc;
      detailMainImg.style.opacity = "1";
    }, 200);
  }

  /* ── Colors ── */
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

  /* ── Finishes ── */
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

  /* ── Sizes ── */
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

  /* ── Features ── */
  const detailFeaturesGrid = document.getElementById("detailFeaturesGrid");
  if (detailFeaturesGrid) {
    detailFeaturesGrid.innerHTML = tile.features
      .map(
        (f) =>
          `<div class="feature-item"><i class="${f.icon}" aria-hidden="true"></i><h5>${f.title}</h5><p>${f.desc}</p></div>`,
      )
      .join("");
  }

  /* ── Tech specs ── */
  const detailTechGrid = document.getElementById("detailTechGrid");
  if (detailTechGrid) {
    detailTechGrid.innerHTML = Object.entries(tile.tech)
      .map(
        ([k, v]) =>
          `<div class="tech-spec-cell"><dt>${k}</dt><dd>${v}</dd></div>`,
      )
      .join("");
  }

  /* ── Related tiles ── */
  const related = BEDROOM_TILES.filter(
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
          `<div class="related-card" data-id="${t.id}"><div class="related-card-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div><div class="related-card-body"><p class="related-card-tag">${t.tag}</p><p class="related-card-name">${t.title}</p></div></div>`,
      )
      .join("");
    document
      .querySelectorAll(".related-card")
      .forEach((rc) =>
        rc.addEventListener("click", () => openDetail(parseInt(rc.dataset.id))),
      );
  }

  /* ── Reset tabs ── */
  document
    .querySelectorAll(".detail-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".detail-tab-panel")
    .forEach((p) => p.classList.remove("active"));
  const featuresTab = document.querySelector(
    '.detail-tab-btn[data-tab="features"]',
  );
  const tabFeatures = document.getElementById("tab-features");
  if (featuresTab) featuresTab.classList.add("active");
  if (tabFeatures) tabFeatures.classList.add("active");

  const detailOverlay = document.getElementById("detailOverlay");
  const detailModal = document.getElementById("detailModal");
  if (detailOverlay) {
    detailOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  if (detailModal) detailModal.scrollTop = 0;
}

/* ── Close detail overlay ── */
function closeDetail() {
  const detailOverlay = document.getElementById("detailOverlay");
  if (detailOverlay) detailOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Render featured grid ── */
function renderFeatured() {
  const featuredGrid = document.getElementById("featuredGrid");
  if (!featuredGrid) return;

  featuredGrid.innerHTML = FEATURED_IDS.map((id) => {
    const t = BEDROOM_TILES[id];
    if (!t) return "";
    let shortDesc = t.description;
    if (shortDesc.length > 80) {
      shortDesc = shortDesc.substring(0, 77) + "...";
    }
    return `<div class="feat-card" data-id="${id}"><div class="feat-img"><img src="${t.image}" alt="${t.title}" loading="lazy"/></div><div class="feat-body"><p class="feat-tag">${t.tag}</p><h4 class="feat-name">${t.title}</h4><p class="feat-desc">${shortDesc}</p><div class="feat-meta"><span><strong>${t.colours}</strong> Color${t.colours !== 1 ? "s" : ""}</span><span><strong>${t.finishes}</strong> Finish${t.finishes !== 1 ? "es" : ""}</span></div></div></div>`;
  }).join("");

  document
    .querySelectorAll(".feat-card")
    .forEach((fc) =>
      fc.addEventListener("click", () => openDetail(parseInt(fc.dataset.id))),
    );
}

/* ── DOM Ready ── */
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing bedroom wall tiles...");
  console.log(`Found ${BEDROOM_TILES.length} tiles`);

  renderGrid();
  renderFeatured();
  renderChips();

  /* ── Filter group accordion toggles ── */
  document
    .querySelectorAll(".filter-group-header")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        btn.closest(".filter-group").classList.toggle("open"),
      ),
    );

  /* ── Color swatches ── */
  document.querySelectorAll(".swatch-item").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const c = el.dataset.color;
      if (el.classList.contains("active")) pending.colors.add(c);
      else pending.colors.delete(c);
      updateApplyBtn();
    }),
  );

  /* ── Texture thumbs ── */
  document.querySelectorAll(".texture-thumb").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const x = el.dataset.texture;
      if (el.classList.contains("active")) pending.textures.add(x);
      else pending.textures.delete(x);
      updateApplyBtn();
    }),
  );

  /* ── Finish checkboxes ── */
  document.querySelectorAll("[data-finish]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const f = cb.dataset.finish;
      if (cb.checked) pending.finishes.add(f);
      else pending.finishes.delete(f);
      updateApplyBtn();
    }),
  );

  /* ── Size tags ── */
  document.querySelectorAll(".size-tag").forEach((el) =>
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      const s = el.dataset.size;
      if (el.classList.contains("active")) pending.sizes.add(s);
      else pending.sizes.delete(s);
      updateApplyBtn();
    }),
  );

  /* ── Surface checkboxes ── */
  document.querySelectorAll("[data-surface]").forEach((cb) =>
    cb.addEventListener("change", () => {
      const s = cb.dataset.surface;
      if (cb.checked) pending.surfaces.add(s);
      else pending.surfaces.delete(s);
      updateApplyBtn();
    }),
  );

  /* ── Apply filters button ── */
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

  /* ── Clear all ── */
  const clearAllBtn = document.getElementById("clearAllBtn");
  if (clearAllBtn) clearAllBtn.addEventListener("click", clearAll);

  /* ── Sort ── */
  const sortSel = document.getElementById("sort-sel");
  if (sortSel) sortSel.addEventListener("change", renderGrid);

  /* ── Grid view toggle ── */
  const grid = document.getElementById("productsGrid");
  const btn3col = document.getElementById("btn3col");
  const btn2col = document.getElementById("btn2col");

  if (btn3col && btn2col && grid) {
    btn3col.addEventListener("click", function () {
      grid.classList.remove("two-col");
      this.classList.add("active");
      btn2col.classList.remove("active");
    });
    btn2col.addEventListener("click", function () {
      grid.classList.add("two-col");
      this.classList.add("active");
      btn3col.classList.remove("active");
    });
  }

  /* ── Detail overlay close ── */
  const detailClose = document.getElementById("detailClose");
  const detailOverlay = document.getElementById("detailOverlay");

  if (detailClose) detailClose.addEventListener("click", closeDetail);
  if (detailOverlay) {
    detailOverlay.addEventListener("click", (e) => {
      if (e.target === detailOverlay) closeDetail();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetail();
  });

  /* ── Detail tabs ── */
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

  /* ── Mobile filter toggle ── */
  const mobileFilterToggle = document.getElementById("mobileFilterToggle");
  const sidebar = document.getElementById("sidebar");

  if (mobileFilterToggle && sidebar) {
    mobileFilterToggle.addEventListener("click", function () {
      sidebar.classList.toggle("mobile-open");
      this.innerHTML = sidebar.classList.contains("mobile-open")
        ? '<i class="fa-solid fa-xmark"></i> Close Filters'
        : '<i class="fa-solid fa-sliders"></i> Filters';
    });
  }

  /* ── Smooth scroll for anchor links ── */
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
