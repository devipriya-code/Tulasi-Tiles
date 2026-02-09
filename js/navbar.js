let navbar = (document.getElementById("navbar").innerHTML =
  `<div class="header-container">
        <div class="logo-text">Tulasi <span>Tiles</span></div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        <nav>
        <div class="mobile-logo">Tulasi <span>Tiles</span></div>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">Tiles <i class="dropdown-arrow">▼</i></a>
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h4>Floor Tiles</h4>
                            <ul>
                                <li><a href="bathroom_floor_tiles.html"><i class="fas fa-check-circle"></i> Bathroom Floor Tiles</a></li>
                                <li><a href="kitchen_floor_tiles.html"><i class="fas fa-check-circle"></i> Kitchen Floor Tiles</a></li>
                                <li><a href="outdoor_floor_tiles.html"><i class="fas fa-check-circle"></i> Outdoor Floor Tiles</a></li>
                                <li><a href="livingroom_floor_tiles.html"><i class="fas fa-check-circle"></i> Living Room Floor Tiles</a></li>
                                <li><a href="bedroom_floor_tiles.html"><i class="fas fa-check-circle"></i> Bedroom Floor Tiles</a></li>
                                <li><a href="commercial_floor_tiles.html"><i class="fas fa-check-circle"></i> Commercial Floor Tiles</a></li>
                            </ul>
                        </div>
                        <div class="dropdown-column">
                            <h4>Wall Tiles</h4>
                            <ul>
                                <li><a href="bathroom_wall_tiles.html"><i class="fas fa-check-circle"></i> Bathroom Wall Tiles</a></li>
                                <li><a href="kitchen_wall_tiles.html"><i class="fas fa-check-circle"></i> Kitchen Wall Tiles</a></li>
                                <li><a href="outdoor_wall_tiles.html"><i class="fas fa-check-circle"></i> Outdoor Wall Tiles</a></li> 
                                <li><a href="livingroom_wall_tiles.html"><i class="fas fa-check-circle"></i> Living Room Wall Tiles</a></li>
                                <li><a href="bedroom_wall_tiles.html"><i class="fas fa-check-circle"></i> Bedroom Wall Tiles</a></li>
                                <li><a href="commercial_wall_tiles.html"><i class="fas fa-check-circle"></i> Commercial Wall Tiles</a></li>
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
                <li><a href="./catalogue.html">E-Catalogue</a></li>
            </ul>
        </nav>
    </div>`);

// <li><a href="./expert_corner.html">Expert Corner</a></li>
// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Hamburger menu toggle
  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Dropdown toggle for mobile
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const dropdown = this.parentElement;
        dropdown.classList.toggle("active");
      }
    });
  });

  // Close menu when clicking on a link (for mobile)
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function () {
      if (
        window.innerWidth <= 992 &&
        !this.classList.contains("dropdown-toggle")
      ) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });
});
