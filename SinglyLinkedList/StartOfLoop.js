//Starting point of Loop in Linked List

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
    return node;
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

  StartOfLoopBrute() {
    let current = this.head;
    let map = new Map();

    while (current !== null) {
      if (map.has(current)) {
        return current.value;
      }
      map.set(current, 1);
      current = current.next;
    }
    return null;
  }

  StartOfLoopOptimal() {
    if (!this.head || !this.head.next) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next && slow) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        slow = this.head;

        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }
        return slow.value;
      }
    }
    return null;
  }
}

const res = new LoopLL();

// function arr(array) {
//   for (let a of array) {
//     res.append(a);
//   }
// }

// const array = [1, 2, 3, 4, 5];
// arr(array);

let first = res.append(1);
let second = res.append(2);
let third = res.append(3);
let fourth = res.append(4);
let fifth = res.append(5);
fifth.next = third;

const ans = res.StartOfLoopOptimal();
console.log(ans);
// res.print();
