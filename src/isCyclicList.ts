import { ListNode } from './block';

function isCyclicList<T>(listA: ListNode<T>) {
  if (!listA) return false;
  let [slow, fast]: [ListNode<T>, ListNode<T>] = [listA, listA];

  while (fast) {
    slow = slow!.next;
    fast = fast.next!.next;
    if (slow === fast) return true;
  }

  return false;
}
