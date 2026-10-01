# Minggu 34 - Hari 4: Bandingkan pendekatan bundling

## Konsep hari ini — bandingkan pendekatan bundling

## Pertanyaan panduan

1. Bagaimana library pilihanmu merepresentasikan dependency graph secara internal — apakah mirip `Map<string, string[]>` buatanmu, atau struktur data yang lebih kaya (menyimpan AST tiap module, bukan cuma path)?
2. Bagaimana mereka menangani urutan penggabungan module — apakah eksplisit pakai topological sort seperti implementasimu, atau ada strategi lain (misalnya berbasis urutan kemunculan import pertama kali/DFS)?
3. Bagaimana mereka menghindari collision nama variabel antar module — apakah pendekatannya mirip "bungkus tiap module dalam function scope" seperti punyamu, atau ada teknik lain (misalnya scope hoisting di Rollup yang menggabungkan semua module tanpa wrapper function sama sekali kalau memungkinkan)?

## Checklist

- [ ] Ketiga pertanyaan panduan sudah dijawab berdasarkan source code yang dibaca
