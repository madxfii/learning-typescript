# Minggu 03 - Hari 5: Review gerbang Fase 0

## Konsep hari ini

- Hari ini bukan materi baru — fokus verifikasi kesiapan gerbang
- Gerbang: jawab benar soal 1-3 assessment tanpa menjalankan kode, dan bisa menjelaskan alasannya dengan kata-kata sendiri


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
// Kerjakan ulang soal 1-3 dari dokumen assessment (lihat catatan di bawah)
// TANPA menjalankan kode dulu. Tuliskan jawaban + alasan sebelum verifikasi.
```

**Pertanyaan:** Apakah jawabanmu sama persis dengan minggu-minggu sebelumnya, dan sudah bisa dijelaskan tanpa ragu-ragu?

### Snippet 2

```js
// Snippet ulangan gaya gabungan: referensi + scope + hoisting (minggu 1)
function reviewOne() {
  console.log(a);
  const obj = { count: 0 };
  if (true) {
    var a = obj;
    a.count = 5;
  }
  console.log(a.count, obj.count);
}
reviewOne();
```

**Pertanyaan:** Gabungkan semua yang dipelajari minggu 1: hoisting `var`, lalu efek referensi objek.

### Snippet 3

```js
// Snippet ulangan gaya gabungan: call stack + closure (minggu 2)
function makeLogger(prefix) {
  return function (msg) {
    return `${prefix}: ${msg}`;
  };
}
const logA = makeLogger("A");
const logB = makeLogger("B");
console.log(logA("hello"), logB("world"), logA("again"));
```

**Pertanyaan:** Pastikan kamu masih bisa menjelaskan closure ini tanpa membuka catatan minggu 2.

### Snippet 4

```js
// Snippet ulangan gaya gabungan: sinkron/asinkron (minggu 3)
console.log("start");
setTimeout(() => console.log("macrotask"), 0);
Promise.resolve()
  .then(() => console.log("microtask 1"))
  .then(() => console.log("microtask 2"));
console.log("end");
```

**Pertanyaan:** Tebak urutan lengkapnya sebagai latihan terakhir sebelum gerbang.

### Snippet 5

```js
// Catatan penting: dokumen "assessment" (soal 1-3, dan soal lain sampai soal 12)
// direferensikan di roadmap tapi belum ada filenya di repo ini.
// Tambahkan file assessment terpisah (atau tempel soalnya) sebelum menyatakan gerbang lulus.
```

**Pertanyaan:** Di mana lokasi dokumen assessment aslinya? Perlu ditambahkan ke repo supaya gerbang bisa diverifikasi konkret.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
