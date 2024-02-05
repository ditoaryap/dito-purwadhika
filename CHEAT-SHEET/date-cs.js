// Membuat Objek Tanggal Baru
const sekarang = new Date(); // Tanggal dan waktu saat ini
const tanggalTertentu = new Date("2024-02-02"); // Tanggal tertentu (tahun, bulan, tanggal)
const tanggalDanWaktu = new Date("2024-02-02T12:00:00"); // Tanggal dan waktu tertentu

// Mendapatkan Komponen Tanggal
const tahun = tanggal.getFullYear();
const bulan = tanggal.getMonth(); // Januari dimulai dari 0
const tanggal = tanggal.getDate();
const jam = tanggal.getHours();
const menit = tanggal.getMinutes();
const detik = tanggal.getSeconds();
const milidetik = tanggal.getMilliseconds();
const hari = tanggal.getDay(); // Hari dalam seminggu (0 - 6), 0 = Minggu, 1 = Senin, dst.

// Menentukan Komponen Tanggal
tanggal.setFullYear(2025);
tanggal.setMonth(11); // Desember (Januari dimulai dari 0)
tanggal.setDate(25);
tanggal.setHours(12);
tanggal.setMinutes(30);
tanggal.setSeconds(0);
tanggal.setMilliseconds(0);

// Format Tanggal
const tanggalString = tanggal.toDateString(); // Mengembalikan string tanggal dalam format standar
const waktuString = tanggal.toTimeString(); // Mengembalikan string waktu dalam format standar
const isoString = tanggal.toISOString(); // Mengembalikan string tanggal dan waktu dalam format ISO
const lokalString = tanggal.toLocaleString(); // Mengembalikan string tanggal dan waktu dalam format lokal

// Operasi dengan Tanggal
tanggal.setDate(tanggal.getDate() + 1); // Menambahkan 1 hari
tanggal.setDate(tanggal.getDate() - 1); // Mengurangi 1 hari
tanggal.setMonth(tanggal.getMonth() + 1); // Menambahkan 1 bulan
tanggal.setFullYear(tanggal.getFullYear() + 1); // Menambahkan 1 tahun

// Perbandingan Tanggal
const hasil = tanggal1.getTime() > tanggal2.getTime(); // Membandingkan dua tanggal

// Durasi
const durasi = tanggal2 - tanggal1; // Menghasilkan durasi dalam milidetik
const durasiHari = Math.floor(durasi / (1000 * 60 * 60 * 24)); // Durasi dalam hari