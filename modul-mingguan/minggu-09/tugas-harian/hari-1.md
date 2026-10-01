# Minggu 09 - Hari 1: CommonJS vs ESM — live binding vs salinan nilai

## Konsep hari ini

- CommonJS (`require`/`module.exports`) menyalin **nilai** primitif saat di-export
- ESM (`import`/`export`) memakai **live binding** — perubahan pada variabel di modul asal ikut terlihat di modul yang meng-`import`
- Ini butuh dicoba sebagai file terpisah sungguhan (bukan satu snippet), karena keduanya soal antar-modul

## Cara kerja

1. Buat file-file di bawah ini persis, **jangan dijalankan dulu**.
2. Tebak output tiap skenario, tulis alasannya.
3. Jalankan sungguhan (`node main.cjs` / `node main.mjs`), bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Skenario 1 — CommonJS: salinan nilai

```js
// counter.cjs
let count = 0;
function increment() { count++; }
module.exports = { count, increment };
```

```js
// main.cjs
const { count, increment } = require("./counter.cjs");
increment();
console.log(count);
```

**Pertanyaan:** Tebak output `main.cjs`. Kenapa `count` di `main.cjs` tidak ikut berubah walau `increment()` sudah dipanggil? (petunjuk: `module.exports` menyalin nilai `count` saat itu juga, bukan referensi ke variabelnya)

## Skenario 2 — ESM: live binding

```js
// counter.mjs
export let count = 0;
export function increment() { count++; }
```

```js
// main.mjs
import { count, increment } from "./counter.mjs";
increment();
console.log(count);
```

**Pertanyaan:** Jalankan dengan `node main.mjs`. Tebak output-nya — apakah sama dengan versi CommonJS, atau berbeda? Ini yang disebut "live binding".

## Skenario 3 — error klasik campur ESM/CommonJS

Coba dua hal berikut secara terpisah, tebak error apa yang muncul untuk masing-masing:

1. File `server.js` (tanpa `"type": "module"` di `package.json`) berisi `import http from "node:http";`
2. File `server.mjs` berisi `const http = require("node:http");`

**Pertanyaan:** Error apa yang muncul di masing-masing kasus, dan kenapa?

## Checklist

- [ ] Ketiga skenario sudah dicoba sungguhan sebagai file, bukan cuma dibayangkan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
