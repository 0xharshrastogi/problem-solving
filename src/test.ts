type ResultType = {
  units: number;
  value: number;
  closest: number;
};

const result: ResultType[] = [{ closest: Infinity, value: 0, units: 0 }];

function checkAndPrint(i: number) {
  const val = 0.063 * i;
  if (Math.ceil(val) - val < result[result.length - 1].closest)
    result.push({ units: i, value: val, closest: Math.ceil(val) - val });
}

for (let i = 1; i < 176; i++) {
  checkAndPrint(i);
}

console.log(result.reverse());
