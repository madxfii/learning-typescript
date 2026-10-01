# Minggu 33 - Hari 3: Bangun dependency graph

## Konsep hari ini (bangun dari nol — dependency graph)

- Dari resolver (hari 2), bangun dependency graph lengkap: mulai dari entry file, ikuti tiap import secara rekursif, kumpulkan semua file yang terlibat beserta relasinya

## Spesifikasi

- `buildDependencyGraph(entryFile)` — kembalikan `Map<string, string[]>` (path file -> daftar path file yang di-import-nya), dibangun rekursif dari `entryFile` sampai semua file "daun" (tidak meng-import apa-apa lagi) tercapai

## Kriteria selesai

```js
// entry.js -> import "./a.js"
// a.js -> import "./b.js"
// b.js -> (tidak import apa-apa)
const graph = buildDependencyGraph("./entry.js");
console.log(graph.get("./entry.js")); // ["./a.js"] (path sudah di-resolve)
console.log(graph.get("./a.js"));     // ["./b.js"]
console.log(graph.get("./b.js"));     // []
```

## Petunjuk kalau mentok (> 30 menit)

Ini DFS/BFS pada graph yang "ditemukan sambil jalan" (ingat minggu 17-18) — mulai dari `entryFile`, untuk tiap file yang belum pernah dikunjungi, panggil `getImports` + `resolvePath`, lalu rekursif ke file-file hasilnya. Jangan lupa tandai file yang sudah dikunjungi supaya tidak infinite loop kalau ada circular import (ingat minggu 9 dan `hasCycle` minggu 18).

## Checklist

- [ ] `buildDependencyGraph` lulus kriteria selesai di atas
- [ ] Circular import ditangani (tidak infinite loop)
- [ ] Kesulitan dicatat di log salah paham
