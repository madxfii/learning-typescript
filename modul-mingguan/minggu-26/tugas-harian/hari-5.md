# Minggu 26 - Hari 5: Review lengkap mini reactivity library

## Konsep hari ini — review lengkap mini reactivity library

Hari ini bukan fitur baru. Pastikan seluruh library (`signal`, `effect`, `computed`, cleanup dependency, `batch`) bekerja sebagai satu kesatuan.

## Checklist review

1. Jalankan ulang semua kriteria selesai dari minggu 25 hari 3-4 dan minggu 26 hari 1-4 — pastikan semuanya masih lulus setelah semua fitur digabung.
2. Uji kombinasi: `computed` yang bergantung pada signal lain, dipakai di dalam `effect`, diubah lewat `batch` — pastikan urutan dan jumlah re-run masuk akal.
3. Tulis daftar keterbatasan yang kamu sadari dari implementasimu (misalnya: belum menangani array/object nested secara reaktif seperti `reactive()` Vue) — ini akan jadi bahan perbandingan minggu 27.

## Checklist

- [ ] Semua fitur (signal, effect, computed, cleanup, batch) bekerja bersama tanpa regresi
- [ ] Daftar keterbatasan sudah ditulis sebagai persiapan minggu 27
- [ ] Kesulitan dicatat di log salah paham
