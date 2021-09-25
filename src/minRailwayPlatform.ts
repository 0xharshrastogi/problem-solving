class Time {
  constructor(public arrival: number, public departure: number) {
    this.arrival = arrival;
    this.departure = departure;
  }
}

function minRailwayPlatform(arr: number[], dept: number[]) {
  arr.sort((a, b) => a - b);
  dept.sort((a, b) => a - b);

  let [platformReq, result] = [1, 1];
  let [i, j] = [1, 0];

  while (i < arr.length && j < dept.length) {
    if (arr[i] <= dept[j]) {
      platformReq++;
      i++;
    } else {
      platformReq--;
      j++;
    }

    result = Math.max(result, platformReq);
  }
  return result;
}
