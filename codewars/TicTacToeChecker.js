/**
 * If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
 *
 * Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
 *
 * We want our function to return:
 *
 * -1 if the board is not yet finished (there are empty spots),
 * 1 if "X" won,
 * 2 if "O" won,
 * 0 if it's a cat's game (i.e. a draw).
 * You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 * 
 * @param {*} board Board to check, i.e. 
 * [[0, 0, 1],
 *  [0, 1, 2],
 *  [2, 1, 0]]
 */
function isSolved(board) {
  let winner;
  // Check if someone has won vertically
  for (let i = 0; i < 3; i++) {
    const verticalWin =
      board[i][0] === board[i][1] && board[i][0] === board[i][2];
    winner = board[i][0];
    if (verticalWin && winner !== 0) {
      return winner;
    }
    const horizontalWin =
      board[0][i] === board[1][i] && board[0][i] === board[2][i];
    winner = board[0][i];
    if (horizontalWin && winner !== 0) {
      return winner;
    }
  }
  // Check if someone has won diagonally
  let diagonalWin = board[0][0] === board[1][1] && board[0][0] === board[2][2];
  winner = board[0][0];
  if (diagonalWin && winner !== 0) {
    return winner;
  }
  diagonalWin = board[0][2] === board[1][1] && board[0][2] === board[2][0]
  winner = board[0][2];
  if (diagonalWin && winner !== 0) {
    return winner;
  }
  // Check if board is not finished
  const isOngoing = board.some(row => row.some(cell => cell === 0));
  if (isOngoing) {
    return -1;
  }
  return 0;
}
