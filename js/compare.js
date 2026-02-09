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
    size: " 1200x1800mm",
    thickness: "9mm",
    color: "White",
    finish: "Carving",
    image: "./images/BELFAST WHITE.jpg",
  },
  {
    id: 2,
    title: "Wooden Look Ceramic",
    description:
      "Elegant large-format slabs with a deep stone aesthetic and gold veining, perfect for dramatic feature walls and luxury flooring.",
    brand: "Master Tiles",
    size: "6x36 inches",
    thickness: "9mm",
    color: "Saint Laurent Grey",
    image: "./images/compare_img2.avif",
  },
  {
    id: 3,
    title: "Anti-Slip Outdoor",
    price: "Rs. 1,200/sq.ft",
    description:
      "High-traction tiles designed for outdoor use, resistant to weather and slipping.",
    brand: "Shabbir Tiles",
    size: "12x12 inches",
    thickness: "10mm",
    colors: "Terracotta, Grey, Brown",
    warranty: "5 years",
    image: "./images/compare_img3.avif",
  },
  {
    id: 4,
    title: "Glossy Kitchen Tiles",
    price: "Rs. 1,500/sq.ft",
    description:
      "High-gloss ceramic tiles ideal for kitchen backsplashes and walls.",
    brand: "Dura Tiles",
    size: "12x24 inches",
    thickness: "7mm",
    colors: "White, Blue, Green",
    warranty: "8 years",
    image: "./images/compare_img5.avif",
  },
  {
    id: 5,
    title: "Large Format Porcelain",
    price: "Rs. 3,200/sq.ft",
    description:
      "Extra-large porcelain slabs for seamless flooring in modern spaces.",
    brand: "Orient Tiles",
    size: "48x48 inches",
    thickness: "12mm",
    colors: "Concrete, Sandstone, Slate",
    warranty: "15 years",
    image: "./images/compare_img4.avif",
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
