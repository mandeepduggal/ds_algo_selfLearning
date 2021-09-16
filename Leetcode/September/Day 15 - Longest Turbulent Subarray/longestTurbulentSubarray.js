/*
 Link: https://leetcode.com/problems/longest-turbulent-subarray/
*/

 var maxTurbulenceSize = function(arr) {
    let dec=1,inc=1,max=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            dec=1;
            inc=1;
        }
        if(arr[i] < arr[i-1]){
            inc = dec+1;
            dec = 1;
        }
        if(arr[i] > arr[i-1]){
            dec = inc+1;
            inc = 1;
        }
        max = Math.max(max,inc,dec)
    }
    return max;
};