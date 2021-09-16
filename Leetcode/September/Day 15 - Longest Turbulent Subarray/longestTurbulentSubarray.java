/*
 Link: https://leetcode.com/problems/longest-turbulent-subarray/
*/

class Solution {
    public int maxTurbulenceSize(int[] arr) {
        int dec=1,inc=1,max=1;
        for(int i=1;i<arr.length;i++){
            if(arr[i] == arr[i-1]){
                dec=1;
                inc=1;
            }
            if(arr[i]> arr[i-1]){
                inc=dec+1;
                dec=1;
            }
            if(arr[i]< arr[i-1]){
                dec=inc+1;
                inc=1;
            }
            max = Math.max(max,Math.max(inc,dec));
        }
        return max;
    }
}