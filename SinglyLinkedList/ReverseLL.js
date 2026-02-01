//Reverse a Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ReverseLL {
  constructor() {
    this.head = null;
  }

  //Append value in Linked List
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
    return this.head;
  }

  //Print A Linked list
  print() {
    if (!this.head || !this.head.next) {
      return this.head;
    }

    let current = this.head;
    let result = " ";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result);
  }

  //Reverse Linked List Brute force approach
  ReverseBrute() {
    const stack = [];
    let current = this.head;
    while (current) {
      stack.push(current.value);
      current = current.next;
    }

    current = this.head;

    while (current) {
      current.value = stack.pop();
      current = current.next;
    }
    return this.head;
  }

  ReverseBetter() {
    let current = this.head;
    let front = null;
    let prev = null;

    while (current) {
      front = current.next;
      current.next = prev;
      prev = current;
      current = front;
    }
    return prev;
  }

  ReverseRecursive(head) {
    if (head === null || head.next === null) {
      return this.head;
    }
    let newHead = this.ReverseRecursive(head.next);
    head.next.next = this.head;
    head.next = null;
    return newHead;
  }
}

const res = new ReverseLL();

//Creating Linked List
const arr = (array) => {
  for (value of array) {
    res.append(value);
  }
};
let array = [1, 2, 3, 4, 5];
const ans = arr(array);
res.print();
// res.ReverseBrute()
// res.ReverseBetter();
res.ReverseRecursive(ans);
res.print();
