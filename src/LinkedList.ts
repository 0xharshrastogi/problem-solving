import { ListBlock } from './block';
type ListNode<T> = ListBlock<T> | null;

export class List<T> {
  private head: ListNode<T> = null;

  constructor(...vals: T[]) {
    if (vals.length === 1 && Array.isArray(vals)) this.insertInitials(vals);
    else if (vals.length > 0) this.insertInitials(vals);
  }

  getHead(): ListNode<T> {
    return this.head;
  }

  setHead(head: ListNode<T>): void {
    this.head = head;
  }

  private insertInitials(vals: T[]) {
    let prev: ListNode<T> = null;

    for (const values of vals)
      if (!this.head) {
        this.head = new ListBlock(values);
        prev = this.head;
      } else {
        if (!prev) continue;
        prev.next = new ListBlock(values);
        prev = prev.next;
      }
  }

  add(value: T): List<T> {
    if (!this.head) {
      this.head = new ListBlock(value);
      return this;
    }

    let current: ListNode<T> = this.head;
    while (current.next) current = current.next;
    current.next = new ListBlock(value);

    return this;
  }

  *[Symbol.iterator](): Generator<T, void, unknown> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
