# Minggu 20 - Hari 2: CORS preflight — perdalam Soal 8

## Konsep hari ini

- CORS preflight: browser mengirim request `OPTIONS` duluan untuk request "non-simple" (method selain GET/POST sederhana, atau header custom), untuk menanyakan izin ke server sebelum mengirim request asli
- Ini memperdalam Soal 8 di assessment

## Cara kerja

Baca tiap skenario, tebak jawabannya, lalu verifikasi lewat MDN CORS.

## Skenario

### Skenario 1

```
OPTIONS /api/data HTTP/1.1
Origin: http://localhost:3000
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type

HTTP/1.1 204 No Content
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
```

**Pertanyaan:** Setelah preflight ini berhasil, apakah browser langsung mengirim request `PUT` yang asli, atau ada langkah lain? Kenapa hasil preflight bisa di-cache oleh browser (petunjuk: header `Access-Control-Max-Age`)?

### Skenario 2

```js
fetch("http://api.example.com/data", { credentials: "include" });
```

**Pertanyaan:** Kalau request memakai `credentials: "include"` (mengirim cookie cross-origin), apa syarat tambahan yang harus dipenuhi nilai header `Access-Control-Allow-Origin` di respons server? (petunjuk: `*` tidak boleh dipakai bersamaan dengan credentials)

## Checklist

- [ ] Kedua skenario sudah ditebak sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
