# Minggu 16 - Hari 2: Validator — tipe Infer<typeof schema>

## Konsep hari ini (lanjut proyek validator — bagian 5, inti gerbang)

- `Infer<typeof schema>` — type-level utility yang menurunkan tipe TypeScript dari sebuah schema value, persis seperti `z.infer<typeof schema>` di Zod asli

## Spesifikasi

Buat utility tipe `Infer<S>` yang, diberikan tipe dari sebuah schema, menghasilkan tipe TypeScript yang sesuai.

## Kriteria selesai (compile-time, bukan runtime)

```ts
const userSchema = object({ name: string(), age: number() });
type User = Infer<typeof userSchema>;
// User harus setara dengan: { name: string; age: number }

const nested = object({ user: userSchema, tags: array(string()) });
type Nested = Infer<typeof nested>;
// Nested harus setara dengan: { user: { name: string; age: number }; tags: string[] }
```

## Petunjuk kalau mentok (> 30 menit)

Ini butuh conditional type + `infer` (minggu 14) yang diterapkan secara rekursif (minggu 12) ke struktur schema kamu sendiri. Titik awal yang baik: apa tipe balik dari method `parse()` di tiap jenis schema? Bisakah `Infer<S>` didefinisikan sebagai "tipe balik `parse` milik `S`"?

## Checklist

- [ ] `Infer<typeof schema>` bekerja untuk objek datar (flat)
- [ ] `Infer<typeof schema>` bekerja untuk objek bersarang (nested) — ini kriteria gerbang Fase 2
- [ ] Kesulitan dicatat di log salah paham
