// Intersection Observer — scroll reveal for feature cards
const cards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger each card slightly
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

cards.forEach(card => observer.observe(card));