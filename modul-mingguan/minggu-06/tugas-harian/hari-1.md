# Minggu 06 - Hari 1: 4 aturan penentuan this

## Konsep hari ini

- 4 aturan penentuan `this`: default binding, implicit binding, explicit binding (`call`/`apply`/`bind`), dan `new` binding
- Arrow function tidak punya `this` sendiri — ia mengambil `this` dari lexical scope tempat ia ditulis

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1 — default binding

```js
function showThis() {
  console.log(this);
}
showThis();
```

**Pertanyaan:** Jalankan sebagai skrip Node biasa (CommonJS, non-strict). Nilai `this` di sini apa? Apa yang berbeda kalau file diberi `"use strict"` di baris pertama?

### Snippet 2 — implicit binding

```js
const obj = {
  name: "Ahmad",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
obj.greet();
const detachedGreet = obj.greet;
detachedGreet();
```

**Pertanyaan:** Kenapa `obj.greet()` bekerja tapi `detachedGreet()` hasilnya beda (atau error)?

### Snippet 3 — explicit binding

```js
function greet() {
  console.log(`Hi, I'm ${this.name}`);
}
const person = { name: "Budi" };
greet.call(person);
greet.apply(person);
const boundGreet = greet.bind(person);
boundGreet();
```

**Pertanyaan:** Jelaskan beda `call`, `apply`, dan `bind` dari cara pemanggilannya (kapan langsung jalan, kapan cuma menghasilkan fungsi baru).

### Snippet 4 — new binding vs arrow function

```js
function Person(name) {
  this.name = name;
  this.greetArrow = () => console.log(`Arrow: ${this.name}`);
  this.greetRegular = function () { console.log(`Regular: ${this.name}`); };
}
const p = new Person("Citra");
const { greetArrow, greetRegular } = p;
greetArrow();
greetRegular();
```

**Pertanyaan:** Kenapa `greetArrow()` tetap benar walau di-destructure lepas dari `p`, sedangkan `greetRegular()` tidak?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
