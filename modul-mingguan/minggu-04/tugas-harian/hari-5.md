# Minggu 04 - Hari 5: Array methods — mutating vs non-mutating

## Konsep hari ini (sesi DSA)

- Mutating methods (`push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`) mengubah array asli
- Non-mutating methods (`map`, `filter`, `slice`, `concat`) mengembalikan array baru, tidak mengubah yang asli

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const original = [3, 1, 2];
const sorted = original.sort();
console.log(original, sorted, original === sorted);
```

**Pertanyaan:** Apakah `original` ikut berubah? Apakah `sorted` adalah array yang berbeda dari `original`?

### Snippet 2

```js
const arr = [1, 2, 3];
const mapped = arr.map(n => n * 2);
console.log(arr, mapped);
```

**Pertanyaan:** Apakah `arr` ikut berubah?

### Snippet 3

```js
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.splice(1, 2);
console.log(arr2, removed);
```

**Pertanyaan:** Apa isi `arr2` setelah `splice`, dan apa isi `removed`?

## Soal LeetCode terkait

- **Remove Duplicates from Sorted Array** (easy) — coba kerjakan dengan memodifikasi array in-place (mutating), sesuai konsep hari ini.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Soal LeetCode dikerjakan
- [ ] Kesulitan dicatat di log salah paham
