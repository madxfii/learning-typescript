# Minggu 16 - Hari 3: Pengantar graph (ringan)

## Konsep hari ini (sesi DSA — pengantar ringan graph)

- Graph = kumpulan node (vertex) yang terhubung lewat edge; representasi paling umum adalah **adjacency list**
- Hari ini sengaja ringan (representasi dasar saja) supaya waktu maksimal tetap fokus ke gerbang Fase 2. Detail traversal BFS/DFS menyusul minggu 17-19.

## Tugas

1. Buat representasi graph sederhana dari data fiktif, misalnya dependency antar 5 module (`Map<string, string[]>`, key = nama module, value = daftar module yang menjadi dependensinya).
2. Tulis fungsi `getNeighbors(graph, node)` yang mengembalikan daftar tetangga langsung sebuah node.

## Sesi DSA tambahan (pencarian jalur sederhana)

Soal LeetCode: **Find if Path Exists in Graph** (easy) — cek apakah ada jalur dari node awal ke node tujuan, memakai DFS rekursif sederhana (ingat pola rekursi dari minggu 2, 7, 10, 12).

## Checklist

- [ ] Representasi graph + `getNeighbors` selesai
- [ ] Soal LeetCode Find if Path Exists in Graph dikerjakan
- [ ] Kesulitan dicatat di log salah paham
