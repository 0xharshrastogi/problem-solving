/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ListBlock, ListNode } from './block';
import { List } from './LinkedList';

function findMiddleOfList<T>(list: ListNode<T>) {
  let [slow, fast]: [ListNode<T>, ListNode<T>] = [list, list];

  while (fast?.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow && slow.next;
  }
  return slow;
}

function reverse<T>(curr: ListNode<T>) {
  let left: ListBlock<T> | null = null;

  while (curr) {
    const right = curr.next;
    [curr.next, left, curr] = [left, curr, right];
  }

  return left && left;
}

function isListPallindrome<T>(head: ListNode<T>) {
  if (!head || !head.next) return true;

  // reversing and joining list
  let middle = findMiddleOfList(head)!;
  middle.next = reverse(middle.next);
  middle = middle.next!;

  while (head && middle) {
    if (head.value !== middle.value) return false;
    head = head.next;
    middle = middle.next!;
  }

  return true;
}

const list = new List(10, 20, 30, 20, 10);
// const list = new List(10, 20, 30, 20, 10);
const result = isListPallindrome(list.getHead());
console.log(result);
