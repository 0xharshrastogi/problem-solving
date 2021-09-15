// https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/

import PerformanceTest from "./performanceTest";

function findMissingAndRepatingNumber(array: number[], len = array.length) {
  let xor = array[0];

  for (let i = 1; i < array.length; i++) xor ^= array[i];
  for (let i = 1; i <= array.length; i++) xor ^= i;

  const rightBit = xor & ~(xor - 1);
  let [missing, repeating] = [0, 0];

  for (let val of array)
    if (rightBit & val) missing ^= val;
    else repeating ^= val;

  for (let i = 1; i <= array.length; i++)
    if (rightBit & i) missing ^= i;
    else repeating ^= i;

  return { missing, repeating };
}
new PerformanceTest(() => findMissingAndRepatingNumber([7, 3, 4, 5, 5, 6, 2]));
