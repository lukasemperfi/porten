addEventListener("DOMContentLoaded", (event) => {
  initHeaderMenu();
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
