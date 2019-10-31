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
var addTwoNumbers = function(l1, l2) {
    const l3 = {
        val: 0,
        next: null
    }
    let point = l3
    let add = 0
    while (1) {
        let sum = l1.val + l2.val + add
        add = 0
        if (sum >= 10) {
            sum -= 10
            add = 1
        }
        point.val = sum
        if (!l1.next && !l2.next && add === 0) {
            return l3
        }
        point.next = {
            val: 0,
            next: null
        }
        point = point.next
        l1 = l1.next || {val: 0, next: null}
        l2 = l2.next || {val: 0, next: null}
    }
};