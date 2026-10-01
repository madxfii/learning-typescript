# Minggu 13 - Hari 5: Trie lanjutan — prefix search

## Konsep hari ini (sesi DSA — Trie lanjutan)

- Traversal dari node prefix ke semua leaf di bawahnya untuk mengumpulkan semua kata berawalan tertentu

## Spesifikasi tambahan

- `getAllWordsWithPrefix(prefix)` — kembalikan array semua kata dalam trie yang diawali `prefix` (butuh traversal dari node akhir prefix ke semua kemungkinan akhir kata di bawahnya)

## Kriteria selesai

```js
const trie = new Trie();
["cat", "car", "care", "dog"].forEach((w) => trie.insert(w));
console.log(trie.getAllWordsWithPrefix("ca").sort()); // ["car", "care", "cat"]
console.log(trie.getAllWordsWithPrefix("do").sort()); // ["dog"]
```

## Type-challenges harian

Kerjakan 3-5 soal level **easy** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri (bukan cuma menempel kode) sebelum lanjut ke soal berikutnya.

## Soal LeetCode terkait

- **Longest Common Prefix** (easy) — coba didekati dengan membangun Trie dari semua string lalu menelusuri jalur tunggal dari root.

## Checklist

- [ ] `getAllWordsWithPrefix` lulus kriteria selesai
- [ ] Soal LeetCode Longest Common Prefix dikerjakan
- [ ] Kesulitan dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
