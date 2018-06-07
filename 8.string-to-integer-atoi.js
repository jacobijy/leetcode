/*
 * [8] String to Integer (atoi)
 *
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * algorithms
 * Medium (14.11%)
 * Total Accepted:    238K
 * Total Submissions: 1.7M
 * Testcase Example:  '"42"'
 *
 * Implement atoi which converts a string to an integer.
 * 
 * The function first discards as many whitespace characters as necessary until
 * the first non-whitespace character is found. Then, starting from this
 * character, takes an optional initial plus or minus sign followed by as many
 * numerical digits as possible, and interprets them as a numerical value.
 * 
 * The string can contain additional characters after those that form the
 * integral number, which are ignored and have no effect on the behavior of
 * this function.
 * 
 * If the first sequence of non-whitespace characters in str is not a valid
 * integral number, or if no such sequence exists because either str is empty
 * or it contains only whitespace characters, no conversion is performed.
 * 
 * If no valid conversion could be performed, a zero value is returned.
 * 
 * Note:
 * 
 * 
 * Only the space character ' ' is considered as whitespace character.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical
 * value is out of the range of representable values, INT_MAX (231 − 1) or
 * INT_MIN (−231) is returned.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "42"
 * Output: 42
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "   -42"
 * Output: -42
 * Explanation: The first non-whitespace character is '-', which is the minus
 * sign.
 * Then take as many numerical digits as possible, which gets 42.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "4193 with words"
 * Output: 4193
 * Explanation: Conversion stops at digit '3' as the next character is not a
 * numerical digit.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "words and 987"
 * Output: 0
 * Explanation: The first non-whitespace character is 'w', which is not a
 * numerical 
 * digit or a +/- sign. Therefore no valid conversion could be performed.
 * 
 * Example 5:
 * 
 * 
 * Input: "-91283472332"
 * Output: -2147483648
 * Explanation: The number "-91283472332" is out of the range of a 32-bit
 * signed integer.
 * Thefore INT_MIN (−231) is returned.
 * 
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);
    str = reorderString(str);
    if (getSignCount(str) >= 2) return 0;
    while(str[0] === ' '|| str[0] === '+') {
        str = str.slice(1, str.length);
    }
    let first_char = str[0];
    if (Object.is(parseInt(first_char), NaN) && first_char !== '-') return 0;
    if (first_char === '-') {
        if (str[1] === undefined || Object.is(parseInt(str[1]), NaN)) {
            return 0;
        }
    }
    let index = 0, new_str = '';
    while(str[index] !== NaN && str[index] !== undefined) {
        new_str += str[index];
        index++;
    }
    let result = parseInt(new_str);
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;
    return parseInt(new_str);
};

var reorderString = function (str) {
    let new_str = str;
    while(new_str[0] === ' ') {
        new_str = new_str.slice(1, new_str.length);
    }
    return new_str.split(' ')[0];
};

var getSignCount = function (str) {
    let new_str = str;
    let signCount = 0;
    while (new_str[0] === '+' || new_str[0] === '-') {
        signCount++;
        new_str = new_str.slice(1, new_str.length);
        if (signCount >= 2) return 2;
    }
    return signCount
};