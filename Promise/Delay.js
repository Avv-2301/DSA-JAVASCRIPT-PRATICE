//Simple promise based delay function

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

console.log("start");
delay(2000).then(() =>{
    console.log("middle")
})
console.log("end");