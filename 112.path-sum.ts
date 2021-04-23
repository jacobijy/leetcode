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
   let node = root;
   let result = node.val;
   const vs = [];
   function addNode(root, result, list) {
       let r = result;
       if (root.left) {
           addNode(root.left, r, list)
       }
       if (root.right) {
          addNode(root.right, r, list);
       }
       if (!root.left && !root.right) {
          list.push(r);
       }
   }
   
   addNode(node, result, vs);
   return vs.indexOf(targetSum) >= 0;
};
// @lc code=end

