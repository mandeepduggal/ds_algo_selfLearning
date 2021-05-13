// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let arr = [-1,-1];
    let position = [0,nums.length-1];
    let [left,right] = position
    function leftFumnction(left,right){
        


        if (left<=right){
        let mid = Math.floor(left+(right-left)/2)

        if(nums[mid] > target){
            leftFumnction(left,mid-1)
        }
        else if(nums[mid] < target){
            leftFumnction(mid+1,right)
        }
        else{
            arr[0] = mid;
            leftFumnction(left,mid-1);
        }

        }
    }
    function rightFumnction(left,right){
        


        if (left<=right){
        let mid = Math.floor(left+(right-left)/2)

         if(nums[mid] > target){
            rightFumnction(left,mid-1)
        }
        else if(nums[mid] < target){
            rightFumnction(mid+1,right)
        }
        else{
            arr[1] = mid;
            rightFumnction(mid+1,right);
        }

        }
    }
    leftFumnction(0,nums.length-1);
    rightFumnction(0,nums.length-1);
    return arr
};