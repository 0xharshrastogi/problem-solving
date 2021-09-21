import { ListBlock } from './block';
import { NumberInput } from './generateInput';
import { List } from './LinkedList';
import PerformanceTest from './performanceTest';

function middleOfList<T>(current: ListBlock<T> | null) {
  let [slow, fast] = [current, current];

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow && slow.value;
}

new PerformanceTest(() => middleOfList(new List(new NumberInput(10).input).getHead()));
