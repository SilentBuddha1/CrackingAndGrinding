// //Sum of two numbers
// function sum(a,b){
//     return a + b;
// }

// let ans = sum(10,20);
// console.log(ans);

// //Sum of 1 to n numbers

// function sums(n){
//     let ans = 0;
//     for(i = 0; i <= n; i++){
//         ans = ans + i; // ans += i
//     }
//     return ans;
// }

// const result = sums(100);
// console.log(result);

// //Optimize Version which run faster too...
function sum(n){
    return (n * (n + 1))/2;
}

let result = sum(100);
console.log(result);

// function sumss(a,b){
//     return parseInt(a) + parseInt(b); //Safety purpose
// }

// let results = sumss("10",20);
// console.log(results);
