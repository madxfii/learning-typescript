# Minggu 05 - Hari 1: Closure dalam loop, versi nyata

## Konsep hari ini

- Jebakan closure dalam loop (minggu 2) muncul lagi di konteks yang lebih realistis: mendaftarkan banyak handler dalam satu loop

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
function createHandlers() {
  const handlers = [];
  const labels = ["save", "cancel", "delete"];
  for (var i = 0; i < labels.length; i++) {
    handlers.push(function () {
      console.log(`Handler for: ${labels[i]}`);
    });
  }
  return handlers;
}
const handlers = createHandlers();
handlers[0]();
handlers[1]();
handlers[2]();
```

**Pertanyaan:** Ketiga handler mencetak apa? Kenapa, dan bagaimana memperbaikinya dengan satu perubahan kecil?

### Snippet 2

```js
function createHandlersFixed() {
  const handlers = [];
  const labels = ["save", "cancel", "delete"];
  for (let i = 0; i < labels.length; i++) {
    handlers.push(function () {
      console.log(`Handler for: ${labels[i]}`);
    });
  }
  return handlers;
}
const fixed = createHandlersFixed();
fixed[0]();
fixed[1]();
fixed[2]();
```

**Pertanyaan:** Konfirmasi perbaikannya bekerja. Kenapa cukup mengganti `var` jadi `let`?

### Snippet 3

```js
function delayedLogs(items) {
  items.forEach(function (item, index) {
    setTimeout(() => console.log(item), index * 10);
  });
}
delayedLogs(["a", "b", "c"]);
```

**Pertanyaan:** `forEach` memakai callback function, bukan `for` biasa. Apakah kasus ini kena jebakan `var` seperti sebelumnya? Kenapa?

## Sesi DSA tambahan (hash map, lanjutan hari 3)

Konsep: menghitung frekuensi kemunculan elemen (huruf, kata, angka) adalah pemakaian hash map yang sangat umum — key = elemen, value = jumlah kemunculan.

Soal LeetCode: **Valid Anagram** (easy) — cek apakah dua string adalah anagram satu sama lain, memakai `Map`/object untuk menghitung frekuensi karakter tiap string lalu membandingkannya. Sebutkan kompleksitas waktu solusimu.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
- [ ] Soal LeetCode Valid Anagram (sesi DSA tambahan) dikerjakan
