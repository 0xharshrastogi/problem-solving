import { NumberInput } from './generateInput';

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

console.log(longestZeroSumSubArray(new NumberInput(10, -5, 5).input));
