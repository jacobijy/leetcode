/*
 * @lc app=leetcode id=84 lang=java
 *
 * [84] Largest Rectangle in Histogram
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (37.35%)
 * Likes:    5534
 * Dislikes: 111
 * Total Accepted:    349.4K
 * Total Submissions: 935.2K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * Given an array of integers heights representing the histogram's bar height
 * where the width of each bar is 1, return the area of the largest rectangle
 * in the histogram.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The above is a histogram where width of each bar is 1.
 * The largest rectangle is shown in the red area, which has an area = 10
 * units.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: heights = [2,4]
 * Output: 4
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= heights.length <= 10^5
 * 0 <= heights[i] <= 10^4
 * 
 * 
 */

// @lc code=start
class Solution {
    public int largestRectangleArea(int[] heights) {
        int shape = 0;
        int height = 0;
        for (int i = 0; i < heights.length; i++) {
            if (heights[i] == height) {
                continue;
            }
            height = heights[i];
            int tmp = calcShapeIndex(heights, i);
            if (tmp > shape) {
                shape = tmp;
            }
        }
        return shape;
    }

    private int calcShapeIndex(int[] heights, int index) {
        if (index < 0 || index >= heights.length) {
            return 0;
        }
        int width = 1;
        int height = heights[index];
        int pre = index - 1;
        int next = index + 1;
        while (pre >= 0 && heights[pre] >= height) {
            width++;
            pre --;
        }
        while (next < heights.length && heights[next] >= height) {
            width++;
            next++;
        }
        return height * width;
    }
}
// @lc code=end
