// https://leetcode.com/problems/powerful-integers/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
 var powerfulIntegers = function(x, y, bound) {
    console.log(x,y,bound);
    if(bound === 1 || bound === 0){
return []
    }
    let maxI = 1
    if (x>1){
    maxI = Math.floor(Math.log2(bound-1)/Math.log2(x));
    }
    let maxJ = 1
    if (y>1){
    maxJ = Math.floor(Math.log2(bound-1)/Math.log2(y));
    }
    console.log(maxI,maxJ)
    let newSet = new Set();
    for(let i=0 ; i <= maxI;i++){
        for(let j=0 ; j<= maxJ ; j++){
            let num = Math.pow(x,i)+Math.pow(y,j)
            if(num<=bound){
                newSet.add(num)
            }
            else{
                break;
            }
        }
    }
    return Array.from(newSet)

};