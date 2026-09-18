---
layout: post
title: "Contoh Artikel Blogjak Theme Versi 2"
date: 2026-03-05 09:00:00 +0700
categories: [tutorial]
tags: [jekyll, markdown, dark-mode]
author: Admin Blogjak
cover_image: /assets/img/default-cover.svg
gallery_image: /assets/img/default-cover.svg
excerpt: "Postingan contoh untuk menunjukkan alur kerja pure Markdown — cukup buat berkas .md di folder _posts/, tanpa JSON atau HTML manual."
---

Ini adalah **contoh artikel** untuk menunjukkan bahwa menambah postingan baru di *Blogjak Theme Versi 2* hanya memerlukan satu berkas Markdown di folder `_posts/`. Tidak perlu menyunting berkas JSON apa pun, dan tidak perlu membuat berkas HTML manual untuk setiap artikel — Jekyll akan merender semuanya secara otomatis.

## Menulis Konten Biasa

Anda bisa menulis paragraf, **teks tebal**, *teks miring*, dan [tautan](https://jekyllrb.com) seperti biasa.

### Daftar Bernomor

1. Buat berkas baru di `_posts/` dengan format `YYYY-MM-DD-judul-artikel.md`
2. Isi *front matter* (judul, tanggal, kategori)
3. Tulis konten dalam Markdown
4. Jalankan `bundle exec jekyll serve`

### Daftar Poin

- Mendukung galeri gambar responsif
- Mendukung dark mode otomatis
- Mendukung pagination dinamis

## Checklist Markdown

Elemen checklist GitHub Flavored Markdown didukung penuh:

- [x] Alur kerja pure Markdown
- [x] Dark mode toggle dengan localStorage
- [x] Image gallery grid responsif
- [ ] Fitur pencarian (belum tersedia)
- [ ] Komentar pembaca (belum tersedia)

## Kutipan (Blockquote)

> "Menulis blog seharusnya semudah menulis catatan — cukup Markdown, tanpa ribet." — Tim Blogjak

## Pertanyaan Yang Sering Diajukan (FAQ)

Tema ini mendukung penuh tag `<details>` bawaan HTML untuk membuat bagian FAQ yang bisa dibuka-tutup, langsung ditulis di dalam berkas Markdown:

<details>
<summary>Apakah saya perlu menyunting berkas JSON untuk menambah artikel?</summary>
Tidak. Cukup buat berkas Markdown baru di folder <code>_posts/</code>, dan artikel akan otomatis muncul di galeri beranda beserta paginasinya.
</details>

<details>
<summary>Bagaimana cara mengganti gambar sampul artikel di galeri?</summary>
Atur nilai <code>gallery_image</code> pada front matter berkas Markdown-nya masing-masing.
</details>

<details>
<summary>Apakah dark mode tersimpan otomatis?</summary>
Ya. Pilihan tema pengguna disimpan di <code>localStorage</code> browser, sehingga tetap konsisten saat pengguna kembali membuka situs.
</details>

## Blok Kode

```yaml
paginate: 6
paginate_path: "/page:num/"
```

---

Selamat mencoba menulis artikel pertama Anda di **Blogjak Theme Versi 2**!
