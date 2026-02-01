//Find Middle Of LLinked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MiddleLL {
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
    return this.head;
  }

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

  middleOfLinkedList() {
    if (!this.head || !this.head.next) {
      return this.head;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next && slow) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

const res = new MiddleLL();

let head = res.append(10);
let second = res.append(20);
let third = res.append(30);
let fourth = res.append(40);
let fifth = res.append(50);
let sixth = third;

console.log(res.middleOfLinkedList());
