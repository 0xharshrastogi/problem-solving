import { NumberInput } from "./generateInput";
import PerformanceTest from "./performanceTest";

function dutchNationalFlag(array: number[]) {
  const len = array.length - 1;
  let [low, mid, high] = [0, 0, len];

  while (mid <= high)
    if (array[mid] === 1) mid++;
    else if (array[mid] === 0) [array[low], array[mid]] = [array[mid++], array[low++]];
    else [array[high], array[mid]] = [array[mid], array[high--]];
}

new PerformanceTest(() => dutchNationalFlag(new NumberInput(100, 0, 2).input), 20);
