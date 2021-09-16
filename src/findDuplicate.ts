import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

function printDuplicate(data: number[] | NumberInput): number[] {
  let array: number[];
  if (data instanceof NumberInput) {
    array = data.input;
  } else array = data;

  const dups: number[] = [];
  for (const i in array) {
    // eslint-disable-next-line no-console
    console.log(array);
    const value = Math.abs(array[i]);

    if (array[value] >= 0) array[value] *= -1;
    else dups.push(value);
  }
  return dups;
}

new PerformanceTest((): number[] => printDuplicate(new NumberInput(100, 1, 1000)), 2);
