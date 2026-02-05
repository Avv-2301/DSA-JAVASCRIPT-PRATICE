//Doubly Linked List

class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class Solution {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this.head;
  }

  //print forward
  print() {
    let result = "";
    if (!this.head || !this.head.next) {
      return this.head;
    }

    let current = this.head;

    while (current !== null) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  //prepend value
  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return this.head;
  }

  //print backward
  printBackward() {
    let current = this.tail;
    let result = "";

    while (current) {
      result += current.value + "->";
      current = current.prev;
    }
    console.log(result + "null");
  }
}

const res = new Solution();

function arr(array) {
  for (let value of array) {
    res.append(value);
  }
}
let array = [1, 2, 3, 4, 5, 6];
arr(array);
console.log("Before prepend:-");
res.print();

res.prepend(7);
console.log("After prepend");
res.print();
console.log("Printing Backward");
res.printBackward();
