# Minggu 07 - Hari 4: Microtask queue lebih dalam

## Konsep hari ini

- `queueMicrotask` mendaftarkan langsung ke microtask queue tanpa lewat Promise
- Setiap `await` di dalam `async function` memecah fungsi jadi beberapa "potongan" yang dijadwalkan sebagai microtask terpisah

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
function logAndQueueMicrotask(label) {
  console.log(label);
  queueMicrotask(() => console.log("microtask for", label));
}
logAndQueueMicrotask("A");
logAndQueueMicrotask("B");
```

**Pertanyaan:** Tebak urutan lengkapnya.

### Snippet 2

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
queueMicrotask(() => console.log("3"));
Promise.resolve().then(() => console.log("4"));
queueMicrotask(() => console.log("5"));
console.log("6");
```

**Pertanyaan:** Ada 2 sumber macrotask (`setTimeout`) dan 3 sumber microtask. Tebak urutan lengkapnya — microtask diproses FIFO sesuai urutan didaftarkan.

### Snippet 3

```js
async function chain() {
  console.log("chain start");
  await Promise.resolve();
  console.log("chain step 2");
  await Promise.resolve();
  console.log("chain step 3");
}
chain();
console.log("after chain() call");
```

**Pertanyaan:** Tebak urutan lengkap termasuk `"after chain() call"`.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
