# Minggu 08 - Hari 2: Generator dasar

## Konsep hari ini

- Generator (`function*`) bisa "menjeda" eksekusinya di titik `yield`, dan dilanjutkan lagi lewat `.next()`
- `.next(arg)` bisa mengirim nilai balik ke titik `yield` yang sedang menjeda

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

**Pertanyaan:** Tebak keempat objek `{ value, done }` yang dikembalikan.

### Snippet 2

```js
function* infiniteCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const counter = infiniteCounter();
console.log(counter.next().value, counter.next().value, counter.next().value);
```

**Pertanyaan:** Kenapa `while (true)` di sini tidak membuat program hang, padahal biasanya infinite loop berbahaya?

### Snippet 3

```js
function* gen2() {
  const x = yield "first";
  console.log("received:", x);
  yield "second";
}
const it = gen2();
console.log(it.next());
console.log(it.next("hello"));
```

**Pertanyaan:** `yield` bisa menerima nilai balik lewat `.next(arg)`. Jelaskan kapan tepatnya `"received: hello"` tercetak.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
