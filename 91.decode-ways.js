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
    return devidedNumsEx(s).length;
};

var devidedNumsEx = function (s) {
    let result = [];
    const nums = [...s].map(value => (parseInt(value)));
    let index = 0;
    let a = nums[index];
    while (a !== undefined) {
        let new_result = [];
        if (result.length === 0) {
            if (a === 0) return [];
            result.push([a])
            index ++;
            a = nums[index]
            continue;
        }
        for (let value of result) {
            let b = value.pop();
            if (a === 0){
                if (b%10 >= 3) return [];
                if (b >= 10) continue;
                value.push([...value, b*10])
                new_result.push(value);
            }
            else if (b >= 10) {
                value = [...value, ...[b, a]];
                new_result.push(value);
            }
            else {
                new_result.push([...value, ...[b, a]]);
                if (b * 10 + a <= 26) {
                    new_result.push([...value, b * 10 + a])
                }
            }
        }
        result = new_result;
        index ++;
        a = nums[index]
    }
    return result;
}

console.log(devidedNumsEx('1001'));

