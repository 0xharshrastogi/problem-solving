import { NumberInput } from "./generateInput";

function kadaneAlgorithm(array: number[]) {
  let [oSum, cSum] = [-Infinity, -Infinity];

  for (const value of array) {
    cSum = Math.max(value, cSum + value);
    oSum = Math.max(cSum, oSum);
  }

  return oSum;
}

console.log(kadaneAlgorithm([-1, 3, 2, 4, -3, -2, 5, 1]));
// console.log(new NumberInput(8, -10, 10));
