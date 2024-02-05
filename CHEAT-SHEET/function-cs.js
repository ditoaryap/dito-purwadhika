// 1. Mendefinisikan Fungsi
// ========================

// a. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
// Output: "Hello, World!"

// b. Function Expression
let greet = function(name) {
    return "Hello, " + name + "!";
};
// Output: "Hello, World!"

// 2. Memanggil Fungsi
// ====================

// a. Tanpa Parameter
result = greet();
// Output: "Hello, undefined!"

// b. Dengan Parameter
result = greet("John");
// Output: "Hello, John!"

// 3. Return Statement
// ===================

// a. Mengembalikan Nilai
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
// Output: 8

// b. Menghentikan Eksekusi
function greet(name) {
    if (!name) {
        return "Please provide a name!";
    }
    return "Hello, " + name + "!";
}
let greeting = greet("");
// Output: "Please provide a name!"

// 4. Scope Variabel
// ==================

// a. Global Scope
let globalVariable = "I'm a global variable";

// b. Local Scope
function localScopeFunction() {
    let localVariable = "I'm a local variable";
}

// c. Variabel Hoisting
console.log(hoistedVariable); // Output: undefined
var hoistedVariable = "I'm hoisted";

// 5. Penggunaan this
// ===================

// a. Mengacu ke Objek
let person = {
    name: "John",
    greet: function() {
        return "Hello, " + this.name + "!";
    }
};
greeting = person.greet();
// Output: "Hello, John!"

// b. Mengacu ke Global Object
function globalGreet() {
    return "Hello, " + this.name + "!";
}
let name = "World";
greeting = globalGreet();
// Output: "Hello, World!"

// 6. Fungsi Callback
// ===================

// a. Menggunakan Fungsi Callback
function fetchData(callback) {
    // Asumsi melakukan pengambilan data dari server
    let data = "Data from server";
    callback(data);
}

function displayData(data) {
    console.log(data);
}
fetchData(displayData);
// Output: "Data from server"