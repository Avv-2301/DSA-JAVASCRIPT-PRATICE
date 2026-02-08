//Find Pairs with Given Sum in Sorted Array

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

  findPairBrute(key) {
    let current = this.head;
    let ds = [];
    while (current) {
      let temp = current.next;
      while (temp && current.value + temp.value <= key) {
        if (current.value + temp.value === key) {
          ds.push([temp.value, current.value]);
        }
        temp = temp.next;
      }
      current = current.next;
    }
    return ds;
  }

  findPairOptimal(sum) {
    let left = this.head;
    let right = this.tail;
    let ds = [];

    while (left && right && left !== right && left.prev !== right) {
      const currentSum = left.value + right.value;
      if (currentSum === sum) {
        ds.push([left.value, right.value]);
        left = left.next;
        right = right.prev;
      } else if (currentSum < sum) {
        left = left.next;
      } else {
        right = right.prev;
      }
    }
    return ds;
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
console.log(res.findPairOptimal(5));
// console.log("After :-");
// res.print();
