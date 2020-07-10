/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
    //迭代的方法，
    // let dummy = new ListNode(-111);
    // dummy.next = head;
    // let pre = dummy;
    // let cur = pre.next;
    // for(;cur !== null;){
    //     if(pre.val === cur.val){
    //         pre.next = cur.next;
    //         cur = cur.next;
    //     }else{
    //         pre = pre.next;
    //         cur = cur.next;
    //     }
    // };
    // return dummy.next;
    //递归的方法，
    let dummy = new ListNode(-111);
    dummy.next = head;
    let pre = dummy;
    let cur = pre.next;
    var recursive = function(pre,cur){
        if(cur === null) return;
        if(pre.val === cur.val){
            pre.next = cur.next;
            cur = cur.next;
            recursive(pre,cur)
        }else{
            pre = pre.next;cur = cur.next;
            recursive(pre,cur)
        };
    };
    recursive(pre,head);
    return dummy.next;
};
// @lc code=end

