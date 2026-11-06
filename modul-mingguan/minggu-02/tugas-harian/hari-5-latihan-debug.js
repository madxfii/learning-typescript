function buatPenghitung(awal) {
  let total = awal;

  function tambah(jumlah) {
    total = total + jumlah;
    return total;
  }

  return tambah;
}

function hitungMundur(angka) {
  if (angka === 0) {
    return "selesai";
  }
  return hitungMundur(angka - 1);
}

const penghitung = buatPenghitung(10);

for (let langkah = 1; langkah <= 5; langkah++) {
  penghitung(langkah * 2);
}

console.log(hitungMundur(20));
