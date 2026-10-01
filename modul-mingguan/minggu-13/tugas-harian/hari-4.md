# Minggu 13 - Hari 4: Utility types bawaan

## Konsep hari ini

- Utility types bawaan TypeScript (`Partial`, `Required`, `Pick`, `Omit`, `Record`, dll) dibangun dari mapped types + keyof — nanti kamu akan menulis ulang beberapa di antaranya sendiri lewat type-challenges

## Cara kerja

1. Baca tiap snippet, **jangan buka compiler dulu**.
2. Tebak: lolos type-check atau tidak, dan apa isi tipenya. Tulis alasannya.
3. Verifikasi di TypeScript Playground.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```ts
interface User { id: number; name: string; email: string }
type PartialUser = Partial<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "email">;

const p: PartialUser = {};
const preview: UserPreview = { id: 1, name: "Ahmad" };
```

**Pertanyaan:** Kenapa `const p: PartialUser = {}` valid, padahal `User` mewajibkan `id`, `name`, `email`? Properti apa saja yang ada di `UserWithoutEmail`?

### Snippet 2

```ts
type Role = "admin" | "editor" | "viewer";
type Permissions = Record<Role, string[]>;

const perms: Permissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
const invalidPerms: Permissions = {
  admin: ["read"],
  editor: ["read"],
};
```

**Pertanyaan:** Kenapa `invalidPerms` error? Apa yang dilakukan `Record<Role, string[]>` di sini?

## Type-challenges harian

Kerjakan 3-5 soal level **easy** dari [type-challenges](https://github.com/type-challenges/type-challenges) — prioritaskan yang temanya dekat dengan konsep hari ini kalau ada. Setelah selesai satu soal, tulis ulang solusinya dengan kata-kata sendiri (bukan cuma menempel kode) sebelum lanjut ke soal berikutnya.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum diverifikasi
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] 3-5 soal type-challenges dikerjakan, solusi ditulis ulang dengan kata sendiri
