/**
 * Leetcode-07/03/2022
 * {@link https://leetcode.com/problems/wiggle-subsequence/}
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {

    let dec = 1;
    let inc = 1;
    for(let i =1;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            dec = inc+1;
        }
        else if(nums[i]>nums[i-1]){
            inc = dec+1;
        }
    }
    return Math.max(inc,dec)
};