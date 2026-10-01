# Minggu 07 - Hari 5: Linked list lanjutan + pratinjau retry

## Konsep hari ini (DSA lanjutan + persiapan minggu 8)

- Generalisasi struktur linked list, plus pratinjau pola `retry` yang akan dibangun minggu depan

## Tugas DSA lanjutan

1. Tambahkan method `insertAt(index, value)` dan `removeAt(index)` ke `LinkedList` dari hari 3. Coba generalisasi sendiri dari pola `add`/`removeFirst`, jangan sekadar mencontek strukturnya mentah-mentah.
2. Soal LeetCode: **Linked List Cycle** (easy) — deteksi siklus memakai teknik dua pointer (fast/slow).

## Trace: pratinjau pola retry

```js
function flakyTask(attempt) {
  return new Promise((resolve, reject) => {
    if (attempt < 3) reject(new Error(`attempt ${attempt} failed`));
    else resolve("success");
  });
}
async function tryOnce() {
  try {
    const result = await flakyTask(1);
    console.log(result);
  } catch (e) {
    console.log("caught:", e.message);
  }
}
tryOnce();
```

**Pertanyaan:** Fungsi ini cuma mencoba sekali lalu menyerah. Minggu depan kamu akan membangun `retry` yang mencoba ulang otomatis — dari snippet ini, bagian mana yang perlu dibungkus dalam sebuah loop supaya bisa mencoba lagi?

## Checklist

- [ ] `insertAt`/`removeAt` selesai dan diuji manual
- [ ] Soal LeetCode Linked List Cycle dikerjakan
- [ ] Kesulitan dicatat di log salah paham
