# Minggu 14 - Hari 1: Conditional types dan infer

## Konsep hari ini

- Conditional types: `T extends U ? X : Y` — cabang tipe berdasarkan apakah `T` cocok dengan `U`
- `infer` menangkap sebagian tipe di dalam pengecekan conditional type untuk dipakai lagi

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak tipenya. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">;
type B = IsString<42>;
```

**Pertanyaan:** Tipe apa `A` dan `B`?

### Snippet 2

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;
type A = ElementType<number[]>;
type B = ElementType<string>;
```

**Pertanyaan:** Tipe apa `A` dan `B`? Jelaskan peran `infer U` di sini.

### Snippet 3

```ts
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;
function greet() { return "hi"; }
type GreetReturn = ReturnOf<typeof greet>;
```

**Pertanyaan:** Tipe apa `GreetReturn`? (ini pola yang sama dengan `ReturnType<T>` bawaan TypeScript)

## Type-challenges harian

Kerjakan 3-5 soal level **medium** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri sebelum lanjut ke soal berikutnya.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
