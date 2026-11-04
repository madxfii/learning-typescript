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

- **Pertanyaan pengecek (padanan Snippet 1):** `var nama` di dalam `if` dikira "di dalam scope `if`". Sebenarnya `var` tidak pernah masuk scope `if`, dia didaftarkan di scope fungsi sejak fungsi dimulai (isi awal `undefined`). Makanya bisa dibaca di luar `if`.
- **Pertanyaan pengecek (padanan Snippet 2):** menjawab ragu `error/undefined` untuk `let` di dalam `if` yang dibaca di luar. Sebenarnya pasti error (`ReferenceError: nama is not defined`), karena `let` didaftarkan di scope blok dan tidak ada di rantai pencarian dari luar `if`. `undefined` itu perilaku `var`. Alasan "shadowing" juga salah konteks, karena cuma ada satu variabel `nama`.
- **Snippet 3 (trace loop):** menulis kondisi loop sebagai `3 > 3`, padahal kodenya `i < 3` (jadi `3 < 3` = false). Hasil akhirnya sama, tapi tulis kondisi persis seperti di kode saat trace.
- **Snippet 3 (scope `var`):** mengira `var` "bisa diakses di scope manapun". Sebenarnya `var` bisa diakses di seluruh fungsi tempat dia didaftarkan (atau seluruh skrip kalau global). Di snippet ini kebetulan global karena tidak ada fungsi.
- **Materi 2 (deklarasi vs assignment):** `let level = "x"` itu deklarasi baru, `level = "x"` itu assignment ke variabel yang ditemukan di rantai pencarian. Tanpa deklarasi di scope dalam, assignment mengubah variabel luar. Tanpa deklarasi di mana pun: strict mode `ReferenceError`, sloppy mode bikin global baru.

## Hari 4

- **Cek paham materi 1 (`ruang()`):** urutan output `typeof` tertukar, dan sempat menulis nama variabel (`isiRuang`) sebagai output. Kenapa: kurang teliti trace. Tulis baris yang jalan, nama yang dicek, isinya di tabel setup, baru outputnya.
- **Snippet 1:** benar, tidak ada salah paham. Tapi sempat tertukar nama (`greet` vs `greet2`) di Snippet 2, jadi tulis nama persis dari kode.
- **Cek paham materi 2 (`toko()` dan Snippet 2):** error memanggil `var diskon` sebelum barisnya dikira `ReferenceError: diskon is not defined`. Sebenarnya `TypeError: diskon is not a function`, karena `diskon` terdaftar dan berisi `undefined` (nilai), jadi nama ketemu tapi nilainya bukan fungsi.
- **Cek paham materi 2 (versi `const`):** dikira error-nya sama persis dengan versi `var` (`is not a function`), lalu dikira `ReferenceError: diskon is not defined`. Sebenarnya `ReferenceError: Cannot access 'diskon' before initialization`, karena `const` berstatus TDZ dan membaca namanya sudah gagal sebelum sempat memanggil. Jenis dan pesan keduanya berubah dibanding `var`. Pesan `not defined` vs `Cannot access` salah untuk ketiga kalinya (Hari 2 dua kali, Hari 4 sekali): selalu verifikasi pesan error di Node sebelum menjawab.
- **Cek paham materi 3 (`lab()` dan Snippet 4):** `class` dikira diisi seperti function declaration (`function E`), lalu dikira mirip `const` dan `var`. Sebenarnya class di-hoist seperti `let`/`const`: terdaftar tapi TDZ sampai barisnya dieksekusi, jadi `new Person()` sebelum `class Person {}` adalah `ReferenceError: Cannot access 'Person' before initialization`.
- **Snippet 5 (`foo` bentrok `var` dan function):** baris 1 sempat dijawab `undefined` dan baris 4 sempat `function`. Sebenarnya function declaration mengisi `foo` di tahap setup, jadi `typeof foo` baris 1 = `function`, lalu `var foo = "value"` menimpa isinya saat eksekusi, jadi baris 4 = `string`. Trace sempat bertentangan dengan tabel setup sendiri (setup `foo` = fungsi, tapi baris 1 ditulis `undefined`). Kenapa: lupa isi variabel di suatu baris = isi terakhir yang dituliskan baris sebelumnya, dan urutan pengisian antara setup vs eksekusi.

## Hari 5

_(diisi saat belajar)_
