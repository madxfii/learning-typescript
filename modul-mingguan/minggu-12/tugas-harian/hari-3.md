# Minggu 12 - Hari 3: Tipe rekursif — jembatan dari BST ke sistem tipe

## Konsep hari ini (sesi DSA — jembatan ke tipe rekursif)

- TypeScript bisa mendefinisikan tipe yang mereferensikan dirinya sendiri (recursive type) — persis seperti struktur data rekursif (tree, linked list) di runtime

## Trace

```ts
type TreeNode<T> = {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
};

const tree: TreeNode<number> = {
  value: 5,
  left: { value: 3, left: null, right: null },
  right: { value: 7, left: null, right: null },
};
```

**Pertanyaan:** Kenapa definisi `TreeNode<T>` boleh mereferensikan `TreeNode<T>` di dalam dirinya sendiri? Bandingkan konseptualnya dengan rekursi di runtime (minggu 2, 7, 10) — apa kesamaannya?

## Tugas implementasi tipe

Tulis type utility rekursif sendiri: `type DeepReadonly<T>` yang membuat semua properti — termasuk properti di object bersarang — menjadi `readonly`.

Kriteria selesai (compile-time):

```ts
interface Config {
  debug: boolean;
  server: { host: string; port: number };
}
type ReadonlyConfig = DeepReadonly<Config>;

const config: ReadonlyConfig = { debug: true, server: { host: "localhost", port: 3000 } };
config.debug = false;          // harus error
config.server.port = 4000;     // harus error juga (bukan cuma level pertama)
```

## Soal type-challenges terkait

Cari 1-2 soal kategori "recursive types" level easy/medium di [type-challenges](https://github.com/type-challenges/type-challenges) sebagai pelengkap.

## Checklist

- [ ] Trace `TreeNode<T>` dipahami
- [ ] `DeepReadonly<T>` bekerja sesuai kriteria selesai (termasuk nested object)
- [ ] Kesulitan dicatat di log salah paham
