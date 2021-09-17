function uniquePathsGrid(rows: number, cols: number): number {
  const totalSteps = rows + cols - 2;
  const R = rows - 1;
  let result = 1;

  for (let i = totalSteps; i > R; i--) result *= i;
  for (let i = totalSteps - R; i >= 1; i--) result /= i;
  return result;
}
