# Minggu 28 - Hari 4: Kenapa re-render naif mahal

## Konsep hari ini

- Kenapa "re-render naif" (hapus semua elemen lalu `render` ulang dari nol) mahal dan bermasalah — ini alasan diffing dibutuhkan minggu depan

## Analisis (bukan kode, tulis jawabannya)

1. Kalau tiap perubahan state memicu `container.innerHTML = ""` lalu `render(newVnode, container)` ulang dari nol, apa yang terjadi pada elemen `<input>` yang sedang di-fokus pengguna saat itu?
2. Apa yang terjadi pada CSS transition/animation yang sedang berjalan di sebuah elemen kalau elemen itu dihapus lalu dibuat ulang, walau isinya sama persis?
3. Untuk halaman dengan 1000 elemen tapi cuma 1 yang berubah, berapa kompleksitas kerja "re-render naif" dibanding idealnya (yang cuma perlu mengubah 1 elemen)?

## Checklist

- [ ] Ketiga pertanyaan analisis sudah dijawab
- [ ] Kesulitan dicatat di log salah paham
