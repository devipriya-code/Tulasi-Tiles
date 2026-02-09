// Living Room Tiles Data
const livingRoomTiles = [
  {
    img: "./images/living_room_img1.avif",
    alt: "Carrara Elegance",
    title: "Carrara Elegance",
    desc: "Ceramic tiles with realistic wood grain texture",
  },
  {
    img: "./images/living_room_img2.avif",
    alt: "Oak Haven",
    title: "Oak Haven",
    desc: "Contemporary hexagonal tiles with modern geometric design",
  },
  {
    img: "./images/living_room_img3.jpg",
    alt: "GeoChic",
    title: "GeoChice",
    desc: "Premium white marble with subtle gray veining for timeless luxury",
  },
  {
    img: "./images/living_room_img4.avif",
    alt: "Slate Horizon",
    title: "Slate Horizon",
    desc: "Natural slate texture tiles with rich color variations",
  },
  {
    img: "./images/living_room_img5.jpg",
    alt: "Modern Terrazzo",
    title: "Modern Terrazzo",
    desc: "Chic composite tiles with decorative stone chips",
  },
  {
    img: "./images/living_room_img6.avif",
    alt: "Herringbone Classic",
    title: "Herringbone Classic",
    desc: "Traditional herringbone pattern in warm wood tones",
  },
  {
    img: "./images/living_room_img7.jpg",
    alt: "Urban Concrete",
    title: "Urban Concrete",
    desc: "Industrial-chic concrete effect tiles with smooth finish",
  },
  {
    img: "./images/living_room_img8.jpg",
    alt: "Chevron Luxe",
    title: "Chevron Luxe",
    desc: "Elegant chevron pattern in premium walnut finish",
  },
  {
    img: "./images/living_room_img9.jpg",
    alt: "Tuscan Travertine",
    title: "Tuscan Travertine",
    desc: "Natural stone-look tiles with warm beige tones",
  },
  {
    img: "./images/living_room_img10.avif",
    alt: "French Parquet",
    title: "French Parquet",
    desc: "Traditional parquet design with rich mahogany tones",
  },
  {
    img: "./images/living_room_img11.jpg",
    alt: "Artisan Mosaic",
    title: "Artisan Mosaic",
    desc: "Handcrafted mosaic tiles with intricate patterns",
  },
  {
    img: "./images/living_room_img12.jpg",
    alt: "Limestone Harmony",
    title: "Limestone Harmony",
    desc: "Natural limestone-look tiles with soft texture",
  },
];

// Material data
const materialData = [
  {
    icon: "🧱",
    title: "Ceramic",
    desc: "Affordable, versatile, and available in endless colors and patterns.",
  },
  {
    icon: "✨",
    title: "Porcelain",
    desc: "Denser and more durable than ceramic, excellent for high-moisture areas.",
  },
  {
    icon: "💎",
    title: "Natural Stone",
    desc: "Luxurious options like marble, travertine, and slate with natural variations.",
  },
  {
    icon: "🔮",
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
        
          <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
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
        <div class="material-icon">${material.icon}</div>
        <h3>${material.title}</h3>
        <p>${material.desc}</p>
      `;
    container.appendChild(card);
  });

  // Add gradient card
  // const gradientCard = document.createElement("div");
  // gradientCard.className = "gradient-card";
  // gradientCard.innerHTML = `
  //     <div>
  //       <h3>Need Help Choosing Living Room?</h3>
  //       <p>Our tile experts can help you select the perfect material for your living room project.</p>
  //     </div>
  //     <a href="./contact.html" class="btn">Contact us</a>
  //   `;
  // container.appendChild(gradientCard);
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
