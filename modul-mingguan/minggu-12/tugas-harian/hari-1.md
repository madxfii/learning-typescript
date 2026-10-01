# Minggu 12 - Hari 1: Narrowing: typeof dan in

## Konsep hari ini

- `typeof` menyempitkan (narrow) tipe primitif union
- `in` menyempitkan tipe berdasarkan ada-tidaknya properti tertentu

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak tipe `x`/`animal` di tiap cabang. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

**Pertanyaan:** Di dalam blok `if`, tipe `id` menjadi apa? Di dalam `else`, tipe `id` menjadi apa?

### Snippet 2

```ts
interface Bird { fly(): void; layEggs(): void }
interface Fish { swim(): void; layEggs(): void }

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

**Pertanyaan:** Bagaimana operator `in` membantu TypeScript menyempitkan tipe `animal` di tiap cabang, padahal `Bird` dan `Fish` sama-sama punya `layEggs()`?

### Snippet 3 — custom type guard

```ts
interface Cat { meow(): void }
interface Dog { bark(): void }

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function speak(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow();
  } else {
    animal.bark();
  }
}
```

**Pertanyaan:** Apa fungsi dari `animal is Cat` sebagai return type dibanding fungsi biasa yang cuma mengembalikan `boolean`?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
