import PerformanceTest from './performanceTest';

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

function isSafe(matrix: Cell[][], row: number, col: number, pos: any) {
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

function solveNQueens(queenCount: number) {
  const board = new Board(queenCount);
  const pos = {
    row: new Array(queenCount).fill(false),
    lowerDiagonal: new Array(queenCount * 2 - 1).fill(false),
    upperDiagonal: new Array(queenCount * 2 - 1).fill(false),
  };
  const result: Cell[][][] = [];

  const calculate = (board: Board, coloum = 0) => {
    if (coloum === queenCount) {
      result.push(Board.copy(board));
      return result;
    }

    for (let row = 0; row < queenCount; row++) {
      if (
        !pos.row[row] &&
        !pos.lowerDiagonal[row + coloum] &&
        !pos.upperDiagonal[queenCount - 1 + coloum - row]
      ) {
        board.update('Q', row, coloum);
        pos.row[row] = true;
        pos.lowerDiagonal[row + coloum] = true;
        pos.upperDiagonal[queenCount - 1 + coloum - row] = true;

        calculate(board, coloum + 1);

        board.update('.', row, coloum);
        pos.row[row] = false;
        pos.lowerDiagonal[row + coloum] = false;
        pos.upperDiagonal[queenCount - 1 + coloum - row] = false;
      }
    }

    return result;
  };

  return calculate(board, 0);
}

new PerformanceTest(() => nQueen(11));
