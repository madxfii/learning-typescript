# Minggu 22 - Hari 4: Lanjut proyek — join, index, N+1

## Konsep hari ini (lanjut proyek: join, index, N+1)

- Masalah N+1 query dan cara memperbaikinya dengan `JOIN` dan index — sangat umum di aplikasi nyata

## Spesifikasi

- Buat endpoint yang menampilkan data dari 2+ tabel berelasi di proyekmu (misal daftar post beserta nama penulisnya)
- Tulis dulu versi **naif**: query penulis satu per satu di dalam loop untuk tiap post (masalah N+1) — amati/hitung berapa banyak query yang benar-benar dijalankan
- Perbaiki jadi satu query dengan `JOIN`, bandingkan jumlah query sebelum dan sesudah
- Tambahkan index pada kolom yang sering dipakai untuk `WHERE`/`JOIN` (misal foreign key), amati lewat `EXPLAIN ANALYZE` apakah query plan berubah

## Kriteria selesai

- Endpoint final memakai `JOIN` (bukan pola N+1)
- Minimal 1 index sengaja ditambahkan, dengan alasan tertulis (kolom apa, kenapa)

## Checklist

- [ ] Versi naif (N+1) sudah diamati dan diukur
- [ ] Versi JOIN sudah menggantikan versi naif
- [ ] Minimal 1 index ditambahkan dengan alasan tertulis
- [ ] Kesulitan dicatat di log salah paham
