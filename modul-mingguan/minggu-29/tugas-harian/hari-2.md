# Minggu 29 - Hari 2: Diffing list dengan key

## Konsep hari ini (bangun dari nol — diffing list dengan key)

- Diffing daftar anak (children) yang bisa bertambah/berkurang/berpindah posisi butuh `key` supaya elemen yang "sama" bisa dikenali walau posisinya berubah, bukan cuma dibandingkan berdasarkan index

## Spesifikasi

- Perluas `diff` untuk menangani `children` berupa array VNode dengan `key` di `props`-nya
- Cocokkan child lama dan baru berdasarkan `key` (bukan index) untuk menentukan mana yang di-update, mana yang perlu dipindah, dibuat baru, atau dihapus

## Kriteria selesai

```js
const oldList = [
  createElement("li", { key: "a" }, "A"),
  createElement("li", { key: "b" }, "B"),
];
const newList = [
  createElement("li", { key: "b" }, "B"),
  createElement("li", { key: "a" }, "A"),
  createElement("li", { key: "c" }, "C"),
];
// diff seharusnya mengenali "a" dan "b" sebagai elemen yang SAMA (cuma pindah posisi),
// dan "c" sebagai elemen BARU — bukan menghapus semua lalu membuat 3 elemen baru
```

## Refleksi

Kalau `key` dihilangkan dan diffing dilakukan berdasarkan index saja, apa yang salah pada contoh di atas (petunjuk: elemen di index 0 lama adalah "A", tapi index 0 baru adalah "B" — apa yang "dianggap berubah" secara keliru)?

## Checklist

- [ ] Diffing list dengan `key` lulus kriteria selesai di atas
- [ ] Refleksi soal pentingnya `key` sudah ditulis
- [ ] Kesulitan dicatat di log salah paham
