/*
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (20.39%)
 * Total Accepted:    171.9K
 * Total Submissions: 843.2K
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * Example 1:
 * 
 * 
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.startsWith('0')) return 0;
    if (s.length <= 1) return s.length;
    let cta = 1, ctb = 0, lastChar = s[0];
    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        let a = cta;
        let b = ctb;
        if (char !== '0') {
            cta = a + b;
        }
        else {
            cta = 0;
        }
        if (parseInt(lastChar + char) <= 26) {
            ctb = a;
        } else {
            ctb = 0;
        }
        lastChar = char;
    }

    return cta + ctb
};