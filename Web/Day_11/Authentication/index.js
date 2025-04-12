const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "CrackingAndGrinding";

const app = express();

app.use(express.json());

const user = [];

// function generateToken() {
//   return Math.random().toString(36).substring(2);
// }

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if(user.find(u => u.username == username)){
    return res.json({
        message : "User already Exists..."
    });
  }

  user.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed in",
  });
  console.log(user);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const users = user.find(
    (u) => u.username === username && u.password === password
  );
  if (!users) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      username: username,
    },
    JWT_SECRET
  );

  //users.token = token;

  res.json({ message: "Signed in successfully", token });
  console.log(user);
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);
  const username = decodedInfo.username;
  let foundUser = null;

  for (let i = 0; i < user.length; i++) {
    if (user[i].username == username) {
      foundUser = user[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "Token Invalided....",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running in port 3000....");
});
