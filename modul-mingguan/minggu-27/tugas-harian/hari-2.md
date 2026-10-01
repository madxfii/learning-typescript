# Minggu 27 - Hari 2: Ikuti alur track/trigger di debugger

## Konsep hari ini — ikuti alur di debugger

Pasang breakpoint di titik yang setara dengan `track()` (pendaftaran dependency) dan `trigger()` (notifikasi perubahan) di library pilihanmu.

## Tugas

1. Tulis skrip kecil yang memakai signal/effect dari library pilihanmu (mirip contoh di minggu 25-26 tapi pakai API mereka)
2. Pasang breakpoint tepat di titik dependency didaftarkan (biasanya saat `get` dipanggil di dalam effect yang sedang aktif)
3. Step through: ikuti bagaimana library menyimpan "effect yang sedang aktif saat ini" — apakah polanya mirip variabel global/module-level seperti implementasimu, atau berbeda?

## Checklist

- [ ] Breakpoint terpasang di titik track/trigger, alurnya sudah diikuti sampai selesai
- [ ] Perbandingan pola "effect aktif saat ini" dengan implementasi sendiri sudah dicatat
