# Minggu 20 - Hari 4: Tambahkan CORS + cookie session ke router

## Konsep hari ini (tambah CORS + cookie session ke router)

- Menerapkan CORS (hari 2) dan session cookie (hari 1) ke proyek router Fase 1 sungguhan

## Spesifikasi

- Middleware CORS: baca header `Origin`, cocokkan dengan whitelist origin yang diizinkan, set `Access-Control-Allow-Origin` dkk, dan tangani preflight `OPTIONS` secara otomatis
- Middleware cookie session: generate `sessionId` baru kalau request belum punya cookie session, simpan data session di in-memory store (`Map`), set cookie dengan atribut `HttpOnly`

## Kriteria selesai

```
Request dari origin whitelisted         -> header CORS sesuai, request diterima
Request preflight OPTIONS               -> 204 dengan header Access-Control-* yang benar
Request pertama tanpa cookie session    -> server men-set-cookie sessionId baru
Request berikutnya dengan cookie itu    -> server mengenali session yang sama
```

## Checklist

- [ ] Middleware CORS bekerja (termasuk preflight)
- [ ] Middleware cookie session bekerja (generate + kenali session)
- [ ] Tracker Fase 3 diperbarui: caching, CORS, dan cookie session ditambahkan ke router
- [ ] Kesulitan dicatat di log salah paham
