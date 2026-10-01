# Minggu 21 - Hari 3: Two pointers dari nol

## Konsep hari ini (sesi DSA)

- Two pointers: dua pointer bergerak dari posisi berbeda (biasanya dari ujung berlawanan) untuk memecahkan masalah array/string dalam O(n) tanpa nested loop

## Spesifikasi

- `isPalindrome(str)` — cek apakah string sama kalau dibaca dari depan dan belakang, memakai two pointers (satu dari depan, satu dari belakang, bergerak saling mendekat)
- `twoSumSorted(sortedArr, target)` — pada array yang **sudah terurut**, cari dua index yang jumlah nilainya sama dengan `target`, memakai two pointers (bukan nested loop)

## Kriteria selesai

```js
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(twoSumSorted([1, 2, 4, 7, 11], 9)); // [1, 3] (index dari 2 dan 7)
```

## Soal LeetCode terkait

- **Valid Palindrome** (easy) atau **Two Sum II - Input Array Is Sorted** (medium).

## Checklist

- [ ] `isPalindrome` dan `twoSumSorted` lulus kriteria selesai di atas
- [ ] Soal LeetCode dikerjakan
- [ ] Kesulitan dicatat di log salah paham
