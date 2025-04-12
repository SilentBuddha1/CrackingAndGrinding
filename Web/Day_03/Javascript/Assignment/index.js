// setTimeout(() => {
//     console.log("Finished...");
// }, 2000);

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

delay(1000).then(() => console.log("2 Second Passes..."));