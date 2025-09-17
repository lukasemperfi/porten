import { products2122 } from "./products-2021-22.js";
import { productsNewGoods } from "./products-new-goods.js";

addEventListener("DOMContentLoaded", (event) => {
  initHeaderMenu();
  initNewCollectionProductsSlider();
  initNewGoodsProductsSlider();
});

// Header Menu
function initHeaderMenu() {
  let isMobileMenuOpen = false;

  const burgerButton = document.querySelector(".navbar__burger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerButton.addEventListener("click", () => {
    isMobileMenuOpen = !isMobileMenuOpen;

    if (isMobileMenuOpen) {
      openMobileMenu(mobileMenu);
    } else {
      closeMobileMenu(mobileMenu);
    }
  });
}

function openMobileMenu(mobileMenu) {
  mobileMenu.classList.add("mobile-menu--open");

  document.body.style.overflow = "hidden";
}

function closeMobileMenu(mobileMenu) {
  mobileMenu.setAttribute("aria-hidden", "true");
  mobileMenu.classList.remove("mobile-menu--open");

  document.body.style.overflow = "";
}

//New Collection Slider
function initNewCollectionProductsSlider() {
  const sliderOptions = {
    slidesPerView: 1,
    // spaceBetween: 10,
    loop: true,

    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      624: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      914: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    navigation: {
      nextEl: ".products-list-slider__button-next",
      prevEl: ".products-list-slider__button-prev",
    },
  };

  const sliderWrapper = document.querySelector(
    ".media-block__products-slider-wrapper"
  );
  sliderWrapper.innerHTML = `
                            <div class="products-list-slider__button-prev"></div>
                            <div class="swiper products-list-slider">
                                <div class="swiper-wrapper">
                                ${products2122
                                  .map(
                                    (product) => `
                                    <div class="swiper-slide">
                                        <div class="product-card">
                                            <div class="product-card__image-wrapper">
                                                <img src="${product.image}"
                                                    alt="Product card" class="product-card__image">
                                            </div>
                                            <div class="product-card__title">${product.title}</div>
                                            <div class="product-card__price">${product.price}</div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                                </div>
                            </div>
                            <div class="products-list-slider__button-next"></div>
  `;

  initSlider(".products-list-slider", sliderOptions);
}

// New Goods Slider
function initNewGoodsProductsSlider() {
  let sliderInstance = null; // будем хранить инстанс слайдера
  const sliderWrapper = document.querySelector(
    ".new-goods__products-container"
  );
  const mediaQuery = window.matchMedia("(min-width: 1440px)");

  function handleWidthChange(e) {
    if (e.matches) {
      // больше 1440 — уничтожаем слайдер если есть
      if (sliderInstance) {
        sliderInstance.destroy(true, true);
        sliderInstance = null;
      }

      createGrid();
    } else {
      // меньше 1440 — создаем слайдер если его нет
      createSlider();
    }
  }

  mediaQuery.addEventListener("change", handleWidthChange);

  // первый запуск
  handleWidthChange(mediaQuery);

  function createSlider() {
    sliderWrapper.classList.remove("new-goods__grid-wrapper");
    sliderWrapper.classList.add("new-goods__slider-wrapper");
    sliderWrapper.innerHTML = `
      <div class="new-goods-slider__button-prev"></div>
      <div class="swiper new-goods-slider">
        <div class="swiper-wrapper">
          ${productsNewGoods
            .map(
              (product) => `
            <div class="swiper-slide">
              <div class="product-card">
                <div class="product-card__image-wrapper">
                  <img src="${product.image}" alt="Product card" class="product-card__image">
                </div>
                <div class="product-card__title">${product.title}</div>
                <div class="product-card__price">${product.price}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="new-goods-slider__button-next"></div>
    `;

    const sliderOptions = {
      slidesPerView: 1,
      breakpoints: {
        450: { slidesPerView: 2, spaceBetween: 10 },
        624: { slidesPerView: 3, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 23 },
        914: { slidesPerView: 3, spaceBetween: 23 },
        1920: { slidesPerView: 3, spaceBetween: 23 },
      },
      navigation: {
        nextEl: ".new-goods-slider__button-next",
        prevEl: ".new-goods-slider__button-prev",
      },
    };

    sliderInstance = new Swiper(".new-goods-slider", sliderOptions);
  }

  function createGrid() {
    sliderWrapper.classList.remove("new-goods__slider-wrapper");
    sliderWrapper.classList.add("new-goods__grid-wrapper");
    sliderWrapper.innerHTML = `
      <div class="new-goods__grid">
        ${productsNewGoods
          .map(
            (product) => `
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <img src="${product.image}" alt="Product card" class="product-card__image">
              </div>
              <div class="product-card__title">${product.title}</div>
              <div class="product-card__price">${product.price}</div>
          </div>
        `
          )
          .join("")}
            <div class="product-card">
              <div class="product-card__image-wrapper">
                <img src="./assets/images/products/jord-ar5905.webp" alt="Product card" class="product-card__image">
                 <a href="#" class="new-goods__link button">ПОКАЗАТИ ВСІ</a>
              </div>
          </div>
      </div>
  `;
  }
}

//Products Slider
function initSlider(className, options) {
  const sliderOptions = {
    ...options,
  };

  return new Swiper(className, sliderOptions);
}
