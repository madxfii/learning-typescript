# Minggu 27 - Hari 4: Bandingkan batching/scheduler

## Konsep hari ini — bandingkan batching/scheduler

Cari bagaimana library pilihanmu menangani batching (di Vue: `nextTick` + scheduler; di Solid: batching otomatis dalam event handler; di Preact Signals: `batch()`).

## Pertanyaan panduan

1. Apakah API-nya eksplisit (seperti `batch(fn)` buatanmu) atau implisit (otomatis di konteks tertentu, misal event handler)?
2. Kalau implisit, mekanisme apa yang mereka pakai untuk tahu "kapan harus batch" tanpa API eksplisit?

## Checklist

- [ ] Perbandingan batching/scheduler dengan implementasi sendiri sudah ditulis
