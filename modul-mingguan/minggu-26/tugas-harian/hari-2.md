# Minggu 26 - Hari 2: Dependency tracking dinamis (conditional)

## Konsep hari ini

- Dependency tracking harus dinamis: kalau sebuah effect membaca signal berbeda tergantung kondisi (`if`), dependency-nya harus ikut berubah tiap run, bukan tetap dari run pertama

## Cara kerja

1. Baca snippet, **jangan dijalankan dulu**.
2. Tebak perilakunya, tulis alasannya.
3. Jalankan dengan implementasi `signal`/`effect` milikmu dari minggu 25.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

```js
const useA = signal(true);
const a = signal("A-value");
const b = signal("B-value");

let log = [];
effect(() => {
  log.push(useA.get() ? a.get() : b.get());
});

useA.set(false); // sekarang effect harusnya "pindah" dependency dari `a` ke `b`
b.set("B-changed");
a.set("A-changed"); // effect TIDAK BOLEH re-run lagi untuk perubahan ini
console.log(log);
```

**Pertanyaan:** Tebak isi `log`. Kalau implementasi `effect` milikmu dari minggu 25 tidak melepas dependency lama sebelum re-run, apa yang salah dari hasilnya (petunjuk: effect mungkin tetap "mendengarkan" `a` walau sudah tidak dibaca lagi)?

## Checklist

- [ ] Snippet ditebak dulu, lalu diverifikasi dengan implementasi sendiri
- [ ] Kalau implementasimu belum menangani ini dengan benar, catat sebagai temuan di log salah paham (akan diperbaiki hari 3)
