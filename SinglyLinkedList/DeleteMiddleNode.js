//Delete Middlenode of Linked List

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

  //Delete Middle Node Brute
  deleteMiddleBrute() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }

    let res = Math.floor(count / 2);
    current = this.head;

    while (current) {
      res--;
      if (res === 0) {
        break;
      }
      current = current.next;
    }
    current.next = current.next.next;
    return this.head;
  }

  //Delete Middle Optimal
  deleteMiddleOptimal() {
    if (!this.head || !this.head.next) {
      return null;
    }

    let fast = this.head.next;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;
    return this.head;
  }
}

const res = new LoopLL();

function arr(array) {
  for (let a of array) {
    res.append(a);
  }
}

const array = [1, 2, 3, 4];
arr(array);
res.print();

let ans = res.deleteMiddleBrute(4);
// console.log(ans);
res.print();
