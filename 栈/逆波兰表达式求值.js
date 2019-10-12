// 根据逆波兰表示法，求表达式的值。(leetcode第150题)

// 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    // 列出所有运算符
    const computeList = ['+', '-', '*', '/']
    for (let item of tokens) {
        if (computeList.indexOf(item) > -1) {
            // 如果是运算符就出栈两个并计算，然后将结果压如栈中
            const right = stack.pop()
            const left = stack.pop()
            const str = `(${left})${item}(${right})`
            stack.push(parseInt(eval(str)))
        } else {
            stack.push(item)
        }
    }
    return stack[0]
};