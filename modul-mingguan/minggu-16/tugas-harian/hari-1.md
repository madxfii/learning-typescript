# Minggu 16 - Hari 1: Validator — parse() dengan path error jelas

## Konsep hari ini (lanjut proyek validator — bagian 4)

- `parse()` dengan path error yang jelas — bagian yang membuat validator ini terasa seperti Zod sungguhan, bukan sekadar pengecekan tipe kasar

## Spesifikasi

- Kalau validasi objek bersarang gagal di properti dalam, pesan error harus menyebutkan **path lengkap** menuju properti yang gagal, contoh: `address.city: Expected string, got number`

## Kriteria selesai

```js
const addressSchema = object({ city: string() });
const userSchema = object({ name: string(), address: addressSchema });
try {
  userSchema.parse({ name: "Ahmad", address: { city: 123 } });
} catch (e) {
  console.log(e.message); // harus menyebut "address.city" di pesannya
}
```

## Petunjuk kalau mentok (> 30 menit)

Saat validasi objek gagal di key tertentu, tangkap error dari `parse()` schema key itu, tambahkan nama key itu di depan path yang sudah ada, lalu `throw` ulang ke pemanggil. Ini rekursif — mirip pola yang sudah kamu tulis di minggu 2, 7, dan 10.

## Checklist

- [ ] Path error bekerja untuk objek bersarang (minimal 2 level)
- [ ] Kesulitan dicatat di log salah paham
