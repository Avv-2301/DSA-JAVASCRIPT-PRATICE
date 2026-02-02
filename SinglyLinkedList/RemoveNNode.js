//Remove N node from end of the linkedList

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

  //Remove N Node Brute Force
  removeBrute(N) {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    if (count === N) return this.head.next; //If we have to delete the tail of linked list;if count = 5 itself;

    let res = count - N;
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

  //Remove N Node Optimal Approach
  removeOptimal(N) {
    const dummy = new Node(0);
    dummy.next = this.head;

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i < N; i++) {
      fast = fast.next;
    }

    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    slow.next = slow.next.next;

    return dummy.next;
  }
}

const res = new LoopLL();

function arr(array) {
  for (let a of array) {
    res.append(a);
  }
}

const array = [1, 2, 3, 4, 5];
arr(array);
res.print();

let ans = res.removeOptimal(4);
// console.log(ans);
res.print();
