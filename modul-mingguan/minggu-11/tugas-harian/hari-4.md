# Minggu 11 - Hari 4: Mulai audit any/as/@ts-ignore di router

## Konsep hari ini (mulai latihan pembersihan tipe)

- Latihan dari roadmap: ubah proyek router Fase 1 supaya tidak ada satu pun `any`, `as`, atau `@ts-ignore` — dikerjakan bertahap minggu 11-12

## Spesifikasi (hari ini: audit, belum harus selesai diperbaiki)

- Scan seluruh source proyek router Fase 1: cari semua pemakaian `any`, `as` (type assertion, bukan `as const`), dan `@ts-ignore`
- Untuk tiap temuan, catat: di file/baris mana, kenapa awalnya dipakai, dan rencana perbaikannya (narrowing, type guard, generic, dll — pilih yang paling pas per kasus)
- Perbaiki temuan yang paling mudah hari ini; sisanya lanjut minggu 12 hari 4

## Kriteria selesai (hari ini)

- Daftar lengkap semua occurrence `any`/`as`/`@ts-ignore` di proyek beserta rencana perbaikannya (belum harus semuanya sudah diperbaiki)

## Checklist

- [ ] Daftar audit `any`/`as`/`@ts-ignore` sudah lengkap dengan rencana perbaikan
- [ ] Sebagian sudah mulai diperbaiki
- [ ] Kesulitan dicatat di log salah paham
