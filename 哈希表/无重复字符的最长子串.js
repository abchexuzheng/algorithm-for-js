/**
 * @param {string} s
 * @return {number}
 */
// 第一版 双层循环，复杂度O(nlogn)
var lengthOfLongestSubstring = function(s) {
    const arr = s.split('')
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        const map = {}
        map[arr[i]] = true
        let tempResult = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (map[arr[j]]) {
                break
            } else {
                tempResult += arr[j]
                map[arr[j]] = true
            }
        }
        if (tempResult.length > result.length) {
            result = tempResult
        }
    }
    return result.length
};