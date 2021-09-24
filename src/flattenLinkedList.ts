import { ListBlock, ListNode } from './block';
import { List } from './LinkedList';

interface QuestionNode<T> extends ListBlock<T> {
  child: ListNode<T>;
}

class ListNode2<T> extends ListBlock<T> implements QuestionNode<T> {
  child: ListNode<T> = null;
  constructor(val: T) {
    super(val);
  }
}

function getInput() {
  const l1 = new ListNode2(5);
  l1.child = new List(7, 8, 30).getHead();
  const l2 = new ListNode2(10);
  l2.child = new List(20).getHead();
  const l3 = new ListNode2(19);
  l3.child = new List(22, 50).getHead();
  const l4 = new ListNode2(28);
  l4.child = new List(35, 40, 45).getHead();

  l1.next = l2;
  l2.next = l3;
  l3.next = l4;

  const result = new List();
  result.setHead(l1);
  return result;
}

function flattenList<T>(head: ListNode2<T> | ListBlock<T>) {
  if (!head) return null;
  const list2 = flattenList(<ListNode2<T>>head.next);
  if (!list2) return head;

  let merge = new ListBlock<T | null>(null);
  const start = merge;

  while (head && list2) {
    if (head.value <= list2.value) {
      merge.next = new ListBlock(head.value);
      merge = merge.next;
      head = head.child;
    }
  }
}
