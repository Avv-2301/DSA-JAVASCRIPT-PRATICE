//First non repeating character

const nonRepeating = (str) => {
  const repeating = {};

  for (let char of str) {
    repeating[char] = (repeating[char] || 0) + 1;
  }

  console.log(repeating,"REPEAT");

  for (let char of str) {
    if (repeating[char] === 1) {
      return char;
    }
  }
};

let char = "aabbcdd";
let ans = nonRepeating(char);

console.log(ans);