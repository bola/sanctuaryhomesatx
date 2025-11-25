/**
 * Sanctuary Custom Homes - Main JavaScript
 * Interactive functionality for the website
 */

// ===== HEADER SCROLL BEHAVIOR =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');

    // Toggle hamburger animation
    mobileMenuToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileMenuToggle.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileNav.classList.remove('open');
      mobileMenuToggle.classList.remove('active');
    }
  });
}

// ===== HERO CAROUSEL =====
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
const slideInterval = 10000; // 10 seconds

function showNextSlide() {
  if (heroSlides.length === 0) return;

  // Remove active class from current slide
  heroSlides[currentSlide].classList.remove('active');

  // Calculate next slide
  currentSlide = (currentSlide + 1) % heroSlides.length;

  // Add active class to next slide
  heroSlides[currentSlide].classList.add('active');
}

// Start carousel if there are slides
if (heroSlides.length > 1) {
  setInterval(showNextSlide, slideInterval);
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Don't prevent default for # links
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');

        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe all images with data-src attribute
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== FADE IN ON SCROLL ANIMATION =====
if ('IntersectionObserver' in window) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in-scroll');
  fadeElements.forEach(el => fadeObserver.observe(el));
}

// ===== FORM VALIDATION =====
const forms = document.querySelectorAll('form[data-validate]');

forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
      // Remove previous error
      input.classList.remove('error');
      const errorEl = input.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.remove();

      // Validate
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');

        const error = document.createElement('span');
        error.className = 'form-error';
        error.textContent = 'This field is required';
        input.parentElement.appendChild(error);
      }

      // Email validation
      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
          input.classList.add('error');

          const error = document.createElement('span');
          error.className = 'form-error';
          error.textContent = 'Please enter a valid email address';
          input.parentElement.appendChild(error);
        }
      }

      // Phone validation
      if (input.type === 'tel' && input.value) {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneRegex.test(input.value)) {
          isValid = false;
          input.classList.add('error');

          const error = document.createElement('span');
          error.className = 'form-error';
          error.textContent = 'Please enter a valid phone number';
          input.parentElement.appendChild(error);
        }
      }
    });

    if (isValid) {
      // Form is valid, you can submit it
      console.log('Form is valid, submitting...');
      // form.submit(); // Uncomment when ready to actually submit

      // For now, show success message
      alert('Thank you! We will be in touch soon.');
      form.reset();
    }
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.hasAttribute('required') && !this.value.trim()) {
        this.classList.add('error');
      } else {
        this.classList.remove('error');
        const errorEl = this.parentElement.querySelector('.form-error');
        if (errorEl) errorEl.remove();
      }
    });

    input.addEventListener('input', function() {
      if (this.classList.contains('error') && this.value.trim()) {
        this.classList.remove('error');
        const errorEl = this.parentElement.querySelector('.form-error');
        if (errorEl) errorEl.remove();
      }
    });
  });
});

// ===== CURRENT YEAR IN FOOTER =====
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
  el.textContent = new Date().getFullYear();
});

console.log('Sanctuary Custom Homes - Website Loaded');
