export default class PerformanceTest {
  private callback: () => void;

  constructor(callback: () => void, count = 10) {
    this.callback = callback;
    this.test(count);
  }

  test(count = 10): void {
    const result: number[] = [];
    let sum = 0;

    for (let i = 0; i < count; i++) {
      const prev = performance.now();

      this.callback();

      const time = performance.now() - prev;

      sum += time;
      result.push(time);
    }

    console.table(result);
    console.log('Average Time Taken: %ds', sum / count);
  }
}
