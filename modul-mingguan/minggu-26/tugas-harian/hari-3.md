# Minggu 26 - Hari 3: Bangun cleanup dependency lama

## Konsep hari ini (bangun dari nol — cleanup dependency)

- Effect harus "melepas" semua dependency lamanya sebelum re-run, baru mendaftar ulang ke dependency yang benar-benar dibaca run kali ini — mencegah stale subscription (effect yang terus dipanggil padahal sudah tidak relevan)

## Spesifikasi

- Modifikasi `effect(fn)` dari minggu 25: sebelum tiap kali menjalankan ulang `fn`, hapus dulu effect ini dari daftar subscriber semua signal yang sebelumnya terdaftar

## Kriteria selesai

Snippet di hari 2 sekarang harus menghasilkan `log` yang benar: perubahan `a` setelah `useA` menjadi `false` **tidak boleh** lagi memicu re-run effect.

## Petunjuk kalau mentok (> 30 menit)

Effect perlu menyimpan daftar signal yang sedang men-subscribe dirinya (bukan cuma signal yang menyimpan daftar effect). Sebelum tiap run, iterasi daftar itu dan hapus effect ini dari tiap signal, lalu kosongkan daftarnya — baru jalankan `fn` lagi (yang akan mendaftar ulang dependency yang benar-benar dipakai run ini).

## Checklist

- [ ] Cleanup dependency lama bekerja — snippet hari 2 sekarang menghasilkan log yang benar
- [ ] Kesulitan dicatat di log salah paham
