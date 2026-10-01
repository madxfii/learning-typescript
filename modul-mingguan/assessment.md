# Assessment — Roadmap TypeScript

Soal-soal ini dirujuk sebagai gerbang di beberapa fase pada [roadmap](../Roadmap%20TypeScript%20Dari%20Tracing%20sampai%20Membedah%20Framework.md). Kerjakan dengan aturan yang sama seperti trace harian:

1. Jawab dulu tanpa menjalankan kode / membuka compiler.
2. Tulis alasannya dengan kata-kata sendiri.
3. Baru verifikasi (jalankan kode, cek di TypeScript Playground, dsb).
4. Kunci jawaban ada di file terpisah [`assessment-kunci-jawaban.md`](assessment-kunci-jawaban.md) — jangan dibuka sebelum menjawab.

Dipakai di gerbang:

| Soal | Fase / minggu | Dipakai di gerbang |
| --- | --- | --- |
| 1–3 | Fase 0 (minggu 1–3) | [Minggu 03](minggu-03/README.md) |
| 2 | Fase 1 (minggu 4–10) | [Minggu 10](minggu-10/README.md) — diulang untuk penguatan |
| 4–7 | Fase 2 (minggu 11–16) | [Minggu 16](minggu-16/README.md) |
| 8 | Fase 3 (minggu 19–20, CORS) | dipakai saat materi HTTP |
| 9 | Fase 3 (minggu 17–18, Node.js) | dipakai saat materi Node.js internals |
| 10–11 | DSA (minggu 4–6) | latihan Big-O / hash map / set |
| 12 | DSA (minggu 23–24) | latihan DP dasar / LRU cache |

---

## Soal 1 — Nilai vs referensi (Fase 0)

```js
function updateConfig(config) {
  config.debug = true;
  config = { debug: false, extra: true };
  return config;
}

const original = { debug: false };
const updated = updateConfig(original);
console.log(original, updated);
```

Tebak isi `original` dan `updated`. Jelaskan kenapa reassignment `config = {...}` di dalam fungsi tidak memengaruhi `original`, padahal `config.debug = true` sebelumnya memengaruhi.

## Soal 2 — Urutan output async (Fase 0 & 1)

```js
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
```

Tebak urutan lengkap 4 baris log. Jelaskan bedanya microtask queue (Promise) dan macrotask/task queue (`setTimeout`), dan kenapa keduanya selalu kalah dari kode sinkron.

## Soal 3 — Call stack dan closure (Fase 0)

```js
function makeCounter() {
  let count = 0;
  return () => ++count;
}

const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA(), counterA(), counterB());
```

Tebak 3 nilai yang tercetak. Jelaskan kenapa `counterA` dan `counterB` tidak saling memengaruhi walau berasal dari fungsi yang sama.

## Soal 4 — Structural typing (Fase 2)

```ts
interface Point2D { x: number; y: number }
interface Vector2D { x: number; y: number }

function printPoint(p: Point2D) {
  console.log(p.x, p.y);
}

const v: Vector2D = { x: 1, y: 2 };
printPoint(v);
```

Apakah `printPoint(v)` lolos type-check meski `Point2D` dan `Vector2D` adalah dua tipe berbeda namanya? Jelaskan berdasarkan structural typing vs nominal typing.

## Soal 5 — Discriminated union & exhaustiveness check (Fase 2)

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}
```

Kalau `Shape` ditambah varian baru `{ kind: "triangle"; base: number; height: number }` tapi fungsi `area` tidak diupdate, bagaimana caranya membuat TypeScript **memberi error di compile time** karena kasus `"triangle"` belum ditangani? (petunjuk: tambahkan `default` yang memanfaatkan tipe `never`)

## Soal 6 — Generics, `keyof`, indexed access (Fase 2)

```ts
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Ahmad", age: 30 };
const age = getProp(user, "age");
const invalid = getProp(user, "email");
```

Baris mana yang gagal type-check, dan kenapa? Tipe apa yang diinfer untuk `age`?

## Soal 7 — Conditional types dan `infer` (Fase 2)

```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type A = UnwrapPromise<Promise<string>>;
type B = UnwrapPromise<number>;
```

Apa tipe `A` dan `B`? Jelaskan langkah demi langkah bagaimana TypeScript mengevaluasi conditional type ini, termasuk peran `infer U`.

## Soal 8 — CORS (Fase 3)

Frontend berjalan di `http://localhost:3000` melakukan `fetch("http://localhost:4000/api/users")` ke server yang **tidak** mengirim header CORS apa pun.

1. Apa yang terjadi di browser (request tetap sampai ke server atau tidak, dan apa yang terlihat di console)?
2. Header apa yang perlu ditambahkan server supaya request ini berhasil?
3. Kalau request-nya diganti jadi `PUT` dengan header custom (`Content-Type: application/json` + header lain), request tambahan apa yang otomatis dikirim browser sebelum request sebenarnya, dan kenapa?

## Soal 9 — Event loop Node.js lintas fase (Fase 3)

```js
const fs = require("fs");

console.log("start");

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));

fs.readFile(__filename, () => {
  console.log("readFile callback");
  setTimeout(() => console.log("timeout inside readFile"), 0);
  setImmediate(() => console.log("immediate inside readFile"));
});

Promise.resolve().then(() => console.log("promise"));

console.log("end");
```

Tebak urutan lengkapnya. Jelaskan kenapa urutan `setTimeout` vs `setImmediate` di top-level bisa tidak konsisten, tapi di dalam callback `fs.readFile` (fase poll) urutannya selalu pasti.

## Soal 10 — Big-O dan trade-off ruang vs waktu (DSA)

```js
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

Berapa kompleksitas waktu dan ruang fungsi ini? Tulis ulang memakai `Set` supaya lebih cepat, sebutkan kompleksitas waktu/ruang versi barunya, dan jelaskan trade-off-nya.

## Soal 11 — Cache sederhana dengan hash map (DSA)

```js
function createCache() {
  const store = new Map();
  return {
    get(key) { return store.get(key); },
    set(key, value) { store.set(key, value); },
    has(key) { return store.has(key); },
  };
}
```

Kenapa `get`/`set`/`has` di sini rata-rata O(1), padahal implementasi array butuh O(n) untuk mencari key yang cocok? Kalau `key` yang dipakai adalah objek (bukan string/number), apa yang perlu diperhatikan soal identitas referensi objek di `Map`?

## Soal 12 — DP dasar dan LRU cache (DSA)

Bagian A — DP dasar:

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

Berapa kompleksitas waktu versi rekursif naif ini? Ubah jadi versi memoization (top-down) atau tabulasi (bottom-up), dan sebutkan kompleksitas waktu/ruang versi barunya.

Bagian B — LRU cache, kapasitas 2:

```
put(1, "a")
put(2, "b")
get(1)
put(3, "c")   // harus evict salah satu key
get(2)
get(3)
```

Trace isi cache setelah tiap operasi, dan sebutkan key mana yang di-evict saat `put(3, "c")` dijalankan, beserta alasannya.
