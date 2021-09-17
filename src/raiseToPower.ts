import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

function raiseToPower(val: number, power: number): number {
  if (power === 0) return 1;
  if (power === 1) return val;

  return power % 2 === 0
    ? raiseToPower(val * val, power >> 1)
    : val * raiseToPower(val, power - 1);
}

new PerformanceTest(() =>
  new NumberInput(10, 0, 20).input.forEach((val) => raiseToPower(34, val))
);
