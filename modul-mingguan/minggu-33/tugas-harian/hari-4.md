# Minggu 33 - Hari 4: Bangun transformasi import/export

## Konsep hari ini (bangun dari nol — transformasi kode)

- Bundler perlu mengubah `import`/`export` (yang cuma valid dalam konteks module asli) jadi kode yang bisa jalan di dalam satu file gabungan — dibungkus jadi "module function" dengan `require`/`exports` internal buatan sendiri

## Spesifikasi

- `transformModule(code)` — ubah statement `import { x } from "./mod.js"` jadi `const { x } = require("./mod.js")`, dan `export function foo() {}` jadi assignment ke `exports.foo`

## Kriteria selesai

```js
const input = `
import { helper } from "./utils.js";
export function main() {
  return helper(1, 2);
}
`;
console.log(transformModule(input));
// kira-kira menghasilkan:
// const { helper } = require("./utils.js");
// function main() { return helper(1, 2); }
// exports.main = main;
```

## Petunjuk kalau mentok (> 30 menit)

Kamu sudah tahu cara menemukan `ImportDeclaration` (hari 2). Sekarang manipulasi AST-nya (ganti node itu dengan node `require` yang setara), lalu generate ulang kode dari AST yang sudah dimodifikasi (`@babel/generator` kalau pakai Babel).

## Checklist

- [ ] `transformModule` lulus kriteria selesai di atas untuk kasus import/export sederhana
- [ ] Kesulitan dicatat di log salah paham
