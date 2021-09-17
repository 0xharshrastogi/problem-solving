type Matrix<T> = T[][];
type Comparator<T> = (valA: T) => number;
function searchInMatrix<T>(matrix: Matrix<T>, compare: Comparator<T>): boolean {
  const [ROWS, COLS] = [matrix.length, matrix[0].length];
  let [start, end] = [0, ROWS * COLS - 1];

  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    const compareResult = compare(matrix[mid >> ROWS][mid % COLS]);
    if (compareResult === 0) return true;
    else if (compareResult < 0) end = mid - 1;
    else start = mid + 1;
  }
  return false;
}

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];

console.log(searchInMatrix(matrix, (val) => val - 44));
