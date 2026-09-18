# Blogjak Theme (Version 2)

A clean, modern, and lightweight Jekyll theme designed for post publishing using pure Markdown. Features dynamic pagination, dark mode, and responsive image gallery layouts.

---

## 🇬🇧 English Documentation

### Features
- **Pure Markdown Workflow**: Write your posts directly in Markdown (`_posts/`) without modifying HTML or JSON manually.
- **Dark Mode Switch**: Native dark mode toggle with automatic preference saving (`localStorage`) and system dark mode detection.
- **Dynamic Pagination**: Built-in pagination with multi-navigation buttons (First `«`, Previous `‹`, Next `›`, Last `»`, and Page Numbers).
- **Image Gallery Grid**: Displays post listings in a responsive grid thumbnail format.
- **SEO & Lightweight**: Fast loading speed with zero heavy JavaScript frameworks.

---

### Folder Structure

```text
blogjak-v2/
├── _config.yml          # Jekyll configuration
├── _includes/
│   ├── header.html      # Navbar and theme switch button
│   └── footer.html      # Footer content
├── _layouts/
│   ├── default.html     # Base site layout
│   └── post.html        # Single article post layout
├── _posts/
│   └── YYYY-MM-DD-title.md # Your Markdown post files
├── assets/
│   └── css/
│       └── styles.css   # Main stylesheet (with Dark Mode variables)
├── README.md            # Theme documentation
└── index.html           # Homepage layout with gallery grid and pagination
```

---

### Installation & Quick Start

1. **Clone or Download** this repository into your Jekyll site directory.
2. **Configure `_config.yml`**:
   Make sure `jekyll-paginate` plugin is installed/enabled:
   ```yaml
   plugins:
     - jekyll-paginate

   paginate: 6
   paginate_path: "/page:num/"
   ```
3. **Build and Run Locally**:
   ```bash
   bundle exec jekyll serve
   ```

---

### How to Add a New Post

Simply add a new `.md` file inside the `_posts/` folder using the naming format `YYYY-MM-DD-title-slug.md`.

Example: `_posts/2026-03-05-my-first-post.md`

```markdown
---
layout: post
title: "My First Blog Post"
date: 2026-03-05
image: "https://via.placeholder.com/600x400"
---

Write your content in **Markdown** format here!

### Features
- Item 1
- Item 2
```

---
---

## 🇮🇩 Dokumentasi Bahasa Indonesia

### Fitur Utama
- **Alur Kerja Markdown Murni**: Tulis artikel Anda secara langsung dalam format Markdown (`_posts/`) tanpa perlu mengedit HTML atau JSON manual.
- **Dukungan Dark Mode**: Saklar pemindah mode gelap otomatis menyimpan preferensi (`localStorage`) serta mendeteksi mode bawaan perangkat.
- **Pagination Dinamis**: Sistem navigasi halaman lengkap dengan tombol navigasi ganda (Awal `«`, Sebelumnya `‹`, Selanjutnya `›`, Akhir `»`, dan Nomor Halaman).
- **Galeri Foto Grid**: Menampilkan daftar artikel dalam bentuk *grid thumbnail* yang responsif.
- **Ringan & Cepat**: Performa memuat halaman yang optimal tanpa *framework* JavaScript berlebih.

---

### Struktur Folder

```text
blogjak-v2/
├── _config.yml          # Konfigurasi utama Jekyll
├── _includes/
│   ├── header.html      # Navigasi atas dan tombol mode gelap
│   └── footer.html      # Konten kaki halaman
├── _layouts/
│   ├── default.html     # Layout dasar situs
│   └── post.html        # Layout khusus untuk halaman artikel
├── _posts/
│   └── TTTT-BB-HH-judul.md # Berkas artikel Markdown Anda
├── assets/
│   └── css/
│       └── styles.css   # Lembar gaya utama (dengan variabel Dark Mode)
├── README.md            # Dokumen petunjuk penggunaan
└── index.html           # Halaman utama dengan tampilan galeri & pagination
```

---

### Cara Pemasangan & Penggunaan

1. **Unduh atau Clone** repositori ini ke dalam direktori Jekyll Anda.
2. **Atur `_config.yml`**:
   Pastikan plugin `jekyll-paginate` aktif pada konfigurasi:
   ```yaml
   plugins:
     - jekyll-paginate

   paginate: 6
   paginate_path: "/page:num/"
   ```
3. **Jalankan Jekyll**:
   ```bash
   bundle exec jekyll serve
   ```

---

### Cara Menambahkan Artikel Baru

Cukup buat berkas `.md` baru di dalam folder `_posts/` menggunakan format nama berkas `TTTT-BB-HH-judul-artikel.md`.

Contoh: `_posts/2026-03-05-postingan-pertama.md`

```markdown
---
layout: post
title: "Postingan Pertama Saya"
date: 2026-03-05
image: "https://via.placeholder.com/600x400"
---

Tulis konten Anda menggunakan format **Markdown** di sini!

### Keunggulan
- Poin 1
- Poin 2
```

---

## License

Distributed under the MIT License. Feel free to modify and adapt for personal or commercial use.
