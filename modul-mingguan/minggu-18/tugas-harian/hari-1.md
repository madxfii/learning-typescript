# Minggu 18 - Hari 1: Streams dasar — readable, writable, piping

## Konsep hari ini

- Stream membaca/menulis data bertahap (chunk demi chunk), bukan sekaligus — jauh lebih hemat memori untuk file besar
- `.pipe()` menghubungkan readable ke writable secara otomatis, termasuk menangani backpressure dasar

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak perilakunya, tulis alasannya.
3. Jalankan (siapkan file kecil untuk dicoba), bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const fs = require("fs");
const readable = fs.createReadStream(__filename);
readable.on("data", (chunk) => {
  console.log("chunk size:", chunk.length);
});
readable.on("end", () => console.log("done reading"));
```

**Pertanyaan:** File ini dibaca sekaligus atau bertahap (chunk demi chunk)? Kenapa pendekatan stream lebih hemat memori dibanding `fs.readFileSync` untuk file yang sangat besar?

### Snippet 2

```js
const fs = require("fs");
const zlib = require("zlib");
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));
```

**Pertanyaan:** `.pipe()` menghubungkan readable ke writable. Kalau writable (menulis ke disk) lebih lambat dari readable (baca dari SSD cepat), data yang belum sempat ditulis disimpan sementara di mana?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
