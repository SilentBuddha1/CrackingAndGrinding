function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback(){
    console.log("After 3 second it will be run...");
}

setTimeoutPromisified(3000).then(callback);


function waitfor4s(resolve){
    setTimeout(resolve,4000);
}

function main(){
    console.log("Hello World");
}

waitfor4s(main);