# Minggu 30 - Hari 3: Scheduling — level konsep

## Konsep hari ini — scheduling (level konsep)

- React (lewat Fiber) dan Preact menangani "kapan" render benar-benar dieksekusi secara lebih canggih dari implementasi sinkron sederhana milikmu (misalnya bisa dijeda/prioritaskan)

## Tugas

Baca (level konsep, tidak perlu memahami detail implementasi Fiber sepenuhnya) bagaimana React membagi pekerjaan render jadi unit-unit kecil yang bisa dijeda (time slicing), dibanding implementasimu yang render satu component tree sampai selesai tanpa jeda.

## Pertanyaan panduan

Untuk aplikasi kecil (seperti yang kamu bangun minggu 28-29), apakah perbedaan ini terasa? Pada skala aplikasi seperti apa scheduling yang lebih canggih ini baru terasa manfaatnya?

## Checklist

- [ ] Konsep scheduling/time-slicing sudah dibaca dan dipahami level tinggi
- [ ] Refleksi soal kapan ini benar-benar terasa manfaatnya sudah ditulis
