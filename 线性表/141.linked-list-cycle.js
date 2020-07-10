/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    let dummy = new ListNode(-999);
    dummy.next = head;
    let slow = dummy,fast = dummy;
    if(dummy.next === null || dummy.next.next === null ) return false;
    slow = slow.next;
    fast = fast.next.next;
    while(slow !== fast){
        if(fast === null || fast.next === null){
            return false;
        };
        slow = slow.next;
        fast = fast.next.next;
    };
    return true;
};
// @lc code=end

