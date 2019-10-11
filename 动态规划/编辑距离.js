// 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length
    const m = word2.length
    // 如果有一个单词为空，则编辑距离为另一个单词的长度
    if (n === 0) {
        return m
    }
    if (m === 0) {
        return n
    }
    // 生成m * n的二维数组
    const states = new Array(n)
    for (let i = 0; i < n; i++) {
        states[i] = []
    }
    const wordArr1 = word1.split('')
    const wordArr2 = word2.split('')
    // 初始化表格
    for (let j = 0; j < m; j++) {
        if (wordArr1[0] === wordArr2[j]) {
            states[0][j] = j
        } else if (j !== 0) {
            states[0][j] = states[0][j - 1] + 1
        } else {
            states[0][j] = 1
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (wordArr2[0] === wordArr1[i]) {
            states[i][0] = i
        } else if (i !== 0) {
            states[i][0] = states[i - 1][0] + 1
        } else {
            states[i][0] = 1
        }
    }
    
    for (let i = 1; i < n; i++) {
        for(let j = 1;j < m; j++) {
            if (wordArr1[i] === wordArr2[j]) {
                states[i][j] = Math.min(states[i][j - 1] + 1, states[i - 1][j] + 1, states[i- 1][j - 1])
            } else {
                states[i][j] = Math.min(states[i][j - 1] + 1, states[i - 1][j] + 1, states[i- 1][j - 1] + 1)
            }
        }
    }
    
    return states[n - 1][m - 1]
};