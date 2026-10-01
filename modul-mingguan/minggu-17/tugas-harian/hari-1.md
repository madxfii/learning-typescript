# Minggu 17 - Hari 1: Fase-fase event loop Node.js

## Konsep hari ini

- Event loop Node punya fase eksplisit: timers -> pending callbacks -> poll -> check -> close callbacks
- `process.nextTick` dan microtask Promise diproses di antara tiap fase, bahkan sebelum fase berikutnya dimulai

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak urutan outputnya, tulis alasannya.
3. Jalankan dengan `node namafile.js`, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
console.log("start");
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));
console.log("end");
```

**Pertanyaan:** Tebak urutan lengkapnya. `process.nextTick` diproses di mana relatif terhadap microtask Promise dan terhadap fase-fase event loop?

### Snippet 2

```js
const fs = require("fs");
fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout in readFile"), 0);
  setImmediate(() => console.log("immediate in readFile"));
  process.nextTick(() => console.log("nextTick in readFile"));
});
```

**Pertanyaan:** Di dalam callback I/O (fase poll), urutan ketiganya **selalu pasti** (beda dari kalau ditulis di top-level seperti Soal 9 di assessment). Tebak urutannya dan jelaskan kenapa pasti.

### Snippet 3

```js
function recursiveNextTick(n) {
  if (n <= 0) return;
  process.nextTick(() => recursiveNextTick(n - 1));
}
console.log("before");
recursiveNextTick(3);
setTimeout(() => console.log("timeout ever runs?"), 0);
console.log("after");
```

**Pertanyaan:** `process.nextTick` yang memanggil dirinya sendiri berulang bisa "kelaparan" (starve) fase timer. Untuk `n = 3` ini, apakah `"timeout ever runs?"` tetap tercetak? Apa risikonya kalau `n` sangat besar atau rekursinya tak berhenti?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
