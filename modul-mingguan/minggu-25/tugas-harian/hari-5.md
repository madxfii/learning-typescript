# Minggu 25 - Hari 5: Review — dari signal eksplisit ke reactive(object)

## Konsep hari ini (review)

- Menyambungkan Proxy (hari 1-2) dengan dependency tracking (hari 3-4): bagaimana Vue 3 membuat objek biasa (bukan cuma signal eksplisit) menjadi reaktif lewat `reactive()`

## Trace konseptual

```js
function reactive(target) {
  return new Proxy(target, {
    get(obj, key) {
      track(obj, key);      // daftarkan effect aktif sebagai dependency
      return obj[key];
    },
    set(obj, key, value) {
      obj[key] = value;
      trigger(obj, key);    // jalankan ulang semua effect yang terdaftar
      return true;
    },
  });
}
```

**Pertanyaan:** Bandingkan pendekatan ini dengan `signal()` buatanmu di hari 3-4. Apa keuntungan `reactive(target)` yang membungkus objek biasa dibanding harus memanggil `.get()`/`.set()` eksplisit? Apa kerugiannya (petunjuk: destructuring sebuah `reactive` object kehilangan reactivity-nya)?

## Checklist

- [ ] Trace konseptual `reactive()` dipahami dan dibandingkan dengan `signal()`
- [ ] Kesulitan dicatat di log salah paham
