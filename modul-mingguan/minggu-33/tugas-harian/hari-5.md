# Minggu 33 - Hari 5: Review

## Konsep hari ini — review

## Checklist review

1. Jalankan ulang `getImports`, `resolvePath`, `buildDependencyGraph`, dan `transformModule` sebagai satu alur: dari entry file, temukan graph lengkap, lalu transformasikan tiap file dalam graph itu.
2. Pastikan urutan file dalam graph bisa diurutkan topologically (pakai `topologicalSort` dari minggu 18) — ini akan dipakai untuk menggabungkan file minggu depan.

## Checklist

- [ ] Alur resolver -> graph -> transform sudah teruji sebagai satu kesatuan
- [ ] Urutan topological dari dependency graph sudah bisa dihasilkan
- [ ] Kesulitan dicatat di log salah paham
