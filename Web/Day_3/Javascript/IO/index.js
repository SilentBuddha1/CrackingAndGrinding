const fs = require("fs");

const hello = fs.readFileSync("./hello.txt", "utf-8");
//const contents = content.toString();

console.log(hello);


const welcome = fs.readFileSync("Welcome.txt", "utf-8");

console.log(welcome);


const thank = fs.readFileSync("thankyou.txt", "utf-8");

console.log(thank);


