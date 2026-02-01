//Segregate Odd Even

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

  //Segregate through index
  SegregateIndex() {
    let odd = this.head;
    let even = this.head.next;
    let evenHead = even;

    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
    return this.head;
  }

  //Segregate Through value
  SegregateValue() {
    let evenHead = null;
    let evenTail = null;
    let oddHead = null;
    let oddTail = null;

    let current = this.head;

    while (current) {
      if (current.value % 2 === 0) {
        if (!evenHead) {
          evenHead = evenTail = current;
        } else {
          evenTail.next = current;
          evenTail = current;
        }
      } else {
        if (!oddHead) {
          oddHead = oddTail = current;
        } else {
          oddTail.next = current;
          oddTail = current;
        }
      }
      current = current.next;
    }
    if (!oddHead) return evenHead;
    if (!evenHead) return oddHead;

    evenTail.next = oddHead;
    oddTail.next = null;
    return evenHead;
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

res.head = res.SegregateValue();
// console.log(ans);
res.print();
