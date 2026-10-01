# Minggu 05 - Hari 2: Timer-based closures — pola inti debounce & throttle

## Konsep hari ini

- Pola dasar di balik `debounce` (batalkan timer sebelumnya) dan `throttle` (cooldown berbasis waktu) — dipahami dulu sebelum diimplementasikan generic besok & lusa

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
function createDelayedCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log("count is now", count);
  }
  return increment;
}
const inc = createDelayedCounter();
setTimeout(inc, 0);
setTimeout(inc, 0);
setTimeout(inc, 0);
```

**Pertanyaan:** Tebak urutan dan nilai yang tercetak. Apakah ketiga `setTimeout` ini berbagi `count` yang sama?

### Snippet 2 (pola inti debounce)

```js
function withTimer() {
  let timerId = null;
  function schedule(label) {
    if (timerId) {
      clearTimeout(timerId);
      console.log("cleared previous timer for", label);
    }
    timerId = setTimeout(() => console.log("fired:", label), 50);
  }
  return schedule;
}
const schedule = withTimer();
schedule("first");
schedule("second");
schedule("third");
```

**Pertanyaan:** Tebak label mana saja yang benar-benar tercetak sebagai `"fired: ..."` — semua tiga, atau cuma sebagian? Kenapa?

### Snippet 3 (pola inti throttle)

```js
function withCooldown() {
  let lastRun = 0;
  function tryRun(label) {
    const now = Date.now();
    if (now - lastRun >= 100) {
      lastRun = now;
      console.log("ran:", label);
    } else {
      console.log("skipped:", label);
    }
  }
  return tryRun;
}
const tryRun = withCooldown();
tryRun("a");
tryRun("b");
```

**Pertanyaan:** Kalau `tryRun("a")` dan `tryRun("b")` dipanggil hampir bersamaan (< 100ms), apa hasil untuk masing-masing?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
