/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * 
*/
// class TreeNode {
//      val: number
//      left: TreeNode | null
//      right: TreeNode | null
//      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.left = (left===undefined ? null : left)
//          this.right = (right===undefined ? null : right)
//      }
//  }

// const vs =[];

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
   if (root === null) { return false }
   let node = root;
   const vs = [];
   function addNode(root, result) {
      let r = result + root.val;
      if (!root.left && !root.right) {
          vs.push(r);
      }
      if (root.left) {
          addNode(root.left, r)
      }
      if (root.right) {
         addNode(root.right, r);
      }
   }
   
   addNode(node, 0);
   return vs.indexOf(targetSum) >= 0;
};
// @lc code=end

