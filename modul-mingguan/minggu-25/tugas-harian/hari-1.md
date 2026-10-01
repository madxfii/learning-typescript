# Minggu 25 - Hari 1: Proxy dasar — get/set trap

## Konsep hari ini

- `Proxy` membungkus objek dan memungkinkan kita "menyadap" operasi dasar seperti membaca (`get`) dan menulis (`set`) properti

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const target = { count: 0 };
const handler = {
  get(obj, key) {
    console.log("reading", key);
    return obj[key];
  },
  set(obj, key, value) {
    console.log("writing", key, "=", value);
    obj[key] = value;
    return true;
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.count);
proxy.count = 5;
console.log(target.count);
```

**Pertanyaan:** Tebak urutan log-nya. Kenapa `target.count` di baris terakhir ikut berubah, padahal yang diubah adalah `proxy.count`?

### Snippet 2

```js
const user = new Proxy(
  { name: "Ahmad" },
  {
    get(obj, key) {
      if (!(key in obj)) {
        console.log(`Warning: "${key}" tidak ada`);
      }
      return obj[key];
    },
  }
);
console.log(user.name);
console.log(user.age);
```

**Pertanyaan:** Apa yang tercetak untuk `user.age`? Ini contoh kegunaan Proxy yang tidak bisa dilakukan getter/setter biasa — kenapa?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
