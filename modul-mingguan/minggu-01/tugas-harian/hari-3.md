# Minggu 01 - Hari 3: Function scope vs block scope, shadowing

## Konsep hari ini

- `var` terikat ke scope fungsi, `let`/`const` terikat ke scope blok (`{}`)
- Variabel dengan nama sama di scope dalam akan "menutupi" (shadow) variabel di scope luar


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
function testVar() {
  if (true) {
    var a = "inside if";
  }
  console.log(a);
}
testVar();
```

**Pertanyaan:** Kenapa `a` masih bisa diakses di luar blok `if`?

### Snippet 2

```js
function testLet() {
  if (true) {
    let b = "inside if";
  }
  console.log(b);
}
testLet();
```

**Pertanyaan:** Apa yang terjadi di sini, dan kenapa berbeda dari snippet sebelumnya?

### Snippet 3

```js
for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
console.log(j);
```

**Pertanyaan:** Baris mana yang error? Kenapa `i` masih hidup di luar loop tapi `j` tidak?

### Snippet 4

```js
let x = "outer";
function shadow() {
  let x = "inner";
  console.log(x);
}
shadow();
console.log(x);
```

**Pertanyaan:** Apakah memanggil `shadow()` mengubah nilai `x` di luar? Kenapa?

### Snippet 5

```js
let value = "global";
function outer() {
  var value = "outer-var";
  {
    let value = "block-let";
    console.log(value);
  }
  console.log(value);
}
outer();
console.log(value);
```

**Pertanyaan:** Ada 3 `console.log`. Tebak ketiga nilainya satu per satu dan jelaskan kenapa masing-masing merujuk ke `value` yang mana.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
