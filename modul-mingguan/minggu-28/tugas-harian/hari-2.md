# Minggu 28 - Hari 2: Bangun createElement(type, props, children)

## Konsep hari ini (bangun dari nol)

- `createElement(type, props, ...children)` — fungsi yang menghasilkan VNode dari deskripsi elemen

## Spesifikasi

- `createElement(type, props, ...children)` mengembalikan objek `{ type, props, children }`
- `type` bisa berupa string (tag HTML seperti `"div"`) untuk saat ini — dukungan komponen fungsi menyusul minggu 29
- `children` yang berupa string/number (teks) perlu dibedakan dari children yang berupa VNode lain

## Kriteria selesai

```js
const vnode = createElement("div", { id: "app" },
  createElement("h1", null, "Hello"),
  "some text"
);
console.log(vnode.type);           // "div"
console.log(vnode.props.id);       // "app"
console.log(vnode.children.length); // 2
```

## Checklist

- [ ] `createElement` lulus kriteria selesai di atas
- [ ] Kesulitan dicatat di log salah paham
