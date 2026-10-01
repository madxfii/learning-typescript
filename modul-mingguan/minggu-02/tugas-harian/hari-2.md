# Minggu 02 - Hari 2: Rekursi sederhana dan kedalaman stack

## Konsep hari ini

- Rekursi = fungsi yang memanggil dirinya sendiri, butuh base case supaya berhenti
- Setiap panggilan rekursif menambah frame baru — kedalaman stack = jumlah panggilan yang belum selesai


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));
```

**Pertanyaan:** Gambar diagram stack dari `factorial(4)` turun sampai base case, lalu naik lagi sambil dikali.

### Snippet 2

```js
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4]));
```

**Pertanyaan:** Berapa kedalaman stack maksimum untuk input ini?

### Snippet 3

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(4));
```

**Pertanyaan:** `fib(4)` memanggil `fib(3)` dan `fib(2)`. Cabang mana yang dieksekusi lebih dulu sampai selesai?

### Snippet 4

```js
function countDown(n) {
  console.log(n);
  if (n <= 0) return;
  countDown(n - 1);
}
countDown(3);
```

**Pertanyaan:** Tebak urutan angka yang tercetak. Ini rekursi "tail-ish" — apa bedanya pola stack-nya dengan `factorial`?

### Snippet 5

```js
function isEven(n) {
  if (n === 0) return true;
  return isOdd(n - 1);
}
function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}
console.log(isEven(4), isOdd(4));
```

**Pertanyaan:** Ini rekursi saling memanggil (mutual recursion). Trace stack-nya untuk `isEven(4)` sampai base case.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
