/**
 * {@link https://leetcode.com/problems/permutation-in-string/}
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let arr1 = new Array(26).fill(0);
    for(let i =0;i<s1.length;i++){
        arr1[s1.charCodeAt(i)-97] += 1;
    }
    let n = s1.length;
    let arr2 = new Array(26).fill(0);
    for(let i=0;i<s2.length;i++){
        if(i<n){
            arr2[s2.charCodeAt(i)-97] += 1;
        }else{
            
            arr2[s2.charCodeAt(i-n)-97] -= 1;
            arr2[s2.charCodeAt(i)-97] += 1;
        }
        if(i>=n-1){
            if(arr1.join(",") === arr2.join(",")){
                return true
            }
        }
    }
    return false;
};

04/02/2023