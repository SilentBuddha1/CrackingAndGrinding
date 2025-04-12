const express = require("express");
const jwt = require("jsonwebtoken");
const secret = "Learning";

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    if(users.find(u => u.username == username)){
        return res.json({
            message : "User already exists"
        })
    }

    users.push({
        username: username,
        password: password
    });
    
    res.json({
        message: "User signup...."
    })
    console.log(users);
})

app.post("/signin", function(req, res){  
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => u.username == username && u.password == password)

    if(!user){
        res.json({
            message: "User Not Found.."
        })
    }

    const token = jwt.sign({
        username: username
    }, secret);

    res.json({
        message: "Successfully Login..",
        token: token
    })
    console.log(users);

})

app.get("/me", function(req, res){
    const token = req.headers.token;
    const decript = jwt.verify(token, secret);
    const username = decript.username;
    let userFound = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].username == username){
            userFound = users[i];
        }
    }

    if(userFound){
        res.json({
            username: userFound.username,
            password: userFound.password
        })
    }else{
        res.json({
            message: "User not found"
        })
    }



});

app.listen(3000, () => {
    console.log("Server is running in port 3000");
});