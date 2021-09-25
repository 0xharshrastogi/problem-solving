function rainWaterTrap(heights: number[]) {
  let [left, right] = [0, heights.length - 1];
  let [lMax, rMax] = [0, 0];
  let result = 0;

  while (left <= right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] > lMax) lMax = heights[left];
      else result += lMax - heights[left];
      left++;
    } else {
      if (heights[right] > rMax) rMax = heights[right];
      else result += rMax - heights[right];
      right--;
    }
  }

  return result;
}

console.log(rainWaterTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
