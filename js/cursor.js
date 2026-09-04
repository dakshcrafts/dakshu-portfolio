/**
 * Desktop Custom Magnetic Cursor
 * Smooth 60fps Lerp Tracking & Context Badges
 */

export function initCursor() {
  // Only initialize if device has fine pointer / mouse
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return;
  }

  const cursorContainer = document.querySelector('.custom-cursor');
  if (!cursorContainer) return;

  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  const textBadge = document.querySelector('.custom-cursor-text');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Smooth lerp loop for outer ring
  function render() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  render();

  // Attach hover triggers
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .pill-card, .filter-btn, .service-row, .repo-mini-card');

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      const cursorText = el.getAttribute('data-cursor');
      if (cursorText) {
        document.body.classList.add('cursor-hover-solid');
        textBadge.textContent = cursorText;
      }
    });

    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover', 'cursor-hover-solid');
      textBadge.textContent = '';
    });
  });

  // Dark background detection for cursor contrast
  const darkSections = document.querySelectorAll('.section-dark-bg, .site-preloader');
  const visibleDarkSections = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleDarkSections.add(entry.target);
        else visibleDarkSections.delete(entry.target);
      });
      document.body.classList.toggle('cursor-dark', visibleDarkSections.size > 0);
    },
    { threshold: 0.2 }
  );

  darkSections.forEach((section) => observer.observe(section));
}