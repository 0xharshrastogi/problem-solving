function subArrayWithXOR(nums: number[], target: number) {
  const count = 0;

  const xorArr = (function () {
    const arr: number[] = new Array(nums.length);
    arr[0] = nums[0];
    for (let i = 1; i < nums.length; i++) arr[i] ^= arr[i - 1];
    return arr;
  })();

  const xorStore = new Map<number, number>();

  for (const num of xorArr) {
    if (xorStore.has(target ^ num)) {
    }
  }
}
