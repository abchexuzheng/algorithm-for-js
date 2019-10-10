// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 生成m * n的二维数组
    const states = new Array(m)
    for (let i = 0; i < m; i++) {
        states[i] = []
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 初始化最上边缘和最左边缘的路径数量，全为1
            if (i === 0 || j === 0) {
                states[i][j] = 1
                continue
            }
            // 到达第i列和第j行的路径数量等于第i-1列第j行的路径数量加上第i列第j-1行的路径数量的和
            states[i][j] = states[i - 1][j] + states[i][j - 1]
        }
    }
    // 返回最右下角的状态的值
    return states[m - 1][n - 1]
};