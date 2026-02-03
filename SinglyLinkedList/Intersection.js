//Find intersection of two linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function append(head, value) {
  const node = new Node(value);

  if (!head) {
    head = node;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  return node;
}

class LoopLL {
  constructor() {
    this.head = null;
  }

  //Append value in Linked List

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

  //Intersection Brute Force
  IntersectionBrute(head1, head2) {
    console.log(head1, head2);
    const set = new Set();
    let currentOne = head1;
    let currentTwo = head2;

    while (currentOne) {
      set.add(currentOne);
      currentOne = currentOne.next;
    }

    while (currentTwo) {
      if (set.has(currentTwo)) {
        return currentTwo;
      }
      currentTwo = currentTwo.next;
    }
    return null;
  }

  //Intersection Optimal
  IntersectionOptimal(head1, head2) {
    let d1 = head1;
    let d2 = head2;

    while (d1 !== d2) {
      d1 = d1 === null ? head2 : d1.next;
      d2 = d2 === null ? head1 : d2.next;
    }
    return d1;
  }
}

const res = new LoopLL();

function arr(array) {
  for (let a of array) {
    res.append(a);
  }
}

let head = new Node(1);
append(head, 3);
append(head, 1);
append(head, 2);
append(head, 4);
let head1 = head;
head = head.next.next.next; // Intersection point
let headSec = new Node(3);
let head2 = headSec;
headSec.next = head;

let ans = res.IntersectionBrute();
console.log(ans);
