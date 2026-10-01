# Minggu 18 - Hari 3: Topological sort dari nol

## Konsep hari ini (sesi DSA)

- Topological sort: urutan node dalam directed acyclic graph (DAG) sedemikian rupa sehingga untuk tiap edge A->B, `A` selalu muncul sebelum `B` — dipakai untuk urutan build/instalasi dependency

## Spesifikasi

- `topologicalSort(graph)` — implementasikan memakai Kahn's algorithm (BFS berbasis in-degree, memanfaatkan `Queue` minggu 9) **atau** pendekatan DFS-based, pilih salah satu

## Kriteria selesai

```js
const graph = new Map([
  ["a", ["b", "c"]],
  ["b", ["d"]],
  ["c", ["d"]],
  ["d", []],
]);
console.log(topologicalSort(graph)); // salah satu urutan valid, misal ["a", "b", "c", "d"]
```

## Soal LeetCode terkait

- **Course Schedule** (medium) — deteksi apakah semua course bisa diselesaikan (graph tanpa siklus).

## Checklist

- [ ] `topologicalSort` lulus kriteria selesai di atas
- [ ] Soal LeetCode Course Schedule dikerjakan
- [ ] Kesulitan dicatat di log salah paham
