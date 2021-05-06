/*
 * @lc app=leetcode id=29 lang=cpp
 *
 * [29] Divide Two Integers
 */
#include <iostream>
// @lc code=start
class Solution
{
public:
    Solution()
    {
    }

private:
    int checkSign(int a, int b)
    {
        if ((a > 0 && b > 0) || (a < 0 && b < 0))
        {
            return 1;
        }
        else if ((a > 0 && b < 0) || (a < 0 && b > 0))
        {
            return -1;
        }
        else
        {
            return 0;
        }
    }

public:
    int divide(int dividend, int divisor)
    {
        int tmp = dividend;
        int count = 0;
        int sign = checkSign(dividend, divisor);
        while (sign == checkSign(tmp, divisor) && sign != 0)
        {
            /* code */
            count++;
            tmp -= sign * divisor;
        }
        if (tmp != 0) {
            count -= 1;
        }
        if (count < 0) {
            return pow(2, 31) - 1;
        }
        return sign * count;
    }
};
// @lc code=end

int main()
{
    Solution *s = new Solution();
    int result = s->divide(-2147483648, -1);
    std::cout << result << std::endl;
}