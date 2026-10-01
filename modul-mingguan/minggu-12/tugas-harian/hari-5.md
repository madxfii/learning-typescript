# Minggu 12 - Hari 5: BST — level-order traversal dengan Queue

## Konsep hari ini (sesi DSA)

- Level-order traversal (BFS) pada tree memakai `Queue` — tepat memanfaatkan struktur data yang sudah dibuat di minggu 9

## Spesifikasi

- `levelOrderTraversal()` pada `BST`/`BinaryTree` — kunjungi node level demi level (dari atas ke bawah, kiri ke kanan), kembalikan sebagai array of array (satu array per level) atau array datar

## Kriteria selesai

```js
const bst = new BST();
[5, 3, 7, 1, 4].forEach((v) => bst.insert(v));
console.log(bst.levelOrderTraversal());
// urutan berdasarkan level, bukan in-order — misal [[5], [3, 7], [1, 4]]
```

## Petunjuk kalau mentok (> 30 menit)

Ingat pola `Queue` dari minggu 9: masukkan root ke queue, lalu selama queue tidak kosong — keluarkan satu node, catat nilainya, masukkan `left` dan `right`-nya (kalau ada) ke queue.

## Soal LeetCode terkait

- **Binary Tree Level Order Traversal** (medium, tapi mekanismenya lurus dengan queue).

## Checklist

- [ ] `levelOrderTraversal()` lulus kriteria selesai memakai `Queue`
- [ ] Soal LeetCode Binary Tree Level Order Traversal dikerjakan
- [ ] Kesulitan dicatat di log salah paham
