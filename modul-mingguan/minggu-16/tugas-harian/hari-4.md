# Minggu 16 - Hari 4: Bandingkan validator dengan Zod asli

## Konsep hari ini (bandingkan dengan Zod asli)

- Membandingkan keputusan desain sendiri dengan library production-grade sungguhan

## Tugas

1. Baca source code [Zod](https://github.com/colinhacks/zod) untuk fitur yang sudah kamu bangun: `string()`, `object()`, `optional()`, `parse()`, dan cara Zod menurunkan tipe (`z.infer`).
2. Tulis catatan perbandingan: apa yang dilakukan Zod secara berbeda dari implementasimu — misalnya penanganan error, class vs closure, cara `infer`-nya disusun, hal-hal yang Zod tangani tapi validatormu belum (refinements, transform, dll).
3. Ini bukan untuk menyalin ulang kode Zod — tujuannya memahami *kenapa* desainnya berbeda, bukan meniru literal.

## Checklist

- [ ] Catatan perbandingan dengan Zod sudah ditulis (minimal 3 perbedaan desain konkret)
- [ ] Tracker Fase 2 diperbarui: validator mini dengan Infer selesai dan dibandingkan dengan Zod
