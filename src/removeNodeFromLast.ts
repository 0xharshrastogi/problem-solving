import { ListNode } from './block';
import { List } from './LinkedList';

function removeFromLast<T>(head: ListNode<T>, count: number) {
  if (!head || !head.next) return null;

  let [front, back]: [ListNode<T>, ListNode<T>] = [head, head];

  for (let i = 0; front && i < count; i++) front = front.next;

  while (front && front.next) {
    front = front.next;
    back = back!.next;
  }

  if (back) back.next = back.next!.next;
  else head = head.next;

  return head;
}

const list = new List(10, 20);
list.setHead(removeFromLast(list.getHead(), 1));
