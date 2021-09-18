function fourSum(nums: number[], target: number) {
  if (!nums.length) return [];

  nums.sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const secondaryTarget = target - (nums[i] + nums[j]);
      let [start, end] = [j + 1, nums.length - 1];

      while (start < end) {
        const sum = nums[start] + nums[end];
        if (sum < secondaryTarget) start++;
        else if (sum > secondaryTarget) end--;
        else {
          const quadruple = [nums[i], nums[j], nums[start], nums[end]];
          result.push(quadruple);
          while (start < end && quadruple[2] === nums[start + 1]) start++;
          while (start < end && quadruple[3] === nums[end - 1]) end--;
        }
      }
      while (j < nums.length && nums[j] === nums[j + 1]) j++;
    }
    while (i < nums.length && nums[i] === nums[i + 1]) i++;
  }
  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// new PerformanceTest(() => fourSum(new NumberInput(30, 0, 10).input, 20));
