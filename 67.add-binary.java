/*
 * @lc app=leetcode id=67 lang=java
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (47.22%)
 * Likes:    2650
 * Dislikes: 337
 * Total Accepted:    585.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 * 
 * 
 */

// @lc code=start
class Solution {
    private String addBinarySingle(String a, String b) {
        if ((!a.equals("1") && !a.equals("0") && !a.equals("10")) || (!b.equals("0") && !b.equals("1"))) {
            return "0";
        } else if (a.equals("1") && b.equals("1")) {
            return "10";
        } else if (a.equals("10")) {
            return a.replace("0", b);
        } else {
            return String.valueOf(Integer.parseInt(a) + Integer.parseInt(b));
        }
    }

    public String addBinary(String a, String b) {
        int maxLength = Math.max(a.length(), b.length());
        String result = "";
        String carry_save = "0";
        for (int i = 0; i < maxLength; i++) {
            int indexA = a.length() - 1 - i;
            int indexB = b.length() - 1 - i;
            String charA = indexA >= 0 ? String.valueOf(a.charAt(indexA)) : "0";
            String charB = indexB >= 0 ? String.valueOf(b.charAt(indexB)) : "0";
            String tmp = addBinarySingle(charA, charB);
            String sum = addBinarySingle(tmp, carry_save);
            if (sum.length() >= 2) {
                carry_save = "1";
            } else {
                carry_save = "0";
            }
            result = sum.charAt(sum.length() - 1) + result;
        }
        if (carry_save.equals("1")) {
            result = carry_save + result;
        }
        return result;
    }
}
// @lc code=end
