// Living Room Tiles Data
const livingRoomTiles = [
  {
    img: "./images/living_room_img1.avif",
    alt: "Carrara Elegance",
    title: "Carrara Elegance",
    desc: "Ceramic tiles with realistic wood grain texture",
    link: "carrara.html" // Added specific link for Carrara
  },
  {
    img: "./images/living_room_img2.avif",
    alt: "Oak Haven",
    title: "Oak Haven",
    desc: "Contemporary hexagonal tiles with modern geometric design",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img3.jpg",
    alt: "GeoChic",
    title: "GeoChice",
    desc: "Premium white marble with subtle gray veining for timeless luxury",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img4.avif",
    alt: "Slate Horizon",
    title: "Slate Horizon",
    desc: "Natural slate texture tiles with rich color variations",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img5.jpg",
    alt: "Modern Terrazzo",
    title: "Modern Terrazzo",
    desc: "Chic composite tiles with decorative stone chips",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img6.avif",
    alt: "Herringbone Classic",
    title: "Herringbone Classic",
    desc: "Traditional herringbone pattern in warm wood tones",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img7.jpg",
    alt: "Urban Concrete",
    title: "Urban Concrete",
    desc: "Industrial-chic concrete effect tiles with smooth finish",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img8.jpg",
    alt: "Chevron Luxe",
    title: "Chevron Luxe",
    desc: "Elegant chevron pattern in premium walnut finish",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img9.jpg",
    alt: "Tuscan Travertine",
    title: "Tuscan Travertine",
    desc: "Natural stone-look tiles with warm beige tones",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img10.avif",
    alt: "French Parquet",
    title: "French Parquet",
    desc: "Traditional parquet design with rich mahogany tones",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img11.jpg",
    alt: "Artisan Mosaic",
    title: "Artisan Mosaic",
    desc: "Handcrafted mosaic tiles with intricate patterns",
    link: "tilesdetail.html"
  },
  {
    img: "./images/living_room_img12.jpg",
    alt: "Limestone Harmony",
    title: "Limestone Harmony",
    desc: "Natural limestone-look tiles with soft texture",
    link: "tilesdetail.html"
  },
];

// Material data
const materialData = [
  {
    icon: "fa-solid fa-th-large",
    title: "Ceramic",
    desc: "Affordable, versatile, and available in endless colors and patterns.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Porcelain",
    desc: "Denser and more durable than ceramic, excellent for high-moisture areas.",
  },
  {
    icon: "fa-solid fa-mountain",
    title: "Natural Stone",
    desc: "Luxurious options like marble, travertine, and slate with natural variations.",
  },
  {
    icon: "fa-regular fa-square",
    title: "Glass",
    desc: "Creates a luminous, reflective surface in mosaic or larger formats.",
  },
];

// Function to create tile cards
function createLivingRoomTileCards() {
  const container = document.querySelector(".cards-grid");
  container.innerHTML = ""; // Clear existing content

  livingRoomTiles.forEach((tile) => {
    const card = document.createElement("div");
    card.className = "card-overlay";
    card.innerHTML = `
        <img src="${tile.img}" alt="${tile.alt}">
        <div class="overlay-content">
          <h3>${tile.title}</h3>
          <p>${tile.desc}</p>
        
          <button onclick="window.location.href='${tile.link}'" class="btn btn-view-more">View More</button>
        </div>
      `;
    container.appendChild(card);
  });
}

// Function to create material cards
function createMaterialCards() {
  const container = document.querySelector(".materials-grid");
  container.innerHTML = ""; // Clear existing content

  materialData.forEach((material) => {
    const card = document.createElement("div");
    card.className = "material-card";
    card.innerHTML = `
       <div class="material-icon">
    <i class="${material.icon}"></i>
  </div>
        <h3>${material.title}</h3>
        <p>${material.desc}</p>
      `;
    container.appendChild(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createLivingRoomTileCards();
  createMaterialCards();

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