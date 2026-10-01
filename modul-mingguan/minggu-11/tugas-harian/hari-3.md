# Minggu 11 - Hari 3: Binary tree — bangun dari nol

## Konsep hari ini (sesi DSA)

- Binary tree: tiap node punya `value`, `left`, dan `right`
- Traversal (in-order, pre-order, post-order) adalah rekursi murni — sama polanya dengan minggu 2 dan 10

## Spesifikasi implementasi

- Node menyimpan `value`, `left`, `right` (awalnya `null`)
- `insert(value)` — untuk hari ini, cukup masukkan node baru ke posisi kosong pertama yang ditemukan lewat traversal sederhana (belum perlu aturan BST, itu menyusul hari 5)
- `inOrderTraversal()` — kembalikan array hasil in-order traversal (kiri, root, kanan)

## Kriteria selesai

```js
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
console.log(tree.inOrderTraversal().length); // 3
```

## Soal LeetCode terkait

- **Maximum Depth of Binary Tree** (easy) — kedalaman maksimum, latihan rekursi pada tree.

## Checklist

- [ ] `BinaryTree` dengan `insert` dan `inOrderTraversal` lulus kriteria selesai
- [ ] Soal LeetCode Maximum Depth of Binary Tree dikerjakan
- [ ] Kesulitan dicatat di log salah paham
