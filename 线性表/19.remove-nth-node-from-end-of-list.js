/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-9999);
    dummy.next = head;
    let cur = dummy;
    for(let i = 0; i < n;i++){
        cur = cur.next;
    };
    let second = dummy;
    for(;cur.next !== null;cur = cur.next){
        second = second.next;
    };
    second.next = second.next.next;
    return dummy.next;
};
// @lc code=end

