export default class PerformanceTest {
  private callback: Function;

  constructor(callback: Function, count = 10) {
    this.callback = callback;
    this.test(count);
  }

  test(count = 10) {
    const result: number[] = [];
    let sum = 0;

    for (let i = 0; i < count; i++) {
      let prev = performance.now();

      this.callback();

      let time = performance.now() - prev;

      sum += time;
      result.push(time);
    }

    console.table(result);
    console.log("Average Time Taken: %ds", sum / count);
  }
}
