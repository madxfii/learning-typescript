# Minggu 23 - Hari 4: Proyek full-stack — transaksi, logging, migrasi

## Konsep hari ini (proyek full-stack — transaksi, logging, migrasi)

- Tiga hal yang membedakan aplikasi "jalan di localhost" dari aplikasi yang siap dipakai orang lain

## Spesifikasi

- **Transaksi**: cari satu operasi di proyekmu yang melibatkan lebih dari satu perubahan data yang harus konsisten (misalnya buat order + kurangi stok) — bungkus dengan `BEGIN`/`COMMIT`/`ROLLBACK`. Uji dengan sengaja membuat salah satu langkah gagal, pastikan rollback benar-benar terjadi (tidak ada data setengah jadi)
- **Logging**: tambahkan logging terstruktur (request masuk, error, query lambat) — boleh sesederhana `console.log` terformat JSON, atau library seperti pino
- **Migrasi**: siapkan sistem migrasi database (file SQL bernomor urut, atau tool migrasi) supaya schema bisa direproduksi persis di environment lain

## Kriteria selesai

- Transaksi yang sengaja digagalkan di tengah jalan tidak meninggalkan data setengah jadi
- Menjalankan migrasi dari database kosong menghasilkan schema yang identik dengan yang sedang dipakai

## Checklist

- [ ] Transaksi teruji (termasuk skenario gagal + rollback)
- [ ] Logging terstruktur sudah berjalan
- [ ] Sistem migrasi sudah ada dan teruji dari nol
- [ ] Kesulitan dicatat di log salah paham
