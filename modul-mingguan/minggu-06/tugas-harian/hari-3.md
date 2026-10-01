# Minggu 06 - Hari 3: Set — dedup dan operasi himpunan

## Konsep hari ini (sesi DSA, penutup blok minggu 4-6)

- `Set` menyimpan nilai unik, cek keanggotaan (`has`) rata-rata O(1), cocok untuk dedup dan operasi himpunan (union, intersection, difference)

## Tugas

### Trace

```js
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
const union = new Set([...setA, ...setB]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(union, intersection);
```

**Pertanyaan:** Sebutkan isi `union` dan `intersection`.

### Soal LeetCode

- **Contains Duplicate** (easy) — pakai `Set`, bandingkan pendekatan ini dengan nested loop dari sisi Big-O.

### Refleksi

Tuliskan singkat: kenapa `Set` lebih cocok dari array biasa untuk mengecek "apakah item ini sudah pernah diproses" pada dataset besar? Ini menutup topik DSA minggu 4-6 (Big-O, array, hash map, set) — pastikan bisa menjelaskan ketiganya sebagai satu kesatuan sebelum lanjut ke linked list minggu depan.

## Checklist

- [ ] Trace `Set` selesai dan dipahami
- [ ] Soal LeetCode Contains Duplicate selesai
- [ ] Kesulitan dicatat di log salah paham
