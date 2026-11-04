# Log Salah Paham - Minggu 01

Catat setiap kali tebakan meleset. Format: apa yang dikira, apa yang sebenarnya terjadi, kenapa.

## Hari 1

_(diisi saat belajar)_

## Hari 2

- **Snippet 3 (`let w = 2` kedua):** dikira cuma assignment biasa, jadi tebakan "tidak ada error". Sebenarnya itu deklarasi baru dengan nama yang sudah terdaftar, dan `let` melarang redeclare. Ini early error (`SyntaxError`) yang ketahuan di tahap parse, jadi seluruh skrip ditolak dan `console.log(z)` di atasnya tidak pernah tercetak. Kenapa: lupa membedakan deklarasi dari assignment, dan belum paham bahwa parse jalan sebelum eksekusi.
- **Snippet 3 (`var z` dua kali):** dikira ada dua variabel `z`. Sebenarnya cuma satu entri, deklarasi kedua no-op di tahap setup scope, dan `var z = 2` hanya assignment ke `z` yang sama.
- **Snippet 4 (reassign `const`):** dikira error di tahap parse, jadi `console.log(config)` dikira tidak tercetak. Sebenarnya `count = 2` valid secara sintaks, ditolak saat eksekusi (`TypeError: Assignment to constant variable`), jadi baris-baris sebelumnya sempat jalan. Kenapa: menyamakan reassign `const` dengan redeclare `let`. Parser cuma cek bentuk kode, bukan efek assignment ke binding yang dikunci.
- **Snippet 4 (isi `config`):** dikira `{ debug: true }`. Sebenarnya `{ debug: false }`, karena baris 2 sudah mengubah isi objek lewat reference sebelum baris 3 jalan. Kenapa: kurang teliti trace urutan baris.
- **Snippet 2 dan 5 / TDZ (pesan error):** dikira `x is not defined` / `y is not defined`. Sebenarnya `ReferenceError: Cannot access 'x' before initialization`. `not defined` artinya nama tidak ketemu di scope mana pun, sedangkan TDZ berarti nama sudah terdaftar di scope tapi uninitialized. Python Tutor menampilkan pesan yang beda dari V8, jadi acuan pesan error pakai Node/DevTools.
- **Shadowing di TDZ:** `let x` di dalam blok sudah terdaftar di setup scope blok itu, jadi menutupi `x` luar walaupun belum bisa dipakai. `console.log(x)` tidak jatuh ke `x` luar.

## Hari 3

_(diisi saat belajar)_

## Hari 4

_(diisi saat belajar)_

## Hari 5

_(diisi saat belajar)_
