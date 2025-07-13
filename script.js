function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }


const toggleBtn = document.querySelector('.toggle');
const themeIcon = document.getElementById('theme-icon');


function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.src = 'crescent-moon.png'; // Use your dark mode icon
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeIcon.src = 'sun2.png'; // Use your light mode icon
  }
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

toggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
});



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
