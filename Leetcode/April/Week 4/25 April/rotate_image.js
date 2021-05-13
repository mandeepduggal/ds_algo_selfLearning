// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 var rotate = function(matrix) {
    console.log("Matrix",matrix);
    for (let j = 0;j<matrix.length/2;j++){
    for (let i = 0;i<matrix.length-1-j*2;i++){
        let temp = matrix[j][i+j];// (j=1) -> 11,12
        matrix[j][i+j] = matrix[matrix.length-1-(i+j)][j]; // (0=1)-> 11 = 31 - 12=21
        matrix[matrix.length-1-(i+j)][j] = matrix[matrix.length-1-j][matrix.length-1-(i+j)]; //  (0=1) -> 31 = 33 - 21 = 32
       matrix[matrix.length-1-j][matrix.length-1-(i+j)] = matrix[i+j][matrix.length-1-j];// 33 = 13 - 32 = 23
       matrix[i+j][matrix.length-1-j] = temp;

    }
    }
};