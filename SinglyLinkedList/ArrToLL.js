//Array to Linked List

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Solution {
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
  }

  printLL() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + "->"; 
      current = current.next;
    }
    console.log(result);
  }
}

const res = new Solution();
let array = [30,40,50];
const arr = (array) =>{
    for(let value of array){
        res.append(value);
    }
}
arr(array);
res.printLL();