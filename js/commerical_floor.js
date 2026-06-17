const TILES = [
  {
    id: 0,
    title: "Imperial Marble",
    tag: "IMPERIAL MARBLE",
    description:
      "Majestic white marble porcelain tiles with sweeping grey veins and a luminous polished surface. A timeless symbol of prestige crafted for hotel lobbies, corporate headquarters, and luxury retail atriums where only the highest standard of elegance will do. Each slab captures the drama of natural Italian marble, reproduced in rectified porcelain for flawless large-format installation.",
    colours: 3,
    finishes: 2,
    image: "./images/commercial/imperial Marble/img1.jpg",
    gallery: [
      "./images/commercial/imperial Marble/img2.jpg",
      "./images/commercial/imperial Marble/img5.jpg",
      "./images/commercial/imperial Marble/img3.jpg",
      "./images/commercial/imperial Marble/img4.jpg",
    ],
    badge: "Imperial Marble",
    colors: ["Ivory", "Sand", "Cream"],
    colorsHex: { Ivory: "#E8E6E1", Sand: "#D4C4A8", Cream: "#F1ECDC" },
    colorImages: {
      Ivory: "./images/commercial/imperial Marble/img2.jpg",
      Sand: "./images/commercial/imperial Marble/img5.jpg",
      Cream: "./images/commercial/imperial Marble/img4.jpg",
    },
    finishImages: {
      Polished: "./images/commercial/imperial Marble/img1.jpg",
      Satin: "./images/commercial/imperial Marble/img6.jpg",
    },
    sizeImages: {
      "600×600": "./images/commercial/imperial Marble/img3.jpg",
      "1200×1200": "./images/commercial/imperial Marble/img2.jpg",
    },
    texture: "Stone",
    finish: ["Polished", "Satin"],
    sizes: ["600×600", "1200×1200"],
    surface: ["Heavy Duty", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Marble Grandeur",
        desc: "Authentic sweeping vein patterns digitally reproduced from the finest Italian marble quarries.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Factory nano-coating repels oils, liquids and everyday commercial grime effortlessly.",
      },
      {
        icon: "fa-solid fa-star",
        title: "Polished Finish",
        desc: "High-gloss polish amplifies depth and luminosity across large-format rectified slabs.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "11 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 1,
    title: "Royal Carrara",
    tag: "ROYAL CARRARA",
    description:
      "Inspired by the legendary quarries of Tuscany, Royal Carrara captures the cool white elegance and fine grey veining of authentic Carrara marble. Precision-engineered in full-body porcelain, each tile delivers consistent colour through to the core — ideal for executive offices, luxury spas, and upscale commercial interiors seeking enduring sophistication without the fragility of natural stone.",
    colours: 2,
    finishes: 2,
    image: "./images/commercial/Royal Carrara/img1.jpg",
    gallery: [
      "./images/commercial/Royal Carrara/img2.jpg",
      "./images/commercial/Royal Carrara/img3.jpg",
      "./images/commercial/Royal Carrara/img4.jpg",
      "./images/commercial/Royal Carrara/img5.jpg",
    ],
    badge: "Royal Carrara",
    colors: ["Ivory", "Cream"],
    colorsHex: { Ivory: "#C8C8C8", Cream: "#DDDBDB" },
    colorImages: {
      Ivory: "./images/commercial/Royal Carrara/img3.jpg",
      Cream: "./images/commercial/Royal Carrara/img4.jpg",
    },
    finishImages: {
      Polished: "./images/commercial/Royal Carrara/img1.jpg",
      Satin: "./images/commercial/Royal Carrara/img4.jpg",
    },
    sizeImages: {
      "600×1200": "./images/commercial/Royal Carrara/img3.jpg",
      "1200×1200": "./images/commercial/Royal Carrara/img2.jpg",
    },
    texture: "Stone",
    finish: ["Polished", "Satin"],
    sizes: ["600×1200", "1200×1200"],
    surface: ["Heavy Duty", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-crown",
        title: "Carrara Authenticity",
        desc: "Faithfully reproduces the cool white and grey veining of Tuscany's finest marble quarries.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Commercial-grade surface treatment provides lasting protection against spills and staining.",
      },
      {
        icon: "fa-solid fa-ruler-combined",
        title: "Large Format",
        desc: "Available in 1200×1200 for dramatic seamless flooring with minimal grout lines.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "11 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 2,
    title: "Prestige Granite",
    tag: "PRESTIGE GRANITE",
    description:
      "Bold granite-effect porcelain tiles with rich speckled texture and natural mineral crystalline patterns. Engineered for the most demanding commercial environments — from airport concourses to multi-storey retail spaces — where raw durability and refined aesthetics are equally essential. The dense porcelain body delivers MOHs 8 hardness, ensuring lasting performance underfoot.",
    colours: 2,
    finishes: 1,
    image: "./images/commercial/Prestige Granite/img1.jpg",
    gallery: [
      "./images/commercial/Prestige Granite/img2.jpg",
      "./images/commercial/Prestige Granite/img3.jpg",
      "./images/commercial/Prestige Granite/img4.jpg",
      "./images/commercial/Prestige Granite/img5.jpg",
    ],
    badge: "Prestige Granite",
    colors: ["Graphite", "Charcoal"],
    colorsHex: { Graphite: "#c0bbbb", Charcoal: "#6a6666" },
    colorImages: {
      Graphite: "./images/commercial/Prestige Granite/img2.jpg",
      Charcoal: "./images/commercial/Prestige Granite/img4.jpg",
    },
    finishImages: {
      Matt: "./images/commercial/Prestige Granite/img4.jpg",
    },
    sizeImages: {
      "600×600": "./images/commercial/Prestige Granite/img5.jpg",
      "800×800": "./images/commercial/Prestige Granite/img1.jpg",
    },
    texture: "Stone",
    finish: ["Matt"],
    sizes: ["600×600", "800×800"],
    surface: ["Anti-Skid", "Heavy Duty"],
    features: [
      {
        icon: "fa-solid fa-mountain",
        title: "Granite Texture",
        desc: "Authentic mineral speckle and crystalline detail delivering a true natural granite appearance.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Matte surface provides commercial-grade grip in high-footfall areas and wet zones.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Heavy Duty",
        desc: "Reinforced porcelain body rated MOHs 8 for maximum commercial traffic and heavy loads.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "8",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 3,
    title: "Elite Travertine",
    tag: "ELITE TRAVERTINE",
    description:
      "Warm travertine porcelain tiles with characteristic pitted texture and natural fossil-like surface markings, faithfully capturing the ancient beauty of Roman architecture. Brings timeless warmth to contemporary commercial spaces — boutique restaurants, heritage hotels, cultural venues and resort lobbies — with the practical performance of modern porcelain engineering.",
    colours: 2,
    finishes: 2,
    image: "./images/commercial/Elite Travertine/img1.jpg",
    gallery: [
      "./images/commercial/Elite Travertine/img3.jpg",
      "./images/commercial/Elite Travertine/img2.jpg",
      "./images/commercial/Elite Travertine/img4.jpg",
      "./images/commercial/Elite Travertine/img5.jpg",
    ],
    badge: "Elite Travertine",
    colors: ["Sand", "Cream"],
    colorsHex: { Sand: "#ead7b1", Cream: "#f8ead0" },
    colorImages: {
      Sand: "./images/commercial/Elite Travertine/img5.jpg",
      Cream: "./images/commercial/Elite Travertine/img3.jpg",
    },
    finishImages: {
      Rustic: "./images/commercial/Elite Travertine/img5.jpg",
      Matt: "./images/commercial/Elite Travertine/img4.jpg",
    },
    sizeImages: {
      "600×600": "./images/commercial/Elite Travertine/img4.jpg",
      "600×1200": "./images/commercial/Elite Travertine/img3.jpg",
    },
    texture: "Stone",
    finish: ["Rustic", "Matt"],
    sizes: ["600×600", "600×1200"],
    surface: ["Anti-Skid", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-landmark",
        title: "Travertine Character",
        desc: "Characteristic pitting and fossil markings faithfully capture the essence of natural travertine.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Water Resistant",
        desc: "Sealed surface withstands commercial moisture exposure and intensive cleaning routines.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Rustic texture ensures safe non-slip performance across all public commercial spaces.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Turkey",
      MOHs: "6",
      WaterAbsorption: "<1%",
      SurfaceFinish: "Rustic / Matt",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 4,
    title: "Platinum Concrete",
    tag: "PLATINUM CONCRETE",
    description:
      "Sophisticated concrete-effect porcelain tiles with a refined industrial finish and subtle tonal surface variation. The definitive choice for contemporary commercial interiors — co-working studios, design agencies, modern retail flagships and urban hospitality — where deliberate minimalism commands visual authority. Available in Ash and Graphite for complementary or contrasting design schemes.",
    colours: 2,
    finishes: 2,
    image: "./images/commercial/Platinum Concrete/img1.jpg",
    gallery: [
      "./images/commercial/Platinum Concrete/img2.jpg",
      "./images/commercial/Platinum Concrete/img3.jpg",
      "./images/commercial/Platinum Concrete/img4.jpg",
      "./images/commercial/Platinum Concrete/img5.jpg",
    ],
    badge: "Platinum Concrete",
    colors: ["Ash", "Graphite"],
    colorsHex: { Ash: "#e8e7e6", Graphite: "#D0BFAE" },
    colorImages: {
      Ash: "./images/commercial/Platinum Concrete/img2.jpg",
      Graphite: "./images/commercial/Platinum Concrete/img4.jpg",
    },
    finishImages: {
      Matt: "./images/commercial/Platinum Concrete/img2.jpg",
      Satin: "./images/commercial/Platinum Concrete/img3.jpg",
    },
    sizeImages: {
      "800×800": "./images/commercial/Platinum Concrete/img4.jpg",
      "1200×1200": "./images/commercial/Platinum Concrete/img5.jpg",
    },
    texture: "Concrete",
    finish: ["Matt", "Satin"],
    sizes: ["800×800", "1200×1200"],
    surface: ["Anti-Skid", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-city",
        title: "Urban Industrial",
        desc: "Smooth concrete effect with subtle surface variation for a refined industrial aesthetic.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Protective nano-coating prevents discolouration in the busiest commercial settings.",
      },
      {
        icon: "fa-solid fa-expand",
        title: "Large Format",
        desc: "Available up to 1200×1200 for seamless open-plan commercial installations.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Matt / Satin",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 5,
    title: "Titanium Stone",
    tag: "TITANIUM STONE",
    description:
      "Dark titanium-toned stone-effect porcelain tiles with dramatic layered surface texture and metallic mineral undertones that shift under commercial lighting. Engineered for high-impact commercial environments — flagship boardrooms, luxury hotel bars, and premium retail showrooms — where bold design presence and exceptional structural durability are both non-negotiable requirements.",
    colours: 2,
    finishes: 2,
    image: "./images/commercial/Titanium Stone/img1.jpg",
    gallery: [
      "./images/commercial/Titanium Stone/img2.jpg",
      "./images/commercial/Titanium Stone/img3.jpg",
      "./images/commercial/Titanium Stone/img4.jpg",
      "./images/commercial/Titanium Stone/img5.jpg",
    ],
    badge: "Titanium Stone",
    colors: ["Graphite", "Charcoal"],
    colorsHex: { Graphite: "#E8E6E1", Charcoal: "#B8B3AC" },
    colorImages: {
      Graphite: "./images/commercial/Titanium Stone/img2.jpg",
      Charcoal: "./images/commercial/Titanium Stone/img3.jpg",
    },
    finishImages: {
      Satin: "./images/commercial/Titanium Stone/img1.jpg",
      Polished: "./images/commercial/Titanium Stone/img3.jpg",
    },
    sizeImages: {
      "600×1200": "./images/commercial/Titanium Stone/img2.jpg",
      "800×800": "./images/commercial/Titanium Stone/img5.jpg",
    },
    texture: "Stone",
    finish: ["Satin", "Polished"],
    sizes: ["600×1200", "800×800"],
    surface: ["Heavy Duty", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-meteor",
        title: "Metallic Undertones",
        desc: "Unique titanium mineral effect with shimmering depth that evolves under commercial lighting.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Heavy Duty",
        desc: "Maximum-rated commercial porcelain body for intense foot traffic and heavy structural loads.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Polished Option",
        desc: "High-gloss polished finish enhances the dramatic dark surface with exceptional reflectivity.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "8",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Satin / Polished",
      Thickness: "11 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 6,
    title: "Urban Slate",
    tag: "URBAN SLATE",
    description:
      "Authentic slate-look ceramic tiles with layered cleft texture and rich tonal variation spanning grey, blue-grey and deep charcoal hues. Ideal for contemporary commercial settings — urban restaurants, creative offices, and public corridors — seeking an earthy, textured floor with outstanding slip resistance that stands up to the most demanding daily foot traffic.",
    colours: 2,
    finishes: 1,
    image: "./images/commercial/Urban Slate/img1.jpg",
    gallery: [
      "./images/commercial/Urban Slate/img2.jpg",
      "./images/commercial/Urban Slate/img3.jpg",
      "./images/commercial/Urban Slate/img4.jpg",
      "./images/commercial/Urban Slate/img5.jpg",
    ],
    badge: "Urban Slate",
    colors: ["Graphite", "Ash"],
    colorsHex: { Graphite: "#5A5650", Ash: "#B0A898" },
    colorImages: {
      Graphite: "./images/commercial/Urban Slate/img2.jpg",
      Ash: "./images/commercial/Urban Slate/img4.jpg",
    },
    finishImages: {
      Rustic: "./images/commercial/Urban Slate/img1.jpg",
    },
    sizeImages: {
      "600×600": "./images/commercial/Urban Slate/img3.jpg",
      "300×600": "./images/commercial/Urban Slate/img3.jpg",
    },
    texture: "Rustic",
    finish: ["Rustic"],
    sizes: ["600×600", "300×600"],
    surface: ["Anti-Skid", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-layer-group",
        title: "Cleft Slate Texture",
        desc: "Layered natural cleft surface faithfully replicates the appearance of authentic split slate.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Textured rustic surface provides excellent certified slip resistance in commercial corridors.",
      },
      {
        icon: "fa-solid fa-droplet-slash",
        title: "Water Resistant",
        desc: "Sealed surface reliably repels moisture in high-footfall commercial environments.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Rustic",
      Thickness: "9 mm",
      Rectified: "No",
    },
  },
  {
    id: 7,
    title: "Golden Onyx",
    tag: "GOLDEN ONYX",
    description:
      "Breathtaking golden onyx porcelain tiles with translucent amber veining and warm layered honey tones that glow radiantly under premium commercial lighting. A definitive luxury statement reserved for the most prestigious commercial projects — five-star hotel suites, flagship boutiques, VIP lounges and penthouse lobbies where nothing less than extraordinary will suffice.",
    colours: 1,
    finishes: 2,
    image: "./images/commercial/Golden Onyx/img1.jpg",
    gallery: [
      "./images/commercial/Golden Onyx/img2.jpg",
      "./images/commercial/Golden Onyx/img3.jpg",
      "./images/commercial/Golden Onyx/img4.jpg",
      "./images/commercial/Golden Onyx/img5.jpg",
    ],
    badge: "Golden Onyx",
    colors: ["Oak"],
    colorsHex: { Oak: "#E8E6E1" },
    colorImages: {
      Oak: "./images/commercial/Golden Onyx/img3.jpg",
    },
    finishImages: {
      Polished: "./images/commercial/Golden Onyx/img2.jpg",
      Satin: "./images/commercial/Golden Onyx/img4.jpg",
    },
    sizeImages: {
      "600×1200": "./images/commercial/Golden Onyx/img3.jpg",
      "800×800": "./images/commercial/Golden Onyx/img5.jpg",
    },
    texture: "Stone",
    finish: ["Polished", "Satin"],
    sizes: ["600×1200", "800×800"],
    surface: ["Heavy Duty", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-sun",
        title: "Golden Radiance",
        desc: "Warm amber and honey tones with translucent layered depth that glows under commercial lighting.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Luxury Veining",
        desc: "Intricate onyx vein detail creates an utterly unique statement floor in every installation.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Commercial nano-coating preserves the luxurious golden surface from everyday commercial wear.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "11 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 8,
    title: "Majestic Terrazzo",
    tag: "MAJESTIC TERRAZZO",
    description:
      "Vibrant terrazzo-effect porcelain tiles featuring embedded marble chip patterns set against a smooth polished base in three carefully curated colourways. A bold, design-forward choice that celebrates colour and artisan craft — ideal for boutique hotels, creative hospitality environments, rooftop bars and modern retail spaces making a fearless design statement.",
    colours: 3,
    finishes: 1,
    image: "./images/commercial/Majestic Terrazzo/img1.jpg",
    gallery: [
      "./images/commercial/Majestic Terrazzo/img2.jpg",
      "./images/commercial/Majestic Terrazzo/img3.jpg",
      "./images/commercial/Majestic Terrazzo/img4.jpg",
      "./images/commercial/Majestic Terrazzo/img5.jpg",
    ],
    badge: "Majestic Terrazzo",
    colors: ["Ivory", "Sand", "Ash"],
    colorsHex: { Ivory: "E7E5E0", Sand: "#9b9ea0", Ash: "#4f4d4b" },
    colorImages: {
      Ivory: "./images/commercial/Majestic Terrazzo/img2.jpg",
      Sand: "./images/commercial/Majestic Terrazzo/img3.jpg",
      Ash: "./images/commercial/Majestic Terrazzo/img5.jpg",
    },
    finishImages: {
      Polished: "./images/commercial/Majestic Terrazzo/img1.jpg",
    },
    sizeImages: {
      "600×600": "./images/commercial/Majestic Terrazzo/img4.jpg",
      "800×800": "./images/commercial/Majestic Terrazzo/img2.jpg",
    },
    texture: "Stone",
    finish: ["Polished"],
    sizes: ["600×600", "800×800"],
    surface: ["Heavy Duty", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-palette",
        title: "Terrazzo Character",
        desc: "Authentic embedded marble chip patterns on a polished porcelain base for genuine terrazzo style.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Polished Surface",
        desc: "High-gloss finish highlights the colourful aggregate and chip patterns for a premium look.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Stain Resistant",
        desc: "Protected polished surface maintains terrazzo beauty even in busy commercial settings.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Spain",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Polished",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 9,
    title: "Diamond Pearl",
    tag: "DIAMOND PEARL",
    description:
      "Elegant pearl-white porcelain tiles featuring subtle crystalline textures, soft marble-inspired movement, and refined luxury aesthetics. Designed to enhance premium commercial and residential interiors with a bright, spacious appearance and timeless sophistication. Perfect for luxury showrooms, hotels, office lobbies, shopping malls, and contemporary living spaces where elegance and durability are equally important.",

    colours: 2,
    finishes: 2,

    image: "./images/commercial/Diamond Pearl/img1.jpg",

    gallery: [
      "./images/commercial/Diamond Pearl/img2.jpg",
      "./images/commercial/Diamond Pearl/img3.jpg",
      "./images/commercial/Diamond Pearl/img4.jpg",
      "./images/commercial/Diamond Pearl/img5.jpg",
    ],

    badge: "Diamond Pearl",

    colors: ["Pearl White", "Silver Mist"],

    colorsHex: {
      "Pearl White": "#F4F2EE",
      "Silver Mist": "#D8D8D8",
    },

    colorImages: {
      "Pearl White": "./images/commercial/Diamond Pearl/img2.jpg",
      "Silver Mist": "./images/commercial/Diamond Pearl/img4.jpg",
    },

    finishImages: {
      Polished: "./images/commercial/Diamond Pearl/img1.jpg",
      Satin: "./images/commercial/Diamond Pearl/img3.jpg",
    },

    sizeImages: {
      "600×1200": "./images/commercial/Diamond Pearl/img4.jpg",
      "800×1600": "./images/commercial/Diamond Pearl/img2.jpg",
    },

    texture: "Marble",

    finish: ["Polished", "Satin"],

    sizes: ["600×1200", "800×1600"],

    surface: ["Stain Resistant", "Easy Maintenance"],

    features: [
      {
        icon: "fa-solid fa-gem",
        title: "Pearl-Inspired Design",
        desc: "Luxurious pearl-white surface with subtle crystalline detailing and elegant movement.",
      },
      {
        icon: "fa-solid fa-sparkles",
        title: "Premium Gloss Finish",
        desc: "Reflective polished surface enhances brightness and creates a spacious premium look.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Durable & Easy Care",
        desc: "High-density porcelain construction resists stains, scratches, and daily wear.",
      },
    ],

    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "7",
      WaterAbsorption: "<0.5%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "10 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 10,
    title: "Regal Sandstone",
    tag: "REGAL SANDSTONE",
    description:
      "Earthy sandstone-effect ceramic tiles with gentle layered sediment patterns and warm tawny tones that evoke the natural grandeur of ancient desert landscapes. Brings organic elegance to commercial interiors — resort lobbies, spa retreats, alfresco dining terraces and wellness centres — seeking a grounded, biophilic aesthetic that connects occupants with the natural world.",
    colours: 2,
    finishes: 1,
    image: "./images/commercial/Regal Sandstone/img1.jpg",
    gallery: [
      "./images/commercial/Regal Sandstone/img2.jpg",
      "./images/commercial/Regal Sandstone/img3.jpg",
      "./images/commercial/Regal Sandstone/img4.jpg",
      "./images/commercial/Regal Sandstone/img5.jpg",
    ],
    badge: "Regal Sandstone",
    colors: ["Sand", "Cream"],
    colorsHex: { Sand: "#eed7af", Cream: "#E8DCC8" },
    colorImages: {
      Sand: "./images/commercial/Regal Sandstone/img4.jpg",
      Cream: "./images/commercial/Regal Sandstone/img2.jpg",
    },
    finishImages: {
      Rustic: "./images/commercial/Regal Sandstone/img1.jpg",
    },
    sizeImages: {
      "600×600": "./images/commercial/Regal Sandstone/img3.jpg",
      "600×1200": "./images/commercial/Regal Sandstone/img5.jpg",
    },
    texture: "Rustic",
    finish: ["Rustic"],
    sizes: ["600×600", "600×1200"],
    surface: ["Anti-Skid", "Water Resistant"],
    features: [
      {
        icon: "fa-solid fa-wind",
        title: "Sandstone Layers",
        desc: "Gentle sediment layering and warm tawny tones authentically evoke natural desert sandstone.",
      },
      {
        icon: "fa-solid fa-ban",
        title: "Anti-Skid",
        desc: "Rustic surface provides natural-feel grip in resort, hospitality and wellness spaces.",
      },
      {
        icon: "fa-solid fa-leaf",
        title: "Organic Aesthetic",
        desc: "Earthy palette integrates effortlessly with biophilic commercial design and natural material schemes.",
      },
    ],
    tech: {
      Material: "Ceramic",
      Origin: "India",
      MOHs: "6",
      WaterAbsorption: "<3%",
      SurfaceFinish: "Rustic",
      Thickness: "9 mm",
      Rectified: "Yes",
    },
  },
  {
    id: 11,
    title: "Signature Quartz",
    tag: "SIGNATURE QUARTZ",
    description:
      "Striking quartz-effect porcelain tiles with bold crystalline veining set against a deep charcoal base that catches and refracts light from every angle. The ultimate signature statement for the most exclusive commercial interiors — boardrooms, penthouse lobbies, five-star hospitality suites and luxury brand showrooms where extraordinary visual impact is the primary design brief.",
    colours: 1,
    finishes: 2,
    image: "./images/commercial/Signature Quartz/img1.jpg",
    gallery: [
      "./images/commercial/Signature Quartz/img2.jpg",
      "./images/commercial/Signature Quartz/img3.jpg",
      "./images/commercial/Signature Quartz/img4.jpg",
      "./images/commercial/Signature Quartz/img5.jpg",
    ],
    badge: "Signature Quartz",
    colors: ["Charcoal"],
    colorsHex: { Charcoal: "#2E2A26" },
    colorImages: {
      Charcoal: "./images/commercial/Signature Quartz/img5.jpg",
    },
    finishImages: {
      Polished: "./images/commercial/Signature Quartz/img2.jpg",
      Satin: "./images/commercial/Signature Quartz/img4.jpg",
    },
    sizeImages: {
      "800×800": "./images/commercial/Signature Quartz/img3.jpg",
      "1200×1200": "./images/commercial/Signature Quartz/img5.jpg",
    },
    texture: "Stone",
    finish: ["Polished", "Satin"],
    sizes: ["800×800", "1200×1200"],
    surface: ["Heavy Duty", "Stain Resistant"],
    features: [
      {
        icon: "fa-solid fa-bolt",
        title: "Crystalline Veining",
        desc: "Bold quartz crystal veining creates electrifying visual impact at large commercial format.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Heavy Duty",
        desc: "Reinforced commercial porcelain body rated MOHs 8 for maximum foot traffic and structural loads.",
      },
      {
        icon: "fa-solid fa-gem",
        title: "Polished Luxury",
        desc: "High-gloss polished finish delivers exceptional depth and reflective brilliance across the dark surface.",
      },
    ],
    tech: {
      Material: "Porcelain",
      Origin: "Italy",
      MOHs: "8",
      WaterAbsorption: "<0.1%",
      SurfaceFinish: "Polished / Satin",
      Thickness: "11 mm",
      Rectified: "Yes",
    },
  },
];

const FEATURED_IDS = [0, 3, 7, 11];
