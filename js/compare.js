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
