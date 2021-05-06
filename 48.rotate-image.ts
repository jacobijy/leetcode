/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let border = matrix.length - 1;
    console.log(matrix);
    for (let i = 0; i <= border; i++) {
        for (let j = i; j <= border - i - 1; j++) {
            let m = matrix[i][j];
            matrix[i][j] = matrix[border-j][i];
            matrix[border-j][i] = matrix[border-i][border-j];
            matrix[border-i][border-j] = matrix[j][border-i];
            matrix[j][border-i]= m;
            console.log(m);
        }
    }
    console.log(matrix);
};
// rotate([[1,2,3,4,5],[6],[13,3,6,7],[15,14,12,16]]);
function generateMatrix(n: number) {
    let res = [];
    let num = 0;
    for (let i = 0; i < n; i++) {
        res[i] = [];
        for (let j = 0; j < n; j++) {
            res[i][j] = num;
            num++;
        }
    }
    return res;
}

rotate(generateMatrix(7));
// @lc code=end

