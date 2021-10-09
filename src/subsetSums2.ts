function findSubset(nums: number[], res: number[][], index = 0, ds: number[] = []) {
  res.push([...ds]);

  for (let i = index; i < nums.length; i++) {
    if (i !== index && nums[i] === nums[i - 1]) continue;
    ds.push(nums[i]);
    findSubset(nums, res, index + 1, ds);
    ds.pop();
  }
  return res;
}

function subsetNonDups(nums: number[]) {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  console.log(findSubset(nums, result, 0));
}

subsetNonDups([1, 2, 2]);
