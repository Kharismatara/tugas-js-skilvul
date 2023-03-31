//1.  Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
// Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
// Lakukan FOR LOOP pada Javascript.
document.write("===========================SOAL NO 1=============================" + "<br>");
for (i = 1; i <= 100; i++) {
  document.write("User ke" + i + "<br>");
}

// 2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
// Nilai awal = 0
// Pengulangan = 10 kali
// Nilai awal ditambah 2 setiap pengulangan
// Tampilan hasil penambahan pada setiap pengulangan
document.write("============================SOAL NO 2 ============================" + "<br>");
let nilaiAwal = 0;
for (i = 0; i < 10; i++) {
  nilaiAwal += 2;
  document.write("Nilai perulangann = " + nilaiAwal + "<br>");
}
document.write("============================SOAL NO 3 ============================" + "<br>");
// 3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0-20.
// Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
// Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write("Nilai genap = " + i + "<br>");
  } else {
    document.write("Nilai ganjil = " + i + "<br>");
  }
}

document.write("============================SOAL NO 4 ============================" + "<br>");
// 4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
// Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
// Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
// Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
let con = 0;
while (true) {
  const Konfirmasi = confirm("Apakah anda mau mengulang?");

  if (Konfirmasi) {
    con++;
    continue;
  } else {
    alert(`Perulangan sudah dilakukan sebanyak ${count} kali`);
    break;
  }
}
document.write("============================SOAL NO 5 ============================" + "<br>");
// 5. Buat sebuah program kuis.
// Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
// Lakukan pengecekan apakah jawaban dari user sudah benar
// Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
// Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar

let quis = "";

while (quis.toLowerCase() !== "impact byte") {
  quis = prompt("Sebutkan kepanjangan dari nama IB ?");

  if (quis.toLowerCase() === "impact byte") {
    alert("Selamat jawaban kamu benar!");
  } else {
    alert("Jawaban kamu salah, coba lagi!");
  }
}
