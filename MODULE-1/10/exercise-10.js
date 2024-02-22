// Soal 1

function count(n){
    let hasil = 0
    for(let i = 0; i < n.length; i++){
        const huruf = n.charCodeAt(i) - 64
        hasil = hasil * 26 + huruf
    }
    return hasil
}

let n = 'AB'
let b = 'B'
let C = b.charCodeAt()
console.log(C)

console.log(count(n))

// Soal 2

// cara 1
function arr(nums){
    let result = 0
    for(const num of nums){
        result ^= num
    }
    console.log(result)
    return result
}

// Soal 3

function string(s, t){
    let sortT = t.split('').toSorted().join('')
    let sortS = s.split('').toSorted().join('')
    console.log(sortT)
    console.log(sortS)

    return sortT === sortS
}

const s = "anagram" 
const t = "nagaram"

console.log(string(s,t))

// Soal 4

var climbStairs = function(n) {
    
    if (n < 2) {
        return 1;
    }
    let firstStep = 1;
    let secondStep = 1;
    let thirdStep = 0;
    for (let i = 2; i <= n; i++) {
        thirdStep = firstStep + secondStep;
        firstStep = secondStep;
        secondStep = thirdStep;
    }
    return thirdStep;
};

n = 2
console.log(climbStairs(n))
