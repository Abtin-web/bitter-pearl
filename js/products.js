/* ============================================
   مروارید تلخ — Products Data & Rendering
   ============================================ */

// ---------- Product Data ----------
const PRODUCTS = [
  {
    id: 1,
    name: "اسپرسو",
    nameEn: "Espresso",
    category: "classic",
    categoryLabel: "کلاسیک",
    price: 45000,
    image: "images/product-1.jpg",
    rating: 5,
    bestSeller: true,
    shortDesc: "قهوه خالص با طعم قوی و غنی، پایه تمام نوشیدنی‌های قهوه.",
    fullDesc:
      "اسپرسوی مروارید تلخ از بهترین دانه‌های عربیکا تهیه می‌شود. با رست تیره اختصاصی، طعمی قوی، غنی و تلخ با کفایی کرما رنگ ارائه می‌دهد. هر فنجان اسپرسو، تجربه‌ای از اصالت قهوه است.",
    features: [
      "دانه عربیکا ۱۰۰٪",
      "رست تیره اختصاصی",
      "طعم قوی و غنی",
      "کف کرما رنگ ماندگار",
    ],
  },
  {
    id: 2,
    name: "آمریکانو",
    nameEn: "Americano",
    category: "hot",
    categoryLabel: "گرم",
    price: 50000,
    image: "images/product-4.jpg",
    rating: 4,
    bestSeller: true,
    shortDesc: "اسپرسو رقیق شده با آب داغ، طعمی ملایم و دلپذیر.",
    fullDesc:
      "آمریکانو ترکیب اسپرسو و آب داغ است که طعمی ملایم‌تر از اسپرسو خالص ارائه می‌دهد. این نوشیدنی برای کسانی که قهوه رقیق‌تر و سبک‌تر را ترجیح می‌دهند، ایده‌آل است.",
    features: [
      "ترکیب اسپرسو و آب داغ",
      "طعم ملایم و متعادل",
      "حجم بیشتر، کافئین ثابت",
      "مناسب برای صبحانه",
    ],
  },
  {
    id: 3,
    name: "ماکیاتو",
    nameEn: "Macchiato",
    category: "hot",
    categoryLabel: "گرم",
    price: 60000,
    image: "images/product-2.jpg",
    rating: 5,
    bestSeller: false,
    shortDesc: "اسپرسو با لکه‌ای از شیر بخارپز، طعمی بین اسپرسو و کاپوچینو.",
    fullDesc:
      "ماکیاتو به معنای «لکه‌دار» است. این نوشیدنی ترکیب اسپرسو با مقدار کمی شیر بخارپز است که طعمی بین اسپرسو خالص و کاپوچینو ارائه می‌دهد. برای عاشقان قهوه قوی که کمی شیر می‌خواهند.",
    features: [
      "اسپرسو + شیر بخارپز",
      "طعم قوی با لمسه شیر",
      "مناسب برای بعد از غذا",
      "کالری پایین",
    ],
  },
  {
    id: 4,
    name: "کاپوچینو",
    nameEn: "Cappuccino",
    category: "classic",
    categoryLabel: "کلاسیک",
    price: 65000,
    image: "images/product-3.png",
    rating: 5,
    bestSeller: true,
    shortDesc: "تعادل بی‌نقص اسپرسو، شیر و فوم شیر در یک فنجان.",
    fullDesc:
      "کاپوچینوی مروارید تلخ، تعادل بی‌نقصی بین اسپرسو، شیر بخارپز و فوم شیر ایجاد می‌کند. با نسبت ۱:۱:۱، این نوشیدنی کلاسیک ایتالیایی طعمی مخملی و دلپذیر دارد.",
    features: [
      "نسبت ۱:۱:۱ اسپرسو/شیر/فوم",
      "طعم مخملی و کلاسیک",
      "فوم شیر ماندگار",
      "محبوب‌ترین قهوه ایتالیایی",
    ],
  },
  {
    id: 5,
    name: "لاته",
    nameEn: "Latte",
    category: "special",
    categoryLabel: "ویژه",
    price: 70000,
    image: "images/product-5.jpg",
    rating: 5,
    bestSeller: false,
    shortDesc: "اسپرسو با شیر بخارپز فراوان، طعمی خامه‌ای و نرم.",
    fullDesc:
      "لاته ترکیب اسپرسو با شیر بخارپز فراوان و یک لایه نازک فوم است. این نوشیدنی طعمی خامه‌ای، نرم و ملایم دارد و برای کسانی که شیر را بیشتر از قهوه دوست دارند، عالی است.",
    features: [
      "اسپرسو + شیر فراوان",
      "طعم خامه‌ای و نرم",
      "مناسب برای آرت لاته",
      "کافئین متعادل",
    ],
  },
  {
    id: 6,
    name: "موکا",
    nameEn: "Mocha",
    category: "special",
    categoryLabel: "ویژه",
    price: 75000,
    image: "images/product-6.jpg",
    rating: 4,
    bestSeller: false,
    shortDesc: "ترکیب اسپرسو، شیر و شکلات، طعمی شیرین و جذاب.",
    fullDesc:
      "موکا ترکیب بی‌نظیر اسپرسو، شیر بخارپز و شکلات است. این نوشیدنی طعمی شیرین، غنی و جذاب دارد و برای عاشقان شکلات و قهوه، انتخابی فوق‌العاده است.",
    features: [
      "اسپرسو + شیر + شکلات",
      "طعم شیرین و غنی",
      "مناسب برای دسر",
      "انرژی‌بخش",
    ],
  },
];

// ---------- Helpers ----------
function formatPrice(price) {
  return price.toLocaleString("fa-IR");
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === parseInt(id));
}

function getBestSellers() {
  return PRODUCTS.filter((p) => p.bestSeller);
}

function getRelatedProducts(id, count = 3) {
  const product = getProductById(id);
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.id !== parseInt(id) && p.category === product.category
  )
    .concat(PRODUCTS.filter((p) => p.id !== parseInt(id) && p.category !== product.category))
    .slice(0, count);
}

// ---------- Render Product Card ----------
function renderProductCard(product) {
  return `
    <article class="product-card" data-animate="fade-up">
      <a href="product-detail.html?id=${product.id}" class="product-card__image" aria-label="مشاهده ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-card__overlay">
          <span class="btn btn--primary btn--sm product-card__overlay-btn">
            مشاهده جزئیات
          </span>
        </div>
      </a>
      <div class="product-card__body">
        <span class="product-card__category">${product.categoryLabel}</span>
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__desc">${product.shortDesc}</p>
        <div class="product-card__footer">
          <div class="product-card__price">
            ${formatPrice(product.price)}
            <span class="product-card__price-unit"> تومان</span>
          </div>
          <button class="btn btn--outline btn--sm" onclick="addToCart(${product.id})">
            افزودن به سبد
          </button>
        </div>
      </div>
    </article>
  `;
}

// ---------- Render Best Sellers (index.html) ----------
function renderBestSellers() {
  const grid = document.getElementById("bestSellersGrid");
  if (!grid) return;

  const bestSellers = getBestSellers();
  grid.innerHTML = bestSellers.map(renderProductCard).join("");
}

// ---------- Render All Products (products.html) ----------
let currentFilter = "all";
let currentSort = "default";

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  let filtered = [...PRODUCTS];

  // Filter
  if (currentFilter !== "all") {
    filtered = filtered.filter((p) => p.category === currentFilter);
  }

  // Sort
  switch (currentSort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name, "fa"));
      break;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
  } else {
    if (emptyState) emptyState.classList.add("hidden");
    grid.innerHTML = filtered.map(renderProductCard).join("");
  }

  // Re-observe for animations
  if (typeof observeElements === "function") {
    observeElements();
  }
}

// ---------- Render Product Detail (product-detail.html) ----------
function renderProductDetail() {
  const container = document.getElementById("productDetail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || 1;
  const product = getProductById(id);

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">☕</div>
        <h3 class="empty-state__title">محصول یافت نشد</h3>
        <p class="empty-state__text">محصول مورد نظر شما وجود ندارد.</p>
        <a href="products.html" class="btn btn--primary">بازگشت به محصولات</a>
      </div>
    `;
    return;
  }

  // Update breadcrumb
  const breadcrumb = document.getElementById("breadcrumbProduct");
  if (breadcrumb) breadcrumb.textContent = product.name;

  // Update title
  document.title = `${product.name} | مروارید تلخ`;

  // Render stars
  const stars = Array(5)
    .fill(0)
    .map(
      (_, i) =>
        `<svg viewBox="0 0 24 24" style="${i >= product.rating ? "opacity: 0.3;" : ""}"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    )
    .join("");

  // Render features
  const features = product.features
    .map(
      (f) => `
      <div class="product-detail__feature">
        <span class="product-detail__feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span>${f}</span>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="product-detail__image">
      <img src="${product.image}" alt="${product.name}" />
      ${product.bestSeller ? '<div class="product-detail__badge">پرفروش</div>' : ""}
    </div>
    <div class="product-detail__info">
      <span class="product-detail__category">${product.categoryLabel}</span>
      <h1 class="product-detail__title">${product.name}</h1>
      <div class="product-detail__rating">
        <div class="product-detail__rating-stars">${stars}</div>
        <span>(${product.rating}.۰ از ۵)</span>
      </div>
      <p class="product-detail__desc">${product.fullDesc}</p>
      <div class="product-detail__features">${features}</div>
      <div class="product-detail__price-row">
        <div class="product-detail__price">
          ${formatPrice(product.price)}
          <span class="product-detail__price-unit"> تومان</span>
        </div>
        <div class="product-detail__quantity">
          <button class="product-detail__quantity-btn" onclick="changeDetailQty(-1)">−</button>
          <span class="product-detail__quantity-value" id="detailQty">۱</span>
          <button class="product-detail__quantity-btn" onclick="changeDetailQty(1)">+</button>
        </div>
      </div>
      <div class="product-detail__actions">
        <button class="btn btn--primary" onclick="addToCart(${product.id}, getDetailQty())">
          افزودن به سبد خرید
        </button>
        <a href="products.html" class="btn btn--outline">بازگشت</a>
      </div>
    </div>
  `;

  // Render related products
  renderRelatedProducts(id);
}

function getDetailQty() {
  const el = document.getElementById("detailQty");
  if (!el) return 1;
  return parseInt(el.textContent.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))) || 1;
}

function changeDetailQty(delta) {
  const el = document.getElementById("detailQty");
  if (!el) return;
  let qty = getDetailQty() + delta;
  if (qty < 1) qty = 1;
  if (qty > 99) qty = 99;
  el.textContent = qty.toLocaleString("fa-IR");
}

// ---------- Render Related Products ----------
function renderRelatedProducts(id) {
  const grid = document.getElementById("relatedGrid");
  if (!grid) return;

  const related = getRelatedProducts(id);
  grid.innerHTML = related.map(renderProductCard).join("");

  if (typeof observeElements === "function") {
    observeElements();
  }
}

// ---------- Filter Setup (products.html) ----------
function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sortSelect");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }
}

// ---------- Initialize on DOM Load ----------
document.addEventListener("DOMContentLoaded", () => {
  renderBestSellers();
  renderProducts();
  renderProductDetail();
  setupFilters();
});