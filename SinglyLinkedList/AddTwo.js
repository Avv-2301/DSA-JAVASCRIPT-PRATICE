// Add Two Numbers in Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LoopLL {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return node;
  }

  print(head = this.head) {
    let current = head;
    let result = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  // Add two linked lists
  addTwo(head1, head2) {
    const dummy = new Node(0);
    let current = dummy;
    let l1 = head1;
    let l2 = head2;
    let carry = 0;

    while (l1 || l2 || carry) {
      let sum = carry;

      if (l1) {
        sum += l1.value;
        l1 = l1.next;
      }

      if (l2) {
        sum += l2.value;
        l2 = l2.next;
      }

      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
    }

    return dummy.next;
  }
}

// Helper to create a list from array
function createList(array) {
  const list = new LoopLL();
  for (let val of array) {
    list.append(val);
  }
  return list.head;
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

const head1 = createList(array1);
const head2 = createList(array2);

const ll = new LoopLL();

console.log("List 1:");
ll.print(head1);

console.log("List 2:");
ll.print(head2);

const ans = ll.addTwo(head1, head2);

console.log("Sum:");
ll.print(ans);
