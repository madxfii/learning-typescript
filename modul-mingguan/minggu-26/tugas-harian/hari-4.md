# Minggu 26 - Hari 4: Bangun batching

## Konsep hari ini (bangun dari nol — batching)

- Tanpa batching, mengubah beberapa signal berurutan dalam satu fungsi bisa memicu effect yang sama berkali-kali — batching menunda notifikasi sampai semua perubahan dalam satu "tick" selesai, baru jalankan effect sekali

## Spesifikasi

- `batch(fn)` — jalankan `fn` (yang di dalamnya memanggil beberapa `signal.set(...)`), tapi tunda semua notifikasi effect sampai `fn` selesai, lalu jalankan tiap effect yang terpengaruh **hanya sekali**, meski dependency-nya berubah lebih dari sekali di dalam `fn`

## Kriteria selesai

```js
const x = signal(1);
const y = signal(2);
let runCount = 0;
effect(() => {
  runCount++;
  console.log(x.get() + y.get());
});
// runCount sekarang 1 (dari run pertama)

batch(() => {
  x.set(10);
  y.set(20);
});
// tanpa batch: runCount akan jadi 3 (re-run tiap set)
// dengan batch: runCount harus jadi 2 (cuma 1 re-run tambahan untuk kedua perubahan)
console.log(runCount); // 2
```

## Petunjuk kalau mentok (> 30 menit)

Selama `batch(fn)` berjalan, kumpulkan effect yang "ingin" di-trigger ke dalam sebuah `Set` (bukan langsung dijalankan) — `Set` otomatis membuang duplikat effect yang sama. Setelah `fn` selesai, baru jalankan tiap effect di `Set` itu satu kali.

## Checklist

- [ ] `batch(fn)` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
