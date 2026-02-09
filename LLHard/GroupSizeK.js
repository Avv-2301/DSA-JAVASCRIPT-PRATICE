//Reverse Linked List in group in given size k

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
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

  reverseGroup(k) {
    const dummy = new Node(0);
    dummy.next = this.head;

    let groupPrev = dummy;

    while (true) {
      let kth = this.getKthNode(groupPrev, k);
      if (!kth) break;

      let groupNext = kth.next;

      let prev = groupNext;
      let curr = groupPrev.next;

      for (let i = 0; i < k; i++) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }

      let temp = groupPrev.next;
      groupPrev.next = kth;
      groupPrev = temp;
    }
    this.head = dummy.next;
  }

  getKthNode(curr, k) {
    while (curr && k > 0) {
      curr = curr.next;
      k--;
    }
    return curr;
  }
}

const res = new Solution();
function arr(array) {
  for (let value of array) {
    res.append(value);
  }
}

const array = [1, 2, 3, 4, 5, 6];
arr(array);
res.print();
console.log("Reverse :- ");
res.reverseGroup(2);
console.log("After reverse:-");
res.print();
