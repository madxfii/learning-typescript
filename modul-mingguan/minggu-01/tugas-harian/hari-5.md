# Minggu 01 - Hari 5: Review campuran minggu 1

## Konsep hari ini

- Gabungan referensi vs nilai, scope, dan hoisting dalam satu snippet
- Latihan ini mensimulasikan gaya soal gerbang: tebak dulu, baru verifikasi


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
let a = { count: 0 };
let b = a;
a = { count: 100 };
console.log(a.count, b.count);
```

**Pertanyaan:** Kenapa `b.count` tidak ikut jadi 100 padahal tadi `b = a`?

### Snippet 2

```js
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original, copy);
```

**Pertanyaan:** Kenapa `original` tidak ikut bertambah panjang?

### Snippet 3

```js
function mix() {
  console.log(a);
  if (true) {
    var a = "var-value";
    let b = "let-value";
  }
  console.log(typeof b);
}
mix();
```

**Pertanyaan:** Tebak dua output-nya. Baris mana yang menunjukkan efek hoisting `var`, baris mana yang menunjukkan efek scope blok `let`?

### Snippet 4

```js
function updateUser(user) {
  user.age += 1;
  user = { name: "New", age: 0 };
  return user;
}

const original2 = { name: "Ahmad", age: 25 };
const result = updateUser(original2);
console.log(original2, result);
```

**Pertanyaan:** Kenapa `original2.age` berubah jadi 26, tapi `original2.name` tidak ikut jadi "New"?

### Snippet 5

```js
let status = "outer";
function checkStatus() {
  console.log(status);
  let status = "inner";
}
checkStatus();
```

**Pertanyaan:** Kenapa ini error, padahal ada `status` di scope global yang seharusnya bisa dipakai?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
