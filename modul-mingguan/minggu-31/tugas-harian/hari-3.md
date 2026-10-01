# Minggu 31 - Hari 3: Bangun container.resolve() dasar

## Konsep hari ini (bangun dari nol — container dasar)

- Container yang bisa membuat instance sebuah class secara otomatis, termasuk dependency constructor-nya (constructor injection) — untuk kasus sederhana dulu (dependency-nya tidak punya dependency lagi)

## Spesifikasi

- `container.resolve(SomeClass)` — baca metadata tipe parameter constructor `SomeClass` (dari hari 1 snippet 2), buat instance tiap dependency-nya, lalu `new SomeClass(...dependencies)`

## Kriteria selesai

```ts
@Injectable()
class Logger {
  log(msg: string) { console.log("[LOG]", msg); }
}

@Injectable()
class UserService {
  constructor(private logger: Logger) {}
  createUser(name: string) { this.logger.log(`Creating user ${name}`); }
}

const userService = container.resolve(UserService);
userService.createUser("Ahmad"); // "[LOG] Creating user Ahmad"
// perhatikan: kamu TIDAK PERNAH menulis `new Logger()` secara manual!
```

## Petunjuk kalau mentok (> 30 menit)

`container.resolve(SomeClass)`: ambil `paramTypes` dari `Reflect.getMetadata("design:paramtypes", SomeClass)`, untuk tiap tipe di situ panggil `new tipe()` (kasus sederhana ini belum rekursif), lalu `new SomeClass(...instances)`.

## Checklist

- [ ] `container.resolve()` lulus kriteria selesai di atas untuk dependency 1 level
- [ ] Kesulitan dicatat di log salah paham
