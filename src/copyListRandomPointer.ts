import { ListBlock, ListNode } from './block';

class RandomBlock<T> extends ListBlock<T> {
  random: ListNode<T> = null;
  next: RandomBlock<T> | null = null;
  constructor(val: T, random?: ListNode<T>) {
    super(val);
    if (random) this.random = random;
  }
}

function copyListRandomPointer<T>(curr: RandomBlock<T>) {
  if (!curr) return null;
  const head = curr;

  while (curr) {
    const copy = new RandomBlock(curr.value);
    copy.next = curr.next;
    curr.next = copy;

    curr = curr.next.next!;
  }

  curr = head;

  while (curr) {
    curr.next!.random = curr.random ? curr.random.next : null;
    curr = curr.next!.next!;
  }

  curr = head;
  const start = head.next;
  let resPtr = start;

  while (curr) {
    curr.next = curr.next!.next;
    curr = curr.next!;

    resPtr!.next = resPtr?.next ? resPtr.next.next : null;
    resPtr = resPtr!.next;
  }

  return start;
}
