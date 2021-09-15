export default class PerformanceTest {
  private callback: Function;

  constructor(callback: Function, count = 10) {
    this.callback = callback;
    this.test(count);
  }

  test(count = 10) {
    const result: number[] = [];

    for (let i = 0; i < count; i++) {
      let prev = performance.now();
      this.callback();
      result.push(performance.now() - prev);
    }
    const average = result.reduce((sum = 0, current) => sum + current) / result.length;

    console.table(result);
    console.log("Average Time Taken: %ds", average);
  }
}
