# Minggu 24 - Hari 4: Lacak bug produksi (inti gerbang)

## Konsep hari ini — Lacak bug produksi (inti gerbang)

- Bagian paling penting dari gerbang Fase 3: membuktikan kemampuan melacak bug sampai ke akar masalahnya di aplikasi yang sungguhan dipakai

## Spesifikasi

- Pakai aplikasi yang sudah di-deploy secara nyata (atau minta orang lain memakainya) sampai menemukan **minimal satu bug** yang hanya muncul di production (bukan yang sudah ketahuan saat development)
- Lacak bug tersebut sampai ke akar masalahnya memakai log yang sudah dipasang (minggu 23) dan/atau debugger

## Dokumentasikan

1. Gejala yang terlihat (apa yang salah dari sudut pandang pengguna)
2. Log yang jadi petunjuk (potongan log relevan)
3. Akar masalah sebenarnya (root cause, bukan cuma gejalanya)
4. Perbaikan yang dilakukan

## Kriteria selesai

- Dokumentasi lengkap dari gejala sampai fix untuk minimal 1 bug produksi

## Checklist

- [ ] Minimal 1 bug produksi ditemukan dan didokumentasikan lengkap (gejala -> log -> akar masalah -> fix)
- [ ] Tracker Fase 3 diperbarui: satu bug produksi dilacak sampai ke akar masalahnya
