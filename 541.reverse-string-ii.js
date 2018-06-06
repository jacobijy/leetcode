/*
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (43.91%)
 * Total Accepted:    40.2K
 * Total Submissions: 91.5K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 
 * Given a string and an integer k, you need to reverse the first k characters
 * for every 2k characters counting from the start of the string. If there are
 * less than k characters left, reverse all of them. If there are less than 2k
 * but greater than or equal to k characters, then reverse the first k
 * characters and left the other as original.
 * 
 * 
 * Example:
 * 
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * 
 * 
 * 
 * Restrictions: 
 * 
 * ⁠The string consists of lower English letters only.
 * ⁠Length of the given string and k will in the range [1, 10000]
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let l = s.length;
    if (l <= k) return reverseString(s);
    if (l <= 2 * k) return reverseString(s.slice(0, k)) + s.slice(k, l);
    let result = '';
    while (s.length >= 2 * k) {
        let first_str = s.slice(0, k);
        let second_str = s.slice(k, 2 * k);
        s = s.slice(2 * k, s.length);
        result += reverseString(first_str) + second_str;
    }
    return result + reverseStr(s, k);
};

var reverseString = function (s) {
    let result = '';
    for (let index = s.length - 1; index >= 0; index--) {
        result += s[index]
    }
    return result
};
