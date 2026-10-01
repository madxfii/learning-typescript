# Minggu 02 - Hari 4: Closure dalam loop (jebakan klasik) dan pattern counter

## Konsep hari ini

- `var` dalam loop dibagikan satu variabel untuk semua closure; `let` dalam loop membuat binding baru tiap iterasi
- Ini adalah jebakan klasik yang sering muncul di kode nyata (misalnya loop yang mendaftarkan callback)


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}
```

**Pertanyaan:** Tebak tiga angka yang tercetak. Kenapa bukan 0, 1, 2?

### Snippet 2

```js
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
```

**Pertanyaan:** Kenapa hasilnya berbeda dari versi `var` di atas?

### Snippet 3

```js
for (var k = 0; k < 3; k++) {
  (function (captured) {
    setTimeout(() => console.log("iife:", captured), 0);
  })(k);
}
```

**Pertanyaan:** Ini cara lama memperbaiki jebakan `var` sebelum ada `let`. Kenapa IIFE ini berhasil?

### Snippet 4

```js
function makeFns() {
  var fns = [];
  for (var i = 0; i < 3; i++) {
    fns.push(function () { return i; });
  }
  return fns;
}
const fns = makeFns();
console.log(fns[0](), fns[1](), fns[2]());
```

**Pertanyaan:** Tanpa `setTimeout` sekalipun, kenapa ketiga fungsi ini tetap mengembalikan nilai yang sama?

### Snippet 5

```js
function makeFnsLet() {
  let fns = [];
  for (let i = 0; i < 3; i++) {
    fns.push(function () { return i; });
  }
  return fns;
}
const fnsLet = makeFnsLet();
console.log(fnsLet[0](), fnsLet[1](), fnsLet[2]());
```

**Pertanyaan:** Bandingkan dengan snippet sebelumnya — apa satu-satunya perubahan, dan kenapa itu cukup mengubah hasilnya?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
