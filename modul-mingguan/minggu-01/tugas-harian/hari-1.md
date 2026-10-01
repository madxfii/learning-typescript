# Minggu 01 - Hari 1: Primitif vs objek (copy vs reference)

## Konsep hari ini

- Nilai primitif (number, string, boolean, dst) disalin saat di-assign
- Objek dan array disimpan sebagai referensi; assignment menyalin referensinya, bukan isinya
- Efek reassign binding vs mutasi isi objek itu berbeda


## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis di tabel trace: baris yang dieksekusi -> variabel -> nilainya.
3. Jalankan di debugger (breakpoint di baris pertama fungsi/skrip), *step over*/*step into*, bandingkan dengan tebakan.
4. Kalau tebakan meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md): apa yang dikira, apa yang sebenarnya terjadi, dan kenapa.

## Snippet untuk di-trace

### Snippet 1

```js
let a = 5;
let b = a;
b = 10;
console.log(a, b);
```

**Pertanyaan:** Apakah `a` ikut berubah jadi 10? Kenapa?

### Snippet 2

```js
const obj1 = { x: 1 };
const obj2 = obj1;
obj2.x = 99;
console.log(obj1.x, obj2.x);
```

**Pertanyaan:** Kenapa `obj1.x` ikut berubah padahal yang diubah `obj2`?

### Snippet 3

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2);

const arr3 = [1, 2, 3];
let arr4 = arr3;
arr4 = [9, 9, 9];
console.log(arr3, arr4);
```

**Pertanyaan:** Kenapa blok pertama `arr1` ikut berubah, tapi blok kedua `arr3` tidak?

### Snippet 4

```js
const user = { name: "Ahmad", address: { city: "Jakarta" } };
const clone = { ...user };
clone.name = "Budi";
clone.address.city = "Bandung";
console.log(user.name, user.address.city);
console.log(clone.name, clone.address.city);
```

**Pertanyaan:** `clone.name` tidak memengaruhi `user.name`, tapi kenapa `clone.address.city` memengaruhi `user.address.city`? (petunjuk: spread `{...}` itu shallow copy)

### Snippet 5

```js
function tryChangeNumber(n) {
  n = n + 1;
  return n;
}
function tryChangeObject(o) {
  o.value = o.value + 1;
}

let num = 5;
tryChangeNumber(num);
console.log(num);

let obj = { value: 5 };
tryChangeObject(obj);
console.log(obj.value);
```

**Pertanyaan:** Kenapa `num` di luar tidak berubah, tapi `obj.value` di luar berubah, padahal caranya mirip?


## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Semua selisih tebakan (kalau ada) sudah dicatat di log salah paham
