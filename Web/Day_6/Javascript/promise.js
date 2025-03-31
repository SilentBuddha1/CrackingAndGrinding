function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}


setTimeoutPromisified(1000).then(function(callback){
    console.log("callback...");
})