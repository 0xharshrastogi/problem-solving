import { NumberInput } from './generateInput';

type Sack = {
  value: number;
  weight: number;
};

function fractionalKnapsack(totalWeight: number, items: Sack[]): number {
  items.sort((item1, item2) => item2.value / item2.weight - item1.value / item1.weight);

  let totalValue = 0;
  for (const item of items) {
    if (totalWeight === 0) break;

    if (item.weight <= totalWeight) {
      totalValue += item.value;
      totalWeight -= item.weight;
    } else {
      totalValue = (item.value / item.weight) * totalWeight;
      totalWeight = 0;
      break;
    }
  }
  return totalValue;
}

const values = new NumberInput(10, 100, 1000).input;
const weight = new NumberInput(10, 1, 50).input;

fractionalKnapsack(
  240,
  values.map((value, i) => ({ value, weight: weight[i] }))
);
