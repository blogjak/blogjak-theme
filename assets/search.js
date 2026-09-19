/* ============================================
   Blogjak Theme v2.1 — Search Engine
   Client-side search dengan fuzzy matching
   ============================================ */
(function () {
  'use strict';

  var modal = document.getElementById('search-modal');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var openBtns = document.querySelectorAll('[data-search-open]');
  var closeEls = document.querySelectorAll('[data-search-close]');

  if (!modal || !input || !results) return;

  var BASEURL = (function () {
    // Ambil baseurl dari script tag atau meta
    var meta = document.querySelector('meta[name="baseurl"]');
    if (meta) return meta.getAttribute('content');
    // Fallback: derive from current path
    var path = window.location.pathname;
    var firstSeg = path.split('/').filter(Boolean)[0];
    return firstSeg && !path.match(/\.(html|xml|json)$/) ? '/' + firstSeg : '';
  })();

  var searchData = [];
  var selectedIndex = -1;
  var maxResults = 10;

  /* ---------- Load Search Index ---------- */
  function loadIndex() {
    var url = BASEURL + '/search.json';
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load search index');
        return res.json();
      })
      .then(function (data) {
        searchData = data;
      })
      .catch(function (err) {
        console.error('[Blogjak Search]', err);
      });
  }

  /* ---------- Open / Close Modal ---------- */
  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      modal.classList.add('active');
      setTimeout(function () { input.focus(); }, 100);
    });
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

  openBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeEls.forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  /* ---------- Keyboard Shortcuts ---------- */
  document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + K → buka search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.hidden) openModal(); else closeModal();
      return;
    }
    // "/" → buka search (kecuali sedang mengetik di input)
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openModal();
      return;
    }
    // Esc → tutup
    if (e.key === 'Escape' && !modal.hidden) {
      closeModal();
      return;
    }
    // Navigasi hasil
    if (!modal.hidden) {
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

  /* ---------- Search Logic ---------- */
  function normalize(str) {
    return (str || '').toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function scoreItem(item, tokens) {
    var title = normalize(item.title);
    var desc = normalize(item.description);
    var content = normalize(item.content);
    var cats = normalize((item.categories || []).join(' '));
    var tags = normalize((item.tags || []).join(' '));

    var score = 0;
    tokens.forEach(function (token) {
      if (title.indexOf(token) >= 0) score += 100;
      if (title.indexOf(token) === 0) score += 50; // bonus: prefix match
      if (tags.indexOf(token) >= 0) score += 40;
      if (cats.indexOf(token) >= 0) score += 30;
      if (desc.indexOf(token) >= 0) score += 20;
      if (content.indexOf(token) >= 0) score += 5;
    });
    return score;
  }

  function highlight(text, tokens) {
    var escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var pattern = new RegExp('(' + tokens.map(function (t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('|') + ')', 'gi');
    return text.replace(pattern, '<mark>$1</mark>');
  }

  function performSearch(query) {
    var normalized = normalize(query);
    if (normalized.length < 2) {
      results.innerHTML = '<p class="search-hint"><i class="fa-solid fa-lightbulb"></i> Ketik minimal 2 karakter...</p>';
      return;
    }

    var tokens = normalized.split(' ').filter(Boolean);
    var scored = searchData
      .map(function (item) {
        return { item: item, score: scoreItem(item, tokens) };
      })
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
      html += '  <div class="search-result-title">' + highlight(escapeHtml(item.title), tokens) + '</div>';
      html += '  <div class="search-result-meta">';
      html += '    <span><i class="fa-regular fa-calendar"></i> ' + item.date + '</span>';
      if (item.categories && item.categories.length) {
        html += '    <span class="search-result-cat">' + escapeHtml(item.categories[0]) + '</span>';
      }
      html += '  </div>';
      html += '  <div class="search-result-excerpt">' + highlight(escapeHtml(truncate(item.description, 150)), tokens) + '</div>';
      html += '</a>';
    });
    results.innerHTML = html;
    selectedIndex = -1;
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function truncate(s, len) {
    if (!s) return '';
    if (s.length <= len) return s;
    return s.substring(0, len).trim() + '…';
  }

  /* ---------- Input Listener (debounced) ---------- */
  var debounceTimer;
  input.addEventListener('input', function (e) {
    clearTimeout(debounceTimer);
    var value = e.target.value;
    debounceTimer = setTimeout(function () {
      performSearch(value);
    }, 150);
  });

  /* ---------- Load Index on Idle ---------- */
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadIndex);
  } else {
    setTimeout(loadIndex, 2000);
  }

  /* ---------- Inject Baseurl Meta (untuk search.js) ---------- */
  (function injectMeta() {
    if (!document.querySelector('meta[name="baseurl"]')) {
      var meta = document.createElement('meta');
      meta.name = 'baseurl';
      meta.content = '{{ site.baseurl }}';
      document.head.appendChild(meta);
    }
  })();
})();
