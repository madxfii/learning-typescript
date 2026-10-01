# Minggu 14 - Hari 3: Min-heap — bangun dari nol

## Konsep hari ini (sesi DSA)

- Min-heap: complete binary tree yang disimpan sebagai array; tiap parent selalu <= children-nya
- `insert` dan `extractMin` keduanya O(log n)

## Spesifikasi implementasi

- `insert(value)`
- `extractMin()` — hapus & kembalikan nilai terkecil
- `peek()` — lihat nilai terkecil tanpa menghapus

## Kriteria selesai

```js
const heap = new MinHeap();
heap.insert(5);
heap.insert(2);
heap.insert(8);
heap.insert(1);
console.log(heap.peek());       // 1
console.log(heap.extractMin()); // 1
console.log(heap.extractMin()); // 2
```

## Type-challenges harian

Kerjakan 3-5 soal level **medium** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri sebelum lanjut ke soal berikutnya.

## Soal LeetCode terkait

- **Kth Largest Element in an Array** (medium) — bisa didekati dengan min-heap berukuran `k`.

## Checklist

- [ ] `MinHeap` lulus semua kriteria selesai di atas
- [ ] Soal LeetCode Kth Largest Element in an Array dikerjakan
- [ ] Kesulitan dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
