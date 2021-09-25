class Time {
  id: number;
  dead: number;
  profit: number;
  // profitHour: number;

  constructor(start: number, end: number, profit: number) {
    this.id = start;
    this.dead = end;
    this.profit = profit;
  }
}

function jobSequencing(id: number[], dead: number[], profits: number[]) {
  const time = id.map((_, i) => new Time(id[i], dead[i], profits[i]));
  time.sort((a, b) => b.profit - a.profit);

  let profit = 0;
  const deadline = new Array(id.length - 1).fill(-1);

  time.forEach((job) => {
    if (deadline[job.dead] === -1) {
      deadline[job.dead] = job.id;
      profit += job.profit;
      return;
    }

    for (let i = job.dead - 1; i >= 1; i--)
      if (deadline[i] === -1) {
        deadline[i] = job.id;
        profit += job.profit;
        break;
      }
  });

  return profit;
}

jobSequencing(
  [1, 2, 3, 4, 5, 6, 7, 8],
  [4, 5, 6, 6, 4, 2, 2, 2],
  [20, 60, 70, 65, 25, 80, 10, 22]
);
