# Minggu 29 - Hari 4: Kenapa aturan hooks ada

## Konsep hari ini

- Kenapa aturan hooks ("panggil di top level, jangan di dalam kondisi/loop/fungsi bersarang") itu ada — bukan aturan sembarangan, tapi konsekuensi langsung dari implementasi

## Analisis (kaitkan ke implementasi sendiri hari 3)

1. Kalau implementasi `useState` milikmu menyimpan state berdasarkan **urutan pemanggilan** (hook pertama = slot 0, hook kedua = slot 1, dst) dalam sebuah array per komponen, apa yang terjadi kalau `useState` dipanggil di dalam `if` yang kondisinya berubah antar render?
2. Kenapa React (dan implementasi mini-mu) tidak bisa "tahu" hook mana yang dilewati kalau urutan pemanggilannya berubah?
3. Bagaimana pendekatan berbasis "array index urutan pemanggilan" ini berbeda dari pendekatan berbasis "key" seperti di `useState` versi Solid/Vue Composition API (yang tidak kena batasan ini)?

## Checklist

- [ ] Ketiga pertanyaan analisis sudah dijawab, dikaitkan ke implementasi `useState` sendiri
- [ ] Kesulitan dicatat di log salah paham
