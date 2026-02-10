//Rotate a Linked List to right by k times

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    return this.head;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  RotateLL(k) {
    if (!this.head || !this.head.next || k === 0) {
      return;
    }

    let tail = this.head;
    let length = 1;

    while (tail.next) {
      tail = tail.next;
      length++;
    }

    tail.next = this.head;
    k = k % length;
    if (k === 0) {
      return this.head;
    }

    let stepsK = length - k;
    let newTail = this.head;

    for (let i = 1; i < stepsK; i++) {
      newTail = newTail.next;
    }
    this.head = newTail.next;
    newTail.next = null;

    return this.head;
  }
}

let res = new Solution();

function arr(array) {
  for (let value of array) {
    res.append(value);
  }
}

let array = [1, 2, 3, 4, 5];
arr(array);
console.log("Original List:-");
res.print();
console.log("Rotated List:-");
res.RotateLL(2);
res.print();
