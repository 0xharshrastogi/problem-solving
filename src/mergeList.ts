import { ListNode } from './block';
import { List } from './LinkedList';

function mergeList<T>(curA: ListNode<T>, curB: ListNode<T>) {
  if (!curA && !curB) return null;
  if (!curA) return curB;
  if (!curB) return curA;

  let [ptr, oPtr]: [ListNode<T>, ListNode<T>] =
    curA.value <= curB.value ? [curA, curB] : [curB, curA];
  let prev: ListNode<T> = null;
  const head = ptr;

  while (ptr && oPtr) {
    if (ptr.value <= oPtr.value) {
      prev = ptr;
      ptr = ptr && ptr.next;
    } else {
      if (prev) prev.next = oPtr;
      [oPtr, ptr] = [ptr, oPtr];
    }
  }

  // while (ptr && prev) {
  //   prev.next = ptr;
  //   prev = ptr;
  //   ptr = ptr.next;
  // }

  while (oPtr && prev) {
    prev.next = oPtr;
    prev = oPtr;
    oPtr = oPtr.next;
  }

  console.log(prev);

  return head;
}

const listA = new List(10, 20, 30, 40);
const listB = new List(15, 26, 37, 47);

listA.setHead(mergeList(listA.getHead(), listB.getHead()));
console.log(...listA);
