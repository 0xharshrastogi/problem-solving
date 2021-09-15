import PerformanceTest from "./performanceTest";

type TimeIntervals = number[][];

function mergeIntervals(time: TimeIntervals) {
  time.sort((timeA, timeB) => timeA[0] - timeB[0]);
  console.log(time);

  let index = 0;
  for (let i = 1; i < time.length; i++) {
    if (time[index][1] >= time[i][0]) {
      time[index][1] = Math.max(time[index][1], time[i][1]);
      time[index][0] = Math.min(time[index][0], time[i][0]);
    } else {
      time[++index] = time[i];
    }
  }
  return time.slice(0, index + 1);
}

let timeInterval: TimeIntervals = [
  [6, 8],
  [1, 9],
  [2, 4],
  [4, 7],
];

new PerformanceTest(() => mergeIntervals(timeInterval), 1000);
