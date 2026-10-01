# Minggu 06 - Hari 5: Apa yang dilakukan class di baliknya + review

## Konsep hari ini

- Apa yang sebenarnya dilakukan `class` di baliknya (gula sintaksis di atas function + prototype)
- Review campuran `this` dan prototype dari hari 1-2

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
class Counter {
  #count = 0;
  increment() {
    this.#count++;
    return this.#count;
  }
}
const c1 = new Counter();
console.log(c1.increment(), c1.increment());
console.log(typeof Counter);
```

**Pertanyaan:** `#count` adalah private field. Kenapa `typeof Counter` adalah `"function"`, bukan sesuatu seperti `"class"`? Apa yang itu jadi petunjuk soal apa `class` sebenarnya di JavaScript?

### Snippet 2

```js
class Base3 {
  constructor(name) { this.name = name; }
  greet() { return `Hi ${this.name}`; }
}
class Sub3 extends Base3 {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  greet() { return `${super.greet()} (${this.role})`; }
}
const s = new Sub3("Dewi", "admin");
console.log(s.greet());
```

**Pertanyaan:** Jelaskan apa yang dilakukan `super(name)` dan `super.greet()` masing-masing, dikaitkan dengan prototype chain dari hari 2.

### Snippet 3 — bug klasik `this` dalam callback

```js
const timer = {
  seconds: 0,
  start() {
    setInterval(function () {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  },
};
```

**Pertanyaan:** Ada bug klasik terkait `this` di sini. Jelaskan bug-nya (apa yang di-increment sebenarnya), dan bagaimana memperbaikinya memakai arrow function.

## Sesi DSA tambahan (penutup blok Big-O, array, hash map, set — minggu 4-6)

Soal sintesis, menggabungkan array + hash map + set dari 3 minggu terakhir:

Soal LeetCode: **Group Anagrams** (medium) — kelompokkan array of string ke dalam grup-grup anagram, memakai `Map<string, string[]>` dengan key berupa "signature" tiap string (misalnya huruf-hurufnya diurutkan). Ini gabungan dari: iterasi array (minggu 4), hash map untuk pengelompokan (minggu 5), dan ide "keunikan key" seperti `Set` (minggu 6).

Refleksi tertulis: dari 3 minggu DSA terakhir (Big-O, array, hash map, set), struktur data mana yang paling sering kamu pakai ulang, dan kenapa?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] Soal LeetCode Group Anagrams (sesi DSA tambahan) dikerjakan
