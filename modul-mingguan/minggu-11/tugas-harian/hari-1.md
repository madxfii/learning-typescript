# Minggu 11 - Hari 1: Structural typing & inferensi

## Konsep hari ini

- Structural typing: TypeScript membandingkan **bentuk** (shape) sebuah tipe, bukan namanya
- Inferensi: TypeScript sering bisa menyimpulkan tipe tanpa anotasi eksplisit

## Cara kerja

1. Baca tiap snippet TypeScript, **jangan buka compiler/playground dulu**.
2. Tebak: apakah ini lolos type-check? Kalau ada anotasi `// ?`, tebak tipenya. Tulis alasannya.
3. Verifikasi di TypeScript Playground atau editor dengan TS strict.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
interface Employee { id: number; name: string }
interface Robot { id: number; name: string }

function printEmployee(e: Employee) {
  console.log(e.id, e.name);
}

const r: Robot = { id: 1, name: "R2D2" };
printEmployee(r);
```

**Pertanyaan:** Apakah `printEmployee(r)` lolos type-check? Kenapa, walau `Employee` dan `Robot` adalah dua interface yang berbeda namanya?

### Snippet 2

```ts
interface Employee { id: number; name: string }
function printEmployee(e: Employee) { console.log(e.id, e.name); }

const partialData = { id: 1, name: "Ahmad", extra: true };
printEmployee(partialData);

printEmployee({ id: 2, name: "Budi", extra: true });
```

**Pertanyaan:** Baris mana yang error (kalau ada)? Ini disebut "excess property check" — kenapa memanggil lewat variabel `partialData` boleh, tapi lewat object literal langsung malah error?

### Snippet 3

```ts
function makeArray() {
  return [1, "two", 3];
}
const arr = makeArray(); // ?

let x = 5;  // ?
const y = 5; // ?
```

**Pertanyaan:** Tipe apa yang diinfer TypeScript untuk `arr`? Tipe apa untuk `x` dan `y` masing-masing — kenapa beda walau nilainya sama-sama 5?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
