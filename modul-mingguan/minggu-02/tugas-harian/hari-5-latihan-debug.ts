function buatPenghitung(awal: number): (jumlah: number) => number {
  let total = awal;

  function tambah(jumlah: number): number {
    total = total + jumlah;
    return total;
  }

  return tambah;
}

function hitungMundur(angka: number): string {
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
