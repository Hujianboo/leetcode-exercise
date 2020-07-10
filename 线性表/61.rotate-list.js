/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //先走到尾部，记录走的步数，并且给它合成环。之后再走n-k步。
    let dummy = new ListNode(-111);
    dummy.next = head;
    let cur = dummy;
    let len = 0;
    for(;cur.next != null;){
        cur = cur.next;
        len++;
    };
    cur.next = head;
    for(let i = 0 ; i < len - (k % len);i++){
        cur = cur.next;
    };
    let newHead = cur.next;
    cur.next = null;
    return newHead;
};
// @lc code=end

