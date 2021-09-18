import { NumberInput } from './generateInput';

function longestCommanSequence(nums: number[]) {
  console.log(nums);
  const numSet = new Set(nums);
  let count = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let current = num;
      while (numSet.has(current + 1)) current++;
      count = current - num > count ? current - num : count;
    }
  }

  return count;
}

console.log(longestCommanSequence(new NumberInput(10, 0, 10).input));
