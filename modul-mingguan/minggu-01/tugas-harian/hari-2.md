# Minggu 01 - Hari 2: var vs let vs const, redeclare, dan TDZ

## Konsep hari ini

- `var` bisa di-redeclare, `let`/`const` tidak boleh
- `const` mengunci binding (tidak bisa reassign), bukan isi objeknya
- Temporal Dead Zone (TDZ): `let`/`const` "ada" tapi belum bisa diakses sebelum baris deklarasinya


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
console.log(x);
var x = 5;
```

**Pertanyaan:** Apa yang tercetak? Kenapa tidak error?

### Snippet 2

```js
console.log(y);
let y = 5;
```

**Pertanyaan:** Apa yang terjadi di sini? Kenapa beda dengan snippet sebelumnya?

### Snippet 3

```js
var z = 1;
var z = 2;
console.log(z);

let w = 1;
let w = 2;
console.log(w);
```

**Pertanyaan:** Blok mana yang error? Kenapa `var` boleh tapi `let` tidak?

### Snippet 4

```js
const config = { debug: true };
config.debug = false;
console.log(config);

const count = 1;
count = 2;
console.log(count);
```

**Pertanyaan:** Baris mana yang error? Apa bedanya antara mengubah `config.debug` dan mengubah `count`?

### Snippet 5

```js
console.log(typeof a);
var a = 1;

console.log(typeof b);
let b = 1;
```

**Pertanyaan:** Kenapa `typeof a` dan `typeof b` menghasilkan hal yang berbeda, padahal keduanya belum diisi nilai saat di-log?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
