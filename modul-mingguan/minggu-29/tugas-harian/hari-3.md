# Minggu 29 - Hari 3: Bangun komponen sederhana dengan useState

## Konsep hari ini (bangun dari nol — komponen sederhana)

- Komponen fungsi = fungsi yang mengembalikan VNode, dan bisa punya local state yang membuatnya re-render sendiri saat state berubah (mini `useState`)

## Spesifikasi

- Function component: fungsi biasa yang menerima `props`, mengembalikan VNode (bisa memanggil `createElement` di dalamnya)
- `useState(initialValue)` sederhana: mengembalikan `[value, setValue]`, memicu re-render komponen yang memanggilnya saat `setValue` dipanggil

## Kriteria selesai

```js
function Counter() {
  const [count, setCount] = useState(0);
  return createElement("button", { onClick: () => setCount(count + 1) }, `Count: ${count}`);
}
render(createElement(Counter), document.body);
// klik tombolnya -> teks berubah jadi "Count: 1", "Count: 2", dst, tanpa reload manual
```

## Petunjuk kalau mentok (> 30 menit)

`useState` butuh "tahu" komponen mana yang sedang di-render supaya tahu state siapa yang harus di-update dan komponen mana yang harus di-render ulang saat `setValue` dipanggil — ini butuh variabel "komponen aktif saat ini", mirip pola "effect aktif saat ini" di reactivity minggu 25.

## Checklist

- [ ] Function component dengan `useState` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
