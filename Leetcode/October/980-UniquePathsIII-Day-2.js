/**
 * @Link {https://leetcode.com/problems/unique-paths-iii/}
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  function dfs(grid, i, j, zero) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === -1
    ) {
      return 0;
    }
    if (grid[i][j] === 2) {
      return zero === -1 ? 1 : 0;
    }
    grid[i][j] = -1;
    zero--;

    let totalCount =
      dfs(grid, i + 1, j, zero) +
      dfs(grid, i - 1, j, zero) +
      dfs(grid, i, j + 1, zero) +
      dfs(grid, i, j - 1, zero);

    grid[i][j] = 0;
    zero++;

    return totalCount;
  }

  let zeroCount = 0;
  let s1, sj;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        zeroCount++;
      } else if (grid[i][j] === 1) {
        si = i;
        sj = j;
      }
    }
  }

  return dfs(grid, si, sj, zeroCount);
};
