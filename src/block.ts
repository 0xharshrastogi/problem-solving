class Block<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

export class ListBlock<T> extends Block<T> {
  next: ListBlock<T> | null = null;
  prev: ListBlock<T> | null = null;
  constructor(value: T) {
    super(value);
  }
}
