# Minggu 21 - Hari 5: Sliding window dari nol

## Konsep hari ini (sesi DSA)

- Sliding window: jendela (subarray/substring) yang bergerak sambil mempertahankan suatu invariant, menghindari nested loop untuk masalah "properti dari subarray/substring"

## Spesifikasi

- `maxSubarraySum(arr, k)` — jumlah maksimum dari subarray sepanjang `k` elemen yang berdekatan, memakai sliding window (bukan menghitung ulang jumlah dari nol tiap pergeseran)

## Kriteria selesai

```js
console.log(maxSubarraySum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
// verifikasi manual dulu sebelum menulis kode: coba semua subarray panjang 4,
// cari yang jumlahnya paling besar, baru cocokkan dengan hasil fungsimu
```

## Soal LeetCode terkait

- **Maximum Average Subarray I** (easy).

## Checklist

- [ ] `maxSubarraySum` lulus kriteria selesai (setelah diverifikasi manual)
- [ ] Soal LeetCode Maximum Average Subarray I dikerjakan
- [ ] Kesulitan dicatat di log salah paham
