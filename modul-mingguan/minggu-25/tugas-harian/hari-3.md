# Minggu 25 - Hari 3: Bangun primitif signal(value)

## Konsep hari ini (bangun dari nol — primitif signal)

- Sebelum bicara dependency tracking otomatis, bangun dulu primitif paling dasar: `signal(value)` sebagai pasangan getter/setter

## Spesifikasi

- `signal(initialValue)` mengembalikan objek/tuple dengan cara membaca nilai saat ini dan cara mengubahnya
- Belum perlu ada notifikasi otomatis ke "pendengar" — itu menyusul hari 4

## Kriteria selesai

```js
const count = signal(0);
console.log(count.get()); // 0
count.set(5);
console.log(count.get()); // 5
```

## Petunjuk kalau mentok (> 30 menit)

Closure sederhana sudah cukup untuk hari ini — ingat pola module/closure dari minggu 4-5. Proxy baru dipakai mulai hari 4 untuk menangkap kapan `get`/`set` terjadi secara implisit (tanpa `.get()`/`.set()` eksplisit), kalau kamu mau versi lebih mirip Vue.

## Checklist

- [ ] `signal(initialValue)` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
