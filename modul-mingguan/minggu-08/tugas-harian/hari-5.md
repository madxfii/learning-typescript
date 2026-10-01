# Minggu 08 - Hari 5: Bangun `retry(fn, options)` dengan backoff

## Konsep hari ini (bangun dari nol)

- `retry(fn, options)` dengan backoff — pola umum untuk membuat operasi async lebih tahan terhadap kegagalan sementara

## Spesifikasi

- `retry(fn, { retries, delayMs })` mencoba menjalankan `fn` (fungsi async yang mengembalikan Promise)
- Kalau `fn` reject, coba lagi sampai maksimal `retries` kali
- Antar percobaan, tunggu `delayMs` (opsional lebih lanjut: backoff — delay bertambah tiap percobaan, misalnya dikali 2 tiap gagal)
- Kalau semua percobaan gagal, reject dengan error dari percobaan terakhir

## Kriteria selesai

```js
let attempts = 0;
function flaky() {
  attempts++;
  return attempts < 3
    ? Promise.reject(new Error(`fail attempt ${attempts}`))
    : Promise.resolve("success on attempt " + attempts);
}

retry(flaky, { retries: 5, delayMs: 10 }).then((result) => {
  console.log(result);   // "success on attempt 3"
  console.log(attempts); // 3
});
```

## Petunjuk kalau mentok (> 30 menit)

Pikirkan sebagai loop `for` dengan `await` dan `try/catch` di dalamnya, atau sebagai rekursi (ingat minggu 2 & 7). Pertanyaan kunci: apa yang harus terjadi kalau percobaan **terakhir** tetap gagal — apakah error-nya "hilang" atau diteruskan ke pemanggil?

## Sesi DSA tambahan (stack, lanjutan hari 3)

Konsep: desain struktur data gabungan — stack yang juga bisa menjawab "nilai minimum saat ini" dalam O(1), tanpa scan ulang seluruh isi stack.

Soal LeetCode: **Min Stack** (medium, tapi masih dalam jangkauan setelah `Stack` hari 3) — implementasikan `push`, `pop`, `top`, dan `getMin()` yang semuanya O(1). Petunjuk: simpan stack kedua yang melacak nilai minimum di tiap titik, sejajar dengan stack utama.

## Checklist

- [ ] `retry` lulus kriteria selesai di atas
- [ ] Tracker Fase 1 diperbarui: `Promise.all`, `Promise.race`, `retry` sudah ditulis dari nol
- [ ] Kesulitan dicatat di log salah paham
- [ ] Soal LeetCode Min Stack (sesi DSA tambahan) dikerjakan
