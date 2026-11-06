function kali(a, b) {
  const hasil = a * b;
  return hasil;
}

function hitungLuas(panjang, lebar) {
  const luas = kali(panjang, lebar);
  return luas;
}

const total = hitungLuas(3, 4);
console.log(total);
