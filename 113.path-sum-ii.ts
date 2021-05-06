/*
 * @lc app=leetcode id=113 lang=typescript
 *
 * [113] Path Sum II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if (root === null) { return [] }
    let node = root;
    const vs: number[][] = [];
    function addNode(root: TreeNode, result, arr: number[]) {
        arr = Array.from(arr);
        arr.push(root.val);
        let r = result + root.val;
        if (!root.left && !root.right) {
            if (r === targetSum) {
                vs.push(arr);
            }
        }
        if (root.left) {
            addNode(root.left, r, arr)
        }
        if (root.right) {
            addNode(root.right, r, arr);
        }
    }
    addNode(node, 0, []);
    return vs;
};
// @lc code=end

