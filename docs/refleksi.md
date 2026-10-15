# Refleksi (Modul 10.19)

1. **Manual vs automation testing.** Manual dijalankan oleh manusia: fleksibel, baik untuk eksplorasi dan
   penilaian tampilan, tetapi lambat dan sulit diulang. Automation dijalankan oleh script: cepat, konsisten,
   cocok untuk regression, tetapi butuh biaya pembuatan dan perawatan script.
2. **Unit test sebelum E2E.** Unit test cepat, murah, dan menunjuk lokasi kesalahan dengan tepat. Jika logika
   dasar sudah rusak, E2E yang lambat tidak ada gunanya dijalankan. Itu sebabnya `e2e-test` memakai `needs: unit-test`.
3. **Manfaat CI/CD untuk SQA.** Setiap perubahan langsung diuji otomatis, kegagalan ketahuan lebih awal,
   hasil terdokumentasi di GitHub Actions, dan standar kualitas ditegakkan lewat Quality Gate.
4. **Coverage 90%.** Sebesar 90% dari kode (baris/cabang/fungsi, sesuai metriknya) dieksekusi oleh test.
   Artinya 10% tidak pernah dijalankan oleh test.
5. **Coverage 100% = bebas bug?** Tidak. Coverage hanya mengukur kode yang *dijalankan*, bukan kebenaran
   assertion. Test tanpa assertion yang berarti tetap menaikkan coverage. Requirement yang salah atau hilang
   juga tidak terdeteksi.
6. **Fungsi Quality Gate.** Ambang batas otomatis (coverage, issue kritis, pass rate) yang menentukan apakah
   kode layak lanjut. Jika tidak terpenuhi, pipeline gagal.
7. **Penyebab pipeline gagal.** Test gagal, coverage di bawah threshold, dependency tidak terpasang,
   secret/token belum diatur, Quality Gate Sonar tidak lolos, error sintaks workflow YAML, atau situs target tidak dapat diakses.
8. **Menentukan severity.** Berdasarkan dampak pada pengguna dan bisnis: seberapa inti fitur, apakah ada
   workaround, dan seberapa luas pengguna terdampak. Priority menentukan urutan perbaikan.
9. **Functional vs performance.** Functional menguji *apa* yang dilakukan sistem (benar/salah). Performance
   menguji *seberapa baik* (kecepatan, stabilitas, beban).
10. **Hasil testing untuk perbaikan kualitas.** Defect dianalisis penyebabnya, diperbaiki dan dibuatkan test
    regression, area berisiko tinggi diprioritaskan, dan tren coverage/pass rate dipantau antarrilis.
