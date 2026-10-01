# Minggu 33 - Hari 1: Apa itu AST

## Konsep hari ini

- AST (Abstract Syntax Tree): representasi struktur kode sebagai tree, dipakai compiler/bundler/linter untuk "memahami" kode tanpa menjalankannya

## Tugas

1. Buka [AST Explorer](https://astexplorer.net/), pilih parser Babel/JavaScript.
2. Tempel kode kecil ini:

```js
import { helper } from "./utils.js";
export function main() {
  return helper(1, 2);
}
```

3. Amati struktur tree-nya, terutama node bertipe `ImportDeclaration` dan `ExportNamedDeclaration`.

## Pertanyaan

Bagian mana dari tree yang menyimpan path `"./utils.js"`? Bagaimana caramu (secara algoritmik) mengekstrak semua path yang di-import dari sebuah file, hanya dengan menelusuri AST-nya (tanpa regex sembarangan yang gampang salah pada string/comment)?

## Checklist

- [ ] AST dari kode contoh sudah diamati di AST Explorer
- [ ] Cara mengekstrak import path dari AST sudah dijelaskan dengan kata sendiri
- [ ] Kesulitan dicatat di log salah paham
