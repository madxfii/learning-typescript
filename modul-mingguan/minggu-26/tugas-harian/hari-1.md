# Minggu 26 - Hari 1: Bangun computed(fn)

## Konsep hari ini (bangun dari nol — computed)

- `computed` adalah signal turunan: nilainya dihitung dari signal lain, di-cache, dan hanya dihitung ulang kalau salah satu dependency-nya berubah

## Spesifikasi

- `computed(fn)` mengembalikan objek dengan `.get()` yang mengembalikan hasil `fn()`, tapi:
  - Hasilnya di-cache — panggilan `.get()` berulang tanpa perubahan dependency tidak menjalankan `fn` lagi
  - Kalau salah satu signal yang dibaca `fn` berubah, cache di-invalidate, dan `.get()` berikutnya menghitung ulang

## Kriteria selesai

```js
const price = signal(100);
const qty = signal(2);
let computeCount = 0;
const total = computed(() => {
  computeCount++;
  return price.get() * qty.get();
});

console.log(total.get()); // 200
console.log(total.get()); // 200, computeCount tetap 1 (dari cache)
qty.set(3);
console.log(total.get()); // 300, computeCount jadi 2
```

## Petunjuk kalau mentok (> 30 menit)

`computed` bisa dibangun di atas `effect` dari minggu 25: pasang `effect` internal yang menandai "cache tidak valid" setiap kali dependency berubah, tapi baru benar-benar menjalankan `fn` saat `.get()` dipanggil (lazy), bukan langsung saat dependency berubah.

## Checklist

- [ ] `computed(fn)` lulus kriteria selesai di atas (termasuk caching-nya)
- [ ] Kesulitan dicatat di log salah paham
