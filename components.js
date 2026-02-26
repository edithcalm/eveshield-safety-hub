/**
 * COMPONENTS.JS
 * -------------
 * Reusable UI behavior: animated counters, scroll-in sections,
 * navbar scroll effect, mobile menu. Safe to run multiple times
 * for dynamic content; static parts (navbar, menu) init only once.
 */

(function () {
  'use strict';

  var staticComponentsInitialized = false;

  /**
   * AnimatedCounter: when the card scrolls into view, the number
   * counts up from 0 to the target (e.g. 34 for 34%).
   */
  function AnimatedCounter(element, options) {
    this.element = element;
    this.end = parseInt(options.end || 0, 10);
    this.prefix = options.prefix || '';
    this.suffix = options.suffix || '%';
    this.duration = options.duration || 2000;
    this.count = 0;
    this.isVisible = false;
    this.observer = null;
    this.intervalId = null;
    this.startObserving();
  }

  AnimatedCounter.prototype.startObserving = function () {
    var self = this;
    this.observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !self.isVisible) {
            self.isVisible = true;
            // Proper cleanup
            if (self.observer) {
              self.observer.disconnect();
              self.observer = null;
            }
            self.runAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.element);
  };

  AnimatedCounter.prototype.runAnimation = function () {
    var self = this;
    var step = 16; // ~60fps
    var steps = Math.max(1, Math.floor(this.duration / step));
    var increment = this.end / steps;
    var current = 0;

    this.intervalId = setInterval(function () {
      current += increment;
      if (current >= self.end) {
        current = self.end;
        // Proper cleanup
        if (self.intervalId) {
          clearInterval(self.intervalId);
          self.intervalId = null;
        }
      }
      self.updateDisplay(Math.floor(current));
    }, step);
  };

  // Add cleanup method
  AnimatedCounter.prototype.cleanup = function () {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  AnimatedCounter.prototype.updateDisplay = function (value) {
    var el = this.element.querySelector('.counter-value');
    if (el) {
      el.textContent = this.prefix + value + this.suffix;
    }
  };

  /**
   * SectionWrapper: when the section scrolls into view, add the class
   * "visible" so it fades/slides in (CSS handles the animation).
   */
  function SectionWrapper(element) {
    this.element = element;
    this.isVisible = false;
    this.observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.element);
  }

  /**
   * Run only once: navbar scroll effect and mobile menu toggle.
   * These are on the static HTML, so we must not add listeners twice.
   */
  function initStaticComponents() {
    if (staticComponentsInitialized) return;
    staticComponentsInitialized = true;

    // Navbar: add background when user scrolls down
    var navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }

    // Mobile menu toggle
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    var menuText = document.querySelector('.menu-text');
    var closeText = document.querySelector('.close-text');

    if (mobileMenuToggle && menuText && closeText) {
      mobileMenuToggle.addEventListener('click', function () {
        var mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          var isOpen = mobileMenu.classList.toggle('open');
          if (isOpen) {
            menuText.style.display = 'none';
            closeText.style.display = 'block';
          } else {
            menuText.style.display = 'block';
            closeText.style.display = 'none';
          }
        }
      });
    }

    // Footer: show current year
    var yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * Run every time page content changes: animate counters and
   * section wrappers in the new HTML.
   */
  function initDynamicComponents() {
    // Count-up numbers in counter cards
    var cards = document.querySelectorAll('.counter-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var valueEl = card.querySelector('.counter-value');
      if (!valueEl) continue;
      var end = parseInt(card.getAttribute('data-end') || '0', 10);
      var prefix = card.getAttribute('data-prefix') || '';
      var suffix = card.getAttribute('data-suffix') || '%';
      new AnimatedCounter(card, { end: end, prefix: prefix, suffix: suffix });
    }

    // Fade-in sections when they scroll into view
    var wrappers = document.querySelectorAll('.section-wrapper');
    for (var j = 0; j < wrappers.length; j++) {
      new SectionWrapper(wrappers[j]);
    }
  }

  /**
   * Public: call this on first load and after each page content update.
   * Ensures static parts init once and dynamic parts run for the new content.
   */
  function initComponents() {
    initStaticComponents();
    initDynamicComponents();
  }

  // Expose for app.js and global use
  window.AnimatedCounter = AnimatedCounter;
  window.SectionWrapper = SectionWrapper;
  window.initComponents = initComponents;
})();
