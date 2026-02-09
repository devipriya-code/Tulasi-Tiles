// Bathroom Wall Tiles Data
const tileData = [
  {
    id: 1,
    title: "Classic White Subway",
    description: "3x6 inch glossy ceramic subway tiles for timeless look",
    image: "./images/bathroom_wall_tile_img1.avif",
  },
  {
    id: 2,
    title: "Hexagonal Marble",
    description: "1-inch hexagon marble mosaic tiles with mesh backing",
    image: "./images/bathroom_wall_tile_img2.avif",
  },
  {
    id: 3,
    title: "Modern Gray Chevron",
    description: "Porcelain chevron pattern tiles in matte finish",
    image: "./images/bathroom_wall_tile_img3.avif",
  },
  {
    id: 4,
    title: "Beige Stone Effect",
    description: "Large format porcelain tiles with natural stone texture",
    image: "./images/bathroom_wall_tile_img5.avif",
  },
  {
    id: 5,
    title: "Blue Geometric",
    description: "Hand-painted ceramic tiles with intricate patterns",
    image: "./images/bathroom_wall_tile_img4.avif",
  },
  {
    id: 6,
    title: "Black Matte Brick",
    description: "Long rectangular matte black porcelain tiles",
    image: "./images/bathroom_wall_tile_img6.webp",
  },
  {
    id: 7,
    title: "Carrara Marble",
    description: "Premium marble herringbone mosaic with gray veins",
    image: "./images/bathroom_cover_img.avif",
  },
  {
    id: 8,
    title: "Sage Green Subway",
    description: "Soft green 3x6 inch ceramic tiles with beveled edges",
    image: "./images/bathroom_wall_tile_img7.jpg",
  },
  {
    id: 9,
    title: "Modern Terrazzo",
    description: "Porcelain tiles with contemporary terrazzo design",
    image: "./images/bathroom_wall_tile_img8.jpg",
  },
  {
    id: 10,
    title: "Fish Scale Mosaic",
    description: "Iridescent glass tiles in scalloped pattern",
    image: "./images/bathroom_wall_tile_img9.jpg",
  },
  {
    id: 11,
    title: "Concrete Effect",
    description: "12x24 inch porcelain tiles with urban concrete finish",
    image: "./images/bathroom_wall_tile_img10.jpg",
  },
  {
    id: 12,
    title: "Moroccan Zellige",
    description: "Handcrafted glazed terracotta tiles with slight variations",
    image: "./images/bathroom_wall_tile_img11.jpg",
  },
];

// Material data array
const materialData = [
  {
    icon: "🧱",
    title: "Ceramic",
    description:
      "Affordable, versatile, and available in endless colors and patterns.",
  },
  {
    icon: "✨",
    title: "Porcelain",
    description:
      "Denser and more durable than ceramic, excellent for high-moisture areas.",
  },
  {
    icon: "💎",
    title: "Natural Stone",
    description:
      "Luxurious options like marble, travertine, and slate with natural variations.",
  },
  {
    icon: "🔮",
    title: "Glass",
    description:
      "Creates a luminous, reflective surface in mosaic or larger formats.",
  },
];

// Function to create tile cards
function createTileCards() {
  const tilesContainer = document.getElementById("tiles-container");

  tileData.forEach((tile) => {
    const card = document.createElement("div");
    card.className = "card-overlay";
    card.innerHTML = `
            <img src="${tile.image}" alt="${tile.title}">
            <div class="overlay-content">
                <h3>${tile.title}</h3>
                <p>${tile.description}</p>
                <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
            </div>
        `;
    tilesContainer.appendChild(card);
  });
}

// Function to create material cards
function createMaterialCards() {
  const materialsGrid = document.querySelector(".materials-grid");

  materialData.forEach((material) => {
    const card = document.createElement("div");
    card.className = "material-card";
    card.innerHTML = `
            <div class="material-icon">${material.icon}</div>
            <h3>${material.title}</h3>
            <p>${material.description}</p>
        `;
    materialsGrid.appendChild(card);
  });
  // Add the gradient card
//   const gradientCard = document.createElement("div");
//   gradientCard.className = "container gradient-card";
//   gradientCard.innerHTML = `
//   <div>
//     <h3>Need Help Choosing?</h3>
//     <p>
//       Our tile experts can help you select the perfect material for your
//       bathroom project.
//     </p>
//   </div>
//   <a href="./contact.html" class="btn">Contact us</a>
// `;

//   materialsGrid.appendChild(gradientCard);
 }

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createTileCards();
  createMaterialCards();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add hover effects to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });
});
