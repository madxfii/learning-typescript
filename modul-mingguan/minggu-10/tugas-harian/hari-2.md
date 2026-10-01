# Minggu 10 - Hari 2: Parsing body JSON + error handling terpusat

## Konsep hari ini (lanjut proyek router — bagian 3)

- Membaca body request (stream) sampai selesai lalu mem-parsing JSON-nya
- Error handling terpusat: satu tempat yang menangkap semua error dari handler/middleware manapun

## Spesifikasi

- Middleware bawaan yang membaca `req` (stream) sampai selesai, lalu `JSON.parse` isinya jadi `req.body`
- Kalau body bukan JSON valid, jangan crash server — lempar error yang bisa ditangkap error handler
- Error handler terpusat: satu tempat yang menangkap semua error, baik yang di-`throw` sinkron maupun yang reject dari Promise (dari handler async), dan mengembalikan respons error yang konsisten (misal `{ error: message }` dengan status code yang sesuai)

## Kriteria selesai

```
POST /users dengan body {"name":"Ahmad"}  -> handler menerima req.body.name === "Ahmad"
POST /users dengan body JSON tidak valid  -> respons error terstruktur, server TIDAK crash
Handler yang throw Error("boom")          -> ditangkap error handler terpusat, bukan bikin server hang/crash
```

## Petunjuk kalau mentok (> 30 menit)

`req` di `node:http` adalah stream — dengarkan event `"data"` untuk mengumpulkan chunk, dan `"end"` untuk tahu kapan body selesai diterima, baru `JSON.parse` isinya. Untuk error dari handler async, pastikan kamu `await` atau `.catch()` hasil pemanggilan handler sebelum melanjutkan, supaya rejection-nya bisa ditangkap.

## Checklist

- [ ] Body JSON parsing dan error handling terpusat bekerja sesuai kriteria selesai
- [ ] Kesulitan dicatat di log salah paham
