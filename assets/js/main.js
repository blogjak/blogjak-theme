/* ============================================
   Blogjak Theme Versi 2 — Main JavaScript
   ============================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Dark Mode Toggle ---------- */
  function setThemeIcon(theme) {
    var icons = document.querySelectorAll('.theme-icon');
    icons.forEach(function (icon) {
      icon.className = 'theme-icon fa-solid ' + (theme === 'dark' ? 'fa-sun' : 'fa-moon');
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('blogjak-theme', theme); } catch (e) {}
    setThemeIcon(theme);
  }

  // Init ikon sesuai theme saat ini
  setThemeIcon(root.getAttribute('data-theme') || 'light');

  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

  // Ikuti perubahan sistem jika user belum override
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem('blogjak-theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /* ---------- Hamburger Menu ---------- */
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Tutup menu saat link diklik
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Tutup menu saat klik di luar
    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
