/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let row = [1];
    for (let i = 2; i <= rowIndex + 1; i++) {
        let preRow = row;
        row = [];
        for (let j = 0; j <= preRow.length; j++) {
            let r = (preRow[j] || 0) + (preRow[j - 1] || 0);
            row.push(r);
        }
    }
    return row;
};
// @lc code=end

