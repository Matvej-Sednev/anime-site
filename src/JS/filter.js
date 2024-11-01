
document.addEventListener('DOMContentLoaded', () => {
  const filterBlock = document.querySelector('.filter-block');
  const openFilterButton = document.getElementById('filters');
  
  openFilterButton.addEventListener('click', () => {
      filterBlock.classList.toggle('show');
  });
})

document.addEventListener('DOMContentLoaded', () => {
  const filterBlock = document.querySelector('.account');
  const openFilterButton = document.getElementById('image');
  
  openFilterButton.addEventListener('click', () => {
      filterBlock.classList.toggle('show');
  });
})

document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.carousel__inner');
const indicators = document.querySelectorAll('.carousel__indicator');

let currentSlideIndex = 1;
const slidesCount = slidesContainer.children.length; 
let autoplayInterval; 

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slidesCount;
  updateCarousel();
}

function updateCarousel() {
  const slideWidth = slidesContainer.children[0].offsetWidth; 
  const translateX = -currentSlideIndex * slideWidth + 'px'; 
  slidesContainer.style.transform = `translateX(${translateX})`; 
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentSlideIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateCarousel();
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000); 
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => goToSlide(index));
});

startAutoplay(); 

carouselContainer.addEventListener('mouseover', stopAutoplay); 
carouselContainer.addEventListener('mouseout', startAutoplay); 

updateCarousel();
})