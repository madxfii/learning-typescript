# Minggu 07 - Hari 2: Error handling asinkron & nuansa Promise.resolve/reject

## Konsep hari ini

- Error di dalam `async function` (baik `throw` maupun reject) menjadi Promise yang rejected, bukan langsung meng-crash program
- Resolve sebuah Promise dengan Promise lain otomatis "diratakan" (flattening), tidak jadi nested Promise

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
async function mightFail(shouldFail) {
  if (shouldFail) throw new Error("failed inside async");
  return "ok";
}
mightFail(true).catch((e) => console.log("caught:", e.message));
mightFail(false).then((v) => console.log("resolved:", v));
```

**Pertanyaan:** `throw` di dalam `async function` tidak langsung meng-crash script. Kenapa, dan ke mana perginya error itu?

### Snippet 2

```js
Promise.resolve(Promise.resolve(42)).then((v) => console.log(v));
```

**Pertanyaan:** Me-resolve sebuah Promise dengan Promise lain — apakah `.then` menerima nested Promise, atau langsung nilainya (42)? Kenapa?

### Snippet 3

```js
const p1 = Promise.reject(new Error("unhandled?"));
setTimeout(() => {
  p1.catch((e) => console.log("caught late:", e.message));
}, 100);
```

**Pertanyaan:** Antara `reject` dan `.catch` ada jeda waktu. Kenapa pola seperti ini berisiko memicu warning "UnhandledPromiseRejection" di Node.js, dan kenapa itu berbahaya di kode nyata?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
