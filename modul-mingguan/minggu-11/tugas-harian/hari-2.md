# Minggu 11 - Hari 2: unknown vs any vs never, literal types & as const

## Konsep hari ini

- `unknown` adalah versi aman dari `any` — harus di-narrow dulu sebelum dipakai
- `never` merepresentasikan nilai yang "tidak pernah ada", berguna untuk exhaustiveness check
- `as const` membuat TypeScript menyimpulkan tipe literal paling spesifik, dan membuat properti objek jadi readonly

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak: lolos type-check atau tidak, dan tipe apa yang diinfer. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
let valAny: any = 10;
let valUnknown: unknown = 10;

valAny.toFixed();
valUnknown.toFixed();
```

**Pertanyaan:** Baris mana yang error di compile time? Kenapa `unknown` lebih aman daripada `any`?

### Snippet 2

```ts
type Status = "active" | "inactive";

function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x);
}

function handle(status: Status) {
  if (status === "active") return "is active";
  if (status === "inactive") return "is inactive";
  return assertNever(status);
}
```

**Pertanyaan:** Kapan baris terakhir (`return assertNever(status)`) benar-benar tereksekusi saat runtime? Kenapa TypeScript tetap meloloskan kode ini meski `never` terdengar seperti "tidak pernah terjadi"?

### Snippet 3

```ts
let a = "hello";      // ?
const b = "hello";    // ?

let point = { x: 1, y: 2 };
const pointConst = { x: 1, y: 2 } as const;

point.x = 99;
pointConst.x = 99;
```

**Pertanyaan:** Tipe apa yang diinfer untuk `a` dan `b`? Baris terakhir mana yang error, dan kenapa `as const` mengubah cara TypeScript menyimpulkan tipe `pointConst`?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
