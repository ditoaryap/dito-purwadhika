// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j)
                break
            }
        }
    }
    return result
};

let nums = [3, 6]
let target = 9
console.log(twoSum(nums, target))