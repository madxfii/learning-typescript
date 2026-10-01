# Minggu 15 - Hari 2: Validator — object() dan array()

## Konsep hari ini (lanjut proyek validator — bagian 2)

- Schema untuk struktur komposit: `object()` dan `array()`, keduanya memvalidasi isi lewat schema lain (komposisi)

## Spesifikasi

- `object({ key: schema, ... })` — validasi tiap key sesuai schema-nya masing-masing, pastikan tidak ada key wajib yang hilang dari input
- `array(itemSchema)` — validasi bahwa input adalah array, dan tiap elemennya sesuai `itemSchema`

## Kriteria selesai

```js
const userSchema = object({ name: string(), age: number() });
console.log(userSchema.parse({ name: "Ahmad", age: 30 }));
userSchema.parse({ name: "Ahmad" }); // harus throw (age hilang)

const numbersSchema = array(number());
console.log(numbersSchema.parse([1, 2, 3]));
numbersSchema.parse([1, "two", 3]); // harus throw
```

## Petunjuk kalau mentok (> 30 menit)

`object()` dan `array()` sama-sama memakai `parse()` dari schema lain di dalam `parse()` mereka sendiri — ini komposisi, mirip middleware chain (minggu 10) yang memanggil fungsi lain di dalamnya.

## Checklist

- [ ] `object()` dan `array()` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
