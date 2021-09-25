function numOfCoins(amount: number, coins: number[]) {
  let coinCount = 0;
  coins.sort((a, b) => b - a);

  const requiredCoins = [];

  for (const value of coins) {
    if (amount === 0) return coinCount;

    if (value <= amount) {
      const count = Math.floor(amount / value);
      requiredCoins.push({ value, count });

      coinCount += count;
      amount -= count * value;
    }
  }
  return coinCount;
}

numOfCoins(5555, [1, 2, 5, 10, 20, 50, 100, 500, 2000]);
