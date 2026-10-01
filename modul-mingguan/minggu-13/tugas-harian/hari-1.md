# Minggu 13 - Hari 1: Generics dan constraint

## Konsep hari ini

- Generics: parameter tipe yang membuat fungsi/tipe bekerja untuk banyak tipe konkret tanpa kehilangan informasi tipe
- Constraint (`T extends ...`) membatasi tipe apa saja yang boleh dipakai sebagai generic

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak: lolos type-check atau tidak, dan tipe apa yang diinfer. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
function identity<T>(value: T): T {
  return value;
}
const a = identity(5);
const b = identity("hello");
const c = identity<string>(42);
```

**Pertanyaan:** Tipe apa untuk `a` dan `b`? Baris `c` — apakah error? Kenapa?

### Snippet 2

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength("hello");
getLength([1, 2, 3]);
getLength(42);
```

**Pertanyaan:** Baris mana yang error? Apa gunanya `T extends { length: number }` di sini?

### Snippet 3

```ts
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const merged = merge({ name: "Ahmad" }, { age: 30 });
console.log(merged.name, merged.age);
```

**Pertanyaan:** Tipe apa yang diinfer untuk `merged`? Apa arti `T & U` (intersection type) di sini?

## Type-challenges harian

Kerjakan 3-5 soal level **easy** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri (bukan cuma menempel kode) sebelum lanjut ke soal berikutnya.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
