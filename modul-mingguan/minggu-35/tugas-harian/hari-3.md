# Minggu 35 - Hari 3: Bangun search pada radix tree

## Konsep hari ini (bangun dari nol — search)

- `search` pada radix tree menelusuri edge (bukan karakter satu-satu), membandingkan potongan string tiap edge dengan sisa `word` yang dicari

## Spesifikasi

- `search(word)` — telusuri tree dari root, di tiap node cari edge yang isinya adalah prefix dari sisa `word`, lanjutkan sampai `word` habis tepat di sebuah node yang menandai akhir kata

## Kriteria selesai

Gunakan tree yang sama dari hari 2 (`test`, `team`, `toast`) — `search` untuk ketiga kata itu harus `true`, untuk `"te"`, `"tes"`, `"teamwork"` harus `false`.

## Checklist

- [ ] `search` lulus kriteria selesai untuk kata lengkap dan bukan-kata (prefix parsial)
- [ ] Kesulitan dicatat di log salah paham
