//  https://leetcode.com/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let newArr = Array(obstacleGrid.length);
    for (let i=0;i<obstacleGrid.length;i++){
        newArr[i] = Array(obstacleGrid[0].length).fill(0);
    }
    let flag = false;
    for(let i=0;i<obstacleGrid.length;i++){
        if(obstacleGrid[i][0] === 1 || flag === true){
            flag = true;
            newArr[i][0] = 0
        }else{
        newArr[i][0] = 1}
        
    }
    flag = false;
    for(let i=0;i<obstacleGrid[0].length;i++){
        if(obstacleGrid[0][i] === 1 || flag === true){
            flag = true;
            newArr[0][i] = 0
        }else{
        newArr[0][i] = 1}
    }
    
    for(let i=1;i<obstacleGrid.length;i++){
        for(let j=1;j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j] === 1){
            newArr[i][j] = 0
        }else{
        newArr[i][j] = newArr[i-1][j]+newArr[i][j-1]}
    }
    }
    return newArr[obstacleGrid.length-1][obstacleGrid[0].length-1];
    
};