// Smooth scroll for sidebar navigation
document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 24,
        behavior: 'smooth',
      });
    }
  });
});

// Back-to-top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const threshold = 260;
  if (window.scrollY > threshold) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
