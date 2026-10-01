# Minggu 19 - Hari 1: Siklus request/response & status code

## Konsep hari ini

- Siklus request/response HTTP dan pemilihan status code yang tepat untuk tiap skenario

## Cara kerja

Untuk tiap skenario, tebak status code paling tepat **sebelum** mencari jawabannya di MDN, lalu verifikasi dan tulis alasannya.

## Skenario

1. Client `GET /users/999`, user dengan id tersebut tidak ditemukan di database. Status code apa?
2. Client `POST /users` dengan body JSON yang tidak valid (gagal parse). Status code apa?
3. Client mencoba akses endpoint yang butuh login, tapi tidak mengirim token sama sekali. Status code apa? Bandingkan dengan kasus token dikirim tapi tidak punya izin (403) — kenapa keduanya berbeda?
4. Server berhasil membuat resource baru lewat `POST`. Status code apa, dan header apa yang idealnya disertakan untuk menunjuk resource baru itu?
5. Client memakai method yang tidak didukung endpoint tertentu (misal `DELETE` ke endpoint yang cuma terima `GET`/`POST`). Status code apa?

## Checklist

- [ ] Kelima skenario sudah ditebak sebelum verifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
