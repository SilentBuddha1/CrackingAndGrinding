
// // num.forEach(function(i){
// //     console.log(i);
// // } );

// //map, filter, reduce 


// let nums = num.filter((value)=>{
//     return value>4
// });


// console.log(nums);






// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//       if (test(element)) {
//         passed.push(element);
//       }
//     }
//     return passed;
//   }
  
//   console.log(filter(SCRIPTS, script => script.living));


// console.log(SCRIPTS);
 
// console.log(SCRIPTS[1].living);

// let pass = SCRIPTS.filter((variable) =>  variable.living == true );

// console.log(pass[1]);

// let num = [1,2,3,4,5,6,7,8,9,10];

// let nums = num.filter((value)=>value>4);


// let nums = num.map(i => i*i);




// console.log(nums);


// let nums = num.reduce((acc,i) => ,0);

// console.log(nums);

//setTimeout(callback,time ms);





const fs = require('fs');

const content = fs.readFile("./Hello.txt","utf-8", dataPath);
// const contents = content.toString();
// console.log(content);

function dataPath(err,data){
    if(err){
    console.log(err);
}else{
    console.log(data);
}
}

// import { SCRIPTS } from './scripts';