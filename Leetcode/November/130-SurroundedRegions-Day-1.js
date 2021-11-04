/**
 * @Link {https://leetcode.com/problems/surrounded-regions/}
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i === board.length ||
      j === board[0].length ||
      board[i][j] != "O"
    ) {
      return;
    }
    board[i][j] = "1";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  for (let i = 0; i < board.length; i++) {
    if (i === 0 || i === board.length - 1) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === "O") {
          dfs(i, j);
        }
      }
    } else {
      if (board[i][0] === "O") {
        dfs(i, 0);
      }
      if (board[i][board[0].length - 1] === "O") {
        dfs(i, board[0].length - 1);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "1") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
