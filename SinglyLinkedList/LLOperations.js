//Different types of operations in Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Operations {
  constructor() {
    this.head = null;
  }

  //Append Value in Linked List
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
    return this.head;
  }

  //Print Linked List
  print() {
    let current = this.head;
    let result = " ";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result);
  }

  //Search in Linked List
  search(target){
    if(!this.head) return this.head;
    let current = this.head;

    while(current){
        if(current.value === target){
            return true;
        }else{
            current = current.next;
        }
    }
    return false;
  }

  //Count in Linked List
  countElement(){
    let count = 0;
    let current = this.head;

    while(current){
        count++;
        current = current.next;
    }
    return count;
  }

  //Sum of Linked List
  sumOfLL(){
    let sum = 0;
    let current = this.head;

    while(current){
        sum += current.value;
        current = current.next;
    }
    return sum;
  }

  //Convert Linked List to Array
  convertToArr(){
    let result = [];
    let current = this.head;

    while(current){
        result.push(current.value);
        current = current.next;
    }
    return result;
  }
}

const res = new Operations();

//Array to linkedlist
const ArrToLL = (arr) => {
  for (let a of arr) {
    res.append(a);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7];
ArrToLL(array);

res.print();
console.log(res.search(7));
console.log(res.countElement());
console.log(res.sumOfLL());
console.log(res.convertToArr())