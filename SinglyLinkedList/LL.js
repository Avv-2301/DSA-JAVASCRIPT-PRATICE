//to create linked list

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //append a value in linkedlist
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
    this.size++;
  }

  //print a linked list
  printLL() {
    let temp = this.head;
    let result = " ";

    while (temp) {
      result += temp.value + "->";
      temp = temp.next;
    }
    console.log(result);
  }

  deleteANode(value) {
    if (this.head && this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    } else {
      let current = this.head;

      while (current && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) {
        current.next = current.next.next;
        this.size--;
      }
    }
  }
}

const res = new LL();
res.append(10);
res.append(20);
res.append(30);
res.append(40);
res.deleteANode(30);
res.printLL();
