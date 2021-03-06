#
# @lc app=leetcode id=29 lang=python3
#
# [29] Divide Two Integers
#

# @lc code=start
import math
MIN = -pow(2, 31)
MAX = pow(2, 31) - 1


def calcMaxBi(input: int, divisor: int) -> int:
    tmp = divisor
    count = 0
    while tmp <= input:
        tmp = tmp << 1
        count = count + 1
    return count - 1


def calcBinary(dividend: int, divisor: int) -> int:
    tmp = dividend
    result = 0
    while tmp >= divisor:
        res = calcMaxBi(tmp, divisor)
        tmp = tmp - (divisor << res)
        result += 1 << res
    return result


class Solution:
    def checkSameSign(self, a: int, b: int) -> int:
        if (a > 0 and b > 0) or (a < 0 and b < 0):
            return 1
        elif (a > 0 and b < 0) or (a < 0 and b > 0):
            return -1
        else:
            return 0

    def divide(self, dividend: int, divisor: int) -> int:
        sign = self.checkSameSign(dividend, divisor)
        dividendEx = abs(dividend)
        divisorEx = abs(divisor)
        result = 0
        if dividendEx < divisorEx:
            return result
        else:
            result = calcBinary(dividendEx, divisorEx)
            if result <= MIN or result >= MAX:
                return MAX
            else:
                return sign * result
# @lc code=end


s = Solution()
aa = s.divide(7, -3)
print(aa)
