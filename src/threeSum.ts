function threeSum(nums: number[], target: number) {
  const LEN = nums.length;
  if (!LEN) return [];

  nums.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i < LEN; i++) {
    const complement = target - nums[i];
    let [start, end] = [i + 1, LEN - 1];

    while (start < end) {
      const sum = nums[start] + nums[end];
      if (sum < complement) start++;
      else if (sum > complement) end--;
      else {
        const triplet = [nums[i], nums[start], nums[end]];
        triplets.push(triplet);

        // removing Duplicated
        while (start < end && nums[start] === triplet[1]) start++;
        while (start < end && nums[end] === triplet[2]) end--;
      }
    }
    // Removing Duplicates
    while (i + 1 < LEN && nums[i] === nums[i + 1]) i++;
  }

  return triplets;
}
