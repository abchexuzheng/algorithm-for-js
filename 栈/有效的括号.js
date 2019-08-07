// 判断字符串中括号是否匹配

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split('')
    let coupour = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    let stark = []
    for (let item of arr) {
        if (coupour[item]) {
            if (stark[stark.length - 1] === coupour[item]) {
                stark.pop()
            } else {
                stark.push(item)
            }
        } else {
            stark.push(item)
        }
    }
    if (stark.length > 0) {
        return false
    } else {
        return true
    }
};