# Minggu 21 - Hari 1: DOM & event propagation

## Konsep hari ini

- Event propagation: capturing phase (dari luar ke dalam) -> target -> bubbling phase (dari dalam ke luar)
- Coba langsung di console browser (bukan Node) untuk snippet-snippet ini

## Cara kerja

1. Baca tiap snippet HTML+JS, **jangan dicoba dulu**.
2. Tebak urutan `console.log` yang muncul saat elemen di-klik, tulis alasannya.
3. Coba langsung di browser (buat file `.html`, buka di Chrome, klik elemennya).
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1 — bubbling

```html
<div id="outer">
  <button id="inner">Click me</button>
</div>
<script>
document.getElementById("outer").addEventListener("click", () => console.log("outer clicked"));
document.getElementById("inner").addEventListener("click", () => console.log("inner clicked"));
</script>
```

**Pertanyaan:** Kalau tombol "Click me" diklik, urutan `console.log` apa yang muncul? Ini disebut event bubbling — jelaskan arah propagasinya.

### Snippet 2 — capturing

```html
<script>
document.getElementById("outer").addEventListener(
  "click",
  () => console.log("outer captured"),
  { capture: true }
);
</script>
```

**Pertanyaan:** Tambahkan listener ini ke snippet 1. Di antara ketiga listener (outer capture, inner, outer bubble), urutan mana yang dieksekusi lebih dulu?

### Snippet 3 — stopPropagation

```html
<script>
document.getElementById("inner").addEventListener("click", (e) => {
  console.log("inner clicked");
  e.stopPropagation();
});
</script>
```

**Pertanyaan:** Kalau `stopPropagation()` dipanggil di listener `inner`, apakah listener `outer` (bubbling) masih terpanggil? Kenapa method ini perlu dipakai hati-hati (apa efek sampingnya pada listener lain)?

## Checklist

- [ ] Semua snippet ditebak dulu, lalu dicoba langsung di browser
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
