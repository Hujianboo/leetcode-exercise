/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let dummy = new Node(-999);
    dummy.next = head;
    if(head === null)return head;
    for(let cur = dummy.next;cur !== null;){
        let node = new Node(cur.val);
        node.next = cur.next;
        cur.next = node;
        cur = cur.next.next;
    };
    for(let cur = dummy.next;cur !== null && cur.next !== null;){
        if(cur.random !== null){
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next;
    };
    let newDummy = new Node(-9999);
    let newCur = newDummy;
    for(let cur = dummy.next;cur !== null;){
        newCur.next = cur.next;
        newCur = newCur.next;
        cur.next = cur.next.next;
        cur = cur.next;
        
    };
    newCur.next = null;
    return newDummy.next;
};
// @lc code=end

