import { ListBlock } from './block';
import { len } from './lengthOfList';
import { List } from './LinkedList';

function findDistantNode<T>(list: ListBlock<T>, count: number) {
  let front = list;
  for (let i = 0; front && i < count; i++) front = <ListBlock<T>>front.next;
  return front;
}

function rotatingList<T>(head: ListBlock<T>, count: number) {
  if (!head) return head;
  if (count <= 0) return head;

  const length = len(head);
  count %= length;

  let front = findDistantNode(head, count);
  let back = head;

  while (front && front.next && back) {
    front = front.next;
    if (back.next) back = back.next;
  }

  front.next = head;
  head = <ListBlock<T>>back.next;
  back.next = null;

  return head;
}

const head = rotatingList(<ListBlock<number>>new List(10, 20, 30, 40, 50).getHead(), 5);
const list = new List();
list.setHead(head);

console.log(...list);
