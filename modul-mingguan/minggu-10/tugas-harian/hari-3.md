# Minggu 10 - Hari 3: Rekursi lanjutan — jembatan ke Fase 2

## Konsep hari ini (sesi DSA — jembatan ke Fase 2)

- Review rekursi (minggu 2), sekarang diterapkan ke soal yang lebih dekat ke struktur data — persiapan sebelum masuk binary tree/BST di Fase 2

## Trace

```js
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, 3, [4, [5]]], 6]));
```

**Pertanyaan:** Tebak hasilnya. Di kedalaman rekursi mana base case (`else { result.push(item) }`) tercapai duluan?

## Soal LeetCode

- **Fibonacci Number** (easy) — kerjakan versi rekursif dulu, sebutkan kompleksitas waktunya (kaitkan ke Big-O minggu 4 — apakah ini O(n), O(2^n), atau lainnya?).

## Refleksi

Pola rekursif `flatten` di atas ("proses satu, lalu proses sisanya lewat pemanggilan yang sama") mirip dengan pola apa yang kamu temui saat membangun middleware chain dengan `next()` di hari 1? Tuliskan kesamaannya.

## Checklist

- [ ] Trace `flatten` selesai dan dipahami
- [ ] Soal LeetCode Fibonacci Number dikerjakan
- [ ] Kesulitan dicatat di log salah paham
