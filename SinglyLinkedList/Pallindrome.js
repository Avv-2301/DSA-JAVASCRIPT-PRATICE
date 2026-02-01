//Check if Linked List is pallindrome or not

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

  //Linked List pallindrome
  pallindromeBruteForce() {
    let stack = [];
    let current = this.head;

    while (current) {
      stack.push(current.value);
      current = current.next;
    }
    current = this.head;

    while (current) {
      const top = stack.pop();
      if (current.value !== top) {
        return false;
      }
      current = current.next;
    }
    return true;
  }
}

const res = new LoopLL();

function arr(array) {
  for (let a of array) {
    res.append(a);
  }
}

const array = [1, 2, 3, 4, 2, 1];
arr(array);
res.print();

const ans = res.pallindromeBruteForce();
console.log(ans);
