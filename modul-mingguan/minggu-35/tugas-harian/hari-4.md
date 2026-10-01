# Minggu 35 - Hari 4: Upgrade router jadi radix tree

## Konsep hari ini (upgrade proyek — router jadi radix tree)

- Menerapkan radix tree (hari 2-3) ke router yang sebelumnya trie-based (minggu 15), termasuk dukungan parameter path (`:id`)

## Spesifikasi

- Ganti struktur data route matching di router dari `Trie` (minggu 13/15) menjadi `RadixTree` (hari 2-3)
- Pastikan dukungan parameter path (`/users/:id`) tetap bekerja — segmen `:id` tetap perlu diperlakukan sebagai wildcard yang menangkap nilai, sama seperti pendekatan di minggu 15 hari 5, tapi sekarang di atas struktur radix

## Kriteria selesai

- Semua test router yang sudah ada dari minggu 10, 15, 19, dan 20 tetap lulus setelah struktur data route matching diganti jadi radix tree

## Checklist

- [ ] Router sudah memakai radix tree, semua test lama tetap lulus
- [ ] Parameter path (`:id`) tetap bekerja di atas struktur radix
- [ ] Kesulitan dicatat di log salah paham
