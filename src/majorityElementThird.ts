import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

function majorityElementOneThird(nums: number[]): number[] {
  if (!nums.length) return [];

  let [countA, countB] = [0, 0];
  let [numA, numB] = [0, 0];

  for (const num of nums) {
    if (num === numA) countA++;
    else if (num === numB) countB++;
    else if (countA === 0) {
      numA = num;
      countA++;
    } else if (countB === 0) {
      numB = num;
      countB++;
    } else {
      countA--;
      countB--;
    }
  }

  [countA, countB] = [0, 0];
  const result = [];
  for (const num of nums) {
    if (num === numA) countA++;
    if (num === numB) countB++;
  }

  if (countA > nums.length / 3) result.push(numA);
  if (countB > nums.length / 3) result.push(numB);

  return result;
}

new PerformanceTest(() => majorityElementOneThird(new NumberInput(70, 0, 2).input));
