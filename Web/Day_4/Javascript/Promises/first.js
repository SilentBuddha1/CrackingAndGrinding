function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback(){
    console.log("After 3 second it will be run...");
}

setTimeoutPromisified(3000).then(callback);