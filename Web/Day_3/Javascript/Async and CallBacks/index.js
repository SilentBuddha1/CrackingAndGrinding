const fs = require("fs");

function read(err, data){
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
}

fs.readFile("hello.txt", "utf-8", read); //third

fs.readFile("how.txt", "utf-8", read); //fourth

setTimeout(() => {
    console.log("I am Fine..."); //first
}, 0)
console.log("Done!"); //second