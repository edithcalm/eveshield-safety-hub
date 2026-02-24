/**
 * ROUTER.JS
 * ---------
 * Handles page navigation without full reloads (Single Page App).
 * Uses the hash (#/path) so it works when opening index.html as a file.
 */

(function () {
  'use strict';

  /**
   * Router class: stores routes and shows the right "page" for each URL.
   */
  function Router() {
    // Map of path (e.g. '/contact') to function that renders that page
    this.routes = {};
    // Current path (e.g. '/', '/contact')
    this.currentPath = getPathFromHash();
    this.init();
  }

  /**
   * Get the path from the URL hash.
   * #/contact -> '/contact', # -> '/', empty hash -> '/'
   */
  function getPathFromHash() {
    var hash = window.location.hash.slice(1);
    if (!hash || hash === '') return '/';
    if (hash.charAt(0) !== '/') hash = '/' + hash;
    
    // Validate and sanitize path
    var validPath = hash.replace(/[^a-zA-Z0-9\/\-_]/g, '');
    if (validPath.length === 0) return '/';
    
    // Limit path length to prevent abuse
    if (validPath.length > 100) return '/';
    
    return validPath;
  }

  /**
   * Set up listeners: hash changes (back/forward) and link clicks.
   */
  Router.prototype.init = function () {
    var self = this;

    // When user uses browser back/forward, update view
    window.addEventListener('hashchange', function () {
      self.currentPath = getPathFromHash();
      self.navigate(self.currentPath, false);
    });

    // When user clicks a link, intercept and use our router
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[data-path], a[href^="#"], a[href^="/"]');
      if (!link) return;

      var href = link.getAttribute('href');
      var path = link.getAttribute('data-path') || href;

      // Support both "#/contact" and "/contact"
      if (path && path.indexOf('#') === 0) path = path.slice(1) || '/';
      if (path && path.charAt(0) !== '/') path = '/' + path;

      // Only handle our own site links
      if (path && path !== self.currentPath) {
        e.preventDefault();
        self.navigate(path);
      }
    });

    // Load the page for the current URL
    this.navigate(this.currentPath, false);
  };

  /**
   * Register a path with a handler function.
   * @param {string} path - e.g. '/', '/contact', '*' for 404
   * @param {function} handler - function that renders the page content
   */
  Router.prototype.register = function (path, handler) {
    this.routes[path] = handler;
  };

  /**
   * Navigate to a path: update URL, active links, and run the page handler.
   * @param {string} path - path to show (e.g. '/contact')
   * @param {boolean} pushState - if true, update the hash in the URL
   */
  Router.prototype.navigate = function (path, pushState) {
    if (pushState === undefined) pushState = true;

    this.currentPath = path;

    // Update the URL hash so back/forward and refresh work
    if (pushState) {
      window.location.hash = path === '/' ? '#/' : '#/' + path.replace(/^\//, '');
    }

    // Mark the current page in the nav and footer (so user sees which page is active)
    var selector = '.nav-link, .nav-link-mobile, .footer-link';
    var links = document.querySelectorAll(selector);
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var linkPath = link.getAttribute('data-path') || link.getAttribute('href') || '';
      if (linkPath.indexOf('#') === 0) linkPath = linkPath.slice(1) || '/';
      if (linkPath.charAt(0) !== '/') linkPath = '/' + linkPath;
      if (linkPath === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }

    // Close mobile menu when changing page
    var mobileMenu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      if (menuIcon) menuIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Find and run the handler for this path (or 404)
    var handler = this.routes[path] || this.routes['*'];
    if (handler) handler();
  };

  // Create one global router for the app
  window.router = new Router();
})();
