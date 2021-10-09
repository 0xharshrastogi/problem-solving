function powerSet(nums: number[]) {
  const s = 2 ** nums.length;
  const subset: number[][] = [];

  for (let i = 0; i < s; i++) {
    const set: number[] = [];
    for (let j = 0; j < nums.length; j++) if ((i & (1 << j)) > 0) set.push(nums[j]);
    subset.push(set);
  }

  return subset;
}

console.log(powerSet([1, 2, 2]));
