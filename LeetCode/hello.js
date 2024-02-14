// https://leetcode.com/problems/create-hello-world-function/description/

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    };
};

const f = createHelloWorld(); // Mendeklarasikan fungsinya
console.log(f(["Hello World!"])); // Output: Hello World
console.log(f([{},null,42])); // Output: Test

