# Minggu 14 - Hari 4: Template literal types

## Konsep hari ini

- Template literal types: membangun tipe string dari kombinasi literal dan union, mirip template string tapi di level tipe

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak: lolos type-check atau tidak, dan kemungkinan nilai literalnya. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
type Greeting = `Hello, ${string}!`;
const a: Greeting = "Hello, Ahmad!";
const b: Greeting = "Hi, Ahmad!";
```

**Pertanyaan:** Kenapa `b` error?

### Snippet 2

```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">;
type HoverEvent = EventName<"hover">;
```

**Pertanyaan:** Nilai string literal apa untuk `ClickEvent` dan `HoverEvent`?

### Snippet 3

```ts
type Direction = "top" | "bottom" | "left" | "right";
type Margin = `margin-${Direction}`;
const m: Margin = "margin-top";
const invalid: Margin = "margin-center";
```

**Pertanyaan:** Sebutkan semua kemungkinan nilai literal yang valid untuk tipe `Margin`. Kenapa baris `invalid` error?

## Type-challenges harian

Kerjakan 3-5 soal level **medium** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri sebelum lanjut ke soal berikutnya.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
