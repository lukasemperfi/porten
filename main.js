import { products2122 } from "./products-2021-22.js";

addEventListener("DOMContentLoaded", (event) => {
  initHeaderMenu();
  initNewCollectionProductsSlider();
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

//Product Slider
function initNewCollectionProductsSlider() {
  const sliderOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
      624: {
        slidesPerView: 3,
        // spaceBetween: 20,
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

function initSlider(className, options) {
  const sliderOptions = {
    ...options,
  };

  const swiperInstance = new Swiper(className, sliderOptions);
}

// const burgerButton = this.querySelector('.header__burger-button');
// const mobileMenu = this.querySelector('.header__mobile-menu');

// burgerButton.addEventListener('click', () => {
//   this.toggleMobileMenu();
// });

// // Close mobile menu when clicking outside
// document.addEventListener('click', e => {
//   if (!this.contains(e.target) && this.isMobileMenuOpen) {
//     this.closeMobileMenu();
//   }
// });

// // Close mobile menu on escape key
// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape' && this.isMobileMenuOpen) {
//     this.closeMobileMenu();
//   }
// });

// window.addEventListener('resize', () => {
//   if (this.isMobileMenuOpen && window.innerWidth >= 1100) {
//     this.closeMobileMenu();
//   }
// });

// toggleMobileMenu() {
// if (this.isMobileMenuOpen) {
//   this.closeMobileMenu();
// } else {
//   this.openMobileMenu();
// }
// }

// openMobileMenu() {
// this.isMobileMenuOpen = true;
// const mobileMenu = this.querySelector('.header__mobile-menu');
// const burgerButton = this.querySelector('.header__burger-button');

// mobileMenu.setAttribute('aria-hidden', 'false');
// mobileMenu.classList.add('header__mobile-menu--open');
// burgerButton.classList.add('header__burger-button--active');

// // Prevent body scroll
// document.body.style.overflow = 'hidden';
// }

// closeMobileMenu() {
// this.isMobileMenuOpen = false;
// const mobileMenu = this.querySelector('.header__mobile-menu');
// const burgerButton = this.querySelector('.header__burger-button');

// mobileMenu.setAttribute('aria-hidden', 'true');
// mobileMenu.classList.remove('header__mobile-menu--open');
// burgerButton.classList.remove('header__burger-button--active');

// // Restore body scroll
// document.body.style.overflow = '';
// }
