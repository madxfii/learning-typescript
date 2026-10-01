# Minggu 15 - Hari 4: Validator — optional() dan union()

## Konsep hari ini (lanjut proyek validator — bagian 3)

- `optional()` dan `union()` — dua cara umum membuat schema lebih fleksibel

## Spesifikasi

- `optional(schema)` — bungkus schema lain, membolehkan `undefined` sebagai nilai tambahan yang valid (selain apa pun yang divalidasi `schema`)
- `union(schemaA, schemaB, ...)` — valid kalau input cocok dengan **salah satu** schema yang diberikan

## Kriteria selesai

```js
const bioSchema = optional(string());
console.log(bioSchema.parse(undefined)); // undefined, tidak throw
console.log(bioSchema.parse("hello"));   // "hello"

const idSchema = union(string(), number());
console.log(idSchema.parse("abc"));
console.log(idSchema.parse(123));
idSchema.parse(true); // harus throw
```

## Petunjuk kalau mentok (> 30 menit)

Untuk `union`, coba tiap schema satu per satu — kalau salah satu berhasil `parse` tanpa error, kembalikan hasilnya. Kalau semuanya gagal, baru `throw` error gabungan.

## Checklist

- [ ] `optional()` dan `union()` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
