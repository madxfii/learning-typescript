# Minggu 02 - Hari 3: Closure dasar

## Konsep hari ini

- Closure: fungsi dalam yang tetap bisa mengakses variabel dari scope fungsi luar, meski fungsi luar sudah selesai dieksekusi
- Setiap pemanggilan fungsi luar menciptakan "lingkungan" (environment) closure yang baru dan terpisah


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());
```

**Pertanyaan:** Kenapa `count` tidak reset ke 0 setiap kali `counter()` dipanggil, padahal `outer()` sudah selesai jalan?

### Snippet 2

```js
function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const counterA = outer();
const counterB = outer();
console.log(counterA(), counterA(), counterB());
```

**Pertanyaan:** Kenapa `counterB()` menghasilkan 1, bukan melanjutkan dari `counterA`?

### Snippet 3

```js
function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5), triple(5));
```

**Pertanyaan:** Bagaimana `double` dan `triple` masing-masing "mengingat" nilai `factor` yang berbeda?

### Snippet 4

```js
function createAccount(balance) {
  return {
    deposit(amount) { balance += amount; return balance; },
    withdraw(amount) { balance -= amount; return balance; },
  };
}
const acc = createAccount(100);
console.log(acc.deposit(50));
console.log(acc.withdraw(30));
```

**Pertanyaan:** Kenapa `balance` bisa diubah bersama oleh dua method berbeda (`deposit` dan `withdraw`)?

### Snippet 5

```js
function makePair() {
  let shared = 0;
  return [
    () => ++shared,
    () => shared,
  ];
}
const [increment, read] = makePair();
increment();
increment();
console.log(read());
```

**Pertanyaan:** Kedua fungsi hasil `makePair()` berbagi variabel `shared` yang sama. Buktikan lewat trace kenapa `read()` menghasilkan 2.


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
