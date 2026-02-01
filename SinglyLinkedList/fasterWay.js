//Faster way to generate linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  append(arr) {
    let head = null;
    let tail = null;

    for (let value of arr) {
      const node = new Node(value);
      if (!head) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
    }
    return head;
  }
}

const res = new Solution();
const arr = [25, 50, 75, 100];
const ans = res.append(arr);

function print(ans) {
  let current = ans;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
print(ans);
