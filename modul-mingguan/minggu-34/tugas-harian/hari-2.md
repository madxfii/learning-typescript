# Minggu 34 - Hari 2: Jalankan & verifikasi hasil bundle

## Konsep hari ini (bangun dari nol — jalankan hasil bundle)

- Memverifikasi bundle hasil hari 1 benar-benar bisa dijalankan dan berperilaku sama seperti kode aslinya yang masih terpisah banyak file

## Spesifikasi

- Tulis bundle hasil `bundle(entryFile)` ke sebuah file (`output.bundle.js`)
- Jalankan file itu dengan `node output.bundle.js`, bandingkan hasilnya dengan menjalankan `entry.js` asli (yang masih pakai `import`/`export` asli, lewat Node ESM biasa)

## Kriteria selesai

- Output dari `node output.bundle.js` identik dengan output dari menjalankan versi asli entry.js + dependency-nya

## Checklist

- [ ] Bundle hasil `bundle()` benar-benar bisa dijalankan dengan `node` dan hasilnya identik dengan versi asli
- [ ] Kesulitan dicatat di log salah paham
