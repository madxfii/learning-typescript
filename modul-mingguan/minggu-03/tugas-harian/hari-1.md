# Minggu 03 - Hari 1: Review sinkron + intro callback

## Konsep hari ini

- Kode sinkron dieksekusi baris demi baris, tidak ada yang "ditunda"
- Callback = fungsi yang diberikan ke fungsi lain untuk dipanggil belakangan (belum tentu asinkron)
- Pola "didaftarkan sekarang, dijalankan nanti" adalah inti dari asinkron yang akan dieksplorasi minggu ini


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
console.log("A");
console.log("B");
console.log("C");
```

**Pertanyaan:** Ini baseline. Pastikan tidak ada keraguan: urutannya pasti A, B, C — kenapa?

### Snippet 2

```js
function processItems(items, callback) {
  for (const item of items) {
    callback(item);
  }
}
processItems([1, 2, 3], (n) => console.log("item:", n));
console.log("after processItems");
```

**Pertanyaan:** Apakah callback di sini asinkron? Kapan tepatnya "after processItems" tercetak relatif terhadap item-item lainnya?

### Snippet 3

```js
let onReadyCallback;
function onReady(cb) {
  onReadyCallback = cb;
  console.log("callback registered");
}
onReady(() => console.log("ready fired!"));
console.log("before firing");
onReadyCallback();
console.log("after firing");
```

**Pertanyaan:** Tebak urutan lengkap 4 baris log. Ini mensimulasikan ide "daftar dulu, panggil nanti" secara manual dan masih sinkron — kenapa?

### Snippet 4

```js
function divide(a, b, callback) {
  if (b === 0) {
    return callback(new Error("cannot divide by zero"));
  }
  callback(null, a / b);
}
divide(10, 2, (err, result) => {
  if (err) return console.log("error:", err.message);
  console.log("result:", result);
});
divide(10, 0, (err, result) => {
  if (err) return console.log("error:", err.message);
  console.log("result:", result);
});
```

**Pertanyaan:** Ini pola error-first callback (umum di Node.js lama). Tebak dua baris output-nya.

### Snippet 5

```js
console.log("start");
setTimeout(() => console.log("timeout callback"), 0);
console.log("end");
```

**Pertanyaan:** Ini pratinjau asinkron sungguhan. Tebak urutan 3 baris ini — kenapa "timeout callback" tidak tercetak di antara "start" dan "end" meski delay-nya 0?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
