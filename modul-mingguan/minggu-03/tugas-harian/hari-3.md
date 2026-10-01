# Minggu 03 - Hari 3: Promise dasar dan microtask

## Konsep hari ini

- Promise merepresentasikan nilai yang akan ada nanti (pending -> fulfilled/rejected)
- Callback `.then/.catch/.finally` masuk ke **microtask queue**, bukan macrotask queue seperti `setTimeout`
- Semua microtask yang ada di antrean dijalankan sampai habis sebelum macrotask berikutnya diproses


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
console.log("start");
Promise.resolve().then(() => console.log("promise then"));
console.log("end");
```

**Pertanyaan:** Tebak urutan 3 baris ini. Apakah "promise then" tercetak sebelum atau sesudah "end"?

### Snippet 2

```js
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
```

**Pertanyaan:** Bandingkan dengan minggu ini hari 2. Mana yang lebih dulu tercetak, "timeout" atau "promise"? Kenapa?

### Snippet 3

```js
Promise.resolve(1)
  .then((v) => { console.log("first then", v); return v + 1; })
  .then((v) => { console.log("second then", v); return v + 1; })
  .then((v) => console.log("third then", v));
console.log("sync end");
```

**Pertanyaan:** Tebak urutan lengkapnya, termasuk nilai `v` di tiap `.then`.

### Snippet 4

```js
Promise.reject(new Error("fail"))
  .then(() => console.log("this won't run"))
  .catch((e) => console.log("caught:", e.message))
  .finally(() => console.log("finally runs"));
console.log("sync end 2");
```

**Pertanyaan:** Kenapa `.then` pertama dilewati? Tebak urutan log yang benar-benar tercetak.

### Snippet 5

```js
console.log("start");
Promise.resolve().then(() => {
  console.log("microtask 1");
  Promise.resolve().then(() => console.log("microtask 1a (queued inside 1)"));
});
Promise.resolve().then(() => console.log("microtask 2"));
console.log("end");
```

**Pertanyaan:** "microtask 1a" didaftarkan saat microtask queue sedang diproses. Apakah dia tercetak sebelum atau sesudah "microtask 2"? Kenapa?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
