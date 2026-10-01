# Minggu 03 - Hari 2: setTimeout dan task queue (macrotask)

## Konsep hari ini

- `setTimeout(fn, delay)` mendaftarkan `fn` ke task queue setelah delay minimum berlalu, bukan mengeksekusinya langsung
- Kode sinkron selalu selesai dulu sebelum task queue diproses, walau delay-nya 0
- Task dengan delay lebih kecil belum tentu selesai lebih dulu kalau ada kerjaan sinkron yang berat mendahuluinya


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
console.log("start");
setTimeout(() => console.log("timeout 100ms"), 100);
setTimeout(() => console.log("timeout 0ms"), 0);
console.log("end");
```

**Pertanyaan:** Tebak urutan lengkapnya. Apakah "timeout 0ms" pasti duluan dari "timeout 100ms"?

### Snippet 2

```js
setTimeout(() => {
  console.log("outer timeout");
  setTimeout(() => console.log("inner timeout"), 0);
}, 0);
console.log("sync code");
```

**Pertanyaan:** Kapan "inner timeout" didaftarkan ke task queue, dan kenapa itu penting untuk urutan akhirnya?

### Snippet 3

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log("tick", i), i * 100);
}
console.log("loop finished");
```

**Pertanyaan:** Tebak urutan lengkap semua log (termasuk "loop finished").

### Snippet 4

```js
setTimeout(() => console.log("timeout fired"), 0);
let sum = 0;
for (let i = 0; i < 1e6; i++) sum += i;
console.log("sync loop done", sum);
```

**Pertanyaan:** Walau delay-nya 0, kenapa "timeout fired" tetap menunggu loop sinkron yang berat selesai dulu?

### Snippet 5

```js
// tidak ada kode baru — buka Loupe (http://latentflip.com/loupe/),
// ketik ulang snippet 1-4 di atas satu per satu, jalankan,
// dan amati animasi call stack + task queue-nya.
```

**Pertanyaan:** Apakah animasi Loupe cocok dengan tebakanmu di snippet 1-4? Catat perbedaannya kalau ada.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
