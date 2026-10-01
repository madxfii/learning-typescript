# Minggu 32 - Hari 2: Circular dependency dalam DI

## Konsep hari ini

- Circular dependency dalam DI: class A butuh class B, class B butuh class A — container naif akan terjebak rekursi tak berhenti

## Cara kerja

1. Baca skenario, **jangan dijalankan dulu**.
2. Tebak apa yang terjadi kalau ini di-resolve dengan container milikmu dari minggu 31.
3. Coba jalankan (siapkan supaya tidak benar-benar hang selamanya, misal batasi kedalaman rekursi untuk observasi).
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Skenario

```ts
@Injectable()
class ServiceA {
  constructor(private b: ServiceB) {}
}

@Injectable()
class ServiceB {
  constructor(private a: ServiceA) {}
}

container.resolve(ServiceA);
```

**Pertanyaan:** Apa yang terjadi kalau ini di-resolve dengan `container.resolve()` rekursif dari minggu 31 (tanpa penanganan khusus)? Bagaimana library DI production-grade biasanya mendeteksi ini (petunjuk: lacak "sedang meresolve class apa saja" di sepanjang satu rantai resolve, mirip deteksi siklus di graph minggu 18)?

## Checklist

- [ ] Perilaku circular dependency pada container sendiri sudah diamati dan didokumentasikan
- [ ] Ide deteksi siklus (dikaitkan ke minggu 18) sudah ditulis
