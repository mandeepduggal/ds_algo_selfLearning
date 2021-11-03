/**
 * @Link {https://leetcode.com/problems/sum-root-to-leaf-numbers/}
 */

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

 var sumNumbers = function(root) {
    let sum =0;
    function traverse(root,num){
        if(root === null){
            return;
        }
        num = num*10+root.val;
        if(root.left===null && root.right === null){
            sum+=num;
        }
        else{
            traverse(root.left,num);
            traverse(root.right,num);   
        }
    }
    
    traverse(root,0);
    return sum;
};