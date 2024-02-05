// 1. Metode untuk Mengakses dan Memanipulasi String
// ==================================================

// a. length: Mengembalikan panjang string
let length = "Hello".length;
// Output: 5

// b. charAt: Mengembalikan karakter pada indeks tertentu
let char = "Hello".charAt(1);
// Output: "e"

// c. concat: Menggabungkan string dengan string lainnya
let concatenated = "Hello".concat(" ", "World");
// Output: "Hello World"

// d. includes: Memeriksa apakah string mengandung substring tertentu
let includes = "Hello World".includes("World");
// Output: true

// e. indexOf: Mengembalikan indeks pertama dari substring yang cocok
let index = "Hello World".indexOf("o");
// Output: 4

// f. lastIndexOf: Mengembalikan indeks terakhir dari substring yang cocok
let lastIndex = "Hello World".lastIndexOf("o");
// Output: 7

// g. slice: Mengambil bagian tertentu dari string
let sliced = "Hello World".slice(6);
// Output: "World"

// h. substring: Mengambil bagian tertentu dari string
let substring = "Hello World".substring(6, 11);
// Output: "World"

// i. toLowerCase: Mengubah string menjadi huruf kecil
let lowerCase = "Hello World".toLowerCase();
// Output: "hello world"

// j. toUpperCase: Mengubah string menjadi huruf besar
let upperCase = "Hello World".toUpperCase();
// Output: "HELLO WORLD"

// k. trim: Menghapus spasi kosong dari awal dan akhir string
let trimmed = "   Hello World   ".trim();
// Output: "Hello World"

// 2. Metode untuk Membuat dan Memformat String Baru
// =================================================

// a. repeat: Mengulang string sebanyak yang diinginkan
let repeated = "Hello".repeat(3);
// Output: "HelloHelloHello"

// b. replace: Mengganti substring dengan string lain
let replaced = "Hello World".replace("World", "Universe");
// Output: "Hello Universe"

// c. split: Membagi string menjadi array substring
let splitted = "Hello World".split(" ");
// Output: ["Hello", "World"]

// d. substr: Mengambil bagian tertentu dari string berdasarkan indeks awal dan panjangnya
substring = "Hello World".substr(6, 5);
// Output: "World"

// e. trimStart (trimLeft): Menghapus spasi kosong dari awal string
let trimmedStart = "   Hello World   ".trimStart();
// Output: "Hello World   "

// f. trimEnd (trimRight): Menghapus spasi kosong dari akhir string
let trimmedEnd = "   Hello World   ".trimEnd();
// Output: "   Hello World"