import { ListBlock, ListNode } from './block';
import { List } from './LinkedList';

function startingNodeInLoop<T>(head: ListNode<T>) {
  if (!head) return null;
  let [slow, fast] = [head, head];

  while (slow && fast && fast.next) {
    slow = <ListBlock<T>>slow.next;
    fast = <ListBlock<T>>fast.next.next;

    if (slow === fast) {
      fast = head;
      while (slow !== fast) {
        slow = <ListBlock<T>>slow.next;
        fast = <ListBlock<T>>fast.next;
      }
      return fast;
    }
  }

  return null;
}

// const n1 = new ListBlock(1);
// const n2 = new ListBlock(2);
// n1.next = n2;
// n2.next = new ListBlock(3);
// n2.next.next = new ListBlock(4);
// n2.next.next.next = n2.next;

console.log(startingNodeInLoop(new List(1, 2, 3, 4, 5, 6, 7).getHead()));
