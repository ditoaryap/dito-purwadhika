// 1. Metode untuk Memanipulasi Array
// ==================================

// a. Push: Menambahkan elemen ke akhir array
array.push("apple", "banana");
// Output: ["apple", "banana"]

// b. Pop: Menghapus elemen dari akhir array
array.pop();
// Output: ["apple"]

// c. Unshift: Menambahkan elemen ke awal array
array.unshift("pear");
// Output: ["pear", "apple"]

// d. Shift: Menghapus elemen dari awal array
array.shift();
// Output: ["apple"]

// e. Splice: Menambahkan atau menghapus elemen pada posisi tertentu
array.splice(1, 0, "orange");
// Output: ["apple", "orange"]

// f. Slice: Membuat salinan bagian array tanpa mengubah array asli
newArray = array.slice(1, 2);
// Output: ["orange"]

// 2. Metode untuk Mengakses dan Mengubah Elemen
// ============================================

// a. Indexing: Mengakses elemen berdasarkan indeks
let element = array[1];
// Output: "orange"

// b. indexOf: Mengembalikan indeks pertama dari elemen yang cocok
let index = array.indexOf("orange");
// Output: 1

// c. lastIndexOf: Mengembalikan indeks terakhir dari elemen yang cocok
let lastIndex = array.lastIndexOf("orange");
// Output: 1

// d. includes: Memeriksa apakah array mengandung suatu elemen
let isPresent = array.includes("orange");
// Output: true

// e. forEach: Melakukan iterasi pada setiap elemen array
array.forEach((element) => {
    console.log(element);
});
// Output: apple
//          orange

// f. map: Membuat array baru dengan hasil operasi pada setiap elemen
newArray = array.map((element) => {
    return element.toUpperCase();
});
// Output: ["APPLE", "ORANGE"]

// g. filter: Membuat array baru dengan elemen yang memenuhi kondisi
let filteredArray = array.filter((element) => {
    return element.startsWith("a");
});
// Output: ["apple"]

// h. find: Mengembalikan elemen pertama yang memenuhi kondisi
let foundElement = array.find((element) => {
    return element.length > 5;
});
// Output: "orange"

// i. reduce: Mengurangi array menjadi nilai tunggal dengan operasi tertentu
let result = array.reduce((accumulator, element) => {
    return accumulator + element.length;
}, 0);
// Output: 11

// 3. Metode untuk Mengelola Tipe Data
// ===================================

// a. join: Menggabungkan semua elemen array menjadi string
let joinedString = array.join(", ");
// Output: "apple, orange"

// b. split: Memecah string menjadi array berdasarkan separator
newArray = "apple, orange".split(", ");
// Output: ["apple", "orange"]

// c. toString: Mengubah array menjadi string
let arrayString = array.toString();
// Output: "apple,orange"

// 4. Metode untuk Mengelola Ukuran Array
// =====================================

// a. length: Mengembalikan jumlah elemen dalam array
let arrayLength = array.length;
// Output: 2

// b. concat: Menggabungkan dua atau lebih array
let newArray = array.concat(["banana", "pear"]);
// Output: ["apple", "orange", "banana", "pear"]

// c. reverse: Membalik urutan elemen dalam array
let reversedArray = array.reverse();
// Output: ["orange", "apple"]

// d. fill: Mengisi semua elemen array dengan nilai tertentu
array.fill("grape", 1, 2);
// Output: ["orange", "grape"]

// e. copyWithin: Menyalin sebagian array dan menempatkannya ke posisi tertentu
array.copyWithin(0, 1);
// Output: ["orange", "orange"]

// f. sort: Mengurutkan elemen array
array.sort();
// Output: ["apple", "orange"]