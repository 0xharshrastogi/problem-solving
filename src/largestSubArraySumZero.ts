import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

function longestZeroSumSubArray(nums: number[]): number {
  const storeSum = new Map<number, number>();
  let len = 0;

  nums.reduce((sum = 0, currentVal, i) => {
    sum += currentVal;

    if (storeSum.has(sum)) len = Math.max(len, i - <number>storeSum.get(sum));
    else storeSum.set(sum, i);

    return sum;
  });

  return len;
}

new PerformanceTest(() => longestZeroSumSubArray(new NumberInput(100, -100, 100).input));
