import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

type Nums = number[];

function mergeAndCount(nums: Nums, start: number, mid: number, end: number) {
  let [i, j, count] = [start, mid + 1, 0];
  const merge: Nums = [];

  while (i <= mid && j <= end)
    if (nums[i] <= nums[j]) merge.push(nums[i++]);
    else {
      merge.push(nums[j++]);
      count += mid - i + 1;
    }

  while (i <= mid) merge.push(nums[i++]);
  while (j <= end) merge.push(nums[j++]);

  for (let i = 0; i <= end; i++) nums[start + i] = merge[i];

  return count;
}

function countInversion(nums: Nums, start = 0, end = nums.length - 1): number {
  if (start >= end) return 0;
  const mid = start + ((end - start) >> 1);

  const count = countInversion(nums, start, mid) + countInversion(nums, mid + 1, end);
  return count + mergeAndCount(nums, start, mid, end);
}

new PerformanceTest(() => countInversion(new NumberInput(20, 0, 100).input), 100);
