# Minggu 05 - Hari 4: Bangun `debounce(fn, delay)` dari nol

## Konsep hari ini (bangun dari nol)

- `debounce(fn, delay)` — jalankan `fn` hanya setelah tidak ada panggilan baru selama `delay` ms

## Spesifikasi

- `debounce(fn, delay)` mengembalikan fungsi baru
- Setiap kali fungsi hasil dipanggil, mulai timer baru berdurasi `delay` ms
- Kalau dipanggil lagi sebelum timer selesai, timer sebelumnya dibatalkan dan mulai dari awal
- `fn` asli hanya benar-benar jalan kalau tidak ada panggilan baru dalam jangka waktu `delay`
- Harus meneruskan argumen terakhir ke `fn`

## Kriteria selesai

```js
let calls = [];
const log = (msg) => calls.push(msg);
const debouncedLog = debounce(log, 100);
debouncedLog("a");
debouncedLog("b");
debouncedLog("c");
// setelah > 100ms tanpa panggilan baru, calls harus === ["c"] (bukan ketiganya)
```

## Petunjuk kalau mentok (> 30 menit)

Ingat snippet 2 hari kedua minggu ini (`withTimer`) — variabel timer id perlu "diingat" di closure yang sama seperti itu, tapi sekarang generic untuk `fn` apa pun.

## Checklist

- [ ] `debounce` lulus kriteria selesai di atas
- [ ] Bisa menjelaskan implementasinya tanpa melihat kode lagi
- [ ] Kesulitan dicatat di log salah paham
