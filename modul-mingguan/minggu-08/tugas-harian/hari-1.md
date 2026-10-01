# Minggu 08 - Hari 1: Async/await — sekuensial vs paralel

## Konsep hari ini

- `await` satu per satu secara berurutan membuat operasi berjalan **sekuensial** (total waktu = jumlah semua delay)
- Memulai semua Promise dulu baru `await` satu-satu membuatnya berjalan **paralel** (total waktu = delay terlama saja)

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya (termasuk estimasi waktu total), tulis alasannya.
3. Jalankan di debugger/`console.time`, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1 — sekuensial

```js
function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
async function sequential() {
  const a = await delay(100, "a");
  const b = await delay(100, "b");
  console.log(a, b);
}
console.time("sequential");
sequential().then(() => console.timeEnd("sequential"));
```

**Pertanyaan:** Kira-kira berapa total waktu yang dibutuhkan (mendekati 100ms, 200ms, atau lainnya)? Kenapa?

### Snippet 2 — paralel

```js
async function parallel() {
  const pA = delay(100, "a");
  const pB = delay(100, "b");
  const a = await pA;
  const b = await pB;
  console.log(a, b);
}
console.time("parallel");
parallel().then(() => console.timeEnd("parallel"));
```

**Pertanyaan:** Bandingkan dengan snippet 1 — kenapa versi ini lebih cepat walau terlihat mirip?

### Snippet 3 — `await` di dalam loop

```js
async function withLoop() {
  const results = [];
  for (const ms of [50, 30, 10]) {
    const r = await delay(ms, `waited ${ms}`);
    results.push(r);
  }
  console.log(results);
}
withLoop();
```

**Pertanyaan:** Apakah `results` urut sesuai array input (`[50, 30, 10]`) atau sesuai delay tercepat duluan? Kenapa `await` di dalam loop membuatnya sekuensial?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
