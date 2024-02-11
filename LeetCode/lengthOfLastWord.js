// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

var lengthOfLastWord = function(s) {
    result = s.trim().split(' ')
    leng = result[result.length - 1].length
    return leng
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))