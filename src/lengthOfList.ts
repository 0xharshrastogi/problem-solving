import { ListNode } from './block';
import { List } from './LinkedList';

export function len<T>(list: List<T> | ListNode<T>) {
  if (!list) return 0;

  let head = list instanceof List ? list.getHead() : list;
  if (!head) return 0;

  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }

  return count;
}
