/*
 * @lc app=leetcode id=29 lang=csharp
 *
 * [29] Divide Two Integers
 */

// @lc code=start
public class Solution
{
    private int checkSameSign(int a, int b)
    {
        if ((a > 0 && b > 0) || (a < 0 && b < 0))
        {
            return 1;
        }
        else if ((a > 0 && b < 0) || (a < 0 && b > 0))
        {
            return -1;
        }
        return 0;
    }
    public int Divide(int dividend, int divisor)
    {
        var tag = dividend;
        var result = 0;
        var sign = checkSameSign(dividend, divisor);
        while (checkSameSign(tag, dividend) == sign)
        {
            tag -= divisor * sign;
            result++;
        }
        result--;
        return sign * result;
    }
}
// @lc code=end

