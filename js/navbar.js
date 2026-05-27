let navbar = (document.getElementById("navbar").innerHTML =
  `<div class="header-container">
        <div class="logo-text">
          <img src="=../../images/logo-1.png" alt="Tulasi Tiles Logo" class="logo-img">
        </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        <nav>
        <div class="mobile-logo"><img src="=../../images/logo-1.png" alt="Tulasi Tiles Logo" class="logo-img"></div>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">Tiles <i class="dropdown-arrow">▼</i></a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h4>Floor Tiles</h4>
                            <ul>
                                <li><a href="bathroom_floor_tiles.html"><i class="fas fa-check-circle"></i> Bathroom Tiles</a></li>
                                <li><a href="kitchen_floor_tiles.html"><i class="fas fa-check-circle"></i> Kitchen Tiles</a></li>
                                <li><a href="outdoor_floor_tiles.html"><i class="fas fa-check-circle"></i> Outdoor Tiles</a></li>
                                <li><a href="livingroom_floor_tiles.html"><i class="fas fa-check-circle"></i> Living Room Tiles</a></li>
                                <li><a href="bedroom_floor_tiles.html"><i class="fas fa-check-circle"></i> Bedroom Tiles</a></li>
                                <li><a href="commercial_floor_tiles.html"><i class="fas fa-check-circle"></i> Commercial Tiles</a></li>
                            </ul>
                        </div>
                        
                        <div class="dropdown-column">
                            <h4>Special Tiles</h4>
                            <ul>
                                <li><a href="special_tiles.html"><i class="fas fa-check-circle"></i> Germ Free Tiles</a></li>
                                <li><a href="#tactile"><i class="fas fa-check-circle"></i> Tactile Floor Tiles</a></li>
                                <li><a href="#anti-static"><i class="fas fa-check-circle"></i> Anti Static Tiles</a></li>
                                <li><a href="#cool-roof"><i class="fas fa-check-circle"></i> Cool Roof Tiles</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                 <li><a href="./blog.html">Blog</a></li>
                <li><a href="./compare.html">Tile Comparison</a></li>
                <li><a href="./tileCalculator.html">Tiles Calculator</a></li>
                 <li><a href="./contact.html">Contact</a></li>
                <li><a href="./catalogue.html"><button class="catalogue-button">E-Catalogue</button></a></li>
            </ul>
        </nav>
    </div>`);

// <li><a href="./expert_corner.html">Expert Corner</a></li>
// Mobile menu toggle functionality
// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    });
  }

  // Dropdown toggle for mobile
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      // Only prevent default and toggle on mobile
      if (window.innerWidth <= 992) {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = this.parentElement;
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle("active");
        
        console.log("Dropdown clicked, active:", dropdown.classList.contains('active'));
      }
    });
  });

  // Close menu when clicking on a dropdown link (not the toggle)
  document.querySelectorAll(".dropdown-column a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.body.style.overflow = "";
        
        // Close all dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          d.classList.remove('active');
        });
      }
    });
  });

  // Close menu when clicking overlay
  if (nav) {
    nav.addEventListener("click", function(e) {
      if (e.target === this && window.innerWidth <= 992) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.body.style.overflow = "";
        
        // Close all dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
          d.classList.remove('active');
        });
      }
    });
  }

  // Close menu on window resize
  window.addEventListener("resize", function() {
    if (window.innerWidth > 992) {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
      
      // Close all dropdowns
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('active');
      });
    }
  });
});