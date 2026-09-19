/* ============================================
   Blogjak Theme v2.1 — Search Engine (FINAL)
   ============================================ */
(function () {
  'use strict';

  function init() {
    var modal = document.getElementById('search-modal');
    var input = document.getElementById('search-input');
    var results = document.getElementById('search-results');

    if (!modal || !input || !results) {
      console.warn('[Blogjak Search] Modal not found');
      return;
    }

    var openBtns = document.querySelectorAll('[data-search-open]');
    var closeEls = document.querySelectorAll('[data-search-close]');

    var searchData = [];
    var selectedIndex = -1;
    var maxResults = 10;

    // Deteksi baseurl
    var baseurl = '';
    try {
      baseurl = '{{ site.baseurl }}' || '';
    } catch (e) {}
    // Fallback: derive dari path kalau perlu
    if (!baseurl) {
      var meta = document.querySelector('meta[name="baseurl"]');
      if (meta) baseurl = meta.getAttribute('content') || '';
    }

    function loadIndex() {
      var url = baseurl + '/search.json';
      fetch(url)
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.json();
        })
        .then(function (data) {
          searchData = data;
          console.log('[Blogjak Search] Index loaded:', searchData.length, 'posts');
        })
        .catch(function (err) {
          console.error('[Blogjak Search] Failed to load index:', err);
        });
    }

    function openModal() {
      modal.hidden = false;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { input.focus(); }, 80);
      if (searchData.length === 0) loadIndex();
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(function () {
        modal.hidden = true;
        input.value = '';
        results.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Ketik kata kunci untuk mulai mencari...</p>';
        selectedIndex = -1;
      }, 250);
    }

    // Bind tombol search — pastikan tidak double bind
    openBtns.forEach(function (btn) {
      if (btn.dataset.searchBound === 'true') return;
      btn.dataset.searchBound = 'true';

      // Event handler robust: dukung klik & touch
      var handler = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (modal.hidden || !modal.classList.contains('active')) {
          openModal();
        } else {
          closeModal();
        }
      };

      btn.addEventListener('click', handler, { passive: false });
    });

    // Bind tombol close
    closeEls.forEach(function (el) {
      if (el.dataset.searchBound === 'true') return;
      el.dataset.searchBound = 'true';
      el.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
      });
    });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (modal.hidden) openModal(); else closeModal();
      } else if (e.key === 'Escape' && !modal.hidden) {
        closeModal();
      } else if (!modal.hidden) {
        var items = results.querySelectorAll('.search-result-item');
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
          updateSelection(items);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = Math.max(selectedIndex - 1, 0);
          updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0 && items[selectedIndex]) {
          e.preventDefault();
          window.location.href = items[selectedIndex].href;
        }
      }
    });

    function updateSelection(items) {
      items.forEach(function (item, i) {
        item.classList.toggle('selected', i === selectedIndex);
      });
      if (items[selectedIndex]) {
        items[selectedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }

    // Search logic
    function normalize(str) {
      return String(str || '').toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }
    function escapeHtml(s) {
      return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function truncate(s, len) {
      if (!s) return '';
      return s.length <= len ? s : s.substring(0, len).trim() + '…';
    }
    function highlight(text, tokens) {
      if (!tokens.length) return text;
      var pattern = '(' + tokens.map(function (t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }).join('|') + ')';
      return text.replace(new RegExp(pattern, 'gi'), '<mark>$1</mark>');
    }
    function scoreItem(item, tokens) {
      var title = normalize(item.title);
      var desc = normalize(item.description);
      var content = normalize(item.content);
      var cats = normalize((item.categories || []).join(' '));
      var tags = normalize((item.tags || []).join(' '));
      var score = 0;
      tokens.forEach(function (t) {
        if (title.indexOf(t) >= 0) score += 100;
        if (title.indexOf(t) === 0) score += 50;
        if (tags.indexOf(t) >= 0) score += 40;
        if (cats.indexOf(t) >= 0) score += 30;
        if (desc.indexOf(t) >= 0) score += 20;
        if (content.indexOf(t) >= 0) score += 5;
      });
      return score;
    }

    function performSearch(query) {
      var normalized = normalize(query);
      if (normalized.length < 2) {
        results.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Ketik minimal 2 karakter...</p>';
        return;
      }
      var tokens = normalized.split(' ').filter(Boolean);
      var scored = searchData
        .map(function (item) { return { item: item, score: scoreItem(item, tokens) }; })
        .filter(function (r) { return r.score > 0; })
        .sort(function (a, b) { return b.score - a.score; })
        .slice(0, maxResults);

      if (scored.length === 0) {
        results.innerHTML = '<p class="search-empty"><i class="fa-solid fa-circle-question"></i> Tidak ada hasil untuk "<strong>' + escapeHtml(query) + '</strong>"</p>';
        return;
      }

      var html = '<div class="search-count">' + scored.length + ' hasil ditemukan</div>';
      scored.forEach(function (r) {
        var item = r.item;
        html += '<a class="search-result-item" href="' + item.url + '">';
        html += '<div class="search-result-title">' + highlight(escapeHtml(item.title), tokens) + '</div>';
        html += '<div class="search-result-meta">';
        html += '<span><i class="fa-regular fa-calendar"></i>' + item.date + '</span>';
        if (item.categories && item.categories.length) {
          html += '<span class="search-result-cat">' + escapeHtml(item.categories[0]) + '</span>';
        }
        html += '</div>';
        html += '<div class="search-result-excerpt">' + highlight(escapeHtml(truncate(item.description, 150)), tokens) + '</div>';
        html += '</a>';
      });
      results.innerHTML = html;
      selectedIndex = -1;
    }

    var debounceTimer;
    input.addEventListener('input', function (e) {
      clearTimeout(debounceTimer);
      var value = e.target.value;
      debounceTimer = setTimeout(function () { performSearch(value); }, 150);
    });

    // Load index on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadIndex);
    } else {
      setTimeout(loadIndex, 1500);
    }
  }

  // Re-init setiap kali DOM berubah (fix mobile)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('load', init);

  // Expose untuk halaman yang butuh re-init
  window.__blogjakSearchInit = init;
})();
