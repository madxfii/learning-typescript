# Minggu 07 - Hari 3: Linked list dari nol

## Konsep hari ini (sesi DSA)

- Linked list: tiap node menyimpan value + pointer ke node berikutnya
- Beda dengan array: insert/delete di tengah tidak perlu menggeser elemen lain, tapi akses acak jadi O(n) (bukan O(1) seperti array)

## Spesifikasi implementasi (singly linked list)

- `add(value)` — tambah node baru di akhir list
- `removeFirst()` — hapus & kembalikan node pertama
- `find(value)` — cari node dengan value tertentu, kembalikan node tersebut atau `null`
- `toArray()` — kembalikan isi list sebagai array biasa (memudahkan pengecekan)

## Kriteria selesai

```js
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.toArray());       // [1, 2, 3]
console.log(list.find(2)?.value);  // 2
console.log(list.removeFirst().value); // 1
console.log(list.toArray());       // [2, 3]
```

## Soal LeetCode terkait

- **Reverse Linked List** (easy) — kerjakan setelah implementasi dasar di atas selesai.

## Checklist

- [ ] `LinkedList` lulus semua kriteria selesai di atas
- [ ] Soal LeetCode Reverse Linked List dikerjakan
- [ ] Kesulitan dicatat di log salah paham
