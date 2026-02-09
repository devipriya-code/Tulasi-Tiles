let footer = (document.getElementById("footer").innerHTML =
  `<div class="footer-container">
            <div class="footer-col">
                <h3>About Tulasi Tiles</h3>
                <p>We are a premier tile supplier delivering high-quality solutions for both residential and commercial spaces.</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/tulasitiles"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/@TulasiTiles"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/tulasitiles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/919843069220"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./compare.html">Tile Comparison</a></li>
                    <li><a href="./tileCalculator.html">Tiles Calculator</a></li>
                  
                    <li><a href="./contact.html">Contact</a></li>
      
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <p>74/1, Coimbatore By Pass Road,
                Velayuthampalayam, Avinashi,<br>
                Tamil Nadu 641654.</p>
                <p>Phone:98430 69220</p>
                <p>Email: tulasitiles@gmail.com</p>
            </div>
                <div class="footer-col">
                <h3>Follow Us</h3>
                <ul class="footer-links">
                    <li><a href="https://www.facebook.com/tulasitiles">Facebook</a></li>
                    <li><a href="https://wa.me/919843069220">Whatsapp</a></li>
                    <li><a href="https://www.instagram.com/tulasitiles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                    <li><a href="https://www.youtube.com/@TulasiTiles">Youtube</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p> Copyright &copy; <span id="currentYear"></span> Tulasi Tiles | Developed By <a href="https://paletteproduction.com"> PaletteProduction </a></p>
        </div> 
`);

document.getElementById("currentYear").textContent = new Date().getFullYear();
