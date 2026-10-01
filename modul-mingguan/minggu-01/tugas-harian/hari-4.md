# Minggu 01 - Hari 4: Hoisting

## Konsep hari ini

- Function declaration di-hoist beserta isinya (bisa dipanggil sebelum baris definisinya)
- Function expression / arrow function hanya nama variabelnya yang di-hoist (mengikuti aturan var/let), bukan isinya
- `var` di-hoist sebagai `undefined`; `let`/`const` di-hoist tapi masuk TDZ


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
greet();
function greet() {
  console.log("hi");
}
```

**Pertanyaan:** Kenapa ini tidak error walau `greet` dipanggil sebelum didefinisikan?

### Snippet 2

```js
greet2();
var greet2 = function () {
  console.log("hi2");
};
```

**Pertanyaan:** Apa yang terjadi di sini, dan kenapa berbeda dari snippet sebelumnya padahal sama-sama "dipanggil duluan"?

### Snippet 3

```js
function demo() {
  console.log(a);
  var a = 10;
  console.log(a);
}
demo();
```

**Pertanyaan:** Tebak dua nilai yang tercetak. Kenapa nilai pertama bukan error?

### Snippet 4

```js
const p = new Person();
class Person {}
```

**Pertanyaan:** Apa yang terjadi? Bagaimana perilaku hoisting `class` dibanding `function`?

### Snippet 5

```js
console.log(typeof foo);
var foo = "value";
function foo() {}
console.log(typeof foo);
```

**Pertanyaan:** Ada konflik nama `foo` sebagai var dan function. Tebak dua hasil `typeof foo`, mana yang menang duluan?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
