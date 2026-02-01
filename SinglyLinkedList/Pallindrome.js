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

  //reverse helper function
  reverse(slow) {
    let current = slow;
    let front = null;
    let prev = null;

    while (current) {
      front = current.next;
      current.next = prev;
      prev = current;
      current = front;
    }
    return prev;
  }

  //Pallindrome Optimal approach
  pallindromeOptimal() {
    //find middle
    if (!this.head || !this.head.next) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const newHead = this.reverse(slow.next);

    let first = this.head;
    let second = newHead;

    while (second !== null) {
      if (first.value !== second.value) {
        this.reverse(newHead);
        return false;
      }
      first = first.next;
      second = second.next;
    }
    this.reverse(newHead);
    return true;
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

const ans = res.pallindromeOptimal();
console.log(ans);
