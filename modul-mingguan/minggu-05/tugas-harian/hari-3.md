# Minggu 05 - Hari 3: Hash map — cara kerja & pemakaian

## Konsep hari ini (sesi DSA)

- Hash map memetakan key ke bucket lewat hash function, sehingga lookup rata-rata O(1)
- Tabrakan (collision) ditangani lewat chaining atau open addressing — cukup paham konsepnya dulu, tidak perlu implementasi hash function sendiri

## Tugas

1. Kerjakan ulang [Soal 10 di assessment](../assessment.md) (`hasDuplicate`) — tulis versi brute-force O(n²), lalu versi memakai `Set`. Bandingkan kompleksitasnya.
2. Kerjakan [Soal 11 di assessment](../assessment.md) (cache sederhana pakai `Map`) — pastikan paham kenapa `Map` lebih cocok dibanding `{}` biasa untuk key yang dinamis.
3. Soal LeetCode: **Two Sum** (easy) — kerjakan ulang versi hash map, bandingkan dengan versi brute force minggu lalu (turun dari O(n²) ke O(n)).

## Refleksi

Tuliskan singkat: kenapa `Map`/hash map jadi struktur data favorit untuk kasus "cek apakah X sudah pernah diproses" pada dataset besar?

## Checklist

- [ ] Soal 10 dan 11 assessment sudah dikerjakan ulang
- [ ] Soal LeetCode Two Sum versi hash map selesai
- [ ] Kesulitan dicatat di log salah paham
