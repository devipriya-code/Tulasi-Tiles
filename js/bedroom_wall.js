// Featured Collections data
const featuredCollections = [
  {
    imgSrc: "./images/bedroom_img1.jpg",
    alt: "Modern Gray Wood Plank",
    title: "Modern Gray Wood",
    description: "12x24 inch porcelain planks with realistic wood texture",
  },
  {
    imgSrc: "./images/bedroom_img2.jpg",
    alt: "Whitewashed Oak",
    title: "Whitewashed Oak",
    description: "Light distressed wood look tiles with matte finish",
  },
  {
    imgSrc: "./images/bedroom_img3.jpg",
    alt: "Rustic Hickory",
    title: "Rustic Hickory",
    description: "Textured ceramic tiles with deep wood grain patterns",
  },
  {
    imgSrc: "./images/bedroom_img4.jpg",
    alt: "Warm Cherry Wood",
    title: "Warm Cherry Wood",
    description: "Rich red-brown wood effect tiles with glossy finish",
  },
  {
    imgSrc: "./images/bedroom_img5.jpg",
    alt: "Driftwood Gray",
    title: "Driftwood Gray",
    description: "Weathered wood look tiles with soft gray tones",
  },
  {
    imgSrc: "./images/bedroom_img6.jpg",
    alt: "Herringbone White Oak",
    title: "Herringbone White Oak",
    description: "Patterned wood-look tiles in classic herringbone design",
  },
  {
    imgSrc: "./images/bedroom_img7.jpg",
    alt: "Reclaimed Barnwood",
    title: "Reclaimed Barnwood",
    description: "Authentic distressed wood effect ceramic tiles",
  },
  {
    imgSrc: "./images/bedroom_img8.jpg",
    alt: "Espresso Hardwood",
    title: "Espresso Hardwood",
    description: "Dark brown wood-look tiles with smooth finish",
  },
  {
    imgSrc: "./images/bedroom_img9.jpg",
    alt: "Scandinavian Pine",
    title: "Scandinavian Pine",
    description: "Light wood grain tiles with minimalistic appeal",
  },
  {
    imgSrc: "./images/bedroom_img10.jpg",
    alt: "Teak Wood Effect",
    title: "Teak Wood Effect",
    description: "Warm golden-brown tiles with natural wood variation",
  },
  {
    imgSrc: "./images/bedroom_img11.jpg",
    alt: "Smoked Walnut",
    title: "Smoked Walnut",
    description: "Deep charcoal wood-look tiles with subtle grain",
  },
  {
    imgSrc: "./images/bedroom_img12.jpg",
    alt: "Bamboo Texture",
    title: "Bamboo Texture",
    description: "Eco-friendly look tiles with bamboo-inspired pattern",
  },
];

// Materials data
const materialsData = [
  {
    icon: "fa-solid fa-border-all",
    title: "Ceramic",
    description:
      "Affordable, versatile, and available in endless colors and patterns.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Porcelain",
    description:
      "Denser and more durable than ceramic, excellent for high-moisture areas.",
  },
  {
    icon: "fa-solid fa-gem",
    title: "Natural Stone",
    description:
      "Luxurious options like marble, travertine, and slate with natural variations.",
  },
  {
    icon: "fa-solid fa-clone",
    title: "Glass",
    description:
      "Creates a luminous, reflective surface in mosaic or larger formats.",
  },
];

// Function to create featured collection cards
function createFeaturedCollections() {
  const cardsGrid = document.querySelector(".cards-grid");

  featuredCollections.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card-overlay";

    card.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.alt}">
        <div class="overlay-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          
          <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
        </div>
      `;

    cardsGrid.appendChild(card);
  });
}

// Function to create materials cards
function createMaterialsCards() {
  const materialsGrid = document.querySelector(".materials-grid");

  // Create regular material cards
  materialsData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "material-card";

    card.innerHTML = `
      <div class="material-icon">
  <i class="${item.icon}"></i>
</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;

    materialsGrid.appendChild(card);
  });

  // Create gradient card
  // const gradientCard = document.createElement("div");
  // gradientCard.className = "gradient-card";

  // gradientCard.innerHTML = `
  //     <div>
  //       <h3>Need Help Choosing?</h3>
  //       <p>Our tile experts can help you select the perfect material for your bedroom project.</p>
  //     </div>
  //     <a href="./contact.html" class="btn">Contact us</a>
  //   `;

  // materialsGrid.appendChild(gradientCard);
}

// Function to create CTA section
function createCTASection() {
  const ctaContent = document.querySelector(".cta-content");

  ctaContent.innerHTML = `
      <p>Visit our showroom to see our tile collections in person or schedule a free design consultation with our experts.</p>
      <a href="https://wa.me/919843069220?text=Hello%20I%20would%20like%20to%20book%20an%20appointment%20for%20sanitaryware"
      target="_blank" class="btn">Book Appointment</a> 
    `;
}

// Initialize all sections when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createFeaturedCollections();
  createMaterialsCards();
  createCTASection();
});
