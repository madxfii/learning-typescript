# Minggu 06 - Hari 2: Prototype chain

## Konsep hari ini

- Prototype chain: saat properti/method tidak ditemukan di objek itu sendiri, JavaScript mencarinya di `[[Prototype]]`-nya, lalu prototype-nya lagi, dst
- `class ... extends` di JavaScript modern hanyalah gula sintaksis di atas prototype chain yang sama seperti cara lama (`Object.create`)

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};
const dog = new Animal("Rex");
dog.speak();
console.log(dog.hasOwnProperty("speak"));
console.log(Object.getPrototypeOf(dog) === Animal.prototype);
```

**Pertanyaan:** `speak` tidak ada langsung di `dog`, tapi bisa dipanggil. Jelaskan lewat prototype chain kenapa ini bekerja.

### Snippet 2 — cara lama sebelum ada `class`

```js
function Base() {}
Base.prototype.greet = function () { return "base greet"; };

function Derived() {}
Derived.prototype = Object.create(Base.prototype);
Derived.prototype.constructor = Derived;

const d = new Derived();
console.log(d.greet());
console.log(d instanceof Base, d instanceof Derived);
```

**Pertanyaan:** Jelaskan chain prototype `d -> Derived.prototype -> Base.prototype` yang membuat `d.greet()` bisa bekerja.

### Snippet 3 — bandingkan dengan `class`

```js
class Base2 {
  greet() { return "class base greet"; }
}
class Derived2 extends Base2 {}

const d2 = new Derived2();
console.log(d2.greet());
console.log(Object.getPrototypeOf(Derived2.prototype) === Base2.prototype);
```

**Pertanyaan:** Buktikan lewat baris terakhir bahwa `class ... extends` membangun prototype chain yang sama persis seperti snippet 2.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
