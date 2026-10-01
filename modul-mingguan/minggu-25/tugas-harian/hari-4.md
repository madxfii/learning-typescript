# Minggu 25 - Hari 4: Bangun dependency tracking otomatis (effect)

## Konsep hari ini (bangun dari nol — dependency tracking)

- Inti dari reactivity "fine-grained": saat sebuah `effect` membaca sebuah signal, signal itu otomatis "mengingat" effect tersebut sebagai pendengar. Saat signal berubah, semua pendengarnya dijalankan ulang.

## Spesifikasi

- `signal(initialValue)` — seperti hari 3, tapi sekarang `get()` mendaftarkan "effect yang sedang aktif" (kalau ada) sebagai subscriber
- `effect(fn)` — jalankan `fn` sekali (sambil menandai dirinya sebagai "effect aktif" selama `fn` berjalan), lalu jalankan ulang `fn` setiap kali ada signal yang dibaca di dalamnya berubah

## Kriteria selesai

```js
const count = signal(0);
let log = [];
effect(() => {
  log.push(`count is ${count.get()}`);
});
count.set(1);
count.set(2);
console.log(log); // ["count is 0", "count is 1", "count is 2"]
```

## Petunjuk kalau mentok (> 30 menit)

Simpan "effect yang sedang berjalan saat ini" di satu variabel global/module-level (mirip pola module minggu 4). Saat `effect(fn)` dipanggil: set variabel itu ke `fn`, jalankan `fn` (yang di dalamnya akan memanggil `count.get()`, mendaftarkan diri), lalu kembalikan variabel itu ke `null`/sebelumnya. Signal menyimpan daftar effect yang pernah "mendaftar" lewat `get()`, dan memanggil semuanya lagi saat `set()` dipanggil.

## Checklist

- [ ] `effect(fn)` otomatis re-run saat signal yang dibacanya berubah
- [ ] Kesulitan dicatat di log salah paham
