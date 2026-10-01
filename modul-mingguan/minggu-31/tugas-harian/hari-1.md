# Minggu 31 - Hari 1: Decorator dasar & reflect-metadata

## Konsep hari ini

- Decorator: fungsi yang "membungkus"/memodifikasi class, method, atau property saat didefinisikan — dasar dari `@Injectable()`, `@Controller()`, dll di NestJS
- `reflect-metadata` memungkinkan decorator menyimpan/membaca metadata tambahan (misalnya: tipe parameter constructor) yang tidak ada di JavaScript biasa

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak perilakunya, tulis alasannya.
3. Jalankan (aktifkan `experimentalDecorators` di tsconfig), bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1 — class decorator dasar

```ts
function LogClass(target: Function) {
  console.log("Decorating class:", target.name);
}

@LogClass
class Service {}
```

**Pertanyaan:** Kapan tepatnya `console.log` di dalam `LogClass` dieksekusi — saat `Service` didefinisikan, atau saat `new Service()` dipanggil?

### Snippet 2 — metadata dengan reflect-metadata

```ts
import "reflect-metadata";

class Logger {}
class UserService {
  constructor(private logger: Logger) {}
}

const paramTypes = Reflect.getMetadata("design:paramtypes", UserService);
console.log(paramTypes); // ?
```

**Pertanyaan:** Dengan `emitDecoratorMetadata` aktif di tsconfig, TypeScript otomatis menyimpan tipe parameter constructor sebagai metadata. Tebak isi `paramTypes` — kenapa fitur ini krusial untuk membangun DI container otomatis?

## Checklist

- [ ] Kedua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
