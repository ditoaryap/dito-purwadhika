// Membuat array
const fruits = ["Apple", "Banana", "Orange"];

// Mengonversi elemen array menjadi string
const fruitsString = fruits.toString();
// Output: "Apple,Banana,Orange"

// Menggabungkan semua elemen array menjadi satu string menggunakan separator yang ditentukan
const joinedFruits = fruits.join(" - ");
// Output: "Apple - Banana - Orange"

// Menghapus elemen terakhir dari array
const removedFruit = fruits.pop();
// Output: "Orange"

// Menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru
const newLength = fruits.push("Pineapple");
// Output: ["Apple", "Banana", "Pineapple"]

// Menghapus elemen pertama dari array
const removedFruit2 = fruits.shift();
// Output: "Apple"

// Menambahkan satu atau lebih elemen ke awal array dan menggeser semua elemen ke posisi indeks yang lebih tinggi
fruits.unshift("Mango");
// Output: ["Mango", "Banana", "Pineapple"]

// Mendapatkan panjang array
const arrayLength = fruits.length;
// Output: 3

// Menggabungkan array dengan array baru atau nilai lainnya
const moreFruits = ["Grapes", "Watermelon"];
const allFruits = fruits.concat(moreFruits);
// Output: ["Mango", "Banana", "Pineapple", "Grapes", "Watermelon"]

// Menghapus elemen dari array dan/atau menyisipkan elemen baru ke dalamnya
const removedFruits = fruits.splice(1, 1, "Kiwi", "Strawberry");
// Output: ["Banana"]
// Output: ["Mango", "Kiwi", "Strawberry", "Pineapple"]

// Mengambil sebagian dari array dan membuat array baru
const slicedFruits = fruits.slice(1, 3);
// Output: ["Kiwi", "Strawberry"]

// Mencari indeks dari elemen pertama yang cocok dalam array
const bananaIndex = fruits.indexOf("Banana");
// Output: 1

// Mencari indeks dari elemen terakhir yang cocok dalam array
const strawberryIndex = fruits.lastIndexOf("Strawberry");
// Output: 2

// Mengurutkan elemen array secara alfanumerik
const sortedFruits = fruits.sort();
// Output: ["Kiwi", "Mango", "Pineapple", "Strawberry"]

// Membalikkan urutan elemen dalam array
const reversedFruits = fruits.reverse();
// Output: ["Strawberry", "Pineapple", "Mango", "Kiwi"]

// Melakukan iterasi pada setiap elemen dalam array
fruits.forEach(fruit => {
    console.log(fruit);
});
// Output: "Strawberry", "Pineapple", "Mango", "Kiwi"

// Membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen dalam array
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// Output: ["STRAWBERRY", "PINEAPPLE", "MANGO", "KIWI"]

// Membuat array baru dengan elemen yang lulus uji oleh fungsi pengujian
const filteredFruits = fruits.filter(fruit => fruit.length > 5);
// Output: ["Strawberry", "Pineapple"]

// Mengembalikan nilai elemen pertama dalam array yang lulus uji oleh fungsi pengujian
const foundFruit = fruits.find(fruit => fruit === "Mango");
// Output: "Mango"

// Mengembalikan indeks pertama dari elemen dalam array yang lulus uji oleh fungsi pengujian
const foundIndex = fruits.findIndex(fruit => fruit === "Mango");
// Output: 2

// Menerapkan fungsi ke akumulator dan setiap nilai dalam array untuk menghasilkan satu nilai
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
// Output: 16

// Mengembalikan true jika semua elemen dalam array lulus uji oleh fungsi pengujian
const allLongerThanThree = fruits.every(fruit => fruit.length > 3);
// Output: true

// Mengembalikan true jika setidaknya satu elemen dalam array lulus uji oleh fungsi pengujian
const someLongerThanFive = fruits.some(fruit => fruit.length > 5);
// Output: false

// Membuat array baru dari array-like atau iterable object
const arrayFrom = Array.from("Hello");
// Output: ["H", "e", "l", "l", "o"]

// Mengembalikan iterator yang berisi kunci untuk setiap indeks dalam array
const keys = fruits.keys();
// Output: Iterator {}

// Mengembalikan iterator yang berisi pasangan [indeks, nilai] untuk setiap indeks dalam array
const entries = fruits.entries();
// Output: Iterator {}

// Mengembalikan true jika array berisi elemen tertentu, dan false jika tidak
const hasMango = fruits.includes("Mango");
// Output: true