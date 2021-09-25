function activitySelection(start: number[], end: number[]) {
  const activities = start.map((start, i) => [start, end[i]]);

  activities.sort((a, b) => {
    if (a[1] === b[1]) return a[1] - a[0] - (b[1] - b[0]);
    return a[1] - b[1];
  });

  let prevEnd = 0;
  let count = 0;

  for (const activity of activities) {
    if (activity[0] >= prevEnd) {
      count++;
      prevEnd = activity[1];
    }
  }

  return count;
}
