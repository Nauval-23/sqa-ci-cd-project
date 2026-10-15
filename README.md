# sqa-ci-cd-project

Praktikum SQA Modul 9 (CI/CD via GitHub Actions) dan Modul 10 (Proyek Akhir).

![SQA Quality Gate](https://github.com/USERNAME/sqa-ci-cd-project/actions/workflows/quality-gate.yml/badge.svg)

## Struktur
```
src/        kode yang diuji
tests/      unit & integration test (Jest)
e2e/        E2E test SauceDemo (Playwright)
api/        API test JSONPlaceholder (Playwright)
docs/       test plan, test case, bug report, laporan, refleksi
.github/workflows/quality-gate.yml
```

## Menjalankan
```bash
npm install
npm test                 # unit + integration
npm run test:coverage    # + coverage (gagal jika < 80%)
npx playwright install --with-deps
npm run test:api
npm run test:e2e         # chromium; semua browser:
npx playwright test --project=chromium --project=firefox --project=webkit
```

## Alur CI/CD
```
push / PR ke main
   └─ unit-test: npm ci → jest --coverage → Codecov → SonarCloud → Quality Gate
        ├─ api-test  (needs: unit-test)
        └─ e2e-test  (needs: unit-test, 3 browser, upload playwright-report)
```
E2E dan API hanya jalan jika unit test (termasuk threshold coverage 80%) lolos.

## Setup Sekali Saja
1. Buat repo **Public** bernama `sqa-ci-cd-project`, push semua isi folder ini.
2. SonarCloud: login dengan GitHub → import repo → isi `sonar.projectKey` dan `sonar.organization` di
   `sonar-project.properties`. Untuk project di SonarCloud pilih *Analysis Method: GitHub Actions*,
   salin token ke **Settings → Secrets and variables → Actions → `SONAR_TOKEN`**.
3. Codecov (opsional): tambahkan `CODECOV_TOKEN` di secrets. Jika dilewati, upload tidak menggagalkan pipeline.
4. Ganti `USERNAME` pada badge di atas.

## Quality Gate
| Indikator | Target |
|---|---|
| Unit Test | 100% PASS |
| Line/Branch/Function Coverage | ≥ 80% |
| E2E Test | 100% PASS |
| Critical Issue | 0 |

Dokumentasi lengkap ada di folder `docs/`.
