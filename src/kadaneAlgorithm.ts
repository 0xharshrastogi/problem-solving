import { NumberInput } from "./generateInput";
import PerformanceTest from "./performanceTest";

function kadaneAlgorithm(array: number[]) {
  let [oSum, cSum] = [-Infinity, -Infinity];

  for (const value of array) {
    cSum = Math.max(value, cSum + value);
    oSum = Math.max(cSum, oSum);
  }

  return oSum;
}

new PerformanceTest(() => kadaneAlgorithm(new NumberInput(100000, -1000, 1000).input), 100);
