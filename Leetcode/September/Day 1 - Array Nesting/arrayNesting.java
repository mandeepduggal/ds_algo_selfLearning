/*
 Link: https://leetcode.com/problems/array-nesting/
*/

class Solution {
    public int arrayNesting(int[] nums) {
        int rst = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != Integer.MAX_VALUE) {
                int start = nums[i], count = 0;
                while (nums[start] != Integer.MAX_VALUE) {
                    int temp = start;
                    start = nums[start];
                    count++;
                    nums[temp] = Integer.MAX_VALUE;
                }

                rst = Math.max(rst, count);
            }
        }
        return rst;
    }
}