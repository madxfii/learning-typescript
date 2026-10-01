# Minggu 20 - Hari 5: Binary search dan variannya

## Konsep hari ini (sesi DSA)

- Binary search butuh array terurut; variannya (`findFirstOccurrence`/`findLastOccurrence`) berguna saat ada duplikat

## Spesifikasi

- `binarySearch(sortedArr, target)` — review dari Soal 10 di assessment (Big-O)
- `findFirstOccurrence(sortedArr, target)` dan `findLastOccurrence(sortedArr, target)` — pada array terurut dengan duplikat, cari index kemunculan pertama/terakhir dari `target`

## Kriteria selesai

```js
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2
console.log(findFirstOccurrence([1, 2, 2, 2, 3], 2)); // 1
console.log(findLastOccurrence([1, 2, 2, 2, 3], 2));  // 3
```

## Soal LeetCode terkait

- **Find First and Last Position of Element in Sorted Array** (medium) — persis spesifikasi di atas digabung jadi satu soal.

## Checklist

- [ ] `binarySearch`, `findFirstOccurrence`, `findLastOccurrence` lulus kriteria selesai
- [ ] Soal LeetCode terkait dikerjakan
- [ ] Kesulitan dicatat di log salah paham
