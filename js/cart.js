/* ============================================
   مروارید تلخ — Cart Management (localStorage)
   ============================================ */

const CART_KEY = "bitterpearl_cart";

// ---------- Get Cart ----------
function getCart() {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    return [];
  }
}

// ---------- Save Cart ----------
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

// ---------- Add to Cart ----------
function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.categoryLabel,
      quantity: quantity,
    });
  }

  saveCart(cart);
  showToast(`${product.name} به سبد خرید اضافه شد`);
}

// ---------- Remove from Cart ----------
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  renderCart();
  showToast("محصول از سبد حذف شد");
}

// ---------- Change Quantity ----------
function changeQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity < 1) {
    removeFromCart(productId);
    return;
  }
  if (item.quantity > 99) item.quantity = 99;

  saveCart(cart);
  renderCart();
}

// ---------- Get Cart Count ----------
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

// ---------- Get Cart Total ----------
function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// ---------- Update Cart Badge ----------
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;

  const count = getCartCount();
  if (count > 0) {
    badge.textContent = count.toLocaleString("fa-IR");
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

// ---------- Render Cart Page ----------
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");
  const cartLayout = document.getElementById("cartLayout");
  const emptyCart = document.getElementById("emptyCart");

  if (!cartItems || !cartSummary) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (cartLayout) cartLayout.classList.add("hidden");
    if (emptyCart) emptyCart.classList.remove("hidden");
    return;
  }

  if (cartLayout) cartLayout.classList.remove("hidden");
  if (emptyCart) emptyCart.classList.add("hidden");

  // Render items
  cartItems.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <div class="cart-item__image">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item__info">
          <span class="cart-item__category">${item.category}</span>
          <h3 class="cart-item__title">${item.name}</h3>
          <div class="cart-item__price">
            ${formatPrice(item.price)}
            <span class="cart-item__price-unit"> تومان</span>
          </div>
        </div>
        <div class="cart-item__controls">
          <div class="cart-item__quantity">
            <button class="cart-item__quantity-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
            <span class="cart-item__quantity-value">${item.quantity.toLocaleString("fa-IR")}</span>
            <button class="cart-item__quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart(${item.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            حذف
          </button>
        </div>
      </div>
    `
    )
    .join("");

  // Render summary
  const subtotal = getCartTotal();
  const shipping = subtotal > 200000 ? 0 : 35000;
  const total = subtotal + shipping;

  cartSummary.innerHTML = `
    <h3 class="cart-summary__title">خلاصه سفارش</h3>
    <div class="cart-summary__row">
      <span>تعداد اقلام:</span>
      <span class="cart-summary__value">${getCartCount().toLocaleString("fa-IR")}</span>
    </div>
    <div class="cart-summary__row">
      <span>جمع کل:</span>
      <span class="cart-summary__value">${formatPrice(subtotal)} تومان</span>
    </div>
    <div class="cart-summary__row">
      <span>هزینه ارسال:</span>
      <span class="cart-summary__value">${shipping === 0 ? "رایگان" : formatPrice(shipping) + " تومان"}</span>
    </div>
    ${
      shipping > 0
        ? `<div class="cart-summary__row" style="font-size: var(--fs-xs); color: var(--color-accent);">
            با خرید ${formatPrice(200000 - subtotal)} تومان بیشتر، ارسال رایگان می‌شود!
          </div>`
        : ""
    }
    <div class="cart-summary__row cart-summary__row--total">
      <span>مبلغ نهایی:</span>
      <span class="cart-summary__value">${formatPrice(total)} تومان</span>
    </div>
    <button class="btn btn--primary btn--block cart-summary__checkout" onclick="checkout()">
      تکمیل سفارش
    </button>
    <div class="cart-summary__continue">
      <a href="products.html">ادامه خرید</a>
    </div>
  `;
}

// ---------- Checkout ----------
function checkout() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("سبد خرید شما خالی است");
    return;
  }

  showToast("سفارش شما با موفقیت ثبت شد! ✅");
  localStorage.removeItem(CART_KEY);
  updateCartBadge();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

// ---------- Initialize ----------
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderCart();
});