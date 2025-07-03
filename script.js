const wrapper = document.querySelector('.card-wrapper');
const dots = document.querySelectorAll('.dot');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.reviewc1');
let currentIndex = 0;

function showSlide(index) {
  const card = cards[index];
  const cardWidth = card.offsetWidth + 20; // 20px for margin (10px each side)
  const visibleWidth = carousel.offsetWidth;
  const offset = (cardWidth * index) - (visibleWidth / 2) + (cardWidth / 2);
  wrapper.style.transform = `translateX(-${offset}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    showSlide(currentIndex);
  });
});

window.addEventListener('resize', () => showSlide(currentIndex));

showSlide(currentIndex);