/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 递归
    function getNext (l1, l2) {
        if (l1 === null) {
            return l2
        }
        if (l2 === null) {
            return l1
        }
        if (l1.val < l2.val) {
            return {
                val: l1.val,
                next: getNext(l1.next, l2)
            }
        } else {
            return {
                val: l2.val,
                next: getNext(l1, l2.next)
            }
        }
    }
    return getNext(l1, l2)
};