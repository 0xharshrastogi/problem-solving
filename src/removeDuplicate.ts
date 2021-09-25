function removeDuplicates(nums: number[]) {
  const len = nums.length;
  let [i, j] = [0, 0];

  while (i < len) {
    nums[j] = nums[i];
    while (nums[i] === nums[j]) i++;
    j++;
  }
  return nums;
}

removeDuplicates([0, 0, 1, 1, 2, 2, 3, 4, 5, 6]);
