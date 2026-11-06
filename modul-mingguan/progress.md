# Progress Belajar

Terakhir update: 2026-11-06

## Status saat ini

- Fase: Fase 0 (minggu 1-3)
- Minggu: 3
- Hari: 1 (selesai), lanjut Minggu 3 Hari 2

## Gerbang tercapai

- [ ] Fase 0 (minggu 3)
- [ ] Fase 1 (minggu 10)
- [ ] Fase 2 (minggu 16)
- [ ] Fase 3 (minggu 24)
- [ ] Blok reactivity (minggu 27)
- [ ] Blok virtual DOM (minggu 30)
- [ ] Blok DI (minggu 32)
- [ ] Blok bundler (minggu 34)
- [ ] Blok router (minggu 36)
- [ ] Gerbang akhir (minggu 40)

## Bottleneck / catatan pola

- Pesan error TDZ (`Cannot access 'x' before initialization`) sering ketuker dengan `x is not defined` (3 kali di minggu 1, Hari 2 dan Hari 4). Pembeda: nama ketemu di scope tapi TDZ vs nama tidak ketemu sama sekali. Verifikasi pesan di Node, bukan Python Tutor. Slip ke-4 (Hari 5) terjadi saat sesi pakai English dan user bilang kesulitan memahami pertanyaan, jadi kemungkinan besar karena bahasa, bukan konsepnya. User bisa membedakan keduanya (konfirmasi sendiri, 2026-11-04).
- User sengaja memakai English di sebagian sesi untuk melatih membaca soal berbahasa Inggris. Kalau bahasa jadi hambatan, mulai dengan pertanyaan English yang pendek dan jelas.
- Ketelitian trace: urutan output tertukar, nama variabel salah ketik, isi variabel di suatu baris tidak konsisten dengan baris sebelumnya.
- Minggu 2 (rekursi): pola berulang, parameter/laci frame sendiri tertukar dengan nilai return frame di dalam saat menulis fase naik. Kalau muncul lagi di hari berikutnya, kasih latihan pisah kolom `n` dan kolom return.
- Preferensi user: tabel stack per frame terasa terlalu panjang untuk rekursi bercabang, pohon panggilan lebih nyaman. Kalau kode lain disebut, tampilkan kodenya.

## Riwayat sesi

- 2026-09-30: modul mingguan minggu 1-40 selesai dibuat, skill `/learn-companion` diaktifkan. Belum mulai belajar.
- 2026-11-03: Minggu 1 Hari 1 selesai (primitif vs objek, copy vs reference). Semua 5 snippet ditebak benar tanpa salah paham.
- 2026-11-04: Minggu 1 Hari 2 selesai (var/let/const, redeclare, `const` binding vs isi, TDZ). Salah paham dicatat di log: `let` redeclare dikira assignment, reassign `const` dikira parse error, pesan TDZ dikira `not defined`. Urutan tahap (parse, setup scope, eksekusi) sudah dipahami.
- 2026-11-04: Minggu 1 Hari 3 selesai (var hidup di fungsi vs let/const di blok, shadowing, deklarasi vs assignment). Salah paham dicatat di log: `var` dikira masuk scope `if`, hedging `error/undefined` untuk `let`, notasi trace kondisi loop. 5 snippet ditebak benar.
- 2026-11-04: Minggu 1 Hari 4 selesai (hoisting: function declaration vs function expression/arrow, `var` undefined vs `let`/`const`/`class` TDZ, nama bentrok `var`/function). Salah paham dicatat di log: pesan `not defined` vs `Cannot access` (kali ketiga), `class` dikira seperti function/`var`, urutan setup vs eksekusi di Snippet 5.
- 2026-11-04: Minggu 1 Hari 5 selesai (review campuran: mutate vs reassign, spread copy, hoisting/scope blok, TDZ + shadowing, parameter fungsi). Slip: urutan output tertukar (Snippet 1), `typeof` pada nama tak terdeklarasi dikira error, `not defined` vs TDZ tertukar lagi (kali keempat, pada pertanyaan cek paham), alasan Snippet 4 dikira karena `return` padahal karena reassign parameter. Semua 5 snippet akhirnya benar.
- 2026-11-05: Minggu 2 Hari 1 selesai (call stack: push/pop frame, frame `global`, parameter di "laci" tiap frame, stack unwinding saat `throw`). Slip: `console.log` dikira masuk stack sebelum argumennya dihitung (Snippet 1), titik lanjut eksekusi tepat setelah pop tertukar (cek paham materi 2). Snippet 2-5 benar.
- 2026-11-05: Minggu 2 Hari 2 selesai (rekursi, base case, kedalaman stack, pohon panggilan, mutual recursion). Slip: di fase naik rekursi, `n`/`arr[0]` frame sendiri tertukar dengan nilai return frame di dalam (`factorial`, `sumArray`), kedalaman stack salah hitung (5 vs 6, ikut `global` atau tidak), `fib(1)` dikira masih memanggil `fib(0)`, beda `countDown` vs `factorial` awalnya kabur (pekerjaan tertunda setelah rekursi kembali), `- 1` dikira mengubah nilai return padahal mengubah argumen. Semua 5 snippet akhirnya benar.
- 2026-11-06: Minggu 2 Hari 3 selesai (closure: fungsi dalam membawa referensi ke environment tempat dibuat, environment baru per pemanggilan fungsi luar, dua fungsi dari pemanggilan yang sama berbagi environment). Semua 5 snippet ditebak benar. Catatan kecil: environment/frame sempat dikira dipegang oleh variabelnya, padahal yang memegang referensi adalah fungsinya. User minta review fokus ke konsep, tidak nitpick salah nama/notasi.
- 2026-11-06: Minggu 2 Hari 4 selesai (closure dalam loop: `var` satu variabel bersama vs `let` binding baru per iterasi, IIFE, `setTimeout` baru jalan setelah stack kosong). Slip: nilai `var` setelah loop (4, bukan 3), `setTimeout(fn, 0)` dikira langsung jalan, alasan IIFE dikira "callback langsung jalan", perubahan relevan di Snippet 5 (`i`, bukan `fns`). Snippet 2 dan 4 benar. Semua 5 snippet akhirnya benar.
- 2026-11-06: Minggu 2 Hari 5 selesai (breakpoint bersyarat, watch dievaluasi di frame yang dipilih di Call Stack, review campuran call stack + rekursi + closure: depth tracker, currying, safeDivide, memoize, closure per pemanggilan build). Slip: watch parameter `n` sempat dikira bergantung pada `var`/`let`/`const` padahal tiap frame punya laci parameter sendiri, hasil `1+2+3` salah hitung jadi 5 (slip aritmatika, bukan konsep). Semua 5 snippet akhirnya benar. Minggu 2 selesai.
- 2026-11-06: Minggu 3 Hari 1 selesai (kode sinkron baris demi baris, callback tidak otomatis asinkron, "didaftarkan sekarang, dipanggil nanti" yang masih sinkron, error-first callback, pratinjau `setTimeout`). Slip: stack saat callback jalan lupa menyertakan fungsi penerima (`map`), alasan Snippet 3 dikira "tidak pakai fungsi async" padahal soal siapa yang memanggil dan kapan, callback di `divide(10, 2, ...)` dikira tidak dipanggil (padahal dipanggil dengan `null` dan hasil), `setTimeout` dikira tidak asinkron (yang ditunda callback-nya). Catatan: contoh materi 3 terlalu mirip Snippet 3, diganti Snippet 3b (daftar dua kali, yang pertama tertimpa, benar). Snippet 1, 2, 4, 5 benar.
