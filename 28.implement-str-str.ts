/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    let nLength = needle.length;
    for (let i = 0; i <= haystack.length - nLength; i++) {
        let isSame = true;
        for (let j = 0; j < nLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                isSame = false;
                break;
            }
        }
        if (isSame) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("hello", "lo"));
// @lc code=end

