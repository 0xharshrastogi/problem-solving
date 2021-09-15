import { NumberInput } from "./generateInput";
import PerformanceTest from "./performanceTest";

function printDuplicate(data: number[] | NumberInput): number[] {
  let array: number[];

  if (data instanceof NumberInput) {
    array = data.input;
  } else array = data;

  const dups: number[] = [];
  for (let i in array) {
    console.log(array);
    let value = Math.abs(array[i]);

    if (array[value] >= 0) array[value] *= -1;
    else dups.push(value);
  }
  return dups;
}

new PerformanceTest(() => printDuplicate(new NumberInput(100, 1, 1000)), 2);
