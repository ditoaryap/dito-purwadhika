// 1. Metode untuk Konversi dan Format Angka
// =========================================

// a. toExponential: Mengubah angka menjadi notasi eksponensial
let exponential = (1234).toExponential(2);
// Output: "1.23e+3"

// b. toFixed: Mengubah angka menjadi string dengan jumlah digit desimal tertentu
let fixedString = (3.14159).toFixed(2);
// Output: "3.14"

// c. toPrecision: Mengubah angka menjadi string dengan panjang tertentu
let precisionString = (1234).toPrecision(2);
// Output: "1.2e+3"

// d. toString: Mengubah angka menjadi string dalam basis tertentu
let binaryString = (10).toString(2);
// Output: "1010"

// 2. Metode untuk Memeriksa dan Membandingkan Angka
// =================================================

// a. isNaN: Memeriksa apakah nilai bukan angka (NaN)
let isNotANumber = isNaN("string");
// Output: true

// b. isFinite: Memeriksa apakah nilai adalah angka yang terbatas
let isFiniteNumber = isFinite(123);
// Output: true

// c. isInteger: Memeriksa apakah nilai adalah bilangan bulat
let isIntegerNumber = Number.isInteger(123);
// Output: true

// d. isSafeInteger: Memeriksa apakah nilai adalah bilangan bulat aman
let isSafeIntegerNumber = Number.isSafeInteger(123);
// Output: true

// e. isNaN (global): Memeriksa apakah nilai bukan angka (NaN) menggunakan global isNaN
let isNotANumberGlobal = isNaN("string");
// Output: true

// f. isFinite (global): Memeriksa apakah nilai adalah angka yang terbatas menggunakan global isFinite
let isFiniteNumberGlobal = isFinite(123);
// Output: true

// g. parseFloat: Mengubah string menjadi bilangan pecahan (float)
let floatValue = parseFloat("3.14");
// Output: 3.14

// h. parseInt: Mengubah string menjadi bilangan bulat (integer)
let intValue = parseInt("10");
// Output: 10

// 3. Metode untuk Memanipulasi Angka
// ==================================

// a. toLocaleString: Mengubah angka menjadi string dengan format lokal
let localString = (1234.5678).toLocaleString("en-US");
// Output: "1,234.568"

// b. valueOf: Mengembalikan nilai primitif dari objek Number
let primitiveValue = (123).valueOf();
// Output: 123

// c. Number (constructor): Membuat objek Number dari argumen
let numericObject = Number("42");
// Output: 42

// 4. Metode untuk Pembulatan dan Pengaturan Desimal
// =================================================

// a. Math.round: Membulatkan angka ke bilangan bulat terdekat
let roundedNumber = Math.round(3.9);
// Output: 4

// b. Math.floor: Mengambil bagian bulat dari angka (pembulatan ke bawah)
let flooredNumber = Math.floor(3.9);
// Output: 3

// c. Math.ceil: Membulatkan angka ke bilangan bulat terdekat yang lebih besar atau sama dengan nilai tersebut
let ceiledNumber = Math.ceil(3.1);
// Output: 4

// d. Math.trunc: Menghapus bagian desimal dari angka tanpa membulatkan
let truncatedNumber = Math.trunc(3.9);
// Output: 3

// Konstanta untuk Representasi Angka Tertinggi dan Terendah
// =========================================================

// a. MAX_VALUE: Nilai terbesar yang dapat direpresentasikan oleh tipe data number
let maxValue = Number.MAX_VALUE;
// Output: 1.7976931348623157e+308

// b. MIN_VALUE: Nilai terkecil yang dapat direpresentasikan oleh tipe data number yang lebih besar dari 0
let minValue = Number.MIN_VALUE;
// Output: 5e-324

// c. POSITIVE_INFINITY: Representasi untuk infinity positif
let positiveInfinity = Infinity;
// Output: Infinity

// d. NEGATIVE_INFINITY: Representasi untuk infinity negatif
let negativeInfinity = -Infinity;
// Output: -Infinity

// e. NaN: Representasi untuk Not-a-Number (nilai yang tidak bisa dihitung)
let notANumber = NaN;
// Output: NaN