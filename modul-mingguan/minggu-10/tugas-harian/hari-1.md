# Minggu 10 - Hari 1: Middleware chain dengan next()

## Konsep hari ini (lanjut proyek router — bagian 2)

- Middleware chain: rangkaian fungsi yang dijalankan berurutan sebelum handler akhir, masing-masing bisa memutuskan lanjut (`next()`) atau berhenti

## Spesifikasi

- `router.use(middleware)` — daftarkan middleware global yang jalan sebelum handler route
- Middleware punya signature `(req, res, next) => void`
- Memanggil `next()` melanjutkan ke middleware/handler berikutnya; **tidak** memanggil `next()` menghentikan chain (misal middleware auth yang menolak request)
- Middleware harus bisa async (`next()` dipanggil setelah `await` sesuatu, misalnya cek token ke "database")

## Kriteria selesai

```
Middleware A jalan -> panggil next() -> Middleware B jalan -> panggil next() -> handler jalan
Kalau Middleware A TIDAK panggil next() (misal auth gagal), Middleware B dan handler TIDAK BOLEH jalan.
```

## Petunjuk kalau mentok (> 30 menit)

Ingat pola `Queue` dari minggu 9 — middleware chain bisa dimodelkan sebagai daftar fungsi yang dipanggil satu per satu, tempat tiap fungsi bertanggung jawab memanggil "lanjut ke berikutnya" lewat `next()`. Cara lain: buat `next` sebagai closure yang tahu index middleware saat ini, dan memanggil middleware di index berikutnya saat dipanggil (mirip rekursi dari minggu 2 & 7).

## Checklist

- [ ] Middleware chain bekerja sesuai kriteria selesai (termasuk kasus async dan kasus berhenti)
- [ ] Kesulitan dicatat di log salah paham
