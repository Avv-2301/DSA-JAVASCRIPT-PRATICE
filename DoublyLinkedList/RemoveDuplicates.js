//Remove duplicates from a DLL

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Solution {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    return this.head;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  removeDuplicates() {
    let current = this.head;

    while (current && current.next !== null) {
      let nextNode = current.next;

      while (nextNode && nextNode.value === current.value) {
        nextNode = nextNode.next;
      }
      current.next = nextNode;
      if (nextNode) nextNode.prev = current;
      current = current.next;
    }
    return this.head;
  }
}

const res = new Solution();

function arr(array) {
  for (let value of array) {
    res.append(value);
  }
}

const array = [1, 2, 3, 4, 5, 6, 6, 6];
arr(array);
console.log("Before :-");
res.print();
res.removeDuplicates(6);
console.log("After :-");
res.print();
