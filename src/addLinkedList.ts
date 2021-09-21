import { ListBlock, ListNode } from './block';
// document.querySelector('rootApp.button').addEventListener('click', () => {
//   state = !state;

//   if (state) rootApp.innerHTML = `<button>OFF</button>`;
//   else rootApp.innerHTML = `<button>ON</button>`;
// });

function addLinkedList(headA: ListNode<number>, headB: ListNode<number>) {
  const start = new ListBlock(-1);
  let result = start;

  let carry = 0;
  while (headA || headB) {
    let sum = 0;

    if (headA) {
      sum += headA.value;
      headA = headA.next;
    }

    if (headB) {
      sum += headB.value;
      headB = headB.next;
    }

    if (carry > 0) {
      sum += carry;
      carry = 0;
    }

    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum %= 10;
    }

    result.next = new ListBlock(sum);
    result = result.next;
  }

  if (carry > 0) result.next = new ListBlock(carry);

  return start.next;
}
