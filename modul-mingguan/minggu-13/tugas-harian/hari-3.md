# Minggu 13 - Hari 3: Trie — bangun dari nol

## Konsep hari ini (sesi DSA)

- Trie (prefix tree): pohon khusus untuk menyimpan string, tiap node merepresentasikan satu karakter — efisien untuk pencarian prefix/autocomplete

## Spesifikasi implementasi

- `insert(word)` — masukkan sebuah kata ke trie
- `search(word)` — cek apakah kata **persis** ada di trie
- `startsWith(prefix)` — cek apakah ada kata dalam trie yang diawali `prefix` tersebut

## Kriteria selesai

```js
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
console.log(trie.search("cat"));     // true
console.log(trie.search("ca"));      // false ("ca" bukan kata lengkap yang di-insert)
console.log(trie.startsWith("ca"));  // true
console.log(trie.startsWith("dog")); // false
```

## Type-challenges harian

Kerjakan 3-5 soal level **easy** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri (bukan cuma menempel kode) sebelum lanjut ke soal berikutnya.

## Soal LeetCode terkait

- **Implement Trie (Prefix Tree)** (medium) — pada dasarnya persis spesifikasi di atas.

## Checklist

- [ ] `Trie` lulus semua kriteria selesai di atas
- [ ] Soal LeetCode Implement Trie dikerjakan
- [ ] Kesulitan dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
