# Minggu 31 - Hari 4: Resolve rekursif (dependency berlapis)

## Konsep hari ini (bangun dari nol — resolve rekursif)

- Dependency yang juga punya dependency sendiri (2+ level) — `container.resolve()` perlu memanggil dirinya sendiri secara rekursif (ingat pola rekursi Fase 0-2)

## Spesifikasi

- Perluas `container.resolve(SomeClass)` dari hari 3: alih-alih `new tipe()` langsung untuk tiap dependency, panggil `container.resolve(tipe)` secara rekursif

## Kriteria selesai

```ts
@Injectable()
class Database {}

@Injectable()
class UserRepository {
  constructor(private db: Database) {}
}

@Injectable()
class UserService {
  constructor(private repo: UserRepository, private logger: Logger) {}
}

const userService = container.resolve(UserService);
// UserService butuh UserRepository (yang butuh Database) DAN Logger -- semuanya
// harus ter-resolve otomatis tanpa satu pun `new` manual
```

## Checklist

- [ ] `container.resolve()` lulus untuk dependency berlapis (2+ level)
- [ ] Kesulitan dicatat di log salah paham
