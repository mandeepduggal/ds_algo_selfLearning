/**
 * {@link https://leetcode.com/problems/greatest-common-divisor-of-strings/}
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let helper1 = (s1, s2) => {
        while (s1.substring(0,s2.length) === s2){
            s1 = s1.substring(s2.length);
        }
    return s1;
    }
    let helper2 = (s1,s2) =>{
        if(s2.length > s1.length){
           return helper2(s2,s1);
        }
        if(s1.substring(0,s2.length) !==s2){
            return "";
        }
        if (s2.length === 0)
            return s1;
        let ans = helper2(s2,helper1(s1,s2));
        return ans;

    }
    let ans = helper2(str1,str2)
    return ans;
};

// 01/02/2023