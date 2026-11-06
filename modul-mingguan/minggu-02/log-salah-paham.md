# Log Salah Paham - Minggu 02

Catat setiap kali tebakan meleset. Format: apa yang dikira, apa yang sebenarnya terjadi, kenapa.

## Hari 1

_(diisi saat belajar)_

## Hari 2

_(diisi saat belajar)_

## Hari 3

_(diisi saat belajar)_

## Hari 4

- **Nilai variabel `var` setelah loop selesai.** Dikira 3 (nilai putaran terakhir di badan loop), padahal 4. Setelah putaran terakhir, `i++` jalan dulu, baru kondisi dicek dan gagal. Nilai itu tertinggal karena `var` tidak punya scope blok.
- **Snippet 1: `setTimeout(fn, 0)` dikira jalan langsung.** Dikira callback tercetak 0, 1, 2 di tiap putaran. Sebenarnya pemanggilan `setTimeout` cuma mendaftarkan callback lalu langsung di-pop. Callback baru jalan setelah stack kosong (loop selesai), jadi `0` bukan "sekarang juga". Ketiga callback membaca satu `i` yang sama, nilai akhirnya 3.
- **Snippet 3: alasan IIFE.** Hasil tebakan benar, tapi alasannya dikira "callback langsung dijalankan saat fungsi dibuat". Sebenarnya yang langsung jalan cuma IIFE-nya, callback `setTimeout` tetap menunggu. Alasan sebenarnya: tiap putaran membuat environment baru dengan `captured` sendiri (nilai `k` disalin saat IIFE dipanggil), dan callback memegang akses ke `captured` itu, bukan ke `k`.
- **Snippet 5: perubahan yang relevan.** Perubahan `fns` jadi `let` dikira ikut menentukan hasil. Yang menentukan adalah `i` jadi `let`, karena fungsi di dalam array membaca `i`.
- **Catatan: "snapshot".** Fungsi memegang variabel `i` milik iterasinya (binding hidup), bukan salinan nilai yang dibekukan. Terlihat seperti snapshot karena variabel itu tidak diubah lagi setelah iterasinya lewat.

## Hari 5

_(diisi saat belajar)_
