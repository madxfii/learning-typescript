# Minggu 09 - Hari 3: Queue dari nol

## Konsep hari ini (sesi DSA)

- Queue: FIFO (first in, first out) — dipakai untuk antrian task, dan nanti jadi model untuk middleware chain di router minggu depan (siapa terdaftar duluan, diproses duluan)

## Spesifikasi implementasi

- `enqueue(value)` — tambah ke belakang antrian
- `dequeue()` — ambil & hapus dari depan antrian
- `peek()` — lihat yang paling depan tanpa menghapus
- `isEmpty()` — cek kosong

## Kriteria selesai

```js
const queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
console.log(queue.peek());    // "first"
console.log(queue.dequeue()); // "first"
console.log(queue.dequeue()); // "second"
console.log(queue.isEmpty()); // false
```

## Soal LeetCode terkait

- **Implement Queue using Stacks** (easy) — latihan menggabungkan dua struktur data yang sudah dibuat (`Stack` dari minggu 8, `Queue` hari ini).

## Refleksi

Tuliskan singkat: nanti di proyek router, middleware chain akan dijalankan satu per satu sesuai urutan didaftarkan — ini persis pola FIFO seperti queue. Bagaimana kamu membayangkan queue ini dipakai untuk itu?

## Checklist

- [ ] `Queue` lulus semua kriteria selesai di atas
- [ ] Soal LeetCode Implement Queue using Stacks dikerjakan
- [ ] Kesulitan dicatat di log salah paham
