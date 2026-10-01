# Minggu 23 - Hari 2: Proyek full-stack — auth, validasi, error handling

## Konsep hari ini (proyek full-stack — auth, validasi, error handling)

- Menggabungkan validator Fase 2 (minggu 15-16) dan pola error handling terpusat (minggu 10) ke proyek nyata

## Spesifikasi

- Autentikasi dasar — pilih salah satu: session cookie (minggu 20) atau JWT, jelaskan alasan pilihanmu
- Validasi input tiap endpoint memakai validator buatan sendiri dari Fase 2
- Error handling terpusat (pola yang sama seperti router Fase 1 minggu 10), termasuk error validasi yang mengembalikan pesan jelas ke client

## Kriteria selesai

- Endpoint menolak input tidak valid dengan pesan error yang jelas (bukan crash atau 500 generik)
- Endpoint yang butuh login menolak request tanpa autentikasi valid

## Checklist

- [ ] Autentikasi dasar bekerja (metode pilihan + alasannya sudah ditulis)
- [ ] Validasi input memakai validator Fase 2 di semua endpoint yang relevan
- [ ] Error handling terpusat menangani error validasi dan error lainnya
- [ ] Kesulitan dicatat di log salah paham
