# Minggu 28 - Hari 3: Bangun render(vnode, container)

## Konsep hari ini (bangun dari nol)

- `render(vnode, container)` — mengubah VNode jadi elemen DOM sungguhan dan memasangnya ke `container`, untuk pertama kali (belum ada diffing)

## Spesifikasi

- `render(vnode, container)`:
  - Kalau `vnode` adalah string/number, buat text node (`document.createTextNode`)
  - Kalau `vnode` adalah objek VNode, buat elemen (`document.createElement(vnode.type)`), pasang semua `props` sebagai atribut/event listener, lalu rekursif `render` tiap child ke elemen ini
  - Akhirnya `appendChild` elemen yang sudah jadi ke `container`

## Kriteria selesai

```js
const vnode = createElement("div", { id: "app" },
  createElement("h1", null, "Hello"),
  "some text"
);
render(vnode, document.body);
// document.body sekarang berisi: <div id="app"><h1>Hello</h1>some text</div>
```

## Petunjuk kalau mentok (> 30 menit)

Ini rekursi murni lagi (ingat pola dari Fase 0-2) — `render` pada VNode memanggil `render` pada tiap child-nya, sampai base case: child berupa teks.

## Checklist

- [ ] `render` lulus kriteria selesai di atas (coba di browser console atau file HTML sederhana)
- [ ] Kesulitan dicatat di log salah paham
