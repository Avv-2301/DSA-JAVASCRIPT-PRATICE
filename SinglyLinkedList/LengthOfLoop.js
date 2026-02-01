//Length of Loop in Linked list

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

  //Length of Loop
  LengthOfLoopBrute() {
    let current = this.head;
    let map = new Map();
    let timer = 0;

    while (current) {
      if (map.has(current)) {
        let loopLength = timer - map.get(current);
        return loopLength;
      }
      map.set(current, timer);
      current = current.next;
      timer++;
    }
    return 0;
  }

  //Length Of Loop Optimal
  LengthOfLoopOptimal() {
    if (!this.head || !this.head.next) {
      return 0;
    }
    let fast = this.head;
    let slow = this.head;

    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return this.findLength(slow, fast);
      }
    }
    return 0;
  }
  findLength(slow, fast) {
    let count = 1;
    fast = fast.next;

    while (slow !== fast) {
      count++;
      fast = fast.next;
    }
    return count;
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

const ans = res.LengthOfLoopOptimal();
console.log(ans);
// res.print();
