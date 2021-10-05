function subsetSum(nums: number[], i = 0, csum = 0, sums: number[] = []) {
  if (i >= nums.length) return sums.push(csum);
  subsetSum(nums, i + 1, csum, sums);
  subsetSum(nums, i + 1, csum + nums[i], sums);
  return sums;
}

console.log(subsetSum([1, 2, 3]));
