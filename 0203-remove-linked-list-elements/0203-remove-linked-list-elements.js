/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if(head === null) {
        return head;
    }
    head.next= removeElements(head.next, val);

    if(head.val === val){
        return head.next;
    }
    else return head;
};