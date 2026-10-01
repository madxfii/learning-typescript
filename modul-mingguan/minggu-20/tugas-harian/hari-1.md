# Minggu 20 - Hari 1: Cookie & session

## Konsep hari ini

- Atribut cookie (`HttpOnly`, `Secure`, `SameSite`) dan implikasinya terhadap keamanan session

## Cara kerja

Untuk tiap skenario, tebak jawabannya dulu, baru verifikasi lewat MDN.

## Skenario

### Skenario 1

```
HTTP/1.1 200 OK
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
```

**Pertanyaan:** Jelaskan fungsi masing-masing atribut (`HttpOnly`, `Secure`, `SameSite=Strict`). Kenapa `HttpOnly` penting untuk mencegah pencurian cookie lewat serangan XSS?

### Skenario 2

Server menyimpan data session di memori proses Node (bukan database/Redis).

**Pertanyaan:** Apa yang terjadi pada semua session aktif kalau server di-restart? Apa masalahnya kalau aplikasi berjalan di lebih dari satu instance server (load balanced)?

## Checklist

- [ ] Kedua skenario sudah ditebak sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
