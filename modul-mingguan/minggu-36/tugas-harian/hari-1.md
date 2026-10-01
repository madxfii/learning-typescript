# Minggu 36 - Hari 1: Benchmark radix tree vs trie vs loop linear

## Konsep hari ini (benchmark)

- Mengukur klaim teori ("radix tree lebih cepat") dengan angka nyata, bukan asumsi

## Spesifikasi

- Buat benchmark yang mendaftarkan N route (coba beberapa nilai N: 10, 100, 1000) ke 3 implementasi matcher: loop linear (Fase 1 asli), trie (minggu 13/15), radix tree (minggu 35)
- Ukur waktu rata-rata untuk mencocokkan 1000 request acak terhadap masing-masing struktur, untuk tiap nilai N

## Kriteria selesai

- Tabel hasil benchmark: N route vs waktu rata-rata per matcher, untuk ketiga struktur data

## Checklist

- [ ] Benchmark 3 struktur data untuk minimal 3 nilai N sudah dijalankan
- [ ] Tabel hasil benchmark sudah dicatat
- [ ] Kesulitan dicatat di log salah paham
