# Minggu 22 - Hari 2: Membaca tab Performance DevTools

## Konsep hari ini (guided task, bukan trace kode)

- Membaca tab Performance DevTools untuk mengidentifikasi bottleneck rendering

## Tugas

1. Buka DevTools tab **Performance** di halaman web mana pun (idealnya halaman yang terasa agak berat saat dipakai).
2. Klik record, lakukan interaksi sebentar dengan halaman (scroll, klik beberapa elemen), lalu stop record.
3. Cari "Long Task" (blok merah di flame chart) — task yang memakan waktu lebih dari 50ms.
4. Identifikasi: apakah waktu didominasi kategori **Scripting**, **Rendering**, **Painting**, atau **Loading** (lihat ringkasan warna di bagian atas panel).

## Pertanyaan

Tulis temuanmu: long task apa yang paling mencolok di halaman yang kamu uji, dan dari kategori apa? Apa dugaanmu penyebabnya (JS berat, layout thrashing, gambar besar, dll)?

## Checklist

- [ ] Recording Performance sudah dilakukan pada halaman nyata
- [ ] Temuan long task (kategori + dugaan penyebab) sudah ditulis
