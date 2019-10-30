// 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if (!head) {
        return null
    }
    let slow = head
    let quick = head
    while (quick.next) {
        if (quick.next.next) {
            quick = quick.next.next
            slow = slow.next
        } else {
            quick = quick.next
            slow = slow.next
        }
    }
    return slow
};