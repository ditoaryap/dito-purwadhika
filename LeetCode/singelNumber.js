// Input: nums = [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    let result = [];
    for (let num of nums) {
        result ^= num;
    }
    return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]))