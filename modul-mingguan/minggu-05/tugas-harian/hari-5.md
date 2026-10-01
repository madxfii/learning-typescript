# Minggu 05 - Hari 5: Bangun `throttle(fn, interval)` dari nol

## Konsep hari ini (bangun dari nol)

- `throttle(fn, interval)` — batasi `fn` supaya jalan paling banyak sekali per `interval` ms

## Spesifikasi

- `throttle(fn, interval)` mengembalikan fungsi baru
- `fn` dijalankan paling banyak satu kali per `interval` ms, walau dipanggil berkali-kali lebih sering
- Panggilan pertama dijalankan langsung; panggilan berikutnya dalam jendela `interval` diabaikan
- (opsional, lebih sulit) alih-alih diabaikan sepenuhnya, panggilan terakhir dalam jendela dijadwalkan untuk jalan tepat di akhir jendela — pilih salah satu strategi dan jelaskan alasannya

## Kriteria selesai

```js
let calls = [];
const log = (msg) => calls.push(msg);
const throttledLog = throttle(log, 100);
throttledLog("a"); // jalan langsung
throttledLog("b"); // diabaikan (masih dalam window)
throttledLog("c"); // diabaikan
// calls harus === ["a"] sesaat setelah ketiga panggilan ini
```

## Petunjuk kalau mentok (> 30 menit)

Pola intinya sama seperti snippet 3 hari kedua minggu ini (`withCooldown`) — tinggal dibungkus generic untuk `fn` apa pun.

## Checklist

- [ ] `throttle` lulus kriteria selesai di atas
- [ ] Bisa menjelaskan bedanya `debounce` vs `throttle` dengan kata-kata sendiri
- [ ] Kesulitan dicatat di log salah paham
