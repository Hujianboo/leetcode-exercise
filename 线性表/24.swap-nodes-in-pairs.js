/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(-999);
    dummy.next = head;
    let cur = dummy;
    for(;cur !== null && cur.next !== null && cur.next.next !== null;){
        let one = cur.next;
        let two = cur.next.next;
        one.next = two.next;
        cur.next = two;
        cur.next.next = one;
        cur = cur.next.next;
    };
    return dummy.next;
};
// @lc code=end

