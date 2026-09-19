/* ============================================
   Blogjak Theme Versi 2 — Main JavaScript
   Universal compatibility version
   ============================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Dark Mode Toggle ---------- */
  function getThemeColor(theme) {
    return theme === 'dark' ? '#FFA500' : '#1e3a8a';
  }

  function setThemeIcon(theme) {
    var color = getThemeColor(theme);
    var iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon';

    // Update semua ikon (apapun parentnya)
    document.querySelectorAll('.theme-icon').forEach(function (icon) {
      icon.className = 'theme-icon fa-solid ' + iconClass;
      // PAKSA inline style — jaminan terlihat walau CSS gagal load
      icon.style.cssText =
        'color:' + color + ' !important;' +
        '-webkit-text-fill-color:' + color + ' !important;' +
        'display:inline-block !important;' +
        'visibility:visible !important;' +
        'opacity:1 !important;' +
        'font-size:20px !important;' +
        'line-height:1 !important;' +
        'pointer-events:none;';
    });

    // Update warna tombol juga
    document.querySelectorAll('.theme-toggle, .theme-switch-btn').forEach(function (btn) {
      btn.style.color = color;
      btn.style.webkitTextFillColor = color;
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('blogjak-theme', theme); } catch (e) {}
    setThemeIcon(theme);
  }

  // Init — pakai theme yang sudah di-set oleh bootstrap script
  setThemeIcon(root.getAttribute('data-theme') || 'light');

  // Bind semua tombol toggle
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });

  // Ikuti perubahan sistem (jika user belum override)
  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('blogjak-theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    } catch (err) {}
  }

  /* ---------- Hamburger Menu ---------- */
  var hamburger = document.getElementById('hamburger') || document.querySelector('.hamburger');
  var navMenu = document.getElementById('nav-menu') || document.querySelector('.nav-menu, .nav-links');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
