/*
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (46.39%)
 * Total Accepted:    142.3K
 * Total Submissions: 306.6K
 * Testcase Example:  '3'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given an integer, convert it to a roman numeral. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: "III"
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "IV"
 * 
 * Example 3:
 * 
 * 
 * Input: 9
 * Output: "IX"
 * 
 * Example 4:
 * 
 * 
 * Input: 58
 * Output: "LVIII"
 * Explanation: C = 100, L = 50, XXX = 30 and III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: 1994
 * Output: "MCMXCIV"
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let string = '',
    inteToRomanChar = [['I', "V", 'IV', 'IX'], ['X', 'L', 'XL', 'XC'], ['C', 'D', 'CD', 'CM'], ['M']],
    index = 0;
  for (const number of numbers(num)) {
    console.log(number);

    switch (number) {
      case 9:
        string = inteToRomanChar[index][3] + string;
        break;
      case 4:
        string = inteToRomanChar[index][2] + string;
        break;
      default:
        {
          if (number >= 5) {
            for (let j = 0; j < number - 5; j++) {
              string = inteToRomanChar[index][0] + string
            }
            string = inteToRomanChar[index][1] + string
          }
          else {
            for (let j = 0; j < number; j++) {
              string = inteToRomanChar[index][0] + string
            }
          }
        }
        break;
    }
    index++;
  }
  return string
};

var numbers = (num) => {
  let result = [];
  while (num > 0) {
    result.push(num % 10)
    num = Math.floor(num / 10)
  }
  return result
}

// console.log(numbers(1984));
