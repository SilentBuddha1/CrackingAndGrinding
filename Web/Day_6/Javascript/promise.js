// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromisified(1000).then(function(callback){
//     console.log("callback...");
// })

//Callback Hell

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Print");
//         }, 3000)
//     }, 3000)
// },1000)

//Promise Chaining

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromisified(1000).then(function () {
  console.log("Hi");
  return setTimeoutPromisified(3000).then(function () {
    console.log("Hello");
    return setTimeoutPromisified(3000).then(function () {
      console.log("Print");
    });
  });
});
