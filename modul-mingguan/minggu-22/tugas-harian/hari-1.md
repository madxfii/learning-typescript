# Minggu 22 - Hari 1: Web API — fetch, storage, Web Worker

## Konsep hari ini

- Web API inti: `fetch`, `localStorage`/`sessionStorage`, `Web Worker`

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak perilakunya, tulis alasannya.
3. Coba di browser console.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
async function loadUser(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

**Pertanyaan:** `fetch` **tidak** otomatis melempar error untuk status 404/500 — kenapa perlu pengecekan `res.ok` secara manual seperti ini?

### Snippet 2

```js
localStorage.setItem("theme", "dark");
sessionStorage.setItem("draft", "hello");
console.log(localStorage.getItem("theme"));
```

**Pertanyaan:** Apa beda utama `localStorage` dan `sessionStorage` soal masa hidup datanya (saat tab ditutup, browser ditutup, atau tab baru dibuka)?

### Snippet 3

```js
// main.js
const worker = new Worker("worker.js");
worker.postMessage({ n: 40 });
worker.onmessage = (e) => console.log("result:", e.data);

// worker.js
self.onmessage = (e) => {
  function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }
  self.postMessage(fib(e.data.n));
};
```

**Pertanyaan:** Kenapa menjalankan `fib(40)` (lambat, rekursif naif) di Web Worker lebih baik daripada langsung di main thread untuk aplikasi dengan UI?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dicoba
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
