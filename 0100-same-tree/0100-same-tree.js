/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null){
        return true
    }
    const pArr = [];
    const qArr = [];
    const traversalTree = (tree, result)=>{
        if(tree===null) {
            return tree;
        }
        if(tree.right && tree.left === null){
            result.push(null);
        }
        result.push(tree.val);
        traversalTree(tree.left, result);
        traversalTree(tree.right, result);
    }
    traversalTree(p,pArr);
    traversalTree(q,qArr);
    if(pArr.length !== qArr.length){
        return false;
    }
    for(let i=0; i<pArr.length; i++){
        if(pArr[i] !== qArr[i]) return false;
    }
    return true;
};

