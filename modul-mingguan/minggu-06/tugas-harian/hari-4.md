# Minggu 06 - Hari 4: Bangun `EventEmitter` dari nol

## Konsep hari ini (bangun dari nol)

- `EventEmitter` — pola inti di balik banyak library Node.js (streams, HTTP server, dll): daftarkan listener untuk sebuah event, panggil semua listener saat event di-emit

## Spesifikasi

- `on(event, listener)` — daftarkan listener untuk sebuah event; boleh lebih dari satu listener per event
- `off(event, listener)` — hapus listener tertentu dari sebuah event
- `emit(event, ...args)` — panggil semua listener yang terdaftar untuk event tersebut, dengan argumen yang diteruskan
- `once(event, listener)` — listener yang otomatis ter-`off` setelah dipanggil sekali (manfaatkan `once(fn)` yang sudah dibuat minggu 4!)

## Kriteria selesai

```js
const emitter = new EventEmitter();
const calls = [];
function onData(payload) { calls.push(["data", payload]); }

emitter.on("data", onData);
emitter.emit("data", 1);
emitter.off("data", onData);
emitter.emit("data", 2); // tidak boleh menambah calls lagi

let onceCalls = 0;
emitter.once("ping", () => onceCalls++);
emitter.emit("ping");
emitter.emit("ping");
console.log(onceCalls); // harus 1
```

## Petunjuk kalau mentok (> 30 menit)

Struktur data apa yang cocok untuk menyimpan pemetaan "nama event -> daftar listener"? (`Map` atau object biasa, dengan array sebagai value)

## Checklist

- [ ] `EventEmitter` lulus semua kriteria selesai di atas
- [ ] Bisa menjelaskan implementasinya tanpa melihat kode lagi
- [ ] Kesulitan dicatat di log salah paham
