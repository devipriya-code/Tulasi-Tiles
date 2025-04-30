// Tile data for kitchen wall tiles
const kitchenTileData = [
    {
      title: "Carrara Marble",
      description: "Classic 3x6 inch marble subway tiles with gray veining",
      price: "$14.99",
      image: "./images/kitchen_img1.avif"
    },
    {
      title: "Hexagonal Cement",
      description: "1-inch hex cement tiles in matte gray finish",
      price: "$12.49",
      image: "./images/kitchen_img2.avif"
    },
    {
      title: "Herringbone Ceramic",
      description: "White ceramic tiles in timeless herringbone pattern",
      price: "$9.99",
      image: "./images/kitchen_img3.avif"
    },
    {
      title: "Modern Terrazzo",
      description: "Porcelain tiles with contemporary terrazzo design",
      price: "$11.99",
      image: "./images/kitchen_img4.avif"
    },
    {
      title: "Moroccan Zellige",
      description: "Handcrafted glazed tiles with slight color variations",
      price: "$18.99",
      image: "./images/kitchen_img5.avif"
    },
    {
      title: "Black Matte Subway",
      description: "3x6 inch matte black tiles for modern kitchens",
      price: "$8.99",
      image: "./images/kitchen_img6.avif"
    },
    {
      title: "Fish Scale Mosaic",
      description: "Iridescent glass tiles in scalloped pattern",
      price: "$22.99",
      image: "./images/kitchen_img7.avif"
    },
    {
      title: "Brick Red Ceramic",
      description: "Traditional red clay tiles with rustic appeal",
      price: "$7.49",
      image: "./images/kitchen_img8.jpg"
    },
    {
      title: "Geometric Pattern",
      description: "Colorful encaustic cement tiles in arabesque design",
      price: "$16.99",
      image: "./images/kitchen_img9.avif"
    },
    {
      title: "Concrete Effect",
      description: "Large format porcelain with urban concrete finish",
      price: "$10.99",
      image: "./images/kitchen_img10.avif"
    },
    {
      title: "Arabesque White",
      description: "White ceramic tiles in elegant arabesque shape",
      price: "$12.99",
      image: "./images/kitchen_img11.avif"
    },
    {
      title: "Penny Round Mosaic",
      description: "Small circular glass tiles on mesh backing",
      price: "$15.99",
      image: "./images/kitchen_img12.avif"
    }
  ];
  
  // Material data
  const materialData = [
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
  
  // Function to create tile cards
  function createKitchenTileCards() {
    const container = document.querySelector('.cards-grid');
    container.innerHTML = ''; // Clear existing content
    
    kitchenTileData.forEach(tile => {
      const card = document.createElement('div');
      card.className = 'card-overlay';
      card.innerHTML = `
        <img src="${tile.image}" alt="${tile.title}">
        <div class="overlay-content">
          <h3>${tile.title}</h3>
          <p>${tile.description}</p>
          <div class="price">${tile.price}<span>/sq.ft</span></div>
          <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Function to create material cards
  function createMaterialCards() {
    const container = document.querySelector('.materials-grid');
    container.innerHTML = ''; // Clear existing content
    
    materialData.forEach(material => {
      const card = document.createElement('div');
      card.className = 'material-card';
      card.innerHTML = `
        <div class="material-icon">${material.icon}</div>
        <h3>${material.title}</h3>
        <p>${material.description}</p>
      `;
      container.appendChild(card);
    });
    
    // Add gradient card
    const gradientCard = document.createElement('div');
    gradientCard.className = 'gradient-card';
    gradientCard.innerHTML = `
      <div>
        <h3>Need Help Choosing?</h3>
        <p>Our tile experts can help you select the perfect material for your kitchen project.</p>
      </div>
      <a href="./contact.html" class="btn">Contact us</a>
    `;
    container.appendChild(gradientCard);
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    createKitchenTileCards();
    createMaterialCards();
    
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      });
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });