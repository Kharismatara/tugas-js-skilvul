# tugas-js-skilvul

TUGAS PERTAMA

1.  Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
    Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
    Lakukan FOR LOOP pada Javascript.
    nah pada soal ini kami menggunakanan foorloop karena pada soal ini kami bisa mengetahui jumlah iterasi tertentu
    yang harus dipersiapankan terlebih dahulu yaitu mengenail perulanagn lopping adalah ada 3
    inisialiasis, kondisi dan increment, pertama kita inisialisasi i =1 kenapa menggunakan satu karena kita ingin mulai dari nilai ke 1, lalu kita berikan kondisi saat nilai lebih dari 100 maka akan keluar dari perulangan. dan setiap angka yang ditampilkan akan ditambah 1 atau disebut increment. contoh di atas, variabel i diinisialisasi dengan nilai 0, kemudian kita melakukan loop sebanyak 100 kali dengan menguji apakah i kurang dari 100 (i <= 100) pada setiap iterasi. Setelah setiap iterasi, nilai i akan ditambahkan sebanyak satu unit dengan menggunakan operator i++, sehingga loop akan berhenti setelah nilai i mencapai 100.

TUGAS DUA 2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
Nilai awal = 0
Pengulangan = 10 kali
Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan
nah pada soal ini kami menggunakanan foorloop karena pada soal ini kami bisa mengetahui jumlah iterasi tertentu
yang harus dipersiapankan terlebih dahulu yaitu mengenail perulanagn lopping adalah ada 3
inisialiasis, kondisi dan increment,nah pada perulangan ini kita lakukan membuat variabel nilaiAwal dengan nilai, lalu kita buat perulangan dengan for dan melakukan inisialitasi i =0 dan kondisinya jika i<10 dan lakukan increment dan nilai awal ditambah 2.
rinciannya
Membuat variabel nilaiAwal dengan nilai awal 0.
Menggunakan for loop dengan tiga kondisi:
Inisialisasi variabel i dengan nilai awal 0.
Melakukan pengulangan selama nilai i kurang dari 10.
Setiap kali iterasi dilakukan, variabel i akan ditambahkan 1.
Di dalam loop, nilai nilaiAwal akan ditambahkan sebesar 2 pada setiap iterasi, menggunakan operator +=.
Pada setiap iterasi, teks "Nilai perulangan = " dan nilai nilaiAwal akan ditampilkan di halaman HTML menggunakan metode document.write()

TUGAS 3 3. Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan
pada tugas ini kita berikan kondisi diaman saat i % 2 == 0 akan mencetak bilangan genap dan sebaliknya jika i% 2 == 1 akan nilai ganjil ini bisa menggunakan if else dan menggunakan foor loop untuk loopingnya
TUGAS 4 4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)
kami menggunakn while untuk perulangannya
Membuat variabel con dengan nilai awal 0.
Menggunakan loop while dengan nilai (true) yang akan terus dilakukan sampai ada perintah untuk menghentikan loop.
Di dalam loop, menggunakan fungsi confirm() untuk menampilkan sebuah dialog pop-up konfirmasi kepada pengguna dengan pertanyaan "Apakah anda mau mengulang?" dan menyimpan hasilnya dalam variabel Konfirmasi.
Jika pengguna memilih OK dengan (true), maka nilai variabel con akan ditambahkan 1 menggunakan operator ++ dan program akan melanjutkan pengulangan ke iterasi selanjutnya dengan menggunakan perintah continue.
Jika pengguna memilih Cancel (false), maka program akan menampilkan sebuah alert dengan pesan "Perulangan sudah dilakukan sebanyak ${con} kali", dimana nilai con menunjukkan jumlah pengulangan yang dilakukan sebelumnya. Setelah itu, program akan keluar dari loop menggunakan perintah break.

TUGAS 5 5. Buat sebuah program kuis.
Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
kami menggunakn while untuk perulangannya
Membuat variabel quis dengan nilai awal string kosong .
Menggunakan loop while dengan nilai (true) yang akan terus dilakukan sampai ada perintah untuk menghentikan loop.
Di dalam loop, menggunakan fungsi promt() untuk menampilkan sebuah dialog pop-up yang memasukan jawaban
Jika pengguna memilih OK dengan (true), akan masuk pada kondisi yang kuta setting jika quis == impact bytem dan mennngunakn tolowercase untuk menyimpan semuanya jika kita masukan huruf besar true dan huruf kecil true. jika nilai true akan memunculkan pop up jawaban benar dan sebaliknya

semoga penjelasannya mudah di mengerti dan hasil perulangannya benar
terimakasih
