/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // 递归快排
var sortArray = function(nums) {
    function qsort (arr) {
        if (arr.length <= 1) {
            return arr
        }
        const newArr = []
        const p = arr[arr.length - 1]
        const left = []
        const right = []
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > p) {
                right.push(arr[i])
            } else {
                left.push(arr[i])
            }
        }
        return [...qsort(left), p, ...qsort(right)]
    }
    return qsort(nums)
};