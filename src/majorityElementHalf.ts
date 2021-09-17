function majorityElement(nums: number[]): number {
  let [count, element] = [0, 0];
  for (const num of nums) {
    if (count === 0) element = num;
    count += num === element ? 1 : -1;
  }
  return element;
}
