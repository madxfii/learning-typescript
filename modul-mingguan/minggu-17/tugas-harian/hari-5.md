# Minggu 17 - Hari 5: DFS dari nol

## Konsep hari ini (sesi DSA)

- DFS (depth-first search) menjelajah sedalam mungkin dulu sebelum mundur (backtrack) — bisa rekursif (memakai call stack) atau eksplisit memakai `Stack` (minggu 8)

## Spesifikasi

- `dfs(graph, start)` — kembalikan array node dalam urutan kunjungan DFS dari `start` (boleh rekursif atau pakai `Stack` eksplisit)

## Kriteria selesai

```js
const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", ["D"]],
  ["D", []],
]);
console.log(dfs(graph, "A")); // urutan DFS, misal ["A", "B", "D", "C"]
```

## Refleksi

Bandingkan hasil `dfs` dengan `bfs` (hari 3) untuk graph yang sama — urutannya pasti berbeda. Kapan BFS lebih cocok dipakai (misal: mencari jalur terpendek tanpa bobot) dan kapan DFS lebih cocok (misal: mengecek keterhubungan, atau backtracking)?

## Soal LeetCode terkait

- **Flood Fill** (easy) — DFS/BFS pada grid, mirip prinsip Number of Islands tapi lebih sederhana.

## Checklist

- [ ] `dfs` lulus kriteria selesai di atas
- [ ] Soal LeetCode Flood Fill dikerjakan
- [ ] Kesulitan dicatat di log salah paham
