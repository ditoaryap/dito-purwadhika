// Soal 1

// cara 1
function arrNum(nums){
    let count = {}

    for(let num of nums){
        count[num] = (count[num] || 0) + 1
    }

    console.log(count)

    let keys = Object.keys(count)
    let values = Object.values(count)
    console.log(keys)
    let captInt = Math.max(...values.map(Number))

    return captInt
}

console.log(arrNum([2,2,1,1,1,2,2]))

// cara 2
function majority(arr){
    arr.forEach((x) => x)
    return (
        arr.filter((i) => arr.filter((y)=> y == i).length > arr.length / 2)[0] || 0
    )
}

console.log(majority([2,2,1,1,1,2,2]))

// Soal 2

function convRoman(s){
    const roman = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50, 
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let result = 0


    for(let i = 0; i < s.length; i++){
        let current = roman[s[i]]
        let next = roman[s[i+1]]
        console.log(current)
        console.log(next)

        if(current < next){
            result += next - current
            i++
        } else {
            result += current
        }
    }

    return result
}

console.log(convRoman('MCMXCIV'))

// Soal 3

const generate = function(numRows) {
    let i = 0;
    let j = 0;
    let res = [];
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));
        for (j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res
};

console.log(generate(5))


// soal 4

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

console.log(maxProfit([7,1,5,3,6,4]))