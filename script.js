const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const menuModal = document.getElementById("menuModal");
const closeModal = document.getElementById("closeModal");
const menuBackdrop = document.getElementById("menuBackdrop");
const openMenuButtons = document.querySelectorAll("[data-open-menu]");

const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const heroImage = document.querySelector(".hero-image");
const productName = document.querySelector(".product-name");
const productIngredients = document.querySelector(".product-ingredients");
const priceBadge = document.querySelector(".price-badge");
const productFallback = document.getElementById("productFallback");
const indicators = document.querySelectorAll(".indicator");

const products = [
  {
    src: "./images/Desgranado De Pollo.jpeg",
    alt: "Desgranado de pollo",
    price: "$20.000",
    ingredients: "Ingredientes: chuzo de pollo picado, maíz, queso , tocineta, papa ripio y salsas.",
  },
  {
    src: "./images/arepa rellena.jpeg",
    alt: "Arepa rellena",
    price: "$18.000",
    ingredients: "Ingredientes: Carne y Pollo desmenuzado, queso, maíz, tocineta , mantequilla y salsas.",
  },
  {
    src: "./images/Burritos.jpeg",
    alt: "Burrito delicioso",
    price: "$20.000",
    ingredients: "Ingredientes: Carne, pollo, tocineta,maicitos,hogado, queso y salsas.",
  },
  {
    src: "./images/hamburguesa.jpeg",
    alt: "Hamburguesa con queso",
    price: "$12.000",
    ingredients: "Ingredientes: Carne, queso, tocineta,ensalada hawaina ,papa ripio ,salsas.",
  },
  {
    src: "./images/quesadillas.jpeg",
    alt: "Quesadillas",
    price: "$20.000",
    ingredients: "Ingredientes: Queso fresco, carne, pollo, tocineta y salsas.",
  },
  {
    src: "./images/maicitos gratinaados.jpeg",
    alt: "Maicitos Gratinados",
    price: "$18.000",
    ingredients: "Ingredientes: Maíz tierno con queso, tocino crujiente y salsa especial.",
  },
  {
    src: "./images/perro caliente.jpeg",
    alt: "Perro Caliente",
    price: "$12.000",
    ingredients: "Ingredientes: Pan, salchicha, queso, papa ripio, salsas y complementos.",
  },
  {
    src: "./images/chuzo.jpeg",
    alt: "Chuzo",
    price: "$17.000",
    ingredients: "Ingredientes: Carne y pollo ensartados, maíz, queso, salsa verde y roja.",
  },
];

let currentSlide = 1;

function updateProductSlide(index) {
  currentSlide = (index + products.length) % products.length;
  const product = products[currentSlide];

  heroImage.src = product.src;
  heroImage.alt = product.alt;
  productName.textContent = product.alt;
  priceBadge.textContent = product.price;
  if (productIngredients) {
    productIngredients.textContent = product.ingredients || "Ingredientes no disponibles.";
  }
  heroImage.style.display = "block";
  productFallback.style.display = "none";

  indicators.forEach((indicator, indicatorIndex) => {
    indicator.classList.toggle("active", indicatorIndex === currentSlide);
  });
}

if (heroImage) {
  heroImage.onerror = () => {
    heroImage.style.display = "none";
    productFallback.style.display = "grid";
  };
}

if (carouselPrev) {
  carouselPrev.addEventListener("click", () => {
    updateProductSlide(currentSlide - 1);
  });
}

if (carouselNext) {
  carouselNext.addEventListener("click", () => {
    updateProductSlide(currentSlide + 1);
  });
}

updateProductSlide(currentSlide);

function openModal() {
  menuModal.classList.remove("hidden");
  menuModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMenuModal() {
  menuModal.classList.add("hidden");
  menuModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function closeMobileNav() {
  mobileNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

openMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openModal();
    closeMobileNav();
  });
});

if (closeModal) {
  closeModal.addEventListener("click", closeMenuModal);
}

if (menuBackdrop) {
  menuBackdrop.addEventListener("click", closeMenuModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenuModal();
    closeMobileNav();
  }
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileNav();
  });
});