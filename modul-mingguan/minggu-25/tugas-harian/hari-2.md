# Minggu 25 - Hari 2: Proxy untuk nested object & array

## Konsep hari ini

- Proxy bisa dipasang di objek nested dan array, tapi trap hanya berlaku di level objek yang langsung dibungkus — nested object butuh dibungkus Proxy lagi secara rekursif kalau ingin reactivity "dalam"

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const state = new Proxy(
  { user: { name: "Ahmad" } },
  {
    get(obj, key) {
      console.log("get", key);
      return obj[key];
    },
  }
);
console.log(state.user.name);
```

**Pertanyaan:** Berapa kali `"get ..."` tercetak? Kenapa mengakses `state.user.name` tidak memicu trap `get` untuk `name`, hanya untuk `user`?

### Snippet 2 (array)

```js
const arr = new Proxy([1, 2, 3], {
  set(obj, key, value) {
    console.log("set", key, "=", value);
    obj[key] = value;
    return true;
  },
});
arr.push(4);
```

**Pertanyaan:** `push` secara internal melakukan lebih dari satu operasi `set` (menulis elemen baru, DAN mengubah `length`). Tebak berapa kali trap `set` terpanggil dan untuk key apa saja.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
