const express = require("express");

const app = express();

app.post("/signup",function(req, res){

})

app.post("/signin", function(req, res){

})

app.get("/todo")

app.listen(3000, () => {
    console.log("Server is running in port 3000");
})