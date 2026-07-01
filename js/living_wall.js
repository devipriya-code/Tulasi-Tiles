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
      "Premium white and grey marble with natural veining patterns. A timeless foundation that elevates any living room with natural luxury.",
    colours: 4,
    finishes: 2,
    image: "./images/living_room_img1.avif",
    badge: "Carrara",
    thumbImages: [
      "./images/living-room/carara/carrara-grey.webp",
      "./images/living-room/carara/carrarawhiteandnatural.webp",
      "./images/living-room/carara/carrarawhitegray.webp",
      "./images/living-room/carara/carrarawhitemarble.webp",
    ],
    colors: ["Carrara Grey", "Natural White", "Cloudy White", "Classic White"],
    colorsHex: {
      "Carrara Grey": "#b8bcbe",
      "Natural White": "#f2f0eb",
      "Cloudy White": "#e8e9eb",
      "Classic White": "#ffffff",
    },
    colorImages: {
      "Carrara Grey": "./images/living-room/carara/carrara-grey.webp",
      "Natural White":
        "./images/living-room/carara/carrarawhiteandnatural.webp",
      "Cloudy White": "./images/living-room/carara/carrarawhitegray.webp",
      "Classic White": "./images/living-room/carara/carrarawhitemarble.webp",
    },
    finishImages: {
      // Typically, Polished is used for high-contrast white marble
      Polished: "./images/living-room/carara/carrarawhitemarble.webp",
      // Satin works best for the softer grey tones
      Satin: "./images/living-room/carara/carrara-grey.webp",
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
    image: "./images/living-room/OAK HAVEN/Oak-Wood.webp",
    badge: "Wood Look",
    thumbImages: [
      "./images/living-room/OAK HAVEN/Brown Oak.webp",
      "./images/living-room/OAK HAVEN/Dark Oak.webp",
      "./images/living-room/OAK HAVEN/Light Oak.webp",
      "./images/living-room/OAK HAVEN/Natural Oak.webp",
      "./images/living-room/OAK HAVEN/Beige Oak.webp",
    ],
    colors: ["Brown", "Beige", "LightOak", "NaturalOak", "DarkOak"],
    colorsHex: {
      Brown: "#9A6B4A",
      Beige: "#D8BC9A",
      LightOak: "#CFA77A",
      NaturalOak: "#C08A55",
      DarkOak: "#3D312C",
    },
    colorImages: {
      Brown: "./images/living-room/OAK HAVEN/Brown Oak.webp",
      Beige: " ./images/living-room/OAK HAVEN/Beige Oak.webp",
      LightOak: "./images/living-room/OAK HAVEN/Light Oak.webp",
      NaturalOak: "./images/living-room/OAK HAVEN/Natural Oak.webp",
      DarkOak: "./images/living-room/OAK HAVEN/Dark Oak.webp",
    },
    finishImages: {
      Rustic: "./images/living-room/OAK HAVEN/Brown Oak.webp",
      Smooth: "./images/living-room/OAK HAVEN/Beige Oak.webp",
      FineGrain: "./images/living-room/OAK HAVEN/Light Oak.webp",
      RusticBrushed: "./images/living-room/OAK HAVEN/Dark Oak.webp",
    },
    // sizeImages: { "200×1200": "./images/living_room_img2.avif", "800×800": "./images/living_room_img3.jpg" },
    texture: "Wood",
    finish: ["Rustic", "Smooth", "FineGrain", " RusticBrushed"],
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
  "id": 2,
  "title": "Corsica Marble",
  "tag": "CORSICA MARBLE",
  "description": "Elegant porcelain tiles featuring classic marble veining and natural stone textures. Brings a sophisticated, timeless grandeur to high-end living spaces.",
  "colours": 5,
  "finishes": 2,
  "image": "./images/living-room/corsica/Corsica.webp",
  "badge": "Marble",
  "thumbImages": [
    "./images/living-room/corsica/Corsica beige.webp",
    "./images/living-room/corsica/Corsica gray.webp",
    "./images/living-room/corsica/Corsica White.webp",
    "./images/living-room/corsica/Corsica charcoal.webp",
    "./images/living-room/corsica/Corsica sand.webp"
  ],
  "colors": ["Beige", "Gray", "White", "Charcoal", "Sand"],
  "colorsHex": { 
    "Beige": "#f3e1cd", 
    "Gray": "#dcdcdc", 
    "White": "#fdfdfd", 
    "Charcoal": "#3a3b40", 
    "Sand": "#decbb3" 
  },
  "colorImages": {
    "Beige": "./images/living-room/corsica/Corsica beige.jpg",
    "Gray": "./images/living-room/corsica/Corsica gray.webp",
    "White": "./images/living-room/corsica/Corsica White.webp",
    "Charcoal": "./images/living-room/corsica/Corsica charcoal.webp",
    "Sand": "./images/living-room/corsica/Corsica sand.webp"
  },
  "finishImages": {
    "Matt": "./images/living-room/corsica/Corsica gray.webp",
    "Rustic": "./images/living-room/corsica/Corsica sand.webp"
  },
  "sizeImages": {
    "600×600": "./images/living-room/corsica/Corsica White.webp",
    "800×800": "./images/living-room/corsica/Corsica White.webp"
  },
  "texture": "Marble",
  "finish": ["Matt", "Rustic"],
  "sizes": ["600×600", "800×800"],
  "surface": ["Anti-Skid", "Stain Resistant"],
  "features": [
    {
      "icon": "fa-solid fa-gem",
      "title": "Marble Veining",
      "desc": "Authentic, realistic organic veins that mimic the natural depth of fine quarried stone."
    },
    {
      "icon": "fa-solid fa-ban",
      "title": "Anti-Skid Surface",
      "desc": "Matte finish properties engineered to provide excellent grip underfoot for high-traffic rooms."
    },
    {
      "icon": "fa-solid fa-leaf",
      "title": "Versatile Elegance",
      "desc": "Complements both traditional upscale layouts and minimalist modern concepts seamlessly."
    }
  ],
  "tech": {
    "Material": "Porcelain",
    "Origin": "India",
    "MOHs": "6",
    "WaterAbsorption": "<0.5%",
    "SurfaceFinish": "Matt / Rustic",
    "Thickness": "10 mm",
    "Rectified": "Yes"
  }
},

  {
    id: 3,
    title: "Slate Horizon",
    tag: "SLATE HORIZON",
    description:
      "Natural slate texture tiles with rich colour variations and earthy warmth. Each tile carries the organic character of natural stone.",
    colours: 5,
    finishes: 1,
    image: "./images/living-room/Slate Horizon/slate.webp",
    badge: "Slate",
    thumbImages: [
      "./images/living-room/Slate Horizon/Dark Grey Matte Floor.webp",
      "./images/living-room/Slate Horizon/Horizon Dacite Ash Texture.webp",
      "./images/living-room/Slate Horizon/Horizon Dacite Slate grey.webp",
      "./images/living-room/Slate Horizon/Horizon Dacite Slate.webp",
      "./images/living-room/Slate Horizon/Textured dark grey.webp",
    ],
    colors: [
      "Dark Grey",
      "Ash Grey",
      "Slate White",
      "Linear Grey",
      "Textured Grey",
    ],
    colorsHex: {
      "Dark Grey": "#3a3c3e",
      "Ash Grey": "#949699",
      "Slate White": "#eceeed",
      "Linear Grey": "#a8a9ab",
      "Textured Grey": "#7e858a",
    },
    colorImages: {
      "Dark Grey":
        "./images/living-room/Slate Horizon/Dark Grey Matte Floor.webp",
      "Ash Grey":
        "./images/living-room/Slate Horizon/Horizon Dacite Ash Texture.webp",
      "Slate White":
        "./images/living-room/Slate Horizon/Horizon Dacite Slate grey.webp",
      "Linear Grey":
        "./images/living-room/Slate Horizon/Horizon Dacite Slate.webp",
      "Textured Grey":
        "./images/living-room/Slate Horizon/Textured dark grey.webp",
    },
    finishImages: {
      Matt: "./images/living-room/Slate Horizon/Dark Grey Matte Floor.webp",
    },
    sizeImages: {
      "600×600":
        "./images/living-room/Slate Horizon/Dark Grey Matte Floor.webp",
      "600×1200":
        "./images/living-room/Slate Horizon/Horizon Dacite Ash Texture.webp",
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
  "id": 4,
  "title": "Modern Terrazzo",
  "tag": "MODERN TERRAZZO",
  "description": "Chic composite tiles with decorative stone chips ranging from fine grains to large marble fragments. A contemporary classic that brings artistic flair to any living space.",
  "colours": 5,
  "finishes": 2,
  "image": "./images/living-room/terrazzo/terrazzo.webp",
  "badge": "Terrazzo",
  "thumbImages": [
    "./images/living-room/terrazzo/Terrazzo Grey.webp",
    "./images/living-room/terrazzo/White Polished -Terrazzo.webp",
    "./images/living-room/terrazzo/Beige Mix Terrazzo.webp",
    "./images/living-room/terrazzo/large stone chips terrazzo.webp",
    "./images/living-room/terrazzo/Latte Terrazzo Carving.webp"
  ],
  "colors": ["Grey", "White", "Beige Mix", "Large Chips", "Latte"],
  "colorsHex": { 
    "Grey": "#a0a0a0", 
    "White": "#f8f8f8", 
    "Beige Mix": "#f1e5d7", 
    "Large Chips": "#dcdcdc", 
    "Latte": "#d1bfa7" 
  },
  "colorImages": {
    "Grey": "./images/living-room/terrazzo/Terrazzo Grey.webp",
    "White": "./images/living-room/terrazzo/White Polished -Terrazzo.webp",
    "Beige Mix": "./images/living-room/terrazzo/Beige Mix Terrazzo.webp",
    "Large Chips": "./images/living-room/terrazzo/large stone chips terrazzo.webp",
    "Latte": "./images/living-room/terrazzo/Latte Terrazzo Carving.webp"
  },
  "finishImages": { 
    "Polished": "./images/living-room/terrazzo/White Polished -Terrazzo.webp",
    "Carving": "./images/living-room/terrazzo/Latte Terrazzo Carving.webp"
  },
  "sizeImages": {
    "600×600": "./images/living-room/terrazzo/terrazzo.webp",
    "800×800": "./images/living-room/terrazzo/terrazzo.webp"
  },
  "texture": "Terrazzo",
  "finish": ["Polished", "Carving"],
  "sizes": ["600×600", "800×800"],
  "surface": ["POSH+", "Carving Effect", "Stain Resistant"],
  "features": [
    {
      "icon": "fa-solid fa-circle-dot",
      "title": "Terrazzo Pattern",
      "desc": "Classic mid-century design enjoying a major contemporary revival with varied chip sizes."
    },
    {
      "icon": "fa-solid fa-star",
      "title": "POSH+ Finish",
      "desc": "High-gloss surface treatment for maximum light reflection."
    },
    {
      "icon": "fa-solid fa-gem",
      "title": "Carving Texture",
      "desc": "Subtle surface micro-engravings that follow the natural stone veining."
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Stain Resistant",
      "desc": "Sealed surface resists everyday staining for easy maintenance."
    }
  ],
  "tech": {
    "Material": "Porcelain",
    "Origin": "Italy",
    "MOHs": "7",
    "WaterAbsorption": "<0.1%",
    "SurfaceFinish": "Polished / Carving",
    "Thickness": "9 mm",
    "Rectified": "Yes"
  }
},
 {
  "id": 5,
  "title": "Porcelain Luxury",
  "tag": "MARBLE & ONYX LOOK",
  "description": "Exquisite large-format porcelain tiles featuring breathtaking marble veining and translucent onyx patterns. A premium polished surface that floods living spaces with light and high-end sophistication.",
  "colours": 4,
  "finishes": 1,
  "image": "./images/living-room/porcelain/porcelain.webp",
  "badge": "Polished Slabs",
  "thumbImages": [
    "./images/living-room/porcelain/white marble look porcelain.webp",
    "./images/living-room/porcelain/Onyx-Look Porcelain white.webp",
    "./images/living-room/porcelain/onyx porelain perl.webp",
    "./images/living-room/porcelain/porcelain beige.webp"
  ],
  "colors": ["White Marble", "Onyx White", "Onyx Pearl", "Beige Marble"],
  "colorsHex": { 
    "White Marble": "#fafafa", 
    "Onyx White": "#fdfbf7", 
    "Onyx Pearl": "#eae8e4", 
    "Beige Marble": "#e3caa5" 
  },
  "colorImages": {
    "White Marble": "./images/living-room/porcelain/white marble look porcelain.webp",
    "Onyx White": "./images/living-room/porcelain/Onyx-Look Porcelain white.webp",
    "Onyx Pearl": "./images/living-room/porcelain/onyx porelain perl.webp",
    "Beige Marble": "./images/living-room/porcelain/porcelain beige.webp"
  },
  "finishImages": {
    "Polished": "./images/living-room/porcelain/white marble look porcelain.webp"
  },
  "sizeImages": {
    "600×1200": "./images/living-room/porcelain/porcelain.webp",
    "800×1600": "./images/living-room/porcelain/porcelain.webp"
  },
  "texture": "Marble",
  "finish": ["Polished"],
  "sizes": ["600×1200", "800×1600"],
  "surface": ["High-Gloss Polished", "Stain Resistant"],
  "features": [
    {
      "icon": "fa-solid fa-gem",
      "title": "Onyx & Marble Grain",
      "desc": "High-definition digital printing accurately captures the depth and translucent layers of fine natural stone."
    },
    {
      "icon": "fa-solid fa-wand-magic-sparkles",
      "title": "Mirror Polished",
      "desc": "Super-glossy coating maximizes natural light reflection, opening up smaller rooms visually."
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Stain & Scratch Resistant",
      "desc": "Impervious porcelain body stands up to heavy foot traffic and spills with easy cleanup."
    }
  ],
  "tech": {
    "Material": "Porcelain",
    "Origin": "Spain",
    "MOHs": "6",
    "WaterAbsorption": "<0.5%",
    "SurfaceFinish": "Polished",
    "Thickness": "9 mm",
    "Rectified": "Yes"
  }
},
  {
    id: 6,
    title: "Urban Concrete",
    tag: "URBAN CONCRETE",
    description:
      "Industrial-chic concrete effect porcelain with a smooth matte finish. Makes a bold contemporary statement in open-plan living spaces.",
    colours: 5,
    finishes: 2,
    image: "./images/living-room/urban Concrete/ConcreteTiles.webp",
    badge: "Concrete",
    thumbImages: [
      "./images/living-room/urban Concrete/Light Grey Concrete.webp",
      "./images/living-room/urban Concrete/Medium Grey Concrete Tile.webp",
      "./images/living-room/urban Concrete/Urban Concrete – Graphite.webp",
      "./images/living-room/urban Concrete/Urban Concrete – Pearl Grey.webp",
      "./images/living-room/urban Concrete/Urban Concrete – Terracotta.webp",
    ],
    colors: [
      "Light Grey",
      "Medium Grey",
      "Graphite",
      "Pearl Grey",
      "Terracotta",
    ],
    colorsHex: {
      "Light Grey": "#b3b5b6",
      "Medium Grey": "#8e8e90",
      Graphite: "#4b4d4f",
      "Pearl Grey": "#aba79c",
      Terracotta: "#5c5451",
    },
    colorImages: {
      "Light Grey":
        "./images/living-room/urban Concrete/Light Grey Concrete.webp",
      "Medium Grey":
        "./images/living-room/urban Concrete/Medium Grey Concrete Tile.webp",
      Graphite:
        "./images/living-room/urban Concrete/Urban Concrete – Graphite.webp",
      "Pearl Grey":
        "./images/living-room/urban Concrete/Urban Concrete – Pearl Grey.webp",
      Terracotta:
        "./images/living-room/urban Concrete/Urban Concrete – Terracotta.webp",
    },
    finishImages: {
      Matt: "./images/living-room/urban Concrete/Medium Grey Concrete Tile.webp",
      Satin:
        "./images/living-room/urban Concrete/Urban Concrete – Pearl Grey.webp",
    },
    texture: "Concrete",
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
      Origin: "India",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Matt / Satin",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
  "id": 7,
  "title": "Botticino Elegance",
  "tag": "BOTTICINO MARBLE LOOK",
  "description": "Luxurious porcelain slabs capturing the soft, timeless appeal of classic Botticino marble. The delicate veining and warm beige tones combined with a mirror-like polished finish flood living areas with spacious, high-end warmth.",
  "colours": 5,
  "finishes": 1,
  "image": "./images/living-room/Botticino/Botticino.webp",
  "badge": "Polished Marble",
  "thumbImages": [
    "./images/living-room/Botticino/Cream bottocino.webp",
    "./images/living-room/Botticino/Golden Beige bottocino.webp",
    "./images/living-room/Botticino/Ivory Beige bottocino.webp",
    "./images/living-room/Botticino/Light Beige bottocino.webp",
    "./images/living-room/Botticino/Warm Sand Beige bottocino.webp"
  ],
  "colors": ["Cream", "Golden Beige", "Ivory Beige", "Light Beige", "Warm Sand Beige"],
  "colorsHex": {
    "Cream": "#fcf5e8",
    "Golden Beige": "#ebdcb9",
    "Ivory Beige": "#faf5eb",
    "Light Beige": "#f2e7d3",
    "Warm Sand Beige": "#e2d3be"
  },
  "colorImages": {
    "Cream": "./images/living-room/Botticino/Light Beige bottocino.webp",
    "Golden Beige": "./images/living-room/Botticino/Ivory Beige bottocino.webp",
    "Ivory Beige": "./images/living-room/Botticino/Golden Beige bottocino.webp",
    "Light Beige": "./images/living-room/Botticino/Cream bottocino.webp",
    "Warm Sand Beige":   "./images/living-room/Botticino/Warm Sand Beige bottocino.webp"
  },
  "finishImages": {
    "Polished": "./images/living-room/Botticino/Botticino.webp"
  },
  "sizeImages": {
    "600×1200": "./images/living-room/Botticino/Botticino.webp",
    "800×1600": "./images/living-room/Botticino/Botticino.webp"
  },
  "texture": "Marble",
  "finish": ["Polished"],
  "sizes": ["600×1200", "800×1600"],
  "surface": ["High-Gloss Polished", "Scratch Resistant"],
  "features": [
    {
      "icon": "fa-solid fa-gem",
      "title": "Classic Botticino Texture",
      "desc": "Intricate, fine-veined details replicate the classic Italian stone with exceptional visual depth."
    },
    {
      "icon": "fa-solid fa-wand-magic-sparkles",
      "title": "Mirror Polished Gloss",
      "desc": "A gleaming, reflective finish that enhances interior lighting and lends an air of spacious luxury."
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Scratch Resistant",
      "desc": "Hard-wearing polished surface robustly defends against furniture markings and everyday foot traffic."
    }
  ],
  "tech": {
    "Material": "Porcelain",
    "Origin": "Spain",
    "MOHs": "6",
    "WaterAbsorption": "<0.5%",
    "SurfaceFinish": "Polished",
    "Thickness": "10 mm",
    "Rectified": "Yes"
  }
},
 {
  "id": 8,
  "title": "Tuscan Travertine",
  "tag": "TUSCAN TRAVERTINE",
  "description": "Natural stone-look tiles with warm beige tones and characteristic travertine pitting. Brings the romance of Italian architecture into your living room.",
  "colours": 5,
  "finishes": 2,
  "image": "./images/living-room/travertine/Travertine.webp",
  "badge": "Travertine",
  "thumbImages": [
    "./images/living-room/travertine/Classic Travertine.webp",
    "./images/living-room/travertine/Crema Travertine.webp",
    "./images/living-room/travertine/Ivory Travertine.webp",
    "./images/living-room/travertine/Pearl Travertine.webp",
    "./images/living-room/travertine/Tuscany Beige.webp"
  ],
  "colors": ["Classic Travertine", "Crema Travertine", "Ivory Travertine", "Pearl Travertine", "Tuscany Beige"],
  "colorsHex": { 
    "Classic Travertine": "#e5d1b5", 
    "Crema Travertine": "#ebd9c3", 
    "Ivory Travertine": "#f3ebd9", 
    "Pearl Travertine": "#dfdad2", 
    "Tuscany Beige": "#d9c3a3" 
  },
  "colorImages": {
    "Classic Travertine": "./images/living-room/travertine/Classic Travertine.webp",
    "Crema Travertine": "./images/living-room/travertine/Crema Travertine.webp",
    "Ivory Travertine": "./images/living-room/travertine/Ivory Travertine.webp",
    "Pearl Travertine": "./images/living-room/travertine/Pearl Travertine.webp",
    "Tuscany Beige": "./images/living-room/travertine/Tuscany Beige.webp"
  },
  "finishImages": {
    "Polished": "./images/living-room/travertine/Travertine.webp",
    "Matt": "./images/living-room/travertine/Classic Travertine.webp"
  },
  "sizeImages": {
    "600×600": "./images/living-room/travertine/Travertine.webp",
    "800×800": "./images/living-room/travertine/Travertine.webp"
  },
  "texture": "Travertine",
  "finish": ["Polished", "Matt"],
  "sizes": ["600×600", "800×800"],
  "surface": ["Stain Resistant", "POSH+"],
  "features": [
    {
      "icon": "fa-solid fa-mountain",
      "title": "Travertine Texture",
      "desc": "Unique natural pitting and veining replicated with high fidelity."
    },
    {
      "icon": "fa-solid fa-sun",
      "title": "Warm Palette",
      "desc": "Golden-beige tones create a welcoming Mediterranean atmosphere."
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Stain Resistant",
      "desc": "Sealed surface keeps the warm tones pristine for years."
    }
  ],
  "tech": {
    "Material": "Porcelain",
    "Origin": "Turkey",
    "MOHs": "6",
    "WaterAbsorption": "<0.5%",
    "SurfaceFinish": "Polished / Matt",
    "Thickness": "10 mm",
    "Rectified": "Yes"
  }
},
 {
  id: 9,
  title: "Catania Marble",
  tag: "CATANIA MARBLE",
  description:
    "An exquisite marble-effect porcelain collection featuring dramatic, luxurious veining and a high-gloss finish that elevates any contemporary living space.",
  colours: 5,
  finishes: 1,
  image: "./images/living-room/Catania/catania.webp",
  badge: "Marble",
  thumbImages: [
    "./images/living-room/Catania/Catania white.webp",
    "./images/living-room/Catania/Catania Beige.webp",
    "./images/living-room/Catania/Smoky Grey Catania.webp",
    "./images/living-room/Catania/Silver Grey Catania.webp",
    "./images/living-room/Catania/Light Grey Catania.webp",
  ],
  colors: ["White", "Beige", "Smoky Grey", "Silver Grey", "Light Grey"],
  colorsHex: { 
    White: "#f5f5f5", 
    Beige: "#eadecc", 
    "Smoky Grey": "#dcdad5", 
    "Silver Grey": "#cecac3", 
    "Light Grey": "#d3d3d3" 
  },
  colorImages: {
    White: "./images/living-room/Catania/Catania white.webp",
    Beige: "./images/living-room/Catania/Catania Beige.webp",
    "Smoky Grey": "./images/living-room/Catania/Smoky Grey Catania.webp",
    "Silver Grey": "./images/living-room/Catania/Silver Grey Catania.webp",
    "Light Grey": "./images/living-room/Catania/Light Grey Catania.webp",
  },
  finishImages: { Glossy: "./images/living-room/Catania/catania.webp" },
  sizeImages: {
    "600×1200": "./images/living-room/Catania/catania.webp",
    "800×1600": "./images/living-room/Catania/catania.webp",
  },
  texture: "Marble",
  finish: ["Glossy"],
  sizes: ["600×1200", "800×1600"], // Rectangular sizes typically suit large-format marble veining better
  surface: ["High-Gloss", "Scratch Resistant", "Easy Clean"],
  features: [
    {
      icon: "fa-solid fa-gem",
      title: "Luxurious Veining",
      desc: "Distinctive, high-fidelity marble veining for a seamless, opulent look.",
    },
    {
      icon: "fa-solid fa-sparkles",
      title: "High-Gloss Finish",
      desc: "A beautifully polished surface that reflects light to make spaces feel larger.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Durable Porcelain",
      desc: "The timeless beauty of natural marble without the hassle of sealing or staining.",
    },
  ],
  tech: {
    Material: "Porcelain",
    Origin: "Italy",
    MOHs: "6", // Typical for polished porcelain
    WaterAbsorption: "<0.05%",
    SurfaceFinish: "Glossy/Polished",
    Thickness: "9 mm",
    Rectified: "Yes",
  }
  },
  {
    id: 10,
    title: "Caspian Marble Series",
    tag: "CASPIAN SERIES",
    description:
      "A luxurious collection of large-format porcelain tiles inspired by natural stone and marble. Featuring deep veining and soft granular textures, this series brings timeless elegance and sophisticated scale to modern living room floors.",
    colours: 5,
    finishes: 1,
    image: "./images/living-room/caspian/Caspian.webp",
    badge: "Premium Stone",
    thumbImages: [
      "./images/living-room/caspian/CASPIAN BEIGE.webp", // Converted from .jpg to .webp
      "./images/living-room/caspian/caspian-black.webp",
      "./images/living-room/caspian/CASPIAN CREMA.webp",
      "./images/living-room/caspian/caspian-sea.webp",
      "./images/living-room/caspian/caspian-desert.webp",
    ],
    colors: ["Beige", "Black", "Crema", "Sea", "Desert"],
    colorsHex: { 
      Beige: "#9c8e7f", 
      Black: "#212123", 
      Crema: "#dcd1be", 
      Sea: "#dedddc", 
      Desert: "#e6dac4" 
    },
    colorImages: {
      Beige: "./images/living-room/caspian/CASPIAN BEIGE.webp", // Converted to .webp
      Black: "./images/living-room/caspian/caspian-black.webp",
      Crema: "./images/living-room/caspian/CASPIAN CREMA.webp",
      Sea: "./images/living-room/caspian/caspian-sea.webp",
      Desert: "./images/living-room/caspian/caspian-desert.webp",
    },
    finishImages: { "POSH+": "./images/living-room/caspian/Caspian.webp" },
    sizeImages: {
      "600×1200": "./images/living-room/caspian/Caspian.webp",
      "800×1600": "./images/living-room/caspian/Caspian.webp",
    },
    texture: "Marble / Granular Stone",
    finish: ["Polished"],
    sizes: ["600×1200", "800×1600"],
    surface: ["POSH+"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Natural Veining",
        desc: "High-definition digital printing captures the authentic, organic veining of rare marble.",
      },
      {
        icon: "fa-solid fa-expand",
        title: "Seamless Grandeur",
        desc: "Large-format dimensions minimize grout lines for a continuous, spacious stone look.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain & Scratch Resistant",
        desc: "Advanced vitrified surface protection keeps your polished floor pristine over time.",
      },
    ],
    tech: {
      Material: "Glazed Vitrified / Porcelain",
      Origin: "India",
      MOHs: "6 - 7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Polished High-Gloss (POSH+)",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
 {
  "id": 11,
  "title": "Limestone Harmony",
  "tag": "LIMESTONE HARMONY",
  "description": "Natural limestone-look tiles with soft texture and subtle tonal variation. A calm, refined choice that suits both traditional and contemporary living rooms.",
  "colours": 4,
  "finishes": 2,
  "image": "./images/living-room/Harmony/Limestone Harmony.webp",
  "badge": "Limestone",
  "thumbImages": [
    "./images/living-room/Harmony/Cream Harmony.webp",
    "./images/living-room/Harmony/Tuscany Beige.webp",
    "./images/living-room/Harmony/Sand Harmony.webp",
    "./images/living-room/Harmony/Light Grey Harmony.webp"
  ],
  "colors": ["Cream Harmony", "Tuscany Beige", "Sand Harmony", "Light Grey Harmony"],
  "colorsHex": { 
    "Cream Harmony": "#f4f1ea", 
    "Tuscany Beige": "#ebd9be", 
    "Sand Harmony": "#cca585", 
    "Light Grey Harmony": "#8b8d8e" 
  },
  "colorImages": {
    "Cream Harmony": "./images/living-room/Harmony/Cream Harmony.webp",
    "Tuscany Beige": "./images/living-room/Harmony/Tuscany Beige.webp",
    "Sand Harmony": "./images/living-room/Harmony/Sand Harmony.webp",
    "Light Grey Harmony": "./images/living-room/Harmony/Light Grey Harmony.webp"
  },
  "finishImages": {
    "Matt": "./images/living-room/Harmony/Cream Harmony.webp",
    "Satin": "./images/living-room/Harmony/Tuscany Beige_2.webp"
  },
  "sizeImages": {
    "600×600": "./images/living-room/Harmony/Cream Harmony.webp",
    "600×1200": "./images/living-room/Harmony/Cream Harmony.webp"
  },
  "texture": "Limestone",
  "finish": ["Matt", "Satin"],
  "sizes": ["600×600", "600×1200"],
  "surface": ["Stain Resistant", "Scratch Resistant"],
  "features": [
    {
      "icon": "fa-solid fa-mountain",
      "title": "Limestone Texture",
      "desc": "Subtle natural surface variation delivers calm organic sophistication."
    },
    {
      "icon": "fa-solid fa-temperature-half",
      "title": "Thermal Stable",
      "desc": "Maintains structural integrity across all temperature conditions."
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Scratch Resistant",
      "desc": "Hard-fired surface resists everyday wear and furniture movement."
    }
  ],
  "tech": {
    "Material": "Porcelain",
    "Origin": "Portugal",
    "MOHs": "6",
    "WaterAbsorption": "<0.5%",
    "SurfaceFinish": "Matt / Satin",
    "Thickness": "9 mm",
    "Rectified": "Yes"
  }
}
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
