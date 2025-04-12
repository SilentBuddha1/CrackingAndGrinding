// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("After 3 second it will be run...");
// }

// setTimeoutPromisified(3000).then(callback);





// function waitfor4s(resolve){
//     setTimeout(resolve,4000);
// }

// function main(){
//     console.log("Hello World");
// }

// waitfor4s(main);

// function random(resolve){
//     setTimeout(resolve,3000);
// }

// let p = new Promise(random);

// function callback() {
//     console.log("Promise...");
// }

// p.then(callback);



const fs = require("fs");

function readfiles(file){
    fs.readFile("hello.txt","utf-8", function(err, data){
        file(data);
    })
}

function readFile(fileName){
    return new Promise(readfiles);
}

const p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback);