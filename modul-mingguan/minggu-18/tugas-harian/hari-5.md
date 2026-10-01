# Minggu 18 - Hari 5: Deteksi siklus pada directed graph

## Konsep hari ini (sesi DSA)

- Deteksi siklus pada directed graph memakai DFS dengan 3 status per node: belum dikunjungi, sedang dalam proses (in-progress/di jalur rekursi saat ini), dan selesai

## Spesifikasi

- `hasCycle(graph)` — kembalikan `true`/`false` apakah graph berarah ini punya siklus

## Kriteria selesai

```js
const acyclic = new Map([["a", ["b"]], ["b", ["c"]], ["c", []]]);
const cyclic = new Map([["a", ["b"]], ["b", ["c"]], ["c", ["a"]]]);
console.log(hasCycle(acyclic)); // false
console.log(hasCycle(cyclic));  // true
```

## Petunjuk kalau mentok (> 30 menit)

Kalau DFS bertemu node yang statusnya "sedang dalam proses" (bukan "selesai"), itu tandanya ada siklus — kita kembali ke node yang masih ada di jalur rekursi saat ini.

## Soal LeetCode terkait

- **Course Schedule II** (medium) — gabungan topological sort (hari 3) + deteksi siklus (hari ini): kalau ada siklus, tidak mungkin ada urutan valid.

## Checklist

- [ ] `hasCycle` lulus kriteria selesai di atas
- [ ] Soal LeetCode Course Schedule II dikerjakan
- [ ] Kesulitan dicatat di log salah paham
