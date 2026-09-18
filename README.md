# Blogjak Theme Versi 2

Tema Jekyll **native** dengan alur kerja pure Markdown, dark mode, image gallery grid, dan pagination dinamis.

## Fitur

- **Pure Markdown** — tambah artikel baru hanya dengan membuat berkas `.md` di `_posts/`. Tidak ada JSON atau HTML manual per artikel.
- **Dark Mode** — deteksi otomatis preferensi sistem, tombol toggle ikon Sun/Moon, tersimpan di `localStorage`.
- **Image Gallery Grid** — beranda menampilkan postingan sebagai grid galeri gambar responsif.
- **Pagination Dinamis** — plugin `jekyll-paginate` bawaan Jekyll, lengkap dengan First («), Previous (‹), nomor halaman, Next (›), dan Last (»).
- **Layout Responsif** — header dengan hamburger menu mobile, footer dengan ikon sosial media FontAwesome, dan dukungan penuh elemen Markdown (`<details>`, checklist, blockquote, dll).

## Struktur Proyek

```
blogjak-theme-v2/
├── _config.yml
├── Gemfile
├── index.html
├── about.html
├── contact.html
├── _layouts/
│   ├── default.html
│   └── post.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── pagination.html
├── _posts/
│   └── 2026-03-05-contoh-artikel.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
```

## Instalasi & Menjalankan Secara Lokal

1. Pastikan Ruby & Bundler sudah terpasang.
2. Instal dependensi:
   ```bash
   bundle install
   ```
3. Jalankan server pengembangan:
   ```bash
   bundle exec jekyll serve
   ```
4. Buka `http://localhost:4000` di browser.

## Menambah Artikel Baru

Cukup buat berkas baru di `_posts/` dengan format nama `YYYY-MM-DD-judul-artikel.md`, misalnya:

```
_posts/2026-04-01-artikel-baru.md
```

Isi dengan *front matter* berikut, lalu tulis kontennya dalam Markdown:

```markdown
---
layout: post
title: "Judul Artikel Baru"
date: 2026-04-01 09:00:00 +0700
categories: [kategori]
tags: [tag1, tag2]
author: Nama Anda
gallery_image: /assets/img/nama-gambar.jpg
excerpt: "Ringkasan singkat artikel untuk galeri dan meta description."
---

Isi artikel dalam **Markdown** di sini...
```

Artikel akan otomatis muncul di galeri beranda beserta paginasinya — tanpa perlu menyunting berkas lain.

## Konfigurasi

Semua pengaturan situs (judul, deskripsi, menu navigasi, media sosial, jumlah artikel per halaman) diatur di `_config.yml`.

```yaml
paginate: 6                # jumlah artikel per halaman
paginate_path: "/page:num/"
```

## Kustomisasi Warna / Dark Mode

Ubah variabel warna di `assets/css/styles.css` pada selector `:root` (light mode) dan `[data-theme="dark"]` (dark mode).

## Deploy ke GitHub Pages

1. Push repo ini ke GitHub.
2. Aktifkan GitHub Pages di **Settings → Pages**, pilih branch `main` (atau `gh-pages`).
3. Sesuaikan `url` dan `baseurl` di `_config.yml` dengan alamat GitHub Pages Anda.

> **Catatan:** GitHub Pages mendukung `jekyll-paginate` secara native tanpa konfigurasi tambahan.
