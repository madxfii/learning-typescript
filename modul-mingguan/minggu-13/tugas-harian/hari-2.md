# Minggu 13 - Hari 2: keyof dan indexed access

## Konsep hari ini

- `keyof T` menghasilkan union dari semua nama properti `T`
- Indexed access `T[K]` mengambil tipe dari properti `K` di `T`

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak tipenya. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
interface User { id: number; name: string; email: string }
type UserKeys = keyof User;
```

**Pertanyaan:** Tipe apa isi `UserKeys`?

### Snippet 2

```ts
interface User { id: number; name: string; email: string }
type NameType = User["name"];
type IdOrName = User["id" | "name"];
```

**Pertanyaan:** Tipe apa untuk `NameType` dan `IdOrName`?

### Snippet 3

```ts
function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((k) => obj[k]);
}
const user = { id: 1, name: "Ahmad", email: "a@x.com" };
const values = pluck(user, ["name", "email"]);
const invalid = pluck(user, ["name", "phone"]);
```

**Pertanyaan:** Baris `invalid` — kenapa error? Tipe apa untuk `values`?

## Type-challenges harian

Kerjakan 3-5 soal level **easy** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri (bukan cuma menempel kode) sebelum lanjut ke soal berikutnya.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
