/**
 * {@link https://leetcode.com/problems/zigzag-conversion/}
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }
    let ans = "";

    for(let i=0;i<numRows;i++){
        let inc = 2*(numRows-1);
        for(let j=i;j<s.length;j+=inc){
            ans += s[j];
            if(i>0 && i<(numRows-1) && (j+inc-2*i)<s.length){
                ans += s[j+inc-2*i];
            }
        }
    }
    return ans;
};

// 03/02/2023