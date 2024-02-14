var createCounter = function(n) {
    result = n -1
    return function() {
        result += 1
        result
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
