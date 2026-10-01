# Minggu 18 - Hari 2: Backpressure

## Konsep hari ini

- Backpressure: sinyal dari writable stream bahwa buffer internalnya sudah penuh, supaya readable "menahan diri" dulu sebelum mengirim data lagi
- `write()` mengembalikan `false` saat buffer penuh — mengabaikan sinyal ini berisiko menumpuk data tak terbatas di memori

## Cara kerja

1. Baca snippet, **jangan dijalankan dulu**.
2. Tebak perilakunya, tulis alasannya.
3. Jalankan, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const { Writable } = require("stream");

const writable = new Writable({
  highWaterMark: 10, // buffer kecil biar gampang diamati
  write(chunk, encoding, callback) {
    setTimeout(callback, 100); // simulasi tulis lambat
  },
});

for (let i = 0; i < 5; i++) {
  const canContinue = writable.write(`chunk ${i}-xxxxx\n`);
  console.log(`wrote chunk ${i}, canContinue:`, canContinue);
}
```

**Pertanyaan:** `write()` mengembalikan `false` saat buffer internal writable penuh — ini sinyal backpressure. Kira-kira di iterasi keberapa `canContinue` mulai jadi `false` kalau writable jauh lebih lambat dari kecepatan pemanggilan `write()`?

**Pertanyaan lanjutan:** Kalau kode ini mengabaikan sinyal `false` dan terus memanggil `write()` tanpa henti dalam loop jutaan kali (bukan cuma 5), apa risikonya terhadap memori proses?

## Checklist

- [ ] Snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
