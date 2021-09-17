import { RandomMatrix } from './generateInput';
import PerformanceTest from './performanceTest';

type Matrix<T> = T[][];

/**
 * Rotates the rows in an matrix to clockwise in place. This method mutates the matrix and returns a reference to the same matrix.
 * @param matrix 2-D Matrix
 *  */
function rotateMatrix<T>(matrix: Matrix<T>): Matrix<T> {
  const SIZE = matrix.length;
  // transpose
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < i; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];

  matrix.forEach((row) => row.reverse());
  return matrix;
}

new PerformanceTest(() => rotateMatrix(new RandomMatrix(100, 100, 0, 10).input));
