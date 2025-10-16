// Reveal elements on scroll
const fadeElements = document.querySelectorAll('.scroll-fade');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.remove('opacity-0', 'translate-y-8');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);