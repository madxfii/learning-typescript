# Minggu 08 - Hari 4: Bangun `Promise.all` dan `Promise.race` dari nol

## Konsep hari ini (bangun dari nol)

- Menulis ulang `Promise.all` dan `Promise.race` untuk benar-benar memahami cara kerjanya, bukan cuma memakainya

## Spesifikasi `myPromiseAll(promises)`

- Menerima array Promise (atau nilai biasa)
- Resolve dengan array hasil, **urut sesuai urutan input** (bukan urutan selesai)
- Reject secepat mungkin kalau ada salah satu promise yang reject (fail-fast)

## Spesifikasi `myPromiseRace(promises)`

- Resolve/reject mengikuti promise pertama yang settle (fulfilled maupun rejected), siapa pun duluan

## Kriteria selesai

```js
function delay(ms, value, shouldReject = false) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (shouldReject ? reject(value) : resolve(value)), ms)
  );
}

myPromiseAll([delay(30, "a"), delay(10, "b"), delay(20, "c")])
  .then((results) => console.log(results)); // ["a", "b", "c"] -- urut sesuai input

myPromiseAll([delay(10, "ok"), delay(5, "fail", true)])
  .catch((err) => console.log("rejected with:", err)); // "fail"

myPromiseRace([delay(50, "slow"), delay(10, "fast")])
  .then((v) => console.log(v)); // "fast"
```

## Petunjuk kalau mentok (> 30 menit)

Untuk `myPromiseAll`, kamu perlu menghitung berapa banyak promise yang sudah selesai sebelum me-resolve hasil akhirnya — bagaimana caranya urutan hasil tetap benar walau promise-nya selesai tidak berurutan? (petunjuk: simpan hasil di array dengan index asalnya, bukan lewat `push`)

## Checklist

- [ ] `myPromiseAll` dan `myPromiseRace` lulus kriteria selesai di atas
- [ ] Bisa menjelaskan bedanya fail-fast (`all`) vs settle-pertama-menang (`race`)
- [ ] Kesulitan dicatat di log salah paham
