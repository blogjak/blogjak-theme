markdown
# Blogjak Theme — Version 2

> A clean, native Jekyll theme for pure Markdown blogging with dark mode, gallery grid, and dynamic pagination.
>
> _Tema Jekyll native yang bersih untuk blogging pure Markdown dengan dark mode, gallery grid, dan pagination dinamis._

![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-1e3a8a?logo=jekyll&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-f97316)
![Theme](https://img.shields.io/badge/Theme-Blogjak%20v2-0a0a0a)
![Markdown](https://img.shields.io/badge/Content-Pure%20Markdown-1e3a8a)

---

## 🇬🇧 English

### ✨ Overview

**Blogjak Theme Version 2** is a native Jekyll theme built for writers who want a **frictionless Markdown-first workflow**. Drop a `.md` file into `_posts/`, and it's instantly rendered as a gallery card with its own detail page. No JSON edits. No manual HTML. No database.

Designed with a bold **royal blue / orange / black / white** palette, it's perfect for personal blogs, portfolios, documentation sites, and photo galleries.

---

### 🚀 Features

| Feature | Description |
|---|---|
| 📝 **Pure Markdown Workflow** | Add articles by simply creating `.md` files in `_posts/`. No JSON or HTML editing required. |
| 🌗 **Dark Mode Toggle** | Auto-detects system preference, manual toggle with Sun/Moon icon, persists choice in `localStorage`. |
| 🖼️ **Image Gallery Grid** | Responsive, interactive card grid on the homepage with hover zoom and category badges. |
| 📄 **Native Pagination** | Full navigation controls: First («), Previous (‹), Page Numbers, Next (›), Last (»). Powered by `jekyll-paginate`. |
| 📱 **Fully Responsive** | Mobile hamburger menu, adaptive grid columns, fluid typography. |
| 🧩 **Rich Markdown Support** | Tables, blockquotes, fenced code blocks, `<details>` collapsibles, task checklists, and more. |
| 🎨 **Modern Color Scheme** | Royal Blue, Orange, Black, White — with CSS custom properties for easy theming. |
| 🔗 **Social Media Footer** | FontAwesome icons for GitHub, Twitter, Facebook, Instagram, YouTube, LinkedIn. |
| ⚡ **SEO Ready** | Built-in `jekyll-seo-tag` and `jekyll-sitemap` integration. |
| 📰 **RSS Feed** | Auto-generated via `jekyll-feed`. |

---

### 📁 Project Structure
blogjak-theme/
├── _config.yml # Jekyll configuration
├── Gemfile # Ruby dependencies
├── index.html # Homepage with paginator loop
├── 404.html # Custom 404 page
├── README.md # This file
├── _layouts/
│ ├── default.html # Base layout (dark mode, header, footer)
│ └── post.html # Post detail layout
├── _includes/
│ ├── header.html # Navbar + hamburger + theme toggle
│ └── footer.html # Footer with social icons
├── _posts/
│ └── 2026-03-05-contoh-artikel.md
└── assets/
├── css/
│ └── styles.css # All theme styles
└── js/
└── main.js # Dark mode + hamburger logic

text

---

### ⚙️ Installation

#### 1. Clone or download

```bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
2. Install dependencies
bash
bundle install
3. Configure _config.yml
Set url and baseurl according to your deployment target:

A. Deploying to a project repo (e.g. username.github.io/blogjak-theme/):

yaml
url: "https://username.github.io"
baseurl: "/blogjak-theme"
B. Deploying to a user/org root site (e.g. username.github.io):

yaml
url: "https://username.github.io"
baseurl: ""
C. Deploying with a custom domain:

yaml
url: "https://yourdomain.com"
baseurl: ""
4. Run locally
bash
# Option 1 — Override baseurl for local development
bundle exec jekyll serve --baseurl ""

# Option 2 — Keep baseurl, open with prefix
bundle exec jekyll serve
# → http://localhost:4000/blogjak-theme/
✍️ Writing an Article
Create a new file in _posts/ using the format YYYY-MM-DD-title.md:

markdown
---
layout: post
title: "My First Post"
description: "A short summary shown on the gallery card."
date: 2026-03-05 09:00:00 +0700
categories: [Tutorial, Jekyll]
tags: [markdown, jekyll, blog]
author: Your Name
image: "https://example.com/cover.jpg"
---

Write your article content here in Markdown.

## Heading

- Item one
- Item two

> A blockquote example.
Front matter fields:

Field	Required	Description
layout	✅	Always post
title	✅	Article title
date	✅	Publication timestamp
description	❌	Short summary for cards & SEO
categories	❌	Array; first one becomes the badge
tags	❌	Array of tags
author	❌	Falls back to site.author
image	❌	Cover image URL (gallery card + hero)
🎨 Customization
Change colors
Edit the CSS variables in assets/css/styles.css:

css
:root {
  --royal-blue: #1e3a8a;
  --orange:     #f97316;
  --black:      #0a0a0a;
  --white:      #ffffff;
}
Dark mode variables are defined under [data-theme="dark"] in the same file.

Change posts per page
In _config.yml:

yaml
paginate: 6   # change to any number
Add social links
In _config.yml:

yaml
social:
  github: "https://github.com/yourname"
  twitter: "https://twitter.com/yourname"
  # ... leave blank to hide any icon
Change logo text
Edit _includes/header.html and replace Blogjak / Theme inside .logo-text.

🚀 Deployment
GitHub Pages
Push your project to a GitHub repository.

Go to Settings → Pages.

Under Source, select main branch and / (root).

Wait for the build — your site will be live at:

https://username.github.io/ (root), or

https://username.github.io/repo-name/ (project)

Netlify / Vercel / Cloudflare Pages
Build command: bundle exec jekyll build

Publish directory: _site

Environment: Ruby 3.x

Manual build
bash
bundle exec jekyll build
# Output in _site/
📋 Requirements
Ruby 3.0+

Jekyll 4.3+

Bundler

📄 License
MIT — free for personal and commercial use.

🙏 Credits
Theme by Blogjak

Icons by Font Awesome

Fonts: Inter & JetBrains Mono

🇮🇩 Bahasa Indonesia
✨ Ringkasan
Blogjak Theme Versi 2 adalah tema Jekyll native yang dibuat untuk penulis yang menginginkan alur kerja Markdown tanpa hambatan. Cukup letakkan berkas .md di folder _posts/, dan artikel akan otomatis dirender sebagai kartu galeri dengan halaman detailnya sendiri. Tanpa menyunting JSON. Tanpa menulis HTML manual. Tanpa database.

Menggunakan palet warna royal blue / orange / black / white yang berani, tema ini cocok untuk blog pribadi, portofolio, situs dokumentasi, dan galeri foto.

🚀 Fitur Unggulan
Fitur	Deskripsi
📝 Alur Kerja Pure Markdown	Tambah artikel hanya dengan membuat berkas .md di _posts/. Tidak perlu edit JSON atau HTML.
🌗 Toggle Dark Mode	Deteksi otomatis preferensi sistem, tombol manual dengan ikon Sun/Moon, pilihan tersimpan di localStorage.
🖼️ Gallery Grid Gambar	Grid kartu interaktif yang responsif di halaman utama dengan efek zoom saat hover dan badge kategori.
📄 Pagination Native	Kontrol navigasi lengkap: First («), Previous (‹), Nomor Halaman, Next (›), Last (»). Didukung oleh jekyll-paginate.
📱 Fully Responsive	Hamburger menu di mobile, grid adaptif, dan tipografi yang fluid.
🧩 Dukungan Markdown Kaya	Tabel, blockquote, code block, <details> yang bisa dilipat, checklist, dan lainnya.
🎨 Skema Warna Modern	Royal Blue, Orange, Black, White — dengan CSS custom properties untuk kustomisasi mudah.
🔗 Footer Media Sosial	Ikon FontAwesome untuk GitHub, Twitter, Facebook, Instagram, YouTube, LinkedIn.
⚡ SEO Ready	Integrasi bawaan jekyll-seo-tag dan jekyll-sitemap.
📰 RSS Feed	Otomatis dihasilkan melalui jekyll-feed.
📁 Struktur Proyek
text
blogjak-theme/
├── _config.yml               # Konfigurasi Jekyll
├── Gemfile                   # Dependensi Ruby
├── index.html                # Halaman utama dengan loop paginator
├── 404.html                  # Halaman 404 kustom
├── README.md                 # Berkas ini
├── _layouts/
│   ├── default.html          # Layout induk (dark mode, header, footer)
│   └── post.html             # Layout detail postingan
├── _includes/
│   ├── header.html           # Navbar + hamburger + toggle tema
│   └── footer.html           # Footer dengan ikon sosial media
├── _posts/
│   └── 2026-03-05-contoh-artikel.md
└── assets/
    ├── css/
    │   └── styles.css        # Semua gaya tema
    └── js/
        └── main.js           # Logika dark mode + hamburger
⚙️ Cara Instalasi
1. Clone atau unduh
bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
2. Install dependensi
bash
bundle install
3. Konfigurasi _config.yml
Sesuaikan url dan baseurl sesuai target deployment Anda:

A. Deploy ke repo proyek (contoh: username.github.io/blogjak-theme/):

yaml
url: "https://username.github.io"
baseurl: "/blogjak-theme"
B. Deploy ke root site user/org (contoh: username.github.io):

yaml
url: "https://username.github.io"
baseurl: ""
C. Deploy dengan custom domain:

yaml
url: "https://domain-anda.com"
baseurl: ""
4. Jalankan secara lokal
bash
# Opsi 1 — Override baseurl untuk pengembangan lokal
bundle exec jekyll serve --baseurl ""

# Opsi 2 — Biarkan baseurl, buka dengan prefix
bundle exec jekyll serve
# → http://localhost:4000/blogjak-theme/
✍️ Menulis Artikel
Buat berkas baru di _posts/ dengan format YYYY-MM-DD-judul.md:

markdown
---
layout: post
title: "Artikel Pertama Saya"
description: "Ringkasan singkat yang ditampilkan di kartu galeri."
date: 2026-03-05 09:00:00 +0700
categories: [Tutorial, Jekyll]
tags: [markdown, jekyll, blog]
author: Nama Anda
image: "https://example.com/cover.jpg"
---

Tulis konten artikel di sini menggunakan Markdown.

## Heading

- Item satu
- Item dua

> Contoh blockquote.
Field front matter:

Field	Wajib	Deskripsi
layout	✅	Selalu post
title	✅	Judul artikel
date	✅	Timestamp publikasi
description	❌	Ringkasan untuk kartu & SEO
categories	❌	Array; kategori pertama jadi badge
tags	❌	Array tag
author	❌	Fallback ke site.author
image	❌	URL gambar cover (kartu + hero)
🎨 Kustomisasi
Mengubah warna
Edit CSS variables di assets/css/styles.css:

css
:root {
  --royal-blue: #1e3a8a;
  --orange:     #f97316;
  --black:      #0a0a0a;
  --white:      #ffffff;
}
Variabel dark mode didefinisikan di bawah selector [data-theme="dark"] pada berkas yang sama.

Mengubah jumlah postingan per halaman
Di _config.yml:

yaml
paginate: 6   # ubah ke angka berapa saja
Menambah tautan media sosial
Di _config.yml:

yaml
social:
  github: "https://github.com/namaanda"
  twitter: "https://twitter.com/namaanda"
  # ... biarkan kosong untuk menyembunyikan ikon
Mengubah teks logo
Edit _includes/header.html dan ganti Blogjak / Theme di dalam .logo-text.

🚀 Deployment
GitHub Pages
Push proyek ke repositori GitHub.

Buka Settings → Pages.

Di bagian Source, pilih branch main dan / (root).

Tunggu proses build — situs Anda akan live di:

https://username.github.io/ (root), atau

https://username.github.io/nama-repo/ (proyek)

Netlify / Vercel / Cloudflare Pages
Build command: bundle exec jekyll build

Publish directory: _site

Environment: Ruby 3.x

Build manual
bash
bundle exec jekyll build
# Hasil di folder _site/
📋 Persyaratan
Ruby 3.0+

Jekyll 4.3+

Bundler

📄 Lisensi
MIT — bebas digunakan untuk keperluan pribadi maupun komersial.

🙏 Kredit
Tema oleh Blogjak

Ikon oleh Font Awesome

Font: Inter & JetBrains Mono

<p align="center"> Made with ❤️ using <strong>Jekyll</strong> — <em>Blogjak Theme Versi 2</em> </p> ```
🅱️ Cara B — Generate File Otomatis (Node.js)
Jika Anda ingin file README.md langsung dibuat oleh script, jalankan perintah berikut di root proyek.

B.1 — Simpan script ini sebagai generate-readme.js
javascript
// generate-readme.js
const fs = require('fs');

const readme = `# Blogjak Theme — Version 2

> A clean, native Jekyll theme for pure Markdown blogging with dark mode, gallery grid, and dynamic pagination.
>
> _Tema Jekyll native yang bersih untuk blogging pure Markdown dengan dark mode, gallery grid, dan pagination dinamis._

![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-1e3a8a?logo=jekyll&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-f97316)
![Theme](https://img.shields.io/badge/Theme-Blogjak%20v2-0a0a0a)

---

## 🇬🇧 English

### Overview
**Blogjak Theme Version 2** is a native Jekyll theme for a frictionless Markdown-first workflow. Drop a \`.md\` file into \`_posts/\` and it's instantly rendered as a gallery card with its own detail page.

### Features
- 📝 Pure Markdown workflow (no JSON/HTML editing)
- 🌗 Dark mode toggle with localStorage
- 🖼️ Responsive image gallery grid
- 📄 Native pagination: « ‹ 1 2 3 › »
- 📱 Fully responsive with hamburger menu
- 🧩 Rich Markdown: tables, details, checklists
- 🎨 Royal Blue / Orange / Black / White theme
- 🔗 FontAwesome social icons
- ⚡ SEO + RSS ready

### Quick Start
\`\`\`bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
bundle install
bundle exec jekyll serve --baseurl ""
\`\`\`

### Writing an Article
Create \`_posts/YYYY-MM-DD-title.md\`:
\`\`\`markdown
---
layout: post
title: "My Post"
date: 2026-03-05 09:00:00 +0700
categories: [Tutorial]
tags: [markdown]
image: "https://example.com/cover.jpg"
---
Content here.
\`\`\`

### Deployment
Set \`url\` + \`baseurl\` in \`_config.yml\`, push to GitHub, enable Pages.

### License
MIT

---

## 🇮🇩 Bahasa Indonesia

### Ringkasan
**Blogjak Theme Versi 2** adalah tema Jekyll native untuk alur kerja pure Markdown. Cukup letakkan berkas \`.md\` di \`_posts/\`, otomatis jadi kartu galeri dan halaman detail.

### Fitur
- 📝 Alur kerja Pure Markdown
- 🌗 Toggle dark mode dengan localStorage
- 🖼️ Gallery grid responsif
- 📄 Pagination native: « ‹ 1 2 3 › »
- 📱 Fully responsive + hamburger menu
- 🧩 Markdown kaya: tabel, details, checklist
- 🎨 Palet Royal Blue / Orange / Black / White
- 🔗 Ikon sosial media FontAwesome
- ⚡ SEO + RSS ready

### Mulai Cepat
\`\`\`bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
bundle install
bundle exec jekyll serve --baseurl ""
\`\`\`

### Menulis Artikel
Buat \`_posts/YYYY-MM-DD-judul.md\`:
\`\`\`markdown
---
layout: post
title: "Artikel Saya"
date: 2026-03-05 09:00:00 +0700
categories: [Tutorial]
tags: [markdown]
image: "https://example.com/cover.jpg"
---
Konten di sini.
\`\`\`

### Deployment
Set \`url\` + \`baseurl\` di \`_config.yml\`, push ke GitHub, aktifkan Pages.

### Lisensi
MIT

---

<p align="center">Made with ❤️ using <strong>Jekyll</strong> — <em>Blogjak Theme Versi 2</em></p>
`;

fs.writeFileSync('README.md', readme, 'utf8');
console.log('✅ README.md berhasil dibuat!');
B.2 — Jalankan
bash
node generate-readme.js
File README.md akan otomatis muncul di folder proyek.

🅲 Cara C — One-Liner Terminal (Tanpa File Script)
Kalau Anda pakai Linux/macOS, bisa langsung jalankan dari terminal:

bash
cat > README.md << 'EOF'
# Blogjak Theme — Version 2

Native Jekyll theme for pure Markdown blogging with dark mode, gallery grid, and pagination.

## 🇬🇧 English

### Features
- Pure Markdown workflow
- Dark mode toggle (localStorage)
- Responsive gallery grid
- Native pagination (« ‹ 1 2 3 › »)
- Mobile hamburger menu
- FontAwesome social footer
- Rich Markdown support

### Quick Start
```bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
bundle install
bundle exec jekyll serve --baseurl ""
🇮🇩 Bahasa Indonesia
Fitur
Alur kerja Pure Markdown

Toggle dark mode (localStorage)

Gallery grid responsif

Pagination native (« ‹ 1 2 3 › »)

Hamburger menu mobile

Footer sosial FontAwesome

Dukungan Markdown kaya

Mulai Cepat
bash
git clone https://github.com/username/blogjak-theme.git
cd blogjak-theme
bundle install
bundle exec jekyll serve --baseurl ""
License
MIT — Blogjak Theme Versi 2
EOF

echo "✅ README.md berhasil dibuat!"

text

Untuk **Windows PowerShell**, gunakan:

```powershell
@'
# Blogjak Theme — Version 2

(Nanti isi konten di sini...)
'@ | Out-File -Encoding utf8 README.md
📌 Rekomendasi
Situasi	Cara yang disarankan
Ingin kontrol penuh atas isi	Cara A (copy-paste penuh)
Sudah familiar Node.js	Cara B (script .js)
Ingin otomasi terminal	Cara C (heredoc)
Ingin konten ringkas	Cara C versi ringkas
✅ Verifikasi
Setelah file dibuat, cek dengan:

bash
# Linux / macOS
cat README.md | head -20

# Windows
type README.md
