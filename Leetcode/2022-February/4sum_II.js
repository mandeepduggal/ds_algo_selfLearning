/**
 * Leetcode-02/03/2022
 * Link: https://leetcode.com/problems/4sum-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let numMap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      numMap.set(
        nums1[i] + nums2[j],
        (numMap.get(nums1[i] + nums2[j]) || 0) + 1
      );
    }
  }
  let sum = 0;
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      sum += numMap.get(-1 * (nums3[i] + nums4[j])) || 0;
    }
  }
  return sum;
};
