# Minggu 04 - Hari 3: Big-O — analisis kompleksitas

## Konsep hari ini (sesi DSA)

- Notasi Big-O menggambarkan **pertumbuhan** waktu/ruang relatif terhadap ukuran input (n), bukan waktu absolut dalam detik
- Fokus hari ini: bisa membaca kode dan langsung mengenali kelas kompleksitasnya (O(1), O(log n), O(n), O(n log n), O(n²))

## Tugas: analisis kompleksitas (bukan trace output, tapi tentukan Big-O)

Untuk tiap fungsi di bawah, tentukan kompleksitas **waktu** dan **ruang**, sertakan alasannya.

### Fungsi 1

```js
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

### Fungsi 2

```js
function hasPairWithSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}
```

### Fungsi 3

```js
function binarySearch(sortedArr, target) {
  let low = 0, high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (sortedArr[mid] === target) return mid;
    if (sortedArr[mid] < target) low = mid + 1; else high = mid - 1;
  }
  return -1;
}
```

### Fungsi 4 (fokus ke kompleksitas ruang)

```js
function buildMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  return matrix;
}
```

## Soal LeetCode terkait

- **Two Sum** (easy) — kerjakan dulu versi brute force O(n²). Simpan solusinya untuk dibandingkan minggu depan setelah belajar hash map.

## Checklist

- [ ] Kompleksitas keempat fungsi di atas sudah dianalisis dengan alasan
- [ ] Soal LeetCode dikerjakan (versi brute force)
- [ ] Kesulitan dicatat di log salah paham
