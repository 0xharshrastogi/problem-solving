type Cell = 'Q' | '.';

class Board {
  matrix: Cell[][];

  constructor(count: number) {
    this.matrix = new Array(count);
    for (let i = 0; i < count; i++) {
      this.matrix[i] = new Array<Cell>(count).fill('.');
    }
  }

  update(val: Cell, row: number, col: number) {
    this.matrix[row][col] = val;
  }

  static copy(board: Board) {
    return board.matrix.map((row) => [...row]);
  }
}

function isSafe(matrix: Cell[][], row: number, col: number) {
  // check left
  for (let i = col - 1; i >= 0; i--) if (matrix[row][i] === 'Q') return false;

  // check upside diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
    if (matrix[i][j] === 'Q') return false;

  for (let i = row + 1, j = col - 1; i < matrix.length && j >= 0; i++, j--) {
    if (matrix[i][j] === 'Q') return false;
  }

  return true;
}

function nQueen(queenCount: number) {
  const board = new Board(queenCount);
  const result: Cell[][][] = [];

  const calculate = (board: Board, coloum = 0) => {
    if (coloum === queenCount) {
      result.push(Board.copy(board));
      return result;
    }

    for (let row = 0; row < queenCount; row++) {
      if (isSafe(board.matrix, row, coloum)) {
        board.update('Q', row, coloum);
        calculate(board, coloum + 1);
        board.update('.', row, coloum);
      }
    }

    return result;
  };

  return calculate(board, 0);
}
