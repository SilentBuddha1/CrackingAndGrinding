//Simple Funtion

// function square(a){
//     return a * a ;
// }

// const Result = square(10);
// console.log(Result); 

//Introducing Arrow Function

// const Square = (a) => a * a;

// const Result = Square(20);

// console.log(Result);

//Introducing Map in the Game

// const number = [1,2,3,4,5];

// const Result = number.map((i) => i * i );

// console.log(Result);

//Simple Ways 

// const number = [1,2,3,4,5,6,7,8,9,10];
// let arr = [];

// for(i = 0; i < number.length; i++ ){
//     arr.push(number[i] * number[i]);
// }

// console.log(arr);


//Filter

const number = [1,2,3,4,5,6,7,8,9,10];

const answer = number.filter((i) => i % 2 == 0);

console.log(answer);
