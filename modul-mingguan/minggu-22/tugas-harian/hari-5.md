# Minggu 22 - Hari 5: Sliding window lanjutan + refleksi blok

## Konsep hari ini (sesi DSA — penutup blok)

- Sliding window + `Set` (mengingat minggu 6) untuk masalah substring tanpa karakter berulang

## Soal LeetCode

- **Longest Substring Without Repeating Characters** (medium) — sliding window yang menyusut/melebar sambil menjaga invariant "tidak ada karakter berulang di window", dibantu `Set` untuk cek keanggotaan cepat.

## Refleksi tertulis (penutup blok minggu 20-22)

Tabel DSA menyebut blok ini ("sorting, binary search, two pointers, sliding window") terhubung ke "query dan paginasi di proyek full-stack". Tuliskan bagaimana salah satu teknik ini relevan untuk paginasi — misalnya, kenapa `OFFSET`/`LIMIT` di SQL mirip dengan windowing, atau kenapa data harus terurut supaya paginasi konsisten antar halaman.

## Checklist

- [ ] Soal LeetCode Longest Substring Without Repeating Characters dikerjakan
- [ ] Refleksi keterkaitan blok DSA dengan paginasi sudah ditulis
- [ ] Kesulitan dicatat di log salah paham
