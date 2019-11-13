// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 建立一个长度为amount + 1的数组
    const dp = new Array(amount + 1).fill(amount + 1)
    const coinLength = coins.length
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coinLength; j++) {
            if (coins[j] < i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            } else if (coins[j] === i) {
                dp[i] = 1
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};
