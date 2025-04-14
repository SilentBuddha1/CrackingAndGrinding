const express = require("express");
const {UserModel, TodoModel} = require("./db");


const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    await UserModel.insert({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "Signup Succuessfully"
    })
})

app.post("/signin", function(req, res){

})

app.post("/todo", function(req, res){

})

app.get("/todos", function(req, res){

})

app.listen(3000, () => {
    console.log("Server is running in port 3000");
})