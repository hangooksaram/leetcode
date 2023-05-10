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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const answerList = [];
  
  var recur=function(root){
    if(root === null) return;
    answerList.push(root.val);
    recur(root.left);
    recur(root.right);
  }

  recur(root);
  
  return answerList
};