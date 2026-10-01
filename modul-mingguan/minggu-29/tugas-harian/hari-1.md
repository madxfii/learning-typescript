# Minggu 29 - Hari 1: Diffing dasar — single element

## Konsep hari ini (bangun dari nol)

- Diffing level dasar: bandingkan VNode lama vs baru di posisi yang sama, tentukan apakah perlu **create** (elemen baru), **update** (props berubah, type sama), atau **remove** (elemen lama tidak ada lagi di versi baru)

## Spesifikasi

- `diff(oldVnode, newVnode)` — untuk kasus paling dasar dulu (tanpa list/children majemuk): kalau `type` berbeda, ganti elemen sepenuhnya; kalau `type` sama, bandingkan `props` dan update hanya atribut yang berubah

## Kriteria selesai

```js
const old = createElement("div", { class: "red" }, "Hello");
const updated = createElement("div", { class: "blue" }, "Hello");
// diff(old, updated) harus menghasilkan instruksi: ubah atribut class dari "red" ke "blue",
// TIDAK membuat ulang elemen <div> dari nol
```

## Petunjuk kalau mentok (> 30 menit)

Untuk hari ini, cukup fokus ke satu elemen (bukan list). Bandingkan key-by-key di `props` lama vs baru: key yang nilainya berbeda perlu di-set ulang, key yang hilang di versi baru perlu dihapus dari elemen DOM asli.

## Checklist

- [ ] `diff` untuk kasus single-element (type sama, props berbeda) lulus kriteria selesai
- [ ] Kesulitan dicatat di log salah paham
