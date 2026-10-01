# Minggu 02 - Hari 1: Call stack dasar

## Konsep hari ini

- Setiap pemanggilan fungsi menambah satu frame ke call stack
- Frame dihapus dari stack saat fungsi selesai (return atau habis)
- Gunakan debugger: breakpoint di baris pertama, lalu *step into* untuk masuk ke fungsi yang dipanggil


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
function a() { return b(); }
function b() { return c(); }
function c() { return "done"; }
console.log(a());
```

**Pertanyaan:** Gambarkan urutan push/pop call stack dari `a`, `b`, `c` sampai selesai.

### Snippet 2

```js
function first() {
  console.log("first start");
  second();
  console.log("first end");
}
function second() {
  console.log("second start");
  console.log("second end");
}
first();
```

**Pertanyaan:** Tebak urutan lengkap 4 baris log-nya.

### Snippet 3

```js
function double(n) { return n * 2; }
function addThenDouble(a, b) { return double(a + b); }
console.log(addThenDouble(2, 3));
```

**Pertanyaan:** Nilai apa yang dikembalikan `addThenDouble`? Jelaskan urutan frame yang terbentuk.

### Snippet 4

```js
function greet(name) { return `Hi, ${name}`; }
console.log(greet("A"), greet("B"), greet("C"));
```

**Pertanyaan:** Apakah ketiga `greet(...)` masuk stack bersamaan, atau satu per satu selesai dulu sebelum yang berikutnya dipanggil?

### Snippet 5

```js
function level1() { level2(); }
function level2() { level3(); }
function level3() { throw new Error("boom"); }

try {
  level1();
} catch (e) {
  console.log("caught:", e.message);
}
```

**Pertanyaan:** Saat `throw` terjadi di `level3`, apa yang terjadi pada frame `level3`, `level2`, `level1` di call stack?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
