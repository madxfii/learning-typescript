# Minggu 31 - Hari 2: Bangun @Injectable()

## Konsep hari ini (bangun dari nol)

- `@Injectable()` — decorator penanda bahwa sebuah class boleh di-resolve oleh container (langkah pertama, belum melakukan apa-apa selain menandai)

## Spesifikasi

- `@Injectable()` sebagai class decorator: cukup menandai class ini "bisa di-resolve" (misalnya lewat `Reflect.defineMetadata`), tidak perlu logic rumit dulu

## Kriteria selesai

```ts
@Injectable()
class Logger {
  log(msg: string) { console.log("[LOG]", msg); }
}
```

Setelah ini compile tanpa error, dan `Logger` "ditandai" sebagai injectable (bisa diverifikasi lewat metadata-nya).

## Petunjuk kalau mentok (> 30 menit)

`@Injectable()` sendiri boleh sangat sederhana di tahap ini — logika resolve-nya ada di container (hari 3), bukan di decorator ini.

## Checklist

- [ ] `@Injectable()` decorator bekerja (class ter-tandai)
- [ ] Kesulitan dicatat di log salah paham
