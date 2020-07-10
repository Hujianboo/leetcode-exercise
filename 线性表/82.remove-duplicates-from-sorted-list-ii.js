/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-111);
    dummy.next = head;
    let pre = dummy;
    let cur = pre.next;
    while(cur !== null){
        let flag = false;
        while(cur.next !== null && cur.val === cur.next.val){
            flag = true;
            cur = cur.next;
        };
        if(flag){
            cur = cur.next;
            continue;
        }
        pre.next = cur;
        pre = pre.next;
        cur = cur.next;
    };
    pre.next = cur;
    return dummy.next;
    
};
// @lc code=end

