# Blogjak Theme — Cheat Sheet untuk AI

## Struktur
- Root: index.html, about.md, contact.md, categories.md, tags.md
- Layout: _layouts/default.html, post.html, category.html, tag.html
- Include: _includes/head.html, header.html, footer.html, search-modal.html, related-posts.html
- Assets: assets/css/styles.css, assets/js/main.js, assets/js/search.js
- Config: _config.yml (baseurl: "/blog")

## CSS Variable
- Warna: --royal-blue, --royal-blue-3, --orange, --orange-2, --black, --white
- Background: --bg, --bg-elev, --bg-soft
- Text: --text, --text-muted
- Border: --border
- Aksen: --accent, --accent-hover
- Layout: --radius, --radius-sm, --shadow, --shadow-lg
- Font: --font-sans, --font-mono

## Class Tersedia
- Layout: .container, .site-main, .site-header, .site-footer
- Card: .card, .card-image, .card-body, .card-title, .card-excerpt
- Button: .btn, .btn-primary
- Post: .post-header, .post-title, .post-description, .post-content, .post-meta
- Empty state: .empty-state
- Pagination: .pagination, .current, .disabled

## Aturan Wajib
1. Semua link pakai `{{ '/path/' | relative_url }}`
2. CSS di-scope `.slug-page`
3. JS dibungkus IIFE + guard `window.__slugInitialized`
4. Tidak override tag global (body, h2, input)
5. Pakai CSS variable theme
6. Support dark mode otomatis via variable
