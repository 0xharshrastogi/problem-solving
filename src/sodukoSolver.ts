function isValid(board: string[][], val: number, row: number, col: number) {
  const [x, y] = [Math.floor(row / 3) * 3, Math.floor(col / 3) * 3];

  for (let i = 0; i < 9; i++) {
    if (board[i][col] === val.toString()) return false;
    if (board[row][i] === val.toString()) return false;
  }

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) if (board[x + i][y + j] === val.toString()) return false;

  return true;
}

function sudokoSolver(board: string[][]) {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        for (let val = 1; val <= 9; val++)
          if (isValid(board, val, i, j)) {
            board[i][j] = val.toString();

            if (sudokoSolver(board) === true) return true;
            else board[i][j] = '.';
          }

        return false;
      }
    }
  return true;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['3', '.', '.', '.', '8', '.', '.', '7', '9'],
];

sudokoSolver(board);

console.table(board);

// const sudokoboard = new SudokuBoard(board);
