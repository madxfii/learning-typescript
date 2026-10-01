# Minggu 09 - Hari 2: Circular import

## Konsep hari ini

- Circular import: dua modul saling `require` satu sama lain — salah satu akan menerima `module.exports` yang belum lengkap (partial) saat itu terjadi

## Cara kerja

1. Buat ketiga file di bawah ini persis, **jangan dijalankan dulu**.
2. Tebak urutan log lengkapnya, tulis alasannya.
3. Jalankan `node main.cjs`, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Skenario

```js
// a.cjs
console.log("a.cjs start");
const b = require("./b.cjs");
console.log("in a.cjs, b.value =", b.value);
module.exports = { value: "from a" };
console.log("a.cjs end");
```

```js
// b.cjs
console.log("b.cjs start");
const a = require("./a.cjs");
console.log("in b.cjs, a.value =", a.value);
module.exports = { value: "from b" };
console.log("b.cjs end");
```

```js
// main.cjs
require("./a.cjs");
```

**Pertanyaan:** Tebak urutan log lengkapnya. File mana yang menerima `module.exports` dari file lain dalam keadaan belum lengkap (masih kosong/`undefined`), dan kenapa itu terjadi (urutan `require` mana yang menyebabkannya)?

## Checklist

- [ ] Skenario sudah dicoba sungguhan sebagai 3 file terpisah
- [ ] Bisa menjelaskan kenapa circular import berbahaya di kode nyata
- [ ] Selisih tebakan dicatat di log salah paham
