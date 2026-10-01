# Minggu 32 - Hari 1: Bangun lifecycle (singleton vs transient)

## Konsep hari ini (bangun dari nol — lifecycle)

- Singleton: instance dibuat sekali, dipakai ulang untuk semua resolve berikutnya
- Transient: instance baru dibuat setiap kali di-resolve

## Spesifikasi

- Tambahkan opsi lifecycle ke `@Injectable({ lifecycle: "singleton" | "transient" })` (default salah satu, misal singleton)
- Container menyimpan cache instance untuk class yang singleton, dan mengembalikan instance yang sama pada resolve berikutnya

## Kriteria selesai

```ts
@Injectable({ lifecycle: "singleton" })
class Database {}

@Injectable({ lifecycle: "transient" })
class RequestContext {}

const db1 = container.resolve(Database);
const db2 = container.resolve(Database);
console.log(db1 === db2); // true (singleton)

const ctx1 = container.resolve(RequestContext);
const ctx2 = container.resolve(RequestContext);
console.log(ctx1 === ctx2); // false (transient)
```

## Checklist

- [ ] Lifecycle singleton vs transient lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
