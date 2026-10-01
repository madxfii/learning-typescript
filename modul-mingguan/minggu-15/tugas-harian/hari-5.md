# Minggu 15 - Hari 5: Selesaikan integrasi trie-router (parameter path)

## Konsep hari ini (sesi DSA — selesaikan integrasi trie-router)

- Trie untuk route path sedikit lebih rumit dari trie kata biasa: segmen `:id` harus diperlakukan sebagai wildcard (menangkap nilai apa pun), bukan dicocokkan literal

## Spesifikasi lanjutan

- Pastikan trie-router dari hari 3 mendukung parameter path (`/users/:id`) — saat traversal trie menemukan segmen yang terdaftar sebagai `:paramName`, tangkap nilai segmen request di posisi itu sebagai `req.params.paramName`, alih-alih mencocokkannya literal

## Kriteria selesai

```
GET /users/42 tetap menghasilkan params.id === "42", sekarang lewat traversal trie
```

## Soal LeetCode terkait

- **Design Add and Search Words Data Structure** (medium) — trie dengan dukungan wildcard `.`, konsepnya mirip dengan masalah parameter path yang baru saja dipecahkan (segmen yang "cocok dengan apa saja").

## Checklist

- [ ] Trie-router mendukung parameter path, semua test lama tetap lulus
- [ ] Soal LeetCode Design Add and Search Words Data Structure dikerjakan
- [ ] Kesulitan dicatat di log salah paham
