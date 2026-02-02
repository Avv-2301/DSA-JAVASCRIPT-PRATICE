//Sort a Linked List of 0's, 1's, and 2's

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

  //Sort Brute Force
  sortBrute() {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    let current = this.head;

    while (current) {
      if (current.value === 0) count0++;
      else if (current.value === 1) count1++;
      else count2++;
      current = current.next;
    }
    current = this.head;
    while (current) {
      if (count0) {
        current.value = 0;
        count0--;
      } else if (count1) {
        current.value = 1;
        count1--;
      } else if (count2) {
        current.value = 2;
        count2--;
      }
      current = current.next;
    }
    return this.head;
  }

  //Sort 0 1 2 Optimal
  SortOptimal() {
    let zeroHead = new Node(0);
    let oneHead = new Node(0);
    let secondHead = new Node(0);

    let zero = zeroHead;
    let one = oneHead;
    let two = secondHead;

    let current = this.head;

    while (current !== null) {
      if (current.value === 0) {
        zero.next = current;
        zero = current;
      } else if (current.value === 1) {
        one.next = current;
        one = current;
      } else if (current.value === 2) {
        two.next = current;
        two = current;
      }
      current = current.next;
    }
    zero.next = oneHead.next ? oneHead.next : secondHead.next;
    one.next = secondHead.next ? secondHead.next : null;
    two.next = null;

    return zeroHead.next;
  }
}

const res = new LoopLL();

function arr(array) {
  for (let a of array) {
    res.append(a);
  }
}

const array = [0, 1, 0, 2, 2, 1, 0, 1, 1, 2, 0];
arr(array);
res.print();

let ans = res.SortOptimal();
// console.log(ans);
res.print();
