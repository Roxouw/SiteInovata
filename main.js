/* ══════════════════════════════════════
   INOVATA — Móveis Sob Medida
   main.js
══════════════════════════════════════ */

// ── Preferências de movimento ──
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Ano atual no footer ──
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Hamburger ──
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
function setMenu(open) {
  hamburger.classList.toggle('open', open);
  navLinks.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
}
hamburger.addEventListener('click', () => setMenu(!hamburger.classList.contains('open')));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

// ── Smooth scroll ──
function smoothScrollTo(targetY, duration) {
  if (reduceMotion) { window.scrollTo(0, targetY); return; }
  const startY = window.scrollY;
  const diff   = targetY - startY;
  let startTime = null;
  const ease = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
  const step = ts => {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * ease(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') { e.preventDefault(); smoothScrollTo(0, 900); return; }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - 72, 900);
    }
  });
});

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── Lightbox ──
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxCap   = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev  = document.getElementById('lightboxPrev');
const lightboxNext  = document.getElementById('lightboxNext');
const galleryItems  = Array.from(document.querySelectorAll('.gallery-item'));
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const item = galleryItems[index];
  lightboxImg.src = item.dataset.src;
  lightboxImg.alt = item.dataset.caption;
  lightboxCap.textContent = item.dataset.caption;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
function showPrev() { currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; openLightbox(currentIndex); }
function showNext() { currentIndex = (currentIndex + 1) % galleryItems.length; openLightbox(currentIndex); }

galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  showPrev();
  if (e.key === 'ArrowRight') showNext();
});