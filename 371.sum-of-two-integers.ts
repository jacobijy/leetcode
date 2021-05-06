/*
 * @lc app=leetcode id=371 lang=typescript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
function getSum(a: number, b: number): number {
    if(b == 0){
        return a;
    }
    let sum: number, carry: number;
    sum = a ^ b;
    carry = (a & b) << 1;
    return getSum(sum, carry);
};
// @lc code=end

