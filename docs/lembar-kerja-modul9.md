# Lembar Kerja Modul 9

| No | Aktivitas | Hasil | Bukti |
|---|---|---|---|
| 1 | Membuat repository GitHub | URL repo: _isi_ | |
| 2 | Membuat unit test | 54 test (lokal: PASS) | Screenshot `npm test` |
| 3 | Membuat workflow CI | `.github/workflows/quality-gate.yml` | Screenshot |
| 4 | Menjalankan GitHub Actions | | Screenshot tab Actions |
| 5 | Menghasilkan coverage | Lokal: 100% stmts/branch/func/lines | Screenshot Codecov / artifact |
| 6 | Menjalankan E2E | | Screenshot Playwright report |
| 7 | Integrasi SonarCloud | | Screenshot dashboard |
| 8 | Menguji pipeline gagal | | Screenshot |
| 9 | Memperbaiki pipeline | | Screenshot |
| 10 | Mendokumentasikan hasil | Final SQA Report | |

## Simulasi Pipeline Gagal (Bagian 9.11)
Tambahkan test sengaja gagal di `tests/calculator.test.js`:

```js
test('test sengaja gagal', () => {
  expect(2 + 2).toBe(5);
});
```

```bash
git add . && git commit -m "Simulate failed test" && git push
```

Jawab setelah melihat tab Actions:

1. Job mana yang gagal? _(contoh yang diharapkan: Unit Test & Coverage)_
2. Test mana yang gagal? _isi dari log_
3. Apa pesan error? _isi dari log (Expected: 5, Received: 4)_
4. Apakah job berikutnya tetap berjalan? _Seharusnya tidak: `api-test` dan `e2e-test` memakai `needs: unit-test` sehingga dilewati (skipped)_
5. Cara memperbaiki? _hapus/perbaiki test, commit, push_

Lalu perbaiki dan push ulang (`git commit -m "Fix failing test"`) hingga semua job hijau.
