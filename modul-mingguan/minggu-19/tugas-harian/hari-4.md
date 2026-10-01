# Minggu 19 - Hari 4: Tambahkan caching ke router

## Konsep hari ini (mulai tambah caching ke router)

- Menerapkan `Cache-Control` dan `ETag` (hari 2) ke proyek router Fase 1 sungguhan

## Spesifikasi

- Middleware caching: tambahkan header `Cache-Control` dan `ETag` (hash dari body response) ke response endpoint `GET` tertentu
- Kalau request datang dengan header `If-None-Match` yang cocok dengan ETag saat ini, kembalikan `304 Not Modified` tanpa body

## Kriteria selesai

```
GET /data pertama kali          -> 200, body lengkap, header ETag: "xyz"
GET /data lagi dengan
  If-None-Match: "xyz"          -> 304, tanpa body
```

## Petunjuk kalau mentok (> 30 menit)

ETag bisa dibuat sesederhana hash (misalnya `crypto.createHash("md5")`) dari isi body response. Bandingkan hash ini dengan nilai `If-None-Match` yang dikirim client.

## Checklist

- [ ] Middleware caching (`Cache-Control` + `ETag` + `304`) bekerja sesuai kriteria selesai
- [ ] Kesulitan dicatat di log salah paham
