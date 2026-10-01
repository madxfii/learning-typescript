# Minggu 17 - Hari 3: Graph — representasi & BFS dari nol

## Konsep hari ini (sesi DSA)

- Adjacency list (`Map<node, node[]>`) adalah representasi graph yang umum
- BFS menjelajah level demi level memakai `Queue` — persis struktur data yang sudah dibuat di minggu 9

## Spesifikasi

- Representasikan graph sebagai `Map<string, string[]>`
- `bfs(graph, start)` — kembalikan array node dalam urutan kunjungan BFS dari `start`

## Kriteria selesai

```js
const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", ["D"]],
  ["D", []],
]);
console.log(bfs(graph, "A")); // ["A", "B", "C", "D"]
```

## Soal LeetCode terkait

- **Number of Islands** (medium) — BFS/DFS pada grid, graph implisit lewat koordinat tetangga.

## Checklist

- [ ] `bfs` lulus kriteria selesai di atas
- [ ] Soal LeetCode Number of Islands dikerjakan
- [ ] Kesulitan dicatat di log salah paham
