# Minggu 23 - Hari 3: Dynamic programming dasar

## Konsep hari ini (sesi DSA — mulai dynamic programming)

- DP = rekursi + menyimpan hasil subproblem supaya tidak dihitung ulang (memoization) atau dibangun bottom-up (tabulation) — lanjutan langsung dari pratinjau `Climbing Stairs` (minggu 10) dan `fib` (minggu 4)

## Soal LeetCode

- **House Robber** (medium) — DP klasik dengan pilihan "ambil rumah ini atau lewati".

## Sebelum menulis kode

Identifikasi dulu **state** dan **transisi** DP-nya di atas kertas:
- Apa arti `dp[i]`? (misalnya: maksimum yang bisa dirampok sampai rumah ke-i)
- Bagaimana `dp[i]` dihitung dari `dp[i-1]` dan `dp[i-2]`?

## Checklist

- [ ] State dan transisi DP sudah diidentifikasi sebelum menulis kode
- [ ] Soal LeetCode House Robber dikerjakan
- [ ] Kesulitan dicatat di log salah paham
