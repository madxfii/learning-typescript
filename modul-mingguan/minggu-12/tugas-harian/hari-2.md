# Minggu 12 - Hari 2: Discriminated union & exhaustiveness check

## Konsep hari ini

- Discriminated union: union dari beberapa tipe yang berbagi satu properti "penanda" (discriminant) untuk membedakannya
- Exhaustiveness check: memakai tipe `never` supaya TypeScript memberi error di compile time kalau ada kasus yang belum ditangani

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak: lolos type-check atau tidak, dan kenapa. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string };
type ErrorState = { status: "error"; message: string };
type State = LoadingState | SuccessState | ErrorState;

function render(state: State): string {
  switch (state.status) {
    case "loading": return "Loading...";
    case "success": return `Data: ${state.data}`;
    case "error": return `Error: ${state.message}`;
  }
}
```

**Pertanyaan:** Di cabang `case "success"`, kenapa TypeScript membolehkan akses `state.data`, padahal `LoadingState` dan `ErrorState` tidak punya properti `data`?

### Snippet 2

```ts
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; value: number };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
    default: {
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
}
```

**Pertanyaan:** Fungsi ini belum menangani `case "reset"`. Baris mana yang akan error di compile time, dan kenapa?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
