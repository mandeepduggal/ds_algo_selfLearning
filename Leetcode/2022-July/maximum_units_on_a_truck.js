/**
 * Leetcode-07/01/2022
 * {@link https://leetcode.com/problems/maximum-units-on-a-truck/}
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1]);
    
    console.log(boxTypes);
    
    let res = 0;
    let i=0;
    while(truckSize>0&&i<boxTypes.length){
        res = res+ Math.min(truckSize,boxTypes[i][0])*boxTypes[i][1];
        truckSize-=boxTypes[i][0];
        i++;
    }
    return res;
};