// Featured Collections data
const featuredCollections = [
    {
      imgSrc: "./images/bedroom_img1.jpg",
      alt: "Modern Gray Wood Plank",
      title: "Modern Gray Wood",
      description: "12x24 inch porcelain planks with realistic wood texture",
      price: "$12.99"
    },
    {
      imgSrc: "./images/bedroom_img2.jpg",
      alt: "Whitewashed Oak",
      title: "Whitewashed Oak",
      description: "Light distressed wood look tiles with matte finish",
      price: "$14.99"
    },
    {
      imgSrc: "./images/bedroom_img3.jpg",
      alt: "Rustic Hickory",
      title: "Rustic Hickory",
      description: "Textured ceramic tiles with deep wood grain patterns",
      price: "$13.49"
    },
    {
      imgSrc: "./images/bedroom_img4.jpg",
      alt: "Warm Cherry Wood",
      title: "Warm Cherry Wood",
      description: "Rich red-brown wood effect tiles with glossy finish",
      price: "$15.99"
    },
    {
      imgSrc: "./images/bedroom_img5.jpg",
      alt: "Driftwood Gray",
      title: "Driftwood Gray",
      description: "Weathered wood look tiles with soft gray tones",
      price: "$11.99"
    },
    {
      imgSrc: "./images/bedroom_img6.jpg",
      alt: "Herringbone White Oak",
      title: "Herringbone White Oak",
      description: "Patterned wood-look tiles in classic herringbone design",
      price: "$16.99"
    },
    {
      imgSrc: "./images/bedroom_img7.jpg",
      alt: "Reclaimed Barnwood",
      title: "Reclaimed Barnwood",
      description: "Authentic distressed wood effect ceramic tiles",
      price: "$14.49"
    },
    {
      imgSrc: "./images/bedroom_img8.jpg",
      alt: "Espresso Hardwood",
      title: "Espresso Hardwood",
      description: "Dark brown wood-look tiles with smooth finish",
      price: "$13.99"
    },
    {
      imgSrc: "./images/bedroom_img9.jpg",
      alt: "Scandinavian Pine",
      title: "Scandinavian Pine",
      description: "Light wood grain tiles with minimalistic appeal",
      price: "$12.49"
    },
    {
      imgSrc: "./images/bedroom_img10.jpg",
      alt: "Teak Wood Effect",
      title: "Teak Wood Effect",
      description: "Warm golden-brown tiles with natural wood variation",
      price: "$15.49"
    },
    {
      imgSrc: "./images/bedroom_img11.jpg",
      alt: "Smoked Walnut",
      title: "Smoked Walnut",
      description: "Deep charcoal wood-look tiles with subtle grain",
      price: "$14.99"
    },
    {
      imgSrc: "./images/bedroom_img12.jpg",
      alt: "Bamboo Texture",
      title: "Bamboo Texture",
      description: "Eco-friendly look tiles with bamboo-inspired pattern",
      price: "$13.99"
    }
  ];
  
  // Materials data
  const materialsData = [
    {
      icon: "🧱",
      title: "Ceramic",
      description: "Affordable, versatile, and available in endless colors and patterns."
    },
    {
      icon: "✨",
      title: "Porcelain",
      description: "Denser and more durable than ceramic, excellent for high-moisture areas."
    },
    {
      icon: "💎",
      title: "Natural Stone",
      description: "Luxurious options like marble, travertine, and slate with natural variations."
    },
    {
      icon: "🔮",
      title: "Glass",
      description: "Creates a luminous, reflective surface in mosaic or larger formats."
    }
  ];
  
  // Function to create featured collection cards
  function createFeaturedCollections() {
    const cardsGrid = document.querySelector('.cards-grid');
    
    featuredCollections.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card-overlay';
      
      card.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.alt}">
        <div class="overlay-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="price">${item.price}<span>/sq.ft</span></div>
          <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
        </div>
      `;
      
      cardsGrid.appendChild(card);
    });
  }
  
  // Function to create materials cards
  function createMaterialsCards() {
    const materialsGrid = document.querySelector('.materials-grid');
    
    // Create regular material cards
    materialsData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'material-card';
      
      card.innerHTML = `
        <div class="material-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      
      materialsGrid.appendChild(card);
    });
    
    // Create gradient card
    const gradientCard = document.createElement('div');
    gradientCard.className = 'gradient-card';
    
    gradientCard.innerHTML = `
      <div>
        <h3>Need Help Choosing?</h3>
        <p>Our tile experts can help you select the perfect material for your bedroom project.</p>
      </div>
      <a href="./contact.html" class="btn">Contact us</a>
    `;
    
    materialsGrid.appendChild(gradientCard);
  }
  
  // Function to create CTA section
  function createCTASection() {
    const ctaContent = document.querySelector('.cta-content');
    
    ctaContent.innerHTML = `
      <p>Visit our showroom to see our tile collections in person or schedule a free design consultation with our experts.</p>
      <button class="btn">Book Appointment</button>
      <button class="btn" style="background: transparent; border: 2px solid white; margin-left: 15px;">Get Free Samples</button>
    `;
  }
  
  // Initialize all sections when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    createFeaturedCollections();
    createMaterialsCards();
    createCTASection();
  });