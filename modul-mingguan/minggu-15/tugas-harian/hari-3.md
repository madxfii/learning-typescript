# Minggu 15 - Hari 3: Upgrade router jadi trie-based

## Konsep hari ini (sesi DSA — upgrade router jadi trie-based)

- Menutup blok Trie/heap (minggu 13-15) dengan menerapkannya langsung ke proyek nyata: mengganti pencocokan route router Fase 1 dari loop linear menjadi trie

## Spesifikasi

- Pakai `Trie` dari minggu 13 (atau varian yang disesuaikan, tiap node menyimpan segmen path bukan 1 karakter) untuk menyimpan route yang terdaftar
- Ganti logic pencocokan route di router yang tadinya loop linear jadi traversal trie segmen-per-segmen

## Kriteria selesai

- Semua test router yang sudah ada dari minggu 10 tetap lulus, sekarang dengan matcher berbasis trie

## Refleksi

Bandingkan kompleksitas waktu pencocokan route: loop linear O(jumlah route terdaftar) vs trie O(panjang path yang diminta). Pada kondisi apa trie benar-benar terasa lebih unggul (petunjuk: pikirkan aplikasi dengan ratusan route terdaftar)?

## Checklist

- [ ] Router sudah memakai trie-based matching, semua test lama tetap lulus
- [ ] Refleksi kompleksitas loop vs trie sudah ditulis
- [ ] Kesulitan dicatat di log salah paham
