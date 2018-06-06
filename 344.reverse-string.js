/*
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (60.59%)
 * Total Accepted:    255.3K
 * Total Submissions: 421.3K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and returns the string
 * reversed.
 * 
 * 
 * Example:
 * Given s = "hello", return "olleh".
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let result = '';
    for (let index = s.length - 1; index >= 0; index--) {
        result += s[index]
    }
    return result
};
