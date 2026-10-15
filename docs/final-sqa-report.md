# Final SQA Report

**Kelompok:** _isi_  **Anggota:** _isi_  **Tanggal:** _isi_

## BAB 1 Pendahuluan
- **Latar belakang:** Kualitas perangkat lunak perlu dijamin secara sistematis dan otomatis agar cacat
  ditemukan sebelum rilis.
- **Identifikasi masalah:** Bagaimana menguji aplikasi web publik (SauceDemo) dan API (JSONPlaceholder)
  secara terstruktur dengan pipeline CI/CD dan Quality Gate?
- **Tujuan:** Menyusun strategi pengujian, menjalankan berbagai level testing, dan mengevaluasi kualitas.
- **Scope:** Lihat `docs/test-plan.md`.

## BAB 2 Software Under Test
- **Deskripsi:** SauceDemo (toko online demo), JSONPlaceholder (REST API palsu), dan modul logika di `src/`.
- **Fitur:** Login, logout, inventory, sorting, cart, checkout; CRUD /posts.
- **Teknologi:** Node.js 20, Jest, Playwright, GitHub Actions, Codecov, SonarCloud.

## BAB 3 Test Planning
Strategi, environment, dan risiko: lihat `docs/test-plan.md`.

## BAB 4 Functional Testing
- 34 test case: `docs/test-cases.csv` (positive, negative, boundary, validation, business rule).
- Bug report: `docs/bug-report.md`.
- _Isi ringkasan hasil: jumlah PASS/FAIL setelah eksekusi manual._

## BAB 5 Automated Testing
| Jenis | Jumlah | Hasil |
|---|---|---|
| Unit test (Jest) | calculator, grade, stringUtils, stubs | _isi dari Actions_ |
| Integration test (Jest + mock) | userService, orderService | _isi dari Actions_ |
| API test | 10 | _isi dari Actions_ |
| E2E test | 12 per browser (36 di 3 browser) | _isi dari Actions_ |

Catatan: total Jest (unit + integration) di lingkungan lokal = 54 test, semuanya PASS dengan coverage 100%.
E2E dan API belum dijalankan di lingkungan lokal karena tidak ada akses internet; hasilnya diambil dari GitHub Actions.

## BAB 6 Quality Evaluation
| Indikator | Minimum | Hasil | Status |
|---|---|---|---|
| Unit Test | 100% PASS | 54/54 (lokal) | |
| E2E Test | 100% PASS | _isi_ | |
| Line / Branch / Function Coverage | ≥ 80% | 100% / 100% / 100% (lokal) | |
| Critical Code Issue | 0 | _isi dari SonarCloud_ | |
| API Test | ≥ 90% PASS | _isi_ | |
| Performance | ≥ 80 | _isi dari `docs/performance.md`_ | |

## BAB 7 CI/CD
- Repository: _URL_
- Workflow: `.github/workflows/quality-gate.yml` (unit-test → api-test + e2e-test)
- Pipeline sukses/gagal: _screenshot_
- Simulasi gagal dan perbaikan: lihat `docs/lembar-kerja-modul9.md`

## BAB 8 Kesimpulan
- Temuan utama: _isi_
- Kualitas software: _isi_
- Defect: _isi_
- Rekomendasi perbaikan: _isi_
