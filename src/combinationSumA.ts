function combinationSumA(nums: number[], target: number) {
  const result: number[][] = [];
  return (function calc(index: number, target: number, vals: number[]) {
    if (index === nums.length) {
      target === 0 && result.push(Array.from(vals));
      return result;
    }

    if (nums[index] <= target) {
      vals.push(nums[index]);
      calc(index, target - nums[index], vals);
      vals.pop();
    }
    calc(index + 1, target, vals);

    return result;
  })(0, target, []);
}

console.log(combinationSumA([2, 3, 6, 7], 7));
