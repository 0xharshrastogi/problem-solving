import { ListBlock } from './block';
import { NumberInput } from './generateInput';
import { List } from './LinkedList';

type ListNode<T> = ListBlock<T> | null;

function reverseList<T>(current: ListNode<T>): ListNode<T> {
  let left: ListNode<T> = null;

  while (current) {
    const right: ListNode<T> = current.next;
    [current.next, left, current] = [left, current, right];
  }

  return left;
}

const list = new List(new NumberInput(10, 20, 30).input);
list.setHead(reverseList(list.getHead()));
console.log(...list);
console.log({ sum: 41878 + 72320 + 72918 + 33546 + 13315 + 16002 });
