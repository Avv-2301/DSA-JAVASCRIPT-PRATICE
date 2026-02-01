//Detect a Loop in LinkedList

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

  //Brute force approach to Detect Loop
  DetectLoopBrute() {
    let map = new Map();
    let current = this.head;

    while (current) {
      if (map.has(current)) {
        return true;
      }
      map.set(current, 1);
      current = current.next;
    }
    return false;
  }

  DetectLoopOptimal() {
    if (this.head === null || this.head.next === null) {
      return this.head;
    }
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next && slow) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
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
// fifth.next = third;

// const ans = res.DetectLoopBrute();
const ans = res.DetectLoopOptimal();
console.log(ans);
// res.print();
