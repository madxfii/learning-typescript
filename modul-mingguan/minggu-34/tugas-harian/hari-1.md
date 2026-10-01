# Minggu 34 - Hari 1: Bangun bundle() — gabung module jadi satu file

## Konsep hari ini (bangun dari nol — bundling)

- Menggabungkan semua module (hasil transformasi minggu 33) jadi satu file, dengan tiap module dibungkus scope function terpisah supaya variabel antar module tidak saling bentrok (name collision)

## Spesifikasi

- `bundle(entryFile)`:
  1. `buildDependencyGraph(entryFile)` (minggu 33)
  2. Urutkan semua file dengan `topologicalSort` (minggu 18) supaya dependency selalu didefinisikan sebelum dipakai
  3. Untuk tiap file, `transformModule` (minggu 33) isinya, lalu bungkus dalam function: `modules["path/ke/file.js"] = function(module, exports, require) { ...kode hasil transform... }`
  4. Gabungkan semua function module itu jadi satu file, plus sebuah "module loader" kecil yang tahu cara memanggil `require()` di antara module-module ini

## Kriteria selesai

```js
const bundledCode = bundle("./entry.js");
// bundledCode adalah string berisi SATU file JS utuh yang, kalau dijalankan,
// berperilaku sama seperti menjalankan entry.js beserta semua dependency-nya
```

## Petunjuk kalau mentok (> 30 menit)

"Module loader" kecil ini intinya cuma: `require(path)` mencari `modules[path]`, menjalankannya sekali (kalau belum pernah), menyimpan `module.exports` hasilnya di cache, lalu mengembalikan cache itu untuk pemanggilan `require(path)` berikutnya (mirip cara Node.js sendiri meng-cache hasil `require`).

## Checklist

- [ ] `bundle(entryFile)` menghasilkan satu string kode gabungan sesuai spesifikasi
- [ ] Kesulitan dicatat di log salah paham
