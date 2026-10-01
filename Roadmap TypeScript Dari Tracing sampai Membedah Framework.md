# Roadmap TypeScript: Dari Tracing sampai Membedah Framework

Sep 28, 2026 · @Ahmad

## Gambaran besar

Roadmap ini membawa Anda dari posisi sekarang (kenal sintaks, tapi belum bisa mensimulasikan eksekusi kode di kepala) ke target: bisa memakai dan membedah teknologi apa pun yang dibangun di atas TypeScript. Durasinya sekitar 40 minggu dengan ritme 1–2 jam per hari, 5 hari per minggu.

Setiap fase ditutup gerbang berupa tes konkret. Lanjut ke fase berikutnya hanya setelah lulus gerbang, bukan setelah waktunya habis. Fase yang selesai lebih cepat atau lebih lambat dari jadwal itu wajar.

&#91;embedded content: roadmap · 5 fase, 4 gerbang, 1 jalur paralel\]

Fase 0 disorot karena di situlah Anda mulai. DSA berjalan paralel sejak minggu ke-4 dan selalu dikaitkan ke proyek fase yang sedang berjalan.

## Fase 0: Tracing dan model mental eksekusi (minggu 1–3)

Tujuan fase ini adalah menutup celah terbesar Anda saat ini: bisa membaca kode *seperti komputer*, bukan sekadar mengenali sintaksnya. Semua fase berikutnya bergantung pada kemampuan ini.

**Minggu 1: nilai, referensi, dan scope.** Pelajari beda tipe primitif (disalin) dan objek (direferensikan), scope global/fungsi/blok, beda `var`/`let`/`const`, dan hoisting. Uji dengan potongan seperti `const b = a; b.x = 2;` lalu tanyakan: apakah `a` ikut berubah, dan kenapa?

**Minggu 2: call stack dan closure dasar.** Ikuti bagaimana fungsi memanggil fungsi lain, apa yang terjadi saat fungsi selesai, rekursi sederhana, dan fungsi yang "mengingat" variabel dari luar. Mulai pakai debugger VS Code atau Chrome DevTools: breakpoint, *step over*, *step into*, dan panel variabel.

**Minggu 3: sinkron vs asinkron.** Pahami pola "didaftarkan sekarang, dijalankan nanti": callback, `setTimeout`, dan Promise dasar. Pakai Loupe atau JS Visualizer 9000 untuk melihat event loop bekerja. Di akhir minggu, kerjakan ulang soal 1–3 dari assessment.

**Rutinitas harian (30–60 menit):**

1. Ambil 3–5 potongan kode pendek (5–15 baris).
2. Tebak output-nya dan tulis tabel trace di kertas: baris yang dieksekusi · variabel · nilainya.
3. Jalankan di debugger langkah demi langkah dan bandingkan dengan tebakan.
4. Setiap tebakan yang salah dicatat di "log salah paham": apa yang Anda kira, apa yang sebenarnya terjadi, dan kenapa. Log ini adalah catatan belajar paling berharga Anda.

**Gerbang:** jawab benar soal 1–3 assessment tanpa menjalankan kode, dan bisa menjelaskan alasannya dengan kata-kata sendiri.

## Fase 1: Runtime JavaScript (minggu 4–10)

Fase ini membangun pemahaman tentang perilaku JavaScript saat berjalan, fondasi yang dipakai semua framework. Sistem tipe TypeScript sengaja ditunda karena tipe hanyalah deskripsi dari perilaku ini.

**Minggu 4–5: scope dan closure secara mendalam.** Lexical scope, closure di dalam loop, module pattern, dan fungsi yang mengembalikan fungsi. Latihan: tulis `debounce`, `throttle`, dan `once` dari nol.

**Minggu 6: objek, `this`, dan prototype.** Empat aturan penentuan `this`, arrow function vs function biasa, `call`/`apply`/`bind`, prototype chain, dan apa yang sebenarnya dilakukan `class` di baliknya. Latihan: tulis `EventEmitter` dengan `on`, `off`, `emit`, dan `once`.

**Minggu 7–8: asinkron dan event loop.** Microtask vs macrotask, Promise dari dalam, async/await, error handling asinkron, generator, dan async iterator. Latihan: tulis ulang `Promise.all`, `Promise.race`, dan fungsi `retry` dengan backoff.

**Minggu 9: module system.** ESM vs CommonJS, live binding vs salinan nilai, circular import, dan kenapa error `require is not defined` atau `Cannot use import statement` muncul.

**Minggu 9–10: proyek router HTTP mini.** Dibangun di atas `node:http` tanpa framework, dalam TypeScript strict:

- routing dengan parameter (`/users/:id`) dan query string
- middleware chain dengan `next()` dan dukungan async
- parsing body JSON dan error handling terpusat
- test untuk setiap fitur

Mulai dengan pencocokan route memakai loop sederhana. Versi trie menyusul setelah jalur DSA sampai ke topik tree.

**Gerbang:** router berjalan, test lulus, dan Anda bisa menjelaskan setiap baris tanpa melihat catatan. Soal nomor 2 (urutan output async) juga harus bisa dijawab benar beserta alasannya.

## Fase 2: Sistem tipe TypeScript (minggu 11–16)

Targetnya bisa membaca dan menulis tipe setingkat library. Di level ini, file `.d.ts` dari Zod, tRPC, atau Prisma tidak lagi terasa seperti bahasa asing.

**Minggu 11–12: fondasi yang benar.** Structural typing, inferensi, `unknown` vs `any` vs `never`, literal types dan `as const`, narrowing (`typeof`, `in`, type guard buatan sendiri), serta discriminated union dengan exhaustiveness check. Latihan: ubah proyek router Fase 1 agar tidak ada satu pun `any`, `as`, atau `@ts-ignore`.

**Minggu 13–14: generics dan manipulasi tipe.** Generics dengan constraint, `keyof`, indexed access (`T[K]`), utility types bawaan, lalu conditional types, `infer`, mapped types, dan template literal types. Latihan: `type-challenges` level easy lalu medium, 3–5 soal per hari. Setelah menyelesaikan satu soal, tulis ulang solusinya dengan kata-kata sendiri.

**Minggu 15–16: proyek validator mini ala Zod.** Fitur minimal:

- schema dasar: `string()`, `number()`, `boolean()`, `object()`, `array()`
- `optional()` dan `union()`
- `parse()` yang melempar error dengan path yang jelas (misalnya `user.address.city`)
- tipe `Infer<typeof schema>` yang menurunkan tipe TypeScript dari schema

Setelah selesai, bandingkan dengan source code Zod yang asli dan catat perbedaan desainnya.

**Gerbang:** sebagian besar soal medium `type-challenges` selesai, `Infer` di validator Anda bekerja untuk objek bersarang, dan Anda bisa menjawab soal 4–7 assessment.

## Fase 3: Platform (minggu 17–24)

Framework terasa "magis" hanya kalau platform di bawahnya belum dipahami. Fase ini membuka dua lingkungan tempat TypeScript berjalan, server dan browser, beserta dua hal yang selalu ada di aplikasi nyata: HTTP dan database.

**Minggu 17–18: Node.js dari dalam.** Peran libuv dan thread pool, fase-fase event loop Node, streams dan backpressure, Buffer, `worker_threads`, serta cara mendeteksi memory leak dengan heap snapshot. Latihan: proses file CSV berukuran 1 GB dengan streams tanpa kehabisan memori.

**Minggu 19–20: HTTP secara mendalam.** Siklus request/response, status code, header penting, caching (`Cache-Control`, `ETag`), cookie dan session, CORS (soal nomor 8), serta dasar TLS. Latihan: tambahkan caching, CORS, dan cookie session ke router Fase 1.

**Minggu 21–22: browser.** DOM dan event propagation, rendering pipeline (parse, style, layout, paint, composite), apa yang memicu reflow, Web API (`fetch`, storage, Web Worker), serta cara membaca tab Performance di DevTools.

**Minggu 21–24, bersamaan dengan topik browser: database dan proyek full-stack.** SQL dasar sampai join dan index, transaksi, dan masalah N+1. Proyek penutup fase ini adalah aplikasi nyata yang dipakai orang lain, misalnya tool internal atau aplikasi untuk komunitas Anda:

- backend dengan router buatan sendiri atau Hono, plus PostgreSQL
- autentikasi, validasi memakai validator Fase 2, dan error handling
- logging, migrasi database, dan deployment ke server sungguhan

**Gerbang:** aplikasi dipakai minimal beberapa orang, dan minimal satu bug produksi berhasil Anda lacak sampai ke akar masalahnya lewat log dan debugger.

## Fase 4: Pola lintas framework (minggu 25–40)

Di fase ini target Anda tercapai: setiap framework dipahami sebagai kombinasi pola yang sudah Anda bangun sendiri. Polanya selalu sama: bangun versi mini dari sebuah konsep, lalu baca source code framework aslinya dan bandingkan.

| Minggu | Bangun versi mini | Lalu bedah | Yang dipelajari |
| --- | --- | --- | --- |
| 25–27 | Library reaktivitas dengan signals, memakai `Proxy` | Vue reactivity, Solid, Preact Signals | Dependency tracking, fine-grained update |
| 28–30 | Virtual DOM dengan diffing dan komponen sederhana | React (reconciler, hooks), Preact | Tree diffing, scheduling, alasan aturan hooks |
| 31–32 | Container dependency injection dengan decorator | NestJS, InversifyJS | Decorator, metadata, lifecycle |
| 33–34 | Bundler sederhana: resolve import, dependency graph, gabung jadi satu file | Vite, esbuild, Rollup | AST, graph, topological sort, transformasi kode |
| 35–36 | Upgrade router Fase 1 menjadi radix tree | Hono, Fastify | Performa routing, desain API framework |
| 37–40 | Kontribusi ke satu proyek open source TypeScript | Proyek pilihan Anda | Membaca codebase besar, proses review |

**Cara membedah source code framework:**

1. Mulai dari satu fitur kecil yang sudah Anda pahami dari sisi pengguna, misalnya `useState` atau `app.get()`.
2. Clone repo-nya, jalankan test-nya, lalu pasang breakpoint dan ikuti alurnya di debugger. Ini kemampuan tracing dari Fase 0 dalam skala besar.
3. Tulis ringkasan satu halaman: bagaimana fitur itu bekerja dan di mana desainnya berbeda dari versi mini Anda.

**Gerbang akhir:** ambil satu framework TypeScript yang belum pernah Anda pakai. Dalam satu minggu, Anda bisa membangun sesuatu dengannya *dan* menjelaskan cara kerja salah satu fitur intinya dari source code. Kalau ini tercapai, target Anda sudah terpenuhi.

## Jalur paralel: DSA (minggu 4–24)

DSA berjalan 2–3 sesi per minggu di samping fase utama. Setiap struktur diimplementasikan sendiri dalam TypeScript strict dengan generics dan test, lalu dikaitkan ke proyek yang sedang berjalan.

| Minggu | Topik | Terhubung ke |
| --- | --- | --- |
| 4–6 | Big-O, array, hash map, set | Soal 10–11 assessment; cache sederhana |
| 7–9 | Linked list, stack, queue | Antrian middleware di router; model event loop |
| 10–12 | Rekursi, binary tree, BST | Tipe rekursif di Fase 2 |
| 13–15 | Trie, heap | Router versi trie; priority queue |
| 16–19 | Graph, BFS, DFS, topological sort, deteksi siklus | Dependency graph untuk bundler mini Fase 4 |
| 20–22 | Sorting, binary search, two pointers, sliding window | Query dan paginasi di proyek full-stack |
| 23–24 | Dynamic programming dasar, LRU cache | Soal 12 assessment; caching di aplikasi |

Setiap sesi berisi satu implementasi atau pembahasan konsep, ditambah 1–2 soal LeetCode level easy atau medium dengan topik yang sama. LeetCode adalah pelengkap untuk melatih pola pikir, bukan tujuan utama.

## Aturan pemakaian AI

AI mempercepat belajar kalau dipakai sebagai tutor dan reviewer, tapi menghambat kalau dipakai sebagai penulis kode latihan. Celah Anda saat ini, yaitu mengenali kode tanpa bisa mensimulasikannya, justru akan makin lebar kalau AI yang menulis.

- **Boleh:** meminta penjelasan konsep, meminta soal latihan atau potongan kode untuk di-trace, meminta review kode yang sudah Anda tulis, dan bertanya "kenapa tebakan saya salah".
- **Tidak boleh (selama latihan dan proyek belajar):** meminta AI menuliskan solusi, menyalin kode yang belum bisa Anda jelaskan, atau memakai autocomplete AI di repo latihan. Matikan fitur itu di repo tersebut.
- **Kalau mentok lebih dari 30 menit:** minta *petunjuk*, bukan jawaban. Setelah paham, tutup percakapannya dan tulis ulang solusinya sendiri dari nol.
- **Di pekerjaan sungguhan:** silakan pakai AI sepenuhnya, dengan satu syarat: jangan pernah merge kode yang tidak bisa Anda jelaskan baris per baris.

## Tracker progres

Centang setiap butir saat selesai. Satu fase dianggap lulus hanya kalau semua butirnya tercentang.

**Fase 0: Tracing**

- [ ] Repo latihan dengan `"strict": true` dan "log salah paham" sudah dibuat
- [ ] Trace harian berjalan 3 minggu (minimal 50 potongan kode)
- [ ] Soal 1–3 assessment dijawab benar beserta alasannya

**Fase 1: Runtime JavaScript**

- [ ] `debounce`, `throttle`, `once` ditulis dari nol
- [ ] `EventEmitter` ditulis dari nol
- [ ] `Promise.all`, `Promise.race`, dan `retry` ditulis dari nol
- [ ] Router HTTP mini berjalan dengan test lengkap

**Fase 2: Sistem tipe**

- [ ] Router Fase 1 bersih dari `any`, `as`, dan `@ts-ignore`
- [ ] Sebagian besar soal medium `type-challenges` selesai
- [ ] Validator mini dengan `Infer` selesai dan dibandingkan dengan Zod

**Fase 3: Platform**

- [ ] File CSV 1 GB diproses dengan streams
- [ ] Caching, CORS, dan cookie session ditambahkan ke router
- [ ] Aplikasi full-stack sudah di-deploy dan dipakai orang lain
- [ ] Satu bug produksi dilacak sampai ke akar masalahnya

**Fase 4: Framework**

- [ ] Library signals selesai dan dibandingkan dengan Vue atau Solid
- [ ] Virtual DOM selesai dan dibandingkan dengan React atau Preact
- [ ] Container DI selesai dan dibandingkan dengan NestJS
- [ ] Bundler mini selesai dan dibandingkan dengan Vite atau Rollup
- [ ] Router radix tree selesai dan dibandingkan dengan Hono
- [ ] Satu PR open source di-merge
- [ ] Gerbang akhir lulus dengan framework yang belum pernah dipakai

## Sumber belajar

Semua sumber di bawah gratis. Satu sumber utama per topik sudah cukup; jangan menumpuk kursus.

| Fase | Sumber | Dipakai untuk |
| --- | --- | --- |
| 0 | [Python Tutor](https://pythontutor.com) | Visualisasi variabel dan call stack langkah demi langkah (pilih JavaScript) |
| 0 | [Loupe](http://latentflip.com/loupe/), [JS Visualizer 9000](https://www.jsv9000.app/) | Animasi event loop |
| 0–1 | [javascript.info](https://javascript.info) | Referensi utama JavaScript, dari dasar sampai lanjut |
| 1 | [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS) | Scope, closure, objek, dan `this` secara mendalam |
| 2 | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | Referensi resmi sistem tipe |
| 2 | [type-challenges](https://github.com/type-challenges/type-challenges) | Latihan dan tolok ukur kemampuan tipe |
| 3 | [Node.js: event loop, timers, nextTick](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick) | Fase-fase event loop di Node |
| 3 | [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Caching, cookie, CORS |
| 3 | [Inside look at modern web browser](https://developer.chrome.com/blog/inside-browser-part1) | Cara browser merender halaman |
| 4 | [Build your own React](https://pomb.us/build-your-own-react/) | Panduan membangun React mini langkah demi langkah |
