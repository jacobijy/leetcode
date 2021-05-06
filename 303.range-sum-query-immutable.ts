/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    private arr: number[];
    constructor(nums: number[]) {
        this.arr = Array.from(nums);
    }

    sumRange(left: number, right: number): number {
        let result: number = 0;
        for (let i = left; i <= right; i++) {
            result += this.arr[i];
        }
        return result;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

