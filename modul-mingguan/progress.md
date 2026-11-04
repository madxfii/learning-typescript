# Progress Belajar

Terakhir update: 2026-11-04

## Status saat ini

- Fase: Fase 0 (minggu 1-3)
- Minggu: 1
- Hari: 5 (selesai), Minggu 1 selesai, belum mulai Minggu 2

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

## Riwayat sesi

- 2026-09-30: modul mingguan minggu 1-40 selesai dibuat, skill `/learn-companion` diaktifkan. Belum mulai belajar.
- 2026-11-03: Minggu 1 Hari 1 selesai (primitif vs objek, copy vs reference). Semua 5 snippet ditebak benar tanpa salah paham.
- 2026-11-04: Minggu 1 Hari 2 selesai (var/let/const, redeclare, `const` binding vs isi, TDZ). Salah paham dicatat di log: `let` redeclare dikira assignment, reassign `const` dikira parse error, pesan TDZ dikira `not defined`. Urutan tahap (parse, setup scope, eksekusi) sudah dipahami.
- 2026-11-04: Minggu 1 Hari 3 selesai (var hidup di fungsi vs let/const di blok, shadowing, deklarasi vs assignment). Salah paham dicatat di log: `var` dikira masuk scope `if`, hedging `error/undefined` untuk `let`, notasi trace kondisi loop. 5 snippet ditebak benar.
- 2026-11-04: Minggu 1 Hari 4 selesai (hoisting: function declaration vs function expression/arrow, `var` undefined vs `let`/`const`/`class` TDZ, nama bentrok `var`/function). Salah paham dicatat di log: pesan `not defined` vs `Cannot access` (kali ketiga), `class` dikira seperti function/`var`, urutan setup vs eksekusi di Snippet 5.
- 2026-11-04: Minggu 1 Hari 5 selesai (review campuran: mutate vs reassign, spread copy, hoisting/scope blok, TDZ + shadowing, parameter fungsi). Slip: urutan output tertukar (Snippet 1), `typeof` pada nama tak terdeklarasi dikira error, `not defined` vs TDZ tertukar lagi (kali keempat, pada pertanyaan cek paham), alasan Snippet 4 dikira karena `return` padahal karena reassign parameter. Semua 5 snippet akhirnya benar.
