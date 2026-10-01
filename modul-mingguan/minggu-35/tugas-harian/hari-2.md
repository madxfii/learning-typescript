# Minggu 35 - Hari 2: Bangun insert dengan edge splitting

## Konsep hari ini (bangun dari nol — insert dengan edge splitting)

- Bagian tersulit radix tree: saat insert kata baru yang berbagi sebagian prefix dengan edge yang sudah ada, edge itu perlu "dipecah" (split) di titik prefix bersama berakhir

## Spesifikasi

- Node radix tree: tiap edge menyimpan sepotong string (bukan 1 karakter), tiap node punya daftar children (edge -> node)
- `insert(word)`:
  - Kalau tidak ada edge yang berbagi prefix dengan `word`, buat edge baru berisi seluruh `word`
  - Kalau ada edge yang **sebagian** cocok dengan `word` (prefix bersama, tapi tidak identik), pecah edge itu di titik prefix bersama berakhir, buat node baru di titik pecahan itu

## Kriteria selesai

```js
const tree = new RadixTree();
tree.insert("test");
tree.insert("team");
// setelah insert "team", edge "est" (sisa dari "test" setelah "te") dan
// edge baru "am" (dari "team" setelah "te") harus sama-sama ada sebagai
// children dari node hasil split di titik "te"
tree.insert("toast");
console.log(tree.search("test"));  // true
console.log(tree.search("team"));  // true
console.log(tree.search("toast")); // true
console.log(tree.search("te"));    // false (bukan kata lengkap yang di-insert)
```

## Petunjuk kalau mentok (> 30 menit)

Untuk tiap edge yang mungkin cocok, cari **longest common prefix** (ingat pola pencarian prefix dari minggu 13) antara isi edge dan sisa `word` yang belum ter-insert. Kalau prefix ini lebih pendek dari isi edge, itu tandanya edge perlu dipecah di situ.

## Checklist

- [ ] `insert` dengan edge splitting lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
