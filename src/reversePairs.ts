import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

function mergeAndCount(nums: number[], start: number, mid: number, end: number): number {
  let count = 0;

  for (let i = start, j = mid + 1; i <= mid && j <= end; )
    if (nums[i] > 2 * nums[j]) {
      count += mid - i + 1;
      j++;
    } else i++;

  const merge: number[] = [];
  let [i, j] = [start, mid + 1];

  while (i <= mid && j <= end)
    if (nums[i] <= nums[j]) merge.push(nums[i++]);
    else merge.push(nums[j++]);

  while (i <= mid) merge.push(nums[i++]);
  while (j <= end) merge.push(nums[j++]);

  for (let i = 0; i < merge.length; i++) nums[start + i] = merge[i];
  return count;
}

function reversePairs(nums: number[], start = 0, end = nums.length - 1): number {
  if (start >= end) return 0;
  const mid = start + ((end - start) >> 1);

  return (
    reversePairs(nums, start, mid) +
    reversePairs(nums, mid + 1, end) +
    mergeAndCount(nums, start, mid, end)
  );
}

new PerformanceTest(() => reversePairs(new NumberInput(100, 0, 1000).input));
