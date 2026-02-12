// Tile products data
var tiles = [
  {
    id: 0,
    title: "",

    description: "",
    brand: "",
    size: "",
    thickness: "",
    color: "",

    image: "",
  },
  {
    id: 1,
    title: "BELFAST WHITE",
    description:
      "Premium porcelain tiles with realistic marble finish, suitable for floors and walls.",
    size: "1200x1800mm",
    thickness: "9mm",
    color: "White",
    finish: "Carving",
    image: "./images/BELFAST WHITE.png",
  },
  {
    id: 2,
    title: "Reflex Vitrified Tiles",
    description:
      "Versatile large-format porcelain tiles with a soft stone texture, perfect for creating a serene, modern bathroom or minimalist living space.",
    brand: "Master Tiles",
    size: "800x1600mm",
    thickness: "9mm",
    color: "Charcoal Grey",
    finish: "Granolith",
    image: "./images/refelex-vitrified-compare.png",
  },
  {
    id: 3,
    title: "Avira Glossy Vitrified Tile",
    description:
      "Versatile large-format porcelain tiles with a soft stone texture, perfect for creating a serene, modern bathroom or minimalist living space.",
    size: "1200x1800mm",
    thickness: "9mm",
    color: "Cool Grey",
    finish: "Carving",
    image: "./images/ARENA GREY-compare.png",
  },
  {
    id: 4,
    title: "Bellisimo Tiles",
    description:
      "Bellisimo Tiles are premium quality floor and wall tiles designed to bring modern style, durability, and functional performance to any interior space.",
    size: "800x1600mm",
    thickness: "9mm",
    color: "Neutral Grey",
    finish: "Granolith",
    image: "./images/Bellisimo Tiles.png",
  },
  {
    id: 5,
    title: "Aspen Crema",
    description:
      "Extra-large porcelain slabs for seamless flooring in modern spaces.",
    size: "30x45cm",
    thickness: "12mm",
    color: "Cream",
    finish: "Glossy",
    image: "./images/Aspen-compare.png",
  },
  {
    id: 6,
    title: "Endless high-glossy Tile",
    description:
      "Endless high-glossy surfaces that deliver a mirror-like finish, enhancing light reflection and adding a premium, luxurious feel to any space.",
    size: "800x1600mm",
    thickness: "9mm",
    color: "Aqua",
    finish: "High Gloss",
    image: "./images/Endless-glossy-compare.png",
  },
  {
    id: 7,
    title: "Jemstone Grey Blaze",
    description:
      "A refined grey-toned tile inspired by natural stone. Subtle textures and elegant patterns add depth while maintaining a clean, modern look for contemporary spaces.",
    size: "800x1600mm",
    thickness: "9mm",
    color: "Grey",
    finish: "Granolith",
    image: "./images/Jemstone Grey Blaze-compare.png",
  },
  {
    id: 8,
    title: "Artek Nero Tile",
    description:
      "Deep black tiles with a sleek matt finish. Large formats create a bold, modern look for premium interiors.",
    size: "119x280cm",
    thickness: "9mm",
    color: "Charcoal Gray",
    finish: "Beyond",
    image: "./images/Artek Nero Tile2.png",
  },

  {
    id: 9,
    title: "Galaxy Grey",
    description:
      "Stone-inspired grey tiles offering a calm and contemporary aesthetic, suitable for residential and commercial walls.",
    size: "80x240cm",
    thickness: "9mm",
    color: "Salt and Pepper",
    finish: "Polished",
    image: "./images/Galaxy Grey2.png",
  },
  {
    id: 10,
    title: "Spring Marfil",
    description:
      "Spring Marfil Tile is a marble-inspired tile that brings a sense of luxury and warmth to any space.It creates a calm and elegant look.",
    size: "60x120cm",
    thickness: "9mm",
    color: "Marfil",
    finish: "Matt",
    image: "./images/Spring-Marfil.png",
  },
  {
    id: 11,
    title: "Autumn Wood",
    description:
      "Designed to bring a cozy and elegant feel, it adds warmth toliving rooms, bedrooms, and commercial spaces without the maintenance of real wood.",
    size: "60x120cm",
    thickness: "9mm",
    color: "Wood",
    finish: "Matt",
    image: "./images/3D Textured Tile2.png",
  },
  {
    id: 12,
    title: "Emali Beige",
    description:
      "Polished vitrified tiles with a luxurious high-gloss finish. Strong, low-porosity, and durable—ideal for premium flooring.",
    size: "120x180cm",
    thickness: "9mm",
    color: "Beige",
    finish: "Marbletech",
    image: "./images/Emali Beige Tiles2.png",
  },
  {
    id: 13,
    title: "Dyna Crema",
    description:
      "Polished vitrified tiles with a luxurious high-gloss finish. Strong, low-porosity, and durable—ideal for premium flooring.",
    size: "80x240cm",
    thickness: "9mm",
    color: "Cream",
    finish: "Polished",
    image: "images/Dyna Crema2.png",
  },
  {
    id: 14,
    title: "Calacatta White",
    description:
      "Polished vitrified tiles with a luxurious high-gloss finish. Strong, low-porosity, and durable—ideal for premium flooring.",
    size: "80x240cm",
    thickness: "9mm",
    color: "Calacatta White",
    finish: "Polished",
    image: "images/Calacatta White Tile2.png",
  },
  {
    id: 15,
    title: "Crema Pearl",
    description:
      "Composite tiles blended with marble and glass chips, adding subtle texture.This surface creates ideal for accent walls and stylish interior.",
    size: "60x120cm",
    thickness: "9mm",
    color: "Pale Beige",
    finish: "HD Polished",
    image: "images/Crema Perl2.png",
  },
  {
    id: 16,
    title: "Girgio Perla Marble",
    description:
      "Classic marble-look tiles with timeless appeal, designed for elegant interiors and sophisticated commercial spaces.",
    size: "60x120cm",
    thickness: "9mm",
    color: "White",
    finish: "HD Polished",
    image: "./images/Girgio Perla Marble 2.png",
  },
  {
    id: 17,
    title: "Emperador Rust",
    description:
      "Rich brown marble-inspired tiles, designed to create warm and elegant flooring for living areas and bathrooms.",
    size: "60x120cm",
    thickness: "9mm",
    color: "White",
    finish: "HI-Gloss Polished",
    image: "./images/Emperador Rust Tile2.png",
  },
];

// Populate dropdowns
for (var i = 1; i < tiles.length; i++) {
  document.getElementById("select1").innerHTML += `
                <option value="${i}">${tiles[i].title} (${tiles[i].finish})</option>
            `;
  document.getElementById("select2").innerHTML += `
                <option value="${i}">${tiles[i].title} (${tiles[i].finish})</option>
            `;
}

// Comparison functions
function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
    document.getElementById("img1").src = tiles[a].image;
    document.getElementById("desc1").innerHTML = tiles[a].description;
    document.getElementById("finish1").innerHTML = tiles[a].finish;
    document.getElementById("size1").innerHTML = tiles[a].size;
    document.getElementById("thickness1").innerHTML = tiles[a].thickness;
    document.getElementById("colors1").innerHTML = tiles[a].color;
  } else {
    alert("Please select a different tile for comparison");
    document.getElementById("select1").selectedIndex = 0;
    resetColumn(1);
  }
}

function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (a != select1) {
    document.getElementById("img2").src = tiles[a].image;

    document.getElementById("desc2").innerHTML = tiles[a].description;

    document.getElementById("size2").innerHTML = tiles[a].size;
    document.getElementById("thickness2").innerHTML = tiles[a].thickness;
    document.getElementById("colors2").innerHTML = tiles[a].color;
    document.getElementById("finish2").innerHTML = tiles[a].finish;
  } else {
    alert("Please select a different tile for comparison");
    document.getElementById("select2").selectedIndex = 0;
    resetColumn(2);
  }
}

function resetColumn(colNum) {
  const col = colNum === 1 ? "1" : "2";
  document.getElementById(`img${col}`).src = tiles[0].image;

  document.getElementById(`desc${col}`).innerHTML = "--";
  document.getElementById(`finish${col}`).innerHTML = "--";
  document.getElementById(`size${col}`).innerHTML = "--";
  document.getElementById(`thickness${col}`).innerHTML = "--";
  document.getElementById(`colors${col}`).innerHTML = "--";
}
