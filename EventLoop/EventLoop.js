//Event Lopp in javascript

console.log("start");

setTimeout(() => {
  console.log("Timeout done");
}, 0);

async function call(){
    await null;
    console.log("function");
}

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");

call();