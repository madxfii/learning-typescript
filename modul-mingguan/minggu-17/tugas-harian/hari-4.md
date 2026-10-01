# Minggu 17 - Hari 4: Kombinasi thread pool + fase event loop

## Konsep hari ini

- Kombinasi thread pool dan fase event loop dalam satu skenario, plus dampak memblokir event loop dengan operasi sync

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak urutan/perilakunya, tulis alasannya.
3. Jalankan, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const fs = require("fs");
console.log("1: start");
setTimeout(() => console.log("2: timeout"), 0);
fs.readFile(__filename, () => {
  console.log("3: readFile callback (thread pool)");
});
setImmediate(() => console.log("4: immediate"));
console.log("5: end");
```

**Pertanyaan:** Tebak urutan lengkapnya (petunjuk: `readFile` butuh waktu untuk thread pool lalu balik ke fase poll, sedangkan `setTimeout(0)` dan `setImmediate` di top-level bersaing di iterasi pertama event loop).

### Snippet 2

```js
const crypto = require("crypto");
console.log("start");
crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512"); // versi SYNC
console.log("sync pbkdf2 done");
setTimeout(() => console.log("timeout"), 0);
```

**Pertanyaan:** `pbkdf2Sync` adalah versi sinkron (tidak pakai thread pool, jalan di main thread). Apa yang terjadi pada event loop selama fungsi ini berjalan? Apakah `setTimeout` tetap terjadwal tepat waktu?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
