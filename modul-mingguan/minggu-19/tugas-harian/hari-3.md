# Minggu 19 - Hari 3: Dependency graph — build order (jembatan ke Fase 4)

## Konsep hari ini (sesi DSA — penutup blok graph, jembatan ke Fase 4)

- Menutup blok graph (minggu 16-19) dengan penerapan nyata: menentukan urutan build/load module berdasarkan dependency graph — ini jembatan langsung ke proyek bundler mini di Fase 4 (minggu 33-34)

## Spesifikasi

- Bangun "module resolver" sederhana: diberi peta dependency antar modul fiktif (`Map<string, string[]>`, tiap module bergantung ke module lain), hasilkan urutan build yang valid memakai `topologicalSort` dari minggu 18

## Kriteria selesai

```js
const deps = new Map([
  ["app", ["router", "db"]],
  ["router", ["utils"]],
  ["db", ["utils"]],
  ["utils", []],
]);
console.log(buildOrder(deps));
// "utils" harus muncul sebelum "router" dan "db", keduanya sebelum "app"
```

## Refleksi

Kalau ada dependency circular (misalnya `utils` juga bergantung balik ke `app`), apa yang seharusnya terjadi pada `buildOrder`? Kaitkan dengan `hasCycle` dari minggu 18 — bagaimana kamu akan mendeteksi dan melaporkan masalah ini alih-alih diam-diam menghasilkan urutan yang salah?

## Checklist

- [ ] `buildOrder` lulus kriteria selesai di atas
- [ ] Refleksi soal dependency circular sudah ditulis
- [ ] Kesulitan dicatat di log salah paham
