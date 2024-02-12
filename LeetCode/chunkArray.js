// https://leetcode.com/problems/chunk-array/description/

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

var chunk = function(arr, size) {
    chunkarr = []
    for (let i = 0; i < arr.length; i += 3) {
        subarr = arr.slice(i, i + size);
        chunkarr.push(subarr);
    }
    return chunkarr;
};

console.log(chunk([1, 9, 6, 3, 2], 3))