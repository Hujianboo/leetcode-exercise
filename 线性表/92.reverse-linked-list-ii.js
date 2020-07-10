/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    for(let i = 0; i < m -1;i++){
        pre = pre.next;
    };
    let cur = pre.next;
    for(let i = m; i < n;i++){
        let t = cur.next;
        cur.next = t.next;
        t.next = pre.next;
        pre.next = t;
    };
    return dummy.next;
};
// @lc code=end

