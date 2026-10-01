# Minggu 14 - Hari 5: Heap lanjutan — priority queue

## Konsep hari ini (sesi DSA — heap lanjutan)

- Priority queue = heap yang dibungkus supaya tiap elemen punya "prioritas" eksplisit, bukan cuma angka polos

## Spesifikasi

- Bungkus `MinHeap` dari hari 3 menjadi `PriorityQueue` generic yang menyimpan pasangan `{ priority, value }`
- `dequeue()` selalu mengambil elemen dengan `priority` terkecil lebih dulu

## Kriteria selesai

```js
const pq = new PriorityQueue();
pq.enqueue("low priority task", 5);
pq.enqueue("urgent task", 1);
pq.enqueue("medium task", 3);
console.log(pq.dequeue()); // "urgent task" (priority 1)
console.log(pq.dequeue()); // "medium task" (priority 3)
```

## Type-challenges harian

Kerjakan 3-5 soal level **medium** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri sebelum lanjut ke soal berikutnya.

## Soal LeetCode terkait

- **Top K Frequent Elements** (medium) — gabungan hash map (hitung frekuensi, minggu 5) dan heap (ambil K teratas, hari ini).

## Checklist

- [ ] `PriorityQueue` lulus kriteria selesai di atas
- [ ] Soal LeetCode Top K Frequent Elements dikerjakan
- [ ] Kesulitan dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
