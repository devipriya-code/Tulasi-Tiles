// ─── Tile Data ────────────────────────────────────────────────────────────────
const kitchenTileData = [
  {
    title: "Carrara Marble",
    tag: "CARRARA MARBLE",
    description: "Classic 3×6 inch marble subway tiles with elegant gray veining.",
    colours: 3,
    finishes: 2,
    image: "./images/kitchen_img1.avif",
    badge: "Carrara",
    colors: ["Pearl", "Shell", "Graphite"],
    texture: "Marble",
    finish: ["Polished", "Satin"],
    sizes: ["600×600", "300×600"],
    surface: ["POSH+", "Stain Resistant"],
  },
  {
    title: "Hexagonal Cement",
    tag: "HEXAGONAL CEMENT",
    description: "1-inch hex cement tiles in matte gray finish for modern kitchens.",
    colours: 2,
    finishes: 1,
    image: "./images/kitchen_img2.avif",
    badge: "Hexagonal",
    colors: ["Graphite", "Shell"],
    texture: "Cement",
    finish: ["Matt"],
    sizes: ["200×400", "300×600"],
    surface: ["Anti-Skid"],
  },
  {
    title: "Herringbone Ceramic",
    tag: "HERRINGBONE CERAMIC",
    description: "White ceramic tiles in a timeless herringbone pattern.",
    colours: 1,
    finishes: 2,
    image: "./images/kitchen_img3.avif",
    badge: "Herringbone",
    colors: ["Pearl"],
    texture: "Ceramic",
    finish: ["Matt", "Glazed"],
    sizes: ["200×400", "300×600"],
    surface: ["Antibacterial"],
  },
  {
    title: "Moroccan Zellige",
    tag: "MOROCCAN ZELLIGE",
    description: "Handcrafted glazed tiles with subtle colour variations.",
    colours: 6,
    finishes: 1,
    image: "./images/kitchen_img5.avif",
    badge: "Zellige",
    colors: ["Peach", "Leaf", "Brick", "Hazel", "Pearl", "Shell"],
    texture: "Zellige",
    finish: ["Glazed"],
    sizes: ["200×400"],
    surface: ["POSH+"],
  },
  {
    title: "Black Matte Subway",
    tag: "BLACK MATTE SUBWAY",
    description: "3×6 inch matte black tiles for bold contemporary kitchens.",
    colours: 1,
    finishes: 1,
    image: "./images/kitchen_img6.avif",
    badge: "Matte Black",
    colors: ["Black"],
    texture: "Ceramic",
    finish: ["Matt"],
    sizes: ["300×600"],
    surface: ["Stain Resistant"],
  },
  {
    title: "Fish Scale Mosaic",
    tag: "FISH SCALE MOSAIC",
    description: "Iridescent glass tiles in a captivating scalloped pattern.",
    colours: 4,
    finishes: 1,
    image: "./images/kitchen_img7.avif",
    badge: "Fish Scale",
    colors: ["Pearl", "Leaf", "Peach", "Shell"],
    texture: "Mosaic",
    finish: ["Polished"],
    sizes: ["200×400"],
    surface: ["POSH+"],
  },
  {
    title: "Brick Red Ceramic",
    tag: "BRICK RED CERAMIC",
    description: "Traditional red clay tiles with rustic farmhouse appeal.",
    colours: 2,
    finishes: 2,
    image: "./images/kitchen_img8.jpg",
    badge: "Brick Red",
    colors: ["Brick", "Hazel"],
    texture: "Ceramic",
    finish: ["Rustic", "Matt"],
    sizes: ["600×600", "300×600"],
    surface: ["Anti-Skid"],
  },
  {
    title: "Geometric Pattern",
    tag: "GEOMETRIC PATTERN",
    description: "Colourful encaustic cement tiles in arabesque design.",
    colours: 8,
    finishes: 1,
    image: "./images/kitchen_img9.avif",
    badge: "Geometric",
    colors: ["Peach", "Leaf", "Brick", "Hazel", "Pearl", "Shell", "Graphite", "Black"],
    texture: "Cement",
    finish: ["Matt"],
    sizes: ["600×600", "800×800"],
    surface: ["Antibacterial", "Stain Resistant"],
  },
  {
    title: "Concrete Effect",
    tag: "CONCRETE EFFECT",
    description: "Large-format porcelain with urban concrete finish.",
    colours: 3,
    finishes: 2,
    image: "./images/kitchen_img10.avif",
    badge: "Concrete",
    colors: ["Graphite", "Shell", "Pearl"],
    texture: "Concrete",
    finish: ["Matt", "Satin"],
    sizes: ["600×1200", "1200×1200", "800×800"],
    surface: ["Anti-Skid", "POSH+"],
  },
  {
    title: "Arabesque White",
    tag: "ARABESQUE WHITE",
    description: "White ceramic tiles in an elegant arabesque shape.",
    colours: 2,
    finishes: 1,
    image: "./images/kitchen_img11.avif",
    badge: "Arabesque",
    colors: ["Pearl", "Shell"],
    texture: "Ceramic",
    finish: ["Glazed"],
    sizes: ["200×400", "300×600"],
    surface: ["Antibacterial"],
  },
  {
    title: "Penny Round Mosaic",
    tag: "PENNY ROUND MOSAIC",
    description: "Small circular glass tiles on mesh backing — playful and light-catching.",
    colours: 5,
    finishes: 2,
    image: "./images/kitchen_img12.avif",
    badge: "Penny Round",
    colors: ["Pearl", "Peach", "Leaf", "Shell", "Black"],
    texture: "Mosaic",
    finish: ["Polished", "Glazed"],
    sizes: ["200×400"],
    surface: ["POSH+", "Stain Resistant"],
  },
];

// ─── Active Filter State ──────────────────────────────────────────────────────
const activeFilters = {
  colors: new Set(),
  textures: new Set(),
  finishes: new Set(),
  sizes: new Set(),
  surfaces: new Set(),
};

// ─── Apply Filters & Render ───────────────────────────────────────────────────
function getFilteredTiles() {
  return kitchenTileData.filter((tile) => {
    const colorOk =
      activeFilters.colors.size === 0 ||
      tile.colors.some((c) => activeFilters.colors.has(c));
    const textureOk =
      activeFilters.textures.size === 0 ||
      activeFilters.textures.has(tile.texture);
    const finishOk =
      activeFilters.finishes.size === 0 ||
      tile.finish.some((f) => activeFilters.finishes.has(f));
    const sizeOk =
      activeFilters.sizes.size === 0 ||
      tile.sizes.some((s) => activeFilters.sizes.has(s));
    const surfaceOk =
      activeFilters.surfaces.size === 0 ||
      tile.surface.some((s) => activeFilters.surfaces.has(s));
    return colorOk && textureOk && finishOk && sizeOk && surfaceOk;
  });
}

function getSortedTiles(tiles) {
  const sortSel = document.getElementById("sort-sel");
  if (!sortSel) return tiles;
  const sorted = [...tiles];
  if (sortSel.value === "Name A–Z")
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortSel.value === "Name Z–A")
    sorted.sort((a, b) => b.title.localeCompare(a.title));
  return sorted;
}

function renderTiles() {
  const filtered = getSortedTiles(getFilteredTiles());
  const container = document.getElementById("productsGrid");
  if (!container) return;

  // Fade out
  container.style.opacity = "0";
  container.style.transition = "opacity 0.2s";

  setTimeout(() => {
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;padding:3rem 1.5rem;text-align:center;color:var(--text-muted);">
          <i class="fa-solid fa-filter-circle-xmark" style="font-size:2rem;margin-bottom:1rem;display:block;color:var(--border-dark)"></i>
          <p style="font-size:14px;">No tiles match your current filters.</p>
          <button onclick="clearAllFilters()" style="margin-top:1rem;padding:8px 20px;background:var(--accent);color:#fff;border:none;cursor:pointer;font-family:var(--ff-body);font-size:13px;">
            Clear Filters
          </button>
        </div>`;
    } else {
      container.innerHTML = "";
      filtered.forEach((tile) => {
        const card = document.createElement("div");
        card.className = "prod-card";
        card.innerHTML = `
          <div class="prod-img-wrap">
            <img src="${tile.image}" alt="${tile.title}" loading="lazy" />
            <span class="prod-badge">${tile.badge}</span>
            <button class="prod-wish" aria-label="Save to wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
          <div class="prod-body">
            <p class="prod-tag">${tile.tag}</p>
            <h3 class="prod-name">${tile.title}</h3>
            <p class="prod-desc">${tile.description}</p>
            <div class="prod-meta">
              <span><strong>${tile.colours}</strong> Colour</span>
              <span><strong>${tile.finishes}</strong> Finish</span>
            </div>
          </div>
          <div class="prod-actions">
            <button class="prod-btn prod-btn-view" onclick="window.location.href='tilesdetail.html?tile=' + encodeURIComponent(tile.title.toLowerCase().replace(/\s+/g,'-'))">
              View More <i class="fa-solid fa-plus"></i>
            </button>
            <a href="https://wa.me/919843069220?text=Enquiry:%20${encodeURIComponent(tile.title)}" target="_blank" class="prod-btn prod-btn-enquire">
              Enquire Now
            </a>
          </div>`;
        container.appendChild(card);
      });
    }

    // Update count
    const countEl = document.querySelector(".item-count strong");
    if (countEl) countEl.textContent = filtered.length;

    // Update active filter badge on sidebar header
    updateFilterBadge();

    // Fade in
    container.style.opacity = "1";
  }, 200);
}

// ─── Filter Badge (shows how many filters active) ─────────────────────────────
function updateFilterBadge() {
  const total =
    activeFilters.colors.size +
    activeFilters.textures.size +
    activeFilters.finishes.size +
    activeFilters.sizes.size +
    activeFilters.surfaces.size;

  let badge = document.getElementById("filter-badge");
  const header = document.querySelector(".sidebar-header h3");
  if (!header) return;

  if (total > 0) {
    if (!badge) {
      badge = document.createElement("span");
      badge.id = "filter-badge";
      badge.style.cssText =
        "display:inline-flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;border-radius:50%;width:18px;height:18px;font-size:10px;font-weight:700;margin-left:6px;";
      header.appendChild(badge);
    }
    badge.textContent = total;
  } else if (badge) {
    badge.remove();
  }
}

// ─── Clear All Filters ────────────────────────────────────────────────────────
function clearAllFilters() {
  activeFilters.colors.clear();
  activeFilters.textures.clear();
  activeFilters.finishes.clear();
  activeFilters.sizes.clear();
  activeFilters.surfaces.clear();

  document.querySelectorAll(".swatch-item.active").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".texture-thumb.active").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".size-tag.active").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".sidebar input[type=checkbox]").forEach((el) => (el.checked = false));

  renderTiles();
}

// ─── Init: Color Swatches ─────────────────────────────────────────────────────
function initSwatches() {
  document.querySelectorAll(".swatch-item").forEach((item) => {
    const label = item.querySelector(".swatch-label");
    if (!label) return;
    const colorName = label.textContent.trim();

    item.addEventListener("click", () => {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        activeFilters.colors.add(colorName);
      } else {
        activeFilters.colors.delete(colorName);
      }
      renderTiles();
    });
  });
}

// ─── Init: Texture Thumbs ─────────────────────────────────────────────────────
function initTextureThumbs() {
  document.querySelectorAll(".texture-thumb").forEach((item) => {
    const nameEl = item.querySelector(".texture-name");
    if (!nameEl) return;
    const textureName = nameEl.textContent.trim();

    item.addEventListener("click", () => {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        activeFilters.textures.add(textureName);
      } else {
        activeFilters.textures.delete(textureName);
      }
      renderTiles();
    });
  });
}

// ─── Init: Finish Checkboxes ──────────────────────────────────────────────────
function initFinishCheckboxes() {
  // Finish filter group (4th group or find by label text)
  const allLabels = document.querySelectorAll(".finish-item");
  allLabels.forEach((label) => {
    const checkbox = label.querySelector("input[type=checkbox]");
    if (!checkbox) return;
    const text = label.textContent.trim();

    // Detect if this is a Finish or Surface option
    const finishOptions = ["Matt", "Polished", "Glazed", "Rustic", "Satin"];
    const surfaceOptions = ["Anti-Skid", "POSH+", "Antibacterial", "Stain Resistant"];

    checkbox.addEventListener("change", () => {
      if (finishOptions.includes(text)) {
        if (checkbox.checked) activeFilters.finishes.add(text);
        else activeFilters.finishes.delete(text);
      } else if (surfaceOptions.includes(text)) {
        if (checkbox.checked) activeFilters.surfaces.add(text);
        else activeFilters.surfaces.delete(text);
      }
      renderTiles();
    });
  });
}

// ─── Init: Size Tags ──────────────────────────────────────────────────────────
function initSizeTags() {
  document.querySelectorAll(".size-tag").forEach((tag) => {
    const sizeName = tag.textContent.trim();

    tag.addEventListener("click", () => {
      tag.classList.toggle("active");
      if (tag.classList.contains("active")) {
        activeFilters.sizes.add(sizeName);
      } else {
        activeFilters.sizes.delete(sizeName);
      }
      renderTiles();
    });
  });
}

// ─── Init: Clear All Button ───────────────────────────────────────────────────
function initClearAll() {
  const clearBtn = document.querySelector(".sidebar-clear");
  if (clearBtn) clearBtn.addEventListener("click", clearAllFilters);
}

// ─── Init: Sort ───────────────────────────────────────────────────────────────
function initSort() {
  const sortSel = document.getElementById("sort-sel");
  if (sortSel) sortSel.addEventListener("change", renderTiles);
}

// ─── Init: Grid View Toggle ───────────────────────────────────────────────────
function initViewToggle() {
  const grid = document.getElementById("productsGrid");
  const btn3 = document.getElementById("btn3col");
  const btn2 = document.getElementById("btn2col");
  if (!grid || !btn3 || !btn2) return;

  btn3.addEventListener("click", () => {
    grid.classList.remove("two-col");
    btn3.classList.add("active");
    btn2.classList.remove("active");
  });

  btn2.addEventListener("click", () => {
    grid.classList.add("two-col");
    btn2.classList.add("active");
    btn3.classList.remove("active");
  });
}

// ─── Init: Filter Accordions ──────────────────────────────────────────────────
function initFilterAccordions() {
  document.querySelectorAll(".filter-group-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".filter-group").classList.toggle("open");
    });
  });
}

// ─── Init: Mobile Filter Toggle ───────────────────────────────────────────────
function initMobileFilter() {
  const toggleBtn = document.querySelector(".mobile-filter-toggle");
  const sidebar = document.getElementById("sidebar");
  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("mobile-open");
    const isOpen = sidebar.classList.contains("mobile-open");
    toggleBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i> Close Filters'
      : '<i class="fa-solid fa-sliders"></i> Filters';
  });
}

// ─── Init: Scroll to Top ──────────────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "flex" : "none";
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ─── Init: Smooth Scroll ─────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ─── Active Filter Chips (below toolbar) ─────────────────────────────────────
function renderActiveFilterChips() {
  // Remove existing chips bar if any
  let chipsBar = document.getElementById("active-filter-chips");
  
  const allActive = [
    ...[...activeFilters.colors].map((v) => ({ label: v, group: "colors" })),
    ...[...activeFilters.textures].map((v) => ({ label: v, group: "textures" })),
    ...[...activeFilters.finishes].map((v) => ({ label: v, group: "finishes" })),
    ...[...activeFilters.sizes].map((v) => ({ label: v, group: "sizes" })),
    ...[...activeFilters.surfaces].map((v) => ({ label: v, group: "surfaces" })),
  ];

  if (allActive.length === 0) {
    if (chipsBar) chipsBar.remove();
    return;
  }

  if (!chipsBar) {
    chipsBar = document.createElement("div");
    chipsBar.id = "active-filter-chips";
    chipsBar.style.cssText =
      "display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1rem;";
    const toolbar = document.querySelector(".toolbar");
    if (toolbar) toolbar.after(chipsBar);
  }

  chipsBar.innerHTML = allActive
    .map(
      ({ label, group }) =>
        `<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--accent-light);border:1px solid var(--accent);color:var(--accent-dark);font-size:12px;cursor:pointer;"
          data-label="${label}" data-group="${group}">
          ${label}
          <i class="fa-solid fa-xmark" style="font-size:9px;"></i>
        </span>`
    )
    .join("");

  chipsBar.querySelectorAll("span").forEach((chip) => {
    chip.addEventListener("click", () => {
      const { label, group } = chip.dataset;
      activeFilters[group].delete(label);

      // Deactivate the corresponding UI element
      document.querySelectorAll(".swatch-item").forEach((el) => {
        if (el.querySelector(".swatch-label")?.textContent.trim() === label)
          el.classList.remove("active");
      });
      document.querySelectorAll(".texture-thumb").forEach((el) => {
        if (el.querySelector(".texture-name")?.textContent.trim() === label)
          el.classList.remove("active");
      });
      document.querySelectorAll(".size-tag").forEach((el) => {
        if (el.textContent.trim() === label) el.classList.remove("active");
      });
      document.querySelectorAll(".finish-item input[type=checkbox]").forEach((cb) => {
        if (cb.closest(".finish-item")?.textContent.trim() === label)
          cb.checked = false;
      });

      renderTiles();
      renderActiveFilterChips();
    });
  });
}

// Wrap renderTiles to also update chips
const _origRenderTiles = renderTiles;
function renderTilesWithChips() {
  renderTiles();
  renderActiveFilterChips();
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderTiles(); // initial render from data
  initFilterAccordions();
  initSwatches();
  initTextureThumbs();
  initFinishCheckboxes();
  initSizeTags();
  initClearAll();
  initSort();
  initViewToggle();
  initMobileFilter();
  initScrollTop();
  initSmoothScroll();

  // Patch all filter interactions to also update chips
  document.querySelectorAll(".swatch-item, .texture-thumb, .size-tag").forEach((el) => {
    el.addEventListener("click", renderActiveFilterChips);
  });
  document.querySelectorAll(".finish-item input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("change", renderActiveFilterChips);
  });
  document.querySelector(".sidebar-clear")?.addEventListener("click", () => {
    document.getElementById("active-filter-chips")?.remove();
  });
});