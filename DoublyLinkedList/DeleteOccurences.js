//Delete all occurences of a key in DLL

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

  deletOccurence(key) {
    let temp = this.head;

    while (temp) {
      if (temp.value === key) {
        if (temp.value === this.head) {
          head = this.head.next;
        } else {
          let prevNode = temp.prev;
          let nextNode = temp.next;

          if (nextNode) nextNode.prev = prevNode;
          if (prevNode) prevNode.next = nextNode;

          temp = nextNode;
        }
      } else {
        temp = temp.next;
      }
    }
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
res.deletOccurence(6);
console.log("After :-");
res.print();
