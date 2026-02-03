//Add One To linked List

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

  //Add one recursive
  addOne(){
    let carry = this.addOneUtil(this.head);

    if(carry){
        const newNode = new Node(carry);
        newNode.next = this.head;
        this.head = newNode;
    }
  }

  addOneUtil(head){
    if(!head) return 1;

    let carry = this.addOneUtil(head.next);
    let sum = head.value + carry;
    head.value = sum %10;
    return Math.floor(sum /10);
   }
}

const res = new LoopLL();

function arr(array) {
  for (let a of array) {
    res.append(a);
  }
}

const array = [9,9,9,9];
arr(array);
res.print();

let ans = res.addOne();
// console.log(ans);
res.print();
