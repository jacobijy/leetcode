/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    let result: number[][] = [];
    result.push([1]);
    let row = [1];
    for (let i = 2; i <= numRows; i++) {
        let preRow = row;
        row = [];
        for (let j = 0; j <= preRow.length; j++) {
            let r = (preRow[j] || 0) + (preRow[j - 1] || 0);
            row.push(r);
        }
        result.push(row);
    }
    return result;
};
// @lc code=end

