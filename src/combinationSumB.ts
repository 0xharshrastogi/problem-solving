function combinationSumB(candidates: number[], target: number) {
  candidates.sort((a, b) => a - b);

  const result: number[][] = [];

  return (function calc(index: number, target: number, vals: number[]) {
    if (target === 0) {
      result.push(Array.from(vals));
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      if (candidates[i] > target) break;

      vals.push(candidates[i]);
      calc(index + 1, target - candidates[i], vals);
      vals.pop();
    }

    return result;
  })(0, target, []);
}

console.log(combinationSumB([10, 1, 2, 7, 6, 1, 5], 8));
