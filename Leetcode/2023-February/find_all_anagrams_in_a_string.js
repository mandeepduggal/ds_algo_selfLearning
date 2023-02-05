/**
 * {@link https://leetcode.com/problems/find-all-anagrams-in-a-string/}
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let arr1 = new Array(26).fill(0);
    let n = p.length;
    for(let i=0;i<n;i++){
        arr1[p.charCodeAt(i)-97] +=1;
    }
    let arr2 = new Array(26).fill(0);
    let ans = [];
    for(let i=0;i<s.length;i++){
        if(i<n){
            arr2[s.charCodeAt(i)-97] +=1;
        }
        else{
            arr2[s.charCodeAt(i-n)-97] -=1;
            arr2[s.charCodeAt(i)-97] +=1;
        }
        if(i>=n-1){
            if(arr1.join(",") === arr2.join(",")){
                ans.push(i-n+1);
            }
        }
    }
    return ans;
};

// 05/02/2023