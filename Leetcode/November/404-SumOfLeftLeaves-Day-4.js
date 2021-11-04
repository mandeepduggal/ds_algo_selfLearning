/**
 * @Link {https://leetcode.com/problems/sum-of-left-leaves/}
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
var sumOfLeftLeaves = function (root) {
  let res = 0;
  function traverse(root, isLeft) {
    if (root === null) {
      return 0;
    }
    if (root.left === null && root.right === null) {
      if (isLeft === true) {
        return root.val;
      } else {
        return 0;
      }
    }
    return traverse(root.left, true) + traverse(root.right);
  }
  return traverse(root, false);
};
