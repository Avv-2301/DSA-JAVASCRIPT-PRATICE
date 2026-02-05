//Delete a node in Linked List

class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class Solution {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this.head;
  }

  //print forward
  print() {
    let result = "";
    if (!this.head || !this.head.next) {
      return this.head;
    }

    let current = this.head;

    while (current !== null) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  //Delete a given Node

  deleteNode(node) {
    if (!this.head || !node) {
      return null;
    }

    // If deleting the head
    if (node.value === this.head) {
      this.head = node.next;

      if (this.head) {
        this.head.prev = null;
      }

      node.next = null;
      return this.head;
    }

    // Re-link previous node
    if (node.prev) {
      node.prev.next = node.next;
    }

    // Re-link next node
    if (node.next) {
      node.next.prev = node.prev;
    }

    // Clean up removed node
    node.prev = null;
    node.next = null;

    return this.head;
  }
}

const res = new Solution();

function arr(array) {
  for (let value of array) {
    res.append(value);
  }
}
let array = [1, 2, 3, 4, 5, 6];
arr(array);
console.log("Printing:-");
res.print();
res.deleteNode(res.head.next.next);
console.log("After Deleting:-");
res.print();
