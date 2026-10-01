# Minggu 04 - Hari 1: Lexical scope tidak berubah oleh siapa yang memanggil

## Konsep hari ini

- Lexical scope: scope sebuah fungsi ditentukan di mana fungsi itu **ditulis**, bukan dari mana ia **dipanggil**
- Ini beda dengan dynamic scope (tidak dipakai JavaScript) yang menentukan scope dari pemanggil

## Cara kerja

1. Baca tiap snippet, **jangan dijalankan dulu**.
2. Tebak outputnya, tulis alasannya.
3. Jalankan di debugger, bandingkan dengan tebakan.
4. Kalau meleset, catat di [`../log-salah-paham.md`](../log-salah-paham.md).

## Snippet untuk di-trace

### Snippet 1

```js
let mode = "global";
function showMode() {
  console.log(mode);
}
function runInLocalMode() {
  let mode = "local";
  showMode();
}
runInLocalMode();
```

**Pertanyaan:** Apakah `showMode` mencetak `"global"` atau `"local"`? Jelaskan kenapa lexical scope bukan soal "siapa yang memanggil".

### Snippet 2

```js
function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}
const greetHello = makeGreeter("Hello");

function useGreeterElsewhere(greeterFn) {
  let greeting = "Ignored";
  return greeterFn("Ahmad");
}
console.log(useGreeterElsewhere(greetHello));
```

**Pertanyaan:** `useGreeterElsewhere` punya variabel lokal `greeting` sendiri. Apakah itu memengaruhi hasil `greeterFn("Ahmad")`? Kenapa?

### Snippet 3

```js
function outer() {
  let x = 1;
  function middle() {
    let y = 2;
    function inner() {
      console.log(x, y);
    }
    return inner;
  }
  return middle();
}
const fn = outer();
fn();
```

**Pertanyaan:** Ini closure 2 level. Jelaskan chain scope yang diakses `inner` sampai ke `outer`.

## Checklist

- [ ] Semua snippet ditebak dulu sebelum dijalankan
- [ ] Selisih tebakan (kalau ada) dicatat di log salah paham
