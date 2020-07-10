/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessDummy = new ListNode(-1);
    let greaterDummy = new ListNode(-1);
    let lessTravel = lessDummy;
    let greaterDummy = new ListNode(-1);
    let dummy = new ListNode(-1);
    dummy.next = head;
    let travel = dummy.next;
    for(;travel !== null;travel = travel.next){
        if(travel.val < x){
            lessTravel.next = new ListNode(travel.val);
            lessTravel = lessTravel.next;
        }else{
            greaterTravel.next = new ListNode(travel.val);
            greaterTravel = greaterTravel.next;
        };
    };
    lessTravel.next = greaterDummy.next;
    return lessDummy.next;
};
// @lc code=end

