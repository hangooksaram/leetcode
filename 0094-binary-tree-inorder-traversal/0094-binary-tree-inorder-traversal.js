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
var inorderTraversal = function (root) {
  const answer= [];
  if(root===null){
    return []
  }
  if(root.left === null && root.right === null){
    return [root.val]
  }
  const recur = (root) => {
      if(root === null) return root;
      recur(root.left);
      answer.push(root.val);
      recur(root.right);
  }
  recur(root);

  return answer
};

  
