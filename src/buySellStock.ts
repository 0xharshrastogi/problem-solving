import { NumberInput } from './generateInput';
import PerformanceTest from './performanceTest';

type Stock = number;

function buySellStock(prices: Stock[]): number {
  let [minPrice, maxProfit] = [Infinity, 0];
  for (const price of prices) {
    minPrice = Math.min(price, minPrice);
    maxProfit = Math.max(price - minPrice, maxProfit);
  }
  return maxProfit;
}

new PerformanceTest(() => buySellStock(new NumberInput(100, 1000, 10000).input));
