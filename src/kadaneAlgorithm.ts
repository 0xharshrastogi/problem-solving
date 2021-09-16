function kadaneAlgorithm(array: number[]) {
  let [oSum, cSum] = [-Infinity, -Infinity];

  for (const value of array) {
    cSum = Math.max(value, cSum + value);
    oSum = Math.max(cSum, oSum);
  }

  return oSum;
}

const result = kadaneAlgorithm([-1, -1, 2, 3, -9, 10, 12, -5]);
