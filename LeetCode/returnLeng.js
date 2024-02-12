// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

var argumentsLength = function(...args) {
    return args.length;
};

console.log(argumentsLength({}, null, "3"))