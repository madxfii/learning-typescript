# Minggu 23 - Hari 5: LRU cache dari nol

## Konsep hari ini (sesi DSA — LRU cache)

- LRU cache: struktur data cache dengan kapasitas tetap, mengeluarkan entry yang paling lama tidak dipakai (least recently used) saat penuh — ini Soal 12 (bagian B) di assessment

## Spesifikasi

- `LRUCache(capacity)` dengan method `get(key)` dan `put(key, value)`

## Kriteria selesai

Verifikasi implementasimu menghasilkan urutan eviction yang sama dengan trace manual di [kunci jawaban Soal 12](../assessment-kunci-jawaban.md) (baca kunci jawabannya **setelah** implementasimu lulus, untuk verifikasi — bukan sebelum mencoba).

## Terapkan langsung

Pakai `LRUCache` ini sebagai layer caching sederhana di salah satu endpoint proyekmu yang datanya jarang berubah tapi sering diminta (misalnya daftar kategori, atau profil user yang sering diakses).

## Checklist

- [ ] `LRUCache` lulus verifikasi terhadap kunci jawaban Soal 12
- [ ] `LRUCache` benar-benar dipakai di salah satu endpoint proyek nyata
- [ ] Kesulitan dicatat di log salah paham
