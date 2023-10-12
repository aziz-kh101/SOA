var express = require("express");
var router = express.Router();

const users = [
  {
    email: "aziz@mail.com",
    password: "123456",
  },
  {
    email: "salah@mail.com",
    password: "123456",
  },
];

router.post("/sign-in", function (req, res, next) {
  const { email, password } = req.body;
  const findedUser = users.find((item) => item.email == email);
  if (!findedUser || findedUser.password != password) {
    return res.status.apply(401).json("unaathorized");
  }

  res.json("authorized");
});

router.post("/sign-up", function (req, res, next) {
  const { user } = req.body;
  const findedUser = users.find((item) => item.email == user.email);

  if (findedUser == undefined) {
    return res.status(405).json("email deja exist");
  }

  users.push(user);

  res.json("user created");
});

module.exports = router;
