# Minggu 09 - Hari 4: Mulai proyek router — routing dasar

## Konsep hari ini (mulai proyek router — bagian 1)

- Mulai proyek router HTTP mini di atas `node:http`, TypeScript strict — proyek ini berlanjut sampai minggu 10 dan jadi gerbang penutup Fase 1

## Spesifikasi (bagian 1 dari proyek)

- Buat server dengan `http.createServer`, TypeScript strict
- `router.get(path, handler)`, `router.post(path, handler)` — daftarkan handler untuk method + path tertentu
- Dukung parameter path seperti `/users/:id` — handler menerima `req.params.id`
- Dukung query string (`/search?q=abc`) — handler menerima `req.query.q`
- Kalau tidak ada route yang cocok, kembalikan status 404

Mulai dengan pencocokan route memakai **loop sederhana** dulu — versi trie baru dibangun setelah jalur DSA sampai ke topik tree (sekitar minggu 13-15).

## Kriteria selesai (test manual pakai `curl`)

```
GET /users/42        -> handler menerima params.id === "42"
GET /search?q=hello  -> handler menerima query.q === "hello"
GET /not-registered  -> respons 404
```

## Petunjuk kalau mentok (> 30 menit)

Simpan tiap route terdaftar sebagai objek `{ method, pathPattern, handler }` dalam sebuah array. Untuk mencocokkan `/users/:id` dengan `/users/42`: pecah kedua path jadi segmen-segmen (`split("/")`), lalu bandingkan segmen per segmen — segmen yang diawali `:` dianggap parameter (tangkap nilainya), bukan harus sama persis dengan segmen request.

## Checklist

- [ ] Routing dasar + parameter + query string bekerja sesuai kriteria selesai
- [ ] Kesulitan dicatat di log salah paham
