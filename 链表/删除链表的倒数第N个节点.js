/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 在头部添加哨兵节点，方便处理边界值
    head = {
        val: null,
        next: head
    }
    // 如果只有一个节点，就直接返回null
    if (head.next === null) {
        return null
    }
    let current = head // 先行指针
    let current2 = head // 后行指针
    let i = 0
    // 先行指针先走n步
    while(i < n && current.next !== null) {
        i++
        current = current.next
    }
    // 两个指针一起移动，直到先行指针到达最后一个节点
    while(current && current.next !== null) {
        current = current.next
        current2 = current2.next
    }
    // 删除后行指针的next节点
    current2.next = current2.next.next
    return head.next
};