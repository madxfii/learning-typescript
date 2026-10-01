# Minggu 07 - Hari 1: Promise state & chaining

## Konsep hari ini

- Promise punya 3 state: pending -> fulfilled atau rejected, dan sekali settle tidak bisa berubah lagi
- `.then` mengembalikan Promise baru, sehingga bisa di-chain; `.then` berikutnya menunggu Promise yang dikembalikan `.then` sebelumnya

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const p = new Promise((resolve, reject) => {
  console.log("executor runs");
  resolve("done");
  reject("won't matter");
});
p.then((v) => console.log("resolved:", v))
 .catch((e) => console.log("rejected:", e));
```

**Pertanyaan:** Executor jalan sinkron. Apakah `reject` setelah `resolve` berpengaruh? Kenapa Promise cuma bisa "settle" sekali?

### Snippet 2

```js
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
delay(50, "first")
  .then((v) => { console.log(v); return delay(50, "second"); })
  .then((v) => console.log(v));
console.log("sync end");
```

**Pertanyaan:** Tebak urutan lengkapnya. Kenapa `.then` kedua menunggu Promise yang dikembalikan `.then` pertama, bukan langsung jalan?

### Snippet 3

```js
Promise.resolve("a")
  .then((v) => v)
  .then((v) => { throw new Error("boom: " + v); })
  .then((v) => console.log("never runs:", v))
  .catch((e) => console.log("caught:", e.message));
```

**Pertanyaan:** `.then` mana yang dilewati? Jelaskan bagaimana error "menjalar" lewat chain sampai ketemu `.catch`.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
