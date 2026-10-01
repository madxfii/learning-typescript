# Minggu 33 - Hari 2: Bangun module resolver

## Konsep hari ini (bangun dari nol — module resolver)

- Resolver: dari satu entry file, parse AST-nya, temukan semua `import`, ubah path relatif jadi path absolut

## Spesifikasi

- `getImports(filePath)` — parse isi file (pakai `@babel/parser` atau `acorn`), telusuri AST, kembalikan array path yang di-`import` (masih relatif, apa adanya dari source)
- `resolvePath(fromFile, importPath)` — ubah path relatif (`"./utils.js"`) jadi path absolut berdasarkan lokasi `fromFile`

## Kriteria selesai

```js
// entry.js berisi: import { helper } from "./utils.js";
console.log(getImports("./entry.js")); // ["./utils.js"]
console.log(resolvePath("./entry.js", "./utils.js")); // path absolut ke utils.js
```

## Petunjuk kalau mentok (> 30 menit)

Cari fungsi traverse/walk dari library parser pilihanmu (`@babel/traverse` kalau pakai Babel parser) untuk mengunjungi tiap node AST dan mencari tipe node `ImportDeclaration`. `path.resolve`/`path.dirname` dari modul `node:path` cukup untuk `resolvePath`.

## Checklist

- [ ] `getImports` dan `resolvePath` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
