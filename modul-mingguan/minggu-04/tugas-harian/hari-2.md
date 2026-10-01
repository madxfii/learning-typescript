# Minggu 04 - Hari 2: Module pattern dengan closure (private state)

## Konsep hari ini

- Module pattern: memakai closure (sering lewat IIFE) untuk menyembunyikan state privat dan hanya mengekspos method tertentu
- Ini fondasi dari `private` field di class modern dan dari sistem module ES/CommonJS (minggu 9)

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const counterModule = (function () {
  let count = 0;
  return {
    increment() { count += 1; return count; },
    reset() { count = 0; },
  };
})();
console.log(counterModule.increment());
console.log(counterModule.increment());
counterModule.reset();
console.log(counterModule.increment());
console.log(counterModule.count);
```

**Pertanyaan:** Kenapa `counterModule.count` menghasilkan `undefined` walaupun jelas ada `count` yang dipakai di dalam?

### Snippet 2

```js
function createModule() {
  let secret = "hidden";
  function reveal() { return secret; }
  function change(newSecret) { secret = newSecret; }
  return { reveal, change };
}
const modA = createModule();
const modB = createModule();
modA.change("A's secret");
console.log(modA.reveal(), modB.reveal());
```

**Pertanyaan:** Buktikan lewat trace bahwa `modA` dan `modB` tidak berbagi `secret` yang sama.

### Snippet 3

```js
const cacheModule = (function () {
  const store = {};
  return {
    remember(key, value) { store[key] = value; },
    recall(key) { return store[key]; },
  };
})();
cacheModule.remember("a", 1);
console.log(cacheModule.recall("a"));
console.log(Object.keys(cacheModule));
```

**Pertanyaan:** Kenapa `store` tidak muncul di `Object.keys(cacheModule)` padahal datanya jelas tersimpan di situ?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
