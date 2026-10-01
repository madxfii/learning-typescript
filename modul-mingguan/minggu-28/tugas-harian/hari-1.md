# Minggu 28 - Hari 1: Apa itu Virtual DOM

## Konsep hari ini

- Virtual DOM = representasi objek JavaScript biasa dari elemen UI (`type`, `props`, `children`) — bukan elemen DOM sungguhan, jauh lebih murah dibuat/dibuang

## Trace konseptual

```js
// createElement("div", { id: "app" }, "Hello")
// harus menghasilkan objek seperti ini (VNode):
{
  type: "div",
  props: { id: "app" },
  children: ["Hello"],
}
```

**Pertanyaan:** Kenapa merepresentasikan UI sebagai objek plain seperti ini jauh lebih murah untuk dibuat/dibandingkan/dibuang daripada langsung memanipulasi elemen DOM asli tiap kali ada perubahan?

## Checklist

- [ ] Konsep VNode sebagai objek plain dipahami
- [ ] Kesulitan dicatat di log salah paham
