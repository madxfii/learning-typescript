# Assessment — Kunci Jawaban

Jangan buka file ini sebelum menjawab sendiri di [`assessment.md`](assessment.md). Tujuannya melatih tracing, bukan mengenali jawaban benar.

---

## Soal 1

```
original: { debug: true }
updated:  { debug: false, extra: true }
```

`config.debug = true` memodifikasi objek yang direferensikan `original`, jadi `original.debug` ikut berubah. Baris berikutnya, `config = {...}`, hanya mengganti apa yang ditunjuk oleh **variabel lokal** `config` ke objek baru — ini tidak memengaruhi `original` karena `original` masih menunjuk ke objek lama yang sudah dimodifikasi.

## Soal 2

```
start
end
promise
timeout
```

Kode sinkron (`console.log("start")`, `console.log("end")`) selalu selesai dulu. Setelah itu, semua microtask (Promise `.then`) diproses sampai habis sebelum satu macrotask (`setTimeout`) diambil dari task queue.

## Soal 3

```
1 2 1
```

`makeCounter()` dipanggil dua kali menghasilkan dua *environment* closure yang independen, masing-masing dengan `count` miliknya sendiri. `counterA()` dipanggil dua kali → 1, lalu 2. `counterB()` dipanggil pertama kali dari environment barunya sendiri → 1.

## Soal 4

Ya, lolos type-check. TypeScript memakai **structural typing**: kompatibilitas tipe ditentukan oleh bentuk (shape/struktur anggota), bukan nama tipenya. Karena `Vector2D` punya persis anggota `x: number` dan `y: number` seperti `Point2D`, keduanya dianggap kompatibel meski namanya berbeda (berbeda dengan nominal typing di bahasa seperti Java/C#).

## Soal 5

Tambahkan `default` yang meng-assign `shape` (yang seharusnya sudah `never` kalau semua kasus tertangani) ke variabel bertipe `never`:

```ts
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default: {
      const _exhaustive: never = shape;
      throw new Error(`Unhandled shape: ${_exhaustive}`);
    }
  }
}
```

Kalau varian `"triangle"` ditambahkan ke `Shape` tapi belum ditangani, `shape` di dalam `default` akan bertipe `{ kind: "triangle"; ... }` (bukan `never` lagi), sehingga assignment ke `_exhaustive: never` gagal type-check — TypeScript memberi error di compile time sebelum bug sampai ke production.

## Soal 6

Baris `getProp(user, "email")` gagal type-check karena `"email"` bukan bagian dari `keyof typeof user` (yang hanya `"name" | "age"`). Constraint `K extends keyof T` membatasi `key` hanya boleh salah satu properti yang benar-benar ada di `T`. Tipe `age` diinfer sebagai `number`, karena `T["age"]` (indexed access) menghasilkan tipe properti `age` di objek `user`.

## Soal 7

```
A = string
B = number
```

Conditional type `T extends Promise<infer U> ? U : T` mengecek apakah `T` cocok dengan bentuk `Promise<infer U>`. Untuk `A`, `T` adalah `Promise<string>`, cocok dengan pola tersebut, dan `infer U` menangkap `string` sebagai `U`, jadi hasilnya `string`. Untuk `B`, `T` adalah `number`, tidak cocok dengan pola `Promise<...>`, jadi jatuh ke cabang `false` (`: T`) yang mengembalikan `T` apa adanya, yaitu `number`.

## Soal 8

1. Request tetap terkirim ke server dan server tetap memprosesnya (server tidak tahu-menahu soal CORS), tapi **browser memblokir akses ke responsnya** di sisi JavaScript. Di console muncul error CORS (`No 'Access-Control-Allow-Origin' header is present...`).
2. Server perlu mengirim header `Access-Control-Allow-Origin` (misalnya `http://localhost:3000` atau `*` untuk request tanpa kredensial).
3. Karena method `PUT` dan header custom (`Content-Type: application/json` dianggap "non-simple" dalam beberapa kondisi, header lain pasti non-simple) membuat request ini bukan "simple request", browser otomatis mengirim **preflight request** memakai method `OPTIONS` terlebih dulu untuk menanyakan ke server apakah request sebenarnya diizinkan (lewat header `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, dll), sebelum mengirim request `PUT` yang asli.

## Soal 9

Urutan `setImmediate`/`readFile callback`/dst tidak 100% deterministik di top-level untuk bagian awal, tapi pola umumnya:

```
start
end
promise
timeout / immediate   (urutan keduanya di top-level TIDAK dijamin — tergantung overhead proses saat itu)
readFile callback
immediate inside readFile
timeout inside readFile
```

Penjelasan: kode sinkron jalan dulu (`start`, `end`), lalu microtask (`promise`). Di **top-level**, urutan `setTimeout(fn, 0)` vs `setImmediate` tidak dijamin karena keduanya bergantung pada berapa lama proses Node butuh untuk masuk ke fase timers vs fase check saat event loop pertama kali jalan. Tapi **di dalam callback I/O** (`fs.readFile`, yang jalan di fase poll), `setImmediate` **selalu** dieksekusi lebih dulu daripada `setTimeout(fn, 0)`, karena setelah fase poll, event loop langsung lanjut ke fase check (tempat `setImmediate` dieksekusi) sebelum kembali lagi ke fase timers di iterasi berikutnya.

## Soal 10

Versi asli: waktu O(n²) (nested loop), ruang O(1).

Versi lebih cepat:

```js
function hasDuplicate(arr) {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
}
```

Waktu O(n) (satu kali lewat array, lookup `Set` rata-rata O(1)), ruang O(n) (menyimpan sampai n elemen di `Set`). Trade-off: menukar ruang tambahan (menyimpan elemen yang sudah dilihat) untuk mempercepat waktu dari kuadratik jadi linear.

## Soal 11

`Map` (dan hash map pada umumnya) memakai hash function untuk memetakan key langsung ke lokasi penyimpanan, sehingga lookup rata-rata O(1) tanpa perlu membandingkan satu per satu. Array butuh O(n) karena harus di-scan (linear search) untuk mencocokkan key.

Kalau key berupa objek, `Map` membandingkan berdasarkan **identitas referensi**, bukan isi objeknya — jadi dua objek literal berbeda dengan isi identik (`{ id: 1 }` vs `{ id: 1 }`) dianggap key yang **berbeda**. Hanya referensi objek yang sama persis yang akan cocok dengan `get`/`has`.

## Soal 12

**Bagian A:** Versi rekursif naif adalah O(2^n) (setiap panggilan bercabang dua, banyak subproblem dihitung ulang berkali-kali).

Memoization (top-down):

```js
function fib(n, memo = new Map()) {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n);
  const result = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, result);
  return result;
}
```

Atau tabulasi (bottom-up) dengan loop. Keduanya O(n) waktu, O(n) ruang (bisa dioptimalkan ke O(1) ruang untuk versi bottom-up dengan menyimpan hanya 2 nilai terakhir).

**Bagian B** (kapasitas 2, LRU = evict yang paling lama tidak dipakai):

| Operasi | Isi cache (urutan: paling baru dipakai → paling lama) |
| --- | --- |
| `put(1, "a")` | `{1: a}` |
| `put(2, "b")` | `{2: b, 1: a}` |
| `get(1)` → `"a"` | `{1: a, 2: b}` (1 jadi paling baru dipakai) |
| `put(3, "c")` | evict `2` (paling lama tidak dipakai) → `{3: c, 1: a}` |
| `get(2)` → `undefined` (sudah di-evict) | `{3: c, 1: a}` |
| `get(3)` → `"c"` | `{3: c, 1: a}` |

Key yang di-evict saat `put(3, "c")` adalah **`2`**, karena setelah `get(1)` dipanggil, `1` menjadi yang paling baru dipakai sehingga `2` menjadi kandidat "paling lama tidak dipakai" (least recently used) di antara `1` dan `2`.
