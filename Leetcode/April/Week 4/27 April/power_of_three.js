// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    let d = 282429536481;
    if(n<0){
        return false;
    }
    if(d%n === 0){
        return true;
    }
    return false;
};