# Minggu 17 - Hari 2: Thread pool — operasi mana yang memakainya

## Konsep hari ini

- Node itu single-threaded untuk eksekusi JS, tapi libuv menyediakan **thread pool** (default 4 thread) untuk operasi yang secara OS bersifat blocking: sebagian besar `fs`, `crypto` (pbkdf2, scrypt), `zlib`, dan `dns.lookup`
- Operasi network (HTTP request, TCP socket) **tidak** memakai thread pool — itu ditangani async native oleh OS (epoll/kqueue)

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak urutan/perilakunya, tulis alasannya.
3. Jalankan, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
const crypto = require("crypto");
console.log("start");
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
  console.log("pbkdf2 done");
});
console.log("end");
```

**Pertanyaan:** `pbkdf2` async ini memakai thread pool. Apakah `"end"` tercetak sebelum atau sesudah `"pbkdf2 done"`? Kenapa memakai thread pool tidak memblokir event loop utama?

### Snippet 2

```js
const crypto = require("crypto");
console.time("all done");
let count = 0;
for (let i = 0; i < 8; i++) {
  crypto.pbkdf2("password", "salt" + i, 100000, 64, "sha512", () => {
    count++;
    if (count === 8) console.timeEnd("all done");
  });
}
```

**Pertanyaan:** Default thread pool size adalah 4. Untuk 8 pemanggilan `pbkdf2` seperti ini, apa dugaanmu soal waktu totalnya — apakah semuanya selesai dalam waktu yang kira-kira sama seperti 4 pemanggilan, atau ada lonjakan waktu karena harus "antre" giliran thread? (petunjuk: environment variable `UV_THREADPOOL_SIZE`)

### Snippet 3

```js
const https = require("https");
console.log("start");
https.get("https://example.com", (res) => {
  console.log("response received");
});
console.log("end");
```

**Pertanyaan:** Request HTTP ini **tidak** memakai thread pool libuv, tapi tetap async. Bagaimana Node bisa membuat ini non-blocking tanpa thread pool?

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
