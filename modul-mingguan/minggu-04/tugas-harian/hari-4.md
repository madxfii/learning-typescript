# Minggu 04 - Hari 4: Bangun `once(fn)` dari nol

## Konsep hari ini (bangun dari nol)

- `once(fn)` — memastikan sebuah fungsi hanya benar-benar berjalan satu kali, walau dipanggil berkali-kali

## Spesifikasi

- `once(fn)` mengembalikan fungsi baru yang membungkus `fn`
- Fungsi hasil boleh dipanggil berkali-kali, tapi `fn` asli hanya benar-benar dieksekusi pada **panggilan pertama**
- Panggilan berikutnya mengembalikan hasil dari panggilan pertama (di-cache), tanpa menjalankan `fn` lagi
- Harus mendukung argumen apa pun yang diteruskan ke `fn`

## Kriteria selesai

```js
let callCount = 0;
function expensiveInit(value) {
  callCount++;
  return value * 2;
}
const initOnce = once(expensiveInit);
console.log(initOnce(5));   // 10
console.log(initOnce(99));  // tetap 10, bukan 198
console.log(callCount);     // 1
```

## Petunjuk kalau mentok (> 30 menit)

Pikirkan closure — variabel apa yang perlu "diingat" oleh fungsi hasil `once` di antara panggilan-panggilan berikutnya? (petunjuk: dua hal — status "sudah pernah jalan atau belum", dan "hasil yang disimpan")

## Checklist

- [ ] `once` lulus semua kriteria selesai di atas
- [ ] Bisa menjelaskan implementasinya tanpa melihat kode lagi
- [ ] Kesulitan dicatat di log salah paham
