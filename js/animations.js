/**
 * Scroll Reveals, Live Clocks, Counters & Motion Observers
 */

export function initAnimations() {
  initScrollReveals();
  initHeaderScroll();
  initLocalTime();
  initBackToTop();
}

// 1. IntersectionObserver for Editorial Scroll Reveals
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-fade-up, .project-case-study, .stack-category-card, .service-row, .journey-milestone-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `
    .is-revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// 2. Header State on Scroll
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

// 3. Live Delhi (IST) Clock
function initLocalTime() {
  const timeElements = document.querySelectorAll('.delhi-live-clock');

  function update() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const timeStr = formatter.format(now);
      timeElements.forEach((el) => {
        el.textContent = `${timeStr} IST`;
      });
    } catch (err) {
      timeElements.forEach((el) => {
        el.textContent = 'DELHI, IN';
      });
    }
  }

  update();
  setInterval(update, 1000);
}

// 4. Back to Top Interactive Widget
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top-btn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backBtn.classList.add('is-visible');
    } else {
      backBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}