# Minggu 03 - Hari 4: Puzzle campuran: macrotask vs microtask

## Konsep hari ini

- Urutan baku: semua kode sinkron -> semua microtask (habis) -> satu macrotask -> semua microtask lagi -> macrotask berikutnya, dst
- `async/await` adalah gula sintaksis di atas Promise — `await` menjeda fungsi dan sisanya jadi microtask


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

**Pertanyaan:** Ini puzzle klasik. Tebak urutan angka yang tercetak sebelum menjalankan apa pun.

### Snippet 2

```js
async function foo() {
  console.log("foo start");
  await null;
  console.log("foo end");
}
console.log("script start");
foo();
console.log("script end");
```

**Pertanyaan:** `await null` mirip `Promise.resolve().then(...)` untuk kode setelahnya. Tebak urutan 4 log ini.

### Snippet 3

```js
console.log("A");
setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
}, 0);
Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => console.log("E"), 0);
});
console.log("F");
```

**Pertanyaan:** Ini gabungan macrotask yang mendaftarkan microtask, dan microtask yang mendaftarkan macrotask. Tebak urutan lengkapnya.

### Snippet 4

```js
setTimeout(() => console.log("timeout 1"), 0);
Promise.resolve().then(() => console.log("promise 1"));
setTimeout(() => console.log("timeout 2"), 0);
Promise.resolve().then(() => console.log("promise 2"));
```

**Pertanyaan:** Ada 2 macrotask dan 2 microtask terdaftar berselang-seling. Tebak urutan lengkapnya.

### Snippet 5

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
new Promise((resolve) => {
  console.log("3");
  resolve();
}).then(() => {
  console.log("4");
  setTimeout(() => console.log("5"), 0);
  Promise.resolve().then(() => console.log("6"));
});
console.log("7");
```

**Pertanyaan:** Ini level tersulit minggu ini. Perhatikan: executor `new Promise((resolve) => {...})` jalan SINKRON. Tebak urutan 6 angka yang tercetak.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
