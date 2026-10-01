# Minggu 24 - Hari 2: Deployment ke server sungguhan

## Konsep hari ini (deployment ke server sungguhan)

- Membawa aplikasi dari localhost ke server yang bisa diakses publik — bagian dari gerbang Fase 3

## Spesifikasi

- Pilih target deployment (VPS pribadi, atau platform seperti Railway/Fly.io/Render) — tuliskan alasan pilihanmu
- Siapkan proses produksi:
  - Environment variables untuk konfigurasi & secret (jangan pernah hardcode secret di kode)
  - Process manager (PM2/systemd) atau container (Docker) supaya proses otomatis restart kalau crash
- Jalankan migrasi database (dari minggu 23) di environment production

## Kriteria selesai

- Aplikasi bisa diakses lewat URL publik
- Proses tetap hidup setelah terminal/sesi deploy ditutup (tidak mati begitu koneksi SSH terputus)

## Checklist

- [ ] Aplikasi berhasil di-deploy dan bisa diakses lewat URL publik
- [ ] Process manager/container terpasang, proses auto-restart kalau crash
- [ ] Migrasi database sudah dijalankan di production
- [ ] Kesulitan dicatat di log salah paham
