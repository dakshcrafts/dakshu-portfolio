/**
 * Master Application Orchestration for Dakshu Portfolio
 */

import { PORTFOLIO_DATA } from './data.js';
import { initCursor } from './cursor.js';
import { initAnimations } from './animations.js';
import { initProjectMockups } from './mockups.js';

// 1. Web Audio API Tactile Sound Synthesizer
class SoundEngine {
  constructor() {
    this.enabled = false;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick(freq = 600) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  playAlarm() {
    if (!this.enabled || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.12);
        osc.stop(this.ctx.currentTime + idx * 0.12 + 0.2);
      });
    } catch (e) {}
  }
}

// 2. Preloader Lifecycle
function runPreloader(callback) {
  const preloader = document.querySelector('.site-preloader');
  const counterEl = document.querySelector('.preloader-counter');
  const progressBar = document.querySelector('.preloader-progress-bar');
  if (!preloader || !counterEl) {
    if (callback) callback();
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      counterEl.textContent = '100';
      if (progressBar) progressBar.style.width = '100%';

      setTimeout(() => {
        preloader.classList.add('is-hidden');
        if (callback) callback();
      }, 350);
    } else {
      counterEl.textContent = progress < 10 ? ('0' + progress) : ('' + progress);
      if (progressBar) progressBar.style.width = progress + '%';
    }
  }, 35);
}

// 3. Dynamic Year & Copy Handler
function initUtilities(soundEngine) {
  const yearEl = document.querySelector('.current-year-display');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toast = document.querySelector('.toast-notification');
  const toastText = document.querySelector('.toast-text');

  function showToast(msg) {
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.add('is-active');
    setTimeout(() => {
      toast.classList.remove('is-active');
    }, 2800);
  }

  const copyTriggers = document.querySelectorAll('[data-copy]');
  copyTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-copy');
      if (val) {
        navigator.clipboard.writeText(val).then(() => {
          showToast('Copied ' + val + ' to clipboard!');
          soundEngine.playClick(880);
        });
      }
    });
  });

  const soundBtn = document.querySelector('.sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEngine.init();
      soundEngine.enabled = !soundEngine.enabled;
      soundBtn.classList.toggle('is-active', soundEngine.enabled);
      soundBtn.setAttribute('aria-label', soundEngine.enabled ? 'Mute Sound' : 'Enable Sound');
      if (soundEngine.enabled) {
        soundEngine.playClick(660);
        showToast('Tactile audio feedback enabled');
      } else {
        showToast('Audio muted');
      }
    });
  }

  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileClose = document.querySelector('.mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      soundEngine.playClick(500);
    });
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  if (mobileClose) mobileClose.addEventListener('click', closeMobileDrawer);
  drawerLinks.forEach((link) => link.addEventListener('click', closeMobileDrawer));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileDrawer();
  });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  const soundEngine = new SoundEngine();

  runPreloader(() => {
    initCursor();
    initAnimations();
    initProjectMockups(soundEngine);
    initUtilities(soundEngine);
  });
});