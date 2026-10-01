# Minggu 19 - Hari 2: Header caching — Cache-Control & ETag

## Konsep hari ini

- Header caching (`Cache-Control`, `ETag`) menentukan kapan browser boleh memakai salinan lokal, dan kapan harus tanya ulang ke server

## Cara kerja

1. Baca tiap skenario header HTTP, **jangan cari jawabannya dulu**.
2. Tebak perilakunya, tulis alasannya.
3. Verifikasi lewat MDN: HTTP Caching.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Skenario untuk dianalisis

### Skenario 1

```
GET /style.css HTTP/1.1

HTTP/1.1 200 OK
Content-Type: text/css
Cache-Control: max-age=3600
ETag: "abc123"
```

**Pertanyaan:** Kalau browser meminta ulang `/style.css` 10 menit kemudian, apakah request benar-benar dikirim ke server, atau diambil dari cache browser tanpa request sama sekali? Kenapa?

### Skenario 2

```
GET /style.css HTTP/1.1
If-None-Match: "abc123"

HTTP/1.1 304 Not Modified
```

**Pertanyaan:** Ini terjadi setelah `max-age` di skenario 1 sudah lewat. Apa arti status 304, dan kenapa server tidak perlu mengirim ulang seluruh isi `style.css`?

### Skenario 3

```
Cache-Control: no-store
Cache-Control: no-cache
Cache-Control: private, max-age=0
```

**Pertanyaan:** Jelaskan beda ketiga directive ini. Mana yang benar-benar melarang penyimpanan cache sama sekali, dan mana yang cuma mewajibkan validasi ulang ke server sebelum dipakai?

## Checklist

- [ ] Ketiga skenario sudah ditebak sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
