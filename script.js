/**
 * Denali Cottage - Rental Listing
 * Simple hero slideshow and smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
});

function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  let currentIndex = 0;
  const interval = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  setInterval(nextSlide, interval);
}
