/* ============================================================
   main.js — Blogjak Theme Versi 2
   Dark mode toggle: klik tombol Sun/Moon, simpan pilihan di
   localStorage, dan tetap sinkron jika preferensi sistem
   berubah (selama user belum pernah memilih manual).
============================================================ */
(function () {
  var root = document.documentElement;
  var toggleBtn = document.getElementById('theme-toggle');
  var STORAGE_KEY = 'blogjak-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

  // Ikuti perubahan preferensi sistem hanya jika user belum memilih manual
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
