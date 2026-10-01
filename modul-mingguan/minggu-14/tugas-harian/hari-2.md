# Minggu 14 - Hari 2: Mapped types

## Konsep hari ini

- Mapped types: membangun tipe baru dengan "memetakan ulang" tiap properti dari tipe lain

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak tipenya. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
type Flags<T> = {
  [K in keyof T]: boolean;
};
interface Features { darkMode: string; betaAccess: number }
type FeatureFlags = Flags<Features>;
```

**Pertanyaan:** Tipe apa isi `FeatureFlags`?

### Snippet 2

```ts
type ReadonlyVersion<T> = {
  readonly [K in keyof T]: T[K];
};
interface Config { debug: boolean }
const config: ReadonlyVersion<Config> = { debug: true };
config.debug = false;
```

**Pertanyaan:** Baris terakhir — error atau tidak? Kenapa?

### Snippet 3

```ts
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
interface Person { name: string; age: number }
type PersonGetters = Getters<Person>;
```

**Pertanyaan:** Nama key apa saja yang kira-kira muncul di `PersonGetters`? (petunjuk: `Capitalize` mengubah huruf pertama jadi kapital)

## Type-challenges harian

Kerjakan 3-5 soal level **medium** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri sebelum lanjut ke soal berikutnya.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
