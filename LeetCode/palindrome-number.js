// /**
//  * @param {number} x
//  * @return {boolean}
//  */

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
    return result = x.toString().split('').reverse().join('') == x ? true : false
};

console.log(isPalindrome(121))