type Row = number[];

function pascalTriangle(count = 10) {
  const rows: Row[] = [];
  for (let i = 0; i < count; i++) {
    let row: Row = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) row.push(1);
      else row.push(rows[i - 1][j] + rows[i - 1][j - 1]);
    }
    rows.push(row);
  }
  console.table(rows);
}

pascalTriangle(12);

// 1
// 1 1
// 1 2 1
// 1 3 3 1
