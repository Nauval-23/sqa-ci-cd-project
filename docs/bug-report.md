# Bug Report

> **Penting:** bug di bawah adalah *kandidat* berdasarkan perilaku yang memang dirancang pada akun
> `problem_user` di saucedemo.com (lihat Modul 4). Jalankan sendiri, ambil screenshot, lalu
> ubah kolom **Status** menjadi `Confirmed` atau `Not reproducible`. Jangan kumpulkan bug yang belum kamu reproduksi.

---

## BUG-001 — Semua gambar produk sama (problem_user)
- **Feature:** Inventory
- **Environment:** Chrome (versi terbaru), OS: _isi_, URL: https://www.saucedemo.com
- **Steps to Reproduce:**
  1. Buka saucedemo.com
  2. Login sebagai `problem_user` / `secret_sauce`
  3. Amati gambar pada halaman Products
- **Expected Result:** Setiap produk punya gambar yang sesuai
- **Actual Result:** Semua produk menampilkan gambar yang sama
- **Severity:** Medium  **Priority:** P2
- **Evidence:** _screenshot_
- **Status:** Perlu verifikasi

## BUG-002 — Sorting tidak berfungsi (problem_user)
- **Feature:** Sorting
- **Environment:** sama seperti BUG-001
- **Steps to Reproduce:**
  1. Login sebagai `problem_user`
  2. Pilih "Price (low to high)"
- **Expected Result:** Produk terurut dari harga terendah
- **Actual Result:** _isi hasil pengamatan_
- **Severity:** Medium  **Priority:** P2
- **Evidence:** _screenshot_
- **Status:** Perlu verifikasi

## BUG-003 — Tombol Remove tidak menghapus item (problem_user)
- **Feature:** Cart
- **Steps to Reproduce:**
  1. Login sebagai `problem_user`
  2. Tambahkan produk, klik Remove
- **Expected Result:** Badge cart berkurang, tombol kembali "Add to cart"
- **Actual Result:** _isi hasil pengamatan_
- **Severity:** High  **Priority:** P1
- **Evidence:** _screenshot_
- **Status:** Perlu verifikasi

## BUG-004 — Form checkout tidak bisa diisi benar (problem_user)
- **Feature:** Checkout
- **Steps to Reproduce:**
  1. Login sebagai `problem_user`, tambahkan produk
  2. Buka checkout, isi First Name, Last Name, Postal Code
- **Expected Result:** Data tersimpan sesuai input
- **Actual Result:** _isi hasil pengamatan (mis. field Last Name berubah)_
- **Severity:** High  **Priority:** P1
- **Evidence:** _screenshot_
- **Status:** Perlu verifikasi

## BUG-005 — Login lambat (performance_glitch_user)
- **Feature:** Login / Performance
- **Steps to Reproduce:**
  1. Login sebagai `performance_glitch_user`
  2. Ukur waktu sampai halaman Products tampil
- **Expected Result:** < 2 detik
- **Actual Result:** _isi waktu terukur_
- **Severity:** Low  **Priority:** P3
- **Evidence:** _screenshot DevTools Network_
- **Status:** Perlu verifikasi

---

## Panduan Severity
| Severity | Kriteria |
|---|---|
| Critical | Aplikasi crash / data hilang / fitur inti mati total |
| High | Fitur utama rusak, tidak ada workaround |
| Medium | Fitur rusak sebagian, ada workaround |
| Low | Kosmetik / dampak kecil |
