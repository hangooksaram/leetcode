/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null) return true;
    if(root.left === null && root.right ===null) return true
    if(root.left === null || root.right ===null) return false;
    return isSame(root.left, root.right)
}

var isSame = function(t1, t2){
    if(t1 === null && t2===null) return true;
    if(t1 === null || t2===null) return false;
    if(t1.val !== t2.val) return false;

    return isSame(t1.left, t2.right) && isSame(t1.right, t2.left);
}