# Minggu 11 - Hari 5: BST — search & insert dengan aturan eksplisit

## Konsep hari ini (sesi DSA)

- BST (Binary Search Tree): aturan eksplisit — node kiri selalu lebih kecil dari parent, node kanan selalu lebih besar

## Spesifikasi implementasi

- `insert(value)` — sekarang eksplisit mengikuti aturan BST (kiri lebih kecil, kanan lebih besar atau sama)
- `search(value)` — kembalikan `true`/`false` apakah value ada di tree, dengan memanfaatkan aturan BST supaya tidak perlu mengunjungi semua node

## Kriteria selesai

```js
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
console.log(bst.inOrderTraversal()); // [1, 3, 5, 7] -- urut menaik
console.log(bst.search(7));  // true
console.log(bst.search(4));  // false
```

## Soal LeetCode terkait

- **Search in a Binary Search Tree** (easy).

## Refleksi

Kenapa `inOrderTraversal()` pada BST selalu menghasilkan array yang terurut menaik, sementara pada binary tree biasa (hari 3) tidak tentu begitu?

## Checklist

- [ ] `BST` dengan `insert` dan `search` lulus kriteria selesai
- [ ] Soal LeetCode Search in a BST dikerjakan
- [ ] Kesulitan dicatat di log salah paham
