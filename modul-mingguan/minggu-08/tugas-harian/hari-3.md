# Minggu 08 - Hari 3: Stack dari nol

## Konsep hari ini (sesi DSA)

- Stack: LIFO (last in, first out) — mirip tumpukan piring
- Dipakai untuk undo/redo, matching bracket, dan menggambarkan call stack (minggu 2) secara eksplisit sebagai struktur data

## Spesifikasi implementasi

- `push(value)` — taruh di atas
- `pop()` — ambil & hapus yang paling atas
- `peek()` — lihat yang paling atas tanpa menghapus
- `isEmpty()` — cek kosong atau tidak

## Kriteria selesai

```js
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());   // 3
console.log(stack.pop());    // 3
console.log(stack.pop());    // 2
console.log(stack.isEmpty()); // false
console.log(stack.pop());    // 1
console.log(stack.isEmpty()); // true
```

## Soal LeetCode terkait

- **Valid Parentheses** (easy) — kasus klasik pemakaian stack untuk matching bracket.

## Checklist

- [ ] `Stack` lulus semua kriteria selesai di atas
- [ ] Soal LeetCode Valid Parentheses dikerjakan
- [ ] Kesulitan dicatat di log salah paham
