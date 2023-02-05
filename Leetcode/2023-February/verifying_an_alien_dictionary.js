/**
 * {@link https://leetcode.com/problems/verifying-an-alien-dictionary/}
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = new Map();
    for (let i=0;i<order.length;i++){
        map.set(order[i], i);
        }
    // -----------------CALCULATE-----------------------------
    let calculate=(s1, s2) => {
        for(let i=0;i<Math.min(s1.length,s2.length);i++){
            console.log(map.get(s1[i]),map.get(s2[i]));
            if(map.get(s1[i]) < map.get(s2[i])){
                return true;
                }
            if(map.get(s2[i]) < map.get(s1[i])){
                return false;
                }
            }
        if(s1.length> s2.length){
            return false;
            }
        return true;
        }
    // -------------------------------------------------------
    for(let i=0;i<words.length-1;i++){
        if(calculate(words[i],words[i+1]) === false){
           return false;}
        }
    return true;
};

// 02/02/2023