# Minggu 09 - Hari 5: Kenapa error module system sering muncul

## Konsep hari ini

- Review kenapa error module system (`require is not defined`, `Cannot use import statement outside a module`) sering muncul, plus refleksi keputusan desain untuk proyek router

## Snippet untuk dianalisis (tanpa perlu dijalankan, cukup tebak errornya)

### Skenario 1

```
// package.json TIDAK punya "type": "module"
// file server.js berisi:
import http from "node:http";
http.createServer((req, res) => res.end("ok")).listen(3000);
```

**Pertanyaan:** Error apa yang muncul saat `node server.js` dijalankan? Sebutkan 2 cara memperbaikinya.

### Skenario 2

```
// file server.mjs berisi:
const http = require("node:http");
```

**Pertanyaan:** Error apa yang muncul? Kenapa `require` tidak tersedia secara default di file `.mjs`?

## Refleksi tertulis (bukan kode)

Proyek router yang mulai dibangun hari 4 akan memakai module system apa — CommonJS atau ESM? Tuliskan alasan singkat berdasarkan apa yang dipelajari minggu ini (pertimbangkan: kompatibilitas dengan tooling test, kemudahan konfigurasi TypeScript strict).

## Sesi DSA tambahan (queue, lanjutan hari 3)

Konsep: queue dipakai untuk memproses aliran data yang terus masuk, sambil hanya butuh menyimpan sebagian kecil data yang masih relevan (window).

Soal LeetCode: **Moving Average from Data Stream** (easy) — implementasikan class yang menerima angka satu per satu dan mengembalikan rata-rata bergerak dari `size` angka terakhir, memakai `Queue` yang sudah dibuat hari 3 (keluarkan angka paling lama saat window penuh).

## Checklist

- [ ] Kedua skenario error sudah dianalisis dengan benar
- [ ] Keputusan module system untuk proyek router sudah ditulis + alasannya
- [ ] Kesulitan dicatat di log salah paham
- [ ] Soal LeetCode Moving Average from Data Stream (sesi DSA tambahan) dikerjakan
