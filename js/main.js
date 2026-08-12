/* ============================================
   مروارید تلخ — Main JavaScript
   Loading · Scroll Animations · Navigation · Toast
   ============================================ */

// ============================================
// Loading Page
// ============================================
function initLoadingPage() {
  const loadingPage = document.getElementById("loadingPage");
  const loadingBrand = document.getElementById("loadingBrand");

  if (!loadingPage) return;

  // Set brand name as a whole (animated via CSS to preserve Persian
  // cursive letter-joining — splitting into spans breaks the script)
  if (loadingBrand) {
    loadingBrand.textContent = "مروارید تلخ";
  }

  // Hide loading page after animation
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingPage.classList.add("loading-page--hidden");
      document.body.style.overflow = "";

      // Remove from DOM after transition
      setTimeout(() => {
        if (loadingPage.parentNode) {
          loadingPage.parentNode.removeChild(loadingPage);
        }
      }, 600);
    }, 1800);
  });

  // Prevent scroll during loading
  document.body.style.overflow = "hidden";
}

// ============================================
// Scroll Animations (IntersectionObserver)
// ============================================
let scrollObserver = null;

function observeElements() {
  const elements = document.querySelectorAll("[data-animate]:not(.is-visible)");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    // Fallback: show all
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Create the observer only once — re-observing an element is
  // idempotent, so we never need to disconnect/reconnect. This
  // avoids a race where intersections are missed while the
  // observer is briefly disconnected (e.g. during window load).
  if (!scrollObserver) {
    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
  }

  elements.forEach((el) => scrollObserver.observe(el));
}

// ============================================
// Header Scroll Effect
// ============================================
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  // Don't add scrolled class on pages that already have it
  const hasScrolledClass = header.classList.contains("header--scrolled");

  if (hasScrolledClass) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const toggle = document.getElementById("headerToggle");
  const nav = document.getElementById("headerNav");

  if (!toggle || !nav) return;

  // Create overlay element dynamically
  const overlay = document.createElement("div");
  overlay.className = "header__overlay";
  document.body.appendChild(overlay);

  // Function to open menu
  const openMenu = () => {
    toggle.classList.add("active");
    nav.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // Function to close menu
  const closeMenu = () => {
    toggle.classList.remove("active");
    nav.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  // Toggle menu on button click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (nav.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on overlay click
  overlay.addEventListener("click", closeMenu);

  // Close on nav link click
  const links = nav.querySelectorAll(".header__nav-link");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on outside click (fallback for desktop)
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target) &&
      !overlay.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close menu on window resize (if resized to desktop)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && nav.classList.contains("open")) {
        closeMenu();
      }
    }, 250);
  });
}

// ============================================
// Toast Notification
// ============================================
let toastTimeout = null;

function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  // Create toast
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast__icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </span>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("toast--show");
  });

  // Auto remove
  toastTimeout = setTimeout(() => {
    toast.classList.remove("toast--show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3000);
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
      showToast("لطفاً تمام فیلدهای ضروری را پر کنید");
      return;
    }

    // Simulate form submission
    showToast("پیام شما با موفقیت ارسال شد! ✅");
    form.reset();
  });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ============================================
// Active Nav Link based on current page
// ============================================
function setActiveNavLink() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".header__nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initLoadingPage();
  initHeaderScroll();
  initMobileMenu();
  initContactForm();
  initSmoothScroll();
  setActiveNavLink();

  // Observe elements after a small delay (to ensure DOM is ready)
  setTimeout(() => {
    observeElements();
  }, 100);
});

// Re-observe on window load (for dynamically added content)
window.addEventListener("load", () => {
  observeElements();
});