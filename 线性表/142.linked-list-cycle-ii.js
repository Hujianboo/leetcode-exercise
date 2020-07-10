/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
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
var detectCycle = function(head) {
    if(head === null || head.next === null) return null;
    let dummy = new ListNode(-999);
    dummy.next = head;
    let slow = head;
    let fast = head.next;
    let flag = new ListNode(-999);
    while(slow !== fast){
        if(fast === null || fast.next === null) return null;
        if(slow === fast){
            flag = slow;
            break;
        };
        slow = slow.next;
        fast = fast.next.next;
    };
    let cur = dummy;
    while(cur !== flag){
        cur = cur.next;
        flag = flag.next;
    };
    return cur;
};
// @lc code=end

