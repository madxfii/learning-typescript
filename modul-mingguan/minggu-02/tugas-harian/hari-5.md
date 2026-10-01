# Minggu 02 - Hari 5: Debugger mastery + review campuran

## Konsep hari ini

- Latihan menggunakan breakpoint bersyarat dan watch variable untuk kasus yang lebih rumit
- Gabungan call stack + rekursi + closure


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
function makeDepthTracker() {
  let maxDepth = 0;
  function recurse(n, depth = 0) {
    maxDepth = Math.max(maxDepth, depth);
    if (n <= 0) return;
    recurse(n - 1, depth + 1);
  }
  return { recurse, getMaxDepth: () => maxDepth };
}
const tracker = makeDepthTracker();
tracker.recurse(3);
console.log(tracker.getMaxDepth());
```

**Pertanyaan:** Pasang watch pada `maxDepth` dan `depth`, lalu step into tiap panggilan rekursif. Kenapa `maxDepth` bisa "selamat" walau `recurse` sudah selesai?

### Snippet 2

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3));
```

**Pertanyaan:** ini pola currying. Trace berapa banyak closure environment yang terbentuk, dan variabel apa yang disimpan masing-masing.

### Snippet 3

```js
function safeDivide(a, b) {
  function checkDivisor() {
    if (b === 0) throw new Error("division by zero");
  }
  checkDivisor();
  return a / b;
}
try {
  console.log(safeDivide(10, 0));
} catch (e) {
  console.log("error:", e.message);
}
```

**Pertanyaan:** `checkDivisor` tidak menerima parameter `b`, tapi bisa mengaksesnya. Kenapa?

### Snippet 4

```js
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log("from cache");
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
const slowSquare = (n) => n * n;
const fastSquare = memoize(slowSquare);
console.log(fastSquare(4));
console.log(fastSquare(4));
```

**Pertanyaan:** Panggilan kedua `fastSquare(4)` tidak menjalankan `slowSquare` lagi. Jelaskan lewat closure kenapa `cache` bisa "bertahan" antar panggilan.

### Snippet 5

```js
function build() {
  let log = [];
  function step(label) {
    log.push(label);
    return log;
  }
  return step;
}
const s1 = build();
const s2 = build();
s1("a");
s1("b");
s2("x");
console.log(s1("c"), s2("y"));
```

**Pertanyaan:** Soal gaya gerbang: tebak isi array yang di-log untuk `s1("c")` dan `s2("y")` sebelum menjalankan apa pun.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
