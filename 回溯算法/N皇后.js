/**
 * @param {number} n
 * @return {string[][]}
 */

 // N皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

var solveNQueens = function(n) {
    const result = []   
    function getRowPos (rowIndex, arr = []) {
        if (rowIndex === n) {
            result.push(arr)
            return
        }
        for (let col = 0; col < n; col ++) {
            if (rowIndex === 0) {
                arr = [col]
                getRowPos(rowIndex + 1, arr)
            } else {
                if (isOk(rowIndex, col, arr)) {
                    const newArr = [...arr]
                    newArr.push(col)
                    getRowPos(rowIndex + 1, newArr)
                }
            }         
        }
    }

    // 判断该位置是否合理
    function isOk (row, col, arr) {
        let leftTop = col - 1
        let rightTop = col + 1
        for (let i = row - 1; i >= 0; i --) {
            const lastPos = arr[i]
            if (lastPos === col) {
                return false
            }
            if (leftTop >= 0 && lastPos === leftTop) {
                return false
            }
            if (rightTop < n && lastPos === rightTop) {
                return false
            }
            leftTop--
            rightTop++
        }
        return true
    }

    // 格式化输出
    function print () {
        return result.map(item => {
            return item.map(item2 => {
                let str = ''
                for (let i = 0; i < n; i++) {
                    if (item2 === i) {
                        str += 'Q'
                    } else {
                        str += '.'
                    }
                }
                return str
            })
        })
    }
    getRowPos(0)
    return print()
};