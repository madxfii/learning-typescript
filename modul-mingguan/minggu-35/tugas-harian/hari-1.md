# Minggu 35 - Hari 1: Radix tree vs trie — path compression

## Konsep hari ini

- Radix tree = trie yang di-"kompres": rantai node yang masing-masing cuma punya 1 child digabung jadi satu node berisi string (bukan 1 karakter per node seperti trie biasa) — lebih hemat memori dan traversal-nya lebih cepat (lebih sedikit node yang dilewati)

## Trace konseptual

Bayangkan trie biasa menyimpan kata `"test"`, `"team"`, `"toast"`:
- Trie biasa: `t -> e -> s -> t` (untuk "test"), `t -> e -> a -> m` (untuk "team"), dst — tiap huruf 1 node
- Radix tree: node awal `"t"`, lalu cabang `"e"` (punya cabang `"st"` dan `"am"`) dan cabang `"oast"`

**Pertanyaan:** Kenapa radix tree butuh lebih sedikit node dibanding trie biasa untuk kumpulan kata yang sama? Pada kasus apa (jenis data apa) keuntungan ini paling terasa?

## Checklist

- [ ] Konsep path compression radix tree vs trie dipahami
- [ ] Kesulitan dicatat di log salah paham
