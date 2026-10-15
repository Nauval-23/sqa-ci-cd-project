# Test Plan — Proyek Akhir SQA

## 1. Project Overview
Pengujian dilakukan pada aplikasi publik **SauceDemo** (https://www.saucedemo.com), situs latihan
resmi untuk testing, dan **JSONPlaceholder** (https://jsonplaceholder.typicode.com) untuk API.
Kode `src/` (calculator, grade, stringUtils, userService, orderService) dipakai sebagai
*software under test* untuk unit dan integration test.

## 2. Scope
| Di dalam scope | Di luar scope |
|---|---|
| Login, logout, inventory, sorting, cart, checkout | Keamanan (penetration test) |
| REST API /posts (GET, POST, PUT, PATCH, DELETE) | Beban tinggi / stress test |
| Logika bisnis di `src/` | Pembayaran nyata |

## 3. Testing Objectives
Memastikan fungsi login, transaksi, dan pengelolaan data sesuai requirement serta memenuhi
kriteria Quality Gate (Bagian 8).

## 4. Testing Strategy
| Jenis | Tools | Lokasi |
|---|---|---|
| Unit Test | Jest | `tests/calculator`, `grade`, `stringUtils`, `stubs` |
| Integration Test | Jest + jest.mock | `tests/userService`, `orderService` |
| Black Box / Manual | Browser + DevTools | `docs/test-cases.csv` |
| API Test | Playwright `request` | `api/posts.spec.js` |
| E2E Test | Playwright | `e2e/*.spec.js` |
| Performance | PageSpeed Insights, Lighthouse, GTmetrix | `docs/performance.md` |

## 5. Test Environment
| Komponen | Teknologi |
|---|---|
| Browser | Chrome, Firefox, WebKit |
| OS | Windows / macOS / Linux |
| Unit test | Jest 29 |
| E2E & API | Playwright |
| CI | GitHub Actions |
| Coverage | Codecov + artifact lcov |
| Code quality | SonarCloud |

## 6. Risiko
| Risiko | Dampak | Mitigasi |
|---|---|---|
| Situs publik down / berubah | E2E gagal bukan karena bug | Jalankan ulang, cek status situs |
| Flaky test karena jaringan | Pipeline merah palsu | `retries: 1` di CI |
| Secret token belum diatur | Step Codecov/Sonar gagal | Atur di Settings → Secrets |

## 7. Jadwal & Peran
_Isi pembagian tugas kelompok (3–4 orang)._

## 8. Quality Gate
| Indikator | Minimum |
|---|---|
| Unit Test | 100% PASS |
| E2E Test | 100% PASS |
| Line / Branch / Function Coverage | ≥ 80% |
| Critical Code Issue | 0 |
| API Test | ≥ 90% PASS |
| Performance Score | ≥ 80 |
