# Minggu 12 - Hari 4: Selesaikan audit any/as/@ts-ignore di router

## Konsep hari ini (selesaikan latihan pembersihan tipe)

- Menyelesaikan seluruh daftar `any`/`as`/`@ts-ignore` dari minggu 11 hari 4

## Spesifikasi

- Selesaikan seluruh temuan dari audit minggu lalu
- Pastikan proyek router Fase 1 kompilasi dengan `"strict": true` tanpa satu pun `any`, `as` (type assertion), atau `@ts-ignore`
- `as const` boleh tetap dipakai — itu justru dianjurkan, bukan bagian dari yang harus dihilangkan

## Kriteria selesai

- Pencarian `any`, ` as `, dan `@ts-ignore` di source proyek menghasilkan nol hasil relevan
- Semua test router (dari minggu 10) tetap lulus setelah perubahan

## Checklist

- [ ] Semua occurrence `any`/`as`/`@ts-ignore` sudah dihilangkan dari proyek router
- [ ] Tracker Fase 2 diperbarui: router Fase 1 bersih dari any, as, dan @ts-ignore
- [ ] Kesulitan dicatat di log salah paham
