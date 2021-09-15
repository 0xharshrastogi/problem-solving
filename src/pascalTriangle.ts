type Row = number[];

function pascalTriangle(rows = 10) {
  const result: Row[] = [];

  for (let i = 0; i < rows; i++) {
    let row: Row = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) row.push(1);
      else row.push(result[i - 1][j] + result[i - 1][j - 1]);
    }
    result.push(row);
  }
  console.table(result);
}

pascalTriangle(12);

// 1
// 1 1
// 1 2 1
// 1 3 3 1
