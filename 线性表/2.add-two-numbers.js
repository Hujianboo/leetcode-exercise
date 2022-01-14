/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 两个链表都有
    let first = l1,second = l2,carry = 0;
    let dummy = new ListNode(0);
    let third = dummy;

    for(;first !== null && second !== null;first = first.next,second = second.next){
        let sum = first.val + second.val + carry;
        carry = Math.floor(sum /10);
        third.next = new ListNode(Math.floor(sum % 10))
        third = third.next;
    }   
    if(first !== null || second !== null){
        let longer = (first !== null ? first:second);
        for(;longer !== null;longer = longer.next){
            let sum = longer.val + carry;
            carry = Math.floor(sum/10);
            third.next = new ListNode(sum%10);
            third = third.next;
        }
    }
    // for(;longer !== null && second === null;first = first.next){
    //     let sum = first.val + carry;
    //     carry = Math.floor(sum/10);
    //     third.next = new ListNode(sum%10);
    //     third = third.next;
    // }
    // //l1没有，l2有
    // for(;second !== null && first === null;second = second.next){
    //     let sum = second.val + carry;
    //     carry = Math.floor(sum/10);
    //     third.next = new ListNode(sum%10);
    //     third = third.next;
    // }
    //l1和l2都没有了
    if(carry > 0){
        third.next = new ListNode(carry);
    };
    return dummy.next;
};
// @lc code=end

