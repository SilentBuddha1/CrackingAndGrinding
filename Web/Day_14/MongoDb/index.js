const express = require("express");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const secret = "language";

mongoose.connect("mongodb+srv://ramchandra:PassWord2000@cluster0.bdpgiol.mongodb.net/")
const app = express();
app.use(express.json());

function auth(req, res, next){
    const token = req.headers.token;
    
    const response = jwt.verify(token, secret);

    if(response){
        req.userId = response.userId;
        next();
    }else{
        res.status(403).json({
            message: "Token is Invalided"
        })
    }
}

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "Signup Succuessfully"
    })
})

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })
    
    if(user){
        const token = jwt.sign({
            id: user._id
        }, secret);
        res.json({
            message: "You successfully signed in ",
            token: token 
        })
    }else{
        res.status(403).json({
            message: "Your credentials are not correct"
        })
    }
})

app.post("/todo",auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId: userId
    })
});

app.get("/todos",auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId: userId
    })
});

app.listen(3000, () => {
    console.log("Server is running in port 3000");
});