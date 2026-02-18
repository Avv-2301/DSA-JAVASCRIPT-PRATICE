//Synchronous code

console.log("start");

function heavyTask(){
    for(let i=0; i< 10; i++){
        console.log(i);
    }
}

heavyTask();

console.log("end")