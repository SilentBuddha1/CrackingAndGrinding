// let Name = "Ramchandra";
// const age = 23;
// var isStudent = true;

// console.log(Name);
// console.log(age);
// console.log(isStudent);


function solve(arr) {

    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].gender === "male" && arr[i].age > 18) {
            arr2.push(arr[i]);
        }
    }
    return arr2;

}

const users = [{
    name: "Ramchadra",
    age: 23,
    gender:"male"
}, {
    name: "Punam",
    age: 21,
    gender: "female"
}, {
    name: "Shyam",
    age: 14,
    gender: "male"
}]

let ans = solve(users);

console.log(ans);