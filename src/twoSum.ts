type NumTuple = [number, number];

function twoSum(nums: number[], target: number): NumTuple | null {
  nums = [...nums].sort((a, b) => a - b);
  let [start, end] = [0, nums.length - 1];

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum < target) start++;
    else if (sum > target) end--;
    else return [start, end];
  }
  return null;
}
