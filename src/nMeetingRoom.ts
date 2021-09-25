export default undefined;

class Time {
  start: number;
  end: number;
  interval: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
    this.interval = end - start;
  }
}

function nMeetingInARoom(start: number[], end: number[]) {
  const time = start
    .map((start, i) => new Time(start, end[i]))
    .sort((timeA, timeB) =>
      timeA.end === timeB.end ? timeA.interval - timeB.interval : timeA.end - timeB.end
    );

  let count = 0;

  let prevTime = -Infinity;
  time.forEach((curr) => {
    if (curr.start > prevTime) {
      prevTime = curr.end;
      count++;
    }
  });

  return count;
}
