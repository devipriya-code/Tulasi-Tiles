// Outdoor Wall Tiles Data
const outdoorTiles = [
  {
    img: "./images/outdoor_wall_img1.jpg",
    alt: "Natural Slate Texture Tile",
    title: "SlateStone",
    desc: "Natural slate texture porcelain tiles with anti-slip surface",
  },
  {
    img: "./images/outdoor_img2.jpg",
    alt: "Wooden Deck Outdoor Tile",
    title: "TimberDeck",
    desc: "Wood-look porcelain tiles with enhanced durability for patios",
  },
  {
    img: "./images/outdoor_img3.jpg",
    alt: "Cobblestone Pattern Tile",
    title: "UrbanCobble",
    desc: "Modern cobblestone pattern tiles for rustic outdoor appeal",
  },
  {
    img: "./images/outdoor_img4.jpg",
    alt: "Large Format Stone Tile",
    title: "MegaStone",
    desc: "Extra-large format stone tiles for seamless outdoor Walling",
  },
  {
    img: "./images/outdoor_img5.jpg",
    alt: "Travertine Look Tile",
    title: "Travella",
    desc: "Travertine-look porcelain with natural color variations",
  },
  {
    img: "./images/outdoor_img6.jpg",
    alt: "Geometric Pattern Tile",
    title: "GeoForm",
    desc: "Contemporary geometric patterned outdoor tiles",
  },
  {
    img: "./images/outdoor_img7.jpg",
    alt: "Weathered Wood Tile",
    title: "Driftwood",
    desc: "Weathered wood-look tiles with authentic texture",
  },
  {
    img: "./images/outdoor_img8.jpg",
    alt: "Slate Gray Tile",
    title: "SlateGray",
    desc: "Premium gray slate tiles with natural cleft surface",
  },
  {
    img: "./images/outdoor_img9.jpg",
    alt: "Sandstone Tile",
    title: "SunsetSand",
    desc: "Warm sandstone-effect tiles with natural color blend",
  },
  {
    img: "./images/outdoor_img10.jpg",
    alt: "Modern Concrete Tile",
    title: "UrbanConcrete",
    desc: "Sleek concrete-look tiles for contemporary outdoor spaces",
  },
  {
    img: "./images/outdoor_img11.jpg",
    alt: "Terracotta Tile",
    title: "TerraClassic",
    desc: "Traditional terracotta tiles with modern durability",
  },
  {
    img: "./images/outdoor_img12.jpg",
    alt: "Mosaic Pattern Tile",
    title: "MosaicArt",
    desc: "Decorative mosaic tiles for artistic outdoor accents",
  },
];

// Material Data
const outdoorMaterials = [
  {
    icon: "✨",
    title: "Porcelain",
    desc: "Highly durable, frost-resistant, and low-maintenance for all climates.",
  },
  {
    icon: "💎",
    title: "Natural Stone",
    desc: "Authentic slate, granite, and limestone with natural slip resistance.",
  },
  {
    icon: "🏗️",
    title: "Concrete",
    desc: "Modern concrete-look tiles with enhanced weather resistance.",
  },
  {
    icon: "🧩",
    title: "Composite",
    desc: "Wood-plastic composite tiles that resist fading and moisture.",
  },
];

// Function to create tile cards
function createOutdoorTileCards() {
  const container = document.getElementById("tiles-container");

  outdoorTiles.forEach((tile) => {
    const card = document.createElement("div");
    card.className = "card-overlay";
    card.innerHTML = `
            <img src="${tile.img}" alt="${tile.alt}">
            <div class="overlay-content">
                <h3>${tile.title}</h3>
                <p>${tile.desc}</p>
                <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
            </div>
        `;
    container.appendChild(card);
  });
}

// Function to create material cards
function createOutdoorMaterialCards() {
  const container = document.getElementById("materials-container");

  outdoorMaterials.forEach((material) => {
    const card = document.createElement("div");
    card.className = "material-card";
    card.innerHTML = `
            <div class="material-icon">${material.icon}</div>
            <h3>${material.title}</h3>
            <p>${material.desc}</p>
        `;
    container.appendChild(card);
  });

  // Add gradient card
  const gradientCard = document.createElement("div");
  gradientCard.className = "gradient-card";
  gradientCard.innerHTML = `
        <div>
            <h3>Need Help Choosing?</h3>
            <p>Our outdoor tile experts can help you select the perfect material for your climate and design needs.</p>
        </div>
        <a href="./contact.html" class="btn">Contact us</a>
    `;
  container.appendChild(gradientCard);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createOutdoorTileCards();
  createOutdoorMaterialCards();

  // Add hover effects to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
