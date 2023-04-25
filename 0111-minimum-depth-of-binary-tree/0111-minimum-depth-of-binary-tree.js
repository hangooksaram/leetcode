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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    const leafNodeArr=[];
    var recur = function(node, level) {
        if(node === null) return 0;

        recur(node.left, level + 1);
        recur(node.right, level + 1);
        if(node?.left === null && node?.right === null){
            leafNodeArr.push({val:node.val, level:level});
        }
    }
    
    
    recur(root, 1);
    let min=100001;
    for(let i=0; i<leafNodeArr.length; i++){
        if(leafNodeArr[i].level < min){
            min = leafNodeArr[i].level;
        }
    }
    return min;
};