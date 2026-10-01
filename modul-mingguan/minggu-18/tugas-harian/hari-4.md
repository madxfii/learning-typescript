# Minggu 18 - Hari 4: Proyek: proses CSV 1GB dengan streams

## Konsep hari ini (proyek: CSV 1GB dengan streams)

- Menerapkan streams (hari 1-2) ke kasus nyata dari roadmap: memproses file besar tanpa kehabisan memori

## Spesifikasi

- Siapkan (atau generate) file CSV besar untuk diuji — idealnya mendekati 1GB, atau minimal cukup besar untuk menunjukkan pola memori yang jelas
- Baca file memakai `fs.createReadStream` + `readline` (atau parsing chunk manual), proses **satu baris pada satu waktu** (misalnya hitung total salah satu kolom numerik)
- **Jangan pernah** menyimpan seluruh isi file di memori sekaligus (hindari `fs.readFileSync` untuk file ini)
- Pantau `process.memoryUsage().heapUsed` secara berkala selama proses berjalan

## Kriteria selesai

- Proses selesai tanpa error `JavaScript heap out of memory`
- `heapUsed` relatif stabil (tidak terus naik mengikuti ukuran file yang sudah diproses)

## Petunjuk kalau mentok (> 30 menit)

`readline.createInterface({ input: fs.createReadStream(path) })` memberi event `"line"` per baris — jauh lebih hemat memori daripada `fs.readFileSync(path).toString().split("\n")`.

## Checklist

- [ ] File CSV besar berhasil diproses lewat streams tanpa OOM
- [ ] `heapUsed` dipantau dan terbukti stabil, bukan naik linear
- [ ] Tracker Fase 3 diperbarui: file CSV 1GB diproses dengan streams
- [ ] Kesulitan dicatat di log salah paham
