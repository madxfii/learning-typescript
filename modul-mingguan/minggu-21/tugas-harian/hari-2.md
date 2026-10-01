# Minggu 21 - Hari 2: Rendering pipeline & reflow

## Konsep hari ini

- Rendering pipeline: parse HTML -> DOM tree; parse CSS -> CSSOM; gabung jadi render tree; layout (hitung posisi/ukuran); paint (gambar piksel); composite (gabungkan layer)
- "Reflow" adalah proses layout ulang — lebih mahal daripada sekadar paint ulang

## Skenario untuk dianalisis

Untuk tiap skenario, tebak dulu tahap mana dari pipeline yang terpicu, baru verifikasi lewat artikel "Inside look at modern web browser".

### Skenario 1

Mengubah `element.style.color = "red"`.

**Pertanyaan:** Tahap mana dari pipeline yang terpicu? Apakah ini butuh layout ulang?

### Skenario 2

Mengubah `element.style.width = "200px"`.

**Pertanyaan:** Tahap mana yang terpicu? Kenapa ini disebut "reflow" dan lebih mahal daripada skenario 1?

### Skenario 3

Mengubah `element.style.transform = "translateX(100px)"`.

**Pertanyaan:** Kenapa mengubah `transform` sering dianggap paling murah di antara ketiga skenario ini (petunjuk: bisa ditangani di tahap composite saja, kadang di-offload ke GPU)?

## Checklist

- [ ] Ketiga skenario sudah ditebak sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
