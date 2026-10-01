# Minggu 10 - Hari 4: Test untuk setiap fitur router

## Konsep hari ini (lanjut proyek router — bagian 4, testing)

- Test memastikan setiap fitur router benar-benar bekerja, dan jadi bukti konkret untuk gerbang Fase 1

## Spesifikasi

Tulis test (pakai test runner pilihan — `node:test` bawaan Node, atau Vitest/Jest kalau sudah familiar) untuk:

- Routing dengan parameter (`/users/:id`) dan query string
- Middleware chain (urutan eksekusi benar, `next()` bekerja, middleware yang tidak panggil `next()` menghentikan chain)
- Parsing body JSON (kasus sukses dan kasus gagal)
- Error handling terpusat (error sinkron dan error dari Promise yang reject)

Semua test harus hijau sebelum lanjut ke hari 5.

## Sesi DSA tambahan (rekursi, lanjutan hari 3 — jembatan ke Fase 2)

Konsep: rekursi dengan lebih dari satu pemanggilan diri sendiri per langkah (seperti `fib` naif) mudah meledak jadi lambat — pola ini akan sering muncul lagi saat masuk topik dynamic programming (minggu 23-24) dan tree traversal (Fase 2).

Soal LeetCode: **Climbing Stairs** (easy) — hitung berapa cara mendaki n anak tangga kalau tiap langkah boleh naik 1 atau 2 anak tangga. Kerjakan dulu versi rekursif naif, sebutkan kompleksitasnya, lalu coba versi dengan memoization (mirip pola `fib` yang dioptimasi) — simpan hasil ini untuk dibandingkan lagi saat masuk topik DP dasar di minggu 23-24.

## Checklist

- [ ] Test untuk routing, middleware, body parsing, dan error handling semuanya ada dan lulus
- [ ] Kesulitan dicatat di log salah paham
- [ ] Soal LeetCode Climbing Stairs (sesi DSA tambahan) dikerjakan, versi naif dan versi memoization
