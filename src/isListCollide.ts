import { ListBlock, ListNode } from './block';
import { List } from './LinkedList';

function isListColliding<T>(listA: ListNode<T>, listB: ListNode<T>) {
  if (!listA || !listB) return null;
  let [currA, currB]: [ListNode<T>, ListNode<T>] = [listA, listB];
  let [lenA, lenB] = [0, 0];

  while (currA || currB) {
    if (currA) {
      lenA++;
      currA = currA.next;
    }

    if (currB) {
      lenB++;
      currB = currB.next;
    }
  }

  [currA, currB] = [listA, listB];

  let temp = lenA > lenB ? currA : currB;

  for (let i = 0; i < Math.abs(lenA - lenB); i++) temp = <ListBlock<T>>temp.next;

  if (lenA > lenB) currA = temp;
  else currB = temp;

  while (currA && currB) {
    if (currA.value === currB.value) return currA;
    currA = currA.next;
    currB = currB.next;
  }

  return null;
}

const l1 = new List<number>(4, 1, 8, 4, 5);
const l2 = new List<number>(5, 6, 1, 8, 4, 5);

// const result = isListColliding(l1.getHead(), l2.getHead());
const result = isListColliding(l1.getHead(), l2.getHead());
console.log(result);
