const express = require("express");
const jwt = require("jsonwebtoken");
const secret = "Learning";

const app = express();

app.use(express.json());

const users = [];

function auth(req, res, next) {
  const token = req.headers.token;
  const decrypt = jwt.verify(token, secret);

  if (decrypt.username) {
    req.username = decrypt.username;
    next();
  } else {
    res.json({
      message: "You are not login",
    });
  }
}

function logger(req, res, next){
  console.log(`${req.method} request came here`);
  next();
}

app.post("/signup",logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username == username)) {
    return res.json({
      message: "User already exists",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "User signup....",
  });
  console.log(users);
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username == username && u.password == password
  );

  if (!user) {
    res.json({
      message: "User Not Found..",
    });
  }

  const token = jwt.sign(
    {
      username: username,
    },
    secret
  );

  res.json({
    message: "Successfully Login..",
    token: token,
  });
  console.log(users);
});

app.get("/me", logger, auth, function (req, res) {
  let userFound = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      userFound = users[i];
    }
  }

  res.json({
    username: userFound.username,
    password: userFound.password,
  });
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});