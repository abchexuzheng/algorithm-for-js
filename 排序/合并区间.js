/**
给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 排序法
var merge = function(intervals) {
    const sorted = intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    const arr = []
    for (let i = 0; i < sorted.length; i++) {
        let newArr = sorted[i]
        for (let j = i + 1; j < sorted.length; j++) {
            if (newArr[1] >= sorted[j][1]) {
                i ++
            } else if (newArr[1] >= sorted[j][0]) {
                newArr[1] = sorted[j][1]
                i ++
            } else {
                break
            }
        }
        arr.push(newArr)
    }
    return arr
};

// 暴力法
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    function conbine (left1, right1) {
        const left = [...left1]
        const right = [...right1]
        if ((left[0] <= right[0]) && (right[0] <= left[1]) && (left[1] <= right[1])) {
            left[1] = right[1]
            return {
                result: left,
                type: 0
            }
        } else if ((right[0] <= left[0]) && (left[0] <= right[1]) && (right[1] <= left[1])) {
            right[1] = left[1]
            return {
                result: right,
                type: 1
            }
        } else if (left[0] <= right[0] && left[1] >= right[1]) {
            return {
                result: left,
                type: 0
            }
        } else if (right[0] <= left[0] && right[1] >= left[1]) {
            return {
                result: right,
                type: 1
            }
        } else {
            return false
        }
    }
    const except = []
    for (let i = 0; i < intervals.length; i++) {
        if (except.indexOf(i) >= 0) {
            continue
        }
        for (let j = 0; j < intervals.length; j++) {
            if (except.indexOf(j) >= 0 || i === j) {
                continue
            }
            const result = conbine(intervals[i], intervals[j])
            if (result) {
                if (result.type === 0) {
                    except.push(j)
                    intervals[i] = result.result
                } else {
                    except.push(i)
                    intervals[j] = result.result
                    break
                }
            }
        }
    }
    const result = []
    for (let i = 0; i < intervals.length; i++) {
        if (except.indexOf(i) < 0) {
            result.push(intervals[i])
        }
    }
    return result
};