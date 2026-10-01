# Minggu 15 - Hari 1: Mulai validator — schema dasar

## Konsep hari ini (mulai proyek validator — bagian 1)

- Mulai proyek validator mini ala Zod: fondasi berupa schema dasar untuk tipe primitif

## Spesifikasi

- `string()`, `number()`, `boolean()` masing-masing mengembalikan objek schema dengan method `parse(input)`
- `parse(input)` mengembalikan `input` apa adanya kalau tipenya cocok, atau `throw` error dengan pesan yang jelas kalau tidak

## Kriteria selesai

```js
const nameSchema = string();
console.log(nameSchema.parse("Ahmad")); // "Ahmad"
try {
  nameSchema.parse(42);
} catch (e) {
  console.log(e.message); // pesan jelas, misal "Expected string, got number"
}
```

## Petunjuk kalau mentok (> 30 menit)

Tiap schema bisa dimulai sesederhana objek `{ parse(input) { ... } }` yang mengecek `typeof input`. Jangan mikirin fitur lanjutan (`optional`, `union`, nested object) dulu — itu menyusul hari-hari berikutnya.

## Checklist

- [ ] `string()`, `number()`, `boolean()` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
